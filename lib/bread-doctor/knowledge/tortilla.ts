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
 * 밀가루 토르티야 진단 지식베이스 — matrices/tortilla.md(King Arthur Baking·ATK 인용,
 * PEAKED 판정). 무발효 플랫브레드라 CORE 발효 코드(yeast-dead/underproof/overproof/
 * cold-environment)는 전혀 쓰지 않는다. `flat-*` 신규 코드는 lavash.ts가 이름 그대로
 * 재사용한다. 원인 `flat-uneven-rolling`은 pita.ts/english-muffin.ts가 이미 쓰는 이름을
 * 그대로 따른다 — 같은 문자열이 다른 파일에서 증상 id(`flat-uneven-thickness`)로도 쓰이므로
 * 원인과 증상에 별도 id를 유지해 네임스페이스 충돌을 피한다.
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
];

const CAUSES: Cause[] = [
  {
    id: "flat-underrest",
    name: "반죽 휴지 부족",
    why: "치댄 뒤 충분히 쉬지 못하면 글루텐이 긴장 상태로 남아 얇게 밀어도 계속 오그라들고, 강제로 늘리면 찢어집니다.",
    action: "성형 전 30분 이상(최대 몇 시간까지 가능) 덮어서 실온에 휴지시키세요. 이미 치댄 반죽이 잘 안 늘어나면 5~10분 더 쉬게 한 뒤 다시 시도하세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "지방이 밀가루를 과도하게 코팅하거나 지방·수분 균형이 안 맞으면 반죽이 힘없이 부서져, 얇게 밀 때 저항 없이 구멍이 나거나 찢어집니다. 식빵과 달리 토르티야는 글루텐을 \"더 발달시키는\" 방향의 조치가 답이 아닙니다 — 목표는 최소한의 결합력입니다.",
    action: "지방(라드/쇼트닝)과 물 비율을 레시피대로 정확히 계량하고, 2분 내외로만 가볍게 치대 결합력만 만드세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "물이 많으면 반죽이 질척해 다루기 힘들고, 구운 뒤에도 안까지 잘 마르지 않아 찐득한 느낌이 남습니다.",
    action: "물 양을 5~10% 줄이거나 덧가루를 더해 반죽 농도를 \"붙었다 떼는 스티키노트\" 정도로 맞추세요.",
  },
  {
    id: "flat-underhydrated",
    name: "수분 부족",
    why: "수분이 부족하면 반죽이 뻑뻑해 밀 때 갈라지거나 가장자리가 부서지고, 구운 뒤 빨리 말라 뻣뻣해집니다.",
    action: "따뜻한 물(약 40~50℃)을 반죽이 \"촉촉하지만 안 붙는\" 농도가 될 때까지 조금씩 추가하세요.",
  },
  {
    id: "flat-uneven-rolling",
    name: "손/밀대로 두께 불균일하게 성형",
    why: "밀대로 고르게 밀지 못하면 두꺼운 부분은 속까지 안 익고, 얇은 부분은 타거나 뚫립니다.",
    action: "중심에서 바깥으로(\"해가 뻗어나가듯\") 밀고, 90도씩 돌려가며 두께를 확인하세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "팬이 과열되면 표면 반점이 순식간에 타버리고 속까지 열이 전달되기 전에 겉이 딱딱해집니다.",
    action: "불을 살짝 줄이고 굽는 시간을 조금 늘려, 반점이 타지 않고 고르게 생기도록 조절하세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "예열이 부족하면 수증기가 급격히 생기지 않아 기포·부풀음이 안 생기고 색도 잘 안 납니다.",
    action: "무유 팬(코팅 없이)을 물방울이 튀자마자 증발할 정도로 충분히 예열한 뒤 구우세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "flat-underrest", symptomId: "flat-tears-rolling", weight: 2 },
  { causeId: "flat-underrest", symptomId: "flat-shrinks-back", weight: 2 },
  { causeId: "flat-underrest", symptomId: "flat-tough-chewy", weight: 1 },

  { causeId: "weak-gluten", symptomId: "flat-tears-rolling", weight: 2 },
  { causeId: "weak-gluten", symptomId: "too-wet", weight: 2 },
  { causeId: "weak-gluten", symptomId: "flat-doughy-thick", weight: 1 },

  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },
  { causeId: "excess-hydration", symptomId: "flat-no-bubbles", weight: 1 },
  { causeId: "excess-hydration", symptomId: "flat-doughy-thick", weight: 2 },

  { causeId: "flat-underhydrated", symptomId: "flat-tears-rolling", weight: 2 },
  { causeId: "flat-underhydrated", symptomId: "flat-no-bubbles", weight: 1 },
  { causeId: "flat-underhydrated", symptomId: "flat-dry-brittle", weight: 2 },

  { causeId: "flat-uneven-rolling", symptomId: "flat-no-bubbles", weight: 1 },
  { causeId: "flat-uneven-rolling", symptomId: "flat-doughy-thick", weight: 2 },
  { causeId: "flat-uneven-rolling", symptomId: "burnt-outside-raw-inside", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "flat-dry-brittle", weight: 1 },
  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "flat-no-bubbles", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "flat-doughy-thick", weight: 1 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },
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
    id: "q-weakgluten-vs-underhydrated",
    pair: ["weak-gluten", "flat-underhydrated"],
    text: "반죽을 만졌을 때 뻑뻑하고 마른 느낌인가요?",
    yesFavors: "flat-underhydrated",
    noFavors: "weak-gluten",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "too-wet", terms: ["반죽이 너무 질어요", "손에 다 붙어요"] },
  { symptomId: "pale", terms: ["색이 안 나요", "창백해요"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "flat-tears-rolling", terms: ["찢어져요", "구멍이 나요", "밀다가 뚫려요"] },
  {
    symptomId: "flat-shrinks-back",
    terms: ["자꾸 오그라들어요", "안 늘어나요", "밀어도 줄어들어요"],
  },
  { symptomId: "flat-no-bubbles", terms: ["기포가 안 생겨요", "안 부풀어요", "밋밋해요"] },
  { symptomId: "flat-tough-chewy", terms: ["질겨요", "뻣뻣해요", "고무같아요"] },
  { symptomId: "flat-dry-brittle", terms: ["금방 딱딱해져요", "부서져요", "말라요"] },
  { symptomId: "flat-doughy-thick", terms: ["속이 안 익어요", "찐득해요", "너무 두꺼워요"] },
];

export const TORTILLA: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
