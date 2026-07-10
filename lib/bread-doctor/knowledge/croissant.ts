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
 * 크루아상 진단 지식베이스 — matrices/croissant.md(King Arthur Baking·ATK 인용, PEAKED 판정).
 * CORE 발효·오븐·글루텐 코드를 재사용하고, 버터 라미네이션 고유 실패는 `lam-` 신규 코드로
 * 추가한다. danish-pastry.ts가 이 파일의 `lam-*` 코드 이름을 그대로 재사용한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
  { id: "lam-butter-leak", label: "구울 때 버터가 흘러나와 팬에 웅덩이/탄 자국이 생김" },
  {
    id: "lam-flat-no-layers",
    label: "단면이 조밀하고 층이 잘 안 보임 (뻑뻑하고 무거운 식감, 벌집 구조 실패)",
  },
  { id: "lam-uneven-layers", label: "층이 한쪽은 두껍고 한쪽은 얇게 불균일함" },
  { id: "lam-butter-streaks-raw", label: "겉은 익었는데 층 사이에 날가루/생버터 얼룩이 보임" },
  { id: "lam-greasy-texture", label: "다 구운 후 속이 기름지고 눅눅하며 손에 기름이 묻음" },
];

const CAUSES: Cause[] = [
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "성형 후 충분히 부풀지 않은 채 구우면 오븐 스프링이 약해 층 사이 공간이 안 열리고, 속이 익지 않은 채 조밀해집니다.",
    action: "손가락으로 눌렀을 때 자국이 서서히 돌아올 때까지 1~1.5시간 상온에서 최종 발효하세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "반죽이 너무 오래 부풀면 글루텐과 버터층의 구조가 약해져 굽는 중 주저앉고, 효모 대사산물로 신맛이 납니다.",
    action: "부피가 눈에 띄게 커지되 손가락 자국이 아주 서서히만 돌아오는 시점에 멈추고 바로 구워 보세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 먼저 짙게 익어버려 속의 층까지 열이 전달되기 전에 겉이 타거나 두꺼워집니다.",
    action: "예열 온도를 레시피대로(예: 220℃ 투입 후 200℃로 낮춤) 지키고 오븐 온도계로 확인하세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족하면 겹쳐진 부분(시작·끝 단)까지 열이 못 미쳐 날반죽이 남고 색이 약해집니다.",
    action: "오븐을 충분히 예열하고, 겹쳐진 단에 생반죽이 안 보일 때까지 굽는 시간을 늘리세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "글루텐이 덜 형성된 반죽은 밀 때 저항 없이 찢어져 버터가 반죽을 뚫고 나오거나 층이 한쪽으로 몰립니다.",
    action: "밀 때 반죽이 수축하거나 찢어지면 즉시 3단 접어 냉동실에 15분 넣어 휴지시키세요.",
  },
  {
    id: "lam-butter-melted",
    name: "라미네이션·성형·최종발효 중 버터가 물러지거나 일부 녹음",
    why: "작업 환경이 너무 따뜻하거나(80℉/27℃ 초과) 성형 후 냉장 없이 바로 발효하면 버터가 반죽에 흡수되거나 굽기 전에 새어나옵니다.",
    action: "접기 사이·성형 후 각각 냉장(30분 이상)해 버터를 다시 굳히고, 작업실 온도를 서늘하게 유지하세요.",
  },
  {
    id: "lam-cold-butter-fracture",
    name: "버터가 반죽보다 훨씬 차갑고 단단해 밀 때 깨짐",
    why: "버터가 유연하지 않으면 밀대 압력에 조각조각 부서져 반죽 속에 불균일하게 흩어지고, 그 틈으로 반죽끼리 눌러붙습니다.",
    action: "버터를 밀기 전 \"차갑지만 손가락으로 눌리는\" 정도까지 실온에 두거나 두들겨 펴서 반죽과 비슷한 굳기로 맞추세요.",
  },
  {
    id: "lam-underlamination",
    name: "접기 횟수 부족 또는 불균일한 밀기로 버터가 고르게 안 퍼짐",
    why: "버터가 반죽 전체에 균일하게 분포하지 못하면 버터가 있는 곳과 없는 곳의 층 발달이 달라져 부분적으로 층이 아예 안 생깁니다.",
    action: "매 접기 전 반죽을 균일한 두께로 밀고, 모서리까지 버터가 덮이는지 확인하세요.",
  },
  {
    id: "lam-overlamination",
    name: "접기·밀기를 과도하게 반복해 버터층이 지나치게 얇아짐",
    why: "버터가 너무 얇게 눌리면 오븐에서 증기를 낼 수분이 부족해 층이 서로 붙어버리고, 반죽도 팽창을 못 견디게 팽팽해집니다.",
    action: "접기는 3~4회(레시피 기준)를 넘기지 말고, 접을 때마다 충분히 휴지시켜 반죽이 지나치게 늘어나지 않게 하세요.",
  },
  {
    id: "lam-low-fat-butter",
    name: "저지방·고수분(일반 슈퍼마켓용) 버터 사용",
    why: "수분이 많은 버터는 미는 동안 부서져 반죽과 뒤섞이며, 뚜렷한 층 대신 반죽에 흡수되어 무거운 결과를 냅니다.",
    action: "지방 82% 이상의 유럽식(발효) 버터를 사용하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "lam-butter-leak", weight: 1 },

  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 1 },
  { causeId: "overproof", symptomId: "lam-flat-no-layers", weight: 1 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "lam-butter-leak", weight: 1 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "lam-flat-no-layers", weight: 1 },

  { causeId: "weak-gluten", symptomId: "collapsed", weight: 1 },
  { causeId: "weak-gluten", symptomId: "lam-uneven-layers", weight: 2 },
  { causeId: "weak-gluten", symptomId: "lam-butter-streaks-raw", weight: 1 },

  { causeId: "lam-butter-melted", symptomId: "lam-butter-leak", weight: 2 },
  { causeId: "lam-butter-melted", symptomId: "lam-flat-no-layers", weight: 2 },
  { causeId: "lam-butter-melted", symptomId: "lam-greasy-texture", weight: 2 },

  { causeId: "lam-cold-butter-fracture", symptomId: "lam-flat-no-layers", weight: 1 },
  { causeId: "lam-cold-butter-fracture", symptomId: "lam-uneven-layers", weight: 2 },
  { causeId: "lam-cold-butter-fracture", symptomId: "lam-butter-streaks-raw", weight: 1 },

  { causeId: "lam-underlamination", symptomId: "lam-butter-leak", weight: 1 },
  { causeId: "lam-underlamination", symptomId: "lam-flat-no-layers", weight: 2 },
  { causeId: "lam-underlamination", symptomId: "lam-uneven-layers", weight: 2 },

  { causeId: "lam-overlamination", symptomId: "no-rise", weight: 1 },
  { causeId: "lam-overlamination", symptomId: "lam-flat-no-layers", weight: 2 },

  { causeId: "lam-low-fat-butter", symptomId: "no-rise", weight: 1 },
  { causeId: "lam-low-fat-butter", symptomId: "lam-flat-no-layers", weight: 2 },
  { causeId: "lam-low-fat-butter", symptomId: "lam-greasy-texture", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-weak-gluten-vs-cold-butter",
    pair: ["weak-gluten", "lam-cold-butter-fracture"],
    text: "반죽을 밀 때 반죽 자체가 찢어졌나요 (버터 조각이 아니라)?",
    yesFavors: "weak-gluten",
    noFavors: "lam-cold-butter-fracture",
  },
  {
    id: "q-butter-melted-vs-low-fat",
    pair: ["lam-butter-melted", "lam-low-fat-butter"],
    text: "사용한 버터가 지방 82% 이상의 유럽식(발효) 버터였나요?",
    yesFavors: "lam-butter-melted",
    noFavors: "lam-low-fat-butter",
  },
  {
    id: "q-overlamination-vs-underlamination",
    pair: ["lam-overlamination", "lam-underlamination"],
    text: "접기(턴)를 4번보다 많이 했나요?",
    yesFavors: "lam-overlamination",
    noFavors: "lam-underlamination",
  },
];

const SYNONYMS: SynonymEntry[] = [
  {
    symptomId: "lam-butter-leak",
    terms: ["버터가 흘러나와요", "버터가 새요", "기름 웅덩이가 생겨요", "버터가 다 빠져나갔어요"],
  },
  {
    symptomId: "lam-flat-no-layers",
    terms: ["층이 안 보여요", "겹이 안 생겼어요", "빵이 조밀해요", "벌집무늬가 없어요"],
  },
  {
    symptomId: "lam-uneven-layers",
    terms: ["층이 삐뚤빼뚤해요", "한쪽만 결이 있어요", "층이 고르지 않아요"],
  },
  {
    symptomId: "lam-butter-streaks-raw",
    terms: ["속에 버터 얼룩이 있어요", "안쪽에 생버터 자국이 보여요", "밀가루 줄이 보여요"],
  },
  {
    symptomId: "lam-greasy-texture",
    terms: ["속이 기름져요", "느끼해요", "손에 기름이 묻어요", "눅눅하고 번들거려요"],
  },
];

export const CROISSANT: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
