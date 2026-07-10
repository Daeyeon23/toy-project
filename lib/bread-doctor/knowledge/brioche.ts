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
 * 브리오슈 진단 지식베이스 — matrices/brioche.md(King Arthur Baking·ATK 인용, PEAKED 판정).
 * CORE 코드를 재사용하고, 버터·설탕·달걀 비중이 높은 반죽 특유의 실패는 `enr-` 신규 코드로
 * 추가한다. `enr-heavy-crumb`/`enr-dense-heavy`/`enr-sugar-crust-browning`은 이 배치(B3)의
 * 다른 3종(panettone/milk-bread/anpan)이 이름 그대로 재사용한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "large-holes", label: coreSymptomLabel("large-holes") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  { id: "enr-greasy-streaky", label: "반죽/빵이 기름지고 버터 줄무늬가 보임" },
  {
    id: "enr-dense-heavy",
    label: "파운드케이크처럼 무겁고 조밀함 (수분 문제인 gummy와 구분)",
  },
];

const CAUSES: Cause[] = [
  {
    id: "yeast-dead",
    name: coreCauseName("yeast-dead"),
    why: "이스트가 죽었거나 뜨거운 물에 사멸하면 발효 자체가 시작되지 않아 부풀지 않습니다.",
    action: "유통기한을 확인하고, 물(또는 우유) 온도를 40℃ 이하로 맞춘 뒤 예비 발효로 활성을 확인하세요.",
  },
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "이스트가 가스를 충분히 만들기 전에 구워, 부피가 안 나고 속이 떡지며 버터 무게를 이길 힘이 부족합니다.",
    action: "따뜻한 곳에서 반죽이 약 2배가 될 때까지 1차 발효를 늘려 보세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고, 기공이 커지며 신맛이 납니다.",
    action: "부피가 2~2.5배를 넘기기 전에 발효를 마쳐 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "글루텐이 충분히 형성되지 않으면 버터·설탕의 무게를 가둘 힘이 약해 주저앉고 기공이 불규칙해집니다.",
    action: "반죽이 매끄럽고 윈도우페인 테스트를 통과할 때까지 믹싱 시간을 늘려 보세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 속보다 훨씬 빨리 익어, 겉은 타거나 두껍고 딱딱해지는 동안 속까지 열이 전달되지 못합니다.",
    action: "오븐 온도를 레시피보다 10~15℃ 낮추고, 필요하면 은박지로 덮어 보세요.",
  },
  {
    id: "enr-butter-leak",
    name: "버터 분리/유출 (butter leak)",
    why: "반죽이나 버터가 너무 따뜻하면 믹싱 중 버터가 녹아 반죽에서 분리·유출되며, 반죽이 기름지고 줄무늬가 생깁니다.",
    action:
      "버터는 \"cool room temperature(말랑하지만 찬)\" 상태로 유지하고, 유출이 보이면 반죽을 15~20분 냉장 후 다시 믹싱해 보세요.",
  },
  {
    id: "enr-heavy-crumb",
    name: "레시피 자체의 구조적 한계 (버터·설탕·달걀 과다)",
    why: "버터·설탕·달걀 비율이 높은 레시피는 글루텐이 이 무게를 못 이겨, 잘 치대도 파운드케이크처럼 무겁고 조밀해질 수 있습니다.",
    action: "브레드 플라워(고단백 밀가루) 비중을 늘려 구조를 보강하거나, 버터를 나눠 넣는 시간을 늘려 보세요.",
  },
  {
    id: "enr-sugar-crust-browning",
    name: "설탕·유지로 인한 과도한 겉면 갈변",
    why: "설탕·유지 함량이 높으면 오븐이 정상 온도여도 마이야르·캐러멜화가 빨리 일어나 겉이 먼저 진하게 타 보일 수 있습니다.",
    action: "굽는 중간부터 은박지로 덮어 갈변 속도를 늦추고, 속 온도(94~96℃)로 완성 여부를 확인하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "yeast-dead", symptomId: "no-rise", weight: 2 },
  { causeId: "yeast-dead", symptomId: "gummy", weight: 2 },

  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "enr-dense-heavy", weight: 1 },

  { causeId: "overproof", symptomId: "no-rise", weight: 1 },
  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "large-holes", weight: 2 },

  { causeId: "weak-gluten", symptomId: "collapsed", weight: 2 },
  { causeId: "weak-gluten", symptomId: "gummy", weight: 1 },
  { causeId: "weak-gluten", symptomId: "large-holes", weight: 2 },
  { causeId: "weak-gluten", symptomId: "enr-dense-heavy", weight: 1 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },

  { causeId: "enr-butter-leak", symptomId: "collapsed", weight: 1 },
  { causeId: "enr-butter-leak", symptomId: "enr-greasy-streaky", weight: 2 },
  { causeId: "enr-butter-leak", symptomId: "enr-dense-heavy", weight: 2 },

  { causeId: "enr-heavy-crumb", symptomId: "no-rise", weight: 1 },
  { causeId: "enr-heavy-crumb", symptomId: "gummy", weight: 1 },
  { causeId: "enr-heavy-crumb", symptomId: "enr-dense-heavy", weight: 2 },

  { causeId: "enr-sugar-crust-browning", symptomId: "burnt-outside-raw-inside", weight: 1 },
  { causeId: "enr-sugar-crust-browning", symptomId: "thick-crust", weight: 1 },
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
    id: "q-underproof-vs-heavy-crumb",
    pair: ["underproof", "enr-heavy-crumb"],
    text: "버터를 레시피보다 많이 넣었거나, 원래 버터 비율이 아주 높은 레시피였나요?",
    yesFavors: "enr-heavy-crumb",
    noFavors: "underproof",
  },
  {
    id: "q-ovenhot-vs-sugarbrowning",
    pair: ["oven-too-hot", "enr-sugar-crust-browning"],
    text: "설탕이 적은 다른 빵(식빵 등)도 이 오븐에서 유독 빨리 타나요?",
    yesFavors: "oven-too-hot",
    noFavors: "enr-sugar-crust-browning",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "thick-crust", terms: ["딱딱해요", "껍질이 두꺼워요"] },
  {
    symptomId: "enr-greasy-streaky",
    terms: ["기름져요", "버터가 새어나와요", "번들거려요", "줄무늬가 생겨요"],
  },
  { symptomId: "enr-dense-heavy", terms: ["너무 무거워요", "파운드케이크 같아요", "촘촘해요"] },
];

export const BRIOCHE: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
