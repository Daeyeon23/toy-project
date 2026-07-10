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
 * 난 진단 지식베이스 — matrices/naan.md(King Arthur Baking 인용, PEAKED 판정).
 * CORE 코드를 재사용하고, 그리들 화력 코드(`flat-griddle-too-*`)는 english-muffin.ts와
 * 이름을 공유한다. 반죽 취급 문제(`flat-overworked-dough`/`flat-rolled-with-pin`)는 신규.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "flat-no-oven-spring", label: "굽는 중 부풀지 않음(오븐 스프링/기포 형성 실패)" },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  { id: "flat-uneven-thickness", label: "두께가 불균일함" },
  { id: "too-wet", label: coreSymptomLabel("too-wet") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
];

const CAUSES: Cause[] = [
  {
    id: "yeast-dead",
    name: coreCauseName("yeast-dead"),
    why: "이스트가 죽었거나 오래되면 발효 자체가 시작되지 않아 반죽이 안 부풀고 색도 안 납니다.",
    action: "유통기한을 확인하고 예비 발효로 활성을 확인해 보세요.",
  },
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "가스가 충분히 안 만들어져 반죽이 얇고 힘없이 구워집니다.",
    action: "1차 발효를 늘려 반죽이 확실히 부풀 때까지 기다려 보세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하면 반죽이 힘을 잃고 신맛이 납니다.",
    action: "부피가 과도해지기 전에 구워 보세요.",
  },
  {
    id: "flat-griddle-too-hot",
    name: "그리들/팬 화력 과다",
    why: "표면(특히 기포 부분)이 30~40초 만에 타버리는데, 속까지 열이 전달되기 전에 겉만 익어 겉탐속설익음이 됩니다.",
    action: "중강불(medium-high)로 낮추고, 첫 면 30~40초·둘째 면 40~50초 기준으로 시간을 조절해 보세요.",
  },
  {
    id: "flat-griddle-too-cool",
    name: "그리들/팬 화력 부족",
    why: "팬이 충분히 뜨겁지 않으면 기포가 안 생기고 색도 안 나며 밀도 높고 뻣뻣해집니다.",
    action: "캐스트아이언/그리들을 중강불로 충분히 예열한 뒤 구워 보세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "반죽이 너무 질면 손으로 늘리기 어렵고 다루기 힘들어집니다.",
    action: "수분을 줄이거나 덧가루를 써 반죽 강도를 높여 보세요.",
  },
  {
    id: "flat-overworked-dough",
    name: "과다 믹싱",
    why: "밀가루 단백질(글루텐)을 과하게 발달시키면 반죽이 질기고 조밀해집니다. 난은 매끈해질 때까지 최소한만 섞는 것이 원칙입니다.",
    action: "반죽을 덩어리 없이 균일해질 때까지만 섞고 더 치대지 마세요.",
  },
  {
    id: "flat-rolled-with-pin",
    name: "롤링핀으로 밀기",
    why: "롤링핀으로 밀면 반죽 속 가스가 다 빠져나가 부풀지 않고 두껍고 딱딱한 난이 됩니다. 손으로 늘려야 기포/부풀림이 남습니다.",
    action: "롤링핀 대신 손으로 둥글게/길게 늘려 보세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "yeast-dead", symptomId: "no-rise", weight: 2 },
  { causeId: "yeast-dead", symptomId: "pale", weight: 1 },
  { causeId: "yeast-dead", symptomId: "gummy", weight: 1 },

  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "flat-no-oven-spring", weight: 1 },
  { causeId: "underproof", symptomId: "gummy", weight: 1 },

  { causeId: "overproof", symptomId: "gummy", weight: 1 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 2 },

  { causeId: "flat-griddle-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "flat-griddle-too-hot", symptomId: "gummy", weight: 1 },

  { causeId: "flat-griddle-too-cool", symptomId: "flat-no-oven-spring", weight: 2 },
  { causeId: "flat-griddle-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "excess-hydration", symptomId: "gummy", weight: 1 },
  { causeId: "excess-hydration", symptomId: "flat-uneven-thickness", weight: 1 },
  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },

  { causeId: "flat-overworked-dough", symptomId: "flat-no-oven-spring", weight: 1 },
  { causeId: "flat-overworked-dough", symptomId: "thick-crust", weight: 2 },

  { causeId: "flat-rolled-with-pin", symptomId: "flat-no-oven-spring", weight: 2 },
  { causeId: "flat-rolled-with-pin", symptomId: "thick-crust", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-yeast-vs-underproof",
    pair: ["yeast-dead", "underproof"],
    text: "1차 발효 때 반죽이 부풀긴 했나요?",
    yesFavors: "underproof",
    noFavors: "yeast-dead",
  },
  {
    id: "q-naan-rolledpin-vs-overworked",
    pair: ["flat-rolled-with-pin", "flat-overworked-dough"],
    text: "밀대(롤링핀)로 반죽을 밀어서 폈나요?",
    yesFavors: "flat-rolled-with-pin",
    noFavors: "flat-overworked-dough",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "pale", terms: ["색이 안 나요", "창백해요"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "sour-smell", terms: ["시어요", "냄새가 이상해요"] },
  { symptomId: "thick-crust", terms: ["질겨요", "딱딱해요", "뻣뻣해요"] },
  {
    symptomId: "flat-no-oven-spring",
    terms: ["기포가 안 생겨요", "안 부풀어요", "부글부글 안 올라와요"],
  },
  { symptomId: "flat-uneven-thickness", terms: ["두께가 안 일정해요", "한쪽만 두꺼워요"] },
];

export const NAAN: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
