# 증상×원인 매트릭스 — 브리오슈 (brioche)

> **목적:** B3(enriched 단맛 반죽) 배치. 버터·설탕·달걀 비중이 높은 반죽 특유의 실패 양상을 CORE 코드에
> `enr-` 신규 코드를 더해 검증한다. 대상은 **버터 함량이 높은 클래식 브리오슈**(브리오슈 낭테르/무슬린 계열)로 고정.
>
> **주의:** 아래 연관도는 `_taxonomy.md` 허용 출처(King Arthur Baking, America's Test Kitchen 등)와
> 일반 제빵 상식을 바탕으로 한 *스케치*이며, 확인 못한 주장은 각주에 "출처 미확인"으로 명시했다. 단정적 진단 아님.

## 원인 (Causes)

| id | 구분 | name | why | action |
|---|---|---|---|---|
| `yeast-dead` | CORE 재사용 | 이스트 문제 | 이스트가 죽었거나 뜨거운 물에 사멸하면 발효 자체가 시작되지 않아 부풀지 않습니다. | 유통기한을 확인하고, 물(또는 우유) 온도를 40℃ 이하로 맞춘 뒤 예비 발효로 활성을 확인하세요. |
| `underproof` | CORE 재사용 | 발효 부족 | 이스트가 가스를 충분히 만들기 전에 구워, 부피가 안 나고 속이 떡지며 버터 무게를 이길 힘이 부족합니다. | 따뜻한 곳에서 반죽이 약 2배가 될 때까지 1차 발효를 늘려 보세요. |
| `overproof` | CORE 재사용 | 과발효 | 발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고, 기공이 커지며 신맛이 납니다. | 부피가 2~2.5배를 넘기기 전에 발효를 마치세요. |
| `weak-gluten` | CORE 재사용 | 반죽 개발 부족 (믹싱 부족) | 글루텐이 충분히 형성되지 않으면 버터·설탕의 무게를 가둘 힘이 약해 주저앉고 기공이 불규칙해집니다. | 반죽이 매끄럽고 윈도우페인 테스트를 통과할 때까지 믹싱 시간을 늘려 보세요.[^3] |
| `oven-too-hot` | CORE 재사용 | 오븐 온도 너무 높음 | 겉면이 속보다 훨씬 빨리 익어, 겉은 타거나 두껍고 딱딱해지는 동안 속까지 열이 전달되지 못합니다. | 오븐 온도를 레시피보다 10~15℃ 낮추고, 필요하면 은박지로 덮으세요. |
| `enr-butter-leak` | **신규** | 버터 분리/유출 (butter leak) | 반죽이나 버터가 너무 따뜻하면 믹싱 중 버터가 녹아 반죽에서 분리·유출되며, 반죽이 기름지고 줄무늬가 생깁니다.[^1] | 버터는 "cool room temperature(말랑하지만 찬)" 상태로 유지하고, 유출이 보이면 반죽을 15~20분 냉장 후 다시 믹싱하세요.[^1] |
| `enr-heavy-crumb` | **신규** | 레시피 자체의 구조적 한계 (버터·설탕·달걀 과다) | 버터·설탕·달걀 비율이 높은 레시피는 글루텐이 이 무게를 못 이겨, 잘 치대도 파운드케이크처럼 무겁고 조밀해질 수 있습니다.[^2] | 브레드 플라워(고단백 밀가루) 비중을 늘려 구조를 보강하거나, 버터를 나눠 넣는 시간을 늘려 보세요.[^3] |
| `enr-sugar-crust-browning` | **신규** | 설탕·유지로 인한 과도한 겉면 갈변 | 설탕·유지 함량이 높으면 오븐이 정상 온도여도 마이야르·캐러멜화가 빨리 일어나 겉이 먼저 진하게 타 보일 수 있습니다. | 굽는 중간부터 은박지로 덮어 갈변 속도를 늦추고, 속 온도(94~96℃)로 완성 여부를 확인하세요. |

## 증상 (Symptoms)

| id | 구분 | label |
|---|---|---|
| `no-rise` | CORE 재사용 | 전혀/거의 안 부풂 |
| `collapsed` | CORE 재사용 | 부풀다 주저앉음 |
| `gummy` | CORE 재사용 | 속이 떡짐 / 질음 |
| `burnt-outside-raw-inside` | CORE 재사용 | 겉은 탔는데 속은 덜 익음 |
| `large-holes` | CORE 재사용 | 기공이 너무 크고 불규칙 |
| `thick-crust` | CORE 재사용 | 겉이 두껍고 딱딱함 |
| `enr-greasy-streaky` | **신규** | 반죽/빵이 기름지고 버터 줄무늬가 보임 |
| `enr-dense-heavy` | **신규** | 파운드케이크처럼 무겁고 조밀함 (수분 문제인 `gummy`와 구분) |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | no-rise | collapsed | gummy | burnt-raw | large-holes | thick-crust | greasy-streaky | dense-heavy |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| `yeast-dead` | ●● |    | ●● |    |    |    |    |    |
| `underproof` | ●● |    | ●● |    |    |    |    | ●  |
| `overproof`  | ●  | ●● |    |    | ●● |    |    |    |
| `weak-gluten` |    | ●● | ●  |    | ●● |    |    | ●  |
| `oven-too-hot` |    |    |    | ●● |    | ●● |    |    |
| `enr-butter-leak` |    | ●  |    |    |    |    | ●● | ●●  |
| `enr-heavy-crumb` | ●  |    | ●  |    |    |    |    | ●●  |
| `enr-sugar-crust-browning` |    |    |    | ●  |    | ●  |    |    |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `enr-dense-heavy` (무겁고 조밀함) — FLAT

| 원인 | 점수 |
|---|:--:|
| `enr-butter-leak` | 2 |
| `enr-heavy-crumb` | 2 |
| `underproof` | 1 |
| `weak-gluten` | 1 |

→ **2점 2개 동점.** "무겁다"는 것만으로는 버터 유출/레시피 구조/발효 부족/믹싱 부족을 못 가른다. **단일 증상은 여기서도 쓸모없다.**

### ✅ 조합 A: `enr-dense-heavy` + `enr-greasy-streaky` + `collapsed` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **`enr-butter-leak`** | 2+2+1 | **5** 🥇 |
| `weak-gluten` | 1+0+2 | 3 |
| `enr-heavy-crumb` | 2+0+0 | 2 |
| `underproof` | 1+0+0 | 1 |

→ **`enr-butter-leak`이 5 vs 3으로 뾰족하게 1위.** `enr-greasy-streaky`(기름/줄무늬)가 결정타 — 버터 온도 문제에만 강하게 연결되는 원인-특이적 증상.

### ⚠️ 조합 B (정직한 근접 사례): `no-rise` + `gummy` + `enr-dense-heavy` — 준-FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| `underproof` | 2+2+1 | **5** 🥇 |
| `yeast-dead` | 2+2+0 | 4 |
| `enr-heavy-crumb` | 1+1+2 | 4 |

→ **1위(5)와 2·3위(4, 4)가 근접.** 식빵 매트릭스의 "이스트 vs 발효부족" 동점 문제가 브리오슈에도 그대로 남아 있고,
여기에 `enr-heavy-crumb`(레시피 자체의 버터 과다)까지 근접해 3원 경쟁이 된다. → 판별 질문 필요.

### ✅ 조합 C: `burnt-outside-raw-inside` + `thick-crust` — PEAKED (단, 판별 질문 권장)

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **`oven-too-hot`** | 2+2 | **4** 🥇 |
| `enr-sugar-crust-browning` | 1+1 | 2 |

→ 점수 차는 크지만(4 vs 2), 두 원인이 **정확히 같은 증상 쌍**을 공유한다. "오븐 자체가 뜨거운가" vs
"설탕 때문에 정상 오븐에서도 빨리 타 보이는가"는 증상만으론 완전히 못 가르므로 판별 질문을 둔다.

---

## 결론

**PEAKED — 단, 두 개의 원인쌍에 판별 질문이 필요하다.**

- ✅ `enr-greasy-streaky`(버터 유출) 같은 **enriched 반죽 특이적 증상**이 조합에 들어가면 매우 뾰족하게 갈린다(조합 A).
- ✅ 과발효 계열(overproof/large-holes)은 오븐 온도 계열과 마찬가지로 여전히 잘 분리된다.
- ⚠️ 이스트 문제 ↔ 발효 부족 ↔ 레시피 구조(버터 과다) 3자 근접(조합 B)과, 오븐 고온 ↔ 설탕 갈변(조합 C)은
  증상만으론 깔끔히 못 가른다 — **enriched 반죽의 태생적 결함**(버터/설탕이 다른 실패의 증상을 흉내낸다).

### DiscriminatorQuestion 제안

| id | pair | text | yesFavors | noFavors |
|---|---|---|---|---|
| `q-yeast-vs-underproof` | [`yeast-dead`, `underproof`] | 1차 발효 때 반죽이 부풀긴 했나요? (CORE 재사용) | `underproof` | `yeast-dead` |
| `q-underproof-vs-heavy-crumb` | [`underproof`, `enr-heavy-crumb`] | 버터를 레시피보다 많이 넣었거나, 원래 버터 비율이 아주 높은 레시피였나요? | `enr-heavy-crumb` | `underproof` |
| `q-ovenhot-vs-sugarbrowning` | [`oven-too-hot`, `enr-sugar-crust-browning`] | 설탕이 적은 다른 빵(식빵 등)도 이 오븐에서 유독 빨리 타나요? | `oven-too-hot` | `enr-sugar-crust-browning` |

### SynonymEntry 초안

| symptomId | terms |
|---|---|
| `enr-greasy-streaky` | 기름져요, 버터가 새어나와요, 번들거려요, 줄무늬가 생겨요 |
| `enr-dense-heavy` | 너무 무거워요, 파운드케이크 같아요, 촘촘해요 |

(`no-rise`, `gummy`, `collapsed` 등 CORE 증상의 동의어는 `lib/bread-doctor/knowledge-base.ts`의 `SYNONYMS`를 그대로 재사용한다.)

---

## 각주 (인용 출처)

[^1]: King Arthur Baking, "How to master brioche and unlock a whole world of baking" (maritozzi), 2022-09-01. https://www.kingarthurbaking.com/blog/2022/09/01/how-to-make-brioche-maritozzi — "If the butter is too soft to begin with it may melt, causing it to separate in the dough and make it greasy." 버터는 "cool room temperature"를 유지해야 하며, 유출 시 반죽을 15~20분 냉장 후 재믹싱할 것을 권장.

[^2]: America's Test Kitchen, "No-Knead Brioche". https://www.americastestkitchen.com/recipes/7333-no-knead-brioche — "Well-made brioche manages to avoid the density of a pound cake... If the butter isn't added slowly, the dough can break into a greasy mess." 버터를 천천히 넣지 않으면 반죽이 기름지게 분리되고, 잘못하면 파운드케이크처럼 무거워질 위험을 서술.

[^3]: America's Test Kitchen, "Brioche Hamburger Buns". https://www.americastestkitchen.com/recipes/11876-brioche-hamburger-buns — 버터가 많이 든 반죽의 구조를 잡기 위해 단백질 함량이 높은 브레드 플라워를 사용한다고 서술("bread flour to build structure in butter-laden dough, since fat shortens... gluten strands").

**출처 미확인 표기:** `enr-sugar-crust-browning`의 정확한 갈변 메커니즘(마이야르/캐러멜화 속도)과 속 온도 기준(94~96℃)은 위 출처에서 직접 확인되지 않았으므로 "출처 미확인 — 일반 제빵 상식"으로 표기한다.
