import { describe, expect, it } from "vitest";
import { diagnose } from "@/lib/bread-doctor/scoring";
import { RYE_BREAD } from "@/lib/bread-doctor/knowledge/rye-bread";
import { PUMPERNICKEL } from "@/lib/bread-doctor/knowledge/pumpernickel";
import { CROISSANT } from "@/lib/bread-doctor/knowledge/croissant";
import { DANISH_PASTRY } from "@/lib/bread-doctor/knowledge/danish-pastry";
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

describe("호밀+라미네이션 4종 — 매트릭스 결론의 대표 PEAKED 조합 재현", () => {
  it("호밀빵: 안부풂+속떡짐+옆구리터짐 → 1순위 발효 부족", () => {
    expect(topCauseName(RYE_BREAD, ["no-rise", "gummy", "blowout"])).toBe("발효 부족");
  });

  it("펌퍼니클: 겉면갈라짐+두꺼운겉 → 1순위 증기 부족으로 겉면이 갈라짐", () => {
    expect(
      topCauseName(PUMPERNICKEL, ["crust-alligator-cracking", "thick-crust"]),
    ).toBe("증기 부족으로 겉면이 갈라짐");
  });

  it("크루아상: 버터가샘+층안보임+기름진식감 → 1순위 버터가 물러지거나 녹음", () => {
    expect(
      topCauseName(CROISSANT, ["lam-butter-leak", "lam-flat-no-layers", "lam-greasy-texture"]),
    ).toBe("라미네이션·성형·최종발효 중 버터가 물러지거나 일부 녹음");
  });

  it("크루아상 KB의 증상 세트에 lam-* 증상이 있고 식빵 전용 증상(옆구리터짐 외)은 없다 (Scenario 0-A)", () => {
    const symptomIds = CROISSANT.symptoms.map((s) => s.id);
    expect(symptomIds).toContain("lam-flat-no-layers");
    expect(symptomIds).toContain("lam-butter-leak");
    expect(symptomIds).not.toContain("blowout");
    expect(symptomIds).not.toContain("too-wet");
  });

  it("데니시 페이스트리: 층안보임+버터가샘+기름진식감 → 1순위 버터가 물러지거나 녹음", () => {
    expect(
      topCauseName(DANISH_PASTRY, [
        "lam-flat-no-layers",
        "lam-butter-leak",
        "lam-greasy-texture",
      ]),
    ).toBe("라미네이션·성형·최종발효 중 버터가 물러지거나 일부 녹음");
  });

  it("4종 모두 associations가 자기 빵의 원인·증상만 참조한다", () => {
    for (const knowledge of [RYE_BREAD, PUMPERNICKEL, CROISSANT, DANISH_PASTRY]) {
      const causeIds = new Set(knowledge.causes.map((c) => c.id));
      const symptomIds = new Set(knowledge.symptoms.map((s) => s.id));
      for (const association of knowledge.associations) {
        expect(causeIds.has(association.causeId)).toBe(true);
        expect(symptomIds.has(association.symptomId)).toBe(true);
      }
    }
  });
});
