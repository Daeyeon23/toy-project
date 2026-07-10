import { CORE_CAUSES, CORE_SYMPTOMS } from "@/lib/bread-doctor/knowledge/_core";
import type {
  Association,
  BreadKnowledge,
  Cause,
  DiscriminatorQuestion,
  Symptom,
  SynonymEntry,
} from "@/types/bread-doctor";

/**
 * 사워도우 진단 지식베이스 — matrices/sourdough.md(King Arthur Baking 등 인용, PEAKED 판정)의
 * 원인·증상·가중치를 데이터화한다. CORE 재사용 원인/증상은 `_core.ts`의 정본 이름을 그대로 쓰고,
 * why/action만 사워도우(천연 발효 스타터) 맥락으로 다시 쓴다.
 */

function core(id: string): string {
  const cause = CORE_CAUSES.find((c) => c.id === id);
  if (!cause) throw new Error(`Unknown CORE cause id: ${id}`);
  return cause.name;
}

function coreLabel(id: string): string {
  const symptom = CORE_SYMPTOMS.find((s) => s.id === id);
  if (!symptom) throw new Error(`Unknown CORE symptom id: ${id}`);
  return symptom.label;
}

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreLabel("no-rise") },
  { id: "collapsed", label: coreLabel("collapsed") },
  { id: "gummy", label: coreLabel("gummy") },
  { id: "burnt-outside-raw-inside", label: coreLabel("burnt-outside-raw-inside") },
  { id: "pale", label: coreLabel("pale") },
  { id: "blowout", label: coreLabel("blowout") },
  { id: "large-holes", label: coreLabel("large-holes") },
  { id: "too-wet", label: coreLabel("too-wet") },
  { id: "thick-crust", label: coreLabel("thick-crust") },
  { id: "sour-smell", label: coreLabel("sour-smell") },
  { id: "spread-flat-disc", label: "오븐에 넣을 때 반죽이 옆으로 퍼져 팬케이크처럼 됨" },
  { id: "bland-flavor", label: "신맛/풍미가 거의 안 남" },
];

const CAUSES: Cause[] = [
  {
    id: "starter-inactive",
    name: "스타터 활성 부족/미성숙",
    why: "스타터가 아직 어리거나(2~3주 미만) 며칠간 먹이를 못 받아 활성이 약하면, 반죽에 넣어도 가스 생산력이 부족해 거의 부풀지 않고 속이 눅눅하게 남습니다.",
    action:
      "스타터를 먹인 뒤 부피가 6~8시간 안에 2배가 되는지 확인하고(따뜻한 물 80~90°F로 먹이기), 안정적으로 그 리듬이 나올 때까지 반죽에 쓰지 마세요.",
  },
  {
    id: "starter-overripe",
    name: "스타터 과숙성/과활성",
    why: "스타터를 정점(피크)을 지나 방치했거나 너무 공격적으로(1:1:1 이상) 먹여 과도하게 활발해지면, 반죽이 예상보다 훨씬 빨리 과발효되어 구조를 잃고 주저앉습니다.",
    action:
      "스타터를 정점(부피가 최대이고 표면이 살짝 볼록한 시점) 근처에서 사용하고, 먹이는 비율에서 스타터 비중을 줄여(예: 1:2:2) 발효 속도를 늦추세요.",
  },
  {
    id: "underproof",
    name: core("underproof"),
    why: "스타터는 정상이어도 1차·2차 발효 시간이 부족하면 가스가 덜 차 부피가 안 나고 속이 조밀·떡지게 됩니다.",
    action:
      "손가락으로 눌렀을 때 자국이 서서히(3~5초) 돌아올 때까지 발효 시간을 늘려 보세요(poke test).",
  },
  {
    id: "overproof",
    name: core("overproof"),
    why: "발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고, 기공이 커지며 신맛이 강해집니다.",
    action:
      "손가락 자국이 거의 안 돌아오고 반죽이 눌렸을 때 살짝 무너지는 느낌이면 바로 구워 보세요.",
  },
  {
    id: "cold-environment",
    name: core("cold-environment"),
    why: "반죽·실내 온도가 낮으면 자연 발효 속도가 크게 느려져 같은 시간에 덜 부풉니다.",
    action: "오븐 발효 기능이나 26~28℃ 환경에서 발효시켜 보세요.",
  },
  {
    id: "weak-gluten",
    name: core("weak-gluten"),
    why: "사워도우는 대개 고수분 반죽이라 스트레치&폴드 등으로 글루텐을 충분히 세우지 않으면 가스를 가두지 못해 주저앉고 옆으로 퍼집니다.",
    action: "벌크 발효 중 30분 간격으로 스트레치&폴드를 3~4회 반복해 반죽 장력을 세워 보세요.",
  },
  {
    id: "excess-hydration",
    name: core("excess-hydration"),
    why: "레시피 대비 수분이 많으면(특히 초보자가 고수분 레시피를 그대로 따라할 때) 반죽이 흘러내려 성형이 무너지고 굽는 중 옆으로 퍼집니다.",
    action: "수분을 5~10% 낮추거나, 반죽 강도가 오를 때까지 폴딩 횟수를 늘려 보세요.",
  },
  {
    id: "oven-too-hot",
    name: core("oven-too-hot"),
    why: "겉면이 속보다 훨씬 빨리 익어 겉은 타거나 두꺼워지는 동안 속까지 열이 전달되지 못합니다.",
    action: "오븐 온도를 레시피보다 10~15℃ 낮추고 굽는 중간에 은박지로 덮어 보세요.",
  },
  {
    id: "oven-too-cool",
    name: core("oven-too-cool"),
    why: "열이 부족하거나 너무 일찍 꺼내면(내부 온도 미달) 속이 설익어 떡지고 색이 약해집니다.",
    action:
      "내부 온도가 최소 205~210°F(사워도우는 일반 식빵보다 조금 더 높게)에 도달할 때까지 굽고, 완전히 식을 때까지(최소 1시간) 자르지 마세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "starter-inactive", symptomId: "no-rise", weight: 2 },
  { causeId: "starter-inactive", symptomId: "gummy", weight: 2 },
  { causeId: "starter-inactive", symptomId: "spread-flat-disc", weight: 1 },
  { causeId: "starter-inactive", symptomId: "bland-flavor", weight: 2 },

  { causeId: "starter-overripe", symptomId: "collapsed", weight: 2 },
  { causeId: "starter-overripe", symptomId: "large-holes", weight: 1 },
  { causeId: "starter-overripe", symptomId: "sour-smell", weight: 2 },
  { causeId: "starter-overripe", symptomId: "spread-flat-disc", weight: 2 },

  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "blowout", weight: 1 },

  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "large-holes", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 1 },
  { causeId: "overproof", symptomId: "spread-flat-disc", weight: 1 },

  { causeId: "cold-environment", symptomId: "no-rise", weight: 2 },
  { causeId: "cold-environment", symptomId: "gummy", weight: 1 },

  { causeId: "weak-gluten", symptomId: "collapsed", weight: 2 },
  { causeId: "weak-gluten", symptomId: "large-holes", weight: 2 },
  { causeId: "weak-gluten", symptomId: "too-wet", weight: 1 },
  { causeId: "weak-gluten", symptomId: "spread-flat-disc", weight: 2 },

  { causeId: "excess-hydration", symptomId: "gummy", weight: 2 },
  { causeId: "excess-hydration", symptomId: "large-holes", weight: 1 },
  { causeId: "excess-hydration", symptomId: "too-wet", weight: 2 },
  { causeId: "excess-hydration", symptomId: "spread-flat-disc", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "blowout", weight: 1 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-starter-inactive-vs-underproof",
    pair: ["starter-inactive", "underproof"],
    text: "스타터 자체가 반죽에 넣기 전 잘 부풀어 있었나요(거품 있고 향긋한 산미)?",
    yesFavors: "underproof",
    noFavors: "starter-inactive",
  },
  {
    id: "q-starter-overripe-vs-overproof",
    pair: ["starter-overripe", "overproof"],
    text: "반죽에 섞기 전 스타터 자체가 이미 정점을 지나 가라앉고 시큼한 냄새가 강했나요?",
    yesFavors: "starter-overripe",
    noFavors: "overproof",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "볼륨이 없어요", "판판해요"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요", "가운데가 내려앉아요"] },
  { symptomId: "gummy", terms: ["떡져요", "속이 안 익은 느낌", "찐득해요"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 타요", "속이 안 익어요"] },
  { symptomId: "pale", terms: ["색이 안 나요", "창백해요"] },
  { symptomId: "blowout", terms: ["옆이 터졌어요", "갈라져요"] },
  { symptomId: "large-holes", terms: ["기공이 커요", "구멍이 불규칙해요"] },
  { symptomId: "too-wet", terms: ["반죽이 너무 질어요", "손에 다 붙어요", "성형이 안 돼요"] },
  { symptomId: "thick-crust", terms: ["껍질이 두꺼워요", "겉이 딱딱해요"] },
  { symptomId: "sour-smell", terms: ["너무 시어요", "식초 냄새 나요"] },
  { symptomId: "spread-flat-disc", terms: ["옆으로 퍼져요", "팬케이크처럼 돼요", "반죽이 흘러요"] },
  { symptomId: "bland-flavor", terms: ["신맛이 안 나요", "밍밍해요", "사워도우 맛이 안 나요"] },
];

export const SOURDOUGH: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
