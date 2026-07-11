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

  it("Scenario 0-A: 크루아상 선택 → 라미네이션 증상이 표시되고 식빵 전용 증상은 안 보인다", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "크루아상" }));

    expect(screen.getByText("크루아상 기준")).toBeInTheDocument();
    expect(
      screen.getByLabelText(/단면이 조밀하고 층이 잘 안 보임/),
    ).toBeInTheDocument();
    expect(
      screen.queryByLabelText("옆구리·표면이 터짐"),
    ).not.toBeInTheDocument();
  });

  it("범위 고지는 빵을 선택한 뒤 그 빵 이름으로 표시된다", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));

    expect(screen.getByText("식빵 기준")).toBeInTheDocument();
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
    // 불변: 결과 화면에도 범위 고지가 선택 빵 이름으로 표시된다
    expect(screen.getByText("식빵 기준")).toBeInTheDocument();
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

  it("Scenario 6: 증상을 바꿔 다시 진단하면 이전 결과가 사라지고 새 1순위가 표시된다", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));
    await userEvent.click(screen.getByLabelText("부풀다 주저앉음"));
    await userEvent.click(screen.getByLabelText("기공이 너무 크고 불규칙"));
    await userEvent.click(screen.getByLabelText("신맛 / 이상한 냄새"));
    await userEvent.click(screen.getByRole("button", { name: /진단하기/ }));
    expect(screen.getByText("과발효")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /다시 진단/ }));

    // restart 이후 이전 선택은 초기화된다 — 재클릭(해제)이 아니라 새 증상만 선택한다.
    expect(screen.getByLabelText("부풀다 주저앉음")).not.toBeChecked();
    await userEvent.click(screen.getByLabelText("겉은 탔는데 속은 덜 익음"));
    await userEvent.click(screen.getByLabelText("겉이 두껍고 딱딱함"));
    await userEvent.click(screen.getByRole("button", { name: /진단하기/ }));

    expect(screen.queryByText("과발효")).not.toBeInTheDocument();
    expect(screen.getByText("오븐 온도가 높음")).toBeInTheDocument();
  });

  it("Scenario 3: 근접 원인(안부풂+속떡짐)은 판별 질문을 먼저 보여준다", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));
    await userEvent.click(screen.getByLabelText("전혀/거의 안 부풂"));
    await userEvent.click(screen.getByLabelText("속이 떡짐 / 질음"));
    await userEvent.click(screen.getByRole("button", { name: /진단하기/ }));

    expect(screen.getByText("확인 질문")).toBeInTheDocument();
    expect(
      screen.getByText("1차 발효 때 반죽이 부풀긴 했나요?"),
    ).toBeInTheDocument();
    expect(screen.queryByText("발효 부족")).not.toBeInTheDocument();
  });

  it("Scenario 3: 판별 질문에 예로 답하면 1순위가 발효 부족이다", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));
    await userEvent.click(screen.getByLabelText("전혀/거의 안 부풂"));
    await userEvent.click(screen.getByLabelText("속이 떡짐 / 질음"));
    await userEvent.click(screen.getByRole("button", { name: /진단하기/ }));
    await userEvent.click(screen.getByRole("button", { name: "예" }));

    expect(screen.getByText("발효 부족")).toBeInTheDocument();
  });

  it("Scenario 3: 판별 질문에 아니오로 답하면 1순위가 이스트 문제다", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));
    await userEvent.click(screen.getByLabelText("전혀/거의 안 부풂"));
    await userEvent.click(screen.getByLabelText("속이 떡짐 / 질음"));
    await userEvent.click(screen.getByRole("button", { name: /진단하기/ }));
    await userEvent.click(screen.getByRole("button", { name: "아니오" }));

    expect(screen.getByText("이스트 문제")).toBeInTheDocument();
  });

  it("Scenario 4: 건너뛰기를 누르면 두 후보가 모두 표시된다", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));
    await userEvent.click(screen.getByLabelText("전혀/거의 안 부풂"));
    await userEvent.click(screen.getByLabelText("속이 떡짐 / 질음"));
    await userEvent.click(screen.getByRole("button", { name: /진단하기/ }));
    await userEvent.click(screen.getByRole("button", { name: /건너뛰기/ }));

    expect(screen.getByText("이스트 문제")).toBeInTheDocument();
    expect(screen.getByText("발효 부족")).toBeInTheDocument();
  });

  it("Scenario 0-C: 증상 화면에서 빵 다시 고르기 → 빵 선택 화면으로 돌아가고 증상 선택이 초기화된다", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));
    await userEvent.click(screen.getByLabelText("전혀/거의 안 부풂"));
    await userEvent.click(screen.getByRole("button", { name: /다시 고르기/ }));

    expect(
      screen.queryByRole("heading", { name: "증상을 선택해 주세요" }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "식빵" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));
    expect(screen.getByLabelText("전혀/거의 안 부풂")).not.toBeChecked();
  });

  it("Scenario 0-C: 결과 화면에서 빵 다시 고르기 → 빵 선택 화면으로 돌아가고 결과가 초기화된다", async () => {
    render(<BreadDoctor />);

    await userEvent.click(screen.getByRole("button", { name: "식빵" }));
    await userEvent.click(screen.getByLabelText("부풀다 주저앉음"));
    await userEvent.click(screen.getByLabelText("기공이 너무 크고 불규칙"));
    await userEvent.click(screen.getByLabelText("신맛 / 이상한 냄새"));
    await userEvent.click(screen.getByRole("button", { name: /진단하기/ }));
    expect(screen.getByText("과발효")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /다시 고르기/ }));

    expect(screen.queryByText("과발효")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "식빵" })).toBeInTheDocument();
  });
});
