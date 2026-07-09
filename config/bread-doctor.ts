import type { BreadType } from "@/types/bread-doctor";

export const BREAD_TYPES: BreadType[] = [
  { id: "white-loaf", name: "식빵", status: "available" },
  { id: "sourdough", name: "사워도우", status: "coming-soon" },
  { id: "croissant", name: "크루아상", status: "coming-soon" },
  { id: "scone", name: "스콘", status: "coming-soon" },
];

/** 상위 두 원인 점수 차가 이 값 이하면 근접으로 판정한다. */
export const PROXIMITY_THRESHOLD = 1;

/**
 * 판별 질문은 이 횟수까지만 이어지고, 그 후에는 결과가 표시된다.
 *
 * 현재 KB(DISCRIMINATOR_QUESTIONS)에는 판별 쌍이 1개(이스트 문제 ↔ 발효 부족)뿐이라
 * questionsAskedCount가 1에 도달하는 실제 UI 경로는 없다 — answerQuestion() 이후
 * 항상 kind:"result"로 종결되고 diagnose()를 재호출해 다음 근접 쌍을 재평가하지 않기
 * 때문이다. 이 캡은 향후 두 번째 판별 쌍이 추가될 때를 위한 여유값이며,
 * resolveProximateQuestion()의 단위 테스트(scoring.test.ts)가 캡 동작 자체를
 * 합성 questionsAskedCount 값으로 격리 검증한다.
 */
export const MAX_DISCRIMINATOR_QUESTIONS = 2;

/** 결과 화면에 노출할 원인 카드 최대 개수. */
export const MAX_RESULT_CAUSES = 3;
