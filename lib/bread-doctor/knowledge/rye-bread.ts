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
 * 호밀빵(델리 라이) 진단 지식베이스 — matrices/rye-bread.md(King Arthur Baking 인용, PEAKED 판정).
 * CORE 발효·오븐 코드를 재사용하고, 호밀 고유의 낮은 글루텐 형성력·아밀레이즈 효소 활성에서
 * 오는 실패만 `rye-` 신규 코드로 추가한다. pumpernickel.ts가 이 파일의 신규 코드를 그대로 재사용한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "dense-heavy-crumb", label: "조밀하고 무거운 속 (익었지만 뻑뻑함)" },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "blowout", label: coreSymptomLabel("blowout") },
  { id: "large-holes", label: coreSymptomLabel("large-holes") },
  { id: "too-wet", label: coreSymptomLabel("too-wet") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
];

const CAUSES: Cause[] = [
  {
    id: "rye-amylase-gumminess",
    name: "호밀 아밀레이즈 효소로 인한 떡짐",
    why: "호밀에는 밀보다 아밀레이즈 효소가 활발해 전분을 분해하는데, 산도(사워도)가 부족하거나 충분히 굽지 않으면 전분 구조가 안정되지 못해 속이 진득하게 떡집니다.",
    action:
      "호밀 사워(rye sour)나 비네거 등으로 산도를 더하고, 내부 온도 200~210°F까지 충분히 구운 뒤 완전히 식혀서 잘라 보세요.",
  },
  {
    id: "rye-ratio-too-high",
    name: "호밀 비율 과다로 구조 약화",
    why: "레시피보다 호밀가루 비중을 늘리면(또는 바이탈 휘트 글루텐을 빼면) 글루텐 형성 단백질이 부족해져 예상보다 훨씬 낮게 부풀고 조밀·찰기 있게 나옵니다.",
    action: "밀가루(중력분/강력분) 비중을 다시 높이거나 바이탈 휘트 글루텐을 1~2티스푼 추가해 구조를 보강해 보세요.",
  },
  {
    id: "yeast-dead",
    name: coreCauseName("yeast-dead"),
    why: "이스트가 죽었거나 뜨거운 물에 사멸하면 발효 자체가 시작되지 않아 부풀지 않습니다.",
    action: "유통기한을 확인하고 물 온도를 40℃ 이하로 맞춘 뒤 예비 발효로 활성을 확인하세요.",
  },
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "이스트가 가스를 충분히 만들기 전에 구우면 부피가 안 나고 속이 떡지며 표면이 예상치 못한 곳에서 터집니다.",
    action: "반죽이 약 2배가 되고 손가락 자국이 서서히 돌아올 때까지 발효 시간을 늘려 보세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하면 반죽이 힘을 잃어 굽는 중 주저앉고 기공이 커지며 신맛이 강해집니다.",
    action: "부피가 과하게 늘기 전에 발효를 마치고 바로 구워 보세요.",
  },
  {
    id: "cold-environment",
    name: coreCauseName("cold-environment"),
    why: "반죽·실내 온도가 낮으면 발효 속도가 느려져 같은 시간에 덜 부풉니다.",
    action: "26~28℃ 환경에서 발효시켜 보세요.",
  },
  {
    id: "excess-hydration",
    name: coreCauseName("excess-hydration"),
    why: "호밀가루는 원래 흡수율이 높고 펜토산 때문에 잘 뭉치지 않는데, 레시피보다 물이 더 많으면 반죽이 성형 불가능할 정도로 늘어집니다.",
    action: "물을 줄이거나 덧가루 대신 손·작업대에 오일을 발라 다루기 쉽게 만들어 보세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 속보다 훨씬 빨리 익어 겉이 타거나 두꺼워지는 동안 속까지 열이 전달되지 못합니다.",
    action: "오븐 온도를 10~15℃ 낮추고 필요하면 은박지로 덮어 보세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족하면 굽는 시간이 늘어나 껍질 형성·수분 증발이 고르지 않아 속이 설익거나 색이 약해집니다. 호밀빵은 밀도가 높아 일반 식빵보다 더 오래/높은 내부온도까지 구워야 합니다.",
    action: "오븐을 충분히 예열하고 온도계로 확인하며, 내부 온도 200°F 이상까지 구워 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "호밀 반죽은 원래 밀가루만큼 매끈해지지 않지만, 섞인 밀가루 부분의 글루텐마저 부족하게 개발하면 가스를 가두는 힘이 더 약해져 주저앉고 기공이 불규칙해집니다.",
    action: "호밀 반죽은 점토 같은 질감이 정상임을 인지하되, 밀가루가 들어간 배합은 매끄러워질 때까지 믹싱 시간을 조금 더 줘 보세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "rye-amylase-gumminess", symptomId: "gummy", weight: 2 },
  { causeId: "rye-amylase-gumminess", symptomId: "dense-heavy-crumb", weight: 1 },

  { causeId: "rye-ratio-too-high", symptomId: "no-rise", weight: 1 },
  { causeId: "rye-ratio-too-high", symptomId: "dense-heavy-crumb", weight: 2 },
  { causeId: "rye-ratio-too-high", symptomId: "too-wet", weight: 1 },

  { causeId: "yeast-dead", symptomId: "no-rise", weight: 2 },
  { causeId: "yeast-dead", symptomId: "gummy", weight: 1 },
  { causeId: "yeast-dead", symptomId: "pale", weight: 1 },

  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "blowout", weight: 1 },

  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "large-holes", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 1 },

  { causeId: "cold-environment", symptomId: "no-rise", weight: 2 },
  { causeId: "cold-environment", symptomId: "gummy", weight: 1 },

  { causeId: "excess-hydration", symptomId: "gummy", weight: 1 },
  { causeId: "excess-hydration", symptomId: "large-holes", weight: 1 },
  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "blowout", weight: 1 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "dense-heavy-crumb", weight: 1 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 1 },

  { causeId: "weak-gluten", symptomId: "collapsed", weight: 1 },
  { causeId: "weak-gluten", symptomId: "dense-heavy-crumb", weight: 1 },
  { causeId: "weak-gluten", symptomId: "large-holes", weight: 1 },
  { causeId: "weak-gluten", symptomId: "too-wet", weight: 1 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-yeast-dead-vs-underproof",
    pair: ["yeast-dead", "underproof"],
    text: "1차 발효 때 반죽이 부풀긴 했나요?",
    yesFavors: "underproof",
    noFavors: "yeast-dead",
  },
  {
    id: "q-amylase-vs-oven-too-cool",
    pair: ["rye-amylase-gumminess", "oven-too-cool"],
    text: "내부 온도 200°F(약 93℃) 이상까지 충분히, 오래 구웠는데도 여전히 떡졌나요?",
    yesFavors: "rye-amylase-gumminess",
    noFavors: "oven-too-cool",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "볼륨이 없어요"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
  { symptomId: "gummy", terms: ["떡져요", "속이 안 익은 느낌"] },
  {
    symptomId: "dense-heavy-crumb",
    terms: ["너무 무거워요", "너무 조밀해요", "빡빡해요", "돌덩이 같아요"],
  },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 타요", "속이 안 익어요"] },
  { symptomId: "pale", terms: ["색이 안 나요", "창백해요"] },
  { symptomId: "blowout", terms: ["옆이 터졌어요", "갈라져요"] },
  { symptomId: "large-holes", terms: ["기공이 커요", "구멍이 불규칙해요"] },
  { symptomId: "too-wet", terms: ["반죽이 너무 질어요", "손에 다 붙어요"] },
  { symptomId: "thick-crust", terms: ["껍질이 두꺼워요", "겉이 딱딱해요"] },
  { symptomId: "sour-smell", terms: ["너무 시어요", "냄새가 이상해요"] },
];

export const RYE_BREAD: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
