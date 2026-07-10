/**
 * CORE 원인·증상 — 식빵(white-loaf) v1 KB에서 정의된 9원인·10증상. 대부분의 다른 빵 매트릭스가
 * 이 id를 그대로 재사용하고, 빵 고유 실패 양상만 카테고리 접두사(lam-/enr-/quick-/flat-/boil-/starter-…)로
 * 새 코드를 추가한다 (artifacts/bread-doctor/matrices/_taxonomy.md 참고).
 */

export const CORE_CAUSES: Array<{ id: string; name: string }> = [
  { id: "yeast-dead", name: "이스트 문제" },
  { id: "underproof", name: "발효 부족" },
  { id: "overproof", name: "과발효" },
  { id: "cold-environment", name: "저온 환경" },
  { id: "weak-gluten", name: "반죽 개발 부족" },
  { id: "oven-too-hot", name: "오븐 온도가 높음" },
  { id: "oven-too-cool", name: "오븐 온도가 낮음" },
  { id: "excess-hydration", name: "수분 과다" },
  { id: "excess-salt", name: "소금 과다" },
];

export const CORE_SYMPTOMS: Array<{ id: string; label: string }> = [
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

/** CORE 원인 id의 정본 이름을 돌려준다 — 빵별 파일이 이 이름을 그대로 재사용해 충돌을 막는다. */
export function coreCauseName(id: string): string {
  const cause = CORE_CAUSES.find((c) => c.id === id);
  if (!cause) throw new Error(`Unknown CORE cause id: ${id}`);
  return cause.name;
}

/** CORE 증상 id의 정본 라벨을 돌려준다. */
export function coreSymptomLabel(id: string): string {
  const symptom = CORE_SYMPTOMS.find((s) => s.id === id);
  if (!symptom) throw new Error(`Unknown CORE symptom id: ${id}`);
  return symptom.label;
}

/**
 * 여러 빵 KB에 걸쳐 등장하는 (id, label) 쌍을 모았을 때, 같은 id가 서로 다른 라벨로
 * 두 번 정의되면 충돌로 보고한다. 빵 경계 격리 불변 규칙의 데이터 전제 — 25개 매트릭스가
 * 병합 가능한 단일 코드 공간을 이루는지 검증하는 데 쓴다.
 */
export function findLabelConflicts(
  entries: Array<{ id: string; label: string }>,
): Array<{ id: string; labels: string[] }> {
  const labelsByid = new Map<string, Set<string>>();

  for (const entry of entries) {
    const labels = labelsByid.get(entry.id) ?? new Set<string>();
    labels.add(entry.label);
    labelsByid.set(entry.id, labels);
  }

  const conflicts: Array<{ id: string; labels: string[] }> = [];
  for (const [id, labels] of labelsByid) {
    if (labels.size > 1) {
      conflicts.push({ id, labels: [...labels] });
    }
  }
  return conflicts;
}
