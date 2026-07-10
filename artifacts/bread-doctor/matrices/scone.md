# 증상×원인 매트릭스 — 스콘 (scone)

> **목적:** 25종 확장 배치 B4(화학 팽창) 중 스콘. `_taxonomy.md`의 CORE 코드를 재사용하고,
> 이스트 발효가 없는 화학 팽창(베이킹파우더/소다) 특유의 실패 양상만 `quick-` 접두사로 신규 코드화한다.
> 스콘은 케이크형 반죽이 아니라 **저온 버터를 유지한 채 최소로 뭉치는 페이스트리형 반죽**이라, CORE의
> 발효 관련 코드(`yeast-dead`, `underproof`, `overproof`, starter 등)는 전혀 적용되지 않는다.

## 원인 (Causes)

| 코드 | 이름 | 구분 | why | action |
|---|---|---|---|---|
| `oven-too-hot` | 오븐 온도 너무 높음 | CORE 재사용 | 겉면이 속보다 빨리 익어 겉은 두껍고 딱딱해지거나 타는데 속은 설익습니다. | 오븐 온도를 레시피보다 10~15℃ 낮추고, 필요하면 굽는 중간에 은박지로 윗면을 덮으세요.[^1] |
| `oven-too-cool` | 오븐 온도 낮음/굽기 부족 | CORE 재사용 | 열이 부족해 속까지 고르게 익지 못해 축축하고 색이 약하게 나옵니다. | 오븐을 충분히 예열하고 온도계로 실제 온도를 확인한 뒤 굽는 시간을 늘려보세요.[^1] |
| `excess-hydration` | 수분 과다 | CORE 재사용 | 액체(우유·크림)가 레시피보다 많으면 반죽이 퍼지고 층을 잡지 못해 속이 조밀해집니다. | 액체량을 정확히 계량하고, 반죽이 심하게 질면 5~10% 줄여보세요.[^1] |
| `quick-leavener-dead` | 베이킹파우더 오래됨·비활성 | 신규 | 베이킹파우더가 오래됐거나 습기에 노출돼 활성을 잃으면 화학 반응이 충분히 일어나지 않아 부풀지 않습니다. | 뜨거운 물에 넣어 즉시 거품이 올라오는지 확인하고, 개봉 후 6개월 넘었으면 교체하세요.[^4] |
| `quick-leavener-excess` | 베이킹파우더/소다 과다·산-염기 불균형 | 신규 | 베이킹소다/파우더가 산(버터밀크 등)과 균형을 이루지 못할 만큼 많으면 남은 알칼리가 반응하지 못한 채 남아 비누·금속 같은 맛을 내고 기공을 거칠게 만듭니다. | 계량을 정확히 하고, 산성 재료(버터밀크·요거트) 비율을 레시피대로 맞추세요.[^4] |
| `quick-overmixed` | 과다 믹싱으로 글루텐 과발달 | 신규 | 액체를 넣은 뒤 오래 섞거나 반죽을 여러 번 뭉치면 글루텐이 과발달해 질겨지고 부풀림도 방해받습니다. | 액체를 넣은 뒤엔 가루가 보이지 않을 정도로만 가볍게, 최소한으로만 섞으세요.[^1][^2] |
| `quick-butter-melted` | 버터가 녹아 층이 안 생김 | 신규 | 버터가 자르기·굽기 전에 녹으면 반죽이 힘을 잃고 오븐에서 옆으로 퍼지며, 버터가 빠져나와 기름지고 층이 살지 않습니다. | 버터를 차갑게 유지하고, 자른 반죽을 굽기 전 냉장고/냉동실에서 15~30분 다시 차갑게 식히세요.[^1][^6] |
| `quick-overbaked` | 과굽기 | 신규 | 필요한 시간보다 오래 구우면 수분이 과도하게 빠져나가 마르고 부서지기 쉬워집니다. | 레시피 시간을 기준으로 옅은 황금색이 되면 바로 꺼내고, 오븐마다 다른 실제 온도를 확인하세요.[^1][^2] |
| `quick-under-hydrated` | 계량 오차로 수분 부족 | 신규 | 계량컵으로 밀가루를 눌러 담으면 필요량보다 많이 들어가거나 액체가 레시피보다 적으면, 반죽이 잘 뭉치지 않고 마르고 부서집니다. | 밀가루를 무게로 계량하고, 반죽이 심하게 부슬거리면 액체를 1테이블스푼씩 추가해보세요.[^2] |

## 증상 (Symptoms)

| 코드 | 라벨 | 구분 |
|---|---|---|
| `no-rise` | 전혀/거의 안 부풂 (볼륨 없음) | CORE 재사용 |
| `gummy` | 속이 떡짐 / 질음 | CORE 재사용 |
| `burnt-outside-raw-inside` | 겉은 탔는데 속은 덜 익음 | CORE 재사용 |
| `pale` | 색이 안 남 / 창백함 | CORE 재사용 |
| `thick-crust` | 겉이 두껍고 딱딱함 | CORE 재사용 |
| `too-wet` | 반죽이 너무 질어 성형 안 됨 | CORE 재사용 |
| `dry-crumbly` | 마르고 부슬부슬 부서짐 | 신규 |
| `tough-rubbery` | 질기고 고무처럼 씹힘 | 신규 |
| `no-layers-greasy` | 옆으로 퍼지고 층이 안 생기며 기름짐 | 신규 |
| `off-taste-soapy` | 비누/금속 같은 맛이나 쓴맛 | 신규 |
| `large-holes` | 기공이 너무 크고 불규칙 | CORE 재사용 (식빵에선 과발효 신호였으나 여기선 산-염기 불균형 신호) |

## 매트릭스 (●● = 2, ● = 1, 빈칸 = 0)

| 원인 \ 증상 | no-rise | gummy | burnt-outside-raw-inside | pale | thick-crust | too-wet | dry-crumbly | tough-rubbery | no-layers-greasy | off-taste-soapy | large-holes |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **oven-too-hot** | | | ●● | | ●● | | | | | | |
| **oven-too-cool** | | ●● | | ●● | | | | | | | |
| **excess-hydration** | | ●● | | | | ●● | | | ● | | |
| **quick-leavener-dead** | ●● | ● | | ● | | | | | | | |
| **quick-leavener-excess** | | | | | | | | | | ●● | ●● |
| **quick-overmixed** | ● | | | | | | ● | ●● | | | |
| **quick-butter-melted** | ● | | | | | | | | ●● | | |
| **quick-overbaked** | | | | | ● | | ●● | | | | |
| **quick-under-hydrated** | | | | | | | ●● | ● | | | |

---

## 판별력 검증

### ❌ 단일 증상 `dry-crumbly` (마르고 부서짐) — FLAT

| 원인 | 점수 |
|---|:--:|
| quick-overbaked | 2 |
| quick-under-hydrated | 2 |
| quick-overmixed | 1 |

→ **2점 동점.** "말라서 부서진다"만으론 과굽기와 계량 오차(수분 부족)를 구분 못함.

### ✅ 조합 A: `burnt-outside-raw-inside` + `thick-crust` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **oven-too-hot** | 2+2 | **4** 🥇 |
| quick-overbaked | 0+1 | 1 |

→ 압도적 1위. 오븐 온도는 다른 원인과 증상이 거의 안 겹쳐 매우 잘 분리됨(식빵 매트릭스와 동일한 패턴).[^1]

### ✅ 조합 B: `off-taste-soapy` + `large-holes` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **quick-leavener-excess** | 2+2 | **4** 🥇 |
| (나머지) | | 0 |

→ 완전히 독점적. 비누/금속맛(off-taste-soapy)은 화학 팽창제 과다에만 나타나는 원인-특이적 증상.[^4]

### ✅ 조합 C: `no-layers-greasy` + `no-rise` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **quick-butter-melted** | 2+1 | **3** 🥇 |
| quick-leavener-dead | 0+2 | 2 |
| excess-hydration | 1+0 | 1 |

→ butter-melted가 3점으로 1위. `no-rise` 하나만 보면 leavener-dead와 헷갈리지만, 기름지고 층이 없는 모양(no-layers-greasy)이 결정타.[^1][^6]

### ⚠️ 조합 D (정직한 반례): `no-rise` + `gummy` + `pale` — 준-FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| quick-leavener-dead | 2+1+1 | 4 |
| oven-too-cool | 0+2+2 | 4 |

→ **베이킹파우더 비활성과 오븐 저온이 4점 동점.** 둘 다 "안 부풀고 축축하고 색이 약함"으로 겉보기엔 똑같음 — 이건 매트릭스 결함이 아니라 도메인 사실(식빵 매트릭스의 이스트↔발효부족 동점과 같은 패턴).

---

## 결론

**PEAKED.** 서로 다른 축의 증상 2개만 조합해도 대부분 뾰족한 top-1이 나온다(조합 A·B·C). 특히 `off-taste-soapy`(비누맛)와 `no-layers-greasy`(퍼짐+기름짐)처럼 화학 팽창/버터 취급에 특화된 원인-특이적 증상이 강한 판별자로 작동한다. 다만 조합 D처럼 **"베이킹파우더가 죽었나 vs 오븐이 식었나"**는 증상만으로 못 가르는 정직한 동점이 존재하며, 이는 판별 질문으로 해소해야 한다.

### 판별 질문 (DiscriminatorQuestion) 제안

| id | pair | text | yesFavors | noFavors |
|---|---|---|---|---|
| `q-scone-leavenerdead-vs-ovencool` | [`quick-leavener-dead`, `oven-too-cool`] | 베이킹파우더를 뜨거운 물에 넣었을 때 바로 거품이 올라오나요? | `oven-too-cool` | `quick-leavener-dead` |
| `q-scone-overbaked-vs-underhydrated` | [`quick-overbaked`, `quick-under-hydrated`] | 레시피보다 색이 진해질 때까지 오래 구웠나요? | `quick-overbaked` | `quick-under-hydrated` |

### 동의어 (SynonymEntry) 초안

| symptomId | terms |
|---|---|
| `dry-crumbly` | 말라요, 부서져요, 푸석해요, 가루처럼 부서짐 |
| `tough-rubbery` | 질겨요, 고무 같아요, 딱딱하게 씹혀요 |
| `no-layers-greasy` | 기름져요, 층이 안 생겨요, 납작하게 퍼져요, 버터가 새어나와요 |
| `off-taste-soapy` | 비누맛이 나요, 금속맛이 나요, 쓴맛이 나요 |

---

## 인용 출처

- [^1]: King Arthur Baking, "Scone Baking" — https://www.kingarthurbaking.com/learn/guides/scone (오버믹싱→tough, 425°F 18~23분, 과굽기→건조 경고)
- [^2]: King Arthur Baking, "How do I prevent dry scones?" — https://www.kingarthurbaking.com/blog/2024/03/11/how-to-make-scones-moist (부피 계량 시 밀가루 과다, 오버믹싱, 과굽기가 건조의 원인)
- [^4]: King Arthur Baking, "What's the difference between baking soda and baking powder?" — https://www.kingarthurbaking.com/blog/2021/09/10/difference-between-baking-soda-and-baking-powder-substitutions (산-염기 반응 원리, 과다 시 쓴맛/비누맛, 유통기한 확인 권고)
- [^6]: America's Test Kitchen, "How to Make the Best Cheese Scones" — https://www.americastestkitchen.com/articles/8280-how-to-make-the-best-cheese-scones (버터 과다/차갑지 않은 버터가 반죽을 fragile·greasy하게 만든다는 설명)

**출처 미확인 — 일반 제빵 상식**: 스콘 반죽에서 "층(layers)"이 버터 조각이 굽는 동안 증기를 만들어 생긴다는 라미네이션 유사 원리 자체는 널리 퍼진 제빵 상식이며, 위 King Arthur/ATK 출처는 그 결과(버터가 녹으면 퍼지고 기름져짐)만 직접 확인했다.
