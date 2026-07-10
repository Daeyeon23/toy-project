import { describe, expect, it } from "vitest";
import { CORE_CAUSES, CORE_SYMPTOMS, findLabelConflicts } from "@/lib/bread-doctor/knowledge/_core";

describe("CORE_CAUSES / CORE_SYMPTOMS — 식빵 회귀 전제", () => {
  it("CORE_CAUSES id가 정확히 9개이고 식빵 v1 원인 id와 일치한다", () => {
    expect(CORE_CAUSES.map((c) => c.id).sort()).toEqual(
      [
        "yeast-dead",
        "underproof",
        "overproof",
        "cold-environment",
        "weak-gluten",
        "oven-too-hot",
        "oven-too-cool",
        "excess-hydration",
        "excess-salt",
      ].sort(),
    );
  });

  it("CORE_SYMPTOMS id가 정확히 10개이고 식빵 v1 증상 id와 일치한다", () => {
    expect(CORE_SYMPTOMS.map((s) => s.id).sort()).toEqual(
      [
        "no-rise",
        "collapsed",
        "gummy",
        "burnt-outside-raw-inside",
        "pale",
        "blowout",
        "large-holes",
        "too-wet",
        "thick-crust",
        "sour-smell",
      ].sort(),
    );
  });
});

describe("findLabelConflicts", () => {
  it("같은 id·같은 라벨이 여러 번 나와도 충돌이 아니다", () => {
    const conflicts = findLabelConflicts([
      { id: "a", label: "라벨A" },
      { id: "a", label: "라벨A" },
      { id: "b", label: "라벨B" },
    ]);

    expect(conflicts).toEqual([]);
  });

  it("같은 id에 서로 다른 라벨이 있으면 충돌로 보고한다", () => {
    const conflicts = findLabelConflicts([
      { id: "a", label: "라벨A" },
      { id: "a", label: "다른라벨" },
    ]);

    expect(conflicts).toEqual([{ id: "a", labels: ["라벨A", "다른라벨"] }]);
  });

  it("빈 입력은 충돌 없음을 반환한다", () => {
    expect(findLabelConflicts([])).toEqual([]);
  });
});
