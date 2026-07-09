import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BreadDoctor } from "@/components/bread-doctor/bread-doctor";

describe("BreadDoctor", () => {
  it("식빵 카드를 선택하면 증상 화면으로 전환된다", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));

    expect(
      screen.getByRole("heading", { name: "증상을 선택해 주세요" }),
    ).toBeInTheDocument();
  });

  it("준비 중 카드를 클릭해도 증상 화면으로 전환되지 않는다", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: /사워도우/ }));

    expect(
      screen.queryByRole("heading", { name: "증상을 선택해 주세요" }),
    ).not.toBeInTheDocument();
  });

  it("범위 고지가 항상 표시된다", () => {
    render(<BreadDoctor />);

    expect(screen.getByText("기본 이스트 식빵 기준")).toBeInTheDocument();
  });

  it("Scenario 1: 안부풂+속떡짐+옆구리터짐 선택 → 판별 질문 없이 1순위 발효 부족", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));
    await userEvent.click(screen.getByLabelText("전혀/거의 안 부풂"));
    await userEvent.click(screen.getByLabelText("속이 떡짐 / 질음"));
    await userEvent.click(screen.getByLabelText("옆구리·표면이 터짐"));
    await userEvent.click(screen.getByRole("button", { name: /진단하기/ }));

    expect(screen.queryByText("확인 질문")).not.toBeInTheDocument();
    expect(screen.getByText("발효 부족")).toBeInTheDocument();
  });

  it("Scenario 2: 주저앉음+큰기공+신맛 선택 → 1순위 과발효", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));
    await userEvent.click(screen.getByLabelText("부풀다 주저앉음"));
    await userEvent.click(screen.getByLabelText("기공이 너무 크고 불규칙"));
    await userEvent.click(screen.getByLabelText("신맛 / 이상한 냄새"));
    await userEvent.click(screen.getByRole("button", { name: /진단하기/ }));

    expect(screen.getByText("과발효")).toBeInTheDocument();
  });
});
