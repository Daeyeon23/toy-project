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
 * 바게트 진단 지식베이스 — matrices/baguette.md(King Arthur Baking 인용, PEAKED 판정).
 * 식빵과 실패 양상이 가장 비슷한 린도우 계열이라 CORE 재사용 비중이 크고,
 * 스코어링/귀(ear) 형성만 `lean-` 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "blowout", label: coreSymptomLabel("blowout") },
  { id: "large-holes", label: coreSymptomLabel("large-holes") },
  { id: "too-wet", label: coreSymptomLabel("too-wet") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  { id: "lean-no-ear", label: "칼집 낸 자리가 안 벌어짐/귀(ear)가 안 생김" },
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
    why: "가스가 충분히 만들어지기 전에 구우면 부피가 안 나고 속이 떡지며, 오븐 안에서 팽창 압력이 스코어링 자국이 아닌 옆면·표면의 약한 부분을 터뜨립니다.",
    action: "1차·2차 발효를 늘려 반죽이 손가락 자국이 느리게 돌아올 때까지 부풀게 하세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "반죽이 힘을 잃어 굽는 중 주저앉고, 스코어링한 자리가 벌어지며 귀(ear)를 만들 힘도 없어 밋밋하게 갈라집니다.",
    action: "반죽 부피가 지나치게 커지기 전에 바로 굽거나 냉장 리타드로 속도를 늦추세요.",
  },
  {
    id: "cold-environment",
    name: coreCauseName("cold-environment"),
    why: "반죽·실내 온도가 낮으면 발효 속도가 크게 느려져 같은 시간에 덜 부풉니다.",
    action: "26~28℃ 환경(오븐 발효 기능, 따뜻한 물 옆 등)에서 발효시켜 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "글루텐이 충분히 형성되지 않으면 가스를 가두는 힘이 약해 부풀다 주저앉고, 스코어링 자국도 힘없이 퍼지기만 합니다.",
    action: "반죽이 매끄럽고 탄력 있게 늘어날 때까지 믹싱·손반죽 또는 오토리즈 시간을 늘려 보세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 속보다 훨씬 빨리 익어 겉은 타거나 두껍고 딱딱해지는 동안 속까지 열이 전달되지 못합니다.",
    action: "오븐 온도를 레시피보다 10~15℃ 낮추고, 스팀 주입 타이밍을 확인하세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족해 굽는 시간이 늘어나면서 크러스트 형성과 수분 증발이 고르게 이뤄지지 않아 속이 설익거나 색이 약해집니다.",
    action: "오븐을 충분히 예열(가능하면 베이킹스톤/스틸 함께 예열)하고 온도계로 실제 온도를 확인하세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "반죽에 물이 많으면 바게트 특유의 얇고 팽팽한 성형이 무너지고, 굽는 중 가스를 가두지 못해 속이 조밀·떡지게 됩니다.",
    action: "레시피의 수분량을 5~10% 줄이거나 오토리즈·폴딩으로 반죽 강도를 먼저 확보해 보세요.",
  },
  {
    id: "lean-scoring-technique",
    name: "스코어링(칼집) 기법 문제",
    why: "칼집이 너무 얕거나 수직으로 들어가면 굽는 중 반죽 표면이 귀(ear)로 벌어지지 못하고, 대신 예측 못 한 곳이 터집니다.",
    action: "곡선형 lame을 사용해 약 30도 각도, 0.6cm 깊이로 겹치듯 사선으로 칼집을 넣어 보세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "yeast-dead", symptomId: "no-rise", weight: 2 },
  { causeId: "yeast-dead", symptomId: "gummy", weight: 2 },
  { causeId: "yeast-dead", symptomId: "pale", weight: 1 },

  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "blowout", weight: 2 },
  { causeId: "underproof", symptomId: "thick-crust", weight: 1 },
  { causeId: "underproof", symptomId: "lean-no-ear", weight: 1 },

  { causeId: "overproof", symptomId: "no-rise", weight: 1 },
  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "large-holes", weight: 2 },
  { causeId: "overproof", symptomId: "lean-no-ear", weight: 2 },

  { causeId: "cold-environment", symptomId: "no-rise", weight: 2 },
  { causeId: "cold-environment", symptomId: "gummy", weight: 1 },

  { causeId: "weak-gluten", symptomId: "no-rise", weight: 1 },
  { causeId: "weak-gluten", symptomId: "collapsed", weight: 1 },
  { causeId: "weak-gluten", symptomId: "gummy", weight: 1 },
  { causeId: "weak-gluten", symptomId: "large-holes", weight: 1 },
  { causeId: "weak-gluten", symptomId: "too-wet", weight: 1 },
  { causeId: "weak-gluten", symptomId: "lean-no-ear", weight: 1 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "blowout", weight: 1 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "excess-hydration", symptomId: "collapsed", weight: 1 },
  { causeId: "excess-hydration", symptomId: "gummy", weight: 1 },
  { causeId: "excess-hydration", symptomId: "large-holes", weight: 1 },
  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },

  { causeId: "lean-scoring-technique", symptomId: "blowout", weight: 1 },
  { causeId: "lean-scoring-technique", symptomId: "lean-no-ear", weight: 2 },
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
    id: "q-overproof-vs-scoring-baguette",
    pair: ["overproof", "lean-scoring-technique"],
    text: "칼집을 낼 때 반죽이 흐물흐물 늘어지듯 잘렸나요, 아니면 탄력 있게 저항했나요?",
    yesFavors: "overproof",
    noFavors: "lean-scoring-technique",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  {
    symptomId: "blowout",
    terms: ["엉뚱한 데가 터졌어요", "옆구리가 갈라졌어요", "칼집 안 낸 데가 찢어졌어요"],
  },
  {
    symptomId: "thick-crust",
    terms: ["껍질이 너무 두꺼워요", "겉이 딱딱해요", "크러스트가 안 얇아요"],
  },
  { symptomId: "too-wet", terms: ["반죽이 흘러내려요", "성형이 안 돼요", "반죽이 손에 다 붙어요"] },
  {
    symptomId: "lean-no-ear",
    terms: ["귀가 안 생겨요", "칼집이 안 벌어져요", "스코어링이 밋밋해요", "칼집 낸 데가 안 터져요"],
  },
];

export const BAGUETTE: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
