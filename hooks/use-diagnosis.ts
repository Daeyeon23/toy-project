"use client";

import { useCallback, useState } from "react";
import { BREAD_TYPES } from "@/config/bread-doctor";
import { getBreadKnowledge } from "@/lib/bread-doctor/knowledge-base";
import { answerQuestion, diagnose } from "@/lib/bread-doctor/scoring";
import type { BreadType, DiagnosisOutcome, Symptom } from "@/types/bread-doctor";

// TODO(Task 3): 식빵으로 고정된 KB 조회를 selectedBreadId 기반으로 교체한다.
const WHITE_LOAF = getBreadKnowledge("white-loaf");

export type Step = "bread" | "symptoms" | "question" | "result";

export interface UseDiagnosisResult {
  step: Step;
  breadTypes: BreadType[];
  symptoms: Symptom[];
  selectedSymptomIds: string[];
  outcome: DiagnosisOutcome | null;
  selectBread: (breadTypeId: string) => void;
  toggleSymptom: (symptomId: string) => void;
  runDiagnosis: () => void;
  answerDiscriminatorQuestion: (answer: "yes" | "no" | "skip") => void;
  restart: () => void;
}

/** 브레드 닥터의 스텝 머신 — 빵 선택부터 결과까지 흐름을 소유한다. */
export function useDiagnosis(): UseDiagnosisResult {
  const [step, setStep] = useState<Step>("bread");
  const [selectedSymptomIds, setSelectedSymptomIds] = useState<string[]>([]);
  const [outcome, setOutcome] = useState<DiagnosisOutcome | null>(null);
  const [questionsAskedCount, setQuestionsAskedCount] = useState(0);

  const selectBread = useCallback(() => {
    setStep("symptoms");
  }, []);

  const toggleSymptom = useCallback((symptomId: string) => {
    setSelectedSymptomIds((prev) =>
      prev.includes(symptomId)
        ? prev.filter((id) => id !== symptomId)
        : [...prev, symptomId],
    );
  }, []);

  const runDiagnosis = useCallback(() => {
    if (selectedSymptomIds.length === 0) return;
    const result = diagnose(selectedSymptomIds, {
      causes: WHITE_LOAF.causes,
      associations: WHITE_LOAF.associations,
      questions: WHITE_LOAF.questions,
      questionsAskedCount,
    });
    setOutcome(result);
    setStep(result.kind === "question" ? "question" : "result");
  }, [selectedSymptomIds, questionsAskedCount]);

  const answerDiscriminatorQuestion = useCallback(
    (answer: "yes" | "no" | "skip") => {
      if (outcome?.kind !== "question") return;
      setOutcome(answerQuestion(outcome, answer));
      setQuestionsAskedCount((count) => count + 1);
      setStep("result");
    },
    [outcome],
  );

  const restart = useCallback(() => {
    setSelectedSymptomIds([]);
    setOutcome(null);
    setQuestionsAskedCount(0);
    setStep("symptoms");
  }, []);

  return {
    step,
    breadTypes: BREAD_TYPES,
    symptoms: WHITE_LOAF.symptoms,
    selectedSymptomIds,
    outcome,
    selectBread,
    toggleSymptom,
    runDiagnosis,
    answerDiscriminatorQuestion,
    restart,
  };
}
