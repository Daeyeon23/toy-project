"use client";

import { useDiagnosis } from "@/hooks/use-diagnosis";
import { BreadTypePicker } from "@/components/bread-doctor/bread-type-picker";
import { SymptomChecklist } from "@/components/bread-doctor/symptom-checklist";
import { DiscriminatorQuestionCard } from "@/components/bread-doctor/discriminator-question";
import { ResultCards } from "@/components/bread-doctor/result-cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InfoIcon, LayoutGridIcon } from "lucide-react";

export function BreadDoctor() {
  const diagnosis = useDiagnosis();

  const selectedSymptomLabels = diagnosis.symptoms
    .filter((symptom) => diagnosis.selectedSymptomIds.includes(symptom.id))
    .map((symptom) => symptom.label);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-6 p-6">
      <header className="flex items-start justify-between gap-3">
        <h1 className="text-xl font-bold">🍞 브레드 닥터</h1>
        {diagnosis.step === "bread" ? (
          <Badge variant="secondary">
            <LayoutGridIcon data-icon="inline-start" />
            {diagnosis.breadTypes.length}종
          </Badge>
        ) : (
          <Badge variant="secondary">
            <InfoIcon data-icon="inline-start" />
            {diagnosis.selectedBreadName} 기준
          </Badge>
        )}
      </header>

      {diagnosis.step === "bread" && (
        <BreadTypePicker
          breadTypes={diagnosis.breadTypes}
          onSelect={diagnosis.selectBread}
        />
      )}

      {diagnosis.step === "symptoms" && (
        <section aria-label="증상 선택" className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">증상을 선택해 주세요</h2>
          <Button variant="outline" onClick={diagnosis.changeBread}>
            <LayoutGridIcon data-icon="inline-start" />
            다시 고르기
          </Button>
          <SymptomChecklist
            symptoms={diagnosis.symptoms}
            synonyms={diagnosis.synonyms}
            selectedSymptomIds={diagnosis.selectedSymptomIds}
            onToggleSymptom={diagnosis.toggleSymptom}
            onDiagnose={diagnosis.runDiagnosis}
          />
        </section>
      )}

      {diagnosis.step === "question" && diagnosis.outcome?.kind === "question" && (
        <DiscriminatorQuestionCard
          question={diagnosis.outcome.question}
          onAnswer={diagnosis.answerDiscriminatorQuestion}
        />
      )}

      {diagnosis.step === "result" && diagnosis.outcome?.kind === "result" && (
        <ResultCards
          causes={diagnosis.outcome.causes}
          selectedSymptomLabels={selectedSymptomLabels}
          onRestart={diagnosis.restart}
          onChangeBread={diagnosis.changeBread}
        />
      )}
    </div>
  );
}
