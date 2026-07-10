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
 * 아이리시 소다브레드 진단 지식베이스 — matrices/soda-bread.md(King Arthur Baking 인용,
 * PEAKED 판정). scone.ts의 `quick-*` 코드를 이름 그대로 재사용하고, 베이킹소다+버터밀크의
 * 즉시 반응 특성에서 오는 `quick-delayed-baking`만 신규로 추가한다.
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
    why: "버터밀크가 레시피보다 많거나 반죽이 너무 질면 성형이 무너지고 속이 조밀해집니다.",
    action: "버터밀크량을 정확히 계량하고, 반죽이 심하게 질면 덧가루를 약간만 추가하세요.",
  },
  {
    id: "quick-leavener-dead",
    name: "베이킹파우더/소다 오래됨·비활성",
    why: "베이킹소다가 오래됐거나 습기를 먹으면 버터밀크의 산과 반응하는 힘이 약해져 거의 부풀지 않습니다.",
    action: "베이킹소다를 식초나 뜨거운 물에 넣어 즉시 거품이 올라오는지 확인하고, 개봉 후 6~12개월 지났으면 교체하세요.",
  },
  {
    id: "quick-leavener-excess",
    name: "베이킹파우더/소다 과다·산-염기 불균형",
    why: "베이킹소다가 버터밀크의 산 양보다 많으면 남은 알칼리가 반응 못한 채 남아 비누·금속 같은 맛을 내고 기공이 거칠어집니다.",
    action: "레시피의 베이킹소다량을 정확히 계량하고, 버터밀크 대신 일반 우유를 쓰지 않았는지 확인하세요.",
  },
  {
    id: "quick-overmixed",
    name: "과다 믹싱으로 글루텐 과발달",
    why: "반죽을 필요 이상으로 치대거나 여러 번 뭉치면 글루텐이 과발달해 속이 단단하고 질겨집니다.",
    action: "반죽이 겨우 뭉쳐질 정도로만 5~6회 정도 가볍게 뭉치고 더 치대지 마세요.",
  },
  {
    id: "quick-under-hydrated",
    name: "계량 오차로 수분 부족",
    why: "밀가루가 레시피보다 많거나 버터밀크가 적으면 반죽이 잘 뭉치지 않고 마르고 부슬부슬해집니다.",
    action: "밀가루를 무게로 계량하고, 반죽이 심하게 부슬거리면 버터밀크를 조금씩 추가하세요.",
  },
  {
    id: "quick-delayed-baking",
    name: "반응 후 굽기 지연",
    why: "베이킹소다와 버터밀크는 반죽하는 즉시 반응해 탄산가스를 만들기 시작하므로, 오븐에 넣기 전에 오래 기다리면 가스가 빠져나가 반죽이 덜 부풉니다.",
    action: "오븐을 충분히 예열해두고, 반죽을 다 섞으면 최대한 빨리 오븐에 넣으세요.",
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

  { causeId: "quick-overmixed", symptomId: "no-rise", weight: 1 },
  { causeId: "quick-overmixed", symptomId: "dry-crumbly", weight: 1 },
  { causeId: "quick-overmixed", symptomId: "tough-rubbery", weight: 2 },

  { causeId: "quick-under-hydrated", symptomId: "dry-crumbly", weight: 2 },
  { causeId: "quick-under-hydrated", symptomId: "tough-rubbery", weight: 1 },

  { causeId: "quick-delayed-baking", symptomId: "no-rise", weight: 2 },
  { causeId: "quick-delayed-baking", symptomId: "gummy", weight: 1 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-soda-leavenerdead-vs-delayed",
    pair: ["quick-leavener-dead", "quick-delayed-baking"],
    text: "반죽을 다 섞자마자 바로 예열된 오븐에 넣었나요?",
    yesFavors: "quick-leavener-dead",
    noFavors: "quick-delayed-baking",
  },
  {
    id: "q-soda-overmixed-vs-underhydrated",
    pair: ["quick-overmixed", "quick-under-hydrated"],
    text: "반죽을 뭉칠 때 5~6회보다 많이 치대거나 오래 뭉쳤나요?",
    yesFavors: "quick-overmixed",
    noFavors: "quick-under-hydrated",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "thick-crust", terms: ["딱딱해요", "껍질이 두꺼워요"] },
  { symptomId: "large-holes", terms: ["구멍이 커요", "속에 큰 구멍", "기공이 불규칙해요"] },
  { symptomId: "dry-crumbly", terms: ["부스러져요", "말랐어요", "푸석해요"] },
  { symptomId: "tough-rubbery", terms: ["질겨요", "딱딱하게 씹혀요"] },
  { symptomId: "off-taste-soapy", terms: ["비누맛이 나요", "쓴맛이 나요", "금속맛이 나요"] },
];

export const SODA_BREAD: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
