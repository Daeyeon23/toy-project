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
 * 베이글 진단 지식베이스 — matrices/bagel.md(King Arthur Baking·ATK 인용, PEAKED 판정).
 * CORE 코드를 재사용하고, 데치기(보일링) 고유 실패는 `boil-` 신규 코드로 추가한다.
 * pretzel.ts가 이 파일의 `boil-*` 코드 이름을 그대로 재사용한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "too-wet", label: coreSymptomLabel("too-wet") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "boil-thin-crust", label: "크러스트가 얇고 안 쫄깃함" },
  { id: "boil-tough-wrinkled", label: "겉이 가죽처럼 질기고 표면이 주름짐" },
  { id: "boil-no-shine", label: "표면에 광택 없음 / 색이 칙칙함" },
  { id: "bagel-hole-closed", label: "가운데 구멍이 막히거나 눈에 띄게 좁아짐" },
];

const CAUSES: Cause[] = [
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "가스 생성이 부족해 부피가 안 나고 속이 조밀·떡집니다.",
    action: "따뜻한 곳에서 1차 발효를 늘리고, 정형 후 물에 띄웠을 때 뜨는지(float test)로 발효 완료를 확인하세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "성형된 반죽이 과발효되면 데치는 물에 넣을 때 반죽이 힘을 잃어 주저앉고, 링 모양(구멍)이 뭉개집니다.",
    action: "반죽이 2배 가까이 부풀기 전에 살짝 이르게 데치기 단계로 넘어가세요. 냉장(리타드) 발효로 속도를 늦추면 타이밍 맞추기 쉬워집니다.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "저단백 밀가루를 쓰거나 믹싱이 부족하면 글루텐망이 약해 베이글 특유의 쫄깃함이 안 나오고 빵롤처럼 푹신해지며, 데치는 중 구멍이 늘어져 막힙니다.",
    action: "고단백(하이글루텐) 밀가루를 쓰고, 윈도우페인 테스트를 통과할 때까지 믹싱 시간을 늘려 보세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족하면 굽는 시간이 늘어나 속이 조밀·떡지고 겉면 갈변이 약해집니다.",
    action: "오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "토핑과 겉면이 속보다 훨씬 빨리 타버려 겉은 탔는데 속은 덜 구워집니다.",
    action: "오븐 온도를 낮추고, 필요하면 굽는 중간에 은박지로 덮어 토핑을 보호하세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "수분이 많으면 반죽이 손에 심하게 달라붙어 링 형태를 유지하지 못하고, 데칠 때 모양이 퍼집니다.",
    action: "레시피의 수분량을 줄이거나 덧가루로 반죽 강도를 높여 보세요.",
  },
  {
    id: "boil-underboiled",
    name: "보일링/담금 시간 부족",
    why: "45초 이하로 짧게 데치면 크러스트가 얇고 airy(더 폭신)해지며 특유의 쫄깃함·색이 약해집니다.",
    action: "표준 레시피 기준 앞뒤로 각 60초씩 데쳐 보세요.",
  },
  {
    id: "boil-overboiled",
    name: "보일링/담금 시간 과다",
    why: "90초 이상 오래 데치면 겉은 더 쫄깃해지지만 지나치면 표면이 물을 먹어 가죽처럼 질기고 주름집니다.",
    action: "90초를 넘기지 말고, 데친 뒤 표면 물기를 살짝 털어내고 바로 굽는 것을 권장합니다.",
  },
  {
    id: "boil-lye-issue",
    name: "보일링/담금 용액 농도·배합 문제",
    why: "베이킹소다·몰트시럽 농도가 부족하면 마이야르 반응이 약해 표면 광택과 짙은 색이 안 나옵니다. 반대로 과다하거나 물이 식으면 색·풍미가 불균일해집니다.",
    action: "물 1테이블스푼당 베이킹소다 비율을 레시피대로 지키고, 배치 사이 물을 계속 강하게 끓는 상태로 유지하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },

  { causeId: "overproof", symptomId: "no-rise", weight: 1 },
  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "bagel-hole-closed", weight: 2 },

  { causeId: "weak-gluten", symptomId: "no-rise", weight: 1 },
  { causeId: "weak-gluten", symptomId: "collapsed", weight: 1 },
  { causeId: "weak-gluten", symptomId: "gummy", weight: 1 },
  { causeId: "weak-gluten", symptomId: "bagel-hole-closed", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },

  { causeId: "excess-hydration", symptomId: "collapsed", weight: 1 },
  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },
  { causeId: "excess-hydration", symptomId: "bagel-hole-closed", weight: 1 },

  { causeId: "boil-underboiled", symptomId: "pale", weight: 1 },
  { causeId: "boil-underboiled", symptomId: "boil-thin-crust", weight: 2 },

  { causeId: "boil-overboiled", symptomId: "gummy", weight: 1 },
  { causeId: "boil-overboiled", symptomId: "boil-tough-wrinkled", weight: 2 },

  { causeId: "boil-lye-issue", symptomId: "pale", weight: 1 },
  { causeId: "boil-lye-issue", symptomId: "boil-no-shine", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-bagel-overproof-vs-weak-gluten",
    pair: ["overproof", "weak-gluten"],
    text: "반죽을 얇게 늘렸을 때 매끄럽게 늘어나고 잘 찢어지지 않았나요? (윈도우페인 테스트)",
    yesFavors: "overproof",
    noFavors: "weak-gluten",
  },
  {
    id: "q-bagel-weak-gluten-vs-hydration",
    pair: ["weak-gluten", "excess-hydration"],
    text: "반죽이 찢어지기보다 손에 심하게 달라붙어 다루기 어려웠나요?",
    yesFavors: "excess-hydration",
    noFavors: "weak-gluten",
  },
  {
    id: "q-bagel-underproof-vs-oven-cool",
    pair: ["underproof", "oven-too-cool"],
    text: "1차 발효 때 반죽 부피가 거의 2배로 부풀었나요?",
    yesFavors: "oven-too-cool",
    noFavors: "underproof",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "too-wet", terms: ["반죽이 너무 질어요", "손에 다 붙어요", "성형이 안 돼요"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  {
    symptomId: "boil-thin-crust",
    terms: ["크러스트가 얇아요", "껍질이 안 쫄깃해요", "빵처럼 폭신해요"],
  },
  {
    symptomId: "boil-tough-wrinkled",
    terms: ["겉이 쭈글쭈글해요", "질겨서 씹기 힘들어요", "가죽 같아요"],
  },
  { symptomId: "boil-no-shine", terms: ["광이 안 나요", "색이 칙칙해요", "윤기가 없어요"] },
  {
    symptomId: "bagel-hole-closed",
    terms: ["구멍이 막혔어요", "링 모양이 없어졌어요", "가운데 구멍이 좁아요"],
  },
];

export const BAGEL: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
