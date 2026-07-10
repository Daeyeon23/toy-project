"use client";

import { useCallback, useMemo, useState } from "react";
import { BREAD_TYPES } from "@/config/bread-doctor";
import { getBreadKnowledge } from "@/lib/bread-doctor/knowledge-base";
import { answerQuestion, diagnose } from "@/lib/bread-doctor/scoring";
import type {
  BreadType,
  DiagnosisOutcome,
  SynonymEntry,
  Symptom,
} from "@/types/bread-doctor";

export type Step = "bread" | "symptoms" | "question" | "result";

export interface UseDiagnosisResult {
  step: Step;
  breadTypes: BreadType[];
  selectedBreadId: string | null;
  selectedBreadName: string | null;
  symptoms: Symptom[];
  synonyms: SynonymEntry[];
  selectedSymptomIds: string[];
  outcome: DiagnosisOutcome | null;
  selectBread: (breadTypeId: string) => void;
  toggleSymptom: (symptomId: string) => void;
  runDiagnosis: () => void;
  answerDiscriminatorQuestion: (answer: "yes" | "no" | "skip") => void;
  restart: () => void;
  changeBread: () => void;
}

/** 브레드 닥터의 스텝 머신 — 빵 선택부터 결과까지 흐름과 선택된 빵의 KB 주입을 소유한다. */
export function useDiagnosis(): UseDiagnosisResult {
  const [step, setStep] = useState<Step>("bread");
  const [selectedBreadId, setSelectedBreadId] = useState<string | null>(null);
  const [selectedSymptomIds, setSelectedSymptomIds] = useState<string[]>([]);
  const [outcome, setOutcome] = useState<DiagnosisOutcome | null>(null);
  const [questionsAskedCount, setQuestionsAskedCount] = useState(0);

  const knowledge = useMemo(
    () => (selectedBreadId ? getBreadKnowledge(selectedBreadId) : null),
    [selectedBreadId],
  );

  const selectBread = useCallback((breadTypeId: string) => {
    setSelectedBreadId(breadTypeId);
    setSelectedSymptomIds([]);
    setOutcome(null);
    setQuestionsAskedCount(0);
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
    if (selectedSymptomIds.length === 0 || !knowledge) return;
    const result = diagnose(selectedSymptomIds, {
      causes: knowledge.causes,
      associations: knowledge.associations,
      questions: knowledge.questions,
      questionsAskedCount,
    });
    setOutcome(result);
    setStep(result.kind === "question" ? "question" : "result");
  }, [selectedSymptomIds, questionsAskedCount, knowledge]);

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

  /** 빵을 다시 고른다 — 선택 빵·증상·결과를 모두 초기화하고 피커로 돌아간다 (Scenario 0-C). */
  const changeBread = useCallback(() => {
    setSelectedBreadId(null);
    setSelectedSymptomIds([]);
    setOutcome(null);
    setQuestionsAskedCount(0);
    setStep("bread");
  }, []);

  const selectedBreadName =
    BREAD_TYPES.find((bread) => bread.id === selectedBreadId)?.name ?? null;

  return {
    step,
    breadTypes: BREAD_TYPES,
    selectedBreadId,
    selectedBreadName,
    symptoms: knowledge?.symptoms ?? [],
    synonyms: knowledge?.synonyms ?? [],
    selectedSymptomIds,
    outcome,
    selectBread,
    toggleSymptom,
    runDiagnosis,
    answerDiscriminatorQuestion,
    restart,
    changeBread,
  };
}
