# 증상×원인 매트릭스 — 파네토네 (panettone)

> **목적:** B3(enriched 단맛 반죽) 배치. 파네토네는 브리오슈보다 버터·달걀 비중이 높고,
> 장시간(오버나이트) 발효·리에비토 마드레(사워도우 스타터) 강도에 크게 의존한다는 점이 다른 3종과의 핵심 차이다.
> 대상은 **오버나이트 스타터/예비발효를 쓰는 홈베이킹용 파네토네**(King Arthur American-Style 계열)로 고정.
>
> **주의:** King Arthur Baking 레시피/블로그에서 직접 확인한 문구는 각주로 표시했고,
> "굽고 나서 뒤집어 식힌다", "몰드를 1/4~1/3만 채운다", "밀가루 단백질 13~14%" 같은 자주 도는 주장은
> 이번 조사에서 King Arthur/ATK/Modernist Bread/Bread Bible 페이지로 **직접 확인하지 못했으므로 "출처 미확인 — 일반 제빵 상식"으로 표기**한다.

## 원인 (Causes)

| id | 구분 | name | why | action |
|---|---|---|---|---|
| `underproof` | CORE 재사용 | 발효 부족 | 이스트/스타터가 가스를 충분히 만들기 전에 구워 부피가 안 나고 속이 떡지며, 돔이 서지 않습니다. | 반죽이 몰드의 약 2배(또는 지정된 표시선)까지 부풀 때까지 발효를 늘려 보세요. |
| `overproof` | CORE 재사용 | 과발효 | 발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고, 기공이 커지며 신맛이 납니다. | 반죽이 과도하게 부풀기 전, 표시선에 도달하면 바로 구우세요. |
| `weak-gluten` | CORE 재사용 | 반죽 개발/구조 부족 | 글루텐이 충분히 형성되지 않으면 버터·달걀의 무게와 몰드 높이를 못 버텨 조밀해지고 돔이 안 섭니다. | 오버나이트 스타터로 반죽에 충분한 힘("strength")을 준 뒤 진행하세요.[^1] |
| `oven-too-hot` | CORE 재사용 | 오븐 온도 너무 높음 | 겉면이 속보다 훨씬 빨리 익어, 겉은 타는데 속까지 열이 전달되지 못합니다. | 오븐 온도를 낮추고 굽는 중간에 은박지로 덮으세요.[^2] |
| `oven-too-cool` | CORE 재사용 | 오븐 온도 낮음/굽기 부족 | 키가 큰 몰드 특성상 열이 중심까지 충분히 전달되지 않으면 속이 설익거나 색이 약해집니다. | 오븐을 충분히 예열하고, 필요하면 tube pan/monkey bread pan처럼 열 전달이 좋은 몰드를 쓰세요.[^1] |
| `enr-heavy-crumb` | **신규** | 레시피 자체의 구조적 한계 (버터·달걀 과다) | 파네토네는 브리오슈보다도 버터·달걀 비중이 높아, 글루텐이 이 무게를 못 이겨 조밀해지기 쉽습니다. | 밀가루 단백질 함량을 확인하고, 오버나이트 스타터로 사전에 반죽 힘을 키워 보세요.[^1] |
| `enr-sugar-crust-browning` | **신규** | 설탕·유지로 인한 과도한 겉면 갈변 | 설탕·유지 함량이 높으면 겉이 고르게 갈변돼도 속은 아직 덜 익은 상태일 수 있습니다. | 갈변이 시작되면 은박지로 덮고, 시간보다 내부 온도/스큐어 테스트로 완성을 확인하세요.[^2] |
| `enr-long-ferment-fatigue` | **신규** | 장시간 발효 후 구조 피로 | 파네토네 특유의 장시간(오버나이트) 발효는 반죽/스타터의 힘이 충분치 않으면 부풀림은 정상이었어도 굽고 난 뒤 구조를 못 버텨 주저앉거나 돔이 안 섭니다. | 스타터(오버나이트 예비발효)가 충분히 부풀어 힘이 오른 것을 확인한 뒤에만 본반죽을 진행하세요.[^1][^3] |

## 증상 (Symptoms)

| id | 구분 | label |
|---|---|---|
| `no-rise` | CORE 재사용 | 전혀/거의 안 부풂 |
| `collapsed` | CORE 재사용 | 부풀다 주저앉음 |
| `gummy` | CORE 재사용 | 속이 떡짐 / 질음 |
| `burnt-outside-raw-inside` | CORE 재사용 | 겉은 탔는데 속은 덜 익음 |
| `large-holes` | CORE 재사용 | 기공이 너무 크고 불규칙 |
| `sour-smell` | CORE 재사용 | 신맛 / 이상한 냄새 |
| `pale` | CORE 재사용 | 색이 안 남 / 창백함 |
| `enr-dense-heavy` | **신규** | 파운드케이크처럼 무겁고 조밀함 |
| `enr-no-dome` | **신규** | 위로 둥글게(돔/버섯모양) 부풀지 않고 평평하거나 꺼짐 |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | no-rise | collapsed | gummy | burnt-raw | large-holes | sour-smell | pale | dense-heavy | no-dome |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| `underproof` | ●● |    | ●● |    |    |    |    |    | ●  |
| `overproof`  | ●  | ●● |    |    | ●● | ●● |    |    |    |
| `weak-gluten` |    | ●  |    |    |    |    |    | ●●  | ●  |
| `oven-too-hot` |    |    |    | ●● |    |    |    |    |    |
| `oven-too-cool` |    |    | ●● | ●  |    |    | ●● |    |    |
| `enr-heavy-crumb` | ●  |    | ●  |    |    |    |    | ●●  |    |
| `enr-sugar-crust-browning` |    |    |    | ●● |    |    |    |    |    |
| `enr-long-ferment-fatigue` |    | ●● |    |    |    | ●  |    | ●  | ●●  |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `collapsed` (주저앉음) — FLAT

| 원인 | 점수 |
|---|:--:|
| `overproof` | 2 |
| `enr-long-ferment-fatigue` | 2 |
| `weak-gluten` | 1 |

→ **2점 2개 동점.** "주저앉았다"는 것만으론 과발효인지 장시간 발효 후 구조 피로인지 못 가른다.

### ⚠️ 조합 A (정직한 근접 사례): `no-rise` + `gummy` + `pale` — 준-FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| `underproof` | 2+2+0 | **4** 🥇 |
| `oven-too-cool` | 0+2+2 | **4** 🥇 |

→ **완전 동점(4-4).** 발효 부족과 오븐 저온은 "속이 안 익어 보인다"는 결과가 거의 같다 — 판별 질문 필요.

### ⚠️ 조합 B (근접하지만 우세): `collapsed` + `enr-no-dome` + `sour-smell` — 약한 PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **`enr-long-ferment-fatigue`** | 2+2+1 | **5** 🥇 |
| `overproof` | 2+0+2 | 4 |

→ 1위이긴 하나 5 vs 4로 근소하다. 장시간 발효 특유의 신맛(스타터 산도)과 과발효의 신맛이 겹치기 때문 — 판별 질문 필요.

### ✅ 조합 C: `large-holes` + `sour-smell` + `no-rise` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **`overproof`** | 2+2+1 | **5** 🥇 |
| `underproof` | 0+0+2 | 2 |

→ **5 vs 2로 뾰족하게 1위.** 기공이 크고 신맛이 강하게 겹치면 과발효가 명확히 갈린다.

---

## 결론

**PEAKED — 그러나 4종 중 동점/근접 원인쌍이 가장 많다.**

- ✅ 과발효의 신호(기공+신맛, 조합 C)는 여전히 매우 뾰족하다.
- ⚠️ "발효 부족 vs 오븐 저온"(조합 A, 완전 동점)과 "과발효 vs 장시간 발효 피로"(조합 B, 근소)는 파네토네 특유의
  긴 공정(오버나이트 예비발효 + 장시간 본발효 + 큰 몰드)이 만들어내는 **구조적 모호함**이다 — 매트릭스의 결함이 아니라
  파네토네가 식빵/브리오슈보다 실패 진단이 실제로 더 어려운 빵이라는 도메인 사실을 반영한다.
- 이 앱이 파네토네를 지원할 경우, 판별 질문 2개를 반드시 넣어야 한다.

### DiscriminatorQuestion 제안

| id | pair | text | yesFavors | noFavors |
|---|---|---|---|---|
| `q-underproof-vs-ovencool` | [`underproof`, `oven-too-cool`] | 오븐에 넣기 전 발효에서 반죽이 표시선/몰드 높이만큼 충분히 부풀었었나요? | `oven-too-cool` | `underproof` |
| `q-overproof-vs-longferment` | [`overproof`, `enr-long-ferment-fatigue`] | 발효 중에 이미 과하게 부풀거나 시큼한 냄새가 났나요, 아니면 발효는 적당했는데 굽고 나서야 주저앉았나요? | `overproof` | `enr-long-ferment-fatigue` |
| `q-ovenhot-vs-sugarbrowning` | [`oven-too-hot`, `enr-sugar-crust-browning`] | 설탕이 적은 다른 빵도 이 오븐에서 유독 빨리 타나요? | `oven-too-hot` | `enr-sugar-crust-browning` |

### SynonymEntry 초안

| symptomId | terms |
|---|---|
| `enr-no-dome` | 돔이 안 서요, 위가 평평해요, 버섯모양이 안 나와요, 굽고 나서 꺼졌어요 |
| `enr-dense-heavy` | 속이 무거워요, 빡빡해요, 촘촘해요 |

---

## 각주 (인용 출처)

[^1]: King Arthur Baking, "American-Style Panettone Recipe". https://www.kingarthurbaking.com/recipes/american-style-panettone-recipe — "The loaf also uses an overnight starter, which gives it the strength it needs to rise nice and tall." 및 "Instead of baking panettone in the traditional tall, round loaf pan, which can result in a raw center and burned crust, we suggest the use of a tube pan or monkey bread pan."

[^2]: King Arthur Baking, "Sweet breads for the holidays", 2018-12-03. https://www.kingarthurbaking.com/blog/2018/12/03/sweet-breads — 겉이 고르게 갈변되는 동안 속은 아직 다 안 익을 수 있어 굽는 중 포일 사용을 권장한다고 서술.

[^3]: King Arthur Baking, "Homemade panettone", 2008-11-23. https://www.kingarthurbaking.com/blog/2008/11/23/thinking-outside-the-blue-box-homemade-panettone — "Yes, this is a slow riser; don't rush it." 파네토네가 느리게 발효되는 것이 정상이며 서두르면 안 된다고 서술.

**출처 미확인 표기:** 굽고 나서 뒤집어 식히는 이유(단백질 구조 유지), 스큐어 테스트 타이밍, 몰드를 1/4~1/3만 채워야 한다는 기준, 밀가루 단백질 13~14% 권장치는 이번 조사에서 King Arthur/ATK/Modernist Bread/Bread Bible의 접근 가능한 페이지로 직접 확인하지 못했다. 다수의 개인 블로그·포럼(Fresh Loaf, wordloaf 등)에서 반복적으로 언급되지만 `_taxonomy.md` 허용 출처 목록에 없으므로, 위 매트릭스에서는 이 주장들에 의존하지 않았고 "출처 미확인 — 일반 제빵 상식"으로만 남긴다.
