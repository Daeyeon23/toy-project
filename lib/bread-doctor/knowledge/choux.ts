import { coreCauseName } from "@/lib/bread-doctor/knowledge/_core";
import type {
  Association,
  BreadKnowledge,
  Cause,
  DiscriminatorQuestion,
  Symptom,
  SynonymEntry,
} from "@/types/bread-doctor";

/**
 * 슈 진단 지식베이스 — matrices/choux.md(PEAKED 판정).
 * CORE 오븐 온도 코드를 재사용하고, 스팀 팽창(익반죽/판아드) 고유 실패는 `choux-` 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "choux-not-risen", label: "거의 안 부풀고 납작함" },
  { id: "choux-spread-flat", label: "모양을 못 잡고 퍼짐" },
  { id: "choux-cracked-uneven", label: "표면이 불규칙하게 갈라짐" },
  { id: "choux-collapsed-deflated", label: "다 부풀었다가 꺼짐/주저앉음" },
  { id: "choux-soggy-interior", label: "속이 축축하고 설익음" },
];

const CAUSES: Cause[] = [
  {
    id: "choux-wet-panade",
    name: "익반죽(판아드)의 수분을 충분히 날리지 않음",
    why: "냄비에서 반죽을 충분히 저어 말리지 않으면 수분이 과다하게 남아, 오븐에서 증기로 부풀 힘이 약하고 속이 눅눅하게 남습니다.",
    action: "냄비 바닥에 얇은 막이 눌어붙기 시작할 때까지 중불에서 계속 저으며 수분을 날리세요.",
  },
  {
    id: "choux-too-many-eggs",
    name: "달걀을 과다 투입해 반죽이 너무 묽음",
    why: "달걀을 넣을 때마다 반죽 되기를 확인하지 않고 전부 넣으면 반죽이 흘러내릴 만큼 묽어져 모양을 못 잡고 퍼집니다.",
    action: "반죽을 주걱으로 들어 올렸을 때 역삼각형(V자)으로 천천히 떨어지는 되기가 될 때까지 달걀을 나눠 넣으세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족하면 반죽 속 수분이 충분한 증기압을 만들지 못해 부풀지 않습니다.",
    action: "오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 먼저 빠르게 굳어버려 반죽이 부풀 공간이 열리기 전에 표면이 고정돼 불규칙하게 갈라집니다.",
    action: "예열 온도를 레시피대로 지키고 오븐 온도계로 확인하세요.",
  },
  {
    id: "choux-underdried",
    name: "다 구운 뒤 충분히 말리지 않고 꺼냄",
    why: "겉이 갈색이 나도 속에 증기가 남아있는 채로 꺼내면, 식으면서 그 수증기가 다시 수분으로 응축돼 꺼지고 축축해집니다.",
    action: "마지막 5~10분은 오븐 문을 나무 숟가락으로 살짝 열어 증기를 빼며 완전히 말리세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "choux-wet-panade", symptomId: "choux-not-risen", weight: 2 },
  { causeId: "choux-wet-panade", symptomId: "choux-soggy-interior", weight: 1 },

  { causeId: "choux-too-many-eggs", symptomId: "choux-not-risen", weight: 1 },
  { causeId: "choux-too-many-eggs", symptomId: "choux-spread-flat", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "choux-not-risen", weight: 1 },
  { causeId: "oven-too-cool", symptomId: "choux-soggy-interior", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "choux-cracked-uneven", weight: 2 },

  { causeId: "choux-underdried", symptomId: "choux-collapsed-deflated", weight: 2 },
  { causeId: "choux-underdried", symptomId: "choux-soggy-interior", weight: 1 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-wet-panade-vs-oven-cool",
    pair: ["choux-wet-panade", "oven-too-cool"],
    text: "반죽(판아드)을 불에서 저을 때 냄비 바닥에 얇은 막이 생길 때까지 충분히 저어 수분을 날렸나요?",
    yesFavors: "oven-too-cool",
    noFavors: "choux-wet-panade",
  },
];

const SYNONYMS: SynonymEntry[] = [
  {
    symptomId: "choux-not-risen",
    terms: ["안 부풀어요", "납작해요", "거의 안 부풀어요"],
  },
  {
    symptomId: "choux-spread-flat",
    terms: ["퍼져요", "모양이 안 잡혀요", "옆으로 흘러요"],
  },
  {
    symptomId: "choux-cracked-uneven",
    terms: ["표면이 갈라져요", "울퉁불퉁하게 터져요"],
  },
  {
    symptomId: "choux-collapsed-deflated",
    terms: ["부풀었다가 꺼져요", "주저앉아요", "바람 빠진 것 같아요"],
  },
  {
    symptomId: "choux-soggy-interior",
    terms: ["속이 축축해요", "안이 안 익었어요", "눅눅해요"],
  },
];

export const CHOUX: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
