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
 * 브라우니 진단 지식베이스 — matrices/brownie.md(PEAKED 판정).
 * CORE 오븐 온도 코드를 재사용하고, 멜팅버터·초콜릿 유화 고유 실패는 `brn-` 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "brn-gooey-underset", label: "중심이 설익어 흐물흐물함(잘 안 잘림)" },
  {
    id: "burnt-outside-raw-inside",
    label: coreSymptomLabel("burnt-outside-raw-inside"),
  },
  { id: "brn-tough-cakey", label: "퍼지가 아니라 퍽퍽하고 케이크 같은 식감" },
  { id: "brn-greasy-separated", label: "표면·단면에 기름이 분리되어 얼룩짐" },
  { id: "brn-dry-crumbly", label: "퍼석하고 부스러짐" },
  { id: "brn-no-shiny-crust", label: "특유의 얇고 반짝이는 크래클 탑이 안 생김" },
];

const CAUSES: Cause[] = [
  {
    id: "brn-underbaked",
    name: "덜 구움",
    why: "중심 온도가 응고점에 도달하기 전에 꺼내면 자를 때 중심이 흐물흐물하게 흘러나옵니다.",
    action: "가장자리는 셋팅되고 중심은 살짝 흔들리는 정도까지만 굽고, 꺼낸 뒤 완전히 식혀 자르세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 먼저 익어 굳어버려 속까지 열이 전달되기 전에 겉이 타고 속은 설익습니다.",
    action: "예열 온도를 레시피대로 지키고 오븐 온도계로 확인하세요.",
  },
  {
    id: "brn-overmixed",
    name: "반죽을 과교반해 글루텐이 발달하고 공기가 과하게 들어감",
    why: "필요 이상으로 오래 섞으면 글루텐이 발달해 케이크처럼 부풀고 퍽퍽해지며, 퍼지 특유의 밀도가 사라집니다.",
    action: "나무 주걱으로 가루가 안 보일 때까지만 섞고 바로 멈추세요.",
  },
  {
    id: "brn-choc-seized",
    name: "초콜릿·버터 유화 실패(과열 또는 수분 혼입으로 뭉침)",
    why: "초콜릿에 물기가 섞이거나 너무 급하게 가열하면 지방과 코코아 고형분이 분리돼 매끈하게 섞이지 못합니다.",
    action: "초콜릿과 버터를 약불/중탕으로 천천히 녹이고, 물기가 섞이지 않게 하세요.",
  },
  {
    id: "brn-too-much-flour",
    name: "밀가루 과다(계량 실수 포함)",
    why: "밀가루 비중이 높아지면 지방 대비 전분·글루텐이 많아져 촉촉함 대신 퍼석함이 두드러집니다.",
    action: "계량컵 대신 저울로 밀가루를 계량하고 레시피 비율을 지키세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "brn-underbaked", symptomId: "brn-gooey-underset", weight: 2 },
  { causeId: "brn-underbaked", symptomId: "brn-no-shiny-crust", weight: 1 },

  { causeId: "oven-too-hot", symptomId: "brn-gooey-underset", weight: 1 },
  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },

  { causeId: "brn-overmixed", symptomId: "brn-tough-cakey", weight: 2 },
  { causeId: "brn-overmixed", symptomId: "brn-dry-crumbly", weight: 1 },

  { causeId: "brn-choc-seized", symptomId: "brn-greasy-separated", weight: 2 },

  { causeId: "brn-too-much-flour", symptomId: "brn-tough-cakey", weight: 1 },
  { causeId: "brn-too-much-flour", symptomId: "brn-dry-crumbly", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-overmixed-vs-too-much-flour",
    pair: ["brn-overmixed", "brn-too-much-flour"],
    text: "밀가루를 계량컵이 아니라 저울로 정확히 계량했나요?",
    yesFavors: "brn-overmixed",
    noFavors: "brn-too-much-flour",
  },
];

const SYNONYMS: SynonymEntry[] = [
  {
    symptomId: "brn-gooey-underset",
    terms: ["속이 흐물흐물해요", "자르면 흘러요", "안 익었어요"],
  },
  {
    symptomId: "brn-tough-cakey",
    terms: ["퍽퍽해요", "케이크 같아요", "퍼지가 아니에요"],
  },
  {
    symptomId: "brn-greasy-separated",
    terms: ["기름이 분리됐어요", "얼룩덜룩해요", "기름져요"],
  },
  {
    symptomId: "brn-dry-crumbly",
    terms: ["퍼석해요", "부스러져요", "푸석푸석해요"],
  },
  {
    symptomId: "brn-no-shiny-crust",
    terms: ["윗면이 반짝이지 않아요", "크래클이 없어요", "겉면이 갈라지지 않아요"],
  },
];

export const BROWNIE: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
