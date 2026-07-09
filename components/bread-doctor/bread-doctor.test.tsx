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
});
