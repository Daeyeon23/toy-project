# 증상×원인 매트릭스 — 프레첼 (pretzel)

> **분류:** 보일링 계열 (B8 배치) — 발효 후 굽기 전 강알칼리 용액(라이/lye, 또는 대체용 베이킹소다)에 짧게 담그는 공정이 핵심 축.
> `_taxonomy.md`의 CORE 코드를 재사용하고, 데치기(dip) 고유 실패만 `boil-` 접두사 신규 코드로 추가한다.
> `boil-underboiled`/`boil-overboiled`/`boil-lye-issue`는 베이글(`bagel.md`)과 동일한 id를 재사용하되, 프레첼 맥락에 맞는 `why`/`action`을 별도로 기술한다.
> 인용 출처는 `_taxonomy.md` 허용 목록만 사용하며, 확인 불가한 주장은 "출처 미확인 — 일반 제빵 상식"으로 표기한다.

## 원인 (Causes)

| id | name | why | action | 구분 |
|---|---|---|---|---|
| `underproof` | 발효 부족 | 가스 생성이 부족해 부피가 안 나고 속이 조밀·떡짐 (식빵 c2와 동일 논리) | 따뜻한 곳에서 1차 발효를 늘리고, 반죽이 부드럽게 부풀 때까지 기다리세요 | CORE 재사용 |
| `overproof` | 과발효 | 과발효된 반죽은 담글 때 힘을 잃어 주저앉고, 매듭·팔 모양이 뭉개진다 (식빵 c3와 동일 논리) | 반죽이 2배 가까이 부풀기 전에 성형·냉장을 마쳐 타이밍을 당기세요 | CORE 재사용 |
| `weak-gluten` | 글루텐 발달 부족 | 글루텐이 약하면 프레첼 특유의 매듭/팔 모양을 유지하지 못해 데칠 때·굽는 중 형태가 늘어지고 무너진다 | 윈도우페인 테스트를 통과할 때까지 믹싱 시간을 늘리고, 성형 전 충분히 휴지시키세요 | CORE 재사용 |
| `oven-too-hot` | 오븐 온도가 높음 | 겉면이 속보다 훨씬 빨리 익어 겉은 탔는데 속은 덜 구워진다 (식빵 c6와 동일 논리) | 오븐 온도를 낮추고 굽는 시간을 조절하세요 | CORE 재사용 |
| `oven-too-cool` | 오븐 온도가 낮음/굽기 부족 | 열이 부족해 속이 조밀·떡지고 갈변이 약해진다 (식빵 c7와 동일 논리) | 오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요 | CORE 재사용 |
| `boil-underboiled` | 담금(dip) 시간 부족 | 라이/베이킹소다 용액에 담그는 시간이 표준보다 짧으면 마이야르 반응이 부족해 색이 연하고 광택이 약하다 [^1][^2] | 라이는 10~15초, 베이킹소다는 약 1분 기준으로 담그는 시간을 지켜 보세요 [^2] | 신규 (boil-), bagel.md와 id 공유 |
| `boil-overboiled` | 담금(dip) 시간 과다 | 필요 이상 오래 담그면 알칼리가 표면에 과도하게 반응해 거칠고 물집진 질감과 쓴맛이 날 수 있다 [^3] | 레시피 권장 시간(라이 10~15초 등)을 넘기지 않도록 타이머를 사용하세요 | 신규 (boil-), bagel.md와 id 공유 |
| `boil-lye-issue` | 알칼리 용액 농도/종류 문제 | 라이 대신 약한 베이킹소다를 쓰거나 농도가 부족하면 색이 갈색에 그치고 광택·특유의 풍미가 약해진다. 반대로 농도가 너무 강하면 쓴맛·비누 맛이 날 수 있다 [^1][^3] | 라이 사용 시 3~4%(중량 기준) 농도를 지키고, 베이킹소다로 대체할 경우 그 한계(진한 마호가니색은 못 낸다는 점)를 감안하세요 [^1] | 신규 (boil-), bagel.md와 id 공유 |

## 증상 (Symptoms)

| id | label | 구분 |
|---|---|---|
| `no-rise` | 전혀/거의 안 부풂 (오븐 스프링 없음) | CORE 재사용 |
| `collapsed` | 부풀다 주저앉음 / 담글 때 찌그러짐 | CORE 재사용 |
| `gummy` | 속이 떡짐 / 질음 | CORE 재사용 |
| `pale` | 색이 안 남 / 창백함 | CORE 재사용 |
| `burnt-outside-raw-inside` | 겉은 탔는데 속은 덜 익음 | CORE 재사용 |
| `sour-smell` | 신맛 / 이상한 냄새 | CORE 재사용 |
| `pretzel-no-sheen` | 표면에 윤기 없음 / 색이 연한 갈색에 그침 | 신규 (pretzel-) |
| `pretzel-bitter-taste` | 쓴맛·비누 같은 이상한 맛 | 신규 (pretzel-) |
| `pretzel-blistered-rough` | 표면이 거칠고 물집처럼 일어남 | 신규 (pretzel-) |
| `pretzel-shape-flattened` | 담근 후 매듭/팔 모양이 눌리거나 무너짐 | 신규 (pretzel-) |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | no-rise | collapsed | gummy | pale | burnt-outside-raw-inside | sour-smell | pretzel-no-sheen | pretzel-bitter-taste | pretzel-blistered-rough | pretzel-shape-flattened |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **underproof** | ●● |    | ●● |    |    |    |    |    |    |    |
| **overproof** |    | ●● |    |    |    | ●  |    |    |    | ●   |
| **weak-gluten** |    | ●  | ●  |    |    |    |    |    |    | ●●  |
| **oven-too-hot** |    |    |    |    | ●● |    |    |    |    |    |
| **oven-too-cool** |    |    | ●● | ●● |    |    |    |    |    |    |
| **boil-underboiled** |    |    |    | ●● |    |    | ●● |    |    |    |
| **boil-overboiled** |    |    |    |    |    |    |    | ●  | ●●  |    |
| **boil-lye-issue** |    |    |    | ●  |    |    | ●  | ●●  | ●   |    |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `gummy` (속 떡짐) — FLAT

| 원인 | 점수 |
|---|:--:|
| underproof | 2 |
| oven-too-cool | 2 |
| weak-gluten | 1 |

→ **underproof vs oven-too-cool 2점 동점.** 베이글과 동일한 패턴 — "발효 문제 vs 굽기 문제"는 단일 증상으론 못 가름.

### ✅ 조합 A: `no-rise` + `gummy` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **underproof** | 2+2 | **4** 🥇 |
| oven-too-cool | 0+2 | 2 |
| weak-gluten | 0+1 | 1 |

→ **underproof가 4 vs 2로 뾰족하게 1위.**

### ✅ 조합 B: `pretzel-no-sheen` + `pale` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **boil-underboiled** | 2+2 | **4** 🥇 |
| boil-lye-issue | 1+1 | 2 |
| oven-too-cool | 0+2 | 2 |

→ **boil-underboiled 1위.** "윤기 없음+창백함" 조합은 담금 시간 부족을 가장 강하게 가리킨다.

### ✅ 조합 C: `burnt-outside-raw-inside` (단독) — PEAKED

| 원인 | 점수 |
|---|:--:|
| **oven-too-hot** | **2** 🥇 |
| (나머지) | 0 |

→ 압도적. 이 증상은 매트릭스 내에서 오븐 고온에만 연결돼 다른 원인과 전혀 겹치지 않는다 — 식빵 매트릭스의 "오븐 고온" 조합과 동일한 성격.

### ⚠️ 조합 D (정직한 반례): `pretzel-blistered-rough` + `pretzel-bitter-taste` — 준-FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| boil-overboiled | 2+1 | 3 |
| boil-lye-issue | 1+2 | 3 |

→ **boil-overboiled와 boil-lye-issue가 3점 동점.** "표면이 거칠고 쓴맛이 난다"만으론 "너무 오래 담갔는지" vs "용액이 너무 진했는지"를 못 가름 — 아래 Q2로 구분.

---

## 결론

**PEAKED — 단, 두 개의 동점 쌍이 확인되어 판별 질문이 필요하다.**

- ✅ `no-rise`+`gummy`(조합 A), `pretzel-no-sheen`+`pale`(조합 B), `burnt-outside-raw-inside` 단독(조합 C) 모두 top-1이 명확히 벌어진다.
- ⚠️ `boil-overboiled` ↔ `boil-lye-issue`(조합 D)는 "담근 시간"과 "용액 농도"라는 서로 다른 원인이 겉으로 비슷한 증상(거칠고 쓴맛)을 만들어 증상만으론 근접/동점.
- ⚠️ `underproof` ↔ `oven-too-cool`은 단일 증상(`gummy`) 기준 동점 — 베이글·식빵과 동일하게 발효 단계와 굽기 단계 구분은 항상 어려운 지점.
- ⚠️ `overproof`(2+1=3) ↔ `weak-gluten`(1+2=3)도 `collapsed`+`pretzel-shape-flattened` 조합에서 3점 동점 — "매듭이 뭉개진 게 과발효 때문인지 글루텐이 약해서인지"는 이 조합만으론 못 가름 (아래 Q1로 구분).

### 판별 질문 (DiscriminatorQuestion 초안)

| id | pair | 질문 | yes | no |
|---|---|---|---|---|
| `q-pretzel-overproof-vs-weak-gluten` | `["overproof","weak-gluten"]` | "반죽을 얇게 늘렸을 때 매끄럽게 늘어나고 잘 찢어지지 않았나요? (윈도우페인 테스트)" | `overproof` | `weak-gluten` |
| `q-pretzel-overboiled-vs-lye-issue` | `["boil-overboiled","boil-lye-issue"]` | "담근 시간이 레시피 권장 시간(라이 10~15초 등)보다 길었나요?" | `boil-overboiled` | `boil-lye-issue` |
| `q-pretzel-underproof-vs-oven-cool` | `["underproof","oven-too-cool"]` | "1차 발효 때 반죽 부피가 부드럽게 부풀었나요?" | `oven-too-cool` | `underproof` |

### 동의어 초안 (SynonymEntry)

| symptomId | terms |
|---|---|
| `pretzel-no-sheen` | "광이 안 나요", "색이 연해요", "윤기가 없어요" |
| `pretzel-bitter-taste` | "쓴맛이 나요", "비누 맛 같아요", "맛이 이상해요" |
| `pretzel-blistered-rough` | "표면이 거칠어요", "물집처럼 일어나요", "겉이 울퉁불퉁해요" |
| `pretzel-shape-flattened` | "모양이 눌렸어요", "팔 부분이 무너져요", "매듭이 풀려요" |

---

## 각주 (출처)

[^1]: King Arthur Baking, "Making pretzels at home" (2018) — https://www.kingarthurbaking.com/blog/2018/10/15/making-pretzels-at-home — 라이(3~4% 용액, 10~15초)와 베이킹소다(6컵 물+2테이블스푼, 1분) 배합·담금 시간 비교, 라이는 마호가니색·광택·강한 프레첼 향을, 베이킹소다는 그보다 약한 갈색·약한 광택·약한 풍미를 낸다는 서술.
[^2]: America's Test Kitchen / Cook's Illustrated, "How to Make German Pretzels Using Food-Grade Lye" — https://www.americastestkitchen.com/articles/7706-make-pretzels-with-lye — 라이 15초+고온 굽기가 짙은 마호가니색·광택·짠맛을 만든다는 설명, 라이가 마이야르 반응을 가속하고 표면 전분을 겔화해 매끄럽고 광택 있는 크러스트를 만든다는 서술.
[^3]: 담금 시간 과다·농도 과다 시 쓴맛/비누맛·거친 물집 질감이 난다는 서술은 1차 출처(King Arthur/ATK 기사 본문)에서 직접 확인하지 못했다 — 출처 미확인, 일반 제빵 상식(여러 홈베이킹 블로그에서 공통적으로 언급되는 내용이나 `_taxonomy.md` 허용 목록 밖이라 각주로만 표기).
[^4]: King Arthur Baking, "A baker's tips for safely working with lye" (2021) — https://www.kingarthurbaking.com/blog/2021/05/20/a-bakers-tips-for-safely-working-with-lye — 라이 용액이 통상 3~4%(중량 기준) 농도로 희석되어 사용된다는 확인. 이 글은 안전 취급 절차 중심이라 농도별 결과 차이는 다루지 않음.
