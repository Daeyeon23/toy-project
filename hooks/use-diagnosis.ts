"use client";

import { useCallback, useState } from "react";
import { BREAD_TYPES } from "@/config/bread-doctor";
import type { BreadType } from "@/types/bread-doctor";

export type Step = "bread" | "symptoms" | "question" | "result";

export interface UseDiagnosisResult {
  step: Step;
  breadTypes: BreadType[];
  selectBread: (breadTypeId: string) => void;
}

/** 브레드 닥터의 스텝 머신 — 빵 선택부터 결과까지 흐름을 소유한다. */
export function useDiagnosis(): UseDiagnosisResult {
  const [step, setStep] = useState<Step>("bread");

  const selectBread = useCallback(() => {
    setStep("symptoms");
  }, []);

  return { step, breadTypes: BREAD_TYPES, selectBread };
}
