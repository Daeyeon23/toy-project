# 증상×원인 매트릭스 — 소다빵 / 아이리시 소다브레드 (soda-bread)

> **목적:** 25종 확장 배치 B4(화학 팽창) 중 소다빵. `_taxonomy.md`의 CORE 코드를 재사용하고,
> 이스트 없이 **베이킹소다 + 버터밀크(산)의 즉시 반응**으로 팽창하는 이 빵 특유의 실패 양상만
> `quick-` 접두사로 신규 코드화한다. CORE의 발효 관련 코드(`yeast-dead`, `underproof`, `overproof`,
> starter 등)는 전혀 적용되지 않는다. 스콘(scone.md)과 동일한 화학 팽창 카테고리이므로,
> 겹치는 실패 양상은 **동일한 코드(id)를 그대로 재사용**했다.

## 원인 (Causes)

| 코드 | 이름 | 구분 | why | action |
|---|---|---|---|---|
| `oven-too-hot` | 오븐 온도 너무 높음 | CORE 재사용 | 겉면이 속보다 빨리 익어 겉은 두껍고 딱딱해지거나 타는데 속은 설익습니다. | 오븐 온도를 레시피보다 10~15℃ 낮추고, 필요하면 굽는 중간에 은박지를 덮으세요. |
| `oven-too-cool` | 오븐 온도 낮음/굽기 부족 | CORE 재사용 | 열이 부족해 속까지 고르게 익지 못해 축축하고 색이 약하게 나옵니다. | 오븐을 충분히 예열하고 온도계로 실제 온도를 확인한 뒤 굽는 시간을 늘려보세요. |
| `excess-hydration` | 수분 과다 | CORE 재사용 | 버터밀크가 레시피보다 많거나 반죽이 너무 질면 성형이 무너지고 속이 조밀해집니다. | 버터밀크량을 정확히 계량하고, 반죽이 심하게 질면 덧가루를 약간만 추가하세요. |
| `quick-leavener-dead` | 베이킹소다 오래됨·비활성 | 재사용 (scone과 동일) | 베이킹소다가 오래됐거나 습기를 먹으면 버터밀크의 산과 반응하는 힘이 약해져 거의 부풀지 않습니다. | 베이킹소다를 식초나 뜨거운 물에 넣어 즉시 거품이 올라오는지 확인하고, 개봉 후 6~12개월 지났으면 교체하세요.[^4] |
| `quick-leavener-excess` | 베이킹소다 과다·산-염기 불균형 | 재사용 (scone과 동일) | 베이킹소다가 버터밀크의 산 양보다 많으면 남은 알칼리가 반응 못한 채 남아 비누·금속 같은 맛을 내고 기공이 거칠어집니다. | 레시피의 베이킹소다량을 정확히 계량하고, 버터밀크 대신 일반 우유를 쓰지 않았는지 확인하세요.[^4] |
| `quick-overmixed` | 과다 치대기로 글루텐 과발달 | 재사용 (scone과 동일) | 반죽을 필요 이상으로 치대거나 여러 번 뭉치면 글루텐이 과발달해 속이 단단하고 질겨집니다. | 반죽이 겨우 뭉쳐질 정도로만 5~6회 정도 가볍게 뭉치고 더 치대지 마세요.[^3] |
| `quick-under-hydrated` | 계량 오차로 수분 부족 | 재사용 (scone과 동일) | 밀가루가 레시피보다 많거나 버터밀크가 적으면 반죽이 잘 뭉치지 않고 마르고 부슬부슬해집니다. | 밀가루를 무게로 계량하고, 반죽이 심하게 부슬거리면 버터밀크를 조금씩 추가하세요. |
| `quick-delayed-baking` | 반응 후 굽기 지연 | 신규 (소다빵 고유) | 베이킹소다와 버터밀크는 반죽하는 즉시 반응해 탄산가스를 만들기 시작하므로, 오븐에 넣기 전에 오래 기다리면 가스가 빠져나가 반죽이 덜 부풉니다. | 오븐을 충분히 예열해두고, 반죽을 다 섞으면 최대한 빨리 오븐에 넣으세요. |

## 증상 (Symptoms)

| 코드 | 라벨 | 구분 |
|---|---|---|
| `no-rise` | 전혀/거의 안 부풂 (볼륨 없음) | CORE 재사용 |
| `gummy` | 속이 떡짐 / 질음 | CORE 재사용 |
| `burnt-outside-raw-inside` | 겉은 탔는데 속은 덜 익음 | CORE 재사용 |
| `pale` | 색이 안 남 / 창백함 | CORE 재사용 |
| `thick-crust` | 겉이 두껍고 딱딱함 | CORE 재사용 |
| `too-wet` | 반죽이 너무 질어 성형 안 됨 | CORE 재사용 |
| `dry-crumbly` | 마르고 부슬부슬 부서짐 | 재사용 (scone과 동일) |
| `tough-rubbery` | 질기고 고무처럼 씹힘 | 재사용 (scone과 동일) |
| `off-taste-soapy` | 비누/금속 같은 맛이나 쓴맛 | 재사용 (scone과 동일) |
| `large-holes` | 기공이 너무 크고 불규칙 | CORE 재사용 |

## 매트릭스 (●● = 2, ● = 1, 빈칸 = 0)

| 원인 \ 증상 | no-rise | gummy | burnt-outside-raw-inside | pale | thick-crust | too-wet | dry-crumbly | tough-rubbery | off-taste-soapy | large-holes |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **oven-too-hot** | | | ●● | | ●● | | | | | |
| **oven-too-cool** | | ●● | | ●● | | | | | | |
| **excess-hydration** | | ●● | | | | ●● | | | | |
| **quick-leavener-dead** | ●● | ● | | ● | | | | | | |
| **quick-leavener-excess** | | | | | | | | | ●● | ●● |
| **quick-overmixed** | ● | | | | | | ● | ●● | | |
| **quick-under-hydrated** | | | | | | | ●● | ● | | |
| **quick-delayed-baking** | ●● | ● | | | | | | | | |

---

## 판별력 검증

### ❌ 단일 증상 `no-rise` (안 부풂) — FLAT

| 원인 | 점수 |
|---|:--:|
| quick-leavener-dead | 2 |
| quick-delayed-baking | 2 |
| quick-overmixed | 1 |

→ **2점 동점.** "안 부풀었다"만으론 소다가 죽었는지, 굽기를 미뤘는지 구분 못함.

### ✅ 조합 A: `burnt-outside-raw-inside` + `thick-crust` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **oven-too-hot** | 2+2 | **4** 🥇 |
| (나머지) | | 0 |

→ 압도적 1위. 오븐 온도는 화학 팽창 원인들과 증상이 전혀 안 겹침(scone·식빵과 동일 패턴).

### ✅ 조합 B: `off-taste-soapy` + `large-holes` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **quick-leavener-excess** | 2+2 | **4** 🥇 |
| (나머지) | | 0 |

→ 완전히 독점적. 비누/금속맛은 베이킹소다 과다·산 부족에서만 나타남.[^4]

### ✅ 조합 C: `tough-rubbery` + `dry-crumbly` + `no-rise` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **quick-overmixed** | 2+1+1 | **4** 🥇 |
| quick-under-hydrated | 1+2+0 | 3 |
| quick-leavener-dead | 0+0+2 | 2 |

→ overmixed가 4점으로 1위. `tough-rubbery`+`dry-crumbly`만 보면 under-hydrated와 헷갈리지만, `no-rise`가 살짝 기울여준다 — 다만 margin이 1점뿐이라 완전히 뾰족하진 않음(아래 참고).

### ⚠️ 조합 D (정직한 반례): `no-rise` + `gummy` — 준-FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| quick-leavener-dead | 2+1 | 3 |
| quick-delayed-baking | 2+1 | 3 |

→ **소다가 죽은 것과 굽기를 미룬 것이 3점 동점.** 결과물(안 부풀고 속이 떡짐)이 똑같아 증상만으론 구분 불가 — 도메인 사실.

---

## 결론

**대체로 PEAKED — 단, 두 개의 진짜 동점 쌍이 있다.** 조합 A·B는 매우 뾰족하고, 조합 C는 margin 1점으로 약하게 peaked하다. 반면 조합 D(`quick-leavener-dead` vs `quick-delayed-baking`)는 **완전한 동점**이며, 이는 매트릭스 결함이 아니라 "소다가 안 살았다"와 "반응 기체가 새어나갔다"가 결과적으로 동일한 겉모습을 만든다는 도메인 사실이다. 조합 C(overmixed vs under-hydrated)도 margin이 좁아 판별 질문을 곁들이는 게 안전하다.

### 판별 질문 (DiscriminatorQuestion) 제안

| id | pair | text | yesFavors | noFavors |
|---|---|---|---|---|
| `q-soda-leavenerdead-vs-delayed` | [`quick-leavener-dead`, `quick-delayed-baking`] | 반죽을 다 섞자마자 바로 예열된 오븐에 넣었나요? | `quick-leavener-dead` | `quick-delayed-baking` |
| `q-soda-overmixed-vs-underhydrated` | [`quick-overmixed`, `quick-under-hydrated`] | 반죽을 뭉칠 때 5~6회보다 많이 치대거나 오래 뭉쳤나요? | `quick-overmixed` | `quick-under-hydrated` |

### 동의어 (SynonymEntry) 초안

| symptomId | terms |
|---|---|
| `off-taste-soapy` | 비누맛, 쓴맛, 금속맛 나요 |
| `dry-crumbly` | 부스러져요, 말랐어요, 푸석해요 |
| `tough-rubbery` | 질겨요, 딱딱하게 씹혀요 |
| `large-holes` | 구멍이 커요, 속에 큰 구멍, 기공이 불규칙해요 |

---

## 인용 출처

- [^3]: King Arthur Baking, "American Irish Soda Bread Recipe" — https://www.kingarthurbaking.com/recipes/american-irish-soda-bread-recipe (재료를 빠르고 부드럽게 섞으라는 지시 — 과다 치대기 회피를 시사)
- [^4]: King Arthur Baking, "What's the difference between baking soda and baking powder?" — https://www.kingarthurbaking.com/blog/2021/09/10/difference-between-baking-soda-and-baking-powder-substitutions (베이킹소다는 버터밀크 같은 산과 만나 반응한다는 산-염기 원리, 과다 시 쓴맛, 유통기한 확인 권고)

**출처 미확인 — 일반 제빵 상식**:
- "반죽을 5~6회 이상 치대면 질겨진다"는 구체적 횟수와 "반죽 후 오래 기다리면 탄산가스가 빠져나가 덜 부푼다"는 설명은 여러 레시피 사이트에서 공통적으로 언급되지만, `_taxonomy.md`의 허용 출처 목록에 있는 문헌에서 직접 확인하지 못했다. 베이킹소다-산 반응이 혼합 즉시 시작된다는 화학 원리 자체는 King Arthur([^4])로 확인되므로, "빨리 구워야 한다"는 결론은 그 원리의 합리적 연장이지만 개별 문장 인용은 아니다.
- "밀가루 과다·버터밀크 부족 → 부슬부슬"은 일반 제빵 상식으로 표기한다.
