import { describe, expect, it } from "vitest";
import {
  ASSOCIATIONS,
  CAUSES,
  DISCRIMINATOR_QUESTIONS,
  SYMPTOMS,
  SYNONYMS,
} from "@/lib/bread-doctor/knowledge-base";

describe("knowledge-base 데이터 정합성", () => {
  const causeIds = new Set(CAUSES.map((c) => c.id));
  const symptomIds = new Set(SYMPTOMS.map((s) => s.id));

  it("모든 ASSOCIATIONS의 causeId·symptomId가 실제 원인·증상을 가리킨다", () => {
    for (const association of ASSOCIATIONS) {
      expect(causeIds.has(association.causeId)).toBe(true);
      expect(symptomIds.has(association.symptomId)).toBe(true);
    }
  });

  it("모든 DISCRIMINATOR_QUESTIONS의 pair·yesFavors·noFavors가 정합적이다", () => {
    for (const question of DISCRIMINATOR_QUESTIONS) {
      expect(causeIds.has(question.pair[0])).toBe(true);
      expect(causeIds.has(question.pair[1])).toBe(true);
      expect(question.pair).toContain(question.yesFavors);
      expect(question.pair).toContain(question.noFavors);
      expect(question.yesFavors).not.toBe(question.noFavors);
    }
  });

  it("모든 SYNONYMS의 symptomId가 실제 증상을 가리킨다", () => {
    for (const entry of SYNONYMS) {
      expect(symptomIds.has(entry.symptomId)).toBe(true);
    }
  });
});
