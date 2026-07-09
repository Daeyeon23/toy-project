import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SymptomChecklist } from "@/components/bread-doctor/symptom-checklist";
import type { Symptom } from "@/types/bread-doctor";

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: "전혀/거의 안 부풂" },
  { id: "gummy", label: "속이 떡짐 / 질음" },
];

describe("SymptomChecklist", () => {
  it("증상 0개 선택 시 진단하기 버튼이 비활성이다", () => {
    render(
      <SymptomChecklist
        symptoms={SYMPTOMS}
        selectedSymptomIds={[]}
        onToggleSymptom={vi.fn()}
        onDiagnose={vi.fn()}
      />,
    );

    expect(screen.getByRole("button", { name: /진단하기/ })).toBeDisabled();
  });

  it("증상을 1개 선택하면 진단하기 버튼이 활성화된다", () => {
    render(
      <SymptomChecklist
        symptoms={SYMPTOMS}
        selectedSymptomIds={["no-rise"]}
        onToggleSymptom={vi.fn()}
        onDiagnose={vi.fn()}
      />,
    );

    expect(screen.getByRole("button", { name: /진단하기/ })).toBeEnabled();
  });

  it("증상 체크박스를 클릭하면 onToggleSymptom이 해당 id로 호출된다", async () => {
    const onToggleSymptom = vi.fn();
    render(
      <SymptomChecklist
        symptoms={SYMPTOMS}
        selectedSymptomIds={[]}
        onToggleSymptom={onToggleSymptom}
        onDiagnose={vi.fn()}
      />,
    );

    await userEvent.click(screen.getByLabelText("속이 떡짐 / 질음"));

    expect(onToggleSymptom).toHaveBeenCalledWith("gummy");
  });

  it("진단하기 버튼 클릭 시 onDiagnose가 호출된다", async () => {
    const onDiagnose = vi.fn();
    render(
      <SymptomChecklist
        symptoms={SYMPTOMS}
        selectedSymptomIds={["no-rise"]}
        onToggleSymptom={vi.fn()}
        onDiagnose={onDiagnose}
      />,
    );

    await userEvent.click(screen.getByRole("button", { name: /진단하기/ }));

    expect(onDiagnose).toHaveBeenCalledTimes(1);
  });
});
