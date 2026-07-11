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
 * 타르트 진단 지식베이스 — matrices/tart.md(King Arthur Baking 인용, PEAKED 판정).
 * CORE 오븐 온도 코드를 재사용하고, 러빙법(파트 브리제) 고유 실패는 `tart-` 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "tart-shrunk-sides", label: "옆면이 오그라들어 낮아짐" },
  { id: "tart-tough-crust", label: "질기고 딱딱한 식감(버터맛 대신 글루텐이 느껴짐)" },
  { id: "tart-soggy-bottom", label: "바닥이 눅눅하고 축축함" },
  { id: "tart-puffed-bottom", label: "바닥이 부풀어 올라 필링 공간이 줄어듦" },
  {
    id: "burnt-outside-raw-inside",
    label: coreSymptomLabel("burnt-outside-raw-inside"),
  },
  { id: "tart-pale-bottom", label: "바닥만 색이 안 나고 창백함(윗면은 괜찮음)" },
];

const CAUSES: Cause[] = [
  {
    id: "tart-overworked-gluten",
    name: "반죽을 과하게 치대 글루텐이 과다 형성됨",
    why: "글루텐이 많이 발달하면 반죽이 질겨지고 탄성 때문에 구울 때 계속 오그라듭니다.",
    action: "버터가 보이는 상태로 남을 만큼만, 가루가 뭉칠 때까지만 최소한으로 반죽하세요.",
  },
  {
    id: "tart-warm-dough-shrink",
    name: "반죽을 충분히 휴지·냉장하지 않고 바로 구움",
    why: "차갑게 굳지 않은 글루텐은 탄성이 남아있어 오븐 열에 수축하며 옆면이 낮아집니다.",
    action: "팬에 앉힌 뒤 최소 30분 냉장해 글루텐을 이완시키고 지방을 다시 굳히세요.",
  },
  {
    id: "tart-no-pie-weights",
    name: "프리베이킹 시 파이 웨이트(무게추) 없이 또는 부족하게 구움",
    why: "무게추가 없으면 바닥이 부풀어 오르거나 옆면이 안쪽으로 무너집니다.",
    action: "유산지를 깔고 쌀·콩·전용 웨이트로 반죽을 눌러가며 프리베이킹하세요.",
  },
  {
    id: "tart-underbaked-shell",
    name: "프리베이킹이 부족해 셸 자체가 덜 구워짐",
    why: "셸이 충분히 익어 방수층을 만들지 못하면 필링의 수분이 스며들어 바닥이 눅눅해집니다.",
    action: "바닥까지 옅은 갈색이 될 때까지 프리베이킹하고, 필요하면 달걀물로 코팅하세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "가장자리가 먼저 짙게 타버려 중심까지 고르게 익기 전에 겉이 타고 속이 설익습니다.",
    action: "예열 온도를 레시피대로 지키고 오븐 온도계로 확인하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "tart-overworked-gluten", symptomId: "tart-shrunk-sides", weight: 1 },
  { causeId: "tart-overworked-gluten", symptomId: "tart-tough-crust", weight: 2 },

  { causeId: "tart-warm-dough-shrink", symptomId: "tart-shrunk-sides", weight: 2 },

  { causeId: "tart-no-pie-weights", symptomId: "tart-puffed-bottom", weight: 2 },

  { causeId: "tart-underbaked-shell", symptomId: "tart-soggy-bottom", weight: 2 },
  { causeId: "tart-underbaked-shell", symptomId: "tart-pale-bottom", weight: 1 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-overworked-vs-warm-shrink",
    pair: ["tart-overworked-gluten", "tart-warm-dough-shrink"],
    text: "반죽을 팬에 앉힌 뒤 굽기 전 냉장고에서 30분 이상 휴지시켰나요?",
    yesFavors: "tart-overworked-gluten",
    noFavors: "tart-warm-dough-shrink",
  },
];

const SYNONYMS: SynonymEntry[] = [
  {
    symptomId: "tart-shrunk-sides",
    terms: ["옆면이 줄어들었어요", "테두리가 낮아졌어요", "반죽이 오그라들었어요"],
  },
  {
    symptomId: "tart-tough-crust",
    terms: ["질겨요", "딱딱해요", "버터맛이 안 나요"],
  },
  {
    symptomId: "tart-soggy-bottom",
    terms: ["바닥이 눅눅해요", "축축해요", "밑이 안 익었어요"],
  },
  {
    symptomId: "tart-puffed-bottom",
    terms: ["바닥이 부풀었어요", "속이 부풀어 올랐어요", "바닥이 솟았어요"],
  },
  {
    symptomId: "tart-pale-bottom",
    terms: ["바닥만 색이 안 나요", "밑면이 하얘요"],
  },
];

export const TART: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
