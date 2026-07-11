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
 * 시폰케이크 진단 지식베이스 — matrices/chiffon-cake.md(PEAKED 판정).
 * CORE 오븐 온도 코드를 재사용하고, 분리교반법 고유 실패는 `chif-` 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "chif-gummy-layer", label: "바닥에 젤리 같은 질척한 층이 생김" },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "chif-shrunk-sides", label: "식은 뒤 옆면이 팬에서 떨어져 오그라듦" },
  { id: "chif-dense-heavy", label: "가볍지 않고 무겁고 조밀함" },
  { id: "chif-cracked-top", label: "윗면이 갈라짐" },
];

const CAUSES: Cause[] = [
  {
    id: "chif-underbaked-moist",
    name: "덜 구워 속에 수분이 남음",
    why: "표면은 익어 보여도 중심에 수분이 남으면 식으면서 그 무게로 주저앉고 바닥에 젤리 같은 층이 생깁니다.",
    action: "최소 50분 이상 저온에서 충분히 굽고, 꼬치로 찔러 반죽이 안 묻어날 때까지 확인하세요.",
  },
  {
    id: "chif-weak-meringue-fold",
    name: "머랭을 덜 올렸거나 폴딩 중 꺼짐",
    why: "머랭이 케이크의 유일한 팽창원이라, 약하거나 꺼진 머랭은 굽는 중 공기 구조를 지탱하지 못해 부풀지 않고 조밀해집니다.",
    action: "단단한 뿔이 설 때까지 머랭을 올리고, 노른자 배터에 가볍게 나눠 접어 넣으세요.",
  },
  {
    id: "chif-not-cooled-upside-down",
    name: "굽고 나서 뒤집어 식히지 않음",
    why: "시폰 반죽은 구조가 약해, 뒤집어 자체 무게를 반대로 걸어주지 않으면 식으면서 자기 무게로 주저앉습니다.",
    action: "오븐에서 꺼내자마자 팬째 뒤집어(병 위에 걸치는 등) 완전히 식을 때까지 두세요.",
  },
  {
    id: "chif-oiled-pan",
    name: "팬에 기름칠을 함(시폰팬은 기름칠 금지)",
    why: "반죽이 팬 벽을 붙잡고 타고 올라가야 부푸는데, 기름칠된 미끄러운 벽에서는 반죽이 벽을 타지 못해 부풀다가 주저앉습니다.",
    action: "시폰 전용 팬에는 기름칠·코팅을 하지 말고 맨 팬 그대로 사용하세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "표면이 먼저 빠르게 굳어 팽창 압력을 못 이기고 갈라지며, 속은 고르게 안 익습니다.",
    action: "예열 온도를 레시피대로 지키고 오븐 온도계로 확인하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "chif-underbaked-moist", symptomId: "chif-gummy-layer", weight: 2 },
  { causeId: "chif-underbaked-moist", symptomId: "collapsed", weight: 1 },

  { causeId: "chif-weak-meringue-fold", symptomId: "chif-shrunk-sides", weight: 1 },
  { causeId: "chif-weak-meringue-fold", symptomId: "chif-dense-heavy", weight: 2 },

  { causeId: "chif-not-cooled-upside-down", symptomId: "chif-shrunk-sides", weight: 2 },
  { causeId: "chif-not-cooled-upside-down", symptomId: "collapsed", weight: 1 },

  { causeId: "chif-oiled-pan", symptomId: "chif-shrunk-sides", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "chif-cracked-top", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-not-cooled-vs-oiled-pan",
    pair: ["chif-not-cooled-upside-down", "chif-oiled-pan"],
    text: "시폰팬 안쪽에 기름칠이나 코팅을 하지 않은 맨 팬을 사용했나요?",
    yesFavors: "chif-not-cooled-upside-down",
    noFavors: "chif-oiled-pan",
  },
];

const SYNONYMS: SynonymEntry[] = [
  {
    symptomId: "chif-gummy-layer",
    terms: ["바닥이 떡져요", "젤리 같은 층이 생겨요", "밑이 질척해요"],
  },
  {
    symptomId: "chif-shrunk-sides",
    terms: ["옆면이 오그라들었어요", "테두리가 팬에서 떨어졌어요"],
  },
  {
    symptomId: "chif-dense-heavy",
    terms: ["무거워요", "조밀해요", "가볍지 않아요"],
  },
  {
    symptomId: "chif-cracked-top",
    terms: ["윗면이 갈라져요", "표면이 터져요"],
  },
];

export const CHIFFON_CAKE: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
