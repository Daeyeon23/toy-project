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

  // 불변 규칙: 면책 고지 + 범위 고지가 결과 화면에 표시된다 (선택 빵 이름 기준)
  await expect(
    page.getByText(
      "단정적 진단이 아니라 일반적 제빵 상식 기반의 가능성 있는 원인입니다.",
    ),
  ).toBeVisible();
  await expect(page.getByText("식빵 기준")).toBeVisible();

  // 불변 규칙: 원시 점수·퍼센트 숫자가 어디에도 없다 (렌더된 텍스트만 — script 태그 payload는 제외)
  const bodyText = await page.locator("body").innerText();
  expect(bodyText).not.toMatch(/%/);

  // 불변 규칙: 클라이언트 완결 — 진단 과정에 외부 네트워크 요청이 없다
  expect(externalRequests).toEqual([]);
});

test("크루아상 선택 → 라미네이션 증상 진단 → 크루아상 고유 원인만 표시된다 (빵 경계 격리)", async ({
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
  await page.getByRole("button", { name: "크루아상" }).click();

  await page.getByLabel("구울 때 버터가 흘러나와 팬에 웅덩이/탄 자국이 생김").click();
  await page
    .getByLabel(/단면이 조밀하고 층이 잘 안 보임/)
    .click();
  await page.getByLabel("다 구운 후 속이 기름지고 눅눅하며 손에 기름이 묻음").click();
  await page.getByRole("button", { name: /진단하기/ }).click();

  // 크루아상 고유 원인(라미네이션 버터 문제)이 1순위로 표시된다 — 다른 빵 원인과 안 섞임
  await expect(
    page.getByText("라미네이션·성형·최종발효 중 버터가 물러지거나 일부 녹음"),
  ).toBeVisible();
  await expect(page.getByText("이스트 문제")).not.toBeVisible();

  // 불변 규칙: 범위·면책 고지가 선택 빵(크루아상) 기준으로 표시된다
  await expect(page.getByText("크루아상 기준")).toBeVisible();
  await expect(
    page.getByText(
      "단정적 진단이 아니라 일반적 제빵 상식 기반의 가능성 있는 원인입니다.",
    ),
  ).toBeVisible();

  // 불변 규칙: 강도는 "가능성 높음/중간" 라벨로만 표현된다 (원시 점수 노출 없음).
  // 원인 카드의 조리법 설명(예: "지방 82% 이상")에는 정당한 도메인 지식으로서 "%"가
  // 등장할 수 있어 본문 전체를 "%" 정규식으로 스캔하지 않는다 — 그 구조적 보장은
  // scoring.test.ts("CauseResult에는 원시 점수·퍼센트 숫자 필드가 없다")가 이미 검증한다.
  await expect(page.getByText("가능성 높음")).toBeVisible();

  // 불변 규칙: 클라이언트 완결 — 외부 네트워크 요청 없음
  expect(externalRequests).toEqual([]);

  await page.screenshot({
    path: "artifacts/bread-doctor/evidence/task-11.png",
    fullPage: true,
  });
});
