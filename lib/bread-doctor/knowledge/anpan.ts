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
 * 단팥빵 진단 지식베이스 — matrices/anpan.md(Just One Cookbook 등 대체 출처 인용, PEAKED 판정).
 * CORE 코드와 brioche.ts의 `enr-dense-heavy`를 이름 그대로 재사용하고, 팥소(anko) 충전물
 * 봉합·비율 실패만 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "large-holes", label: coreSymptomLabel("large-holes") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  {
    id: "enr-dense-heavy",
    label: "파운드케이크처럼 무겁고 조밀함 (수분 문제인 gummy와 구분)",
  },
  { id: "enr-filling-oozes", label: "필링(팥소)이 겉으로 새어나오거나 터져 바닥에 눌어붙음" },
  { id: "enr-soggy-around-filling", label: "반죽 자체는 잘 구워졌는데 필링 바로 주변만 축축/눅눅함" },
];

const CAUSES: Cause[] = [
  {
    id: "yeast-dead",
    name: coreCauseName("yeast-dead"),
    why: "이스트가 죽었거나 뜨거운 물/우유에 사멸하면 발효 자체가 시작되지 않아 부풀지 않습니다.",
    action: "유통기한을 확인하고, 물·우유 온도를 30℃ 안팎으로 맞춘 뒤 예비 발효로 활성을 확인하세요.",
  },
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "이스트가 가스를 충분히 만들기 전에 구워, 부피가 안 나고 반죽이 필링 무게를 못 이겨 납작해집니다.",
    action: "손가락으로 눌렀을 때 자국이 서서히 돌아올 때까지 1차 발효를 늘려 보세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고 기공이 커집니다.",
    action: "손가락 자국이 바로 돌아오면(과발효 신호) 그 전 상태에서 구워 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "글루텐이 충분히 형성되지 않으면 팥소 무게를 감싸 지탱할 힘이 약해 주저앉거나 기공이 불규칙해집니다.",
    action: "반죽이 윈도우페인 테스트를 통과할 때까지(매끄럽고 얇게 늘어남) 믹싱 시간을 늘려 보세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 속보다 훨씬 빨리 익어, 겉은 타는데 속(반죽·필링 경계)까지 열이 충분히 전달되지 못합니다.",
    action: "오븐 온도를 낮추고, 갈변이 빠르면 굽는 중간 은박지로 덮으세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족하면 반죽 속(특히 팥소와 닿는 안쪽)이 설익어 떡지고 색이 옅게 나옵니다.",
    action: "오븐을 충분히 예열하고, 온도계로 속 온도(약 85℃/185℉ 이상)를 확인하세요.",
  },
  {
    id: "enr-filling-leak",
    name: "필링(팥소) 누출/터짐",
    why: "팥소가 따뜻하거나 질어 다루기 어려운 상태로 싸면 봉합이 잘 안 되고, 봉합 부위(시접)를 아래로 두지 않으면 굽는 중 그 틈으로 팥소가 새어나와 타 붙습니다.",
    action:
      "팥소를 냉장고에서 충분히 차갑게 식힌 뒤 정량(약 30~35g)만 반죽 중앙에 놓고, 반죽 가장자리를 모아 시접을 꼼꼼히 눌러 붙이고 이음매가 항상 바닥(아래)을 향하게 두세요.",
  },
  {
    id: "enr-filling-imbalance",
    name: "필링 비율/배치 과다",
    why: "레시피 기준보다 팥소를 과하게 넣거나 반죽을 얇게 밀어 필링 비율이 높아지면, 반죽이 그 무게·수분을 못 이겨 여러 곳이 얇아져 터지거나 필링 주변만 눅눅해집니다.",
    action: "필링 무게를 정량대로 저울에 재고, 중앙을 가장자리보다 두껍게 남겨 반죽으로 고르게 감싼 뒤 성형하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "yeast-dead", symptomId: "no-rise", weight: 2 },
  { causeId: "yeast-dead", symptomId: "gummy", weight: 2 },
  { causeId: "yeast-dead", symptomId: "pale", weight: 1 },

  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "enr-dense-heavy", weight: 1 },

  { causeId: "overproof", symptomId: "no-rise", weight: 1 },
  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "large-holes", weight: 2 },

  { causeId: "weak-gluten", symptomId: "collapsed", weight: 2 },
  { causeId: "weak-gluten", symptomId: "large-holes", weight: 2 },
  { causeId: "weak-gluten", symptomId: "enr-dense-heavy", weight: 1 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "enr-filling-leak", symptomId: "collapsed", weight: 1 },
  { causeId: "enr-filling-leak", symptomId: "enr-filling-oozes", weight: 2 },

  { causeId: "enr-filling-imbalance", symptomId: "enr-dense-heavy", weight: 1 },
  { causeId: "enr-filling-imbalance", symptomId: "enr-filling-oozes", weight: 1 },
  { causeId: "enr-filling-imbalance", symptomId: "enr-soggy-around-filling", weight: 2 },
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
    id: "q-underproof-vs-ovencool",
    pair: ["underproof", "oven-too-cool"],
    text: "오븐에 넣기 전 발효에서 반죽이 충분히 부풀었었나요?",
    yesFavors: "oven-too-cool",
    noFavors: "underproof",
  },
  {
    id: "q-overproof-vs-weakgluten",
    pair: ["overproof", "weak-gluten"],
    text: "반죽이 발효 중 한 번 힘있게 부풀었다가 정점을 넘겨 주저앉았나요, 아니면 애초에 반죽이 늘어지고 힘이 없었나요?",
    yesFavors: "overproof",
    noFavors: "weak-gluten",
  },
  {
    id: "q-fillingleak-vs-fillingimbalance",
    pair: ["enr-filling-leak", "enr-filling-imbalance"],
    text: "새어나온 팥소가 이음매(봉합 부위) 한 곳에서 터져 나왔나요, 아니면 반죽 여러 곳이 얇아지며 스며 나왔나요?",
    yesFavors: "enr-filling-leak",
    noFavors: "enr-filling-imbalance",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "enr-dense-heavy", terms: ["너무 무거워요", "파운드케이크 같아요", "촘촘해요"] },
  {
    symptomId: "enr-filling-oozes",
    terms: ["팥소가 새어나와요", "터졌어요", "바닥에 눌어붙었어요", "필링이 흘러나와요"],
  },
  {
    symptomId: "enr-soggy-around-filling",
    terms: ["팥소 주변만 눅눅해요", "필링 근처가 안 익었어요", "속 안쪽만 축축해요"],
  },
];

export const ANPAN: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
