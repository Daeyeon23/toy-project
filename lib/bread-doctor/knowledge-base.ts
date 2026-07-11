import { WHITE_LOAF } from "@/lib/bread-doctor/knowledge/white-loaf";
import { SOURDOUGH } from "@/lib/bread-doctor/knowledge/sourdough";
import { BAGUETTE } from "@/lib/bread-doctor/knowledge/baguette";
import { CIABATTA } from "@/lib/bread-doctor/knowledge/ciabatta";
import { FOCACCIA } from "@/lib/bread-doctor/knowledge/focaccia";
import { PAIN_DE_CAMPAGNE } from "@/lib/bread-doctor/knowledge/pain-de-campagne";
import { RYE_BREAD } from "@/lib/bread-doctor/knowledge/rye-bread";
import { PUMPERNICKEL } from "@/lib/bread-doctor/knowledge/pumpernickel";
import { CROISSANT } from "@/lib/bread-doctor/knowledge/croissant";
import { DANISH_PASTRY } from "@/lib/bread-doctor/knowledge/danish-pastry";
import { BRIOCHE } from "@/lib/bread-doctor/knowledge/brioche";
import { PANETTONE } from "@/lib/bread-doctor/knowledge/panettone";
import { MILK_BREAD } from "@/lib/bread-doctor/knowledge/milk-bread";
import { ANPAN } from "@/lib/bread-doctor/knowledge/anpan";
import { SCONE } from "@/lib/bread-doctor/knowledge/scone";
import { SODA_BREAD } from "@/lib/bread-doctor/knowledge/soda-bread";
import { CORNBREAD } from "@/lib/bread-doctor/knowledge/cornbread";
import { BAGEL } from "@/lib/bread-doctor/knowledge/bagel";
import { PRETZEL } from "@/lib/bread-doctor/knowledge/pretzel";
import { PIZZA_DOUGH } from "@/lib/bread-doctor/knowledge/pizza-dough";
import { NAAN } from "@/lib/bread-doctor/knowledge/naan";
import { PITA } from "@/lib/bread-doctor/knowledge/pita";
import { ENGLISH_MUFFIN } from "@/lib/bread-doctor/knowledge/english-muffin";
import { TORTILLA } from "@/lib/bread-doctor/knowledge/tortilla";
import { LAVASH } from "@/lib/bread-doctor/knowledge/lavash";
import { FINANCIER } from "@/lib/bread-doctor/knowledge/financier";
import { BROWNIE } from "@/lib/bread-doctor/knowledge/brownie";
import { TART } from "@/lib/bread-doctor/knowledge/tart";
import { MACARON } from "@/lib/bread-doctor/knowledge/macaron";
import { BOUCHEE } from "@/lib/bread-doctor/knowledge/bouchee";
import { CHIFFON_CAKE } from "@/lib/bread-doctor/knowledge/chiffon-cake";
import { QUICK_MUFFIN } from "@/lib/bread-doctor/knowledge/quick-muffin";
import { CHOUX } from "@/lib/bread-doctor/knowledge/choux";
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
  "rye-bread": RYE_BREAD,
  pumpernickel: PUMPERNICKEL,
  croissant: CROISSANT,
  "danish-pastry": DANISH_PASTRY,
  brioche: BRIOCHE,
  panettone: PANETTONE,
  "milk-bread": MILK_BREAD,
  anpan: ANPAN,
  scone: SCONE,
  "soda-bread": SODA_BREAD,
  cornbread: CORNBREAD,
  bagel: BAGEL,
  pretzel: PRETZEL,
  "pizza-dough": PIZZA_DOUGH,
  naan: NAAN,
  pita: PITA,
  "english-muffin": ENGLISH_MUFFIN,
  tortilla: TORTILLA,
  lavash: LAVASH,
  financier: FINANCIER,
  brownie: BROWNIE,
  tart: TART,
  macaron: MACARON,
  bouchee: BOUCHEE,
  "chiffon-cake": CHIFFON_CAKE,
  "quick-muffin": QUICK_MUFFIN,
  choux: CHOUX,
};

/** 등록되지 않은 빵 id는 프로그래밍 오류(설정 누락)이므로 즉시 던진다. */
export function getBreadKnowledge(breadId: string): BreadKnowledge {
  const knowledge = BREAD_KNOWLEDGE[breadId];
  if (!knowledge) {
    throw new Error(`Unknown bread id: ${breadId}`);
  }
  return knowledge;
}
