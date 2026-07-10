import { WHITE_LOAF } from "@/lib/bread-doctor/knowledge/white-loaf";
import { SOURDOUGH } from "@/lib/bread-doctor/knowledge/sourdough";
import { BAGUETTE } from "@/lib/bread-doctor/knowledge/baguette";
import { CIABATTA } from "@/lib/bread-doctor/knowledge/ciabatta";
import { FOCACCIA } from "@/lib/bread-doctor/knowledge/focaccia";
import { PAIN_DE_CAMPAGNE } from "@/lib/bread-doctor/knowledge/pain-de-campagne";
import type { BreadKnowledge } from "@/types/bread-doctor";

/**
 * 빵ID별 진단 지식베이스 레지스트리. 각 빵의 데이터는 `knowledge/<bread-id>.ts`에서
 * 정의되고 여기서 집계된다 — `_taxonomy.md`의 종이 검증(matrices/*.md)을 코드로 옮긴 것.
 */
export const BREAD_KNOWLEDGE: Record<string, BreadKnowledge> = {
  "white-loaf": WHITE_LOAF,
  sourdough: SOURDOUGH,
  baguette: BAGUETTE,
  ciabatta: CIABATTA,
  focaccia: FOCACCIA,
  "pain-de-campagne": PAIN_DE_CAMPAGNE,
};

/** 등록되지 않은 빵 id는 프로그래밍 오류(설정 누락)이므로 즉시 던진다. */
export function getBreadKnowledge(breadId: string): BreadKnowledge {
  const knowledge = BREAD_KNOWLEDGE[breadId];
  if (!knowledge) {
    throw new Error(`Unknown bread id: ${breadId}`);
  }
  return knowledge;
}
