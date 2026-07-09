import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BreadTypePicker } from "@/components/bread-doctor/bread-type-picker";
import type { BreadType } from "@/types/bread-doctor";

const BREAD_TYPES: BreadType[] = [
  { id: "white-loaf", name: "식빵", status: "available" },
  { id: "sourdough", name: "사워도우", status: "coming-soon" },
  { id: "croissant", name: "크루아상", status: "coming-soon" },
  { id: "scone", name: "스콘", status: "coming-soon" },
];

describe("BreadTypePicker", () => {
  it("식빵 카드와 준비 중 배지가 붙은 카드들을 함께 표시한다", () => {
    render(<BreadTypePicker breadTypes={BREAD_TYPES} onSelect={vi.fn()} />);

    expect(screen.getByRole("button", { name: "식빵" })).toBeInTheDocument();
    expect(screen.getAllByText("준비 중")).toHaveLength(3);
  });

  it("식빵 카드를 클릭하면 onSelect가 해당 id로 호출된다", async () => {
    const onSelect = vi.fn();
    render(<BreadTypePicker breadTypes={BREAD_TYPES} onSelect={onSelect} />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));

    expect(onSelect).toHaveBeenCalledWith("white-loaf");
  });

  it("준비 중 카드는 비활성이라 클릭해도 onSelect가 호출되지 않는다", async () => {
    const onSelect = vi.fn();
    render(<BreadTypePicker breadTypes={BREAD_TYPES} onSelect={onSelect} />);

    const sourdoughButton = screen.getByRole("button", { name: /사워도우/ });
    expect(sourdoughButton).toBeDisabled();

    await userEvent.click(sourdoughButton);

    expect(onSelect).not.toHaveBeenCalled();
  });
});
