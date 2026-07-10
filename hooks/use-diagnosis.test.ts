import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useDiagnosis } from "@/hooks/use-diagnosis";

describe("useDiagnosis — 선택 빵에 따른 KB 배선", () => {
  it("selectBread('sourdough') → 노출 symptoms가 사워도우 증상이고 식빵 전용 증상이 없다", () => {
    const { result } = renderHook(() => useDiagnosis());

    act(() => result.current.selectBread("sourdough"));

    const symptomIds = result.current.symptoms.map((s) => s.id);
    expect(symptomIds).toContain("spread-flat-disc");
    expect(symptomIds).toContain("bland-flavor");
  });

  it("selectBread('white-loaf') → symptoms가 식빵 세트다 (사워도우 증상 미포함)", () => {
    const { result } = renderHook(() => useDiagnosis());

    act(() => result.current.selectBread("white-loaf"));

    const symptomIds = result.current.symptoms.map((s) => s.id);
    expect(symptomIds).not.toContain("spread-flat-disc");
    expect(symptomIds).not.toContain("bland-flavor");
  });

  it("사워도우로 진단하면 결과 원인이 사워도우 원인 세트에서만 나온다", () => {
    const { result } = renderHook(() => useDiagnosis());

    act(() => result.current.selectBread("sourdough"));
    act(() => {
      result.current.toggleSymptom("too-wet");
      result.current.toggleSymptom("spread-flat-disc");
      result.current.toggleSymptom("gummy");
    });
    act(() => result.current.runDiagnosis());

    expect(result.current.outcome?.kind).toBe("result");
    const causeNames =
      result.current.outcome?.kind === "result"
        ? result.current.outcome.causes.map((c) => c.cause.name)
        : [];
    expect(causeNames[0]).toBe("수분 과다");
    expect(causeNames).not.toContain("이스트 문제");
  });

  it("진단·결과 화면 범위 고지 이름이 선택 빵에 따라 달라진다", () => {
    const { result } = renderHook(() => useDiagnosis());

    act(() => result.current.selectBread("sourdough"));
    expect(result.current.selectedBreadName).toBe("사워도우");
  });

  it("빵 다시 고르기 → 선택 빵·증상·결과가 모두 초기화되고 bread 스텝으로 돌아간다", () => {
    const { result } = renderHook(() => useDiagnosis());

    act(() => result.current.selectBread("sourdough"));
    act(() => result.current.toggleSymptom("no-rise"));
    act(() => result.current.runDiagnosis());

    act(() => result.current.changeBread());

    expect(result.current.step).toBe("bread");
    expect(result.current.selectedBreadId).toBeNull();
    expect(result.current.selectedSymptomIds).toEqual([]);
    expect(result.current.outcome).toBeNull();
  });
});
