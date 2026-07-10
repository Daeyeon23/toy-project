import { describe, expect, it } from "vitest";
import { diagnose } from "@/lib/bread-doctor/scoring";
import { BAGUETTE } from "@/lib/bread-doctor/knowledge/baguette";
import { CIABATTA } from "@/lib/bread-doctor/knowledge/ciabatta";
import { FOCACCIA } from "@/lib/bread-doctor/knowledge/focaccia";
import { PAIN_DE_CAMPAGNE } from "@/lib/bread-doctor/knowledge/pain-de-campagne";
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

describe("린도우 4종 — 매트릭스 결론의 대표 PEAKED 조합 재현", () => {
  it("바게트: 안부풂+속떡짐+옆구리터짐 → 1순위 발효 부족", () => {
    expect(
      topCauseName(BAGUETTE, ["no-rise", "gummy", "blowout"]),
    ).toBe("발효 부족");
  });

  it("치아바타: 안부풂+속떡짐+불규칙하게터짐 → 1순위 발효 부족", () => {
    expect(
      topCauseName(CIABATTA, ["no-rise", "gummy", "blowout"]),
    ).toBe("발효 부족");
  });

  it("포카치아: 겉탐속덜익음+두꺼운겉 → 1순위 오븐 온도가 높음", () => {
    expect(
      topCauseName(FOCACCIA, ["burnt-outside-raw-inside", "thick-crust"]),
    ).toBe("오븐 온도가 높음");
  });

  it("팽 드 캄파뉴: 안부풂+속떡짐+옆구리터짐 → 1순위 발효 부족", () => {
    expect(
      topCauseName(PAIN_DE_CAMPAGNE, ["no-rise", "gummy", "blowout"]),
    ).toBe("발효 부족");
  });

  it("4종 모두 associations가 자기 빵의 원인·증상만 참조한다", () => {
    for (const knowledge of [BAGUETTE, CIABATTA, FOCACCIA, PAIN_DE_CAMPAGNE]) {
      const causeIds = new Set(knowledge.causes.map((c) => c.id));
      const symptomIds = new Set(knowledge.symptoms.map((s) => s.id));
      for (const association of knowledge.associations) {
        expect(causeIds.has(association.causeId)).toBe(true);
        expect(symptomIds.has(association.symptomId)).toBe(true);
      }
    }
  });
});
