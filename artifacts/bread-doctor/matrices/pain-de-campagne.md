# 증상×원인 매트릭스 — 팽 드 캄파뉴 (pain-de-campagne)

> **목적:** B5(프랑스·이탈리아 린도우) 배치. 다른 3종과 달리 상업 이스트 대신 사워도우 스타터(르방)를 쓰므로
> `yeast-dead` 대신 `starter-inactive`/`starter-overripe`(taxonomy B1 스캐폴드 코드, 여기서 최초 코드화)를 사용한다.
> 스코어링·귀(ear) 형성은 바게트의 `lean-scoring-technique`/`lean-no-ear`를 그대로 재사용한다.

## 원인 (Causes)

| 코드 | id | name | why | action | 구분 |
|---|---|---|---|---|---|
| C1 | `starter-inactive` | 스타터 활성 부족 | 먹이를 준 뒤 충분히 활성화되지 않은 스타터는 반죽에 leavening 힘을 거의 못 주어, 발효가 느리고 부피가 안 나옵니다.[^1] | 스타터를 먹인 뒤 6~8시간 안에 부피가 2배로 부풀고 표면이 뚜렷하게 기포가 올라오는 상태(peak)에서 반죽에 넣어 보세요.[^1] | 신규 (taxonomy B1 스캐폴드 코드) |
| C2 | `starter-overripe` | 스타터 과숙성 | 피크를 지나 오래 방치된 스타터는 산(주로 아세트산)이 과하게 쌓여 신맛이 강해지고, 동시에 자체 leavening 힘도 소진돼 반죽이 잘 안 부풀거나 주저앉습니다.[^2] | 스타터가 피크(가장 부풀고 기포가 활발한 시점)일 때 바로 사용하고, 늦었다면 한 번 더 먹여 리프레시한 뒤 사용해 보세요. | 신규 (taxonomy B1 스캐폴드 코드) |
| C3 | `underproof` | 발효 부족 | 벌크 발효가 부족하면 부피가 안 나고 속이 떡지며, 팽창 압력이 표면 약한 곳을 불규칙하게 터뜨립니다. | 반죽이 부피가 뚜렷하게 늘고 손가락 자국이 느리게 돌아올 때까지 벌크 발효를 늘려 보세요. | CORE 재사용 |
| C4 | `overproof` | 과발효 | 발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고 기공이 커지며, 스코어링한 자리도 벌어지지 못하고 밋밋해집니다. | 반죽 부피·표면 상태를 자주 확인하고, 냉장 리타드로 발효 속도를 늦춰 스코어링 직전 상태를 맞춰 보세요. | CORE 재사용 |
| C5 | `cold-environment` | 저온 환경 | 반죽·실내 온도가 낮으면 발효 속도가 크게 느려져 같은 시간에 덜 부풉니다. | 26~28℃ 환경에서 발효시키거나 발효 시간을 늘려 보세요. | CORE 재사용 |
| C6 | `weak-gluten` | 반죽 개발 부족 | 캄파뉴는 통밀·호밀 혼합으로 흰 밀가루보다 글루텐이 약해지기 쉬운데, 개발이 부족하면 가스를 못 가둬 주저앉고 기공이 불규칙해집니다. | 스트레치&폴드를 반복하거나 오토리즈 시간을 늘려 글루텐을 발달시켜 보세요. | CORE 재사용 |
| C7 | `oven-too-hot` | 오븐 온도가 높음 | 겉면이 속보다 훨씬 빨리 익어 겉은 타거나 두껍고 딱딱해지는 동안 속까지 열이 전달되지 못합니다. | 오븐 온도를 레시피보다 10~15℃ 낮추고, 더치 오븐/스팀으로 초반 열 전달을 조절하세요. | CORE 재사용 |
| C8 | `oven-too-cool` | 오븐 온도가 낮음 | 열이 부족해 굽는 시간이 늘어나면서 크러스트 형성이 고르지 않아 속이 설익거나 색이 약해집니다. | 오븐(및 더치 오븐)을 충분히 예열하고 온도계로 실제 온도를 확인하세요.[^3] | CORE 재사용 |
| C9 | `excess-hydration` | 수분 과다 | 통밀·호밀 혼합에 물을 과하게 넣으면 반죽이 퍼지듯 늘어져 성형이 무너지고 속이 떡지게 됩니다. | 통밀/호밀 비율에 맞춰 수분을 5~10% 줄이거나 오토리즈로 흡수시켜 보세요. | CORE 재사용 |
| C10 | `lean-scoring-technique` | 스코어링(칼집) 기법 문제 | 칼집이 너무 얕거나 수직으로 들어가면 굽는 중 반죽 표면이 귀(ear)로 벌어지지 못하고 엉뚱한 곳이 터집니다. | 곡선형 lame을 얕은 사선으로 밀어 넣어 겹치듯 칼집을 내 보세요. | 신규 (바게트에서 재사용) |

## 증상 (Symptoms)

| 코드 | id | label | 구분 |
|---|---|---|---|
| S1 | `no-rise` | 전혀/거의 안 부풂 | CORE 재사용 |
| S2 | `collapsed` | 부풀다 주저앉음 | CORE 재사용 |
| S3 | `gummy` | 속이 떡짐/질음 | CORE 재사용 |
| S4 | `burnt-outside-raw-inside` | 겉은 탔는데 속은 덜 익음 | CORE 재사용 |
| S5 | `pale` | 색이 안 남/창백함 | CORE 재사용 |
| S6 | `blowout` | 옆구리·표면이 터짐(칼집 낸 자리가 아닌 곳) | CORE 재사용 |
| S7 | `large-holes` | 기공이 너무 크고 불규칙 | CORE 재사용 |
| S8 | `thick-crust` | 겉이 두껍고 딱딱함 | CORE 재사용 |
| S9 | `sour-smell` | 신맛/이상한 냄새 (캄파뉴는 약한 신맛이 정상이나, 과하면 증상) | CORE 재사용 |
| S10 | `lean-no-ear` | 칼집 낸 자리가 안 벌어짐/귀(ear)가 안 생김 | 신규 (바게트에서 재사용) |

## 매트릭스 (●● = 강한 연관 2점, ● = 약한 연관 1점, 빈칸 = 0)

| 원인 \ 증상 | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10 |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **C1** 스타터 비활성 | ●● |    | ●● |    | ●  |    |    |    |    |     |
| **C2** 스타터 과숙성 | ●  | ●  |    |    |    |    | ●  |    | ●● |     |
| **C3** 발효 부족    | ●● |    | ●● |    |    | ●● |    | ●  |    | ●   |
| **C4** 과발효       | ●  | ●● |    |    |    |    | ●● |    | ●  | ●●  |
| **C5** 저온 환경    | ●● |    | ●  |    |    |    |    |    |    |     |
| **C6** 반죽 개발 부족 | ●  |  ● | ●  |    |    |    | ●  |    |    | ●   |
| **C7** 오븐 고온    |    |    |    | ●● |    | ●  |    | ●● |    |     |
| **C8** 오븐 저온    |    |    | ●● |    | ●● |    |    |    |    |     |
| **C9** 수분 과다    |    | ●  | ●● |    |    |    | ●  |    |    |     |
| **C10** 스코어링 기법 |    |    |    |    |    | ●  |    |    |    | ●●  |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 S1 (안 부풂) — FLAT

| 원인 | 점수 |
|---|:--:|
| C1 스타터 비활성 | 2 |
| C3 발효부족 | 2 |
| C5 저온 | 2 |
| C2 스타터 과숙성 | 1 |
| C4 과발효 | 1 |
| C6 개발부족 | 1 |

→ **2점 3개 동점(+1점 3개).** 캄파뉴는 leavening 원인(스타터 비활성/발효부족/저온)이 하나 더 있어 식빵보다도 더 flat하다 — 단일 증상이 더욱 쓸모없다는 걸 재확인.

### ✅ 조합 A: S1(안부풂) + S3(속떡짐) + S6(엉뚱한 곳 터짐) — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **C3 발효부족** | 2+2+2 | **6** 🥇 |
| C1 스타터 비활성 | 2+2+0 | 4 |
| C5 저온 | 2+1+0 | 3 |

→ CORE 코드 재사용 결과, 다른 3종과 동일한 계산으로 뾰족하게 갈린다.

### ✅ 조합 B: S2(주저앉음) + S7(큰기공) + S10(귀 안 생김) — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **C4 과발효** | 2+2+2 | **6** 🥇 |
| C6 개발부족 | 1+1+1 | 3 |
| C10 스코어링 기법 | 0+0+2 | 2 |

→ 바게트와 동일한 구조. `lean-no-ear`가 과발효를 개발부족·스코어링 문제로부터 뾰족하게 분리한다.

### ⚠️ 조합 C (정직한 반례, 캄파뉴 고유): S2(주저앉음) + S7(큰기공) + S9(신맛) — 근접(준-FLAT)

| 원인 | 계산 | 점수 |
|---|---|:--:|
| C4 과발효 | 2+2+1 | **5** 🥇 |
| C2 스타터 과숙성 | 1+1+2 | **4** |

→ **5 vs 4로 근접.** "벌크 발효가 과했나" vs "스타터 자체가 과숙성이었나"는 사워도우 진단의 대표적 함정이다 — King Arthur도 스타터 비활성/과발효 둘 다 결과적으로 밀도 높고 신맛 나는 빵을 만들 수 있다고 서술한다.[^2] `sour-smell` 단독으론 못 가르므로 판별 질문이 필요하다.

### ✅ 조합 D: S4(겉탐 속덜익음) + S8(두꺼운 겉) — PEAKED (압도적)

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **C7 오븐 고온** | 2+2 | **4** 🥇 |
| (나머지) | | 0 |

→ 오븐 온도 문제는 여전히 매우 잘 분리된다.

---

## 결론 (판정)

**대체로 PEAKED — 단, 사워도우 특유의 근접 쌍(과발효 ↔ 스타터 과숙성)이 새로 확인된다.**

- ✅ 조합 A·B·D는 top-1이 2점 이상 차이로 뾰족하게 갈린다.
- ✅ `lean-no-ear`(바게트에서 재사용)가 캄파뉴에서도 동일하게 잘 작동 — 스코어링을 하는 린도우 계열 전반에 재사용 가치가 확인됨.
- ⚠️ 조합 C: 과발효 ↔ 스타터 과숙성이 5 vs 4로 근접 — 캄파뉴 고유의 새로운 판별 질문이 필요하다(아래).
- ⚠️ 단일 증상 FLAT은 식빵보다 더 심하다(3개 leavening 원인 동점) — 캄파뉴는 판별 질문에 더 의존적인 빵이라는 점을 spec에 반영할 만하다.

### DiscriminatorQuestion 제안

1. **재사용**: `q-yeast-vs-underproof` 대체판 — 스타터 버전.
   - `id`: `q-starter-vs-underproof-campagne`
   - `pair`: [`starter-inactive`, `underproof`]
   - `text`: "반죽에 넣은 스타터가 먹이 준 뒤 6~8시간 안에 부피가 2배로 부푼 활성 상태였나요?"
   - `yesFavors`: `underproof` (스타터는 괜찮았으니 반죽 자체의 벌크 발효 시간이 부족했던 것)
   - `noFavors`: `starter-inactive` (스타터가 충분히 안 부풀었다면 스타터 활성 부족)
   - 참고: 물에 띄우는 "float test"는 King Arthur 자체 실험에서 초기 발효 단계 반죽도 뜨는 위양성(false positive)이 나와 신뢰도가 낮다고 확인됐으므로 판별 질문에 사용하지 않는다.[^1]
2. **신규**: 과발효(C4) ↔ 스타터 과숙성(C2) 구분용 — 조합 C의 근접 쌍 해결.
   - `id`: `q-overproof-vs-starter-overripe`
   - `pair`: [`overproof`, `starter-overripe`]
   - `text`: "반죽에 넣기 전 스타터 자체가 시큼한 냄새가 강하고 꺼져 있었나요, 아니면 스타터는 괜찮았는데 반죽(벌크) 발효 시간이 길었나요?"
   - `yesFavors`: `starter-overripe`
   - `noFavors`: `overproof`

### SynonymEntry 초안

| symptomId | terms (초안) |
|---|---|
| `sour-smell` | ["너무 시어요", "쉰내가 나요", "발효 냄새가 강해요"] |
| `lean-no-ear` | ["귀가 안 생겨요", "칼집이 안 벌어져요", "스코어링이 밋밋해요"] |
| `large-holes` | ["기공이 너무 커요", "구멍이 불규칙해요", "속이 뻥뻥 뚫려있어요"] |
| `no-rise` | ["안 부풀어요", "볼륨이 없어요", "스타터를 넣었는데 안 부풀어요"] |

---

## 출처

[^1]: King Arthur Baking, ["Why is my sourdough starter not rising?"](https://www.kingarthurbaking.com/blog/2024/12/19/why-is-my-sourdough-starter-not-rising), ["The float test for yeast dough and sourdough starter"](https://www.kingarthurbaking.com/blog/2019/01/02/the-float-test-for-yeast-dough-and-sourdough-starter) — 활성 스타터는 먹인 뒤 6~8시간 안에 2배로 부풀어야 한다는 기준, float test는 초기 발효 단계에서도 위양성이 나와 신뢰할 수 없다는 자체 실험 결과.
[^2]: King Arthur Baking, ["Ask the Bread Coach: Can sourdough starter be too active?"](https://www.kingarthurbaking.com/blog/2021/07/29/bread-coach-can-sourdough-starter-be-too-active), ["Over-proofed bread dough: How to save your loaf"](https://www.kingarthurbaking.com/blog/2018/02/21/over-proofed-bread), ["How to make your sourdough bread more (or less) sour"](https://www.kingarthurbaking.com/blog/2022/02/22/how-to-make-your-sourdough-bread-more-or-less-sour-part-3) — 스타터가 비활성이든(leavening 힘 부족) 반죽이 과발효든(가스 생산력 소진) 둘 다 밀도 높고 눅눅한 속을 만들 수 있다는 설명, 그리고 벌크 발효 온도(따뜻=젖산↑, 냉장 리타드=아세트산↑)가 신맛의 종류에 영향을 준다는 설명.
[^3]: America's Test Kitchen, ["Freshly Milled Wheat Flour Country Bread"](https://www.americastestkitchen.com/recipes/9356-freshly-milled-wheat-flour-country-bread), ["Classic Sourdough Bread (Pain au Levain)"](https://www.americastestkitchen.com/recipes/9082-classic-sourdough-bread-pain-au-levain) — 상업 이스트+장시간 저온 발효로도 르방 특유의 신맛/쫄깃함을 흉내낼 수 있다는 설명, 뜨겁게 예열한 더치 오븐/오븐이 크러스트 형성에 중요하다는 서술.

**추가 근거(출처 미확인 — 일반 제빵 상식):** 통밀·호밀 혼합이 흰 밀가루보다 글루텐 발달이 어렵다는 설명, 캄파뉴 특유의 두껍고 바삭한 크러스트가 더치 오븐/스팀 굽기에서 나온다는 설명은 제빵 전반의 일반 상식으로 처리했다.
