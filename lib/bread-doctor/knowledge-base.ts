import type {
  Association,
  Cause,
  DiscriminatorQuestion,
  SynonymEntry,
  Symptom,
} from "@/types/bread-doctor";

/**
 * 식빵 진단 지식베이스 — symptom-cause-matrix.md(King Arthur Baking 류 제빵 상식 기반 스케치)의
 * 원인·증상·가중치를 그대로 데이터화한다. 문구는 초안이며 사용자 용어 검증 후 다듬는다.
 */

export const SYMPTOMS: Symptom[] = [
  { id: "no-rise", label: "전혀/거의 안 부풂" },
  { id: "collapsed", label: "부풀다 주저앉음" },
  { id: "gummy", label: "속이 떡짐 / 질음" },
  { id: "burnt-outside-raw-inside", label: "겉은 탔는데 속은 덜 익음" },
  { id: "pale", label: "색이 안 남 / 창백함" },
  { id: "blowout", label: "옆구리·표면이 터짐" },
  { id: "large-holes", label: "기공이 너무 크고 불규칙" },
  { id: "too-wet", label: "반죽이 너무 질어 성형 안 됨" },
  { id: "thick-crust", label: "겉이 두껍고 딱딱함" },
  { id: "sour-smell", label: "신맛 / 이상한 냄새" },
];

export const CAUSES: Cause[] = [
  {
    id: "c1",
    name: "이스트 문제",
    why: "이스트가 죽었거나 뜨거운 물에 사멸하면 발효 자체가 시작되지 않아 부풀지 않습니다.",
    action:
      "유통기한을 확인하고, 물 온도를 40℃ 이하로 맞춘 뒤 예비 발효로 활성을 확인하세요.",
  },
  {
    id: "c2",
    name: "발효 부족",
    why: "이스트가 가스를 충분히 만들기 전에 구워, 부피가 안 나고 속이 떡지며 팽창 압력이 약한 표면을 터뜨립니다.",
    action:
      "따뜻한 곳에서 반죽이 약 2배가 될 때까지(손가락 자국이 천천히 돌아올 때까지) 1차 발효를 늘려 보세요.",
  },
  {
    id: "c3",
    name: "과발효",
    why: "발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고, 기공이 커지며 효모 대사산물로 신맛이 납니다.",
    action:
      "반죽 부피가 2~2.5배를 넘기기 전에 발효를 마치고, 손가락으로 눌렀을 때 자국이 아주 서서히만 돌아오면 바로 구워 보세요.",
  },
  {
    id: "c4",
    name: "저온 환경",
    why: "반죽·실내 온도가 낮으면 발효 속도가 크게 느려져 같은 시간에 덜 부풉니다.",
    action:
      "오븐 발효 기능이나 따뜻한 물 옆 등 26~28℃ 환경에서 발효시켜 보세요.",
  },
  {
    id: "c5",
    name: "반죽 개발 부족",
    why: "글루텐이 충분히 형성되지 않으면 가스를 가두는 힘이 약해 부풀다 주저앉고 기공이 불규칙해집니다.",
    action:
      "반죽이 매끄럽고 탄력 있게 늘어날 때까지(윈도우페인 테스트 통과) 믹싱·손반죽 시간을 늘려 보세요.",
  },
  {
    id: "c6",
    name: "오븐 온도가 높음",
    why: "겉면이 속보다 훨씬 빨리 익어, 겉은 타거나 두껍고 딱딱해지는 동안 속까지 열이 전달되지 못합니다.",
    action:
      "오븐 온도를 레시피보다 10~15℃ 낮추고, 필요하면 굽는 중간에 은박지를 덮어 겉면을 보호하세요.",
  },
  {
    id: "c7",
    name: "오븐 온도가 낮음",
    why: "열이 부족해 굽는 시간이 늘어나면서 껍질 형성과 수분 증발이 고르게 이뤄지지 않아 속이 설익거나 색이 약해집니다.",
    action:
      "오븐을 충분히 예열하고 온도계로 실제 온도를 확인한 뒤, 필요하면 굽는 시간을 늘려 보세요.",
  },
  {
    id: "c8",
    name: "수분 과다",
    why: "반죽에 물이 많으면 성형이 무너지고 굽는 중 가스를 가두지 못해 속이 조밀하고 떡지게 됩니다.",
    action:
      "레시피의 수분량을 5~10% 줄이거나, 덧가루·오토리즈 시간을 늘려 반죽 강도를 높여 보세요.",
  },
  {
    id: "c9",
    name: "소금 과다",
    why: "소금이 이스트에 직접 닿거나 양이 많으면 발효가 억제되어 부피가 부족해집니다.",
    action:
      "소금을 이스트와 직접 섞지 말고 나중에 넣거나, 레시피의 소금량을 다시 확인해 보세요.",
  },
];

/** symptom-cause-matrix.md의 가중치 매트릭스(●●=2, ●=1). weight 0인 셀은 생략한다. */
export const ASSOCIATIONS: Association[] = [
  { causeId: "c1", symptomId: "no-rise", weight: 2 },
  { causeId: "c1", symptomId: "gummy", weight: 2 },
  { causeId: "c1", symptomId: "pale", weight: 1 },

  { causeId: "c2", symptomId: "no-rise", weight: 2 },
  { causeId: "c2", symptomId: "gummy", weight: 2 },
  { causeId: "c2", symptomId: "blowout", weight: 2 },
  { causeId: "c2", symptomId: "thick-crust", weight: 1 },

  { causeId: "c3", symptomId: "no-rise", weight: 1 },
  { causeId: "c3", symptomId: "collapsed", weight: 2 },
  { causeId: "c3", symptomId: "large-holes", weight: 2 },
  { causeId: "c3", symptomId: "sour-smell", weight: 2 },

  { causeId: "c4", symptomId: "no-rise", weight: 2 },
  { causeId: "c4", symptomId: "gummy", weight: 1 },

  { causeId: "c5", symptomId: "no-rise", weight: 1 },
  { causeId: "c5", symptomId: "collapsed", weight: 2 },
  { causeId: "c5", symptomId: "gummy", weight: 1 },
  { causeId: "c5", symptomId: "large-holes", weight: 2 },
  { causeId: "c5", symptomId: "too-wet", weight: 1 },

  { causeId: "c6", symptomId: "burnt-outside-raw-inside", weight: 2 },
  { causeId: "c6", symptomId: "blowout", weight: 1 },
  { causeId: "c6", symptomId: "thick-crust", weight: 2 },

  { causeId: "c7", symptomId: "gummy", weight: 2 },
  { causeId: "c7", symptomId: "pale", weight: 2 },

  { causeId: "c8", symptomId: "collapsed", weight: 1 },
  { causeId: "c8", symptomId: "gummy", weight: 2 },
  { causeId: "c8", symptomId: "large-holes", weight: 1 },
  { causeId: "c8", symptomId: "too-wet", weight: 2 },

  { causeId: "c9", symptomId: "no-rise", weight: 2 },
  { causeId: "c9", symptomId: "gummy", weight: 1 },
  { causeId: "c9", symptomId: "pale", weight: 1 },
];

/** 상위 두 원인이 근접할 때 좁히는 판별 질문. MVP는 이스트↔발효부족 1쌍만 정의한다. */
export const DISCRIMINATOR_QUESTIONS: DiscriminatorQuestion[] = [
  {
    id: "q-yeast-vs-underproof",
    pair: ["c1", "c2"],
    text: "1차 발효 때 반죽이 부풀긴 했나요?",
    yesFavors: "c2",
    noFavors: "c1",
  },
];

/** 일상어 검색을 위한 동의어 사전. 사전에 없는 검색어는 빈 결과로 처리한다(자유 텍스트 해석 금지). */
export const SYNONYMS: SynonymEntry[] = [
  { symptomId: "gummy", terms: ["떡져요", "떡짐", "질어요", "속이 안 익음"] },
  { symptomId: "no-rise", terms: ["안부풀어요", "안 부풀어요", "볼륨이 없어요"] },
  { symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
  { symptomId: "burnt-outside-raw-inside", terms: ["겉만 익어요", "속이 안 익어요"] },
  { symptomId: "blowout", terms: ["터졌어요", "갈라져요"] },
  { symptomId: "sour-smell", terms: ["시어요", "냄새가 이상해요"] },
  { symptomId: "thick-crust", terms: ["딱딱해요", "껍질이 두꺼워요"] },
];
