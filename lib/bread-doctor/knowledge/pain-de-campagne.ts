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
 * 팽 드 캄파뉴 진단 지식베이스 — matrices/pain-de-campagne.md(King Arthur Baking·ATK 인용, PEAKED 판정).
 * 상업 이스트 대신 사워도우 스타터를 쓰므로 `yeast-dead` 대신 사워도우와 동일한
 * `starter-inactive`/`starter-overripe`(이름 재사용)를 쓰고, 스코어링/귀 코드는 바게트와 공유한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "blowout", label: coreSymptomLabel("blowout") },
  { id: "large-holes", label: coreSymptomLabel("large-holes") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
  { id: "lean-no-ear", label: "칼집 낸 자리가 안 벌어짐/귀(ear)가 안 생김" },
];

const CAUSES: Cause[] = [
  {
    id: "starter-inactive",
    name: "스타터 활성 부족/미성숙",
    why: "먹이를 준 뒤 충분히 활성화되지 않은 스타터는 반죽에 leavening 힘을 거의 못 주어, 발효가 느리고 부피가 안 나옵니다.",
    action:
      "스타터를 먹인 뒤 6~8시간 안에 부피가 2배로 부풀고 표면이 뚜렷하게 기포가 올라오는 상태(peak)에서 반죽에 넣어 보세요.",
  },
  {
    id: "starter-overripe",
    name: "스타터 과숙성/과활성",
    why: "피크를 지나 오래 방치된 스타터는 산(주로 아세트산)이 과하게 쌓여 신맛이 강해지고, 동시에 자체 leavening 힘도 소진돼 반죽이 잘 안 부풀거나 주저앉습니다.",
    action:
      "스타터가 피크(가장 부풀고 기포가 활발한 시점)일 때 바로 사용하고, 늦었다면 한 번 더 먹여 리프레시한 뒤 사용해 보세요.",
  },
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "벌크 발효가 부족하면 부피가 안 나고 속이 떡지며, 팽창 압력이 표면 약한 곳을 불규칙하게 터뜨립니다.",
    action: "반죽이 부피가 뚜렷하게 늘고 손가락 자국이 느리게 돌아올 때까지 벌크 발효를 늘려 보세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고 기공이 커지며, 스코어링한 자리도 벌어지지 못하고 밋밋해집니다.",
    action: "반죽 부피·표면 상태를 자주 확인하고, 냉장 리타드로 발효 속도를 늦춰 스코어링 직전 상태를 맞춰 보세요.",
  },
  {
    id: "cold-environment",
    name: coreCauseName("cold-environment"),
    why: "반죽·실내 온도가 낮으면 발효 속도가 크게 느려져 같은 시간에 덜 부풉니다.",
    action: "26~28℃ 환경에서 발효시키거나 발효 시간을 늘려 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "캄파뉴는 통밀·호밀 혼합으로 흰 밀가루보다 글루텐이 약해지기 쉬운데, 개발이 부족하면 가스를 못 가둬 주저앉고 기공이 불규칙해집니다.",
    action: "스트레치&폴드를 반복하거나 오토리즈 시간을 늘려 글루텐을 발달시켜 보세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 속보다 훨씬 빨리 익어 겉은 타거나 두껍고 딱딱해지는 동안 속까지 열이 전달되지 못합니다.",
    action: "오븐 온도를 레시피보다 10~15℃ 낮추고, 더치 오븐/스팀으로 초반 열 전달을 조절하세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족해 굽는 시간이 늘어나면서 크러스트 형성이 고르지 않아 속이 설익거나 색이 약해집니다.",
    action: "오븐(및 더치 오븐)을 충분히 예열하고 온도계로 실제 온도를 확인하세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "통밀·호밀 혼합에 물을 과하게 넣으면 반죽이 퍼지듯 늘어져 성형이 무너지고 속이 떡지게 됩니다.",
    action: "통밀/호밀 비율에 맞춰 수분을 5~10% 줄이거나 오토리즈로 흡수시켜 보세요.",
  },
  {
    id: "lean-scoring-technique",
    name: "스코어링(칼집) 기법 문제",
    why: "칼집이 너무 얕거나 수직으로 들어가면 굽는 중 반죽 표면이 귀(ear)로 벌어지지 못하고 엉뚱한 곳이 터집니다.",
    action: "곡선형 lame을 얕은 사선으로 밀어 넣어 겹치듯 칼집을 내 보세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "starter-inactive", symptomId: "no-rise", weight: 2 },
  { causeId: "starter-inactive", symptomId: "gummy", weight: 2 },
  { causeId: "starter-inactive", symptomId: "pale", weight: 1 },

  { causeId: "starter-overripe", symptomId: "no-rise", weight: 1 },
  { causeId: "starter-overripe", symptomId: "collapsed", weight: 1 },
  { causeId: "starter-overripe", symptomId: "large-holes", weight: 1 },
  { causeId: "starter-overripe", symptomId: "sour-smell", weight: 2 },

  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "blowout", weight: 2 },
  { causeId: "underproof", symptomId: "thick-crust", weight: 1 },
  { causeId: "underproof", symptomId: "lean-no-ear", weight: 1 },

  { causeId: "overproof", symptomId: "no-rise", weight: 1 },
  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "large-holes", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 1 },
  { causeId: "overproof", symptomId: "lean-no-ear", weight: 2 },

  { causeId: "cold-environment", symptomId: "no-rise", weight: 2 },
  { causeId: "cold-environment", symptomId: "gummy", weight: 1 },

  { causeId: "weak-gluten", symptomId: "no-rise", weight: 1 },
  { causeId: "weak-gluten", symptomId: "collapsed", weight: 1 },
  { causeId: "weak-gluten", symptomId: "gummy", weight: 1 },
  { causeId: "weak-gluten", symptomId: "large-holes", weight: 1 },
  { causeId: "weak-gluten", symptomId: "lean-no-ear", weight: 1 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "blowout", weight: 1 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "excess-hydration", symptomId: "collapsed", weight: 1 },
  { causeId: "excess-hydration", symptomId: "gummy", weight: 2 },
  { causeId: "excess-hydration", symptomId: "large-holes", weight: 1 },

  { causeId: "lean-scoring-technique", symptomId: "blowout", weight: 1 },
  { causeId: "lean-scoring-technique", symptomId: "lean-no-ear", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-starter-vs-underproof-campagne",
    pair: ["starter-inactive", "underproof"],
    text: "반죽에 넣은 스타터가 먹이 준 뒤 6~8시간 안에 부피가 2배로 부푼 활성 상태였나요?",
    yesFavors: "underproof",
    noFavors: "starter-inactive",
  },
  {
    id: "q-overproof-vs-starter-overripe",
    pair: ["overproof", "starter-overripe"],
    text: "반죽에 넣기 전 스타터 자체가 시큼한 냄새가 강하고 꺼져 있었나요, 아니면 스타터는 괜찮았는데 반죽(벌크) 발효 시간이 길었나요?",
    yesFavors: "starter-overripe",
    noFavors: "overproof",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "sour-smell", terms: ["너무 시어요", "쉰내가 나요", "발효 냄새가 강해요"] },
  { symptomId: "lean-no-ear", terms: ["귀가 안 생겨요", "칼집이 안 벌어져요", "스코어링이 밋밋해요"] },
  { symptomId: "large-holes", terms: ["기공이 너무 커요", "구멍이 불규칙해요", "속이 뻥뻥 뚫려있어요"] },
  { symptomId: "no-rise", terms: ["안 부풀어요", "볼륨이 없어요", "스타터를 넣었는데 안 부풀어요"] },
];

export const PAIN_DE_CAMPAGNE: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
