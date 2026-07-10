import { describe, expect, it } from "vitest";
import { filterSymptoms } from "@/lib/bread-doctor/search";
import { WHITE_LOAF } from "@/lib/bread-doctor/knowledge/white-loaf";

describe("filterSymptoms", () => {
  it("떡져요 입력 → 속이 떡짐/질음만 남고 무관한 증상은 제외된다", () => {
    const result = filterSymptoms("떡져요", WHITE_LOAF.symptoms, WHITE_LOAF.synonyms);

    expect(result.map((s) => s.label)).toEqual(["속이 떡짐 / 질음"]);
  });

  it("사전에 없는 검색어(우주선) → 빈 결과", () => {
    const result = filterSymptoms("우주선", WHITE_LOAF.symptoms, WHITE_LOAF.synonyms);

    expect(result).toEqual([]);
  });

  it("검색어가 없으면 전체 목록을 반환한다", () => {
    const result = filterSymptoms("", WHITE_LOAF.symptoms, WHITE_LOAF.synonyms);

    expect(result.length).toBeGreaterThan(1);
  });
});
