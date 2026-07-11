import type { BreadCategory, BreadType } from "@/types/bread-doctor";

/** 빵 선택 화면의 카테고리 섹션 — matrices/_taxonomy.md의 리서치 배치와 1:1 대응한다. */
export const BREAD_CATEGORIES: BreadCategory[] = [
  { id: "lean-doughs", label: "식빵 · 린도우", order: 1, domain: "bread" },
  { id: "sourdough-rye", label: "사워도우 · 호밀", order: 2, domain: "bread" },
  { id: "laminated", label: "라미네이션", order: 3, domain: "bread" },
  { id: "enriched", label: "enriched 단맛 반죽", order: 4, domain: "bread" },
  { id: "chemical-leavened", label: "화학 팽창", order: 5, domain: "bread" },
  { id: "leavened-flatbread", label: "발효 플랫브레드", order: 6, domain: "bread" },
  { id: "unleavened-flatbread", label: "무발효 플랫브레드", order: 7, domain: "bread" },
  { id: "boiled", label: "보일링", order: 8, domain: "bread" },

  { id: "emulsified-batter", label: "유화 배터", order: 9, domain: "pastry" },
  { id: "melted-butter-creaming", label: "멜팅버터 · 크리밍", order: 10, domain: "pastry" },
  { id: "rubbed-dough", label: "러빙", order: 11, domain: "pastry" },
  { id: "meringue-foam", label: "머랭 거품", order: 12, domain: "pastry" },
];

export const BREAD_TYPES: BreadType[] = [
  { id: "white-loaf", name: "식빵", status: "available", category: "lean-doughs" },
  { id: "baguette", name: "바게트", status: "available", category: "lean-doughs" },
  { id: "ciabatta", name: "치아바타", status: "available", category: "lean-doughs" },
  { id: "focaccia", name: "포카치아", status: "available", category: "lean-doughs" },
  { id: "pain-de-campagne", name: "팽 드 캄파뉴", status: "available", category: "lean-doughs" },

  { id: "sourdough", name: "사워도우", status: "available", category: "sourdough-rye" },
  { id: "rye-bread", name: "호밀빵", status: "available", category: "sourdough-rye" },
  { id: "pumpernickel", name: "펌퍼니클", status: "available", category: "sourdough-rye" },

  { id: "croissant", name: "크루아상", status: "available", category: "laminated" },
  { id: "danish-pastry", name: "데니시 페이스트리", status: "available", category: "laminated" },

  { id: "brioche", name: "브리오슈", status: "available", category: "enriched" },
  { id: "panettone", name: "파네토네", status: "available", category: "enriched" },
  { id: "milk-bread", name: "우유빵", status: "available", category: "enriched" },
  { id: "anpan", name: "단팥빵", status: "available", category: "enriched" },

  { id: "scone", name: "스콘", status: "available", category: "chemical-leavened" },
  { id: "soda-bread", name: "소다빵", status: "available", category: "chemical-leavened" },
  { id: "cornbread", name: "콘브레드", status: "available", category: "chemical-leavened" },

  { id: "pizza-dough", name: "피자도우", status: "available", category: "leavened-flatbread" },
  { id: "naan", name: "난", status: "available", category: "leavened-flatbread" },
  { id: "pita", name: "피타", status: "available", category: "leavened-flatbread" },
  { id: "english-muffin", name: "잉글리시 머핀", status: "available", category: "leavened-flatbread" },

  { id: "tortilla", name: "토르티야", status: "available", category: "unleavened-flatbread" },
  { id: "lavash", name: "라바쉬", status: "available", category: "unleavened-flatbread" },

  { id: "bagel", name: "베이글", status: "available", category: "boiled" },
  { id: "pretzel", name: "프레첼", status: "available", category: "boiled" },

  { id: "financier", name: "휘낭시에", status: "available", category: "emulsified-batter" },
  { id: "brownie", name: "브라우니", status: "available", category: "melted-butter-creaming" },
  { id: "tart", name: "타르트", status: "available", category: "rubbed-dough" },
  { id: "macaron", name: "마카롱", status: "available", category: "meringue-foam" },
];

/** 상위 두 원인 점수 차가 이 값 이하면 근접으로 판정한다. */
export const PROXIMITY_THRESHOLD = 1;

/**
 * 판별 질문은 한 번의 진단에서 이 횟수까지만 이어지고, 그 후에는 결과가 표시된다.
 *
 * 각 빵 KB는 근접 원인쌍마다 별도의 판별 질문을 정의하지만(예: 베이글은 3개), 이는
 * 서로 다른 증상 조합에 대응하는 것이지 한 진단에서 연쇄로 묻는 것이 아니다 —
 * diagnose()는 최상위 근접 쌍 1개에 대해서만 질문을 반환하고 answerQuestion() 이후
 * 항상 kind:"result"로 종결되므로, questionsAskedCount가 1을 넘는 실제 UI 경로는
 * 없다(스펙의 "판별 질문 체이닝 제외" 범위). 이 캡은 resolveProximateQuestion()의
 * 단위 테스트가 합성 questionsAskedCount 값으로 캡 동작 자체를 격리 검증한다.
 */
export const MAX_DISCRIMINATOR_QUESTIONS = 2;

/** 결과 화면에 노출할 원인 카드 최대 개수. */
export const MAX_RESULT_CAUSES = 3;
