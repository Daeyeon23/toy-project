import { describe, expect, it } from "vitest";
import { diagnose } from "@/lib/bread-doctor/scoring";
import { FINANCIER } from "@/lib/bread-doctor/knowledge/financier";
import { BROWNIE } from "@/lib/bread-doctor/knowledge/brownie";
import { TART } from "@/lib/bread-doctor/knowledge/tart";
import { MACARON } from "@/lib/bread-doctor/knowledge/macaron";
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

describe("제과류 파일럿 A(휘낭시에·브라우니·타르트·마카롱) — 매트릭스 결론의 대표 PEAKED 조합 재현", () => {
  it("휘낭시에: 질기고 고무같음+조밀 → 1순위 과교반", () => {
    expect(
      topCauseName(FINANCIER, ["fin-tough-rubbery", "fin-flat-dense"]),
    ).toBe("흰자·가루를 섞을 때 과교반해 글루텐이 발달하고 공기가 빠짐");
  });

  it("휘낭시에: 색안남+조밀 → 1순위 오븐 온도가 낮음", () => {
    expect(topCauseName(FINANCIER, ["pale", "fin-flat-dense"])).toBe(
      "오븐 온도가 낮음",
    );
  });

  it("브라우니: 설익음+크래클없음 → 1순위 덜 구움", () => {
    expect(
      topCauseName(BROWNIE, ["brn-gooey-underset", "brn-no-shiny-crust"]),
    ).toBe("덜 구움");
  });

  it("브라우니: 기름분리 단독 → 1순위 초콜릿 유화 실패", () => {
    expect(topCauseName(BROWNIE, ["brn-greasy-separated"])).toBe(
      "초콜릿·버터 유화 실패(과열 또는 수분 혼입으로 뭉침)",
    );
  });

  it("타르트: 바닥부풀음 단독 → 1순위 파이 웨이트 부재", () => {
    expect(topCauseName(TART, ["tart-puffed-bottom"])).toBe(
      "프리베이킹 시 파이 웨이트(무게추) 없이 또는 부족하게 구움",
    );
  });

  it("타르트: 눅눅한바닥+창백한바닥 → 1순위 프리베이킹 부족", () => {
    expect(
      topCauseName(TART, ["tart-soggy-bottom", "tart-pale-bottom"]),
    ).toBe("프리베이킹이 부족해 셸 자체가 덜 구워짐");
  });

  it("마카롱: 납작하게퍼짐+삐에없음 → 1순위 마카로나주 과다", () => {
    expect(
      topCauseName(MACARON, ["mac-spread-flat", "mac-no-feet"]),
    ).toBe("마카로나주가 과해 반죽이 묽어짐");
  });

  it("마카롱: 끈적임 단독 → 1순위 스킨 형성 시간 부족", () => {
    expect(topCauseName(MACARON, ["mac-sticky-undried"])).toBe(
      "굽기 전 표면 건조(스킨 형성) 시간이 부족함",
    );
  });

  it("마카롱으로 진단한 결과에는 마카롱 원인만 나온다 (품목 경계 격리 — 빵 원인 미혼입)", () => {
    const outcome = diagnose(["mac-spread-flat", "mac-no-feet"], {
      causes: MACARON.causes,
      associations: MACARON.associations,
      questions: MACARON.questions,
    }) as Extract<DiagnosisOutcome, { kind: "result" }>;

    const macaronCauseNames = new Set(MACARON.causes.map((c) => c.name));
    for (const result of outcome.causes) {
      expect(macaronCauseNames.has(result.cause.name)).toBe(true);
    }
    expect(outcome.causes.map((c) => c.cause.name)).not.toContain("이스트 문제");
  });

  it("4종 모두 associations가 자기 품목의 원인·증상만 참조한다", () => {
    for (const knowledge of [FINANCIER, BROWNIE, TART, MACARON]) {
      const causeIds = new Set(knowledge.causes.map((c) => c.id));
      const symptomIds = new Set(knowledge.symptoms.map((s) => s.id));
      for (const association of knowledge.associations) {
        expect(causeIds.has(association.causeId)).toBe(true);
        expect(symptomIds.has(association.symptomId)).toBe(true);
      }
    }
  });
});
