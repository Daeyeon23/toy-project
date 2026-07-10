# 증상×원인 매트릭스 스케치 — 피자 도우 (pizza-dough)

> **목적:** 25종 확장 배치 B6(발효 플랫브레드) 중 피자 도우.
> 핵심 실패축은 "오븐 스프링/가장자리(cornicione) 부풀림"과 "성형 시 두께 균일성"이다.
> CORE 코드를 최대한 재사용하고, 피자 도우 고유 실패(스트레치 저항, 바닥 스톤 예열 부족 등)만 `flat-` 신규 코드로 추가한다.
> 인용 출처는 `_taxonomy.md` 허용목록만 사용하며, 확인 못한 주장은 "출처 미확인 — 일반 제빵 상식"으로 표기했다.

## 원인 (Causes)

| id | name | why | action | 구분 |
|---|---|---|---|---|
| `weak-gluten` | 글루텐 개발 부족 | 반죽을 충분히 치대지/접지 않으면 글루텐 네트워크가 약해 늘릴 때 잘 찢어지고, 가스를 가두는 힘이 약해 가장자리가 잘 안 부풉니다.[^1] | 반죽이 매끄럽고 탄력 있게 늘어날 때까지(윈도우페인 테스트) 치대거나, 오토리즈 시간을 늘려 보세요. | CORE 재사용 |
| `flat-tight-gluten` | 글루텐 과긴장(휴지 부족) | 반죽을 성형·치대는 과정에서 글루텐이 강하게 발달한 채 바로 늘리면, 글루텐 가닥이 긴장 상태라 계속 오그라들며 저항합니다.[^2] | 반죽이 저항하면 랩을 덮고 15분 휴지시킨 뒤 다시 늘려 보세요. 필요하면 여러 번 반복하세요.[^2] | 신규 |
| `underproof` | 발효 부족 | 가스가 충분히 안 만들어진 채 구우면 가장자리가 안 부풀고 속이 떡지게 됩니다.[^3] | 1차 발효를 늘려 반죽 부피가 확실히 커질 때까지 기다려 보세요. | CORE 재사용 |
| `overproof` | 과발효 | 발효가 과하면 반죽 구조가 약해져 굽는 중 불규칙하게 큰 기포(블리스터)가 생기고 신맛이 납니다.[^4] | 부피가 과도하게 커지기 전에 성형·굽기를 마쳐 보세요. | CORE 재사용 |
| `excess-hydration` | 수분 과다 | 반죽이 너무 질면 성형이 무너지고, 구울 때 가운데가 눌려 축축하고 떡진 바닥이 됩니다.[^5] | 레시피 수분을 5~10% 줄이거나 덧가루·오토리즈로 반죽 강도를 높여 보세요. | CORE 재사용 |
| `oven-too-hot` | 오븐 온도 너무 높음 | 토핑·가장자리가 속(가운데)보다 훨씬 빨리 익어, 겉은 타는데 속은 안 익습니다.[^6] | 오븐 온도를 낮추거나, 크러스트를 먼저 짧게 파베이크한 뒤 토핑을 올려 보세요.[^6] | CORE 재사용 |
| `flat-cold-baking-surface` | 베이킹 스톤/스틸 예열 부족 | 얇은 팬이나 덜 예열된 스톤은 열전달(전도)이 약해 바닥이 안 익고 창백하며 축축해집니다. 금속(스틸) > 스톤 > 얇은 팬 순으로 열용량이 높습니다.[^6] | 스톤/스틸을 최소 1시간 이상 예열하고, 가능하면 스틸을 사용해 보세요.[^6] | 신규 |
| `cold-environment` | 반죽·환경 온도 낮음 | 반죽·실내 온도가 낮으면 발효가 느려져 같은 시간에 덜 부풉니다.[^3] | 26~28℃ 환경에서 발효시켜 보세요. | CORE 재사용 |
| `flat-improper-stretching` | 성형 시 불균일하게 늘림 | 가운데부터 늘리거나 한쪽만 밀면 두께가 불균일해져 얇은 곳은 타거나 뚫리고, 두꺼운 곳은 안 익습니다. | 가장자리부터 고르게 눌러 펴고, 회전시키며 균일하게 늘려 보세요. | 신규 — 출처 미확인, 일반 제빵 상식 |

## 증상 (Symptoms)

| id | label | 구분 |
|---|---|---|
| `flat-no-oven-spring` | 가장자리(cornicione)가 안 부풀고 크래커처럼 평평함 | 신규 |
| `flat-dough-springback` | 늘리려 하면 반죽이 계속 오그라듦 | 신규 |
| `flat-torn-dough` | 늘리는 중 찢어지거나 구멍이 남 | 신규 |
| `flat-uneven-thickness` | 두께가 불균일함(가운데 두껍거나 특정 부분만 얇음) | 신규 |
| `burnt-outside-raw-inside` | 가장자리/토핑은 타는데 속(가운데)은 안 익음 | CORE 재사용 |
| `flat-soggy-bottom` | 바닥이 축축하고 안 바삭함 | 신규 |
| `pale` | 크러스트에 색이 안 남/창백함 | CORE 재사용 |
| `gummy` | 속(가운데)이 떡짐/설익음 | CORE 재사용 |
| `large-holes` | 표면에 불규칙한 큰 기포(블리스터)가 생김 | CORE 재사용 |
| `sour-smell` | 신맛/이상한 냄새 | CORE 재사용 |

## 매트릭스 (●●=2, ●=1, 빈칸=0)

| 원인 \ 증상 | 오븐스프링없음 | 스프링백 | 찢어짐 | 두께불균일 | 겉탐속덜익음 | 바닥축축 | 창백 | 속떡짐 | 큰기포 | 신맛 |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **weak-gluten** | ● | | ●● | | | | | ● | | |
| **flat-tight-gluten** | | ●● | | ●● | | | | | | |
| **underproof** | ●● | | | | | | | ●● | | |
| **overproof** | | | ● | | | | | | ●● | ●● |
| **excess-hydration** | | | | ● | | ●● | | ●● | | |
| **oven-too-hot** | | | | | ●● | | | | ● | |
| **flat-cold-baking-surface** | | | | | | ●● | ●● | | | |
| **cold-environment** | ● | | | | | | | ● | | |
| **flat-improper-stretching** | | | ● | ●● | | | | | | |

---

## 판별력 검증

### ❌ 단일 증상 "속 떡짐(gummy)" — FLAT

| 원인 | 점수 |
|---|:--:|
| underproof | 2 |
| excess-hydration | 2 |
| weak-gluten | 1 |
| cold-environment | 1 |

→ **2점 동점 2개(underproof, excess-hydration).** "속이 떡진다"만으로는 발효 부족인지 수분 과다인지 못 가른다.

### ✅ 조합 A: 오븐스프링없음 + 속떡짐 — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **underproof** | 2+2 | **4** 🥇 |
| excess-hydration | 0+2 | 2 |
| weak-gluten | 1+1 | 2 |
| cold-environment | 1+1 | 2 |

→ **underproof가 4로 나머지(2)를 압도.** "가장자리도 안 부풀고 속도 떡짐"은 수분 과다보다 발효 부족을 강하게 가리킨다 — excess-hydration은 오븐스프링없음과 연관이 없기 때문.

### ✅ 조합 B: 큰기포(불규칙 블리스터) + 신맛 — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **overproof** | 2+2 | **4** 🥇 |
| oven-too-hot | 1+0 | 1 |

→ **overproof가 압도적 1위.** 신맛(sour-smell)이 결정타 — 오븐 온도 문제엔 신맛이 없다.

### ✅ 조합 C: 스프링백 + 두께불균일 — PEAKED (근소한 마진)

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **flat-tight-gluten** | 2+2 | **4** 🥇 |
| flat-improper-stretching | 0+2 | 3 |
| excess-hydration | 0+1 | 1 |

→ flat-tight-gluten이 4 vs 3으로 근소하게 1위. 스프링백(반죽이 계속 오그라듦)이 결정타 — 성형 미숙(improper-stretching)만으로는 스프링백 증상이 생기지 않는다. 다만 마진이 좁아 판별 질문 후보로 남긴다.

---

## 결론

**PEAKED.** 서로 다른 축의 증상 2개만 조합해도 대부분 뾰족한 top-1이 나온다(조합 A·B). 다만 두 지점에서 동점/근접이 발생한다.

### 동점 원인쌍 → DiscriminatorQuestion 제안

1. **underproof ↔ excess-hydration** (단일 증상 "속떡짐"에서 2:2 동점)
   - `pair: ["underproof", "excess-hydration"]`
   - text: "성형 전 반죽이 손에 들러붙을 정도로 유독 질척거렸나요?"
   - yesFavors: `excess-hydration`, noFavors: `underproof`

2. **flat-tight-gluten ↔ flat-improper-stretching** (조합 C, 4 vs 3 근접)
   - `pair: ["flat-tight-gluten", "flat-improper-stretching"]`
   - text: "반죽을 늘릴 때 계속 다시 오그라들며 저항했나요?"
   - yesFavors: `flat-tight-gluten`, noFavors: `flat-improper-stretching`

### 동의어(SynonymEntry) 초안

```
{ symptomId: "flat-no-oven-spring", terms: ["가장자리가 안 부풀어요", "크러스트가 납작해요", "테두리가 안 살아요"] }
{ symptomId: "flat-dough-springback", terms: ["반죽이 자꾸 줄어들어요", "늘리면 다시 오므라들어요", "스트레치가 안 돼요"] }
{ symptomId: "flat-torn-dough", terms: ["반죽이 찢어져요", "구멍이 나요", "늘리다 뚫려요"] }
{ symptomId: "flat-uneven-thickness", terms: ["두께가 들쭉날쭉해요", "가운데만 두꺼워요", "한쪽만 얇아요"] }
{ symptomId: "flat-soggy-bottom", terms: ["바닥이 축축해요", "밑이 안 바삭해요", "바닥이 질척해요"] }
```

## 출처 각주

[^1]: 글루텐 개발과 오븐스프링/구조의 일반적 관계는 King Arthur Baking "Ask the Bread Coach: My dough isn't rising — what now?" (https://www.kingarthurbaking.com/blog/2023/03/23/ask-the-bread-coach-my-dough-isnt-rising-what-now) 및 일반 제빵 상식.
[^2]: King Arthur Baking, "Help! My pizza dough keeps shrinking back when I shape it." (https://www.kingarthurbaking.com/blog/2024/02/14/how-to-stretch-pizza-dough) — 글루텐이 과도하게 긴장되어 늘어나길 거부하며, 15분 휴지로 가닥이 이완된다는 내용.
[^3]: King Arthur Baking, "Ask the Bread Coach: My dough isn't rising — what now?" (https://www.kingarthurbaking.com/blog/2023/03/23/ask-the-bread-coach-my-dough-isnt-rising-what-now) — 반죽 온도 75~80°F 권장, 가정 제빵자는 만성적으로 발효 부족 상태라는 지적.
[^4]: 과발효 시 구조 약화·큰 기공·신맛은 식빵 매트릭스(symptom-cause-matrix.md)의 C3와 동일 메커니즘 — 출처 미확인(식빵 매트릭스에서도 "일반 제빵 상식"으로 표기됨), 일반 제빵 상식.
[^5]: 수분 과다로 인한 성형 실패·바닥 축축함은 출처 미확인 — 일반 제빵 상식(식빵 매트릭스 C8과 동일 메커니즘).
[^6]: King Arthur Baking, "How to make pizza crust crispy" (https://www.kingarthurbaking.com/blog/2024/01/12/pizza-crust-not-browning) — 베이킹 스틸이 스톤보다 열전도가 높고, 스틸/스톤은 최소 1시간 예열 필요, 파베이크로 크러스트를 먼저 세팅하는 기법 소개.
