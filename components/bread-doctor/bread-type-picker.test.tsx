import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BreadTypePicker } from "@/components/bread-doctor/bread-type-picker";
import { BREAD_TYPES } from "@/config/bread-doctor";

describe("BreadTypePicker", () => {
  it("전체 품목 카드가 카테고리 그룹 헤더 아래 묶여 표시된다", () => {
    render(<BreadTypePicker breadTypes={BREAD_TYPES} onSelect={vi.fn()} />);

    expect(screen.getAllByRole("button").length).toBe(BREAD_TYPES.length);
    expect(screen.getByText("사워도우 · 호밀")).toBeInTheDocument();
    expect(screen.getByText("라미네이션")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "치아바타" })).toBeInTheDocument();
  });

  it("모든 카드가 선택 가능하다 (준비 중/비활성 카드가 없다)", () => {
    render(<BreadTypePicker breadTypes={BREAD_TYPES} onSelect={vi.fn()} />);

    expect(screen.queryByText("준비 중")).not.toBeInTheDocument();
    for (const button of screen.getAllByRole("button")) {
      expect(button).toBeEnabled();
    }
  });

  it("빵 카드를 클릭하면 onSelect가 해당 id로 호출된다", async () => {
    const onSelect = vi.fn();
    render(<BreadTypePicker breadTypes={BREAD_TYPES} onSelect={onSelect} />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));

    expect(onSelect).toHaveBeenCalledWith("white-loaf");
  });

  it("치아 입력 → 치아바타 카드만 남고 무관한 빵은 사라진다", async () => {
    render(<BreadTypePicker breadTypes={BREAD_TYPES} onSelect={vi.fn()} />);

    await userEvent.type(
      screen.getByPlaceholderText("베이커리 품목 이름으로 검색 (예: 치아바타)"),
      "치아",
    );

    expect(screen.getByRole("button", { name: "치아바타" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "식빵" })).not.toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  it("Scenario 0-E: 머핀 입력 → 잉글리시 머핀과 머핀(퀵브레드)가 모두 나타나고 서로 다른 카테고리 그룹 아래 위치한다 (단어 단위 접두 매칭, 포함검색은 치아→포카치아 오탐을 유발하므로 미사용)", async () => {
    render(<BreadTypePicker breadTypes={BREAD_TYPES} onSelect={vi.fn()} />);

    await userEvent.type(
      screen.getByPlaceholderText("베이커리 품목 이름으로 검색 (예: 치아바타)"),
      "머핀",
    );

    expect(screen.getByRole("button", { name: "잉글리시 머핀" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "머핀(퀵브레드)" })).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
    expect(screen.getByText("발효 플랫브레드")).toBeInTheDocument();
  });

  it("매칭되는 빵이 없는 검색어 → 안내가 표시되고, 지우면 전체 품목이 복원된다", async () => {
    render(<BreadTypePicker breadTypes={BREAD_TYPES} onSelect={vi.fn()} />);

    const searchInput = screen.getByPlaceholderText("베이커리 품목 이름으로 검색 (예: 치아바타)");
    await userEvent.type(searchInput, "우주선");

    expect(screen.getByText("일치하는 품목이 없어요")).toBeInTheDocument();

    await userEvent.clear(searchInput);

    expect(screen.getAllByRole("button")).toHaveLength(BREAD_TYPES.length);
  });
});
