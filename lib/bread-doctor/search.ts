import { SYMPTOMS, SYNONYMS } from "@/lib/bread-doctor/knowledge-base";
import type { Symptom, SynonymEntry } from "@/types/bread-doctor";

/**
 * 미리 정의된 동의어 사전으로만 증상 목록을 좁힌다 — 자유 텍스트 해석(LLM/키워드 파싱) 없음.
 * 검색어가 비어 있으면 전체 목록을 반환한다.
 */
export function filterSymptoms(
  query: string,
  symptoms: Symptom[] = SYMPTOMS,
  synonyms: SynonymEntry[] = SYNONYMS,
): Symptom[] {
  const normalizedQuery = query.trim();
  if (!normalizedQuery) return symptoms;

  const matchedSymptomIds = new Set(
    synonyms
      .filter((entry) => entry.terms.some((term) => term.includes(normalizedQuery)))
      .map((entry) => entry.symptomId),
  );

  return symptoms.filter((symptom) => matchedSymptomIds.has(symptom.id));
}
