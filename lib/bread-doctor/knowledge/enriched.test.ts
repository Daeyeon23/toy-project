import { describe, expect, it } from "vitest";
import { diagnose } from "@/lib/bread-doctor/scoring";
import { BRIOCHE } from "@/lib/bread-doctor/knowledge/brioche";
import { PANETTONE } from "@/lib/bread-doctor/knowledge/panettone";
import { MILK_BREAD } from "@/lib/bread-doctor/knowledge/milk-bread";
import { ANPAN } from "@/lib/bread-doctor/knowledge/anpan";
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

describe("enriched 4종 — 매트릭스 결론의 대표 PEAKED 조합 재현", () => {
  it("브리오슈: 무겁고조밀+기름줄무늬+주저앉음 → 1순위 버터 분리/유출", () => {
    expect(
      topCauseName(BRIOCHE, ["enr-dense-heavy", "enr-greasy-streaky", "collapsed"]),
    ).toBe("버터 분리/유출 (butter leak)");
  });

  it("파네토네: 기공큼+신맛+안부풂 → 1순위 과발효", () => {
    expect(topCauseName(PANETTONE, ["large-holes", "sour-smell", "no-rise"])).toBe(
      "과발효",
    );
  });

  it("밀크빵: 빨리마름+너무질음+떡짐 → 1순위 탕종 비율/온도 실패", () => {
    expect(
      topCauseName(MILK_BREAD, ["enr-stales-fast", "too-wet", "gummy"]),
    ).toBe("탕종 비율/온도 실패 (과·소 조리, 생략)");
  });

  it("단팥빵: 팥소누출+주저앉음 → 1순위 필링(팥소) 누출/터짐", () => {
    expect(topCauseName(ANPAN, ["enr-filling-oozes", "collapsed"])).toBe(
      "필링(팥소) 누출/터짐",
    );
  });

  it("단팥빵: 필링주변눅눅+무겁고조밀 → 1순위 필링 비율/배치 과다", () => {
    expect(
      topCauseName(ANPAN, ["enr-soggy-around-filling", "enr-dense-heavy"]),
    ).toBe("필링 비율/배치 과다");
  });

  it("enr-heavy-crumb/enr-dense-heavy가 4종에 걸쳐 동일 이름으로 재사용된다", () => {
    const heavyCrumbCauses = [BRIOCHE, PANETTONE, MILK_BREAD]
      .map((k) => k.causes.find((c) => c.id === "enr-heavy-crumb")?.name)
      .filter(Boolean);
    expect(new Set(heavyCrumbCauses).size).toBe(1);

    const denseHeavySymptoms = [BRIOCHE, PANETTONE, MILK_BREAD, ANPAN]
      .map((k) => k.symptoms.find((s) => s.id === "enr-dense-heavy")?.label)
      .filter(Boolean);
    expect(new Set(denseHeavySymptoms).size).toBe(1);
  });

  it("4종 모두 associations가 자기 빵의 원인·증상만 참조한다", () => {
    for (const knowledge of [BRIOCHE, PANETTONE, MILK_BREAD, ANPAN]) {
      const causeIds = new Set(knowledge.causes.map((c) => c.id));
      const symptomIds = new Set(knowledge.symptoms.map((s) => s.id));
      for (const association of knowledge.associations) {
        expect(causeIds.has(association.causeId)).toBe(true);
        expect(symptomIds.has(association.symptomId)).toBe(true);
      }
    }
  });
});
