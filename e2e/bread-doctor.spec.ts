import { expect, test } from "@playwright/test";

test("식빵 선택 → 증상 3개 선택 → 진단 → 1순위 발효 부족 결과가 표시된다", async ({
  page,
}) => {
  const externalRequests: string[] = [];
  page.on("request", (request) => {
    const url = new URL(request.url());
    if (url.hostname !== "localhost" && url.hostname !== "127.0.0.1") {
      externalRequests.push(request.url());
    }
  });

  await page.goto("/");
  await page.getByRole("button", { name: "식빵" }).click();

  await page.getByLabel("전혀/거의 안 부풂").click();
  await page.getByLabel("속이 떡짐 / 질음").click();
  await page.getByLabel("옆구리·표면이 터짐").click();
  await page.getByRole("button", { name: /진단하기/ }).click();

  await expect(page.getByText("발효 부족")).toBeVisible();

  // 불변 규칙: 면책 고지 + 범위 고지가 결과 화면에 표시된다
  await expect(
    page.getByText(
      "단정적 진단이 아니라 일반적 제빵 상식 기반의 가능성 있는 원인입니다.",
    ),
  ).toBeVisible();
  await expect(page.getByText("기본 이스트 식빵 기준")).toBeVisible();

  // 불변 규칙: 원시 점수·퍼센트 숫자가 어디에도 없다 (렌더된 텍스트만 — script 태그 payload는 제외)
  const bodyText = await page.locator("body").innerText();
  expect(bodyText).not.toMatch(/%/);

  // 불변 규칙: 클라이언트 완결 — 진단 과정에 외부 네트워크 요청이 없다
  expect(externalRequests).toEqual([]);
});
