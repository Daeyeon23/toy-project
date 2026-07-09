import { describe, expect, it } from "vitest";
import { filterSymptoms } from "@/lib/bread-doctor/search";

describe("filterSymptoms", () => {
  it("떡져요 입력 → 속이 떡짐/질음만 남고 무관한 증상은 제외된다", () => {
    const result = filterSymptoms("떡져요");

    expect(result.map((s) => s.label)).toEqual(["속이 떡짐 / 질음"]);
  });

  it("사전에 없는 검색어(우주선) → 빈 결과", () => {
    const result = filterSymptoms("우주선");

    expect(result).toEqual([]);
  });

  it("검색어가 없으면 전체 목록을 반환한다", () => {
    const result = filterSymptoms("");

    expect(result.length).toBeGreaterThan(1);
  });
});
