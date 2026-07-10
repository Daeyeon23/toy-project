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
 * 잉글리시 머핀 진단 지식베이스 — matrices/english-muffin.md(King Arthur Baking 인용,
 * PEAKED 판정). 그리들 화력 코드(`flat-griddle-too-*`)는 naan.ts와, 두께 불균일 코드는
 * pita.ts/naan.ts와 이름을 공유한다. "nooks and crannies" 실패만 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "flat-dense-no-crannies", label: "nooks and crannies 없이 조직이 조밀함" },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "flat-uneven-thickness", label: "두께가 불균일함" },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  { id: "too-wet", label: coreSymptomLabel("too-wet") },
];

const CAUSES: Cause[] = [
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "가스가 부족하면 조직이 조밀해져 nooks and crannies가 안 생깁니다.",
    action: "2차 발효를 늘려 반죽이 확실히 부풀 때까지 기다려 보세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하면 반죽이 힘을 잃어 그리들 위에서 눌리듯 주저앉고 신맛이 납니다.",
    action: "부피가 과도해지기 전에 구워 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "구조가 약하면 조직이 조밀해지고 그리들 위에서 눌리기 쉽습니다.",
    action: "반죽이 매끄럽고 탄력 있게 늘어날 때까지 치대 보세요.",
  },
  {
    id: "flat-excess-yeast",
    name: "이스트 과다",
    why: "반죽 테스트에서 \"효모가 너무 많으면 작고 촘촘한 기공이 많이 생긴다\"는 결과가 확인됐습니다 — 겉보기엔 발효부족처럼 조밀해 보이지만 메커니즘은 정반대입니다.",
    action: "레시피의 이스트량을 줄이고 발효를 더 느리게 진행해 보세요.",
  },
  {
    id: "flat-griddle-too-hot",
    name: "그리들/팬 화력 과다",
    why: "겉이 너무 빨리 익어(그리들 자국이 타는 동안) 속까지 열이 전달되기 전에 겉만 타버려 속이 설익습니다.",
    action: "중약불(medium-low)로 낮추고 한 면당 10~15분 정도로 천천히 구워 보세요.",
  },
  {
    id: "flat-griddle-too-cool",
    name: "그리들/팬 화력 부족",
    why: "화력이 부족하면 색이 안 나고, 속까지 데우는 데 오래 걸려 조직이 조밀해지고 겉이 오래 익어 두꺼워집니다.",
    action: "그리들을 350°F(중약불) 기준으로 충분히 예열해 보세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "반죽이 너무 질면 성형이 무너지고 그리들 위에서 퍼집니다.",
    action: "수분을 줄이거나 반죽을 좀 더 단단하게 잡아 보세요.",
  },
  {
    id: "flat-uneven-rolling",
    name: "손/밀대로 두께 불균일하게 성형",
    why: "두께를 고르게 패팅하지 않으면 일부만 눌리거나 얇아집니다. 롤링핀을 쓰면 \"nooks and crannies가 눌려 사라진다.\"",
    action: "롤링핀 대신 손으로 가볍게 패팅해 일정한 두께로 만들어 보세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "underproof", symptomId: "flat-dense-no-crannies", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 1 },

  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 2 },

  { causeId: "weak-gluten", symptomId: "flat-dense-no-crannies", weight: 1 },
  { causeId: "weak-gluten", symptomId: "flat-uneven-thickness", weight: 1 },
  { causeId: "weak-gluten", symptomId: "collapsed", weight: 1 },

  { causeId: "flat-excess-yeast", symptomId: "flat-dense-no-crannies", weight: 2 },
  { causeId: "flat-excess-yeast", symptomId: "gummy", weight: 1 },

  { causeId: "flat-griddle-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "flat-griddle-too-hot", symptomId: "gummy", weight: 1 },

  { causeId: "flat-griddle-too-cool", symptomId: "pale", weight: 2 },
  { causeId: "flat-griddle-too-cool", symptomId: "gummy", weight: 1 },
  { causeId: "flat-griddle-too-cool", symptomId: "thick-crust", weight: 1 },

  { causeId: "excess-hydration", symptomId: "flat-uneven-thickness", weight: 1 },
  { causeId: "excess-hydration", symptomId: "collapsed", weight: 1 },
  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },

  { causeId: "flat-uneven-rolling", symptomId: "flat-uneven-thickness", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-em-underproof-vs-excessyeast",
    pair: ["underproof", "flat-excess-yeast"],
    text: "레시피보다 이스트를 더 많이 넣었거나, 반죽이 발효 중 유독 빨리 부풀었나요?",
    yesFavors: "flat-excess-yeast",
    noFavors: "underproof",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "pale", terms: ["색이 안 나요", "창백해요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
  { symptomId: "sour-smell", terms: ["시어요", "냄새가 이상해요"] },
  { symptomId: "thick-crust", terms: ["딱딱해요", "껍질이 두꺼워요"] },
  { symptomId: "too-wet", terms: ["반죽이 너무 질어요", "성형이 안 돼요"] },
  {
    symptomId: "flat-dense-no-crannies",
    terms: ["기공이 없어요", "속이 조밀해요", "구멍이 안 보여요", "너무 촘촘해요"],
  },
  { symptomId: "flat-uneven-thickness", terms: ["두께가 안 일정해요", "한쪽만 두꺼워요"] },
];

export const ENGLISH_MUFFIN: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
