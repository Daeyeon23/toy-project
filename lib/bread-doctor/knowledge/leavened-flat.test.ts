import { describe, expect, it } from "vitest";
import { diagnose } from "@/lib/bread-doctor/scoring";
import { PIZZA_DOUGH } from "@/lib/bread-doctor/knowledge/pizza-dough";
import { NAAN } from "@/lib/bread-doctor/knowledge/naan";
import { PITA } from "@/lib/bread-doctor/knowledge/pita";
import { ENGLISH_MUFFIN } from "@/lib/bread-doctor/knowledge/english-muffin";
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

describe("발효 플랫브레드 4종 — 매트릭스 결론의 대표 PEAKED 조합 재현", () => {
  it("피자 도우: 큰기포+신맛 → 1순위 과발효", () => {
    expect(topCauseName(PIZZA_DOUGH, ["large-holes", "sour-smell"])).toBe("과발효");
  });

  it("난: 겉탐속덜익음+속떡짐 → 1순위 그리들/팬 화력 과다", () => {
    expect(
      topCauseName(NAAN, ["burnt-outside-raw-inside", "gummy"]),
    ).toBe("그리들/팬 화력 과다");
  });

  it("피타: 두꺼움딱딱+갈라짐 → 1순위 반죽이 대기 중 마름", () => {
    expect(topCauseName(PITA, ["thick-crust", "flat-dry-cracked"])).toBe(
      "반죽이 대기 중 마름",
    );
  });

  it("잉글리시 머핀: 주저앉음+신맛 → 1순위 과발효", () => {
    expect(topCauseName(ENGLISH_MUFFIN, ["collapsed", "sour-smell"])).toBe("과발효");
  });

  it("난↔잉글리시머핀 공유 그리들 코드가 두 빵에서 동일 이름으로 동작한다", () => {
    for (const id of ["flat-griddle-too-hot", "flat-griddle-too-cool"]) {
      const names = [NAAN, ENGLISH_MUFFIN]
        .map((k) => k.causes.find((c) => c.id === id)?.name)
        .filter(Boolean);
      expect(new Set(names).size).toBe(1);
    }
  });

  it("피자도우↔피타 공유 flat-cold-baking-surface가 동일 이름으로 재사용된다", () => {
    const names = [PIZZA_DOUGH, PITA]
      .map((k) => k.causes.find((c) => c.id === "flat-cold-baking-surface")?.name)
      .filter(Boolean);
    expect(new Set(names).size).toBe(1);
  });

  it("4종 모두 associations가 자기 빵의 원인·증상만 참조한다", () => {
    for (const knowledge of [PIZZA_DOUGH, NAAN, PITA, ENGLISH_MUFFIN]) {
      const causeIds = new Set(knowledge.causes.map((c) => c.id));
      const symptomIds = new Set(knowledge.symptoms.map((s) => s.id));
      for (const association of knowledge.associations) {
        expect(causeIds.has(association.causeId)).toBe(true);
        expect(symptomIds.has(association.symptomId)).toBe(true);
      }
    }
  });
});
