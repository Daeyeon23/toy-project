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
applied: not-yet
---
## wireframe이 spec에 없는 네비게이션(뒤로가기)을 슬쩍 추가했다

**상황**: sketch-wireframe 단계에서 화면 간 이동을 자연스럽게 만들려고 "← 빵 종류" 뒤로가기 버튼을 넣었는데, spec.md의 시나리오 어디에도 이 전환은 없었다. draft-plan의 plan-reviewer가 이 wireframe↔spec 간극을 잡아냈다.
**판단**: 사용자에게 확인 후 MVP 범위에서 제외하고 wireframe에서 버튼을 제거했다. "다시 진단"(Scenario 6)으로 재입력 흐름은 이미 커버되므로 별도 뒤로가기는 불필요한 범위 확장이었다.
**다시 마주칠 가능성**: 높음 — 여러 화면을 넘나드는 wireframe을 그릴 때, 없는 이동 경로를 "당연히 있어야 할 것 같아서" 추가하는 경향이 있다. sketch-wireframe 스킬에 "화면 간 이동 컨트롤은 spec의 시나리오 전환에 대응하는 것만 그린다"는 원칙 추가를 사용자에게 제안했음 — 승인 여부 대기.

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
