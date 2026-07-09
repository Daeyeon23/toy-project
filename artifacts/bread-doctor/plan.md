# 브레드 닥터 (Bread Doctor) 구현 계획

> 입력: [spec.md](./spec.md), [wireframe.html](./wireframe.html), [symptom-cause-matrix.md](./symptom-cause-matrix.md)
> 대상 스택: Next.js 16 App Router · React 19 · shadcn(radix-mira) · Tailwind v4 · Vitest(jsdom+RTL) · Playwright

## 아키텍처 결정

| 결정 | 선택 | 이유 |
|---|---|---|
| 라우트 | 홈(`/`) 교체 — `app/page.tsx`가 브레드 닥터 진입점 | 사용자 확정. 포트폴리오 단일 앱. 데모 `ComponentExample`은 제거 |
| 화면 전환 | **단일 라우트 + 클라이언트 스텝 머신**(`bread → symptoms → question → result`) | 계정·저장 없음, "클라이언트 완결" 불변 규칙. 라우팅 대신 상태로 단계 전환 |
| 진단 로직 | **결정론적 가중합 스코어링**(순수 함수, `lib/`) | spec의 테스트 철학("증상 X+Y → 원인 Z 1순위")에 직접 매핑. LLM/네트워크 없음 |
| 지식베이스 | **빵 종류별 분리(partition)** — 이번엔 식빵 KB만 채움 | 종류 간 매핑이 섞이지 않아 판별력 유지. `BreadType.status`로 "준비 중" 표시 |
| 결과 카드 선정 | 점수 > 0 원인 중 **상위 3개**, 동점은 **고정 원인 id 순서**(c1<…<c9)로 정렬 | Scenario 1의 C4(저온)·C9(소금) 3점 동점 등 3번째 카드 비결정성 제거 → 테스트 결정성 확보. wireframe 3번째 카드(저온환경=C4)와 일치. 점수 1 원인도 상위 3 안이면 노출(S4+S9 → C6·C2 = 2개) |
| 강도 표현 | 원인 점수가 **최댓값과 같으면** "가능성 높음", 그 외 "가능성 중간" (라벨만) | 불변 규칙 "점수 비노출". 동점 상위(건너뛰기 케이스)도 일관되게 "높음"으로 표시. 원시 점수는 내부에만 존재, 출력 타입에 숫자 없음 |
| 근접 판정 | 상위 두 원인 점수 차 ≤ `PROXIMITY_THRESHOLD`(=1) **이고** 해당 쌍에 판별 질문이 정의됨 → 질문 | Scenario 3(차 0)은 트리거, Scenario 1(차 2)은 미트리거로 성공 기준 충족 |
| 상태 소유 | `hooks/use-diagnosis.ts` 단일 훅이 스텝·선택 증상·결과·질문 흐름 소유 | 컴포넌트는 표현만. 레이어 규칙(hooks→components) 준수 |

## 인프라 리소스

None — 정적 진단 지식 기반, 외부 자원·네트워크 없음.

## 데이터 모델

### BreadType (`config`)
- id (required) · name (required) · status: `"available" | "coming-soon"`

### Symptom (`types`)
- id (required) · label (required)

### Cause (`types`)
- id (required) · name (required) · why (required) · action (required)

### Association (`types` — 매트릭스 셀)
- causeId → Cause · symptomId → Symptom · weight: `0 | 1 | 2` (●●=2, ●=1)

### DiscriminatorQuestion (`types`)
- id · pair: `[causeId, causeId]` · text · yesFavors: causeId · noFavors: causeId

### SynonymEntry (`types`)
- symptomId → Symptom · terms: string[] (미리 정의된 동의어 사전)

### CauseResult (출력 — 숫자 없음)
- cause: Cause · strength: `"high" | "medium"`

### DiagnosisOutcome (판별식 유니온)
- `{ kind: "result", causes: CauseResult[] }` — 2~3개
- `{ kind: "question", question: DiscriminatorQuestion, candidates: CauseResult[] }`

## 필요 스킬

| 스킬 | 적용 Task | 용도 |
|---|---|---|
| shadcn | 1, 3, 5, 6 | Card·Checkbox·Badge·Button·Input·Separator 조합. semantic 토큰만, `components/ui/*` 수정 금지, 내장 variant 우선 |
| next-best-practices | 1 | App Router 파일 규약, RSC/`"use client"` 경계(상호작용 컨테이너만 client) |
| vercel-composition-patterns | 3, 5 | 원인 카드·체크리스트 compound 구성, prop 폭발 회피 |
| vercel-react-best-practices | 3, 4, 6 | 파생 상태(필터·랭킹) 렌더 중 계산, 불필요한 state 회피 |
| web-design-guidelines | 1, 3, 5, 6 | 체크박스 라벨 연결, 버튼 disabled 접근성, 포커스·aria |

## 영향 받는 파일

| 파일 경로 | 변경 유형 | 관련 Task |
|---|---|---|
| `types/bread-doctor.ts` | New | 1, 2, 5 |
| `config/bread-doctor.ts` | New | 1, 2 |
| `lib/bread-doctor/knowledge-base.ts` | New | 2, 5, 6 |
| `lib/bread-doctor/scoring.ts` | New | 2, 5 |
| `lib/bread-doctor/scoring.test.ts` | New | 2, 5 |
| `lib/bread-doctor/search.ts` | New | 6 |
| `lib/bread-doctor/search.test.ts` | New | 6 |
| `hooks/use-diagnosis.ts` | New | 1, 3, 4, 5, 6 |
| `components/bread-doctor/bread-doctor.tsx` | New | 1, 3, 5 |
| `components/bread-doctor/bread-type-picker.tsx` (+`.test.tsx`) | New | 1 |
| `components/bread-doctor/symptom-checklist.tsx` (+`.test.tsx`) | New | 3, 6 |
| `components/bread-doctor/result-cards.tsx` (+`.test.tsx`) | New | 3, 4 |
| `components/bread-doctor/discriminator-question.tsx` (+`.test.tsx`) | New | 5 |
| `app/page.tsx` | Modify | 1 |
| `e2e/bread-doctor.spec.ts` | New | 7 |

---

## Tasks

### Task 1: 빵 종류 선택 → 진단 화면 진입 (앱 셸 + 스텝 머신)

- **담당 시나리오**: Scenario 0 (full)
- **크기**: M (types + config + hook 골격 + 컨테이너 + picker + page)
- **의존성**: None
- **참조**:
  - shadcn (Card, Badge — "준비 중", Button)
  - next-best-practices (App Router, `"use client"` 경계 — 컨테이너를 client로)
  - wireframe.html `#screen-0` (빵 선택 카드 그리드, "준비 중" 배지, chevron)
- **구현 대상**:
  - `types/bread-doctor.ts` — `BreadType`, `Step` 타입
  - `config/bread-doctor.ts` — 빵 종류 목록(식빵 `available`, 사워도우·크루아상·스콘 `coming-soon`)
  - `hooks/use-diagnosis.ts` — 스텝 머신 골격(`step`, `selectBread()`; symptoms 스텝은 이후 확장)
  - `components/bread-doctor/bread-type-picker.tsx`
  - `components/bread-doctor/bread-doctor.tsx` — 스텝 스위치 컨테이너
  - `app/page.tsx` — 컨테이너 렌더로 교체
  - `components/bread-doctor/bread-type-picker.test.tsx`
- **수용 기준**:
  - [ ] 선택 화면에 "식빵" 카드와 "준비 중" 배지가 붙은 다른 계열 카드(사워도우/크루아상/스콘)가 함께 표시된다
  - [ ] "식빵" 카드 클릭 → 증상 체크리스트 화면(스텝 `symptoms`)이 표시된다
  - [ ] "준비 중" 카드는 클릭해도 증상 화면으로 이동하지 않는다(비활성)
  - [ ] "기본 이스트 식빵 기준" 범위 고지가 화면에 표시된다 (불변 규칙)
- **검증**: `bun run test -- bread-type-picker` · `bun run build`

### Task 2: 진단 엔진 + 식빵 지식베이스 (스코어링 코어)

- **담당 시나리오**: Scenario 2 (엔진 레벨 랭킹 — 순수 함수 경계)
- **크기**: M (KB + scoring + 테스트, types 확장)
- **의존성**: None (Task 1과 병행 가능하나 types 공유)
- **참조**:
  - symptom-cause-matrix.md (원인 C1~C9, 증상 S1~S10, 가중치 매트릭스, 조합 A/B/C 기대값)
  - spec.md 미결정 항목 (원인 카피 문구는 초안 — 매트릭스 근거로 작성)
- **구현 대상**:
  - `types/bread-doctor.ts` — `Symptom`, `Cause`, `Association`, `CauseResult`, `DiagnosisOutcome` 확장
  - `lib/bread-doctor/knowledge-base.ts` — 식빵 증상 10개, 원인 9개(name/why/action), 매트릭스 가중치
  - `lib/bread-doctor/scoring.ts` — `diagnose(symptomIds): DiagnosisOutcome`, 상위 2~3 랭킹, 강도 라벨, 근접 판정
  - `lib/bread-doctor/scoring.test.ts`
- **수용 기준** (매트릭스 조합 = spec 성공 기준의 결정론적 출력):
  - [ ] `["안부풂","속떡짐","옆구리터짐"]` → 1순위 원인이 "발효 부족"
  - [ ] `["주저앉음","큰기공","신맛"]` → 1순위 원인이 "과발효"
  - [ ] `["겉탐속덜익음","딱딱한겉"]` → 1순위 원인이 "오븐 온도가 높음"
  - [ ] `["안부풂","속떡짐"]`만 → 상위 두 원인이 "이스트 문제"·"발효 부족"로 근접 판정된다
  - [ ] `["안부풂","속떡짐","옆구리터짐"]` → 결과 원인이 정확히 3개(발효 부족·이스트 문제·저온 환경)이고, 3점 동점(저온·소금)은 고정 id 순서로 "저온 환경"이 선택된다
  - [ ] 반환된 `CauseResult`에 원시 점수·퍼센트 숫자 필드가 없다 (강도는 `"high"|"medium"` 라벨) (불변 규칙)
- **검증**: `bun run test -- scoring`

---

### Checkpoint: Tasks 1-2 이후
- [ ] 모든 테스트 통과: `bun run test`
- [ ] 빌드 성공: `bun run build`
- [ ] 빵 선택 화면이 뜨고, 엔진이 대표 조합에 대해 기대 1순위를 반환한다

---

### Task 3: 증상 선택 → 순위 결과 표시 (명확한 진단)

- **담당 시나리오**: Scenario 1 (full), Scenario 5 (full), Scenario 2 (UI 확인 1건)
- **크기**: M (체크리스트 + 결과 카드 + 훅/컨테이너 연결 + 테스트)
- **의존성**: Task 1 (스텝 머신), Task 2 (엔진)
- **참조**:
  - shadcn (Checkbox, Card, Badge — 강도 라벨, Button — 진단하기)
  - vercel-composition-patterns (원인 카드 compound)
  - web-design-guidelines (체크박스 라벨 연결, disabled 버튼 접근성)
  - wireframe.html `#screen-1`(체크리스트·진단하기), `#screen-4`(결과 카드·recap·면책 고지)
- **구현 대상**:
  - `components/bread-doctor/symptom-checklist.tsx` (검색은 Task 6에서 추가)
  - `components/bread-doctor/result-cards.tsx` — 순위 카드 + "이 증상으로 진단했어요" recap chip row(wireframe `#screen-4`)
  - `hooks/use-diagnosis.ts` — 증상 토글·`runDiagnosis()`·결과 노출 확장
  - `components/bread-doctor/bread-doctor.tsx` — `symptoms`/`result` 스텝 연결
  - `symptom-checklist.test.tsx`, `result-cards.test.tsx`
- **수용 기준**:
  - [ ] "거의 부풀지 않음"+"속이 떡짐/질음"+"옆구리·표면이 터짐" 선택 → "진단하기" → 판별 질문 없이 결과가 표시되고 1순위 카드 제목이 "발효 부족"이다
  - [ ] 결과에 원인 카드가 2~3개 표시된다
  - [ ] 각 원인 카드에 원인명, "왜 이 증상이 나오는지", "다음에 이렇게" 텍스트가 모두 보인다
  - [ ] 증상 0개 선택 → "진단하기" 버튼이 비활성이고, 1개 선택하면 활성화된다
  - [ ] "부풀다 주저앉음"+"기공이 너무 크고 불규칙"+"신맛/이상한 냄새" 선택 → 1순위 카드 제목이 "과발효"다
  - [ ] "겉은 탔는데 속은 덜 익음"+"겉이 두껍고 딱딱함" 선택 → 1순위 카드 제목이 "오븐 온도가 높음"이다
  - [ ] 결과 화면에 면책 고지("단정적 진단이 아니라…")와 범위 고지가 표시된다 (불변 규칙)
  - [ ] 결과 화면 어디에도 숫자 점수·퍼센트가 렌더되지 않는다 (불변 규칙)
- **검증**: `bun run test -- "symptom-checklist|result-cards"`

### Task 4: 증상을 바꿔 다시 진단

- **담당 시나리오**: Scenario 6 (full)
- **크기**: S (훅 재실행 로직 + 결과 "다시 진단" 연결 + 테스트)
- **의존성**: Task 3
- **참조**:
  - vercel-react-best-practices (파생 상태 재계산, 이전 결과 초기화)
  - wireframe.html `#screen-4` ("증상 바꿔 다시 진단" 버튼)
- **구현 대상**:
  - `hooks/use-diagnosis.ts` — `reset()`/재진단 시 이전 결과 폐기
  - `components/bread-doctor/result-cards.tsx` — "다시 진단" 액션 연결
  - `result-cards.test.tsx` (재진단 케이스 추가)
- **수용 기준**:
  - [ ] Scenario 2 결과("과발효" 1순위) 표시 후 증상을 "겉은 탔는데 속은 덜 익음"+"겉이 두껍고 딱딱함"으로 바꿔 다시 진단하면 이전 결과 카드가 더 이상 보이지 않는다
  - [ ] 바뀐 증상으로 다시 진단 → 1순위가 "오븐 온도가 높음"으로 갱신된다
- **검증**: `bun run test -- result-cards`

### Task 5: 판별 질문 흐름 (근접 원인 좁히기)

- **담당 시나리오**: Scenario 3 (full), Scenario 4 (full)
- **크기**: M (질문 컴포넌트 + 엔진/훅 분기 + KB 질문 + 테스트)
- **의존성**: Task 2 (근접 판정), Task 3 (결과 표시)
- **참조**:
  - shadcn (Card, Button — 예/아니오/건너뛰기)
  - vercel-composition-patterns (질문 카드)
  - wireframe.html `#screen-3` (확인 질문 + 3버튼, "질문 1 / 최대 2")
- **구현 대상**:
  - `lib/bread-doctor/knowledge-base.ts` — 이스트↔발효부족 판별 질문("1차 발효 때 반죽이 부풀긴 했나요?")
  - `lib/bread-doctor/scoring.ts` — `answerQuestion()`(예/아니오→방향 확정), 건너뛰기(둘 다), 최대 2개 가드
  - `hooks/use-diagnosis.ts` — `question` 스텝·응답 처리
  - `components/bread-doctor/discriminator-question.tsx`
  - `components/bread-doctor/bread-doctor.tsx` — `question` 스텝 연결
  - `discriminator-question.test.tsx`, `scoring.test.ts`(응답 분기)
- **수용 기준**:
  - [ ] "거의 부풀지 않음"+"속이 떡짐/질음"만 선택 → "진단하기" → 결과 대신 판별 질문("1차 발효 때 반죽이 부풀긴 했나요?")이 표시되고 최종 순위는 아직 확정되지 않는다
  - [ ] 판별 질문에 "예" → 1순위 카드 제목이 "발효 부족"이다
  - [ ] 판별 질문에 "아니오" → 1순위 카드 제목이 "이스트 문제"다
  - [ ] "건너뛰기" → 결과에 "이스트 문제"와 "발효 부족" 카드가 모두 표시된다
  - [ ] 근접 쌍이 2개 이상인 **합성 입력**에 대해 판별 질문이 최대 2개까지만 발생하고 그 후 결과가 반환된다 (scoring.test.ts 단위 검증 — 실 KB는 판별 쌍 1개뿐이라 캡 로직을 합성 데이터로 실증)
  - [ ] 판별 질문 화면에 "기본 이스트 식빵 기준" 범위 고지가 표시된다 (불변 규칙)
- **검증**: `bun run test -- "discriminator-question|scoring"`

---

### Checkpoint: Tasks 3-5 이후
- [ ] 모든 테스트 통과: `bun run test`
- [ ] 빌드 성공: `bun run build`
- [ ] 증상 선택 → (근접 시 판별 질문 →) 결과 → 다시 진단이 end-to-end로 동작

---

### Task 6: 증상 검색·동의어 필터

- **담당 시나리오**: Scenario 7 (full)
- **크기**: M (동의어 사전 + 검색 로직 + 체크리스트 검색 UI + 빈 상태 + 테스트)
- **의존성**: Task 3 (체크리스트)
- **참조**:
  - shadcn (Input — 검색, 빈 결과 안내)
  - vercel-react-best-practices (필터는 렌더 중 파생 계산, 선택 상태는 별도 보존)
  - wireframe.html `#screen-2` (검색 입력·좁혀진 목록·no-match 안내)
- **구현 대상**:
  - `lib/bread-doctor/knowledge-base.ts` — 시드 동의어 사전(예: "떡져요"→"속이 떡짐/질음")
  - `lib/bread-doctor/search.ts` — `filterSymptoms(query): Symptom[]`(동의어 사전 매칭, 사전 외엔 빈 결과)
  - `components/bread-doctor/symptom-checklist.tsx` — 검색 Input + 필터 목록 + no-match 안내
  - `lib/bread-doctor/search.test.ts`, `symptom-checklist.test.tsx`(검색 케이스)
- **수용 기준**:
  - [ ] "떡져요" 입력 → 목록에 "속이 떡짐/질음"이 나타나고 무관한 증상은 보이지 않는다
  - [ ] 필터된 증상을 선택 → 선택 상태가 되고, 검색어를 지우면 전체 목록이 (선택 유지된 채) 복원된다
  - [ ] 동의어 사전에 없는 검색어("우주선") 입력 → "일치하는 증상 없음" 안내가 표시된다
  - [ ] 검색어 없이도 전체 체크리스트에서 직접 선택할 수 있다
  - [ ] 검색/필터 상태에서도 "기본 이스트 식빵 기준" 범위 고지가 표시된다 (불변 규칙)
- **검증**: `bun run test -- "search|symptom-checklist"`

### Task 7: 불변 규칙 + 전체 흐름 E2E

- **담당 시나리오**: 불변 규칙 4개 + Scenario 0→1 해피패스 통합
- **크기**: S (E2E 스펙 + 필요한 미세 수정)
- **의존성**: Task 1~6
- **참조**:
  - playwright.config.ts (baseURL `/`, webServer `bun run dev`)
  - e2e/smoke.spec.ts (기존 패턴)
- **구현 대상**:
  - `e2e/bread-doctor.spec.ts`
- **수용 기준**:
  - [ ] `/` 진입 → "식빵" 선택 → 증상 3개 선택 → "진단하기" → 결과에 1순위 "발효 부족" 카드가 보인다
  - [ ] 모든 결과 화면에 면책 고지·범위 고지 문구가 보인다 (불변 규칙)
  - [ ] 전체 흐름 어느 화면에도 원시 점수·퍼센트 숫자 텍스트가 없다 (불변 규칙)
  - [ ] 진단 과정에서 외부 호스트로의 네트워크 요청이 0건이다 (불변 규칙 — `page.on("request")`로 외부 도메인 요청 없음 단언)
- **검증**: `bun run test:e2e -- bread-doctor` · 증거 `artifacts/bread-doctor/evidence/task-7.png`

---

### Checkpoint: Tasks 6-7 이후 (최종)
- [ ] 모든 테스트 통과: `bun run test`
- [ ] E2E 통과: `bun run test:e2e`
- [ ] 빌드 성공: `bun run build`
- [ ] spec의 시각적 시나리오 0~7 + 불변 규칙 4개가 모두 검증됨

---

## 미결정 항목

- **원인 카피 최종 문구**: `knowledge-base.ts`의 why/action은 매트릭스 근거 초안. 사용자 용어 검증(Should-Be-True) 후 다듬음 — 코드 구조 변경 없이 텍스트만 교체 가능.
- **동의어 사전 시드 범위**: Task 6은 최소 시드(spec 성공 기준 커버)로 시작. 지인 인터뷰 후 사전 항목만 확장 (`knowledge-base.ts` 데이터 추가, 로직 불변).
- **근접 임계값 `PROXIMITY_THRESHOLD`**: 기본 1. 판별 질문을 붙일 추가 근접 쌍이 생기면 `config`에서 조정.
- **추가 판별 쌍**: MVP는 이스트↔발효부족 1쌍만 실 KB에 정의. 과발효↔반죽개발부족(매트릭스 조합 B) 등은 문안 확정(spec 미결정) 후 데이터 추가. 최대 2개 캡은 그때 UI 연쇄로도 자연 실증됨.
- **"준비 중" 계열 구성**: 현재 사워도우·크루아상·스콘 3개(`config`). 변경 시 데이터만 수정.
- **뒤로 가기 네비게이션**: MVP 범위에서 **제외**(사용자 확정). wireframe의 "← 빵 종류" 버튼 제거함. 재진단은 결과 화면의 "증상 바꿔 다시 진단"(Scenario 6)으로 커버.
