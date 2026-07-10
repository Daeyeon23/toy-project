import { describe, expect, it } from "vitest";
import { BREAD_KNOWLEDGE, getBreadKnowledge } from "@/lib/bread-doctor/knowledge-base";
import { findLabelConflicts } from "@/lib/bread-doctor/knowledge/_core";

describe.each(Object.entries(BREAD_KNOWLEDGE))(
  "knowledge-base 데이터 정합성 — %s",
  (_breadId, knowledge) => {
    const causeIds = new Set(knowledge.causes.map((c) => c.id));
    const symptomIds = new Set(knowledge.symptoms.map((s) => s.id));

    it("모든 associations의 causeId·symptomId가 실제 원인·증상을 가리킨다", () => {
      for (const association of knowledge.associations) {
        expect(causeIds.has(association.causeId)).toBe(true);
        expect(symptomIds.has(association.symptomId)).toBe(true);
      }
    });

    it("모든 discriminator questions의 pair·yesFavors·noFavors가 정합적이다", () => {
      for (const question of knowledge.questions) {
        expect(causeIds.has(question.pair[0])).toBe(true);
        expect(causeIds.has(question.pair[1])).toBe(true);
        expect(question.pair).toContain(question.yesFavors);
        expect(question.pair).toContain(question.noFavors);
        expect(question.yesFavors).not.toBe(question.noFavors);
      }
    });

    it("모든 synonyms의 symptomId가 실제 증상을 가리킨다", () => {
      for (const entry of knowledge.synonyms) {
        expect(symptomIds.has(entry.symptomId)).toBe(true);
      }
    });

    it("모든 증상이 최소 1개 association에서 참조된다 (고아 증상 없음)", () => {
      const referencedSymptomIds = new Set(
        knowledge.associations.map((a) => a.symptomId),
      );
      const orphanSymptoms = knowledge.symptoms
        .map((s) => s.id)
        .filter((id) => !referencedSymptomIds.has(id));
      expect(orphanSymptoms).toEqual([]);
    });

    it("모든 원인이 최소 1개 association에서 참조된다 (고아 원인 없음)", () => {
      const referencedCauseIds = new Set(
        knowledge.associations.map((a) => a.causeId),
      );
      const orphanCauses = knowledge.causes
        .map((c) => c.id)
        .filter((id) => !referencedCauseIds.has(id));
      expect(orphanCauses).toEqual([]);
    });
  },
);

describe("빵 경계 격리 — 등록된 빵 간 코드 충돌 검사", () => {
  it("등록된 모든 빵의 원인 id가 서로 다른 이름으로 정의되지 않는다", () => {
    const causeEntries = Object.values(BREAD_KNOWLEDGE).flatMap((k) =>
      k.causes.map((c) => ({ id: c.id, label: c.name })),
    );
    expect(findLabelConflicts(causeEntries)).toEqual([]);
  });

  it("등록된 모든 빵의 증상 id가 서로 다른 라벨로 정의되지 않는다", () => {
    const symptomEntries = Object.values(BREAD_KNOWLEDGE).flatMap((k) =>
      k.symptoms.map((s) => ({ id: s.id, label: s.label })),
    );
    expect(findLabelConflicts(symptomEntries)).toEqual([]);
  });
});

describe("getBreadKnowledge", () => {
  it("등록된 id는 해당 빵의 지식을 반환한다", () => {
    expect(getBreadKnowledge("white-loaf").causes.length).toBeGreaterThan(0);
  });

  it("등록되지 않은 id는 에러를 던진다", () => {
    expect(() => getBreadKnowledge("no-such-bread")).toThrow(
      "Unknown bread id: no-such-bread",
    );
  });
});
