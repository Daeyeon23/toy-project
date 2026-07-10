# 증상×원인 매트릭스 — 콘브레드 (cornbread)

> **목적:** 25종 확장 배치 B4(화학 팽창) 중 콘브레드. `_taxonomy.md`의 CORE 코드를 재사용하고,
> 이스트 없이 **베이킹파우더 + 베이킹소다(버터밀크 산과 반응)**로 팽창하는 배터(batter)형 빵 특유의
> 실패 양상만 `quick-` 접두사로 신규 코드화한다. CORE의 발효 관련 코드는 전혀 적용되지 않는다.
> 스콘·소다빵과 동일한 화학 팽창 카테고리이므로, 겹치는 실패 양상은 **동일한 코드(id)를 재사용**했다.
> 콘브레드는 반죽(dough)이 아니라 **묻힌 배터**라서, 과다 믹싱의 결과가 스콘/소다빵의 "질김"보다
> "터널(tunnel)"·큰 기공(`large-holes`)으로 더 뚜렷하게 나타난다는 점이 다르다.

## 원인 (Causes)

| 코드 | 이름 | 구분 | why | action |
|---|---|---|---|---|
| `oven-too-hot` | 오븐 온도 너무 높음 | CORE 재사용 | 겉면이 속보다 빨리 익어 겉은 두껍고 딱딱해지거나 타는데 속은 설익습니다. | 오븐 온도를 레시피보다 10~15℃ 낮추고, 필요하면 굽는 중간에 은박지를 덮으세요. |
| `oven-too-cool` | 오븐 온도 낮음/굽기 부족 | CORE 재사용 | 열이 부족해 속까지 고르게 익지 못해 축축하고 색이 약하게 나옵니다. | 오븐을 충분히 예열하고 온도계로 실제 온도를 확인한 뒤 굽는 시간을 늘려보세요. |
| `excess-hydration` | 수분 과다 | CORE 재사용 | 우유·버터밀크가 레시피보다 많으면 배터가 조밀해지고 속이 떡질 수 있습니다. | 액체량을 정확히 계량하세요. |
| `quick-leavener-dead` | 베이킹파우더/소다 오래됨·비활성 | 재사용 (scone/soda-bread와 동일) | 베이킹파우더/소다가 오래됐거나 습기를 먹으면 반응이 충분히 일어나지 않아 부풀지 않습니다. | 뜨거운 물이나 식초에 넣어 즉시 거품이 올라오는지 확인하고, 오래됐으면 교체하세요.[^4] |
| `quick-leavener-excess` | 베이킹파우더/소다 과다·산-염기 불균형 | 재사용 (scone/soda-bread와 동일) | 베이킹소다가 버터밀크의 산 양보다 많으면 남은 알칼리가 반응 못한 채 남아 비누·금속 같은 맛을 내고 기공이 거칠어집니다. | 레시피의 베이킹소다·파우더 비율을 정확히 지키세요.[^4][^5] |
| `quick-overmixed` | 과다 믹싱으로 글루텐 과발달·터널 | 재사용 (scone/soda-bread와 동일) | 배터를 오래 저으면 글루텐이 과발달해 질기고 조밀해지며, 속에 불규칙한 큰 구멍(터널)이 생깁니다. | 가루가 보이지 않을 정도로만 가볍게 섞으세요.[^5] |
| `quick-under-hydrated` | 지방·수분 부족 또는 계량 오차 | 재사용 (scone/soda-bread와 동일) | 버터·기름이 적거나 옥수수가루 비율이 높으면 배터가 결합력을 잃어 마르고 부서지기 쉬워집니다. | 버터·기름 비율을 레시피대로 지키고, 옥수수가루와 밀가루를 약 5:5로 맞춰보세요.[^5] |
| `quick-overbaked` | 과굽기 | 재사용 (scone과 동일) | 필요한 시간보다 오래 구우면 잔열까지 더해져 과도하게 건조해집니다. | 가장자리가 팬에서 떨어지고 꼬치가 깨끗이 나오면 바로 꺼내세요.[^5] |

## 증상 (Symptoms)

| 코드 | 라벨 | 구분 |
|---|---|---|
| `no-rise` | 전혀/거의 안 부풂 (볼륨 없음) | CORE 재사용 |
| `gummy` | 속이 떡짐 / 질음 | CORE 재사용 |
| `burnt-outside-raw-inside` | 겉은 탔는데 속은 덜 익음 | CORE 재사용 |
| `pale` | 색이 안 남 / 창백함 | CORE 재사용 |
| `thick-crust` | 겉이 두껍고 딱딱함 | CORE 재사용 |
| `too-wet` | 반죽이 너무 질어 성형 안 됨 | CORE 재사용 |
| `dry-crumbly` | 마르고 부슬부슬 부서짐 | 재사용 (scone/soda-bread와 동일) |
| `tough-rubbery` | 질기고 고무처럼 씹힘 | 재사용 (scone/soda-bread와 동일) |
| `off-taste-soapy` | 비누/금속 같은 맛이나 쓴맛 | 재사용 (scone/soda-bread와 동일) |
| `large-holes` | 기공이 너무 크고 불규칙(터널) | CORE 재사용 |

## 매트릭스 (●● = 2, ● = 1, 빈칸 = 0)

| 원인 \ 증상 | no-rise | gummy | burnt-outside-raw-inside | pale | thick-crust | too-wet | dry-crumbly | tough-rubbery | off-taste-soapy | large-holes |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **oven-too-hot** | | | ●● | | ●● | | | | | |
| **oven-too-cool** | | ●● | | ●● | | | | | | |
| **excess-hydration** | | ●● | | | | ●● | | | | |
| **quick-leavener-dead** | ●● | ● | | ● | | | | | | |
| **quick-leavener-excess** | | | | | | | | | ●● | ●● |
| **quick-overmixed** | | | | | | | ● | ●● | | ● |
| **quick-under-hydrated** | | | | | | | ●● | ● | | |
| **quick-overbaked** | | | | | ● | | ●● | | | |

---

## 판별력 검증

### ❌ 단일 증상 `dry-crumbly` (마르고 부서짐) — FLAT

| 원인 | 점수 |
|---|:--:|
| quick-under-hydrated | 2 |
| quick-overbaked | 2 |
| quick-overmixed | 1 |

→ **2점 동점.** "말라서 부서진다"만으론 지방·수분 부족과 과굽기를 구분 못함 — 스콘 매트릭스와 동일한 패턴.

### ✅ 조합 A: `burnt-outside-raw-inside` + `thick-crust` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **oven-too-hot** | 2+2 | **4** 🥇 |
| quick-overbaked | 0+1 | 1 |

→ 압도적 1위. 오븐 온도 문제는 화학 팽창 원인들과 증상이 거의 안 겹침.

### ✅ 조합 B: `off-taste-soapy` + `large-holes` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **quick-leavener-excess** | 2+2 | **4** 🥇 |
| quick-overmixed | 0+1 | 1 |

→ 압도적 1위. 비누/금속맛은 팽창제 과다·산 부족에서만 강하게 나타남.[^4]

### ✅ 조합 C: `tough-rubbery` + `dry-crumbly` + `large-holes` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **quick-overmixed** | 2+1+1 | **4** 🥇 |
| quick-under-hydrated | 1+2+0 | 3 |
| quick-overbaked | 0+2+0 | 2 |

→ overmixed가 4점으로 1위. `tough-rubbery`+`dry-crumbly`만 보면 under-hydrated와 헷갈리지만, 터널형 `large-holes`가 살짝 기울여준다(margin 1점 — 완전히 뾰족하진 않아 판별 질문을 곁들이는 게 안전).

### ⚠️ 조합 D (정직한 반례): `no-rise` + `gummy` + `pale` — 준-FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| quick-leavener-dead | 2+1+1 | 4 |
| oven-too-cool | 0+2+2 | 4 |

→ **팽창제 비활성과 오븐 저온이 4점 동점.** 스콘 매트릭스의 조합 D와 완전히 동일한 패턴 — "안 부풀고 축축하고 색이 약함"은 두 원인 모두에서 똑같이 나타나는 도메인 사실.

---

## 결론

**대체로 PEAKED.** 조합 A·B는 각각 오븐 온도·팽창제 과다에 압도적으로 집중되고, 조합 C는 margin 1점으로 약하게 peaked하다. 유일하게 완전한 동점은 조합 D(`quick-leavener-dead` vs `oven-too-cool`)로, 스콘·식빵 매트릭스에서 반복적으로 나타나는 동일 패턴이다 — "팽창이 원천적으로 안 됐다"와 "열이 부족했다"는 증상만으로 구분이 안 되는 것이 이 도메인 전반의 특징으로 보인다.

### 판별 질문 (DiscriminatorQuestion) 제안

| id | pair | text | yesFavors | noFavors |
|---|---|---|---|---|
| `q-corn-leavenerdead-vs-ovencool` | [`quick-leavener-dead`, `oven-too-cool`] | 베이킹소다/파우더를 뜨거운 물이나 식초에 넣었을 때 바로 거품이 올라오나요? | `oven-too-cool` | `quick-leavener-dead` |
| `q-corn-overmixed-vs-underhydrated` | [`quick-overmixed`, `quick-under-hydrated`] | 반죽을 매끈해질 때까지 충분히(오래) 저었나요? | `quick-overmixed` | `quick-under-hydrated` |

### 동의어 (SynonymEntry) 초안

| symptomId | terms |
|---|---|
| `dry-crumbly` | 푸석해요, 부서져요, 말랐어요, 가루처럼 부서짐 |
| `large-holes` | 큰 구멍이 있어요, 기공이 불규칙해요, 터널이 생겼어요 |
| `off-taste-soapy` | 비누맛, 쓴맛, 금속맛 |
| `tough-rubbery` | 질겨요, 고무같이 씹혀요 |

---

## 인용 출처

- [^4]: King Arthur Baking, "What's the difference between baking soda and baking powder?" — https://www.kingarthurbaking.com/blog/2021/09/10/difference-between-baking-soda-and-baking-powder-substitutions (산-염기 반응 원리, 팽창제 과다 시 쓴맛/비누맛, 유통기한 확인 권고)
- [^5]: King Arthur Baking, "Cornbread Recipe" — https://www.kingarthurbaking.com/recipes/cornbread-recipe (과다 믹싱을 피하라는 지시, 버터+식용유 혼합으로 수분 보강, 베이킹파우더 2ts+베이킹소다 1/4ts 조합, 가장자리가 떨어지고 꼬치가 깨끗할 때 완성이라는 판별법)

**출처 미확인 — 일반 제빵 상식**:
- "옥수수가루와 밀가루를 5:5로 맞추면 부드럽다"는 비율 조언은 여러 대중 요리 매체에서 반복되지만 `_taxonomy.md` 허용 출처에서 원문으로 확인하지 못했다.
- 과다 믹싱이 "터널(tunnel)"이라는 큰 기공을 만든다는 메커니즘(글루텐이 가스를 붙잡았다가 한번에 터짐)은 제빵 전반에 널리 퍼진 설명이나, 콘브레드에 특화된 문장을 허용 출처에서 직접 인용하지 못해 일반 제빵 상식으로 표기한다.
