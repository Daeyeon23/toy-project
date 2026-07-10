# 빵 KB 코드 네임스페이스 규칙

`lib/bread-doctor/knowledge/*.ts` 매트릭스 파일을 작성·수정할 때 적용한다.

## 규칙

1. CORE 원인/증상이거나 다른 빵 파일에 이미 등록된 id를 재사용할 때는 `coreCauseName()`/`coreSymptomLabel()`을 쓰거나, 먼저 작성된 파일의 정확한 `name`/`label` 문자열을 그대로 복사한다. 매트릭스 md 원본의 워딩 차이는 무시한다.
2. 원인(cause) id와 증상(symptom) id는 서로 다른 네임스페이스지만, 같은 문자열을 다른 의미로 재사용하지 않는다 — 새 id를 등록하기 전에 grep으로 그 문자열이 이미 다른 네임스페이스에서 다른 의미로 쓰이고 있는지 확인한다.
3. 새 KB 파일을 추가·수정한 뒤에는 반드시 `bun run test`(`knowledge-base.test.ts`의 orphan·label-conflict 검사)를 돌려 충돌이 없는지 확인한다.

## Why

같은 부류의 실수가 두 번 재발했다: Task 4(치아바타·포카치아)에서 같은 네임스페이스 내 라벨 불일치, 이후 code-review 세션에서 tortilla/lavash의 원인 id가 pizza-dough/naan/pita/english-muffin의 증상 id와 문자열이 겹치는 크로스 네임스페이스 충돌. 두 번 다 관례는 지켜졌지만 코드 주석에만 적혀 있어 다음 작성자가 놓쳤다.

`findLabelConflicts()`(`lib/bread-doctor/knowledge/_core.ts`)는 원인끼리·증상끼리의 충돌만 잡고 원인↔증상 크로스 네임스페이스 충돌은 잡지 못한다 — 이 갭은 아직 남아 있으니, 새 KB를 추가할 때 grep 확인(규칙 2)으로 직접 메운다.
