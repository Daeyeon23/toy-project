import { describe, expect, it } from "vitest";
import { diagnose } from "@/lib/bread-doctor/scoring";
import { BOUCHEE } from "@/lib/bread-doctor/knowledge/bouchee";
import { CHIFFON_CAKE } from "@/lib/bread-doctor/knowledge/chiffon-cake";
import { QUICK_MUFFIN } from "@/lib/bread-doctor/knowledge/quick-muffin";
import { CHOUX } from "@/lib/bread-doctor/knowledge/choux";
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

describe("제과류 파일럿 B(붓세·시폰케이크·머핀(퀵브레드)·슈) — 매트릭스 결론의 대표 PEAKED 조합 재현", () => {
  it("붓세: 중앙꺼짐+주저앉음 → 1순위 오븐을 일찍 엶", () => {
    expect(
      topCauseName(BOUCHEE, ["spg-sunken-center", "collapsed"]),
    ).toBe("굽는 도중 오븐을 일찍 엶");
  });

  it("붓세: 퍼석함 단독 → 1순위 과다 굽기", () => {
    expect(topCauseName(BOUCHEE, ["spg-dry-crumbly"])).toBe(
      "과다하게 구워 수분이 날아감",
    );
  });

  it("시폰케이크: 윗면갈라짐 단독 → 1순위 오븐 온도가 높음", () => {
    expect(topCauseName(CHIFFON_CAKE, ["chif-cracked-top"])).toBe(
      "오븐 온도가 높음",
    );
  });

  it("시폰케이크: 젤리층+주저앉음 → 1순위 덜 구움", () => {
    expect(
      topCauseName(CHIFFON_CAKE, ["chif-gummy-layer", "collapsed"]),
    ).toBe("덜 구워 속에 수분이 남음");
  });

  it("머핀(퀵브레드): 터널링+질김 → 1순위 과교반", () => {
    expect(
      topCauseName(QUICK_MUFFIN, ["qmuf-tunneling", "qmuf-tough-chewy"]),
    ).toBe("과교반으로 글루텐이 과다 발달함");
  });

  it("머핀(퀵브레드): 겉만탐 단독 → 1순위 오븐 온도가 높음", () => {
    expect(topCauseName(QUICK_MUFFIN, ["burnt-outside-raw-inside"])).toBe(
      "오븐 온도가 높음",
    );
  });

  it("슈: 퍼짐 단독 → 1순위 달걀 과다", () => {
    expect(topCauseName(CHOUX, ["choux-spread-flat"])).toBe(
      "달걀을 과다 투입해 반죽이 너무 묽음",
    );
  });

  it("슈: 부풀었다가꺼짐 단독 → 1순위 덜 말리고 꺼냄", () => {
    expect(topCauseName(CHOUX, ["choux-collapsed-deflated"])).toBe(
      "다 구운 뒤 충분히 말리지 않고 꺼냄",
    );
  });

  it("qmuf- 코드가 기존 빵의 quick- 코드와 문자열이 겹치지 않는다", () => {
    const qmufIds = [
      ...QUICK_MUFFIN.causes.map((c) => c.id),
      ...QUICK_MUFFIN.symptoms.map((s) => s.id),
    ];
    for (const id of qmufIds) {
      if (id.startsWith("qmuf-")) {
        expect(id.startsWith("quick-")).toBe(false);
      }
    }
  });

  it("4종 모두 associations가 자기 품목의 원인·증상만 참조한다", () => {
    for (const knowledge of [BOUCHEE, CHIFFON_CAKE, QUICK_MUFFIN, CHOUX]) {
      const causeIds = new Set(knowledge.causes.map((c) => c.id));
      const symptomIds = new Set(knowledge.symptoms.map((s) => s.id));
      for (const association of knowledge.associations) {
        expect(causeIds.has(association.causeId)).toBe(true);
        expect(symptomIds.has(association.symptomId)).toBe(true);
      }
    }
  });
});
