---
category: tooling
applied: discarded
---
## vitest가 Playwright e2e spec을 함께 수집해 실패하던 기존 설정 결함

**상황**: Task 1 체크포인트에서 `bun run test`가 `e2e/smoke.spec.ts`를 열려다 실패. `git stash`로 확인한 결과 내 변경과 무관하게 이미 존재하던 결함(vitest.config.ts의 exclude에 `e2e/**`가 없어 Playwright의 `test()`를 vitest가 그대로 실행하려 함).
**판단**: 근본 원인을 고쳐 `vitest.config.ts`의 exclude에 `e2e/**`를 추가. 우회(해당 파일만 건너뛰는 임시 필터 등)하지 않고 설정 자체를 수정. 이 저장소에서는 영구히 해결됐다.
**다시 마주칠 가능성**: 낮음 — 이미 이 저장소에서 고정됐다. 일회성 설정 버그라 별도 규칙 승격은 불필요.

---
category: task-ordering
applied: discarded
---
## Task 실행 순서: 스코어링 엔진(고위험)을 앱 셸보다 먼저

**상황**: plan.md는 Task 1(앱 셸)·Task 2(엔진)를 "병행 가능"으로 표시. 실행은 순차적이라 순서를 정해야 했다.
**판단**: draft-plan 스킬의 "고위험 Task를 앞에 둔다"(fail-fast) 원칙에 따라 Task 2(순수 함수 스코어링, 매트릭스 동점 처리 등 실수 가능성 높은 로직)를 먼저 구현·검증했다. Task 1은 이미 검증된 엔진 위에 얇게 얹혔다.
**다시 마주칠 가능성**: 낮음 — 이미 draft-plan 스킬 문서에 명시된 Ordering 원칙을 그대로 따른 것이라 새로 승격할 인사이트가 아니다.

---
category: task-ordering
applied: not-yet
---
## KB 데이터(연관 매트릭스·판별 질문·동의어)를 한 파일에서 한 번에 저술

**상황**: plan.md는 `lib/bread-doctor/knowledge-base.ts`를 Task 2(연관 매트릭스)·Task 5(판별 질문)·Task 6(동의어)에 걸쳐 나눠 채우도록 배치했다.
**판단**: 하나의 데이터 파일을 세 커밋에 걸쳐 조각내면 리뷰 시점마다 "이 파일이 왜 또 바뀌나"를 다시 파악해야 한다. Task 2에서 판별 질문·동의어까지 한 번에 다 써두고, Task 5·6은 그 데이터를 소비하는 로직·UI만 추가했다.
**다시 마주칠 가능성**: 중간 — "하나의 데이터 파일이 여러 Task에 걸쳐 있다"는 plan 패턴은 다른 feature에서도 재발할 수 있다. 그때도 "데이터는 한 번에, 로직/UI는 Task별로"가 기본값이 될 만하다.

---
category: spec-ambiguity
applied: rule
---
## wireframe이 spec에 없는 네비게이션(뒤로가기)을 슬쩍 추가했다

**상황**: sketch-wireframe 단계에서 화면 간 이동을 자연스럽게 만들려고 "← 빵 종류" 뒤로가기 버튼을 넣었는데, spec.md의 시나리오 어디에도 이 전환은 없었다. draft-plan의 plan-reviewer가 이 wireframe↔spec 간극을 잡아냈다.
**판단**: 사용자에게 확인 후 MVP 범위에서 제외하고 wireframe에서 버튼을 제거했다. "다시 진단"(Scenario 6)으로 재입력 흐름은 이미 커버되므로 별도 뒤로가기는 불필요한 범위 확장이었다. 사용자 승인을 받아 `.claude/skills/sketch-wireframe/SKILL.md` Principles에 "화면 간 이동 컨트롤은 spec의 시나리오 전환에 대응하는 것만 그린다" 원칙을 즉시 추가했다.
**다시 마주칠 가능성**: 높음 — 여러 화면을 넘나드는 wireframe을 그릴 때, 없는 이동 경로를 "당연히 있어야 할 것 같아서" 추가하는 경향이 있다.

---
category: spec-ambiguity
applied: not-yet
---
## "다시 진단" 시 이전 증상 선택 유지 vs 초기화

**상황**: Task 3~4에서 restart()를 "이전 선택 유지"로 구현했다(사용자가 체크 해제 후 새로 선택하는 편이 자연스럽다고 판단). spec.md는 "증상 선택을 ~로 바꾸고"라고만 해서 유지/초기화 중 무엇을 요구하는지 명시하지 않았다.
**판단**: code-reviewer가 이 설계 때문에 Scenario 6 테스트가 "재클릭으로 우연히 해제되어 통과"하는 취약한 상태임을 지적. 구현을 "초기화"로 바꿔 계약을 명확하게 만들고 테스트도 재작성했다.
**다시 마주칠 가능성**: 중간 — "재시도/재입력" 흐름이 있는 다른 feature에서도 "이전 선택 유지 vs 초기화"는 spec에 명시되지 않기 쉬운 지점이다. 다음엔 wireframe/spec 단계에서 이 질문을 먼저 던질 것.

---
category: code-review
applied: discarded
---
## 판별 질문 체이닝(최대 2개)이 현재 KB로는 도달 불가능한 경로

**상황**: config의 MAX_DISCRIMINATOR_QUESTIONS=2 캡은 실제로는 판별 쌍이 1개(이스트 문제 ↔ 발효 부족)뿐인 MVP KB에서 questionsAskedCount=1에 도달하는 UI 경로가 없다. code-reviewer가 Important로 지적.
**판단**: 체이닝 구현은 지금 존재하지 않는 두 번째 판별 쌍을 가정한 선제적 구현이라 판단해 보류. 대신 config.ts에 왜 지금은 도달 불가능한지, 캡 로직의 단위 테스트가 어떻게 격리 검증하는지 주석으로 명시했다. plan.md의 미결정 항목에도 이미 "확장 시 자연 실증됨"으로 기록되어 있던 의도적 스코프.
**다시 마주칠 가능성**: 낮음 — 두 번째 판별 쌍이 실제로 추가되는 시점에 자연스럽게 재평가된다.

---
category: task-ordering
applied: not-yet
---
## Task 1의 "정본 레지스트리"를 손으로 전사하지 않고 실제 KB에서 파생시킴

**상황**: plan.md Task 1은 `CanonicalCode` 타입 + 25개 매트릭스의 모든 원인·증상 id를 손으로 옮겨 적은 레지스트리 파일을 요구했다. 매트릭스 md 24개의 원인·증상 표 형식(컬럼 순서 — `코드|id|name|why|action|구분` vs `id|name|구분|why|action`)이 파일마다 달라, 자동 파싱은 오탐 위험이 있고 수작업 전사는 Task 4~9에서 같은 데이터를 다시 옮겨 적는 이중 작업이자 오타 시 두 출처가 어긋나는 원인이 된다.
**판단**: `CanonicalCode` 타입과 손으로 만든 레지스트리 파일을 만들지 않고, 대신 (1) `_core.ts`에 CORE 9원인·10증상만 고정 시드로 담고 (2) `findLabelConflicts()` 순수 함수를 만들어 Task 2~9가 `BREAD_KNOWLEDGE`에 실제 데이터를 등록할 때마다 `knowledge-base.test.ts`가 그 실 데이터로 충돌 검사를 수행하도록 했다. 단일 출처(실 KB)만 유지, 손 전사 레지스트리라는 두 번째 출처를 없앴다. plan.md의 "충돌 0건" 수용 기준은 Task 9 체크포인트 시점에 25종 전체로 완전히 검증된다.
**다시 마주칠 가능성**: 중간 — "여러 조각으로 나뉜 원본 문서에서 정본 레지스트리를 손으로 만들라"는 plan 지시는 원본이 비정형(여러 에이전트가 각자 쓴 마크다운)일 때 이중 전사 함정으로 이어지기 쉽다. 다음에도 "검증 로직을 실 데이터가 쌓이는 대로 점진 실행"하는 편이 별도 정적 레지스트리보다 안전한 기본값이다.

---
category: spec-ambiguity
applied: not-yet
---
## taxonomy 작성 시 실제 코드의 원인 id("c1".."c9")를 확인하지 않고 시맨틱 id를 지정함

**상황**: Task 2에서 v1 코드를 확인해 보니 `knowledge-base.ts`의 원인(Cause) id는 실제로 "c1".."c9"였다(증상만 시맨틱 id). 그런데 sketch-wireframe/plan 단계에서 작성한 `_taxonomy.md`는 CORE 원인 id를 `yeast-dead`/`underproof` 등 시맨틱 슬러그로 지정했고, 이걸 그대로 받은 25개 리서치 에이전트 전부가 매트릭스 문서에 시맨틱 id를 썼다. 즉 "실제 코드"와 "새로 쓴 25개 문서" 사이에 애초에 불일치가 있었다 — taxonomy를 코드가 아니라 기억/가정으로 작성한 탓.
**판단**: "c1"류 리터럴을 참조하는 코드가 있는지 grep으로 먼저 확인한 뒤(두 곳 모두 컴포넌트 단위 테스트의 독립적인 mock 데이터였고 실제 KB와 무관함을 확인), white-loaf.ts의 원인 id를 시맨틱 슬러그로 변경해 25개 매트릭스 전부와 맞췄다. 반대로 25개 문서를 "c1..c9"로 되돌리는 것보다 비용이 훨씬 낮았다.
**다시 마주칠 가능성**: 높음 — 여러 산출물(코드·문서)에 걸친 "공통 규약"을 문서화할 때는 실제 소스(코드)를 다시 열어 확인하지 않고 예전 기억으로 규약을 적으면 이런 불일치가 생긴다. 다음에 공통 스키마/네이밍 규약을 문서화할 때는 반드시 실제 소스 파일을 그 자리에서 Read해 확인할 것.

---
category: code-review
applied: discarded
---
## 매트릭스가 "margin 1점, 약하게 peaked"라고 명시한 조합을 테스트 fixture로 쓰면 판별 질문이 튀어나온다

**상황**: Task 7에서 콘브레드 테스트에 매트릭스의 조합 C(`tough-rubbery`+`dry-crumbly`+`large-holes`, quick-overmixed 4 vs quick-under-hydrated 3)를 그대로 썼다가 `diagnose()`가 `kind:"result"`가 아니라 `kind:"question"`을 반환해 실패했다. 매트릭스 결론에 이미 "margin 1점이라 완전히 뾰족하진 않다"고 적혀 있었는데, PROXIMITY_THRESHOLD=1이라 그 조합엔 실제로 판별 질문이 정의돼 있어 엔진이 의도대로 질문을 먼저 반환한 것 — 버그가 아니라 설계대로 동작.
**판단**: 그 조합을 테스트에서 빼고, 같은 매트릭스의 압도적 조합(`off-taste-soapy`+`large-holes`, 4 vs 1)으로 교체했다. "1순위 원인 재현" 테스트의 fixture는 매트릭스 결론에서 **압도적(margin 2점 이상)**이라고 명시한 조합만 골라야 한다.
**다시 마주칠 가능성**: 낮음 — 남은 데이터 Task(8, 9)에서 fixture를 고를 때 매트릭스의 "정직한 반례"/"근접" 표시가 붙은 조합을 피하기만 하면 되는, 이미 인지한 패턴이라 규칙 승격 없이 바로 적용 가능.

---
category: code-review
applied: rule
---
## 매트릭스 md의 CORE/공유 코드 라벨을 그대로 옮기면 안 됨 — 정본 함수로 강제해야 충돌 검사가 작동

**상황**: Task 4에서 치아바타·포카치아 파일을 작성할 때, 매트릭스 md가 CORE 증상(`blowout`)에 살짝 다른 문구("표면이 불규칙하게 터짐")를 쓰거나, 두 빵이 공유하기로 한 신규 코드(`lean-open-crumb-collapse`)에 서로 다른 문구("성형/이동 중" vs "딤플링 중")를 썼다. 매트릭스 텍스트를 그대로 옮기니 `knowledge-base.test.ts`의 `findLabelConflicts` 테스트가 즉시 실패했다.
**판단**: 우회하지 않고 근본 원인을 고쳤다 — CORE 증상은 항상 `coreSymptomLabel(id)`로 정본 라벨을 가져오게 하고, 빵 간 공유 신규 코드는 먼저 작성된 파일의 정확한 문구를 그대로 복사해 재사용했다. 이 패턴이 있어야 25종을 다 채웠을 때도 충돌 0건이 유지된다.
**다시 마주칠 가능성**: 높음 — Task 5~9에서도 반복될 패턴이라 즉시 규칙으로 승격한다: **원인/증상 id가 CORE거나 이전 Task에서 이미 등록된 것이면, 그 파일의 정확한 name/label 문자열을 그대로 재사용하고 매트릭스 md의 워딩 차이는 무시한다.** why/action(원인)만 빵마다 새로 쓴다.
