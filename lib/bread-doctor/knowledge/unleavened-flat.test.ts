import { describe, expect, it } from "vitest";
import { diagnose } from "@/lib/bread-doctor/scoring";
import { TORTILLA } from "@/lib/bread-doctor/knowledge/tortilla";
import { LAVASH } from "@/lib/bread-doctor/knowledge/lavash";
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

describe("무발효 플랫브레드 2종 — 매트릭스 결론의 대표 PEAKED 조합 재현", () => {
  it("토르티야: 찢어짐+오그라듦 → 1순위 반죽 휴지 부족", () => {
    expect(
      topCauseName(TORTILLA, ["flat-tears-rolling", "flat-shrinks-back"]),
    ).toBe("반죽 휴지 부족");
  });

  it("토르티야: 창백+기포없음 → 1순위 오븐 온도가 낮음(팬 예열 부족)", () => {
    expect(topCauseName(TORTILLA, ["pale", "flat-no-bubbles"])).toBe(
      "오븐 온도가 낮음",
    );
  });

  it("라바쉬: 겉탐속덜익음+두껍고찐득 → 1순위 두께 불균일/과다", () => {
    expect(
      topCauseName(LAVASH, ["burnt-outside-raw-inside", "flat-doughy-thick"]),
    ).toBe("두께 불균일/과다");
  });

  it("라바쉬: 말라부서짐+질기고뻣뻣 → 1순위 수분 부족", () => {
    expect(topCauseName(LAVASH, ["flat-dry-brittle", "flat-tough-chewy"])).toBe(
      "수분 부족",
    );
  });

  it("tortilla↔lavash 공유 flat-* 코드가 동일 이름으로 재사용된다", () => {
    for (const id of ["flat-underrest", "flat-underhydrated", "flat-uneven-thickness"]) {
      const causeNames = [TORTILLA, LAVASH]
        .map((k) => k.causes.find((c) => c.id === id)?.name)
        .filter(Boolean);
      expect(new Set(causeNames).size).toBe(1);
    }
    for (const id of [
      "flat-tears-rolling",
      "flat-shrinks-back",
      "flat-no-bubbles",
      "flat-tough-chewy",
      "flat-dry-brittle",
      "flat-doughy-thick",
    ]) {
      const symptomLabels = [TORTILLA, LAVASH]
        .map((k) => k.symptoms.find((s) => s.id === id)?.label)
        .filter(Boolean);
      expect(new Set(symptomLabels).size).toBe(1);
    }
  });

  it("발효 CORE 코드(yeast-dead/underproof/overproof/cold-environment)가 두 빵 KB에 포함되지 않는다", () => {
    for (const knowledge of [TORTILLA, LAVASH]) {
      const causeIds = knowledge.causes.map((c) => c.id);
      expect(causeIds).not.toContain("yeast-dead");
      expect(causeIds).not.toContain("underproof");
      expect(causeIds).not.toContain("overproof");
      expect(causeIds).not.toContain("cold-environment");
    }
  });

  it("2종 모두 associations가 자기 빵의 원인·증상만 참조한다", () => {
    for (const knowledge of [TORTILLA, LAVASH]) {
      const causeIds = new Set(knowledge.causes.map((c) => c.id));
      const symptomIds = new Set(knowledge.symptoms.map((s) => s.id));
      for (const association of knowledge.associations) {
        expect(causeIds.has(association.causeId)).toBe(true);
        expect(symptomIds.has(association.symptomId)).toBe(true);
      }
    }
  });
});
