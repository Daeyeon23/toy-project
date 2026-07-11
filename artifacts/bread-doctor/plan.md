# 브레드 닥터 v2 — 25종 빵 확장 구현 계획

> 입력: [spec.md](./spec.md) (v2 갱신됨), [wireframe.html](./wireframe.html), [matrices/](./matrices/) (25종 매트릭스 + `_taxonomy.md`)
> 대상 스택: Next.js 16 App Router · React 19 · shadcn(radix-mira) · Tailwind v4 · Vitest(jsdom+RTL) · Playwright
> 전제: v1(식빵 1종)이 이미 동작 중. 이 계획은 그 위에 24종을 **이질감 없이** 얹는다.

> **v3 확장 (Task 12부터): 제과류 파일럿 8종.** Tasks 1-11(위)은 완료된 v2 구현이며 그대로 회귀
> 가드로 남는다. spec.md v3([idea-pastry.md](./idea-pastry.md) 기반)에 따라 8개 실패-메커니즘
> 카테고리(유화 배터·멜팅버터/크리밍·러빙·머랭 거품·전란 거품 스펀지·분리교반·화학팽창 머핀·
> 스팀 팽창)에서 대표 1종씩(휘낭시에·브라우니·타르트·마카롱·붓세·시폰케이크·머핀(퀵브레드)·슈)을
> 추가한다. **핵심 통찰: v2가 이미 만든 KB 데이터 주입 아키텍처(`BreadType`/`BreadKnowledge`/
> `getBreadKnowledge(id)`/`useDiagnosis`)는 완전히 품목-불가지론적이다** — 빵인지 제과류인지
> 코드가 구분하지 않는다. 그래서 v3는 v2의 Task 2·3 같은 "배선 재구조화"가 필요 없고,
> ① 매트릭스 작성 ② UI 카피 일반화 ③ 데이터 인코딩(config 등록 포함) ④ 통합 검증만 남는다.

## 핵심 통찰 (계획의 뼈대)

1. **엔진은 이미 데이터 주입(DI)을 지원한다.** `diagnose(symptomIds, { causes, associations, questions })`와 `filterSymptoms(query, symptoms, synonyms)`는 파라미터로 빵별 데이터를 받는다. **순수 함수 계층(`scoring.ts`)은 로직 변경 없음** — 기본값이 전역 상수를 가리키는 부분만 걷어낸다.
2. **정작 빵 선택이 배선돼 있지 않다.** `use-diagnosis`의 `selectBread`는 id를 버리고(`hooks/use-diagnosis.ts:31`) 전역 `SYMPTOMS`/`CAUSES`만 쓴다. 이번 확장의 본질은 **KB를 전역 단일 세트 → 빵ID별 세트로 재구조화**하고 훅이 선택 빵의 KB를 엔진에 주입하는 배선이다.
3. **숨은 버그**: `symptom-checklist.tsx:40`은 `filterSymptoms(query, symptoms)`로 호출해 **전역 동의어**를 쓴다. 빵별 동의어를 넘기도록 고쳐야 한다.
4. **모든 매트릭스는 CORE 코드(9원인·10증상)를 재사용**하고 카테고리 접두사(`lam-`·`enr-`·`quick-`·`flat-`·`boil-`·`starter-`…)로만 신규 코드를 더한다. 병합의 첫 단계는 **id→의미 정본 레지스트리와 충돌 검사**다.

## 아키텍처 결정

| 결정 | 선택 | 이유 |
|---|---|---|
| KB 구조 | 전역 단일 세트 → **빵ID별 세트** `BREAD_KNOWLEDGE: Record<breadId, BreadKnowledge>` | 빵 경계 격리(불변 규칙). 엔진 DI에 그대로 주입 |
| KB 파일 배치 | 빵별 파일 `lib/bread-doctor/knowledge/<bread-id>.ts` → `knowledge-base.ts`가 집계 | 리뷰 단위가 빵 1종. 데이터 Task가 서로 다른 파일을 건드려 충돌·재파악 비용 최소화(learnings의 "한 데이터 파일이 여러 Task에 걸침" 함정 회피) |
| CORE 정본 | `lib/bread-doctor/knowledge/_core.ts` — CORE 원인·증상 id와 정본 라벨 + 충돌 검사 대상 레지스트리 | 25개 파일이 같은 id를 다른 의미로 쓰지 않도록 단일 출처. `why`/`action`은 빵별로 다를 수 있어 빵 파일에서 기술 |
| 빵 분류 | `BreadType`에 `category` 필드 추가, `status`는 전부 `"available"` | 피커를 8개 카테고리로 그룹핑. `status`는 하위호환 유지(전 종류 활성) |
| 피커 UX | **카테고리 섹션 헤더 + 카드 그리드**(아코디언/탭 아님) + 빵 이름 검색 | 숨김 콘텐츠 없이 25종 스캔 용이, 모바일 세로 스크롤에 자연스러움. 신규 shadcn 컴포넌트 불필요(기존 Card·InputGroup 재사용) |
| 범위 고지 | 하드코딩 "식빵 기준"(`bread-doctor.tsx:11`) → **선택 빵 이름 동적 표기** | 불변 규칙(범위 고지)이 multi-bread에서 참이 되도록 |
| 판별 질문 | 빵마다 여러 근접 쌍의 질문을 KB에 담되, **한 진단당 최상위 쌍 1개만** 발화 | 기존 단일 질문 흐름 그대로. 체이닝은 spec에서 범위 외. `MAX_DISCRIMINATOR_QUESTIONS` 캡은 휴면 유지 |
| 엔진/검색 로직 | **변경 없음** — 기본 인자만 per-bird 주입으로 대체 | DI 설계 재사용. 회귀 위험 최소 |
| Task 순서 | **데이터 인코딩(24종)을 피커 확장보다 앞에** | 피커가 25종을 노출하는 시점엔 모든 빵 KB가 존재 → `getBreadKnowledge(id) → undefined` 창(미정의 빵 선택 크래시)이 없음 |
| **(v3) 도메인 구분** | `BreadCategory`에 `domain: "bread" \| "pastry"` 필드 추가. `BreadType`엔 필드 추가 안 함 | 도메인은 카테고리 단위 속성(카테고리 16개 중 8개는 항상 bread, 8개는 항상 pastry). 피커 카드 아이콘을 도메인별로 분기하는 유일한 용도 — 컴포넌트에 병렬 ID 목록을 하드코딩하지 않음 |
| **(v3) 코드 네임스페이스** | 카테고리당 신규 접두사: 유화배터=`fin-`, 크리밍바=`brn-`, 러빙=`tart-`, 머랭거품=`mac-`, 전란거품=`spg-`, 분리교반=`chif-`, 화학팽창머핀=`qmuf-`(기존 빵의 `quick-`과 의도적으로 다른 문자열), 스팀팽창=`choux-` | 기존 25종 코드와 겹치지 않는 새 네임스페이스 확보. `qmuf-`는 `.claude/rules/bread-kb-code-namespace.md`가 경고한 크로스 네임스페이스 충돌(과거 tortilla/lavash 사고)을 피하기 위해 기존 `quick-`과 다른 문자열로 고정 |
| **(v3) 매트릭스 선행** | 8종 매트릭스(`matrices/<id>.md`)를 Task 12에서 먼저 종이 검증 후 PEAKED 판정 — v2와 동일한 형식 | 데이터 Task(14, 15)가 이미 검증된 매트릭스를 코드로 옮기기만 하도록, 판별력 실패를 코드 작성 이후가 아니라 미리 발견 |
| **(v3) 배선 재사용** | `useDiagnosis`/`BreadDoctor`/`ResultCards`/`BreadTypePicker`는 **로직 변경 없음** — v2가 이미 완성한 DI 배선을 그대로 재사용, 카피(문구)만 일반화 | 8종 추가가 기존 25종 경로에 로직 회귀를 일으킬 표면적이 없음 (카피 문자열 변경만 회귀 위험) |

## 인프라 리소스

None — 정적 진단 지식 기반, 외부 자원·네트워크 없음.

## 데이터 모델

### BreadType (`config`) — 확장
- id (required) · name (required) · **category (required)** · status: `"available"`

### BreadCategory (`types` — 신규)
- id · label (예: "사워도우·호밀") · order

### BreadKnowledge (`types` — 신규, 빵 1종의 진단 지식 묶음)
- symptoms: Symptom[] · causes: Cause[] · associations: Association[] · questions: DiscriminatorQuestion[] · synonyms: SynonymEntry[]

### CanonicalCode (`types` — 신규, 충돌 검사용)
- id · label · kind: `"cause" | "symptom"` · isCore: boolean

> `Symptom`·`Cause`·`Association`·`DiscriminatorQuestion`·`SynonymEntry`·`CauseResult`·`DiagnosisOutcome`는 v1 그대로 유지(변경 없음).

### (v3) BreadCategory — 확장
- 기존 `id`·`label`·`order`에 **`domain: "bread" | "pastry"`** 추가 (기존 8개 카테고리는 `"bread"`, 신규 8개는 `"pastry"`)

## 필요 스킬

| 스킬 | 적용 Task | 용도 |
|---|---|---|
| shadcn | 10 | 카테고리 섹션 그리드·빵 검색 InputGroup·Empty(빈 결과). semantic 토큰만, `components/ui/*` 수정 금지, 내장 variant 우선 |
| vercel-react-best-practices | 3, 10 | 선택 빵 파생 데이터(symptoms/synonyms/…)를 렌더 중 계산, 불필요한 state 회피 |
| vercel-composition-patterns | 10 | 그룹 피커 compound 구성, prop 폭발 회피 |
| web-design-guidelines | 10 | 카테고리 그룹의 시맨틱 헤딩·리스트, 검색 입력 라벨·aria, 카드 버튼 포커스 |
| next-best-practices | 2, 3 | `"use client"` 경계 유지(상호작용 컨테이너만 client), 데이터 모듈은 서버/클라 공용 순수 모듈 |
| (v3) shadcn | 13 | 도메인별 아이콘 분기가 Badge/Card variant 규칙을 건드리지 않는지 확인 (semantic 토큰만, 내장 아이콘 슬롯 재사용) |
| (v3) web-design-guidelines | 13 | "다시 고르기" 등 문구 변경이 버튼 접근성 이름(aria)·포커스 순서를 깨지 않는지 확인 |

## 영향 받는 파일

| 파일 경로 | 변경 유형 | 관련 Task |
|---|---|---|
| `types/bread-doctor.ts` | Modify | 1, 2, 10 |
| `lib/bread-doctor/knowledge/_core.ts` (+`.test.ts`) | New | 1 |
| `lib/bread-doctor/knowledge/white-loaf.ts` | New (v1 데이터 이관) | 2 |
| `lib/bread-doctor/knowledge/sourdough.ts` | New | 3 |
| `lib/bread-doctor/knowledge/<나머지 23종>.ts` | New | 4–9 |
| `lib/bread-doctor/knowledge-base.ts` | Modify (집계 인덱스로 전환) | 2, 3, 4–9 |
| `lib/bread-doctor/knowledge-base.test.ts` | Modify (빵별 정합성 검사로 확장) | 2, 4–9 |
| `lib/bread-doctor/scoring.ts` · `scoring.test.ts` | Modify (기본 인자 정리·명시 주입, 로직 불변) | 2 |
| `lib/bread-doctor/search.ts` · `search.test.ts` | Modify (기본 인자 정리·명시 주입, 로직 불변) | 2 |
| `hooks/use-diagnosis.ts` (+`.test.ts`) | Modify (선택 빵 KB 주입, changeBread) | 2, 3 |
| `components/bread-doctor/bread-doctor.tsx` | Modify (동적 범위 고지, 빵 다시 고르기) | 3 |
| `components/bread-doctor/bread-doctor.test.tsx` | Modify (범위고지 단언 갱신 T3, 사워도우 비활성 테스트 제거 T10) | 3, 10 |
| `components/bread-doctor/symptom-checklist.tsx` (+`.test.tsx`) | Modify (빵별 동의어 주입 버그 수정) | 2, 3 |
| `config/bread-doctor.ts` | Modify (25종 + category) | 10 |
| `components/bread-doctor/bread-type-picker.tsx` (+`.test.tsx`) | Modify (그룹 + 검색) | 10 |
| `e2e/bread-doctor.spec.ts` | Modify (범위고지 리터럴 갱신 + 비-식빵 흐름) | 11 |
| (v3) `artifacts/bread-doctor/matrices/_taxonomy.md` | Modify (8개 신규 카테고리·접두사 등록) | 12 |
| (v3) `artifacts/bread-doctor/matrices/{financier,brownie,tart,macaron,bouchee,chiffon-cake,quick-muffin,choux}.md` | New | 12 |
| (v3) `types/bread-doctor.ts` | Modify (`BreadCategory.domain`) | 13 |
| (v3) `config/bread-doctor.ts` | Modify (8개 카테고리 + 8개 품목 등록, 데이터 Task와 짝지어) | 14, 15 |
| (v3) `lib/bread-doctor/knowledge/{financier,brownie,tart,macaron,bouchee,chiffon-cake,quick-muffin,choux}.ts` | New | 14, 15 |
| (v3) `lib/bread-doctor/knowledge-base.ts` (+`.test.ts`) | Modify (8종 등록) | 14, 15 |
| (v3) `components/bread-doctor/bread-doctor.tsx` (+`.test.tsx`) | Modify ("다시 고르기" 문구, 아이콘) | 13 |
| (v3) `components/bread-doctor/result-cards.tsx` (+`.test.tsx`) | Modify ("다시 고르기" 문구) | 13 |
| (v3) `components/bread-doctor/bread-type-picker.tsx` (+`.test.tsx`) | Modify (품목 카피, 도메인 아이콘) | 13 |
| (v3) `app/layout.tsx` | Modify (메타 설명 일반화) | 13 |
| (v3) `e2e/bread-doctor.spec.ts` | Modify (면책 고지 리터럴 갱신 + 빵↔제과류 교차 흐름) | 16 |

---

## Tasks

### Task 1: 정본 코드 레지스트리 + 충돌 검사

- **담당 시나리오**: (기반 작업 — 불변 규칙 "빵 경계 격리"의 데이터 전제)
- **크기**: S (core 모듈 + 테스트)
- **의존성**: None (**고위험·fail-fast — 25개 매트릭스의 코드가 병합 가능한지 여기서 증명**)
- **참조**:
  - matrices/_taxonomy.md (CORE 원인·증상 id, 접두사 규칙)
  - matrices/*.md 25개 (각 파일의 원인·증상 코드 표)
- **구현 대상**:
  - `types/bread-doctor.ts` — `CanonicalCode` 추가
  - `lib/bread-doctor/knowledge/_core.ts` — CORE 9원인·10증상 정본 id·라벨 + 25종에서 등장하는 전체 코드의 `id → label` 레지스트리
  - `lib/bread-doctor/knowledge/_core.test.ts`
- **수용 기준**:
  - [x] 25개 매트릭스에 등장하는 모든 원인·증상 id를 수집했을 때, **한 id가 서로 다른 의미(라벨)로 두 번 정의되지 않는다** (충돌 0건)
  - [x] 배치-간 공유 코드(`flat-griddle-too-hot`/`flat-griddle-too-cool`·`flat-uneven-thickness`)가 공유 빵들에서 동일 의미로 매핑된다
  - [x] CORE 9원인·10증상 id가 v1 `knowledge-base.ts`의 id와 정확히 일치한다 (식빵 회귀 전제)
- **검증**: `bun run test -- _core`
- **비고(리뷰 반영)**: 레지스트리는 매트릭스 md에서 손으로 전사하므로, 테스트는 레지스트리 내부 자기정합성만 검증하고 전사 오류는 자동으로 못 잡는다. Task 4–9에서 각 빵 TS 파일이 이 레지스트리 id를 재사용하도록 강제해 사후 교차검증한다.

### Task 2: KB를 빵ID별 구조로 재구조화 — 식빵 이관 + 소비자 마이그레이션 (회귀 가드)

- **담당 시나리오**: 시나리오 1~7 (식빵 회귀 — 동작 불변 증명)
- **크기**: M (types + white-loaf 데이터 + 인덱스 + scoring/search + **소비자 3파일**)
- **의존성**: Task 1
- **참조**:
  - next-best-practices (데이터 모듈은 client 경계 밖 순수 모듈)
  - hooks/use-diagnosis.ts:5,45 · components/bread-doctor/symptom-checklist.tsx:40 (전역 상수 import·미주입 호출부)
- **구현 대상**:
  - `types/bread-doctor.ts` — `BreadKnowledge` 추가
  - `lib/bread-doctor/knowledge/white-loaf.ts` — v1의 SYMPTOMS/CAUSES/ASSOCIATIONS/DISCRIMINATOR_QUESTIONS/SYNONYMS를 **값 변경 없이** 이관
  - `lib/bread-doctor/knowledge-base.ts` — `BREAD_KNOWLEDGE: Record<string, BreadKnowledge>` 집계 + `getBreadKnowledge(id)` 조회
  - `lib/bread-doctor/scoring.ts` · `search.ts` — 전역 상수 기본 인자 제거(호출부가 명시 주입); 로직 불변
  - **소비자 마이그레이션(원자성 확보)**: `hooks/use-diagnosis.ts`·`components/bread-doctor/symptom-checklist.tsx`가 새 모듈 형태에 맞게 컴파일되도록 배선(동작은 여전히 식빵 고정 — `getBreadKnowledge("white-loaf")` 조회). 이렇게 해야 이 Task의 build/test 체크포인트가 그 자체로 통과 가능
  - 테스트 갱신: `knowledge-base.test.ts`(빵별 정합성), `scoring.test.ts`·`search.test.ts`(식빵 KB 명시 주입, 기대값 불변)
- **수용 기준**:
  - [x] `getBreadKnowledge("white-loaf")`의 증상·원인·매트릭스가 v1과 동일하다
  - [x] 기존 `scoring.test.ts`의 조합 A/B/C 기대 1순위(발효 부족·과발효·오븐 고온)가 식빵 KB 주입으로 그대로 통과한다
  - [x] 모든 빵의 `associations`가 해당 빵의 원인·증상 id만 참조한다 (교차 참조 0건)
  - [x] 소비자 3파일이 새 모듈 형태로 컴파일되고 식빵 UI 동작이 v1과 동일하다 (`bread-doctor.test.tsx`·`symptom-checklist.test.tsx` 기존 케이스 green)
  - [x] `bun run build` 성공 (import 깨짐 없음)
- **검증**: `bun run test` (전체 — 회귀 가드) · `bun run build`

---

### Checkpoint: Tasks 1-2 이후
- [x] 모든 테스트 통과: `bun run test`
- [x] 빌드 성공: `bun run build`
- [x] 식빵 경로가 v1과 완전히 동일하게 동작한다 (회귀 가드 green)

---

### Task 3: 선택 빵 배선 — 훅·컨테이너가 빵별 KB를 주입 (사워도우 예시 포함)

- **담당 시나리오**: Scenario 0-A (full), Scenario 0-C (full)
- **크기**: M (훅 + 컨테이너 + 체크리스트 동의어 주입 + 사워도우 데이터 + 테스트)
- **의존성**: Task 2. (사워도우 1종을 함께 넣어 "빵마다 세트가 다르다"·격리를 실증)
- **참조**:
  - vercel-react-best-practices (선택 빵 파생 데이터 렌더 중 계산)
  - matrices/sourdough.md (증상·원인·판별 질문·동의어)
- **구현 대상**:
  - `lib/bread-doctor/knowledge/sourdough.ts` (+ 인덱스 등록)
  - `hooks/use-diagnosis.ts` — `selectedBreadId` 보존; 선택 빵의 `symptoms/synonyms/causes/associations/questions` 파생; `diagnose`·`filterSymptoms`에 주입; `changeBread()`(피커로 복귀 + 증상·결과 초기화)
  - `components/bread-doctor/bread-doctor.tsx` — `SCOPE_NOTICE` 동적화(선택 빵 이름), "빵 다시 고르기" 액션을 **`symptoms` 스텝과 `result` 스텝 양쪽에** 렌더(wireframe `#screen-1`·`#screen-4` 모두 반영)
  - `components/bread-doctor/symptom-checklist.tsx` — `synonyms` prop 받아 `filterSymptoms(query, symptoms, synonyms)`로 주입
  - `hooks/use-diagnosis.test.ts`(신규), `bread-doctor.test.tsx`(**범위 고지 단언을 리터럴 "기본 이스트 식빵 기준" → 선택 빵 동적 문구로 갱신**, `test.tsx:30`), `symptom-checklist.test.tsx`(동의어 주입)
- **수용 기준**:
  - [x] 훅에 `selectBread("sourdough")` → 노출 `symptoms`가 사워도우 증상이고 식빵 전용 증상이 없다
  - [x] `selectBread("white-loaf")` → `symptoms`가 식빵 세트다 (사워도우 증상 미포함)
  - [x] 사워도우로 진단 → 결과 원인이 사워도우 원인 세트에서만 나온다 (식빵 원인 미혼입)
  - [x] 진단·결과 화면 범위 고지가 "사워도우 기준"으로 표시된다 (불변: 범위 고지)
  - [x] **증상 선택 화면(진단하기 전)**에서 "빵 다시 고르기" → 피커 스텝으로 돌아가고, 선택했던 증상이 남지 않는다 (초기화)
  - [x] **결과 화면**에서 "빵 다시 고르기" → 피커 스텝으로 돌아가고, 다른 빵 선택 시 이전 증상 선택·결과가 남지 않는다 (초기화)
  - [x] 사워도우 동의어로 증상 검색이 동작한다 (식빵 동의어가 아니라 사워도우 사전)
- **검증**: `bun run test -- "use-diagnosis|symptom-checklist|bread-doctor"`
- **비고**: 이 시점 `config`는 아직 v1 4종(사워도우=coming-soon)이라 피커 UI로 사워도우를 클릭할 수 없다. 사워도우 선택은 훅/컨테이너 직접 호출로 검증하고, 피커를 통한 비-식빵 선택은 Task 10·11에서 검증한다.

---

### Checkpoint: Task 3 이후
- [x] 모든 테스트 통과: `bun run test`
- [x] 빌드 성공: `bun run build`
- [x] 식빵·사워도우 2종으로 "빵마다 다른 증상·원인 세트 + 동적 범위 고지 + 빵 다시 고르기"가 동작

---

> **Task 4–9: 나머지 23종 KB 데이터 인코딩.** 각 Task는 담당 빵의 `knowledge/<id>.ts`를 작성(인덱스 등록)하고, **그 빵 매트릭스의 대표 PEAKED 조합 → 기대 1순위 원인**을 단위 테스트로 고정한다. 순수 데이터 추가라 회귀 위험이 낮다. 빵당 파일 1개로 리뷰 단위를 작게 유지(Task당 ≤5종). 각 파일은 Task 1 레지스트리의 id를 재사용해 전사 오류를 사후 교차검증한다.

### Task 4: 데이터 — 린도우 4종 (baguette·ciabatta·focaccia·pain-de-campagne)

- **담당 시나리오**: Scenario 0-A를 이 4종으로 확장 (각 매트릭스 결론의 PEAKED 조합)
- **크기**: M (빵 파일 4 + 테스트 1)
- **의존성**: Task 3 (배선). CORE 재사용 비중 최대라 데이터 Task 중 가장 안전 → 먼저
- **참조**: matrices/baguette.md · ciabatta.md · focaccia.md · pain-de-campagne.md
- **구현 대상**: `knowledge/{baguette,ciabatta,focaccia,pain-de-campagne}.ts` (+ 인덱스), `knowledge/lean-doughs.test.ts`
- **수용 기준**:
  - [x] 각 빵의 매트릭스 "결론" 대표 PEAKED 조합 → 기대 1순위 원인이 `diagnose`로 재현된다 (빵당 최소 1건)
  - [x] 4종 각각 `associations`가 자기 빵 원인·증상만 참조한다 (Task 2 정합성 검사 통과)
  - [x] 4종의 모든 코드 id가 Task 1 레지스트리에 존재한다 (전사 교차검증)
- **검증**: `bun run test -- lean-doughs`

### Task 5: 데이터 — 호밀 + 라미네이션 4종 (rye-bread·pumpernickel·croissant·danish-pastry)

- **담당 시나리오**: 위 4종의 PEAKED 조합 + Scenario 0-A 예시(크루아상 → `lam-*` 증상 존재, 식빵 전용 증상 부재)
- **크기**: M (빵 파일 4 + 테스트 1)
- **의존성**: Task 3
- **참조**: matrices/rye-bread.md · pumpernickel.md · croissant.md · danish-pastry.md
- **구현 대상**: `knowledge/{rye-bread,pumpernickel,croissant,danish-pastry}.ts` (+ 인덱스), `knowledge/rye-laminated.test.ts`
- **수용 기준**:
  - [x] 각 빵 대표 PEAKED 조합 → 기대 1순위 원인 재현 (예: 크루아상 leak+flat+greasy → 버터 녹음)
  - [x] **크루아상 KB의 증상 세트에 `lam-*`가 포함되고 식빵 전용 증상은 없다** (Scenario 0-A 정확 예시)
  - [x] `lam-`·`starter-`·`rye-` 신규 코드가 Task 1 레지스트리와 일치한다
- **검증**: `bun run test -- rye-laminated`

### Task 6: 데이터 — enriched 4종 (brioche·panettone·milk-bread·anpan)

- **담당 시나리오**: 위 4종의 PEAKED 조합
- **크기**: M (빵 파일 4 + 테스트 1)
- **의존성**: Task 3
- **참조**: matrices/brioche.md · panettone.md · milk-bread.md · anpan.md
- **구현 대상**: `knowledge/{brioche,panettone,milk-bread,anpan}.ts` (+ 인덱스), `knowledge/enriched.test.ts`
- **수용 기준**:
  - [x] 각 빵 대표 PEAKED 조합 → 기대 1순위 원인 재현 (예: 단팥빵 충전물 조합 → filling-leak)
  - [x] `enr-` 신규 코드가 4종에 걸쳐 동일 의미로 재사용된다 (레지스트리 일치)
- **검증**: `bun run test -- enriched`

---

### Checkpoint: Tasks 4-6 이후
- [x] 모든 테스트 통과: `bun run test`
- [x] 빌드 성공: `bun run build`
- [x] KB에 12종(식빵+사워도우+린도우4+호밀·라미4+enriched... 부분) 등록·진단 가능

---

### Task 7: 데이터 — 화학팽창 + 보일링 5종 (scone·soda-bread·cornbread·bagel·pretzel)

- **담당 시나리오**: 위 5종의 PEAKED 조합
- **크기**: M (빵 파일 5 + 테스트 1)
- **의존성**: Task 3
- **참조**: matrices/scone.md · soda-bread.md · cornbread.md · bagel.md · pretzel.md
- **구현 대상**: `knowledge/{scone,soda-bread,cornbread,bagel,pretzel}.ts` (+ 인덱스), `knowledge/chemical-boiled.test.ts`
- **수용 기준**:
  - [x] 각 빵 대표 PEAKED 조합 → 기대 1순위 원인 재현 (예: 베이글 boil-tough-wrinkled+gummy → over-boiled)
  - [x] `quick-`(발효 무관)·`boil-` 신규 코드가 레지스트리와 일치한다
- **검증**: `bun run test -- chemical-boiled`

### Task 8: 데이터 — 발효 플랫브레드 4종 (pizza-dough·naan·pita·english-muffin)

- **담당 시나리오**: 위 4종의 PEAKED 조합
- **크기**: M (빵 파일 4 + 테스트 1)
- **의존성**: Task 3
- **참조**: matrices/pizza-dough.md · naan.md · pita.md · english-muffin.md
- **구현 대상**: `knowledge/{pizza-dough,naan,pita,english-muffin}.ts` (+ 인덱스), `knowledge/leavened-flat.test.ts`
- **수용 기준**:
  - [x] 각 빵 대표 PEAKED 조합 → 기대 1순위 원인 재현
  - [x] 난↔잉글리시머핀 공유 그리들 코드(`flat-griddle-too-*`)가 두 빵에서 동일 의미로 동작한다
- **검증**: `bun run test -- leavened-flat`

### Task 9: 데이터 — 무발효 플랫브레드 2종 (tortilla·lavash)

- **담당 시나리오**: 위 2종의 PEAKED 조합
- **크기**: S (빵 파일 2 + 테스트 1)
- **의존성**: Task 3
- **참조**: matrices/tortilla.md · lavash.md
- **구현 대상**: `knowledge/{tortilla,lavash}.ts` (+ 인덱스), `knowledge/unleavened-flat.test.ts`
- **수용 기준**:
  - [x] 각 빵 대표 PEAKED 조합 → 기대 1순위 원인 재현
  - [x] 발효 CORE 코드(yeast/underproof/overproof)가 두 빵 KB에 포함되지 않는다 (무발효 도메인 반영)
- **검증**: `bun run test -- unleavened-flat`

---

### Checkpoint: Tasks 7-9 이후
- [x] 모든 테스트 통과: `bun run test`
- [x] `BREAD_KNOWLEDGE`에 25종 전부 등록됨
- [x] `knowledge-base.test.ts` 빵별 정합성 검사가 25종 모두 통과

---

### Task 10: 빵 피커 — 25종 카테고리 그룹 + 빵 검색

- **담당 시나리오**: Scenario 0 (full), Scenario 0-B (full)
- **크기**: M (config 25종 + picker 재구성 + 검색 + 테스트)
- **의존성**: Tasks 4–9 (25종 KB 존재 — 미정의 빵 선택 창 제거)
- **참조**:
  - shadcn (Card 그리드, InputGroup 검색 — symptom-checklist 패턴 재사용, Empty 빈 결과)
  - web-design-guidelines (카테고리 시맨틱 헤딩·리스트, 검색 라벨·aria)
  - wireframe.html `#screen-0` (기존 단일 그리드 — 카테고리 섹션 + 검색으로 확장)
- **구현 대상**:
  - `config/bread-doctor.ts` — 25종 `BreadType`(+`category`, 전부 `available`), `BREAD_CATEGORIES`(순서·라벨)
  - `types/bread-doctor.ts` — `BreadCategory`, `BreadType.category`
  - `components/bread-doctor/bread-type-picker.tsx` — 카테고리 섹션 헤더 + 카드 그리드, 빵 이름 검색 Input, no-match Empty
  - `components/bread-doctor/bread-type-picker.test.tsx`
  - `components/bread-doctor/bread-doctor.test.tsx` — **사워도우 "준비 중 비활성" 테스트(`test.tsx:17-25`)를 제거/재작성**(이제 선택 가능)
- **수용 기준**:
  - [x] 피커에 25개 빵 카드가 카테고리 그룹(예: "사워도우·호밀") 헤더 아래 묶여 표시된다
  - [x] "준비 중"/비활성 카드가 없다 (모든 카드 선택 가능)
  - [x] 진입 시 어떤 빵도 선택되지 않았고, 빵을 고르기 전에는 증상 화면으로 갈 수 없다 (Scenario 0 초기 상태)
  - [x] "치아" 입력 → "치아바타" 카드만 남고 무관한 빵은 사라진다
  - [x] 매칭 없는 검색어 → "일치하는 빵 없음" 안내 표시, 검색어 지우면 25종 복원
  - [x] 임의 빵 카드 클릭 → 그 빵의 증상 체크리스트로 이동한다
- **검증**: `bun run test -- "bread-type-picker|bread-doctor"` · `bun run build`

### Task 11: 불변 규칙 + 비-식빵 전체 흐름 E2E

- **담당 시나리오**: 불변 규칙 6개 + Scenario 0→0-A→0-C 통합(비-식빵)
- **크기**: S (E2E 스펙 + 미세 수정)
- **의존성**: Task 1~10
- **참조**: playwright.config.ts (baseURL `/`, webServer), e2e/bread-doctor.spec.ts (v1 식빵 흐름)
- **구현 대상**:
  - `e2e/bread-doctor.spec.ts` — **범위 고지 리터럴 단언(`spec.ts:30` "기본 이스트 식빵 기준")을 선택 빵 동적 문구로 갱신** + 비-식빵 시나리오 추가
- **수용 기준**:
  - [x] `/` → 카테고리에서 비-식빵(예: 크루아상) 선택 → 그 빵 증상 → 진단 → 결과 1순위 카드가 뜬다
  - [x] 결과·진단 화면에 "크루아상 기준" 범위 고지와 면책 고지가 보인다 (불변: 범위·면책)
  - [x] 결과 카드에 크루아상 원인만 있고 다른 빵 원인 문구가 없다 (불변: 빵 경계 격리)
  - [x] 전체 흐름 어느 화면에도 원시 점수·퍼센트 숫자가 없다 (불변: 점수 비노출)
  - [x] 진단 과정에서 외부 호스트 네트워크 요청 0건 (불변: 클라이언트 완결)
  - [x] 기존 식빵 E2E 흐름(리터럴 갱신 후)이 그대로 통과한다 (불변: 식빵 회귀)
- **검증**: `bun run test:e2e -- bread-doctor` · 증거 `artifacts/bread-doctor/evidence/task-11.png`

---

### Checkpoint: 최종
- [x] 모든 테스트 통과: `bun run test`
- [x] E2E 통과: `bun run test:e2e`
- [x] 빌드 성공: `bun run build`
- [x] spec 시나리오 0·0-A·0-B·0-C + 1~7(식빵 회귀) + 불변 규칙 6개가 모두 검증됨

---

## v3 — 제과류 파일럿 8종

### Task 12: 파일럿 8종 매트릭스 작성 + 코드 네임스페이스 확정

- **담당 시나리오**: (기반 작업 — spec v3 의존성 "파일럿 8종 매트릭스 미작성"의 선행 요건)
- **크기**: M (매트릭스 문서 8개 + 택소노미 갱신, 코드 없음)
- **의존성**: None (**고위험·fail-fast — 8종의 판별력·코드 네임스페이스가 성립하는지 여기서 먼저 증명**)
- **참조**:
  - matrices/_taxonomy.md (기존 형식·CORE 재사용 규칙 그대로 확장)
  - matrices/croissant.md (매트릭스 문서 형식 예시: 원인/증상/매트릭스/판별력 검증/결론/판별 질문/동의어/출처 각주)
  - `.claude/rules/bread-kb-code-namespace.md` (id 재사용·크로스 네임스페이스 충돌 검사 규율 — tortilla/lavash 사고 재발 방지)
  - WebSearch/WebFetch — 품목별 실패 원인의 실제 출처 조사, 확인 불가하면 "출처 미확인 — 일반 상식"으로 표기(v2 관행과 동일)
- **구현 대상**:
  - `matrices/_taxonomy.md` — 8개 신규 카테고리·접두사(`fin-`휘낭시에·`brn-`브라우니·`tart-`타르트·`mac-`마카롱·`spg-`붓세·`chif-`시폰케이크·`qmuf-`머핀(퀵브레드)·`choux-`슈) 등록
  - `matrices/{financier,brownie,tart,macaron,bouchee,chiffon-cake,quick-muffin,choux}.md` — 각 품목 원인·증상·매트릭스·판별력 검증(PEAKED 판정)·판별 질문 제안·동의어 초안·출처 각주
- **수용 기준**:
  - [x] 8개 매트릭스 각각 최소 1개 조합이 PEAKED로 판정된다 (2점 이상 차이로 1위가 갈림, 문서에 명시)
  - [x] 실제 의미가 CORE와 같은 원인·증상(예: 브라우니·타르트·슈의 `oven-too-hot`/`oven-too-cool`)은 CORE id를 재사용하고, 품목 고유 실패만 신규 접두사 코드로 추가했다
  - [x] 8개 매트릭스의 신규 코드 id를 기존 25종 매트릭스의 원인·증상 id 전체와 대조했을 때, 같은 문자열이 다른 의미(원인↔증상 교차 포함)로 재사용된 경우가 0건이다 (`matrices/_taxonomy.md` 크로스 네임스페이스 충돌 검사 기록 참고)
  - [x] "머핀(퀵브레드)" 매트릭스의 코드가 `qmuf-` 접두사만 쓰고 기존 빵의 `quick-` 접두사(스콘/소다빵/콘브레드)와 겹치지 않는다
- **검증**: Human review — 작성자가 매트릭스 문서 하단에 PEAKED 판정 근거를 남기고, 다음 대조로 크로스 네임스페이스 충돌을 확인한 기록을 남긴다: 기존 25종 매트릭스(`matrices/*.md`, `_taxonomy.md` 제외)에서 코드 id를 모두 추출해 신규 8종 코드와 문자열 대조.

---

### Task 13: UI 카피 일반화 + 도메인 아이콘 (품목 노출 전 회귀 가드)

- **담당 시나리오**: (spec v3 전반의 "베이커리 품목" 일반화 — 아직 신규 품목은 노출 전이라 기존 25종 경로의 회귀 가드)
- **크기**: M (types 1 + components 3 + layout 1 + 테스트 갱신)
- **의존성**: None(Task 12과 독립적으로 병행 가능). Task 14·15(데이터)보다 **반드시 먼저** — 새 품목이 노출되는 시점엔 이미 카피가 일반화돼 있어야 "빵 다시 고르기" 같은 문구가 제과류 화면에 뜨는 창이 없음
- **참조**:
  - spec.md v3 불변 규칙(품목 경계 격리, 범위 고지) · 시나리오 0/0-C 문구
  - `components/bread-doctor/bread-doctor.tsx:48`·`result-cards.tsx:89` (리터럴 "빵 다시 고르기")
  - `components/bread-doctor/result-cards.tsx:41` (리터럴 "일반적 제빵 상식 기반" — spec v3 면책 고지 갱신 반영)
  - `components/bread-doctor/bread-type-picker.tsx:46,58` (리터럴 "빵 이름으로 검색"·"일치하는 빵이 없어요")
  - `app/layout.tsx:11` (메타 설명 "식빵 실패 원인")
- **구현 대상**:
  - `types/bread-doctor.ts` — `BreadCategory.domain: "bread" | "pastry"` 추가
  - `config/bread-doctor.ts` — 기존 8개 카테고리에 `domain: "bread"` 부여 (신규 카테고리·품목은 Task 14/15에서 추가)
  - `components/bread-doctor/bread-doctor.tsx` — "빵 다시 고르기" → "다시 고르기", `WheatIcon` → 중립 아이콘(`LayoutGridIcon`)
  - `components/bread-doctor/result-cards.tsx` — "다시 고르기" 문구·아이콘 동일 적용 + 면책 고지 "일반적 제빵 상식 기반" → "일반적 베이킹 상식 기반"
  - `components/bread-doctor/bread-type-picker.tsx` — 검색 placeholder "베이커리 품목 이름으로 검색 (예: 치아바타)", 빈 결과 "일치하는 품목이 없어요", 카드 아이콘을 `category.domain`에 따라 `WheatIcon`(bread)/`CookieIcon`(pastry)으로 분기
  - `app/layout.tsx` — 메타 설명을 "증상으로 빵·제과류 실패 원인을 진단하는 도구"로 일반화
  - 테스트 갱신: `bread-doctor.test.tsx`·`result-cards.test.tsx`(버튼 이름 정규식 `/빵 다시 고르기/` → `/다시 고르기/`, 면책 고지 문구 단언 갱신)·`bread-type-picker.test.tsx`(placeholder·빈 상태 문구)
- **수용 기준**:
  - [ ] 증상 화면·결과 화면의 "다시 고르기" 버튼이 새 문구로 렌더되고, 클릭 시 기존과 동일하게 피커로 복귀하며 증상·결과가 초기화된다 (Scenario 0-C 동작 불변)
  - [ ] 결과 화면의 면책 고지가 "일반적 베이킹 상식 기반의 가능성 있는 원인"으로 표시된다
  - [ ] 피커 검색 placeholder와 빈 결과 안내가 "품목" 문구로 표시된다
  - [ ] 기존 25종 전체 흐름(피커→진단→결과)이 문구 변경 후에도 동일하게 동작한다 (회귀)
  - [ ] `bun run build` 성공
- **검증**: `bun run test -- "bread-doctor|result-cards|bread-type-picker"` · `bun run build`
- **비고(wireframe 대비 단순화)**: wireframe은 제과류 8개 카테고리마다 다른 아이콘(cookie/cake/layers/cloud/egg/circle-dot/wind)을 썼지만, 이는 와이어프레임 단계의 시각적 다양성 예시였을 뿐 spec 요구사항은 아니다. 구현은 **도메인 2단계**(bread=`WheatIcon`, pastry=`CookieIcon`)로 단순화한다 — 카테고리마다 아이콘을 관리하면 신규 카테고리 추가 시 아이콘 매핑도 매번 늘어나는 유지비가 생기기 때문. 더 세분화된 아이콘이 필요하면 이후 별도로 다룬다.

---

### Checkpoint: Tasks 12-13 이후
- [ ] 모든 테스트 통과: `bun run test`
- [ ] 빌드 성공: `bun run build`
- [ ] 기존 25종 경로가 새 카피로 완전히 동일하게 동작 (회귀 가드 green), 매트릭스 8종 문서 완성

---

### Task 14: 데이터 — 파일럿 A: 휘낭시에·브라우니·타르트·마카롱 (config 등록 포함)

- **담당 시나리오**: Scenario 0 (부분 — 4종 추가), Scenario 0-A' (full, 마카롱 예시)
- **크기**: M (품목 파일 4 + config 갱신 + 테스트 1)
- **의존성**: Task 12(매트릭스), Task 13(카피 일반화 완료 후 노출 — 순서 원칙과 동일하게 데이터가 노출 전 배선이 준비돼 있어야 함)
- **참조**: matrices/{financier,brownie,tart,macaron}.md
- **구현 대상**:
  - `config/bread-doctor.ts` — `BREAD_CATEGORIES`에 4개 카테고리(유화 배터/멜팅버터·크리밍/러빙/머랭 거품, `domain: "pastry"`) + `BREAD_TYPES`에 4개 품목 추가
  - `lib/bread-doctor/knowledge/{financier,brownie,tart,macaron}.ts` (+ `knowledge-base.ts` 인덱스 등록)
  - `knowledge/pastry-pilot-a.test.ts`
- **수용 기준**:
  - [ ] 각 품목의 매트릭스 대표 PEAKED 조합 → `diagnose`로 기대 1순위 원인이 재현된다 (품목당 최소 1건)
  - [ ] 마카롱으로 진단 → 결과 원인이 마카롱 원인 세트에서만 나온다 (다른 품목 원인 미혼입, 품목 경계 격리)
  - [ ] 4종 모두 `associations`가 자기 품목 원인·증상만 참조한다 (`knowledge-base.test.ts` 정합성 통과)
  - [ ] 피커에 4개 신규 카테고리·카드가 표시되고, 선택 시 그 품목의 증상 체크리스트로 이동한다
- **검증**: `bun run test -- "pastry-pilot-a|knowledge-base"` · `bun run build`

### Task 15: 데이터 — 파일럿 B: 붓세·시폰케이크·머핀(퀵브레드)·슈 (이름 충돌 검증 포함)

- **담당 시나리오**: Scenario 0 (나머지 4종), Scenario 0-E (full)
- **크기**: M (품목 파일 4 + config 갱신 + 테스트 1)
- **의존성**: Task 12, 13
- **참조**: matrices/{bouchee,chiffon-cake,quick-muffin,choux}.md
- **구현 대상**:
  - `config/bread-doctor.ts` — 나머지 4개 카테고리(전란 거품 스펀지/분리교반/화학팽창 머핀/스팀 팽창, `domain: "pastry"`) + 4개 품목(예: id `quick-muffin`, name "머핀(퀵브레드)") 추가 — 이 시점에 **33종·16카테고리 완성**
  - `lib/bread-doctor/knowledge/{bouchee,chiffon-cake,quick-muffin,choux}.ts` (+ 인덱스 등록)
  - `knowledge/pastry-pilot-b.test.ts`
- **수용 기준**:
  - [ ] 각 품목 대표 PEAKED 조합 → 기대 1순위 원인 재현
  - [ ] "머핀" 검색 → "잉글리시 머핀"과 "머핀(퀵브레드)" 카드가 모두 나타나고 서로 다른 카테고리 그룹 아래 위치한다 (Scenario 0-E)
  - [ ] "잉글리시 머핀" 선택 → 기존 이스트 반죽 증상 세트가 그대로 표시된다 (회귀 없음)
  - [ ] "머핀(퀵브레드)" 선택 → 신규 화학팽창 머핀 증상 세트가 표시된다
  - [ ] `qmuf-` 코드가 기존 `quick-` 코드와 문자열이 겹치지 않는다 (Task 12 레지스트리 대조 재확인)
- **검증**: `bun run test -- "pastry-pilot-b|knowledge-base|bread-type-picker"` · `bun run build`
- **비고(wireframe 대비 단순화)**: wireframe의 0-E 데모는 카드 안에 "발효 플랫브레드 · 빵"/"화학팽창 머핀 · 제과류" 서브라벨을 넣었지만, 실제 `bread-type-picker.tsx`는 검색 결과도 기존처럼 **카테고리 그룹 헤더 아래로 묶여 렌더**되므로(두 카드가 서로 다른 헤더 아래 별도 그룹으로 나타남) 카드 내 서브라벨 없이도 spec 0-E 성공 기준(서로 다른 카테고리 그룹 아래 위치)을 그대로 만족한다 — 새 UI 요소를 추가하지 않는다.

---

### Checkpoint: Tasks 14-15 이후
- [ ] 모든 테스트 통과: `bun run test`
- [ ] 빌드 성공: `bun run build`
- [ ] `BREAD_KNOWLEDGE`·`BREAD_TYPES`·`BREAD_CATEGORIES`에 33종·16카테고리 전부 등록, 피커에 노출됨

---

### Task 16: 불변 규칙 + 빵↔제과류 교차 흐름 E2E

- **담당 시나리오**: 불변 규칙 전체(품목 경계 격리, 판별 질문 캡 예외 없음 포함) + Scenario 0-C 교차 전환 통합
- **크기**: S (E2E 스펙 추가 + 미세 수정)
- **의존성**: Task 1~15 (전체)
- **참조**: e2e/bread-doctor.spec.ts (기존 식빵·크루아상 흐름 — 두 테스트 모두 리터럴 "일반적 제빵 상식 기반" 단언 포함, Task 13에서 문구가 바뀌었으므로 갱신 필요)
- **구현 대상**: `e2e/bread-doctor.spec.ts` — 기존 두 테스트의 면책 고지 리터럴을 "일반적 베이킹 상식 기반"으로 갱신 + **식빵 선택→진단→결과→"다시 고르기"→마카롱 선택**(빵→제과류로 도메인 경계를 넘는 재선택) 흐름 추가
- **수용 기준**:
  - [ ] 기존 식빵·크루아상 E2E가 갱신된 면책 고지 문구("일반적 베이킹 상식 기반")로 통과한다
  - [ ] `/` → 식빵 선택 → 증상 선택 → 진단 → 결과에 식빵 원인만 표시된다
  - [ ] 결과 화면에서 "다시 고르기" → **마카롱**(제과류) 선택 → 이전 식빵 증상·결과가 남지 않고 마카롱 증상 세트로 전환된다 (Scenario 0-C, **빵→제과류로 도메인 경계를 넘는** 재선택)
  - [ ] 마카롱으로 진단 → 결과에 마카롱 원인만 표시된다 (식빵 원인 미혼입, 품목 경계 격리가 도메인을 넘어도 유지됨)
  - [ ] 전체 흐름 어디에도 원시 점수·퍼센트 숫자가 없다 (불변: 점수 비노출)
  - [ ] 외부 호스트 네트워크 요청 0건 (불변: 클라이언트 완결)
- **검증**: `bun run test:e2e -- bread-doctor` · 증거 `artifacts/bread-doctor/evidence/task-16.png`

---

### Checkpoint: 최종 (v3)
- [ ] 모든 테스트 통과: `bun run test`
- [ ] E2E 통과: `bun run test:e2e`
- [ ] 빌드 성공: `bun run build`
- [ ] spec v3의 시나리오 0·0-A'·0-B·0-C·0-E 및 불변 규칙 전체(품목 경계 격리, 판별 질문 캡 예외 없음 포함)가 검증됨

---

## 불변 규칙 커버리지

| 불변 규칙 | 커버 Task |
|---|---|
| 면책 고지 항상 표시 | 2(회귀), 11(E2E), (v3) 13("베이킹 상식" 문구 갱신), 16(E2E 리터럴 재확인) |
| 범위 고지 = 선택 품목 이름 | 3(동적화 + `bread-doctor.test.tsx` 단언 갱신), 11(E2E 리터럴 갱신) |
| 품목 경계 격리 (구 "빵 경계 격리") | 1(레지스트리), 2(정합성), 3(배선), 4–9(빵별 검사), 11, (v3) 12(매트릭스 크로스 네임스페이스), 14·15(품목별 검사), 16(E2E, 빵→제과류 도메인 교차 확인) |
| 점수 비노출 | 2(회귀), 11, (v3) 16(E2E 재확인) |
| 클라이언트 완결 | 11(네트워크 단언), (v3) 16(E2E 재확인) |
| 식빵 회귀 불변 | 2(회귀 가드), 모든 체크포인트, (v3) 13(카피 변경 후 회귀 재확인) |
| (v3) 판별 질문 캡의 예외 없는 적용 | 14·15(마카롱 등 파일럿 품목도 기존 `MAX_DISCRIMINATOR_QUESTIONS`/`PROXIMITY_THRESHOLD` 그대로 사용 — 품목별 예외 코드를 추가하지 않는 것으로 검증) |

## 미결정 항목

- ~~wireframe `#screen-4`의 "빵 다시 고르기" 버튼~~ **해결됨**: wireframe에 반영 완료 — "증상 바꿔 다시 진단" 옆에 `onclick="show(0)"` 버튼 추가, 클릭 시 빵 선택 화면 전환 Browser MCP로 검증.
- ~~카테고리 그룹 UI 최종 형태~~ **해결됨**: `#screen-0`을 8개 카테고리 섹션 헤더 + 카드 그리드(25종) + 빵 검색으로 갱신, Mobile/Desktop 양쪽 뷰포트 검증 완료. `#screen-1`에 크루아상 예시를 추가해 Scenario 0-A(빵마다 증상 세트가 다름)도 시각적으로 확정.
- **CORE 원인 `why`/`action`의 빵별 편차**: 매트릭스가 빵별로 다른 문구를 씀. 빵 파일에서 각자 기술(정본 레지스트리는 id·라벨만 강제). 문구는 사용자 용어 검증 후 다듬음.
- **동의어 시드 범위**: 각 빵은 매트릭스 초안 동의어를 시드로 시작, 사용자 검증 후 확장(데이터만 추가).
- **인용 출처**: 매트릭스 문서에 각주로 보존, 앱 UI 비노출(spec 범위 외). 가중치 주장의 원문 대조는 미완(토이 범위 — 5개 URL 샘플만 접속·주제 확인).
- **(v3) 파일럿 품목의 최종 표시명**: "타르트" vs "타르트/파이 반죽", "슈" vs "슈(에클레어)" — Task 12 매트릭스 작성 시 확정 (spec.md 미결정 항목과 동일).
- **(v3) 시폰케이크의 카테고리 소속**: "분리교반"으로 독립 유지할지 향후 "전란 거품 스펀지"(붓세)에 합칠지 — 파일럿 8종 검증 후, 나머지 8종(마들렌·티그레·버터바 등, 이번 스펙 밖) 확장 시 재검토.
- **(v3) 나머지 8종(마들렌·티그레·버터바·다쿠아즈·머랭·롤케이크 등) 확장**: 이번 계획의 파일럿(카테고리당 1종)이 "카테고리별 진단축이 실제로 다르다"를 증명한 뒤 별도 계획으로 다룬다 (idea-pastry.md MVP Scope 참고).
