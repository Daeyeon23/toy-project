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
 * 콘브레드 진단 지식베이스 — matrices/cornbread.md(King Arthur Baking 인용, PEAKED 판정).
 * scone.ts의 `quick-*` 코드를 이름 그대로 재사용한다(배터형 빵 특성상 quick-butter-melted·
 * quick-delayed-baking은 해당 없음).
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
  { id: "off-taste-soapy", label: "비누/금속 같은 맛이나 쓴맛" },
];

const CAUSES: Cause[] = [
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 속보다 빨리 익어 겉은 두껍고 딱딱해지거나 타는데 속은 설익습니다.",
    action: "오븐 온도를 레시피보다 10~15℃ 낮추고, 필요하면 굽는 중간에 은박지를 덮으세요.",
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
    why: "우유·버터밀크가 레시피보다 많으면 배터가 조밀해지고 속이 떡질 수 있습니다.",
    action: "액체량을 정확히 계량하세요.",
  },
  {
    id: "quick-leavener-dead",
    name: "베이킹파우더/소다 오래됨·비활성",
    why: "베이킹파우더/소다가 오래됐거나 습기를 먹으면 반응이 충분히 일어나지 않아 부풀지 않습니다.",
    action: "뜨거운 물이나 식초에 넣어 즉시 거품이 올라오는지 확인하고, 오래됐으면 교체하세요.",
  },
  {
    id: "quick-leavener-excess",
    name: "베이킹파우더/소다 과다·산-염기 불균형",
    why: "베이킹소다가 버터밀크의 산 양보다 많으면 남은 알칼리가 반응 못한 채 남아 비누·금속 같은 맛을 내고 기공이 거칠어집니다.",
    action: "레시피의 베이킹소다·파우더 비율을 정확히 지키세요.",
  },
  {
    id: "quick-overmixed",
    name: "과다 믹싱으로 글루텐 과발달",
    why: "배터를 오래 저으면 글루텐이 과발달해 질기고 조밀해지며, 속에 불규칙한 큰 구멍(터널)이 생깁니다.",
    action: "가루가 보이지 않을 정도로만 가볍게 섞으세요.",
  },
  {
    id: "quick-under-hydrated",
    name: "계량 오차로 수분 부족",
    why: "버터·기름이 적거나 옥수수가루 비율이 높으면 배터가 결합력을 잃어 마르고 부서지기 쉬워집니다.",
    action: "버터·기름 비율을 레시피대로 지키고, 옥수수가루와 밀가루를 약 5:5로 맞춰 보세요.",
  },
  {
    id: "quick-overbaked",
    name: "과굽기",
    why: "필요한 시간보다 오래 구우면 잔열까지 더해져 과도하게 건조해집니다.",
    action: "가장자리가 팬에서 떨어지고 꼬치가 깨끗이 나오면 바로 꺼내세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "excess-hydration", symptomId: "gummy", weight: 2 },
  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },

  { causeId: "quick-leavener-dead", symptomId: "no-rise", weight: 2 },
  { causeId: "quick-leavener-dead", symptomId: "gummy", weight: 1 },
  { causeId: "quick-leavener-dead", symptomId: "pale", weight: 1 },

  { causeId: "quick-leavener-excess", symptomId: "off-taste-soapy", weight: 2 },
  { causeId: "quick-leavener-excess", symptomId: "large-holes", weight: 2 },

  { causeId: "quick-overmixed", symptomId: "dry-crumbly", weight: 1 },
  { causeId: "quick-overmixed", symptomId: "tough-rubbery", weight: 2 },
  { causeId: "quick-overmixed", symptomId: "large-holes", weight: 1 },

  { causeId: "quick-under-hydrated", symptomId: "dry-crumbly", weight: 2 },
  { causeId: "quick-under-hydrated", symptomId: "tough-rubbery", weight: 1 },

  { causeId: "quick-overbaked", symptomId: "thick-crust", weight: 1 },
  { causeId: "quick-overbaked", symptomId: "dry-crumbly", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-corn-leavenerdead-vs-ovencool",
    pair: ["quick-leavener-dead", "oven-too-cool"],
    text: "베이킹소다/파우더를 뜨거운 물이나 식초에 넣었을 때 바로 거품이 올라오나요?",
    yesFavors: "oven-too-cool",
    noFavors: "quick-leavener-dead",
  },
  {
    id: "q-corn-overmixed-vs-underhydrated",
    pair: ["quick-overmixed", "quick-under-hydrated"],
    text: "반죽을 매끈해질 때까지 충분히(오래) 저었나요?",
    yesFavors: "quick-overmixed",
    noFavors: "quick-under-hydrated",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "thick-crust", terms: ["딱딱해요", "껍질이 두꺼워요"] },
  { symptomId: "dry-crumbly", terms: ["푸석해요", "부서져요", "말랐어요", "가루처럼 부서짐"] },
  { symptomId: "large-holes", terms: ["큰 구멍이 있어요", "기공이 불규칙해요", "터널이 생겼어요"] },
  { symptomId: "off-taste-soapy", terms: ["비누맛", "쓴맛", "금속맛"] },
  { symptomId: "tough-rubbery", terms: ["질겨요", "고무같이 씹혀요"] },
];

export const CORNBREAD: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
