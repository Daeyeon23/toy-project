# 증상×원인 매트릭스 — 베이글 (bagel)

> **분류:** 보일링 계열 (B8 배치) — 발효 후 굽기 전 알칼리 용액(베이킹소다+몰트시럽/설탕)에 데치는 공정이 핵심 축.
> `_taxonomy.md`의 CORE 코드를 재사용하고, 보일링 고유 실패만 `boil-` 접두사 신규 코드로 추가한다.
> 인용 출처는 `_taxonomy.md` 허용 목록만 사용하며, 확인 불가한 주장은 "출처 미확인 — 일반 제빵 상식"으로 표기한다.

## 원인 (Causes)

| id | name | why | action | 구분 |
|---|---|---|---|---|
| `underproof` | 발효 부족 | 가스 생성이 부족해 부피가 안 나고 속이 조밀·떡짐 [^1] | 따뜻한 곳에서 1차 발효를 늘리고, 정형 후 물에 띄웠을 때 뜨는지(float test)로 발효 완료를 확인하세요 [^1] | CORE 재사용 |
| `overproof` | 과발효 | 성형된 반죽이 과발효되면 데치는 물에 넣을 때 반죽이 힘을 잃어 주저앉고, 링 모양(구멍)이 뭉개진다 [^1] | 반죽이 2배 가까이 부풀기 전에 살짝 이르게 데치기 단계로 넘어가세요. 냉장(리타드) 발효로 속도를 늦추면 타이밍 맞추기 쉬워집니다 [^1] | CORE 재사용 |
| `weak-gluten` | 글루텐 발달 부족 (반죽/제분 문제) | 저단백 밀가루를 쓰거나 믹싱이 부족하면 글루텐망이 약해 베이글 특유의 쫄깃함이 안 나오고 빵롤처럼 푹신해지며, 데치는 중 구멍이 늘어져 막힌다 [^4] | 고단백(하이글루텐) 밀가루를 쓰고, 윈도우페인 테스트를 통과할 때까지 믹싱 시간을 늘려 보세요 [^4] | CORE 재사용 |
| `oven-too-cool` | 오븐 온도가 낮음/굽기 부족 | 열이 부족하면 굽는 시간이 늘어나 속이 조밀·떡지고 겉면 갈변이 약해진다 (식빵 매트릭스 c7과 동일 논리) [^5] | 오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요 | CORE 재사용 |
| `oven-too-hot` | 오븐 온도가 높음 | 토핑과 겉면이 속보다 훨씬 빨리 타버려 겉은 탔는데 속은 덜 구워진다 [^1] | 오븐 온도를 낮추고, 필요하면 굽는 중간에 은박지로 덮어 토핑을 보호하세요 [^1] | CORE 재사용 |
| `excess-hydration` | 수분 과다 | 수분이 많으면 반죽이 손에 심하게 달라붙어 링 형태를 유지하지 못하고, 데칠 때 모양이 퍼진다 | 레시피의 수분량을 줄이거나 덧가루로 반죽 강도를 높여 보세요 | CORE 재사용 |
| `boil-underboiled` | 보일링(데치기) 시간 부족 | 45초 이하로 짧게 데치면 크러스트가 얇고 airy(더 폭신)해지며 특유의 쫄깃함·색이 약해진다 [^1] | 표준 레시피 기준 앞뒤로 각 60초씩 데쳐 보세요 [^1] | 신규 (boil-) |
| `boil-overboiled` | 보일링(데치기) 시간 과다 | 90초 이상 오래 데치면 겉은 더 쫄깃해지지만 지나치면 표면이 물을 먹어 가죽처럼 질기고 주름진다 [^1][^6] | 90초를 넘기지 말고, 데친 뒤 표면 물기를 살짝 털어내고 바로 굽는 것을 권장합니다 [^1] | 신규 (boil-) |
| `boil-lye-issue` | 데치는 물의 베이킹소다·몰트(당류) 배합 문제 | 베이킹소다·몰트시럽 농도가 부족하면 마이야르 반응이 약해 표면 광택과 짙은 색이 안 나온다. 반대로 과다하거나 물이 식으면 색·풍미가 불균일해진다 [^1][^2] | 물 1테이블스푼당 베이킹소다 비율을 레시피대로 지키고, 배치 사이 물을 계속 강하게 끓는 상태로 유지하세요 [^1][^2] | 신규 (boil-) |

## 증상 (Symptoms)

| id | label | 구분 |
|---|---|---|
| `no-rise` | 전혀/거의 안 부풂 (오븐 스프링 없음) | CORE 재사용 |
| `collapsed` | 부풀다 주저앉음 / 데칠 때 찌그러짐 | CORE 재사용 |
| `gummy` | 속이 떡짐 / 질음 | CORE 재사용 |
| `pale` | 색이 안 남 / 창백함 | CORE 재사용 |
| `too-wet` | 반죽이 너무 질어 링 모양 성형 안 됨 | CORE 재사용 |
| `burnt-outside-raw-inside` | 겉은 탔는데 속은 덜 익음 | CORE 재사용 |
| `sour-smell` | 신맛 / 이상한(비누·쓴) 맛·냄새 | CORE 재사용 |
| `boil-thin-crust` | 크러스트가 얇고 안 쫄깃함 | 신규 (boil-) |
| `boil-tough-wrinkled` | 겉이 가죽처럼 질기고 표면이 주름짐 | 신규 (boil-) |
| `boil-no-shine` | 표면에 광택 없음 / 색이 칙칙함 | 신규 (boil-) |
| `bagel-hole-closed` | 가운데 구멍이 막히거나 눈에 띄게 좁아짐 | 신규 (bagel-) |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | no-rise | collapsed | gummy | pale | too-wet | burnt-outside-raw-inside | sour-smell | boil-thin-crust | boil-tough-wrinkled | boil-no-shine | bagel-hole-closed |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **underproof** | ●● |    | ●● |    |    |    |    |    |    |    |    |
| **overproof** | ●  | ●● |    |    |    |    |    |    |    |    | ●●  |
| **weak-gluten** | ●  | ●  | ●  |    |    |    |    |    |    |    | ●●  |
| **oven-too-cool** |    |    | ●● | ●● |    |    |    |    |    |    |    |
| **oven-too-hot** |    |    |    |    |    | ●● |    |    |    |    |    |
| **excess-hydration** |    | ●  |    |    | ●● |    |    |    |    |    | ●   |
| **boil-underboiled** |    |    |    | ●  |    |    |    | ●● |    |    |    |
| **boil-overboiled** |    |    | ●  |    |    |    |    |    | ●● |    |    |
| **boil-lye-issue** |    |    |    | ●  |    |    | ●  |    |    | ●● |    |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `gummy` (속 떡짐) — FLAT

| 원인 | 점수 |
|---|:--:|
| underproof | 2 |
| oven-too-cool | 2 |
| weak-gluten | 1 |
| boil-overboiled | 1 |

→ **underproof vs oven-too-cool 2점 동점.** "속이 떡지다"만으론 발효 문제인지 오븐 문제인지 못 가름 — 식빵 매트릭스의 결론과 동일한 패턴.

### ✅ 조합 A: `no-rise` + `gummy` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **underproof** | 2+2 | **4** 🥇 |
| oven-too-cool | 0+2 | 2 |
| weak-gluten | 1+1 | 2 |

→ **underproof가 4 vs 2로 뾰족하게 1위.** "안 부풂"이 결정타 — 오븐 온도 문제는 보통 어느 정도는 부푼 뒤 속만 떡지므로 no-rise가 약함.

### ✅ 조합 B: `collapsed` + `bagel-hole-closed` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **overproof** | 2+2 | **4** 🥇 |
| weak-gluten | 1+2 | 3 |
| excess-hydration | 1+1 | 2 |

→ **overproof 4 vs 3으로 근소하게 1위.** weak-gluten이 바로 다음이라 완전히 뾰족하진 않음 — 반죽이 "발효 후 힘을 잃었는지 vs 원래 글루텐이 약했는지"를 아래 Q1(윈도우페인 테스트)로 추가 구분한다.

### ✅ 조합 C: `boil-tough-wrinkled` + `gummy` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **boil-overboiled** | 2+1 | **3** 🥇 |
| underproof | 0+2 | 2 |
| oven-too-cool | 0+2 | 2 |

→ **boil-overboiled 1위.** "겉이 가죽처럼 질기고 주름짐"은 보일링 과다에만 강하게 연결되는 원인-특이적 증상.

### ⚠️ 조합 D (정직한 반례): `no-rise` + `bagel-hole-closed` — 준-FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| overproof | 1+2 | 3 |
| weak-gluten | 1+2 | 3 |
| underproof | 2+0 | 2 |

→ **overproof와 weak-gluten이 3점 동점.** 구멍이 막힌 게 "과발효로 반죽이 늘어져서"인지 "글루텐이 약해 형태를 못 잡아서"인지 증상만으론 못 가름 — 아래 Q1로 구분.

---

## 결론

**PEAKED — 단, 두 개의 동점 쌍이 확인되어 판별 질문이 필요하다.**

- ✅ `no-rise`+`gummy`(조합 A), `boil-tough-wrinkled`+`gummy`(조합 C)는 top-1이 2위와 명확히 벌어진다.
- ✅ `collapsed`+`bagel-hole-closed`(조합 B)도 top-1(overproof)이 존재하지만 2위(weak-gluten)와 4 vs 3으로 근소해 완전히 뾰족하진 않다 — `overproof`↔`weak-gluten`은 이 매트릭스에서 구조적으로 겹치는 원인 쌍임을 시사.
- ⚠️ `overproof` ↔ `weak-gluten`은 조합 D(`no-rise`+`bagel-hole-closed`)에서 3점 완전 동점까지 발생한다 — 아래 Q1로 구분 필요.
- ⚠️ `underproof` ↔ `oven-too-cool`은 단일 증상(`gummy`) 기준 동점 — 식빵 매트릭스의 이스트↔발효부족 패턴과 동일하게, "발효 vs 굽기" 단계 구분이 항상 어려운 지점으로 재확인됨.
- 참고: `weak-gluten` ↔ `excess-hydration`도 반죽 상태(찢어짐 vs 달라붙음)로만 구분되는 유사 원인이라 Q2를 별도로 마련해 둔다.

### 판별 질문 (DiscriminatorQuestion 초안)

| id | pair | 질문 | yes | no |
|---|---|---|---|---|
| `q-bagel-overproof-vs-weak-gluten` | `["overproof","weak-gluten"]` | "반죽을 얇게 늘렸을 때 매끄럽게 늘어나고 잘 찢어지지 않았나요? (윈도우페인 테스트)" | `overproof` | `weak-gluten` |
| `q-bagel-weak-gluten-vs-hydration` | `["weak-gluten","excess-hydration"]` | "반죽이 찢어지기보다 손에 심하게 달라붙어 다루기 어려웠나요?" | `excess-hydration` | `weak-gluten` |
| `q-bagel-underproof-vs-oven-cool` | `["underproof","oven-too-cool"]` | "1차 발효 때 반죽 부피가 거의 2배로 부풀었나요?" | `oven-too-cool` | `underproof` |

### 동의어 초안 (SynonymEntry)

| symptomId | terms |
|---|---|
| `boil-thin-crust` | "크러스트가 얇아요", "껍질이 안 쫄깃해요", "빵처럼 폭신해요" |
| `boil-tough-wrinkled` | "겉이 쭈글쭈글해요", "질겨서 씹기 힘들어요", "가죽 같아요" |
| `boil-no-shine` | "광이 안 나요", "색이 칙칙해요", "윤기가 없어요" |
| `bagel-hole-closed` | "구멍이 막혔어요", "링 모양이 없어졌어요", "가운데 구멍이 좁아요" |

---

## 각주 (출처)

[^1]: King Arthur Baking, "How to make your best bagels (from someone who's made hundreds)" (2022) — https://www.kingarthurbaking.com/blog/2022/02/23/how-to-make-your-best-bagels-tips — 데치는 시간(45초/60초/90초)에 따른 크러스트·텍스처 변화, 과발효 시 데칠 때 주저앉음, 토핑 탄 것 방지(포일), 성형 후 낱장 유산지에 얹어 데칠 때 꺼짐 방지.
[^2]: King Arthur Baking 검색 결과에 등장하는 베이글 레시피 계열(예: Water Bagels Recipe, Martin's Bagels Recipe, kingarthurbaking.com/recipes) — 데치는 물에 베이킹소다 1테이블스푼 + 몰트시럽을 넣어 짙은 색·광택의 크러스트를 만든다는 표준 공정. (개별 레시피 페이지는 직접 fetch로 재검증하지 않았으므로 정량적 비율은 "일반적 관행" 수준으로 취급)
[^4]: 하이글루텐 밀가루의 필요성과 보일링에 의한 표면 전분 gelatinization(오븐 스프링 억제 → 조밀하고 쫄깃한 속) — 출처 미확인, 여러 제빵 블로그(FoodCrumbles, Bagelworks 등)에서 공통적으로 설명하는 내용이나 `_taxonomy.md` 허용 목록에 속하지 않아 "일반 제빵 상식"으로 표기.
[^5]: 오븐 저온 → 갈변 약함·속 설익음 로직은 식빵 매트릭스(`symptom-cause-matrix.md`) C7과 동일 논리를 베이글에 적용한 것으로, 베이글 전용 1차 출처는 확인하지 못함 — 일반 제빵 상식.
[^6]: 데치기 과다 시 표면이 물을 흡수해 가죽처럼 질기고 주름진다는 서술은 King Arthur 기사의 "90초=더 쫄깃함" 서술을 연장 추론한 것이며, "주름짐(wrinkled)" 자체는 1차 출처로 확인하지 못함 — 일반 제빵 상식.
