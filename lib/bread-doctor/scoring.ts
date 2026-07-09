import {
  ASSOCIATIONS,
  CAUSES,
  DISCRIMINATOR_QUESTIONS,
} from "@/lib/bread-doctor/knowledge-base";
import {
  MAX_DISCRIMINATOR_QUESTIONS,
  MAX_RESULT_CAUSES,
  PROXIMITY_THRESHOLD,
} from "@/config/bread-doctor";
import type {
  Association,
  Cause,
  CauseResult,
  DiagnosisOutcome,
  DiscriminatorQuestion,
} from "@/types/bread-doctor";

export interface RankedCause {
  cause: Cause;
  score: number;
}

export interface DiagnoseOptions {
  questionsAskedCount?: number;
  causes?: Cause[];
  associations?: Association[];
  questions?: DiscriminatorQuestion[];
}

/** 증상 조합에 대해 원인별 점수를 매기고, 0점을 제외한 뒤 점수 내림차순·동점은 고정 id 순서로 정렬한다. */
export function rankCauses(
  symptomIds: string[],
  causes: Cause[] = CAUSES,
  associations: Association[] = ASSOCIATIONS,
): RankedCause[] {
  const symptomIdSet = new Set(symptomIds);
  const scoreByCauseId = new Map<string, number>();

  for (const association of associations) {
    if (!symptomIdSet.has(association.symptomId)) continue;
    const current = scoreByCauseId.get(association.causeId) ?? 0;
    scoreByCauseId.set(association.causeId, current + association.weight);
  }

  return causes
    .map((cause) => ({ cause, score: scoreByCauseId.get(cause.id) ?? 0 }))
    .filter((rc) => rc.score > 0)
    .sort((a, b) => b.score - a.score || a.cause.id.localeCompare(b.cause.id));
}

/** 상위 두 원인의 점수 차가 임계값 이하면 근접 쌍으로 반환한다. */
export function findProximateTopPair(
  ranked: RankedCause[],
): [RankedCause, RankedCause] | null {
  if (ranked.length < 2) return null;
  const [first, second] = ranked;
  if (first.score - second.score > PROXIMITY_THRESHOLD) return null;
  return [first, second];
}

/** 근접 쌍을 가르는 판별 질문을 찾는다. 캡에 도달했거나 정의된 질문이 없으면 null. */
export function resolveProximateQuestion(
  pair: [RankedCause, RankedCause],
  questionsAskedCount: number,
  questions: DiscriminatorQuestion[] = DISCRIMINATOR_QUESTIONS,
): DiscriminatorQuestion | null {
  if (questionsAskedCount >= MAX_DISCRIMINATOR_QUESTIONS) return null;
  const [a, b] = pair;
  return (
    questions.find(
      (question) =>
        (question.pair[0] === a.cause.id && question.pair[1] === b.cause.id) ||
        (question.pair[0] === b.cause.id && question.pair[1] === a.cause.id),
    ) ?? null
  );
}

function toCauseResult(ranked: RankedCause, maxScore: number): CauseResult {
  return {
    cause: ranked.cause,
    strength: ranked.score === maxScore ? "high" : "medium",
  };
}

function buildResult(ranked: RankedCause[]): DiagnosisOutcome {
  const top = ranked.slice(0, MAX_RESULT_CAUSES);
  const maxScore = ranked[0]?.score ?? 0;
  return {
    kind: "result",
    causes: top.map((rc) => toCauseResult(rc, maxScore)),
  };
}

/** 결정론적 진단 엔진 — 순수 함수. 동일 입력은 항상 동일 출력을 반환한다. */
export function diagnose(
  symptomIds: string[],
  opts: DiagnoseOptions = {},
): DiagnosisOutcome {
  const ranked = rankCauses(symptomIds, opts.causes, opts.associations);
  if (ranked.length === 0) return { kind: "result", causes: [] };

  const proximatePair = findProximateTopPair(ranked);
  if (proximatePair) {
    const question = resolveProximateQuestion(
      proximatePair,
      opts.questionsAskedCount ?? 0,
      opts.questions,
    );
    if (question) {
      const maxScore = ranked[0].score;
      return {
        kind: "question",
        question,
        candidates: proximatePair.map((rc) => toCauseResult(rc, maxScore)),
      };
    }
  }

  return buildResult(ranked);
}

/** 판별 질문 응답을 최종 결과로 변환한다 — 항상 kind:"result"를 반환한다. */
export function answerQuestion(
  outcome: Extract<DiagnosisOutcome, { kind: "question" }>,
  answer: "yes" | "no" | "skip",
): DiagnosisOutcome {
  if (answer === "skip") {
    return { kind: "result", causes: outcome.candidates };
  }

  const favoredId =
    answer === "yes" ? outcome.question.yesFavors : outcome.question.noFavors;
  const favored = outcome.candidates.find((c) => c.cause.id === favoredId);
  const other = outcome.candidates.find((c) => c.cause.id !== favoredId);
  const ordered = [favored, other].filter(
    (c): c is CauseResult => c !== undefined,
  );

  return {
    kind: "result",
    causes: ordered.map((c, index) => ({
      cause: c.cause,
      strength: index === 0 ? "high" : "medium",
    })),
  };
}
