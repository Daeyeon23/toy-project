import { describe, expect, it } from "vitest";
import { diagnose } from "@/lib/bread-doctor/scoring";
import { SCONE } from "@/lib/bread-doctor/knowledge/scone";
import { SODA_BREAD } from "@/lib/bread-doctor/knowledge/soda-bread";
import { CORNBREAD } from "@/lib/bread-doctor/knowledge/cornbread";
import { BAGEL } from "@/lib/bread-doctor/knowledge/bagel";
import { PRETZEL } from "@/lib/bread-doctor/knowledge/pretzel";
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

describe("화학팽창+보일링 5종 — 매트릭스 결론의 대표 PEAKED 조합 재현", () => {
  it("스콘: 비누맛+기공큼 → 1순위 베이킹파우더/소다 과다·산-염기 불균형", () => {
    expect(topCauseName(SCONE, ["off-taste-soapy", "large-holes"])).toBe(
      "베이킹파우더/소다 과다·산-염기 불균형",
    );
  });

  it("소다빵: 겉탐속덜익음+두꺼운겉 → 1순위 오븐 온도가 높음", () => {
    expect(
      topCauseName(SODA_BREAD, ["burnt-outside-raw-inside", "thick-crust"]),
    ).toBe("오븐 온도가 높음");
  });

  it("콘브레드: 비누맛+기공큼(터널) → 1순위 베이킹파우더/소다 과다·산-염기 불균형", () => {
    expect(topCauseName(CORNBREAD, ["off-taste-soapy", "large-holes"])).toBe(
      "베이킹파우더/소다 과다·산-염기 불균형",
    );
  });

  it("베이글: 안부풂+속떡짐 → 1순위 발효 부족", () => {
    expect(topCauseName(BAGEL, ["no-rise", "gummy"])).toBe("발효 부족");
  });

  it("프레첼: 윤기없음+창백함 → 1순위 보일링/담금 시간 부족", () => {
    expect(topCauseName(PRETZEL, ["pretzel-no-sheen", "pale"])).toBe(
      "보일링/담금 시간 부족",
    );
  });

  it("quick-* 신규 코드가 scone/soda-bread/cornbread 3종에 걸쳐 동일 이름으로 재사용된다", () => {
    for (const id of ["quick-leavener-dead", "quick-leavener-excess", "quick-overmixed", "quick-under-hydrated"]) {
      const names = [SCONE, SODA_BREAD, CORNBREAD]
        .map((k) => k.causes.find((c) => c.id === id)?.name)
        .filter(Boolean);
      expect(new Set(names).size).toBe(1);
    }
  });

  it("boil-* 신규 코드가 bagel/pretzel 2종에 걸쳐 동일 이름으로 재사용된다", () => {
    for (const id of ["boil-underboiled", "boil-overboiled", "boil-lye-issue"]) {
      const names = [BAGEL, PRETZEL]
        .map((k) => k.causes.find((c) => c.id === id)?.name)
        .filter(Boolean);
      expect(new Set(names).size).toBe(1);
    }
  });

  it("5종 모두 associations가 자기 빵의 원인·증상만 참조한다", () => {
    for (const knowledge of [SCONE, SODA_BREAD, CORNBREAD, BAGEL, PRETZEL]) {
      const causeIds = new Set(knowledge.causes.map((c) => c.id));
      const symptomIds = new Set(knowledge.symptoms.map((s) => s.id));
      for (const association of knowledge.associations) {
        expect(causeIds.has(association.causeId)).toBe(true);
        expect(symptomIds.has(association.symptomId)).toBe(true);
      }
    }
  });

  it("발효 CORE 코드(yeast-dead/underproof/overproof)가 화학팽창 3종 KB에 포함되지 않는다", () => {
    for (const knowledge of [SCONE, SODA_BREAD, CORNBREAD]) {
      const causeIds = knowledge.causes.map((c) => c.id);
      expect(causeIds).not.toContain("yeast-dead");
      expect(causeIds).not.toContain("underproof");
      expect(causeIds).not.toContain("overproof");
    }
  });
});
