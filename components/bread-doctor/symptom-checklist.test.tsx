import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SymptomChecklist } from "@/components/bread-doctor/symptom-checklist";
import { getBreadKnowledge } from "@/lib/bread-doctor/knowledge-base";
import type { Symptom } from "@/types/bread-doctor";

const FULL_SYMPTOMS = getBreadKnowledge("white-loaf").symptoms;

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

describe("SymptomChecklist — 증상 검색", () => {
  it("떡져요 입력 → 속이 떡짐/질음만 나타나고 무관한 증상은 사라진다", async () => {
    render(
      <SymptomChecklist
        symptoms={FULL_SYMPTOMS}
        selectedSymptomIds={[]}
        onToggleSymptom={vi.fn()}
        onDiagnose={vi.fn()}
      />,
    );

    await userEvent.type(
      screen.getByPlaceholderText("증상을 일상어로 검색 (예: 떡져요)"),
      "떡져요",
    );

    expect(screen.getByLabelText("속이 떡짐 / 질음")).toBeInTheDocument();
    expect(screen.queryByLabelText("전혀/거의 안 부풂")).not.toBeInTheDocument();
  });

  it("필터된 증상을 선택하고 검색어를 지우면 선택은 유지된 채 전체 목록이 복원된다", async () => {
    const onToggleSymptom = vi.fn();
    const { rerender } = render(
      <SymptomChecklist
        symptoms={FULL_SYMPTOMS}
        selectedSymptomIds={[]}
        onToggleSymptom={onToggleSymptom}
        onDiagnose={vi.fn()}
      />,
    );

    const searchInput = screen.getByPlaceholderText(
      "증상을 일상어로 검색 (예: 떡져요)",
    );
    await userEvent.type(searchInput, "떡져요");
    await userEvent.click(screen.getByLabelText("속이 떡짐 / 질음"));
    expect(onToggleSymptom).toHaveBeenCalledWith("gummy");

    rerender(
      <SymptomChecklist
        symptoms={FULL_SYMPTOMS}
        selectedSymptomIds={["gummy"]}
        onToggleSymptom={onToggleSymptom}
        onDiagnose={vi.fn()}
      />,
    );
    await userEvent.clear(searchInput);

    expect(screen.getByLabelText("전혀/거의 안 부풂")).toBeInTheDocument();
    expect(screen.getByLabelText("속이 떡짐 / 질음")).toBeChecked();
  });

  it("사전에 없는 검색어(우주선) → 일치하는 증상 없음 안내가 표시된다", async () => {
    render(
      <SymptomChecklist
        symptoms={FULL_SYMPTOMS}
        selectedSymptomIds={[]}
        onToggleSymptom={vi.fn()}
        onDiagnose={vi.fn()}
      />,
    );

    await userEvent.type(
      screen.getByPlaceholderText("증상을 일상어로 검색 (예: 떡져요)"),
      "우주선",
    );

    expect(screen.getByText("일치하는 증상이 없어요")).toBeInTheDocument();
  });

  it("검색어 없이도 전체 체크리스트에서 직접 선택할 수 있다", () => {
    render(
      <SymptomChecklist
        symptoms={FULL_SYMPTOMS}
        selectedSymptomIds={[]}
        onToggleSymptom={vi.fn()}
        onDiagnose={vi.fn()}
      />,
    );

    for (const symptom of FULL_SYMPTOMS) {
      expect(screen.getByLabelText(symptom.label)).toBeInTheDocument();
    }
  });
});
