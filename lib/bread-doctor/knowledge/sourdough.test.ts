import { describe, expect, it } from "vitest";
import { diagnose } from "@/lib/bread-doctor/scoring";
import { SOURDOUGH } from "@/lib/bread-doctor/knowledge/sourdough";
import type { BreadKnowledge, DiagnosisOutcome } from "@/types/bread-doctor";

function topCauseName(knowledge: BreadKnowledge, symptomIds: string[]): string | undefined {
  const outcome = diagnose(symptomIds, {
    causes: knowledge.causes,
    associations: knowledge.associations,
    questions: knowledge.questions,
  });
  return (outcome as Extract<DiagnosisOutcome, { kind: "result" }>).causes[0]
    ?.cause.name;
}

describe("사워도우 — 매트릭스 결론의 대표 PEAKED 조합 재현", () => {
  it("안부풂+속떡짐+신맛없음 → 1순위 스타터 활성 부족/미성숙", () => {
    expect(
      topCauseName(SOURDOUGH, ["no-rise", "gummy", "bland-flavor"]),
    ).toBe("스타터 활성 부족/미성숙");
  });

  it("주저앉음+신맛+옆으로퍼짐 → 1순위 스타터 과숙성/과활성", () => {
    expect(
      topCauseName(SOURDOUGH, ["collapsed", "sour-smell", "spread-flat-disc"]),
    ).toBe("스타터 과숙성/과활성");
  });

  it("겉탐속덜익음+두꺼운겉 → 1순위 오븐 온도가 높음", () => {
    expect(
      topCauseName(SOURDOUGH, ["burnt-outside-raw-inside", "thick-crust"]),
    ).toBe("오븐 온도가 높음");
  });

  it("associations가 자기 빵의 원인·증상만 참조한다", () => {
    const causeIds = new Set(SOURDOUGH.causes.map((c) => c.id));
    const symptomIds = new Set(SOURDOUGH.symptoms.map((s) => s.id));
    for (const association of SOURDOUGH.associations) {
      expect(causeIds.has(association.causeId)).toBe(true);
      expect(symptomIds.has(association.symptomId)).toBe(true);
    }
  });
});
