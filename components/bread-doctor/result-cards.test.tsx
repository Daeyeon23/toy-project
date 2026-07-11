import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ResultCards } from "@/components/bread-doctor/result-cards";
import type { CauseResult } from "@/types/bread-doctor";

const CAUSES: CauseResult[] = [
  {
    cause: {
      id: "c2",
      name: "발효 부족",
      why: "이스트가 가스를 충분히 만들기 전에 구웠습니다.",
      action: "1차 발효를 늘려 보세요.",
    },
    strength: "high",
  },
  {
    cause: {
      id: "c1",
      name: "이스트 문제",
      why: "이스트가 죽었을 수 있습니다.",
      action: "이스트 상태를 확인하세요.",
    },
    strength: "medium",
  },
];

describe("ResultCards", () => {
  it("각 원인 카드에 원인명·왜·다음에 텍스트가 모두 보인다", () => {
    render(
      <ResultCards
        causes={CAUSES}
        selectedSymptomLabels={["전혀/거의 안 부풂"]}
        onRestart={vi.fn()}
        onChangeBread={vi.fn()}
      />,
    );

    expect(screen.getByText("발효 부족")).toBeInTheDocument();
    expect(
      screen.getByText("이스트가 가스를 충분히 만들기 전에 구웠습니다."),
    ).toBeInTheDocument();
    expect(screen.getByText("1차 발효를 늘려 보세요.")).toBeInTheDocument();
  });

  it("면책 고지 문구가 표시된다", () => {
    render(
      <ResultCards
        causes={CAUSES}
        selectedSymptomLabels={[]}
        onRestart={vi.fn()}
        onChangeBread={vi.fn()}
      />,
    );

    expect(
      screen.getByText(
        "단정적 진단이 아니라 일반적 베이킹 상식 기반의 가능성 있는 원인입니다.",
      ),
    ).toBeInTheDocument();
  });

  it("결과 화면 어디에도 숫자 점수·퍼센트가 렌더되지 않는다", () => {
    render(
      <ResultCards
        causes={CAUSES}
        selectedSymptomLabels={["전혀/거의 안 부풂"]}
        onRestart={vi.fn()}
        onChangeBread={vi.fn()}
      />,
    );

    expect(screen.queryByText(/%/)).not.toBeInTheDocument();
    expect(screen.getByText("가능성 높음")).toBeInTheDocument();
    expect(screen.getByText("가능성 중간")).toBeInTheDocument();
  });

  it("증상 바꿔 다시 진단 버튼 클릭 시 onRestart가 호출된다", async () => {
    const onRestart = vi.fn();
    render(
      <ResultCards
        causes={CAUSES}
        selectedSymptomLabels={[]}
        onRestart={onRestart}
        onChangeBread={vi.fn()}
      />,
    );

    await userEvent.click(screen.getByRole("button", { name: /다시 진단/ }));

    expect(onRestart).toHaveBeenCalledTimes(1);
  });

  it("다시 고르기 버튼 클릭 시 onChangeBread가 호출된다", async () => {
    const onChangeBread = vi.fn();
    render(
      <ResultCards
        causes={CAUSES}
        selectedSymptomLabels={[]}
        onRestart={vi.fn()}
        onChangeBread={onChangeBread}
      />,
    );

    await userEvent.click(screen.getByRole("button", { name: /다시 고르기/ }));

    expect(onChangeBread).toHaveBeenCalledTimes(1);
  });
});
