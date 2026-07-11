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
 * 휘낭시에 진단 지식베이스 — matrices/financier.md(PEAKED 판정).
 * CORE 오븐 온도 코드를 재사용하고, 브라운버터(뵈르 노아제트) 고유 실패는 `fin-` 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "fin-no-nutty-aroma", label: "헤이즐넛 향 없이 밋밋한 버터향만 남" },
  { id: "fin-bitter-aftertaste", label: "쓴맛/탄내가 남" },
  { id: "pale", label: coreSymptomLabel("pale") },
  {
    id: "burnt-outside-raw-inside",
    label: coreSymptomLabel("burnt-outside-raw-inside"),
  },
  { id: "fin-flat-dense", label: "부풀지 않고 눌린 듯 조밀함" },
  { id: "fin-tough-rubbery", label: "질기고 고무 같은 식감" },
];

const CAUSES: Cause[] = [
  {
    id: "fin-underbrowned-butter",
    name: "브라운버터를 충분히 갈색화하지 않고 멈춤",
    why: "버터를 갈색화하지 않으면 헤이즐넛 향과 견과류 풍미가 안 나고, 수분도 덜 날아가 반죽이 무겁게 가라앉습니다.",
    action: "중불에서 거품이 가라앉고 바닥 밀크 고형분이 짙은 갈색이 될 때까지, 흰 냄비를 써서 색을 확인하며 저으세요.",
  },
  {
    id: "fin-burnt-butter",
    name: "브라운버터를 태워 쓴맛·탄내가 남음",
    why: "밀크 고형분이 갈색을 넘어 검게 타면 캐러멜화가 아니라 탄화가 일어나 쓴맛이 반죽 전체에 퍼집니다.",
    action: "원하는 색이 되기 직전에 불에서 내리세요 — 잔열로 색이 계속 진해집니다.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족하면 반죽 중심까지 빠르게 열이 전달되지 않아 부풀지 못하고 납작하게 가라앉습니다.",
    action: "오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 먼저 짙게 익어버려 속까지 열이 전달되기 전에 겉이 타거나 설익은 속이 남습니다.",
    action: "예열 온도를 레시피대로 지키고 온도계로 확인하세요.",
  },
  {
    id: "fin-overwhipped-batter",
    name: "흰자·가루를 섞을 때 과교반해 글루텐이 발달하고 공기가 빠짐",
    why: "필요 이상으로 오래 섞으면 밀가루의 글루텐이 발달해 질겨지고, 가벼운 기포가 꺼져 조밀해집니다.",
    action: "가루가 안 보일 때까지만 주걱으로 가볍게 섞고 바로 멈추세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "fin-underbrowned-butter", symptomId: "fin-no-nutty-aroma", weight: 2 },
  { causeId: "fin-underbrowned-butter", symptomId: "pale", weight: 1 },

  { causeId: "fin-burnt-butter", symptomId: "fin-bitter-aftertaste", weight: 2 },
  { causeId: "fin-burnt-butter", symptomId: "burnt-outside-raw-inside", weight: 1 },

  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "fin-flat-dense", weight: 1 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "fin-bitter-aftertaste", weight: 1 },

  { causeId: "fin-overwhipped-batter", symptomId: "fin-flat-dense", weight: 1 },
  { causeId: "fin-overwhipped-batter", symptomId: "fin-tough-rubbery", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-underbrowned-vs-oven-cool",
    pair: ["fin-underbrowned-butter", "oven-too-cool"],
    text: "버터를 볶을 때 헤이즐넛 향이 날 때까지 충분히 갈색으로 만들었나요?",
    yesFavors: "oven-too-cool",
    noFavors: "fin-underbrowned-butter",
  },
];

const SYNONYMS: SynonymEntry[] = [
  {
    symptomId: "fin-no-nutty-aroma",
    terms: ["고소한 향이 안 나요", "버터향이 밋밋해요", "헤이즐넛 향이 없어요"],
  },
  {
    symptomId: "fin-bitter-aftertaste",
    terms: ["쓴맛이 나요", "탄내가 나요", "뒷맛이 써요"],
  },
  {
    symptomId: "fin-flat-dense",
    terms: ["안 부풀어요", "조밀해요", "눌린 것 같아요"],
  },
  {
    symptomId: "fin-tough-rubbery",
    terms: ["질겨요", "고무 같아요", "쫄깃하다 못해 질겨요"],
  },
];

export const FINANCIER: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
