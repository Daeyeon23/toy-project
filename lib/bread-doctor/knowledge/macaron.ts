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
 * 마카롱 진단 지식베이스 — matrices/macaron.md(PEAKED 판정).
 * CORE 오븐 온도 코드를 재사용하고, 머랭 거품(꼬끄) 고유 실패는 `mac-` 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "mac-no-feet", label: "꼬끄에 삐에(다리)가 안 생김" },
  { id: "mac-hollow-shell", label: "속이 비어요(할로우 쉘)" },
  { id: "mac-cracked-shell", label: "꼬끄 표면이 갈라짐" },
  { id: "mac-spread-flat", label: "납작하게 퍼짐(원형 유지 안 됨)" },
  { id: "mac-rough-surface", label: "표면이 거칠고 매끈하지 않음" },
  { id: "mac-sticky-undried", label: "꼬끄가 끈적이고 안 마름(스킨 형성 실패)" },
];

const CAUSES: Cause[] = [
  {
    id: "mac-undermixed-macaronage",
    name: "마카로나주(반죽 접기)가 부족해 반죽이 뻑뻑함",
    why: "반죽이 충분히 흘러내리지 않으면 표면이 매끈해지지 않고 짤 때 뾰족한 뿔이 남습니다.",
    action: "주걱으로 반죽을 리본처럼 천천히 흘러내릴 때까지 접어 섞으세요.",
  },
  {
    id: "mac-overmixed-macaronage",
    name: "마카로나주가 과해 반죽이 묽어짐",
    why: "너무 많이 접으면 기포가 과하게 빠져 반죽이 퍼지고 삐에가 생기지 않습니다.",
    action: "반죽을 들어 올렸을 때 8자를 그릴 수 있는 정도에서 바로 멈추세요.",
  },
  {
    id: "mac-weak-meringue",
    name: "머랭을 덜 올렸거나 젓는 중 꺼짐(broken meringue)",
    why: "머랭 기포가 약하면 구조를 지탱하지 못해 굽는 중 속이 비거나 갈라집니다.",
    action: "단단한 뿔이 설 때까지 머랭을 올리고, 설탕을 나눠 넣어 안정시키세요.",
  },
  {
    id: "mac-no-rest-skin",
    name: "굽기 전 표면 건조(스킨 형성) 시간이 부족함",
    why: "표면에 마른 막(스킨)이 안 생기면 오븐 안에서 팽창하는 가스가 약한 지점을 뚫고 나가 갈라집니다.",
    action: "짜낸 반죽을 손끝으로 만졌을 때 반죽이 안 묻어날 때까지(보통 20~60분) 실온에서 말리세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉이 너무 빨리 익어 스킨이 갈라지거나, 속이 부풀 시간 없이 굳어버립니다.",
    action: "오븐 온도계로 실제 온도를 확인하고 레시피 온도를 지키세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "mac-undermixed-macaronage", symptomId: "mac-no-feet", weight: 1 },
  { causeId: "mac-undermixed-macaronage", symptomId: "mac-rough-surface", weight: 2 },

  { causeId: "mac-overmixed-macaronage", symptomId: "mac-no-feet", weight: 2 },
  { causeId: "mac-overmixed-macaronage", symptomId: "mac-spread-flat", weight: 2 },

  { causeId: "mac-weak-meringue", symptomId: "mac-hollow-shell", weight: 2 },
  { causeId: "mac-weak-meringue", symptomId: "mac-cracked-shell", weight: 1 },

  { causeId: "mac-no-rest-skin", symptomId: "mac-cracked-shell", weight: 1 },
  { causeId: "mac-no-rest-skin", symptomId: "mac-sticky-undried", weight: 2 },

  { causeId: "oven-too-hot", symptomId: "mac-hollow-shell", weight: 1 },
  { causeId: "oven-too-hot", symptomId: "mac-cracked-shell", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-oven-hot-vs-weak-meringue",
    pair: ["oven-too-hot", "mac-weak-meringue"],
    text: "머랭을 올릴 때 거품기를 들어 올리면 뿔이 휘지 않고 단단하게 설 때까지 올렸나요?",
    yesFavors: "oven-too-hot",
    noFavors: "mac-weak-meringue",
  },
];

const SYNONYMS: SynonymEntry[] = [
  {
    symptomId: "mac-no-feet",
    terms: ["삐에가 안 생겨요", "다리가 없어요", "밑단이 안 생겨요"],
  },
  {
    symptomId: "mac-hollow-shell",
    terms: ["속이 비어요", "할로우 쉘이에요", "안이 텅 비었어요"],
  },
  {
    symptomId: "mac-cracked-shell",
    terms: ["표면이 갈라져요", "꼬끄가 터져요", "윗면이 깨져요"],
  },
  {
    symptomId: "mac-spread-flat",
    terms: ["납작하게 퍼져요", "모양이 안 잡혀요", "동그랗게 안 나와요"],
  },
  {
    symptomId: "mac-rough-surface",
    terms: ["표면이 거칠어요", "매끈하지 않아요", "울퉁불퉁해요"],
  },
  {
    symptomId: "mac-sticky-undried",
    terms: ["끈적여요", "안 말라요", "손에 묻어나요"],
  },
];

export const MACARON: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
