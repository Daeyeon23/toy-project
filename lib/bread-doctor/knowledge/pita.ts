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
 * 피타 진단 지식베이스 — matrices/pita.md(King Arthur Baking 인용, PEAKED 판정).
 * "포켓 형성" 원인이 가장 많이 겹치는 카테고리. CORE 코드와 pizza-dough.ts의
 * `flat-cold-baking-surface`/`flat-torn-dough`/`flat-uneven-thickness`를 재사용한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "flat-no-pocket", label: "구운 뒤 속에 포켓(주머니)이 안 생기거나 매우 작음" },
  { id: "flat-no-oven-spring", label: "굽는 중 부풀지 않음(오븐 스프링/기포 형성 실패)" },
  { id: "flat-uneven-thickness", label: "두께가 불균일함" },
  { id: "flat-torn-dough", label: "늘리거나 밀 때 찢어지거나 구멍이 남" },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
  { id: "flat-dry-cracked", label: "표면이 갈라지고 부스러짐" },
];

const CAUSES: Cause[] = [
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "가스가 부족하면 반죽이 얇고 힘없어 오븐 속 스팀 압력을 못 버티고 포켓이 안 생깁니다.",
    action: "1차 발효를 늘려 반죽이 확실히 부풀 때까지 기다려 보세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하면 반죽이 힘을 잃어 포켓이 약하게 생기고 신맛이 납니다.",
    action: "부피가 과도해지기 전에 성형·굽기를 마쳐 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "글루텐이 약하면 스팀 압력을 가둘 힘이 없어 포켓이 안 생기거나, 반죽이 밀 때 쉽게 찢어집니다.",
    action: "반죽이 매끄럽고 탄력 있게 늘어날 때까지 치대 보세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "\"포켓의 비밀은 정말로 뜨거운 오븐, 500°F 급\"입니다. 온도가 낮으면 스팀이 급격히 생기지 않아 반죽이 얇게 퍼지기만 하고 안 부풉니다.",
    action: "오븐을 500°F(260℃)까지 예열하고 충분히 달군 뒤 구워 보세요.",
  },
  {
    id: "flat-cold-baking-surface",
    name: "베이킹 스톤/스틸 예열 부족",
    why: "전기 오븐에서는 피타가 \"조용히 팬 위에 누워있기만\" 했다는 관찰이 있습니다 — 열전달이 약한 표면/오븐에서는 포켓 형성이 잘 안 됩니다.",
    action: "예열된 피자 스톤을 오븐 하단에 놓고 그 위에서 굽거나, 오븐 랙에 직접 놓고 구워 보세요.",
  },
  {
    id: "flat-uneven-rolling",
    name: "손/밀대로 두께 불균일하게 성형",
    why: "두께가 균일하지 않으면 얇은 부분만 부풀고 두꺼운 부분은 안 부풀어 포켓이 부분적으로만 생깁니다.",
    action: "밀대로 밀 때 전체를 고르게 돌려가며 일정한 두께로 밀어 보세요.",
  },
  {
    id: "flat-dough-dried-out",
    name: "반죽이 대기 중 마름",
    why: "작업 중 덮지 않고 방치하면 반죽 표면이 굳어 스팀을 가두지 못해 포켓이 실패하고 표면이 갈라집니다.",
    action: "밀지 않은 반죽 덩어리는 젖은 천이나 랩으로 덮어 마르지 않게 하세요.",
  },
  {
    id: "cold-environment",
    name: coreCauseName("cold-environment"),
    why: "반죽·실내 온도가 낮으면 발효가 느려져 같은 시간에 덜 부풉니다.",
    action: "26~28℃ 환경에서 발효시켜 보세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "underproof", symptomId: "flat-no-pocket", weight: 2 },
  { causeId: "underproof", symptomId: "flat-no-oven-spring", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 1 },

  { causeId: "overproof", symptomId: "flat-no-pocket", weight: 1 },
  { causeId: "overproof", symptomId: "flat-torn-dough", weight: 1 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 2 },

  { causeId: "weak-gluten", symptomId: "flat-no-pocket", weight: 2 },
  { causeId: "weak-gluten", symptomId: "flat-uneven-thickness", weight: 1 },
  { causeId: "weak-gluten", symptomId: "flat-torn-dough", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "flat-no-pocket", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "flat-no-oven-spring", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "flat-cold-baking-surface", symptomId: "flat-no-pocket", weight: 2 },
  { causeId: "flat-cold-baking-surface", symptomId: "pale", weight: 1 },

  { causeId: "flat-uneven-rolling", symptomId: "flat-no-pocket", weight: 1 },
  { causeId: "flat-uneven-rolling", symptomId: "flat-uneven-thickness", weight: 2 },

  { causeId: "flat-dough-dried-out", symptomId: "flat-no-pocket", weight: 1 },
  { causeId: "flat-dough-dried-out", symptomId: "thick-crust", weight: 1 },
  { causeId: "flat-dough-dried-out", symptomId: "flat-dry-cracked", weight: 2 },

  { causeId: "cold-environment", symptomId: "flat-no-oven-spring", weight: 1 },
  { causeId: "cold-environment", symptomId: "gummy", weight: 1 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-pita-ovencool-vs-coldsurface",
    pair: ["oven-too-cool", "flat-cold-baking-surface"],
    text: "베이킹 스톤/스틸 없이 얇은 팬 위에서 구웠나요?",
    yesFavors: "flat-cold-baking-surface",
    noFavors: "oven-too-cool",
  },
  {
    id: "q-pita-underproof-vs-weakgluten",
    pair: ["underproof", "weak-gluten"],
    text: "1차 발효 때 반죽 부피가 눈에 띄게 부풀었나요?",
    yesFavors: "weak-gluten",
    noFavors: "underproof",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "thick-crust", terms: ["딱딱해요", "껍질이 두꺼워요"] },
  { symptomId: "pale", terms: ["색이 안 나요", "창백해요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "sour-smell", terms: ["시어요", "냄새가 이상해요"] },
  { symptomId: "flat-no-pocket", terms: ["포켓이 안 생겨요", "속이 안 벌어져요", "주머니가 안 생겨요"] },
  { symptomId: "flat-torn-dough", terms: ["밀 때 찢어져요", "구멍이 나요"] },
  { symptomId: "flat-dry-cracked", terms: ["표면이 갈라져요", "부스러져요", "말라서 쩍쩍 갈라져요"] },
  { symptomId: "flat-uneven-thickness", terms: ["두께가 안 일정해요", "한쪽만 두꺼워요"] },
];

export const PITA: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
