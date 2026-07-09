import type { BreadType } from "@/types/bread-doctor";

export const BREAD_TYPES: BreadType[] = [
  { id: "white-loaf", name: "식빵", status: "available" },
  { id: "sourdough", name: "사워도우", status: "coming-soon" },
  { id: "croissant", name: "크루아상", status: "coming-soon" },
  { id: "scone", name: "스콘", status: "coming-soon" },
];

/** 상위 두 원인 점수 차가 이 값 이하면 근접으로 판정한다. */
export const PROXIMITY_THRESHOLD = 1;

/** 판별 질문은 이 횟수까지만 이어지고, 그 후에는 결과가 표시된다. */
export const MAX_DISCRIMINATOR_QUESTIONS = 2;

/** 결과 화면에 노출할 원인 카드 최대 개수. */
export const MAX_RESULT_CAUSES = 3;
