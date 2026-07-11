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
 * 머핀(퀵브레드) 진단 지식베이스 — matrices/quick-muffin.md(PEAKED 판정).
 * CORE 오븐 온도 코드를 재사용하고, 화학팽창 머핀법 고유 실패는 `qmuf-` 신규 코드로 추가한다
 * — 기존 빵의 `quick-`(스콘/소다빵/콘브레드) 접두사와 의도적으로 다른 문자열이다.
 * 이스트 반죽인 "잉글리시 머핀"(leavened-flatbread)과 이름이 겹치지만 완전히 다른 품목이다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "qmuf-tunneling", label: "세로로 긴 구멍(터널)이 생김" },
  { id: "qmuf-tough-chewy", label: "질기고 쫄깃함" },
  { id: "qmuf-flat-no-dome", label: "봉긋한 돔 없이 납작함" },
  { id: "qmuf-coarse-crumb", label: "조직이 거칠고 불균일함" },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  {
    id: "burnt-outside-raw-inside",
    label: coreSymptomLabel("burnt-outside-raw-inside"),
  },
];

const CAUSES: Cause[] = [
  {
    id: "qmuf-overmixed-tunneling",
    name: "과교반으로 글루텐이 과다 발달함",
    why: "젖은 재료와 마른 재료를 섞은 뒤 오래 저으면 글루텐이 발달해, 팽창 가스가 무작위로 빠져나가지 못하고 세로 통로(터널)를 뚫습니다.",
    action: "마른 가루가 안 보일 때까지만 몇 번 젓고, 약간의 덩어리가 남아도 멈추세요.",
  },
  {
    id: "qmuf-too-much-leavener",
    name: "베이킹파우더를 과다 투입함",
    why: "팽창제가 너무 많으면 기포가 과도하게 커지고 서로 합쳐져 조직이 거칠어지며, 지탱하지 못하고 부풀었다 꺼집니다.",
    action: "레시피의 베이킹파우더 계량을 저울/계량스푼으로 정확히 지키세요.",
  },
  {
    id: "qmuf-leavener-dead",
    name: "베이킹파우더가 비활성이거나 부족함",
    why: "팽창제가 오래됐거나 부족하면 반죽을 밀어 올릴 가스가 충분히 생성되지 않아 안 부풀고 조밀합니다.",
    action: "유통기한을 확인하고, 물에 소량을 넣어 즉시 거품이 이는지 활성을 테스트하세요.",
  },
  {
    id: "qmuf-underbaked-center",
    name: "덜 구워 중앙이 설익음",
    why: "중심 온도가 응고점에 도달하기 전에 꺼내면 눅눅하게 남고 식으면서 가라앉습니다.",
    action: "꼬치로 중앙을 찔러 반죽이 안 묻어날 때까지 구우세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 먼저 짙게 익어 속까지 열이 전달되기 전에 겉이 타고 속이 설익습니다.",
    action: "예열 온도를 레시피대로 지키고 오븐 온도계로 확인하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "qmuf-overmixed-tunneling", symptomId: "qmuf-tunneling", weight: 2 },
  { causeId: "qmuf-overmixed-tunneling", symptomId: "qmuf-tough-chewy", weight: 2 },

  { causeId: "qmuf-too-much-leavener", symptomId: "qmuf-flat-no-dome", weight: 1 },
  { causeId: "qmuf-too-much-leavener", symptomId: "qmuf-coarse-crumb", weight: 2 },

  { causeId: "qmuf-leavener-dead", symptomId: "qmuf-flat-no-dome", weight: 2 },
  { causeId: "qmuf-leavener-dead", symptomId: "gummy", weight: 1 },

  { causeId: "qmuf-underbaked-center", symptomId: "gummy", weight: 2 },
  { causeId: "qmuf-underbaked-center", symptomId: "qmuf-flat-no-dome", weight: 1 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "gummy", weight: 1 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-leavener-dead-vs-underbaked",
    pair: ["qmuf-leavener-dead", "qmuf-underbaked-center"],
    text: "꼬치로 중앙을 찔렀을 때 반죽이 묻어나왔나요?",
    yesFavors: "qmuf-underbaked-center",
    noFavors: "qmuf-leavener-dead",
  },
];

const SYNONYMS: SynonymEntry[] = [
  {
    symptomId: "qmuf-tunneling",
    terms: ["구멍이 세로로 나요", "터널이 생겨요", "속에 긴 구멍이 있어요"],
  },
  {
    symptomId: "qmuf-tough-chewy",
    terms: ["질겨요", "쫄깃해요", "쫀득해요"],
  },
  {
    symptomId: "qmuf-flat-no-dome",
    terms: ["봉긋하지 않아요", "돔이 안 생겨요", "납작해요"],
  },
  {
    symptomId: "qmuf-coarse-crumb",
    terms: ["조직이 거칠어요", "속이 울퉁불퉁해요"],
  },
];

export const QUICK_MUFFIN: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
