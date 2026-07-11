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
 * 붓세 진단 지식베이스 — matrices/bouchee.md(제누아즈 공통 원리로 검증, PEAKED 판정).
 * CORE 오븐 온도 코드를 재사용하고, 전란 거품 스펀지 고유 실패는 `spg-` 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "spg-dense-flat", label: "부풀지 않고 조밀·납작함" },
  { id: "spg-sunken-center", label: "중앙이 꺼짐" },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "spg-dry-crumbly", label: "퍼석하고 부스러짐" },
  { id: "spg-tough-rubbery", label: "질기고 고무 같음" },
  { id: "gummy", label: coreSymptomLabel("gummy") },
];

const CAUSES: Cause[] = [
  {
    id: "spg-underwhipped-eggs",
    name: "전란(또는 노른자+설탕)을 충분히 휘핑하지 않음",
    why: "이 반죽은 화학 팽창제 없이 오직 거품낸 달걀의 기계적 공기만으로 부풀기 때문에, 덜 휘핑하면 애초에 부풀 공기가 부족합니다.",
    action: "반죽이 계속 부피가 늘다가 리본처럼 흘러내리며 자국이 잠시 남을 때까지(약 3배 부피) 충분히 휘핑하세요.",
  },
  {
    id: "spg-deflated-batter",
    name: "가루를 섞을 때 거칠게 섞어 거품이 꺼짐",
    why: "순수 달걀 거품 위에 가루를 얹는 구조라, 거칠게 섞으면 애써 만든 기포가 터져 반죽이 가라앉습니다.",
    action: "흰자를 다루듯 가볍게 아래에서 위로 접어가며 최소한으로 섞으세요.",
  },
  {
    id: "spg-oven-opened-early",
    name: "굽는 도중 오븐을 일찍 엶",
    why: "오븐 문을 일찍 열면 온도가 급격히 떨어지고 찬 공기가 들어와, 아직 단백질 구조가 굳지 않은 반죽 중앙이 꺼집니다.",
    action: "반죽 부피가 확정되는 시점(보통 15~20분)까지는 오븐 문을 열지 마세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족하면 달걀 거품이 충분히 굳기 전에 시간이 지나 부피가 가라앉거나 속이 축축하게 남습니다.",
    action: "오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요.",
  },
  {
    id: "spg-overbaked-dry",
    name: "과다하게 구워 수분이 날아감",
    why: "필요 이상으로 오래 구우면 반죽의 수분이 증발해 퍼석하고 질겨집니다.",
    action: "표면을 살짝 눌렀을 때 자국 없이 되돌아오는 시점에 바로 꺼내세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "spg-underwhipped-eggs", symptomId: "spg-dense-flat", weight: 2 },
  { causeId: "spg-underwhipped-eggs", symptomId: "gummy", weight: 1 },

  { causeId: "spg-deflated-batter", symptomId: "spg-dense-flat", weight: 1 },
  { causeId: "spg-deflated-batter", symptomId: "spg-tough-rubbery", weight: 2 },

  { causeId: "spg-oven-opened-early", symptomId: "spg-sunken-center", weight: 2 },
  { causeId: "spg-oven-opened-early", symptomId: "collapsed", weight: 1 },

  { causeId: "oven-too-cool", symptomId: "collapsed", weight: 1 },
  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },

  { causeId: "spg-overbaked-dry", symptomId: "spg-dry-crumbly", weight: 2 },
  { causeId: "spg-overbaked-dry", symptomId: "spg-tough-rubbery", weight: 1 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-underwhipped-vs-oven-cool",
    pair: ["spg-underwhipped-eggs", "oven-too-cool"],
    text: "전란(또는 노른자+설탕)을 거품기로 들어 올렸을 때 리본처럼 흘러내리는 자국이 남을 때까지 충분히 휘핑했나요?",
    yesFavors: "oven-too-cool",
    noFavors: "spg-underwhipped-eggs",
  },
];

const SYNONYMS: SynonymEntry[] = [
  {
    symptomId: "spg-dense-flat",
    terms: ["안 부풀어요", "조밀해요", "납작해요"],
  },
  {
    symptomId: "spg-sunken-center",
    terms: ["중앙이 꺼졌어요", "가운데가 내려앉았어요"],
  },
  {
    symptomId: "spg-dry-crumbly",
    terms: ["퍼석해요", "부스러져요", "푸석해요"],
  },
  {
    symptomId: "spg-tough-rubbery",
    terms: ["질겨요", "고무 같아요"],
  },
];

export const BOUCHEE: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
