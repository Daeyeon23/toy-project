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
 * 우유식빵/호카이도 밀크빵 진단 지식베이스 — matrices/milk-bread.md(King Arthur Baking·ATK
 * 인용, PEAKED 판정). CORE 코드와 brioche.ts의 `enr-heavy-crumb`/`enr-dense-heavy`를 이름
 * 그대로 재사용하고, 탕종(tangzhong) 공정 실패만 신규 코드로 추가한다.
 */

const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: coreSymptomLabel("no-rise") },
  { id: "collapsed", label: coreSymptomLabel("collapsed") },
  { id: "gummy", label: coreSymptomLabel("gummy") },
  { id: "burnt-outside-raw-inside", label: coreSymptomLabel("burnt-outside-raw-inside") },
  { id: "pale", label: coreSymptomLabel("pale") },
  { id: "large-holes", label: coreSymptomLabel("large-holes") },
  { id: "too-wet", label: coreSymptomLabel("too-wet") },
  { id: "thick-crust", label: coreSymptomLabel("thick-crust") },
  {
    id: "enr-dense-heavy",
    label: "파운드케이크처럼 무겁고 조밀함 (수분 문제인 gummy와 구분)",
  },
  {
    id: "enr-stales-fast",
    label: "구운 다음 날부터 빨리 말라 뻑뻑해짐 (밀크빵 특유의 \"오래 촉촉함\"이 안 나타남)",
  },
];

const CAUSES: Cause[] = [
  {
    id: "yeast-dead",
    name: coreCauseName("yeast-dead"),
    why: "이스트가 죽었거나 뜨거운 물/우유에 사멸하면 발효 자체가 시작되지 않아 부풀지 않습니다.",
    action: "유통기한을 확인하고, 우유·물 온도를 40℃ 이하로 맞춘 뒤 예비 발효로 활성을 확인하세요.",
  },
  {
    id: "underproof",
    name: coreCauseName("underproof"),
    why: "이스트가 가스를 충분히 만들기 전에 구워, 부피가 안 나고 속이 떡지며 탕종의 보습 효과도 제대로 드러나지 않습니다.",
    action: "반죽이 \"puffy하지만 꼭 2배는 아니어도 되는\" 상태까지 1차 발효를 진행해 보세요.",
  },
  {
    id: "overproof",
    name: coreCauseName("overproof"),
    why: "발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고 기공이 커집니다.",
    action: "팬 높이 기준선을 넘기기 전에 발효를 마치고 바로 구워 보세요.",
  },
  {
    id: "weak-gluten",
    name: coreCauseName("weak-gluten"),
    why: "글루텐이 충분히 형성되지 않으면 탕종이 머금은 수분과 우유·버터의 무게를 가둘 힘이 약해 주저앉고 기공이 불규칙해집니다.",
    action:
      "반죽이 매끄럽고 탄력 있게 늘어날 때까지(윈도우페인 테스트) 믹싱 시간을 늘리고, 버터는 한 큰술씩 나눠 넣으며 완전히 흡수시켜 보세요.",
  },
  {
    id: "oven-too-hot",
    name: coreCauseName("oven-too-hot"),
    why: "겉면이 속보다 훨씬 빨리 익어, 겉은 타거나 두꺼워지는 동안 속까지 열이 전달되지 못합니다.",
    action: "오븐 온도를 레시피보다 낮추고, 필요하면 굽는 중간 은박지로 덮어 보세요.",
  },
  {
    id: "oven-too-cool",
    name: coreCauseName("oven-too-cool"),
    why: "열이 부족하면 속이 설익어 떡지고 색이 옅게 나옵니다. 목표 속 온도(약 190℉/88℃ 이상)에 못 미친 채 꺼내면 특히 그렇습니다.",
    action: "오븐을 충분히 예열하고, 디지털 온도계로 속 온도가 190℉ 이상인지 확인한 뒤 꺼내세요.",
  },
  {
    id: "enr-heavy-crumb",
    name: "레시피 자체의 구조적 한계 (버터·설탕·달걀 과다)",
    why: "우유식빵도 버터·설탕·달걀이 들어간 enriched 반죽이라, 비율이 높은 레시피는 글루텐이 그 무게를 못 이겨 다소 무겁고 조밀해질 수 있습니다.",
    action: "브레드 플라워 비중을 유지하고, 버터는 나눠 넣는 시간을 늘려 보세요.",
  },
  {
    id: "enr-tangzhong-imbalance",
    name: "탕종 비율/온도 실패 (과·소 조리, 생략)",
    why: "탕종을 목표 온도(약 65℃/149℉)까지 충분히 호화시키지 않거나 생략하면 전분이 물을 붙잡는 능력이 약해져, 밀크빵 특유의 \"촉촉함이 오래가는\" 효과가 사라지고 하루 이틀 만에 빨리 말라 뻑뻑해질 수 있습니다. 반대로 물·우유 비율을 과하게 늘려 탕종을 너무 질게 만들면 본반죽 전체가 지나치게 질어져 성형이 무너지거나, 덜 구워졌을 때 속이 떡질 수 있습니다.",
    action:
      "탕종은 물 3큰술+우유 3큰술+빵가루(강력분) 2큰술 비율로, 젓는 자국이 바닥에 남는 뻑뻑한 상태까지 정확히 익힌 뒤 미지근하게 식혀서 사용하세요.",
  },
];

const ASSOCIATIONS: Association[] = [
  { causeId: "yeast-dead", symptomId: "no-rise", weight: 2 },
  { causeId: "yeast-dead", symptomId: "gummy", weight: 2 },
  { causeId: "yeast-dead", symptomId: "pale", weight: 1 },

  { causeId: "underproof", symptomId: "no-rise", weight: 2 },
  { causeId: "underproof", symptomId: "gummy", weight: 2 },
  { causeId: "underproof", symptomId: "enr-dense-heavy", weight: 1 },

  { causeId: "overproof", symptomId: "no-rise", weight: 1 },
  { causeId: "overproof", symptomId: "collapsed", weight: 2 },
  { causeId: "overproof", symptomId: "large-holes", weight: 2 },

  { causeId: "weak-gluten", symptomId: "collapsed", weight: 2 },
  { causeId: "weak-gluten", symptomId: "large-holes", weight: 2 },
  { causeId: "weak-gluten", symptomId: "too-wet", weight: 1 },
  { causeId: "weak-gluten", symptomId: "enr-dense-heavy", weight: 1 },

  { causeId: "oven-too-hot", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "oven-too-hot", symptomId: "thick-crust", weight: 2 },

  { causeId: "oven-too-cool", symptomId: "gummy", weight: 2 },
  { causeId: "oven-too-cool", symptomId: "pale", weight: 2 },

  { causeId: "enr-heavy-crumb", symptomId: "no-rise", weight: 1 },
  { causeId: "enr-heavy-crumb", symptomId: "gummy", weight: 1 },
  { causeId: "enr-heavy-crumb", symptomId: "enr-dense-heavy", weight: 2 },

  { causeId: "enr-tangzhong-imbalance", symptomId: "gummy", weight: 1 },
  { causeId: "enr-tangzhong-imbalance", symptomId: "too-wet", weight: 1 },
  { causeId: "enr-tangzhong-imbalance", symptomId: "enr-stales-fast", weight: 2 },
];

const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-yeast-vs-underproof",
    pair: ["yeast-dead", "underproof"],
    text: "1차 발효 때 반죽이 부풀긴 했나요?",
    yesFavors: "underproof",
    noFavors: "yeast-dead",
  },
  {
    id: "q-underproof-vs-ovencool",
    pair: ["underproof", "oven-too-cool"],
    text: "오븐에 넣기 전 발효에서 반죽이 충분히(팬 위로 볼록하게) 부풀었었나요?",
    yesFavors: "oven-too-cool",
    noFavors: "underproof",
  },
  {
    id: "q-overproof-vs-weakgluten",
    pair: ["overproof", "weak-gluten"],
    text: "반죽이 발효 중 한 번 힘있게 부풀었다가 정점을 넘겨 주저앉았나요, 아니면 애초에 반죽이 늘어지고 힘이 없어서 잘 안 부푼 채로 주저앉았나요?",
    yesFavors: "overproof",
    noFavors: "weak-gluten",
  },
];

const SYNONYMS: SynonymEntry[] = [
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "too-wet", terms: ["반죽이 너무 질어요", "손에 다 붙어요", "성형이 안 돼요"] },
  { symptomId: "thick-crust", terms: ["딱딱해요", "껍질이 두꺼워요"] },
  { symptomId: "enr-dense-heavy", terms: ["너무 무거워요", "퍽퍽해요", "촘촘해요"] },
  {
    symptomId: "enr-stales-fast",
    terms: ["빨리 굳어요", "하루 지나면 뻣뻣해요", "금방 말라요", "촉촉함이 안 오래가요"],
  },
];

export const MILK_BREAD: BreadKnowledge = {
  symptoms: SYMPTOMS,
  causes: CAUSES,
  associations: ASSOCIATIONS,
  questions: DISCRIMINATOR_QUESTIONS,
  synonyms: SYNONYMS,
};
