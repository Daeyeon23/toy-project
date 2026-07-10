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
 * 펌퍼니클 진단 지식베이스 — matrices/pumpernickel.md(King Arthur Baking 인용, PEAKED 판정).
 * 사워도(사워도우) 기반 + 통호밀 위주라 sourdough.ts의 `starter-*`와 rye-bread.ts의
 * `rye-*`/`dense-heavy-crumb`를 이름 그대로 재사용하고, 저온 장시간 굽기 특유의
 * 크러스트 균열만 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "dense-heavy-crumb", label: "조밀하고 무거운 속 (익었지만 뻑뻑함)" },
  { id: "too-wet", label: coreSymptomLabel("too-wet") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
  { id: "large-holes", label: coreSymptomLabel("large-holes") },
  { id: "crust-alligator-cracking", label: "겉면이 갈라지고 조각남(악어 가죽처럼)" },
  { id: "blowout", label: coreSymptomLabel("blowout") },
];

const CAUSES: Cause[] = [
  {
    id: "starter-inactive",
    name: "스타터 활성 부족/미성숙",
    why: "펌퍼니클은 대부분 사워도 기반이라, 스타터가 약하면 가스 생산력이 부족해 거의 안 부풀고 속이 눅눅하게 남습니다.",
    action: "스타터가 먹인 뒤 6~8시간 안에 2배가 되는 리듬을 확인한 뒤에 반죽에 써 보세요.",
  },
  {
    id: "starter-overripe",
    name: "스타터 과숙성/과활성",
    why: "스타터가 정점을 지나면 반죽이 예상보다 빨리 과발효되어 구조를 잃고 주저앉으며 신맛이 강해집니다.",
    action: "스타터를 정점 근처에서 사용하고 먹이 비율에서 스타터 비중을 줄여 보세요.",
  },
  {
    id: "rye-ratio-too-high",
    name: "호밀 비율 과다로 구조 약화",
    why: "전통적으로도 호밀 비율이 매우 높아 원래 낮고 조밀하지만, 밀가루·바이탈 글루텐 보강 없이 지나치게 높으면(예: 100% 통호밀) 구조가 아예 무너져 잘랐을 때 뭉개집니다.",
    action: "레시피에 명시된 밀가루/바이탈 글루텐 비율을 지키고, 더 가벼운 식감을 원하면 중력분 비중을 늘려 보세요.",
  },
  {
    id: "rye-amylase-gumminess",
    name: "호밀 아밀레이즈 효소로 인한 떡짐",
    why: "통호밀가루는 아밀레이즈 활성이 특히 높아, 산도가 부족하거나 충분히 안 구우면 전분이 과분해되어 속이 진득하게 떡집니다.",
    action: "사워도의 산도를 충분히 살리고, 내부 온도까지 충분히·오래 구워 보세요.",
  },
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "발효가 부족하면 부피가 안 나고 속이 조밀·떡지게 됩니다.",
    action: "반죽이 눌렸을 때 자국이 서서히 돌아올 때까지 발효 시간을 늘려 보세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하면 반죽이 힘을 잃어 굽는 중 주저앉고 기공이 커지며 신맛이 강해집니다.",
    action: "부피가 과하게 늘기 전에 발효를 마치고 바로 구워 보세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "펌퍼니클은 밀도가 높아 원래도 저온 장시간(약 200~225°F, 5시간 이상) 굽기가 정석인데, 시간·온도가 그보다도 부족하면 속까지 열이 전달되지 못해 떡지고 무겁습니다.",
    action: "전통 방식대로 낮은 온도로 충분히 길게(레시피 기준 5시간 내외) 굽거나, 일반 오븐 레시피는 내부 온도 200°F 이상까지 구워 보세요.",
  },
  {
    id: "pumpernickel-crust-crack",
    name: "증기 부족으로 겉면이 갈라짐",
    why: "굽는 초반에 수분(증기)이 부족하면 겉면이 너무 빨리 굳어(팽창 정지) 반죽이 계속 부풀려는 힘과 부딪친 겉면이 갈라집니다.",
    action: "뚜껑 있는 용기(더치 오븐 등)나 오븐 안 물팬으로 초반 20분 정도 증기를 유지해 보세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "starter-inactive", symptomId: "no-rise", weight: 2 },
  { causeId: "starter-inactive", symptomId: "gummy", weight: 1 },
  { causeId: "starter-inactive", symptomId: "dense-heavy-crumb", weight: 1 },

  { causeId: "starter-overripe", symptomId: "collapsed", weight: 2 },
  { causeId: "starter-overripe", symptomId: "sour-smell", weight: 2 },
  { causeId: "starter-overripe", symptomId: "large-holes", weight: 1 },

  { causeId: "rye-ratio-too-high", symptomId: "no-rise", weight: 1 },
  { causeId: "rye-ratio-too-high", symptomId: "dense-heavy-crumb", weight: 2 },
  { causeId: "rye-ratio-too-high", symptomId: "too-wet", weight: 1 },

  { causeId: "rye-amylase-gumminess", symptomId: "gummy", weight: 2 },
  { causeId: "rye-amylase-gumminess", symptomId: "dense-heavy-crumb", weight: 1 },

  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "blowout", weight: 1 },

  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 1 },
  { causeId: "overproof", symptomId: "large-holes", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "dense-heavy-crumb", weight: 1 },

  { causeId: "pumpernickel-crust-crack", symptomId: "thick-crust", weight: 1 },
  { causeId: "pumpernickel-crust-crack", symptomId: "crust-alligator-cracking", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-starter-inactive-vs-underproof-pn",
    pair: ["starter-inactive", "underproof"],
    text: "스타터 자체가 반죽에 넣기 전 잘 부풀어 있었나요(거품 있고 향긋한 산미)?",
    yesFavors: "underproof",
    noFavors: "starter-inactive",
  },
  {
    id: "q-starter-overripe-vs-overproof-pn",
    pair: ["starter-overripe", "overproof"],
    text: "반죽에 섞기 전 스타터 자체가 이미 정점을 지나 가라앉고 시큼한 냄새가 강했나요?",
    yesFavors: "starter-overripe",
    noFavors: "overproof",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "볼륨이 없어요"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
  { symptomId: "gummy", terms: ["떡져요", "속이 안 익은 느낌"] },
  { symptomId: "dense-heavy-crumb", terms: ["돌덩이 같아요", "너무 무거워요", "너무 빡빡해요"] },
  { symptomId: "too-wet", terms: ["반죽이 너무 질어요", "손에 다 붙어요"] },
  { symptomId: "thick-crust", terms: ["껍질이 두꺼워요", "겉이 딱딱해요"] },
  { symptomId: "sour-smell", terms: ["너무 시어요", "냄새가 이상해요"] },
  { symptomId: "large-holes", terms: ["기공이 커요", "구멍이 불규칙해요"] },
  {
    symptomId: "crust-alligator-cracking",
    terms: ["겉이 갈라져요", "표면이 쩍쩍 갈라져요", "껍질이 조각나요"],
  },
  { symptomId: "blowout", terms: ["옆이 터졌어요", "갈라져요"] },
];

export const PUMPERNICKEL: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
