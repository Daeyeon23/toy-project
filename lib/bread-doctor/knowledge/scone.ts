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
 * 스콘 진단 지식베이스 — matrices/scone.md(King Arthur Baking·ATK 인용, PEAKED 판정).
 * 이스트 발효가 없는 화학 팽창(베이킹파우더) 빵이라 CORE의 발효 관련 코드는 전혀 쓰지 않는다.
 * `quick-` 신규 코드는 soda-bread.ts/cornbread.ts가 이름 그대로 재사용한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  { id: "too-wet", label: coreSymptomLabel("too-wet") },
  { id: "large-holes", label: coreSymptomLabel("large-holes") },
  { id: "dry-crumbly", label: "마르고 부슬부슬 부서짐" },
  { id: "tough-rubbery", label: "질기고 고무처럼 씹힘" },
  { id: "no-layers-greasy", label: "옆으로 퍼지고 층이 안 생기며 기름짐" },
  { id: "off-taste-soapy", label: "비누/금속 같은 맛이나 쓴맛" },
];

const CAUSES: Cause[] = [
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 속보다 빨리 익어 겉은 두껍고 딱딱해지거나 타는데 속은 설익습니다.",
    action: "오븐 온도를 레시피보다 10~15℃ 낮추고, 필요하면 굽는 중간에 은박지로 윗면을 덮으세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족해 속까지 고르게 익지 못해 축축하고 색이 약하게 나옵니다.",
    action: "오븐을 충분히 예열하고 온도계로 실제 온도를 확인한 뒤 굽는 시간을 늘려 보세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "액체(우유·크림)가 레시피보다 많으면 반죽이 퍼지고 층을 잡지 못해 속이 조밀해집니다.",
    action: "액체량을 정확히 계량하고, 반죽이 심하게 질면 5~10% 줄여 보세요.",
  },
  {
    id: "quick-leavener-dead",
    name: "베이킹파우더/소다 오래됨·비활성",
    why: "베이킹파우더가 오래됐거나 습기에 노출돼 활성을 잃으면 화학 반응이 충분히 일어나지 않아 부풀지 않습니다.",
    action: "뜨거운 물에 넣어 즉시 거품이 올라오는지 확인하고, 개봉 후 6개월 넘었으면 교체하세요.",
  },
  {
    id: "quick-leavener-excess",
    name: "베이킹파우더/소다 과다·산-염기 불균형",
    why: "베이킹소다/파우더가 산(버터밀크 등)과 균형을 이루지 못할 만큼 많으면 남은 알칼리가 반응하지 못한 채 남아 비누·금속 같은 맛을 내고 기공을 거칠게 만듭니다.",
    action: "계량을 정확히 하고, 산성 재료(버터밀크·요거트) 비율을 레시피대로 맞추세요.",
  },
  {
    id: "quick-overmixed",
    name: "과다 믹싱으로 글루텐 과발달",
    why: "액체를 넣은 뒤 오래 섞거나 반죽을 여러 번 뭉치면 글루텐이 과발달해 질겨지고 부풀림도 방해받습니다.",
    action: "액체를 넣은 뒤엔 가루가 보이지 않을 정도로만 가볍게, 최소한으로만 섞으세요.",
  },
  {
    id: "quick-butter-melted",
    name: "버터가 녹아 층이 안 생김",
    why: "버터가 자르기·굽기 전에 녹으면 반죽이 힘을 잃고 오븐에서 옆으로 퍼지며, 버터가 빠져나와 기름지고 층이 살지 않습니다.",
    action: "버터를 차갑게 유지하고, 자른 반죽을 굽기 전 냉장고/냉동실에서 15~30분 다시 차갑게 식히세요.",
  },
  {
    id: "quick-overbaked",
    name: "과굽기",
    why: "필요한 시간보다 오래 구우면 수분이 과도하게 빠져나가 마르고 부서지기 쉬워집니다.",
    action: "레시피 시간을 기준으로 옅은 황금색이 되면 바로 꺼내고, 오븐마다 다른 실제 온도를 확인하세요.",
  },
  {
    id: "quick-under-hydrated",
    name: "계량 오차로 수분 부족",
    why: "계량컵으로 밀가루를 눌러 담으면 필요량보다 많이 들어가거나 액체가 레시피보다 적으면, 반죽이 잘 뭉치지 않고 마르고 부서집니다.",
    action: "밀가루를 무게로 계량하고, 반죽이 심하게 부슬거리면 액체를 1테이블스푼씩 추가해 보세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "excess-hydration", symptomId: "gummy", weight: 2 },
  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },
  { causeId: "excess-hydration", symptomId: "no-layers-greasy", weight: 1 },

  { causeId: "quick-leavener-dead", symptomId: "no-rise", weight: 2 },
  { causeId: "quick-leavener-dead", symptomId: "gummy", weight: 1 },
  { causeId: "quick-leavener-dead", symptomId: "pale", weight: 1 },

  { causeId: "quick-leavener-excess", symptomId: "off-taste-soapy", weight: 2 },
  { causeId: "quick-leavener-excess", symptomId: "large-holes", weight: 2 },

  { causeId: "quick-overmixed", symptomId: "no-rise", weight: 1 },
  { causeId: "quick-overmixed", symptomId: "dry-crumbly", weight: 1 },
  { causeId: "quick-overmixed", symptomId: "tough-rubbery", weight: 2 },

  { causeId: "quick-butter-melted", symptomId: "no-rise", weight: 1 },
  { causeId: "quick-butter-melted", symptomId: "no-layers-greasy", weight: 2 },

  { causeId: "quick-overbaked", symptomId: "thick-crust", weight: 1 },
  { causeId: "quick-overbaked", symptomId: "dry-crumbly", weight: 2 },

  { causeId: "quick-under-hydrated", symptomId: "dry-crumbly", weight: 2 },
  { causeId: "quick-under-hydrated", symptomId: "tough-rubbery", weight: 1 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-scone-leavenerdead-vs-ovencool",
    pair: ["quick-leavener-dead", "oven-too-cool"],
    text: "베이킹파우더를 뜨거운 물에 넣었을 때 바로 거품이 올라오나요?",
    yesFavors: "oven-too-cool",
    noFavors: "quick-leavener-dead",
  },
  {
    id: "q-scone-overbaked-vs-underhydrated",
    pair: ["quick-overbaked", "quick-under-hydrated"],
    text: "레시피보다 색이 진해질 때까지 오래 구웠나요?",
    yesFavors: "quick-overbaked",
    noFavors: "quick-under-hydrated",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "thick-crust", terms: ["딱딱해요", "껍질이 두꺼워요"] },
  { symptomId: "dry-crumbly", terms: ["말라요", "부서져요", "푸석해요", "가루처럼 부서짐"] },
  { symptomId: "tough-rubbery", terms: ["질겨요", "고무 같아요", "딱딱하게 씹혀요"] },
  {
    symptomId: "no-layers-greasy",
    terms: ["기름져요", "층이 안 생겨요", "납작하게 퍼져요", "버터가 새어나와요"],
  },
  { symptomId: "off-taste-soapy", terms: ["비누맛이 나요", "금속맛이 나요", "쓴맛이 나요"] },
];

export const SCONE: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
