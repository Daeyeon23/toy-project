"use client";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type { Symptom } from "@/types/bread-doctor";
import { StethoscopeIcon } from "lucide-react";

interface SymptomChecklistProps {
  symptoms: Symptom[];
  selectedSymptomIds: string[];
  onToggleSymptom: (symptomId: string) => void;
  onDiagnose: () => void;
}

export function SymptomChecklist({
  symptoms,
  selectedSymptomIds,
  onToggleSymptom,
  onDiagnose,
}: SymptomChecklistProps) {
  const hasSelection = selectedSymptomIds.length > 0;

  return (
    <div className="flex flex-col gap-6">
      <FieldSet>
        <FieldLegend variant="label">증상 · 다중 선택</FieldLegend>
        <FieldGroup>
          {symptoms.map((symptom) => {
            const checked = selectedSymptomIds.includes(symptom.id);
            return (
              <Field key={symptom.id} orientation="horizontal">
                <Checkbox
                  id={`symptom-${symptom.id}`}
                  checked={checked}
                  onCheckedChange={() => onToggleSymptom(symptom.id)}
                />
                <FieldLabel
                  htmlFor={`symptom-${symptom.id}`}
                  className="font-normal"
                >
                  {symptom.label}
                </FieldLabel>
              </Field>
            );
          })}
        </FieldGroup>
      </FieldSet>

      <Button onClick={onDiagnose} disabled={!hasSelection}>
        <StethoscopeIcon data-icon="inline-start" />
        진단하기{!hasSelection && " · 증상을 1개 이상 선택"}
      </Button>
    </div>
  );
}
