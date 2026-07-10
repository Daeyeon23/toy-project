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
 * 파네토네 진단 지식베이스 — matrices/panettone.md(King Arthur Baking 인용, PEAKED 판정,
 * 4종 중 근접 원인쌍이 가장 많음). CORE 코드와 brioche.ts의 `enr-heavy-crumb`/`enr-dense-heavy`/
 * `enr-sugar-crust-browning`을 이름 그대로 재사용하고, 오버나이트 장시간 발효 특유의
 * 구조 피로만 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "large-holes", label: coreSymptomLabel("large-holes") },
  { id: "sour-smell", label: coreSymptomLabel("sour-smell") },
  { id: "pale", label: coreSymptomLabel("pale") },
  {
    id: "enr-dense-heavy",
    label: "파운드케이크처럼 무겁고 조밀함 (수분 문제인 gummy와 구분)",
  },
  { id: "enr-no-dome", label: "위로 둥글게(돔/버섯모양) 부풀지 않고 평평하거나 꺼짐" },
];

const CAUSES: Cause[] = [
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "이스트/스타터가 가스를 충분히 만들기 전에 구워 부피가 안 나고 속이 떡지며, 돔이 서지 않습니다.",
    action: "반죽이 몰드의 약 2배(또는 지정된 표시선)까지 부풀 때까지 발효를 늘려 보세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고, 기공이 커지며 신맛이 납니다.",
    action: "반죽이 과도하게 부풀기 전, 표시선에 도달하면 바로 구워 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "글루텐이 충분히 형성되지 않으면 버터·달걀의 무게와 몰드 높이를 못 버텨 조밀해지고 돔이 안 섭니다.",
    action: "오버나이트 스타터로 반죽에 충분한 힘(\"strength\")을 준 뒤 진행해 보세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 속보다 훨씬 빨리 익어, 겉은 타는데 속까지 열이 전달되지 못합니다.",
    action: "오븐 온도를 낮추고 굽는 중간에 은박지로 덮어 보세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "키가 큰 몰드 특성상 열이 중심까지 충분히 전달되지 않으면 속이 설익거나 색이 약해집니다.",
    action: "오븐을 충분히 예열하고, 필요하면 열 전달이 좋은 몰드를 써 보세요.",
  },
  {
    id: "enr-heavy-crumb",
    name: "레시피 자체의 구조적 한계 (버터·설탕·달걀 과다)",
    why: "파네토네는 브리오슈보다도 버터·달걀 비중이 높아, 글루텐이 이 무게를 못 이겨 조밀해지기 쉽습니다.",
    action: "밀가루 단백질 함량을 확인하고, 오버나이트 스타터로 사전에 반죽 힘을 키워 보세요.",
  },
  {
    id: "enr-sugar-crust-browning",
    name: "설탕·유지로 인한 과도한 겉면 갈변",
    why: "설탕·유지 함량이 높으면 겉이 고르게 갈변돼도 속은 아직 덜 익은 상태일 수 있습니다.",
    action: "갈변이 시작되면 은박지로 덮고, 시간보다 내부 온도/스큐어 테스트로 완성을 확인하세요.",
  },
  {
    id: "enr-long-ferment-fatigue",
    name: "장시간 발효 후 구조 피로",
    why: "파네토네 특유의 장시간(오버나이트) 발효는 반죽/스타터의 힘이 충분치 않으면 부풀림은 정상이었어도 굽고 난 뒤 구조를 못 버텨 주저앉거나 돔이 안 섭니다.",
    action: "스타터(오버나이트 예비발효)가 충분히 부풀어 힘이 오른 것을 확인한 뒤에만 본반죽을 진행하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "enr-no-dome", weight: 1 },

  { causeId: "overproof", symptomId: "no-rise", weight: 1 },
  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "large-holes", weight: 2 },
  { causeId: "overproof", symptomId: "sour-smell", weight: 2 },

  { causeId: "weak-gluten", symptomId: "collapsed", weight: 1 },
  { causeId: "weak-gluten", symptomId: "enr-dense-heavy", weight: 2 },
  { causeId: "weak-gluten", symptomId: "enr-no-dome", weight: 1 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "burnt-outside-raw-inside", weight: 1 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "enr-heavy-crumb", symptomId: "no-rise", weight: 1 },
  { causeId: "enr-heavy-crumb", symptomId: "gummy", weight: 1 },
  { causeId: "enr-heavy-crumb", symptomId: "enr-dense-heavy", weight: 2 },

  { causeId: "enr-sugar-crust-browning", symptomId: "burnt-outside-raw-inside", weight: 2 },

  { causeId: "enr-long-ferment-fatigue", symptomId: "collapsed", weight: 2 },
  { causeId: "enr-long-ferment-fatigue", symptomId: "sour-smell", weight: 1 },
  { causeId: "enr-long-ferment-fatigue", symptomId: "enr-dense-heavy", weight: 1 },
  { causeId: "enr-long-ferment-fatigue", symptomId: "enr-no-dome", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-underproof-vs-ovencool",
    pair: ["underproof", "oven-too-cool"],
    text: "오븐에 넣기 전 발효에서 반죽이 표시선/몰드 높이만큼 충분히 부풀었었나요?",
    yesFavors: "oven-too-cool",
    noFavors: "underproof",
  },
  {
    id: "q-overproof-vs-longferment",
    pair: ["overproof", "enr-long-ferment-fatigue"],
    text: "발효 중에 이미 과하게 부풀거나 시큼한 냄새가 났나요, 아니면 발효는 적당했는데 굽고 나서야 주저앉았나요?",
    yesFavors: "overproof",
    noFavors: "enr-long-ferment-fatigue",
  },
  {
    id: "q-ovenhot-vs-sugarbrowning",
    pair: ["oven-too-hot", "enr-sugar-crust-browning"],
    text: "설탕이 적은 다른 빵도 이 오븐에서 유독 빨리 타나요?",
    yesFavors: "oven-too-hot",
    noFavors: "enr-sugar-crust-browning",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "sour-smell", terms: ["시어요", "냄새가 이상해요"] },
  {
    symptomId: "enr-no-dome",
    terms: ["돔이 안 서요", "위가 평평해요", "버섯모양이 안 나와요", "굽고 나서 꺼졌어요"],
  },
  { symptomId: "enr-dense-heavy", terms: ["속이 무거워요", "빡빡해요", "촘촘해요"] },
];

export const PANETTONE: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
