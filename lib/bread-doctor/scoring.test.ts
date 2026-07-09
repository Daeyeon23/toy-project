import { describe, expect, it } from "vitest";
import {
  diagnose,
  answerQuestion,
  resolveProximateQuestion,
  rankCauses,
} from "@/lib/bread-doctor/scoring";
import type { DiagnosisOutcome } from "@/types/bread-doctor";

describe("diagnose", () => {
  it("발효 부족 조합 → 1순위가 발효 부족", () => {
    const outcome = diagnose(["no-rise", "gummy", "blowout"]);
    expect(outcome.kind).toBe("result");
    const causes = (outcome as Extract<DiagnosisOutcome, { kind: "result" }>)
      .causes;
    expect(causes[0].cause.name).toBe("발효 부족");
  });

  it("동점 3위는 고정 id 순서로 저온 환경이 선택되고 카드가 정확히 3개", () => {
    const outcome = diagnose(["no-rise", "gummy", "blowout"]);
    const causes = (outcome as Extract<DiagnosisOutcome, { kind: "result" }>)
      .causes;
    expect(causes).toHaveLength(3);
    expect(causes.map((c) => c.cause.name)).toEqual([
      "발효 부족",
      "이스트 문제",
      "저온 환경",
    ]);
  });

  it("과발효 조합 → 1순위가 과발효", () => {
    const outcome = diagnose(["collapsed", "large-holes", "sour-smell"]);
    expect(outcome.kind).toBe("result");
    const causes = (outcome as Extract<DiagnosisOutcome, { kind: "result" }>)
      .causes;
    expect(causes[0].cause.name).toBe("과발효");
  });

  it("오븐 고온 조합 → 1순위가 오븐 온도가 높음, 카드 2개", () => {
    const outcome = diagnose(["burnt-outside-raw-inside", "thick-crust"]);
    expect(outcome.kind).toBe("result");
    const causes = (outcome as Extract<DiagnosisOutcome, { kind: "result" }>)
      .causes;
    expect(causes[0].cause.name).toBe("오븐 온도가 높음");
    expect(causes).toHaveLength(2);
  });

  it("근접 쌍(이스트 문제 ↔ 발효 부족)만 있으면 판별 질문을 반환한다", () => {
    const outcome = diagnose(["no-rise", "gummy"]);
    expect(outcome.kind).toBe("question");
    const question = (
      outcome as Extract<DiagnosisOutcome, { kind: "question" }>
    ).question;
    expect(question.text).toBe("1차 발효 때 반죽이 부풀긴 했나요?");
    const candidateNames = (
      outcome as Extract<DiagnosisOutcome, { kind: "question" }>
    ).candidates.map((c) => c.cause.name);
    expect(candidateNames).toEqual(
      expect.arrayContaining(["이스트 문제", "발효 부족"]),
    );
  });

  it("CauseResult에는 원시 점수·퍼센트 숫자 필드가 없다", () => {
    const outcome = diagnose(["no-rise", "gummy", "blowout"]);
    const causes = (outcome as Extract<DiagnosisOutcome, { kind: "result" }>)
      .causes;
    for (const result of causes) {
      expect(Object.keys(result).sort()).toEqual(["cause", "strength"]);
      expect(["high", "medium"]).toContain(result.strength);
    }
  });
});

describe("answerQuestion", () => {
  const outcome = diagnose(["no-rise", "gummy"]) as Extract<
    DiagnosisOutcome,
    { kind: "question" }
  >;

  it("예 응답 → 1순위가 발효 부족", () => {
    const result = answerQuestion(outcome, "yes");
    expect(result.kind).toBe("result");
    expect(
      (result as Extract<DiagnosisOutcome, { kind: "result" }>).causes[0]
        .cause.name,
    ).toBe("발효 부족");
  });

  it("아니오 응답 → 1순위가 이스트 문제", () => {
    const result = answerQuestion(outcome, "no");
    expect(
      (result as Extract<DiagnosisOutcome, { kind: "result" }>).causes[0]
        .cause.name,
    ).toBe("이스트 문제");
  });

  it("건너뛰기 → 이스트 문제와 발효 부족 카드가 모두 표시된다", () => {
    const result = answerQuestion(outcome, "skip");
    const names = (
      result as Extract<DiagnosisOutcome, { kind: "result" }>
    ).causes.map((c) => c.cause.name);
    expect(names).toEqual(expect.arrayContaining(["이스트 문제", "발효 부족"]));
  });
});

describe("resolveProximateQuestion — 최대 질문 횟수 캡", () => {
  const ranked = rankCauses(["no-rise", "gummy"]);
  const pair = [ranked[0], ranked[1]] as [
    (typeof ranked)[number],
    (typeof ranked)[number],
  ];

  it("캡 미도달(0, 1)이면 질문을 반환한다", () => {
    expect(resolveProximateQuestion(pair, 0)).not.toBeNull();
    expect(resolveProximateQuestion(pair, 1)).not.toBeNull();
  });

  it("캡 도달(2 이상)이면 null을 반환해 결과로 강제 전환된다", () => {
    expect(resolveProximateQuestion(pair, 2)).toBeNull();
    expect(resolveProximateQuestion(pair, 3)).toBeNull();
  });
});
