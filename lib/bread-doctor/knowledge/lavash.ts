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
 * 라바쉬 진단 지식베이스 — matrices/lavash.md(King Arthur Baking 인용, PEAKED 판정,
 * 판별 질문 의존도가 토르티야보다 높음). tortilla.ts의 `flat-*` 코드를 이름 그대로
 * 재사용하고, 라바쉬 전용 실패(공기주머니 과다 팽창)만 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "flat-tears-rolling", label: "밀 때 찢어지거나 구멍이 남" },
  { id: "flat-shrinks-back", label: "밀어도 자꾸 오그라들어 얇아지지 않음" },
  { id: "too-wet", label: coreSymptomLabel("too-wet") },
  { id: "flat-no-bubbles", label: "구울 때 기포/부풀음이 거의 안 생기고 평평함" },
  { id: "flat-tough-chewy", label: "다 구운 뒤에도 질기고 뻣뻣해서 씹기 힘듦" },
  { id: "flat-dry-brittle", label: "식으면 금방 말라 부스러지거나 갈라짐" },
  { id: "flat-doughy-thick", label: "두껍고 속까지 안 익어 찐득함" },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "flat-overpuffed", label: "피타처럼 크게 부풀어 속에 큰 공기주머니가 생김" },
];

const CAUSES: Cause[] = [
  {
    id: "flat-underrest",
    name: "반죽 휴지 부족",
    why: "1차 반죽 후, 그리고 분할 후 각각 충분히 쉬지 못하면 반죽이 \"이완\"되지 않아 얇게 늘릴 때 계속 오그라들고 저항이 강해 찢어집니다.",
    action: "1차 발효/휴지 후 눌러도 자국이 서서히 돌아오는 \"이완\" 상태까지 쉬게 하고, 분할 후에도 밀기 전에 다시 쉬게 하세요. 저항이 느껴지면 손 위에 반죽을 걸쳐 늘리듯 부드럽게 당겨 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "강력분 비중이 너무 낮거나(예: '00' 밀가루만 사용) 너무 얇게 늘리면 구조가 버티지 못해 저항 없이 구멍이 나거나 찢어집니다.",
    action: "강력분(bread flour)과 '00' 밀가루를 레시피 비율대로 섞어 쓰고, 한 번에 너무 얇게 늘리지 말고 단계적으로 늘려 보세요.",
  },
  {
    id: "flat-underhydrated",
    name: "수분 부족",
    why: "수분이 부족하면 반죽이 뻑뻑해 늘릴 때 갈라지고, 구운 뒤 금방 말라 딱딱해집니다.",
    action: "반죽이 매끄럽고 약간 촉촉하게 뭉쳐질 정도로 물을 조금씩 추가하세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "물이 많으면 반죽이 늘어지고 다루기 힘들어지며, 구운 뒤에도 속이 눅눅하게 남습니다.",
    action: "물 양을 줄이거나 덧가루로 반죽 농도를 조절하세요.",
  },
  {
    id: "flat-uneven-rolling",
    name: "손/밀대로 두께 불균일하게 성형",
    why: "13×9인치 정도의 큰 타원으로 고르게 늘리지 못하면 두꺼운 부분은 안 익고 얇은 부분은 타거나 뚫립니다.",
    action: "가운데보다 가장자리를 살짝 더 두껍게 남기며 최대한 고르고 얇게 늘리세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "브로일·고온 화덕에서 너무 오래/세게 구우면 표면이 순식간에 타면서 고르게 갈색이 나지 않고 부분적으로 딱딱해집니다.",
    action: "30초~1분 단위로 짧게 굽고 색이 나는 정도를 계속 확인하세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "충분히 예열되지 않으면 반점(블리스터)과 부풀음이 안 생기고 색이 밋밋하게 남습니다.",
    action: "오븐/화덕용 스틸이나 스톤을 500°F(약 260℃)까지 충분히 예열한 뒤 구우세요.",
  },
  {
    id: "flat-air-pocket",
    name: "표면 밀착 부족(공기층 형성)",
    why: "반죽을 늘릴 때 두 겹이 서로 눌러 붙지 않거나 표면에 구멍을 내지 않으면, 굽는 동안 안쪽에 큰 공기주머니가 생겨 피타처럼 부풀어 오릅니다.",
    action: "늘린 반죽 표면을 포크 등으로 가볍게 찔러 두거나 밀착시켜, 구울 때 한 곳에 공기가 크게 갇히지 않게 하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "flat-underrest", symptomId: "flat-tears-rolling", weight: 2 },
  { causeId: "flat-underrest", symptomId: "flat-shrinks-back", weight: 2 },
  { causeId: "flat-underrest", symptomId: "flat-tough-chewy", weight: 1 },

  { causeId: "weak-gluten", symptomId: "flat-tears-rolling", weight: 2 },
  { causeId: "weak-gluten", symptomId: "too-wet", weight: 1 },

  { causeId: "flat-underhydrated", symptomId: "flat-tears-rolling", weight: 1 },
  { causeId: "flat-underhydrated", symptomId: "flat-tough-chewy", weight: 1 },
  { causeId: "flat-underhydrated", symptomId: "flat-dry-brittle", weight: 2 },

  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },
  { causeId: "excess-hydration", symptomId: "flat-doughy-thick", weight: 1 },

  { causeId: "flat-uneven-rolling", symptomId: "flat-no-bubbles", weight: 1 },
  { causeId: "flat-uneven-rolling", symptomId: "flat-doughy-thick", weight: 2 },
  { causeId: "flat-uneven-rolling", symptomId: "burnt-outside-raw-inside", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "flat-dry-brittle", weight: 1 },
  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "flat-overpuffed", weight: 1 },

  { causeId: "oven-too-cool", symptomId: "flat-no-bubbles", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "flat-doughy-thick", weight: 1 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "flat-air-pocket", symptomId: "flat-doughy-thick", weight: 1 },
  { causeId: "flat-air-pocket", symptomId: "flat-overpuffed", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-underrest-vs-weakgluten",
    pair: ["flat-underrest", "weak-gluten"],
    text: "반죽을 늘리려고 놓으면 다시 오그라드는 저항감이 강하게 느껴지나요?",
    yesFavors: "flat-underrest",
    noFavors: "weak-gluten",
  },
  {
    id: "q-thickness-check",
    pair: ["flat-uneven-rolling", "flat-underrest"],
    text: "반죽 두께가 부위별로 심하게 다른가요(가운데만 두껍거나 얇음)?",
    yesFavors: "flat-uneven-rolling",
    noFavors: "flat-underrest",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "too-wet", terms: ["반죽이 너무 질어요", "손에 다 붙어요"] },
  { symptomId: "pale", terms: ["색이 안 나요", "창백해요"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "flat-tears-rolling", terms: ["늘리다가 찢어져요", "구멍이 나요", "얇게 안 펴져요"] },
  {
    symptomId: "flat-shrinks-back",
    terms: ["자꾸 오그라들어요", "안 늘어나요", "밀어도 줄어들어요"],
  },
  { symptomId: "flat-no-bubbles", terms: ["반점이 안 생겨요", "안 부풀어요", "밋밋해요"] },
  { symptomId: "flat-tough-chewy", terms: ["질겨요", "뻣뻣해요", "고무같아요"] },
  { symptomId: "flat-dry-brittle", terms: ["금방 딱딱해져요", "부서져요", "말라요"] },
  { symptomId: "flat-doughy-thick", terms: ["속이 안 익어요", "찐득해요", "너무 두꺼워요"] },
  {
    symptomId: "flat-overpuffed",
    terms: ["피타처럼 부풀어요", "속에 공기주머니가 생겨요", "너무 많이 부풀어요"],
  },
];

export const LAVASH: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
