import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DiscriminatorQuestionCard } from "@/components/bread-doctor/discriminator-question";
import type { DiscriminatorQuestion } from "@/types/bread-doctor";

const QUESTION: DiscriminatorQuestion = {
  id: "q-yeast-vs-underproof",
  pair: ["c1", "c2"],
  text: "1차 발효 때 반죽이 부풀긴 했나요?",
  yesFavors: "c2",
  noFavors: "c1",
};

describe("DiscriminatorQuestionCard", () => {
  it("질문 텍스트를 표시한다", () => {
    render(<DiscriminatorQuestionCard question={QUESTION} onAnswer={vi.fn()} />);

    expect(
      screen.getByText("1차 발효 때 반죽이 부풀긴 했나요?"),
    ).toBeInTheDocument();
  });

  it("예 클릭 시 onAnswer가 yes로 호출된다", async () => {
    const onAnswer = vi.fn();
    render(<DiscriminatorQuestionCard question={QUESTION} onAnswer={onAnswer} />);

    await userEvent.click(screen.getByRole("button", { name: "예" }));

    expect(onAnswer).toHaveBeenCalledWith("yes");
  });

  it("아니오 클릭 시 onAnswer가 no로 호출된다", async () => {
    const onAnswer = vi.fn();
    render(<DiscriminatorQuestionCard question={QUESTION} onAnswer={onAnswer} />);

    await userEvent.click(screen.getByRole("button", { name: "아니오" }));

    expect(onAnswer).toHaveBeenCalledWith("no");
  });

  it("건너뛰기 클릭 시 onAnswer가 skip으로 호출된다", async () => {
    const onAnswer = vi.fn();
    render(<DiscriminatorQuestionCard question={QUESTION} onAnswer={onAnswer} />);

    await userEvent.click(screen.getByRole("button", { name: /건너뛰기/ }));

    expect(onAnswer).toHaveBeenCalledWith("skip");
  });
});
