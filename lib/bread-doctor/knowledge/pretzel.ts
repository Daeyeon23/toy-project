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
 * 프레첼 진단 지식베이스 — matrices/pretzel.md(King Arthur Baking·ATK 인용, PEAKED 판정).
 * CORE 코드를 재사용하고, bagel.ts의 `boil-*`(보일링/담금) 코드를 이름 그대로 재사용한다.
 * 매듭 성형 특유의 실패는 `pretzel-` 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
  { id: "pretzel-no-sheen", label: "표면에 윤기 없음 / 색이 연한 갈색에 그침" },
  { id: "pretzel-bitter-taste", label: "쓴맛·비누 같은 이상한 맛" },
  { id: "pretzel-blistered-rough", label: "표면이 거칠고 물집처럼 일어남" },
  { id: "pretzel-shape-flattened", label: "담근 후 매듭/팔 모양이 눌리거나 무너짐" },
];

const CAUSES: Cause[] = [
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "가스 생성이 부족해 부피가 안 나고 속이 조밀·떡집니다.",
    action: "따뜻한 곳에서 1차 발효를 늘리고, 반죽이 부드럽게 부풀 때까지 기다리세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "과발효된 반죽은 담글 때 힘을 잃어 주저앉고, 매듭·팔 모양이 뭉개집니다.",
    action: "반죽이 2배 가까이 부풀기 전에 성형·냉장을 마쳐 타이밍을 당기세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "글루텐이 약하면 프레첼 특유의 매듭/팔 모양을 유지하지 못해 데칠 때·굽는 중 형태가 늘어지고 무너집니다.",
    action: "윈도우페인 테스트를 통과할 때까지 믹싱 시간을 늘리고, 성형 전 충분히 휴지시키세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 속보다 훨씬 빨리 익어 겉은 탔는데 속은 덜 구워집니다.",
    action: "오븐 온도를 낮추고 굽는 시간을 조절하세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족해 속이 조밀·떡지고 갈변이 약해집니다.",
    action: "오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요.",
  },
  {
    id: "boil-underboiled",
    name: "보일링/담금 시간 부족",
    why: "라이/베이킹소다 용액에 담그는 시간이 표준보다 짧으면 마이야르 반응이 부족해 색이 연하고 광택이 약합니다.",
    action: "라이는 10~15초, 베이킹소다는 약 1분 기준으로 담그는 시간을 지켜 보세요.",
  },
  {
    id: "boil-overboiled",
    name: "보일링/담금 시간 과다",
    why: "필요 이상 오래 담그면 알칼리가 표면에 과도하게 반응해 거칠고 물집진 질감과 쓴맛이 날 수 있습니다.",
    action: "레시피 권장 시간(라이 10~15초 등)을 넘기지 않도록 타이머를 사용하세요.",
  },
  {
    id: "boil-lye-issue",
    name: "보일링/담금 용액 농도·배합 문제",
    why: "라이 대신 약한 베이킹소다를 쓰거나 농도가 부족하면 색이 갈색에 그치고 광택·특유의 풍미가 약해집니다. 반대로 농도가 너무 강하면 쓴맛·비누 맛이 날 수 있습니다.",
    action: "라이 사용 시 3~4%(중량 기준) 농도를 지키고, 베이킹소다로 대체할 경우 그 한계(진한 마호가니색은 못 낸다는 점)를 감안하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },

  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 1 },
  { causeId: "overproof", symptomId: "pretzel-shape-flattened", weight: 1 },

  { causeId: "weak-gluten", symptomId: "collapsed", weight: 1 },
  { causeId: "weak-gluten", symptomId: "gummy", weight: 1 },
  { causeId: "weak-gluten", symptomId: "pretzel-shape-flattened", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "boil-underboiled", symptomId: "pale", weight: 2 },
  { causeId: "boil-underboiled", symptomId: "pretzel-no-sheen", weight: 2 },

  { causeId: "boil-overboiled", symptomId: "pretzel-bitter-taste", weight: 1 },
  { causeId: "boil-overboiled", symptomId: "pretzel-blistered-rough", weight: 2 },

  { causeId: "boil-lye-issue", symptomId: "pale", weight: 1 },
  { causeId: "boil-lye-issue", symptomId: "pretzel-no-sheen", weight: 1 },
  { causeId: "boil-lye-issue", symptomId: "pretzel-bitter-taste", weight: 2 },
  { causeId: "boil-lye-issue", symptomId: "pretzel-blistered-rough", weight: 1 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-pretzel-overproof-vs-weak-gluten",
    pair: ["overproof", "weak-gluten"],
    text: "반죽을 얇게 늘렸을 때 매끄럽게 늘어나고 잘 찢어지지 않았나요? (윈도우페인 테스트)",
    yesFavors: "overproof",
    noFavors: "weak-gluten",
  },
  {
    id: "q-pretzel-overboiled-vs-lye-issue",
    pair: ["boil-overboiled", "boil-lye-issue"],
    text: "담근 시간이 레시피 권장 시간(라이 10~15초 등)보다 길었나요?",
    yesFavors: "boil-overboiled",
    noFavors: "boil-lye-issue",
  },
  {
    id: "q-pretzel-underproof-vs-oven-cool",
    pair: ["underproof", "oven-too-cool"],
    text: "1차 발효 때 반죽 부피가 부드럽게 부풀었나요?",
    yesFavors: "oven-too-cool",
    noFavors: "underproof",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "sour-smell", terms: ["시어요", "냄새가 이상해요"] },
  { symptomId: "pretzel-no-sheen", terms: ["광이 안 나요", "색이 연해요", "윤기가 없어요"] },
  { symptomId: "pretzel-bitter-taste", terms: ["쓴맛이 나요", "비누 맛 같아요", "맛이 이상해요"] },
  {
    symptomId: "pretzel-blistered-rough",
    terms: ["표면이 거칠어요", "물집처럼 일어나요", "겉이 울퉁불퉁해요"],
  },
  {
    symptomId: "pretzel-shape-flattened",
    terms: ["모양이 눌렸어요", "팔 부분이 무너져요", "매듭이 풀려요"],
  },
];

export const PRETZEL: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
