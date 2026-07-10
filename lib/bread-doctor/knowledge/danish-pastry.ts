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
 * 데니시 페이스트리 진단 지식베이스 — matrices/danish-pastry.md(King Arthur Baking·ATK 인용,
 * PEAKED 판정). 크루아상과 라미네이션(`lam-*`) 코드를 이름 그대로 공유하고, 충전물(필링)
 * 관련 실패만 데니시 고유 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
  { id: "lam-butter-leak", label: "구울 때 버터가 흘러나와 팬에 웅덩이/탄 자국이 생김" },
  {
    id: "lam-flat-no-layers",
    label: "단면이 조밀하고 층이 잘 안 보임 (뻑뻑하고 무거운 식감, 벌집 구조 실패)",
  },
  { id: "lam-greasy-texture", label: "다 구운 후 속이 기름지고 눅눅하며 손에 기름이 묻음" },
  { id: "lam-filling-leak", label: "굽는 중 충전물이 옆으로 새어나옴" },
  { id: "lam-soggy-center", label: "충전물 주변 반죽이 눅눅하고 안 익은 느낌" },
  { id: "lam-shape-distortion", label: "모양이 뭉개지거나 충전물이 옆으로 터져나와 형태가 무너짐" },
];

const CAUSES: Cause[] = [
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "성형 후 충분히 부풀지 않으면 오븐 스프링이 약해 층이 안 열리고 속이 조밀하며 버터가 새어나올 틈이 생깁니다.",
    action: "성형 후 실온에서 약 1시간, 반죽이 눈에 띄게 부풀 때까지 발효하세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "특히 복잡하게 접은 모양(페이스트리 롤 등)은 오래 발효할수록 반죽이 힘을 잃어 모양이 옆으로 터지듯 무너집니다.",
    action: "모양이 복잡할수록 발효 시간을 1시간 안팎으로 짧게 잡고 단순한 모양을 우선하세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉과 충전물 표면이 먼저 타거나 끓어 넘치며, 속의 층까지 열이 고르게 전달되지 못합니다.",
    action: "레시피 온도(예: 200℃)를 지키고, 필요하면 굽는 중간에 은박지로 덮어 표면을 보호하세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족하면 충전물 주변 반죽까지 열이 못 미쳐 속이 눅눅하고 색이 약해집니다.",
    action: "오븐을 충분히 예열하고 색과 반죽 익음을 확인하며 시간을 늘리세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "글루텐이 약한 반죽으로 충전물을 감싸거나 접으면 그 부위가 얇아져 찢어지고 충전물이 새어나옵니다.",
    action: "반죽이 매끄럽고 탄력 있게 늘어날 때까지 믹싱하고, 충분히 휴지시킨 뒤 성형하세요.",
  },
  {
    id: "lam-butter-melted",
    name: "라미네이션·성형·최종발효 중 버터가 물러지거나 일부 녹음",
    why: "작업 환경이 따뜻하거나 성형 후 냉장 없이 발효하면 버터가 반죽에 흡수되거나 굽기 전에 새어나옵니다.",
    action: "접기 사이·성형 후 냉장해 버터를 다시 굳히고, 서늘한 환경에서 작업하세요.",
  },
  {
    id: "lam-underlamination",
    name: "접기 횟수 부족 또는 불균일한 밀기로 버터가 고르게 안 퍼짐",
    why: "버터 분포가 불균일하면 부분적으로 층이 아예 안 생기고 얇은 곳에서 버터가 새어나옵니다.",
    action: "매 접기 전 균일한 두께로 밀고 모서리까지 버터가 덮이는지 확인하세요.",
  },
  {
    id: "lam-low-fat-butter",
    name: "저지방·고수분(일반 슈퍼마켓용) 버터 사용",
    why: "수분이 많은 버터는 미는 동안 부서져 반죽에 흡수되며 뚜렷한 층 대신 무겁고 기름진 결과를 냅니다.",
    action: "지방 82% 이상의 유럽식 버터를 사용하세요.",
  },
  {
    id: "lam-filling-too-wet",
    name: "충전물(크림치즈/과일/커스터드)의 수분이 과다함",
    why: "수분이 많은 충전물은 굽는 동안 반죽 쪽으로 스며들어 속을 눅눅하게 하거나, 끓으면서 밖으로 새어나옵니다.",
    action: "과일 충전물은 미리 졸여 수분을 줄이고, 크림치즈 충전물은 물기를 뺀 뒤 사용하세요.",
  },
  {
    id: "lam-overfilled",
    name: "충전물을 레시피보다 과도하게 채움",
    why: "충전물이 많으면 봉합 부위가 버티지 못해 굽는 중 터지거나 모양 자체가 무너집니다.",
    action: "레시피에 표시된 충전물 양을 지키고, 가장자리를 충분히 남겨 봉합하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "lam-butter-leak", weight: 1 },

  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 1 },
  { causeId: "overproof", symptomId: "lam-shape-distortion", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "lam-butter-leak", weight: 1 },
  { causeId: "oven-too-hot", symptomId: "lam-filling-leak", weight: 1 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "lam-soggy-center", weight: 1 },

  { causeId: "weak-gluten", symptomId: "collapsed", weight: 1 },
  { causeId: "weak-gluten", symptomId: "lam-filling-leak", weight: 2 },
  { causeId: "weak-gluten", symptomId: "lam-shape-distortion", weight: 1 },

  { causeId: "lam-butter-melted", symptomId: "lam-butter-leak", weight: 2 },
  { causeId: "lam-butter-melted", symptomId: "lam-flat-no-layers", weight: 2 },
  { causeId: "lam-butter-melted", symptomId: "lam-greasy-texture", weight: 2 },

  { causeId: "lam-underlamination", symptomId: "lam-butter-leak", weight: 1 },
  { causeId: "lam-underlamination", symptomId: "lam-flat-no-layers", weight: 2 },

  { causeId: "lam-low-fat-butter", symptomId: "no-rise", weight: 1 },
  { causeId: "lam-low-fat-butter", symptomId: "lam-flat-no-layers", weight: 2 },
  { causeId: "lam-low-fat-butter", symptomId: "lam-greasy-texture", weight: 2 },

  { causeId: "lam-filling-too-wet", symptomId: "gummy", weight: 1 },
  { causeId: "lam-filling-too-wet", symptomId: "lam-filling-leak", weight: 2 },
  { causeId: "lam-filling-too-wet", symptomId: "lam-soggy-center", weight: 2 },

  { causeId: "lam-overfilled", symptomId: "lam-filling-leak", weight: 2 },
  { causeId: "lam-overfilled", symptomId: "lam-soggy-center", weight: 1 },
  { causeId: "lam-overfilled", symptomId: "lam-shape-distortion", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-overfilled-vs-wet-filling",
    pair: ["lam-overfilled", "lam-filling-too-wet"],
    text: "충전물을 레시피보다 많이 채웠나요?",
    yesFavors: "lam-overfilled",
    noFavors: "lam-filling-too-wet",
  },
  {
    id: "q-butter-melted-vs-low-fat-danish",
    pair: ["lam-butter-melted", "lam-low-fat-butter"],
    text: "사용한 버터가 지방 82% 이상의 유럽식(발효) 버터였나요?",
    yesFavors: "lam-butter-melted",
    noFavors: "lam-low-fat-butter",
  },
  {
    id: "q-oven-hot-vs-butter-melted",
    pair: ["oven-too-hot", "lam-butter-melted"],
    text: "겉면 색이 필요 이상으로 진하게 타거나 충전물이 끓어 넘쳤나요 (버터가 새는 게 아니라)?",
    yesFavors: "oven-too-hot",
    noFavors: "lam-butter-melted",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "lam-filling-leak", terms: ["충전물이 새요", "크림이 흘러나와요", "속이 터져나와요"] },
  {
    symptomId: "lam-soggy-center",
    terms: ["속이 눅눅해요", "충전물 주변이 안 익었어요", "속이 질척해요"],
  },
  {
    symptomId: "lam-shape-distortion",
    terms: ["모양이 뭉개졌어요", "형태가 무너졌어요", "구울 때 옆으로 터졌어요"],
  },
  {
    symptomId: "lam-butter-leak",
    terms: ["버터가 흘러나와요", "버터가 새요", "기름 웅덩이가 생겨요"],
  },
  { symptomId: "lam-flat-no-layers", terms: ["층이 안 보여요", "겹이 안 생겼어요", "빵이 조밀해요"] },
];

export const DANISH_PASTRY: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
