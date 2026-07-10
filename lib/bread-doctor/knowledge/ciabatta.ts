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
 * 치아바타 진단 지식베이스 — matrices/ciabatta.md(King Arthur Baking 인용, PEAKED 판정).
 * 초고수분 반죽 특유의 실패(성형/이동 중 기공 붕괴)만 `lean-` 신규 코드로 추가한다.
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
  { id: "blowout", label: coreSymptomLabel("blowout") },
  {
    id: "lean-open-crumb-collapse",
    label: "발효는 됐는데 성형/이동 중 기공이 눌려 속이 조밀해짐",
  },
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
    why: "가스가 충분히 만들어지기 전에 구우면 부피가 안 나고 속이 떡지며, 팽창 압력이 표면 약한 곳을 불규칙하게 터뜨립니다.",
    action: "1차 발효를 늘려 반죽 표면에 기포가 뚜렷이 보일 때까지 기다리세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하게 진행되면 반죽이 힘을 잃어 다루는 즉시 주저앉고, 효모 대사산물로 신맛이 납니다.",
    action: "반죽 부피·기포 상태를 자주 확인하고, 과하게 늘어지면 바로 성형·굽기로 넘어가세요.",
  },
  {
    id: "cold-environment",
    name: coreCauseName("cold-environment"),
    why: "반죽·실내 온도가 낮으면 발효 속도가 크게 느려져 같은 시간에 덜 부풉니다.",
    action: "26~28℃ 환경에서 발효시켜 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "치아바타는 반죽 강도(글루텐 네트워크)만으로 80%에 달하는 수분을 붙잡아야 하는데, 개발이 부족하면 다루는 동안 구조가 바로 무너집니다.",
    action: "스트레치&폴드를 30분 간격으로 3~4회 반복해 손반죽/믹싱 없이도 글루텐을 발달시켜 보세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 속보다 훨씬 빨리 익어 겉은 타거나 두껍고 딱딱해지는 동안, 수분이 많은 속까지 열이 전달되지 못합니다.",
    action: "오븐 온도를 레시피보다 10~15℃ 낮춰 보세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족하면 굽는 시간이 늘어나면서 수분이 많은 속이 설익거나 색이 약해집니다.",
    action: "오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "레시피보다 물이 더 많으면 반죽이 팬에 퍼지듯 흐르고, 굽는 중 가스를 가두지 못해 속이 떡지게 됩니다.",
    action: "계량을 다시 확인하고, 필요하면 물을 5% 줄이거나 폴딩 횟수를 늘려 보세요.",
  },
  {
    id: "lean-degassing-handling",
    name: "성형/이동 중 거친 핸들링",
    why: "치아바타 반죽은 매우 슬랙(slack)해서, 팬으로 옮기거나 자르는 과정에서 조금만 눌러도 발효로 만든 기공이 눌려 빠져나갑니다.",
    action:
      "덧가루/오일을 손과 작업대에 넉넉히 묻히고, 반죽을 당기지 말고 들어 옮기듯 최소한으로 다뤄 보세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "yeast-dead", symptomId: "no-rise", weight: 2 },
  { causeId: "yeast-dead", symptomId: "gummy", weight: 2 },
  { causeId: "yeast-dead", symptomId: "pale", weight: 1 },

  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "thick-crust", weight: 1 },
  { causeId: "underproof", symptomId: "blowout", weight: 2 },

  { causeId: "overproof", symptomId: "no-rise", weight: 1 },
  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 2 },
  { causeId: "overproof", symptomId: "lean-open-crumb-collapse", weight: 1 },

  { causeId: "cold-environment", symptomId: "no-rise", weight: 2 },
  { causeId: "cold-environment", symptomId: "gummy", weight: 1 },

  { causeId: "weak-gluten", symptomId: "no-rise", weight: 1 },
  { causeId: "weak-gluten", symptomId: "collapsed", weight: 1 },
  { causeId: "weak-gluten", symptomId: "gummy", weight: 1 },
  { causeId: "weak-gluten", symptomId: "too-wet", weight: 1 },
  { causeId: "weak-gluten", symptomId: "lean-open-crumb-collapse", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "blowout", weight: 1 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "excess-hydration", symptomId: "collapsed", weight: 1 },
  { causeId: "excess-hydration", symptomId: "gummy", weight: 1 },
  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },
  { causeId: "excess-hydration", symptomId: "lean-open-crumb-collapse", weight: 1 },

  { causeId: "lean-degassing-handling", symptomId: "collapsed", weight: 1 },
  { causeId: "lean-degassing-handling", symptomId: "lean-open-crumb-collapse", weight: 2 },
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
    id: "q-weakgluten-vs-hydration-ciabatta",
    pair: ["weak-gluten", "excess-hydration"],
    text: "폴딩할 때 반죽을 늘이면 얇은 막처럼 매끄럽게 늘어났나요, 아니면 바로 뚝뚝 끊어졌나요?",
    yesFavors: "excess-hydration",
    noFavors: "weak-gluten",
  },
];

const SYNONYMS: SynonymEntry[] = [
  {
    symptomId: "lean-open-crumb-collapse",
    terms: ["구멍이 안 생겨요", "속이 조밀해요", "치아바타인데 밀도가 높아요", "옮기다 꺼졌어요"],
  },
  { symptomId: "too-wet", terms: ["반죽이 흘러요", "성형이 안 돼요", "반죽이 손에 다 붙어요"] },
  { symptomId: "sour-smell", terms: ["시어요", "발효 냄새가 나요", "쉰내가 나요"] },
  { symptomId: "blowout", terms: ["터졌어요", "갈라져요", "표면이 갈라졌어요"] },
];

export const CIABATTA: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
