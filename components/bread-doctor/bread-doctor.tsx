"use client";

import { useDiagnosis } from "@/hooks/use-diagnosis";
import { BreadTypePicker } from "@/components/bread-doctor/bread-type-picker";
import { Badge } from "@/components/ui/badge";
import { InfoIcon } from "lucide-react";

const SCOPE_NOTICE = "기본 이스트 식빵 기준";

export function BreadDoctor() {
  const diagnosis = useDiagnosis();

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-6 p-6">
      <header className="flex items-start justify-between gap-3">
        <h1 className="text-xl font-bold">🍞 브레드 닥터</h1>
        <Badge variant="secondary">
          <InfoIcon data-icon="inline-start" />
          {SCOPE_NOTICE}
        </Badge>
      </header>

      {diagnosis.step === "bread" && (
        <BreadTypePicker
          breadTypes={diagnosis.breadTypes}
          onSelect={diagnosis.selectBread}
        />
      )}

      {diagnosis.step === "symptoms" && (
        <section aria-label="증상 선택">
          <h2 className="text-lg font-semibold">증상을 선택해 주세요</h2>
        </section>
      )}
    </div>
  );
}
