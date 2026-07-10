import {
  coreCauseName,
  coreSymptomLabel,
} from "@/lib/bread-doctor/knowledge/_core";
import type {
  Association,
  BreadKnowledge,
  Cause,
  DiscriminatorQuestion,
  Symptom,
  SynonymEntry,
} from "@/types/bread-doctor";

/**
 * 피자 도우 진단 지식베이스 — matrices/pizza-dough.md(King Arthur Baking 인용, PEAKED 판정).
 * CORE 코드를 재사용하고, 오븐스프링/성형 고유 실패는 `flat-` 신규 코드로 추가한다.
 * `flat-cold-baking-surface`/`flat-torn-dough`/`flat-uneven-thickness`는 pita.ts가,
 * `flat-griddle-too-*`는 naan.ts/english-muffin.ts가 이름을 그대로 재사용한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "flat-no-oven-spring", label: "굽는 중 부풀지 않음(오븐 스프링/기포 형성 실패)" },
  { id: "flat-dough-springback", label: "늘리려 하면 반죽이 계속 오그라듦" },
  { id: "flat-torn-dough", label: "늘리거나 밀 때 찢어지거나 구멍이 남" },
  { id: "flat-uneven-thickness", label: "두께가 불균일함" },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "flat-soggy-bottom", label: "바닥이 축축하고 안 바삭함" },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "large-holes", label: coreSymptomLabel("large-holes") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
];

const CAUSES: Cause[] = [
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "반죽을 충분히 치대지/접지 않으면 글루텐 네트워크가 약해 늘릴 때 잘 찢어지고, 가스를 가두는 힘이 약해 가장자리가 잘 안 부풉니다.",
    action: "반죽이 매끄럽고 탄력 있게 늘어날 때까지(윈도우페인 테스트) 치대거나, 오토리즈 시간을 늘려 보세요.",
  },
  {
    id: "flat-tight-gluten",
    name: "글루텐 과긴장(휴지 부족)",
    why: "반죽을 성형·치대는 과정에서 글루텐이 강하게 발달한 채 바로 늘리면, 글루텐 가닥이 긴장 상태라 계속 오그라들며 저항합니다.",
    action: "반죽이 저항하면 랩을 덮고 15분 휴지시킨 뒤 다시 늘려 보세요. 필요하면 여러 번 반복하세요.",
  },
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "가스가 충분히 안 만들어진 채 구우면 가장자리가 안 부풀고 속이 떡지게 됩니다.",
    action: "1차 발효를 늘려 반죽 부피가 확실히 커질 때까지 기다려 보세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하면 반죽 구조가 약해져 굽는 중 불규칙하게 큰 기포(블리스터)가 생기고 신맛이 납니다.",
    action: "부피가 과도하게 커지기 전에 성형·굽기를 마쳐 보세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "반죽이 너무 질면 성형이 무너지고, 구울 때 가운데가 눌려 축축하고 떡진 바닥이 됩니다.",
    action: "레시피 수분을 5~10% 줄이거나 덧가루·오토리즈로 반죽 강도를 높여 보세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "토핑·가장자리가 속(가운데)보다 훨씬 빨리 익어, 겉은 타는데 속은 안 익습니다.",
    action: "오븐 온도를 낮추거나, 크러스트를 먼저 짧게 파베이크한 뒤 토핑을 올려 보세요.",
  },
  {
    id: "flat-cold-baking-surface",
    name: "베이킹 스톤/스틸 예열 부족",
    why: "얇은 팬이나 덜 예열된 스톤은 열전달(전도)이 약해 바닥이 안 익고 창백하며 축축해집니다. 금속(스틸) > 스톤 > 얇은 팬 순으로 열용량이 높습니다.",
    action: "스톤/스틸을 최소 1시간 이상 예열하고, 가능하면 스틸을 사용해 보세요.",
  },
  {
    id: "cold-environment",
    name: coreCauseName("cold-environment"),
    why: "반죽·실내 온도가 낮으면 발효가 느려져 같은 시간에 덜 부풉니다.",
    action: "26~28℃ 환경에서 발효시켜 보세요.",
  },
  {
    id: "flat-improper-stretching",
    name: "성형 시 불균일하게 늘림",
    why: "가운데부터 늘리거나 한쪽만 밀면 두께가 불균일해져 얇은 곳은 타거나 뚫리고, 두꺼운 곳은 안 익습니다.",
    action: "가장자리부터 고르게 눌러 펴고, 회전시키며 균일하게 늘려 보세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "weak-gluten", symptomId: "flat-no-oven-spring", weight: 1 },
  { causeId: "weak-gluten", symptomId: "flat-torn-dough", weight: 2 },
  { causeId: "weak-gluten", symptomId: "gummy", weight: 1 },

  { causeId: "flat-tight-gluten", symptomId: "flat-dough-springback", weight: 2 },
  { causeId: "flat-tight-gluten", symptomId: "flat-uneven-thickness", weight: 2 },

  { causeId: "underproof", symptomId: "flat-no-oven-spring", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },

  { causeId: "overproof", symptomId: "flat-torn-dough", weight: 1 },
  { causeId: "overproof", symptomId: "large-holes", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 2 },

  { causeId: "excess-hydration", symptomId: "flat-uneven-thickness", weight: 1 },
  { causeId: "excess-hydration", symptomId: "flat-soggy-bottom", weight: 2 },
  { causeId: "excess-hydration", symptomId: "gummy", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "large-holes", weight: 1 },

  { causeId: "flat-cold-baking-surface", symptomId: "flat-soggy-bottom", weight: 2 },
  { causeId: "flat-cold-baking-surface", symptomId: "pale", weight: 2 },

  { causeId: "cold-environment", symptomId: "flat-no-oven-spring", weight: 1 },
  { causeId: "cold-environment", symptomId: "gummy", weight: 1 },

  { causeId: "flat-improper-stretching", symptomId: "flat-torn-dough", weight: 1 },
  { causeId: "flat-improper-stretching", symptomId: "flat-uneven-thickness", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-pizza-underproof-vs-hydration",
    pair: ["underproof", "excess-hydration"],
    text: "성형 전 반죽이 손에 들러붙을 정도로 유독 질척거렸나요?",
    yesFavors: "excess-hydration",
    noFavors: "underproof",
  },
  {
    id: "q-pizza-tightgluten-vs-stretching",
    pair: ["flat-tight-gluten", "flat-improper-stretching"],
    text: "반죽을 늘릴 때 계속 다시 오그라들며 저항했나요?",
    yesFavors: "flat-tight-gluten",
    noFavors: "flat-improper-stretching",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "pale", terms: ["색이 안 나요", "창백해요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "sour-smell", terms: ["시어요", "냄새가 이상해요"] },
  {
    symptomId: "flat-no-oven-spring",
    terms: ["가장자리가 안 부풀어요", "크러스트가 납작해요", "테두리가 안 살아요"],
  },
  {
    symptomId: "flat-dough-springback",
    terms: ["반죽이 자꾸 줄어들어요", "늘리면 다시 오므라들어요", "스트레치가 안 돼요"],
  },
  { symptomId: "flat-torn-dough", terms: ["반죽이 찢어져요", "구멍이 나요", "늘리다 뚫려요"] },
  {
    symptomId: "flat-uneven-thickness",
    terms: ["두께가 들쭉날쭉해요", "가운데만 두꺼워요", "한쪽만 얇아요"],
  },
  { symptomId: "flat-soggy-bottom", terms: ["바닥이 축축해요", "밑이 안 바삭해요", "바닥이 질척해요"] },
];

export const PIZZA_DOUGH: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
