"use client";

import { useState } from "react";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { filterSymptoms } from "@/lib/bread-doctor/search";
import type { Symptom, SynonymEntry } from "@/types/bread-doctor";
import { SearchIcon, SearchXIcon, StethoscopeIcon } from "lucide-react";

interface SymptomChecklistProps {
  symptoms: Symptom[];
  synonyms: SynonymEntry[];
  selectedSymptomIds: string[];
  onToggleSymptom: (symptomId: string) => void;
  onDiagnose: () => void;
}

export function SymptomChecklist({
  symptoms,
  synonyms,
  selectedSymptomIds,
  onToggleSymptom,
  onDiagnose,
}: SymptomChecklistProps) {
  const [query, setQuery] = useState("");
  const hasSelection = selectedSymptomIds.length > 0;
  const visibleSymptoms = filterSymptoms(query, symptoms, synonyms);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="증상을 일상어로 검색 (예: 떡져요)"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </InputGroup>
        <p className="text-xs text-muted-foreground">
          검색은 보조 수단입니다. 아래에서 바로 선택해도 됩니다.
        </p>
      </div>

      {visibleSymptoms.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SearchXIcon />
            </EmptyMedia>
            <EmptyTitle>일치하는 증상이 없어요</EmptyTitle>
            <EmptyDescription>
              검색어를 지우고 목록에서 직접 골라 보세요.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <FieldSet>
          <FieldLegend variant="label">증상 · 다중 선택</FieldLegend>
          <FieldGroup>
            {visibleSymptoms.map((symptom) => {
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
      )}

      <Button onClick={onDiagnose} disabled={!hasSelection}>
        <StethoscopeIcon data-icon="inline-start" />
        진단하기{!hasSelection && " · 증상을 1개 이상 선택"}
      </Button>
    </div>
  );
}
