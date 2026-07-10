export type BreadTypeStatus = "available" | "coming-soon";

export interface BreadType {
  id: string;
  name: string;
  status: BreadTypeStatus;
}

export interface Symptom {
  id: string;
  label: string;
}

export interface Cause {
  id: string;
  name: string;
  why: string;
  action: string;
}

/** 매트릭스 셀 — 증상↔원인 가중치. weight 0인 조합은 저장하지 않는다. */
export interface Association {
  causeId: string;
  symptomId: string;
  weight: 1 | 2;
}

export interface DiscriminatorQuestion {
  id: string;
  pair: [string, string];
  text: string;
  yesFavors: string;
  noFavors: string;
}

export interface SynonymEntry {
  symptomId: string;
  terms: string[];
}

export type Strength = "high" | "medium";

/** 사용자에게 노출되는 결과 — 원시 점수·퍼센트 필드를 갖지 않는다 (불변 규칙). */
export interface CauseResult {
  cause: Cause;
  strength: Strength;
}

export type DiagnosisOutcome =
  | { kind: "result"; causes: CauseResult[] }
  | {
      kind: "question";
      question: DiscriminatorQuestion;
      candidates: CauseResult[];
    };

/** 빵 1종의 진단 지식 묶음 — 증상·원인·매트릭스·판별 질문·동의어 사전. */
export interface BreadKnowledge {
  symptoms: Symptom[];
  causes: Cause[];
  associations: Association[];
  questions: DiscriminatorQuestion[];
  synonyms: SynonymEntry[];
}
