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
 * 포카치아 진단 지식베이스 — matrices/focaccia.md(King Arthur Baking 인용, PEAKED 판정).
 * 치아바타처럼 초고수분 반죽이라 CORE 재사용 비중이 크고, 표면 오일 처리 문제만
 * 포카치아 고유 `lean-` 코드로 추가한다. 성형/이동 중 기공 붕괴 코드는 치아바타와 공유.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "too-wet", label: coreSymptomLabel("too-wet") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
  {
    id: "lean-open-crumb-collapse",
    label: "발효는 됐는데 성형/이동 중 기공이 눌려 속이 조밀해짐",
  },
  { id: "lean-oil-pooling", label: "표면 오일이 고여 눅눅하거나 기름진 부분이 생김" },
];

const CAUSES: Cause[] = [
  {
    id: "yeast-dead",
    name: coreCauseName("yeast-dead"),
    why: "이스트가 죽었거나 뜨거운 물에 사멸하면 발효 자체가 시작되지 않아 부풀지 않습니다.",
    action: "유통기한을 확인하고 물 온도를 40℃ 이하로 맞춘 뒤 예비 발효로 활성을 확인하세요.",
  },
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "팬 안에서 충분히 부풀지 않으면 도우가 조밀하고 딱딱해지며, 딤플(손자국)을 눌러도 다시 잘 올라오지 못합니다.",
    action: "팬 발효를 늘려 반죽이 표면 전체에 뚜렷한 기포를 보일 때까지 기다리세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하게 진행되면 반죽이 힘을 잃어 오븐에 넣기 전부터 주저앉고, 신맛이 뚜렷해집니다.",
    action: "팬 발효 상태를 자주 확인하고, 표면이 과하게 늘어지면 바로 오일·토핑을 올려 굽기로 넘어가세요.",
  },
  {
    id: "cold-environment",
    name: coreCauseName("cold-environment"),
    why: "반죽·실내 온도가 낮으면 발효 속도가 크게 느려져 딤플링 후에도 잘 안 부풉니다.",
    action: "26~28℃ 환경에서 발효시켜 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "글루텐 구조가 약하면 딤플링·오일 무게를 못 버텨 부풀다 주저앉고, 성형 중 기공이 쉽게 눌려 빠집니다.",
    action: "스트레치&폴드를 반복해 글루텐을 발달시킨 뒤, 충분히 프루핑된 상태에서 딤플링하세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면·표면 오일이 속보다 훨씬 빨리 익어 겉은 두껍고 딱딱해지는 동안 속까지 열이 전달되지 못합니다.",
    action: "오븐 온도를 레시피보다 10~15℃ 낮춰 보세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족하면 굽는 시간이 늘어나 속이 설익거나 색이 약해지고, 표면 오일이 흡수·조리되지 못한 채 고입니다.",
    action: "오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "레시피보다 물이 더 많으면 팬 안에서 반죽이 필요 이상으로 퍼지고, 속이 떡지게 됩니다.",
    action: "계량을 다시 확인하고, 필요하면 물을 5% 줄여 보세요.",
  },
  {
    id: "lean-degassing-handling",
    name: "성형/이동 중 거친 핸들링",
    why: "딤플링을 너무 세게·오래 눌러 가스를 다 빼면 발효로 만든 기공이 눌려 사라지고 속이 조밀해집니다.",
    action: "딤플링은 손끝으로 가볍게, 1차 발효가 끝난 뒤 짧게 1~2회만 진행해 보세요.",
  },
  {
    id: "lean-oil-technique",
    name: "표면 오일 양·타이밍 문제",
    why: "오일을 너무 많이 붓거나 굽기 직전에 부으면 딤플에 고인 오일이 다 조리되지 못해 그 부분만 눅눅·기름진 채로 남습니다.",
    action:
      "오일은 반죽 전체에 얇게 펴 바르고, 딤플에 소량만 고이게 조절한 뒤 충분히 예열된 오븐에서 구워 보세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "yeast-dead", symptomId: "no-rise", weight: 2 },
  { causeId: "yeast-dead", symptomId: "gummy", weight: 2 },
  { causeId: "yeast-dead", symptomId: "pale", weight: 1 },

  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "thick-crust", weight: 1 },

  { causeId: "overproof", symptomId: "no-rise", weight: 1 },
  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 2 },
  { causeId: "overproof", symptomId: "lean-open-crumb-collapse", weight: 1 },

  { causeId: "cold-environment", symptomId: "no-rise", weight: 2 },
  { causeId: "cold-environment", symptomId: "gummy", weight: 1 },

  { causeId: "weak-gluten", symptomId: "collapsed", weight: 1 },
  { causeId: "weak-gluten", symptomId: "gummy", weight: 1 },
  { causeId: "weak-gluten", symptomId: "too-wet", weight: 1 },
  { causeId: "weak-gluten", symptomId: "lean-open-crumb-collapse", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "lean-oil-pooling", weight: 1 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "lean-oil-pooling", weight: 1 },

  { causeId: "excess-hydration", symptomId: "collapsed", weight: 1 },
  { causeId: "excess-hydration", symptomId: "gummy", weight: 1 },
  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },
  { causeId: "excess-hydration", symptomId: "lean-open-crumb-collapse", weight: 1 },

  { causeId: "lean-degassing-handling", symptomId: "collapsed", weight: 1 },
  { causeId: "lean-degassing-handling", symptomId: "lean-open-crumb-collapse", weight: 2 },

  { causeId: "lean-oil-technique", symptomId: "gummy", weight: 1 },
  { causeId: "lean-oil-technique", symptomId: "lean-oil-pooling", weight: 2 },
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
    id: "q-oiltechnique-vs-ovencool-focaccia",
    pair: ["lean-oil-technique", "oven-too-cool"],
    text: "다른 부분은 잘 익었는데 오일이 고인 자리만 눅눅한가요, 아니면 전체적으로 안 익어 눅눅한가요?",
    yesFavors: "lean-oil-technique",
    noFavors: "oven-too-cool",
  },
];

const SYNONYMS: SynonymEntry[] = [
  {
    symptomId: "lean-oil-pooling",
    terms: ["기름이 고여요", "딤플에 오일이 안 없어져요", "표면이 눅눅해요", "기름져요"],
  },
  {
    symptomId: "lean-open-crumb-collapse",
    terms: ["구멍이 안 생겨요", "속이 조밀해요", "딤플 눌렀는데 안 부풀어요"],
  },
  { symptomId: "sour-smell", terms: ["시어요", "냄새가 이상해요"] },
  { symptomId: "gummy", terms: ["떡져요", "속이 안 익음", "질어요"] },
];

export const FOCACCIA: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
