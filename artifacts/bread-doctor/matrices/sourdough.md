# 증상×원인 매트릭스 스케치 — 사워도우 (sourdough)

> **목적:** 25종 확장 배치 B1. 사워도우는 이스트 대신 천연 발효 스타터(리바인/르방)를 쓰므로,
> CORE 발효·오븐·수분 코드를 최대한 재사용하고, "스타터 자체의 상태"에서 오는 실패만 신규 코드로 추가한다.
> `_taxonomy.md`의 CORE 원인/증상 재사용 규칙을 따른다. 단정적 진단 아님 — 종이 검증 스케치.

## 원인 (Causes)

| id | name | 구분 | why | action |
|---|---|---|---|---|
| `starter-inactive` | 스타터 활성 부족/미성숙 | 신규 | 스타터가 아직 어리거나(2~3주 미만) 며칠간 먹이를 못 받아 활성이 약하면, 반죽에 넣어도 가스 생산력이 부족해 거의 부풀지 않고 속이 눅눅하게 남는다.[^1][^2] | 스타터를 먹인 뒤 부피가 6~8시간 안에 2배가 되는지 확인하고(따뜻한 물 80~90°F로 먹이기), 안정적으로 그 리듬이 나올 때까지 반죽에 쓰지 않는다.[^2] |
| `starter-overripe` | 스타터 과숙성/과활성 | 신규 | 스타터를 정점(피크)을 지나 방치했거나 너무 공격적으로(1:1:1 이상) 먹여 과도하게 활발해지면, 반죽이 예상보다 훨씬 빨리 과발효되어 구조를 잃고 주저앉는다.[^3] | 스타터를 정점(부피가 최대이고 표면이 살짝 볼록한 시점) 근처에서 사용하고, 먹이는 비율에서 스타터 비중을 줄여(예: 1:2:2) 발효 속도를 늦춘다.[^3] |
| `underproof` | 발효 부족 (CORE) | 재사용 | 스타터는 정상이어도 1차·2차 발효 시간이 부족하면 가스가 덜 차 부피가 안 나고 속이 조밀·떡지게 된다.[^4] | 손가락으로 눌렀을 때 자국이 서서히(3~5초) 돌아올 때까지 발효 시간을 늘린다(poke test).[^4] |
| `overproof` | 과발효 (CORE) | 재사용 | 발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고, 기공이 커지며 신맛이 강해진다.[^4] | 손가락 자국이 거의 안 돌아오고 반죽이 눌렸을 때 살짝 무너지는 느낌이면 바로 굽는다.[^4] |
| `cold-environment` | 저온 환경 (CORE) | 재사용 | 반죽·실내 온도가 낮으면 자연 발효 속도가 크게 느려져 같은 시간에 덜 부푼다. | 오븐 발효 기능이나 26~28℃ 환경에서 발효시킨다. |
| `weak-gluten` | 반죽 개발 부족/글루텐 약함 (CORE) | 재사용 | 사워도우는 대개 고수분 반죽이라 스트레치&폴드 등으로 글루텐을 충분히 세우지 않으면 가스를 가두지 못해 주저앉고 옆으로 퍼진다. | 벌크 발효 중 30분 간격으로 스트레치&폴드를 3~4회 반복해 반죽 장력을 세운다. |
| `excess-hydration` | 수분 과다 (CORE) | 재사용 | 레시피 대비 수분이 많으면(특히 초보자가 고수분 레시피를 그대로 따라할 때) 반죽이 흘러내려 성형이 무너지고 굽는 중 옆으로 퍼진다. | 수분을 5~10% 낮추거나, 반죽 강도가 오를 때까지 폴딩 횟수를 늘린다. |
| `oven-too-hot` | 오븐 온도 너무 높음 (CORE) | 재사용 | 겉면이 속보다 훨씬 빨리 익어 겉은 타거나 두꺼워지는 동안 속까지 열이 전달되지 못한다. | 오븐 온도를 레시피보다 10~15℃ 낮추고 굽는 중간에 은박지로 덮는다. |
| `oven-too-cool` | 오븐 온도 낮음/굽기 부족 (CORE) | 재사용 | 열이 부족하거나 너무 일찍 꺼내면(내부 온도 미달) 속이 설익어 떡지고 색이 약해진다.[^5] | 내부 온도가 최소 205~210°F(사워도우는 일반 식빵보다 조금 더 높게)에 도달할 때까지 굽고, 굽고 나서도 완전히 식을 때까지(최소 1시간, 두꺼운 캉파뉴는 그 이상) 자르지 않는다.[^5] |

## 증상 (Symptoms)

| id | label | 구분 |
|---|---|---|
| `no-rise` | 전혀/거의 안 부풂 | CORE |
| `collapsed` | 부풀다 주저앉음 | CORE |
| `gummy` | 속이 떡짐/질음 | CORE |
| `burnt-outside-raw-inside` | 겉은 탔는데 속은 덜 익음 | CORE |
| `pale` | 색이 안 남/창백함 | CORE |
| `blowout` | 옆구리·표면이 터짐 | CORE |
| `large-holes` | 기공이 너무 크고 불규칙 | CORE |
| `too-wet` | 반죽이 너무 질어 성형 안 됨 | CORE |
| `thick-crust` | 겉이 두껍고 딱딱함 | CORE |
| `sour-smell` | 신맛/이상한 냄새 | CORE |
| `spread-flat-disc` | 오븐에 넣을 때 반죽이 옆으로 퍼져 팬케이크처럼 됨 | 신규 |
| `bland-flavor` | 신맛/풍미가 거의 안 남 | 신규 |

## 매트릭스 (●● = 강한 연관 2점, ● = 약한 연관 1점, 빈칸 = 0)

| 원인 \ 증상 | no-rise | collapsed | gummy | burnt-raw | pale | blowout | large-holes | too-wet | thick-crust | sour-smell | spread-flat | bland |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **starter-inactive** | ●● | | ●● | | | | | | | | ● | ●● |
| **starter-overripe** | | ●● | | | | | ● | | | ●● | ●● | |
| **underproof** | ●● | | ●● | | | ● | | | | | | |
| **overproof** | | ●● | | | | | ●● | | | ● | ● | |
| **cold-environment** | ●● | | ● | | | | | | | | | |
| **weak-gluten** | | ●● | | | | | ●● | ● | | | ●● | |
| **excess-hydration** | | | ●● | | | | ● | ●● | | | ●● | |
| **oven-too-hot** | | | | ●● | | ● | | | ●● | | | |
| **oven-too-cool** | | | ●● | | ●● | | | | | | | |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `no-rise` (안 부풂) — FLAT

| 원인 | 점수 |
|---|:--:|
| starter-inactive | 2 |
| underproof | 2 |
| cold-environment | 2 |
| weak-gluten | 0 |

→ **2점 3개 동점.** 단일 증상만으로는 스타터 문제/타이밍 문제/온도 문제를 구분 못 함 (식빵 MBT#1과 동일한 결론).

### ✅ 조합 A: `no-rise` + `gummy` + `bland-flavor` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **starter-inactive** | 2+2+2 | **6** 🥇 |
| underproof | 2+2+0 | 4 |
| cold-environment | 2+1+0 | 3 |

→ **starter-inactive가 6 vs 4로 뾰족하게 1위.** `bland-flavor`(신맛이 안 남)가 결정타 — 타이밍/온도 문제는 발효가 조금이라도 진행돼 약한 산미가 나지만, 스타터 자체가 미성숙하면 산도 형성 전이라 밋밋하다.[^1][^2]

### ⚠️ 조합 B (정직한 반례): `collapsed` + `large-holes` + `sour-smell` — 준-FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| overproof | 2+2+1 | 5 |
| starter-overripe | 2+1+2 | 5 |
| weak-gluten | 2+2+0 | 4 |

→ **overproof와 starter-overripe가 5점 동점.** 둘 다 "과발효 결과"라 증상이 거의 겹친다 — 도메인 사실(스타터가 과숙성이면 결국 반죽도 과발효된다). 판별 질문이 필요하다.

### ✅ 조합 C: `too-wet` + `spread-flat-disc` + `gummy` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **excess-hydration** | 2+2+2 | **6** 🥇 |
| weak-gluten | 1+2+0 | 3 |
| starter-inactive | 0+1+2 | 3 |

→ **excess-hydration이 6 vs 3으로 압도적 1위.**

### ✅ 조합 D: `burnt-outside-raw-inside` + `thick-crust` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **oven-too-hot** | 2+2 | **4** 🥇 |
| (나머지) | | 0 |

→ 절대적으로 압도적. 오븐 고온 문제는 다른 원인과 거의 안 겹친다.

---

## 결론

**PEAKED — 단, 스타터 과숙성↔과발효 쌍은 판별 질문이 필요하다.**

- ✅ 조합 A·C·D는 뾰족한 top-1이 나온다. 특히 `bland-flavor`/`spread-flat-disc` 같은 사워도우 고유 증상이 강력한 판별자다.
- ⚠️ 조합 B: **starter-overripe(스타터 자체 과숙성)와 overproof(반죽 자체 과발효)는 증상만으로 거의 안 갈린다.** 이는 매트릭스 결함이 아니라 도메인 사실 — 과숙성 스타터를 쓰면 반죽도 결국 과발효되기 때문.

### 판별 질문 (DiscriminatorQuestion 초안)

```ts
{
  id: "q-starter-inactive-vs-underproof",
  pair: ["starter-inactive", "underproof"],
  text: "스타터 자체가 반죽에 넣기 전 잘 부풀어 있었나요(거품 있고 향긋한 산미)?",
  yesFavors: "underproof",   // 스타터는 괜찮았음 → 반죽 발효 시간/온도가 문제
  noFavors: "starter-inactive", // 스타터 자체가 밋밋/안 부풂 → 스타터 문제
}
{
  id: "q-starter-overripe-vs-overproof",
  pair: ["starter-overripe", "overproof"],
  text: "반죽에 섞기 전 스타터 자체가 이미 정점을 지나 가라앉고 시큼한 냄새가 강했나요?",
  yesFavors: "starter-overripe",
  noFavors: "overproof", // 스타터는 정상이었지만 반죽 발효(벌크/2차)를 너무 길게 함
}
```

### 동의어 (SynonymEntry 초안)

```ts
{ symptomId: "no-rise", terms: ["안부풀어요", "볼륨이 없어요", "판판해요"] },
{ symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요", "가운데가 내려앉아요"] },
{ symptomId: "gummy", terms: ["떡져요", "속이 안 익은 느낌", "찐득해요"] },
{ symptomId: "burnt-outside-raw-inside", terms: ["겉만 타요", "속이 안 익어요"] },
{ symptomId: "pale", terms: ["색이 안 나요", "창백해요"] },
{ symptomId: "blowout", terms: ["옆이 터졌어요", "갈라져요"] },
{ symptomId: "large-holes", terms: ["기공이 커요", "구멍이 불규칙해요"] },
{ symptomId: "too-wet", terms: ["반죽이 너무 질어요", "손에 다 붙어요", "성형이 안 돼요"] },
{ symptomId: "thick-crust", terms: ["껍질이 두꺼워요", "겉이 딱딱해요"] },
{ symptomId: "sour-smell", terms: ["너무 시어요", "식초 냄새 나요"] },
{ symptomId: "spread-flat-disc", terms: ["옆으로 퍼져요", "팬케이크처럼 돼요", "반죽이 흘러요"] },
{ symptomId: "bland-flavor", terms: ["신맛이 안 나요", "밍밍해요", "사워도우 맛이 안 나요"] },
```

---

## 각주 (출처)

[^1]: King Arthur Baking, ["Sourdough starter troubleshooting"](https://www.kingarthurbaking.com/blog/2018/03/09/sourdough-starter-troubleshooting-2) — 방치·먹이 부족 시 스타터가 약해지는 신호(hooch 등).
[^2]: King Arthur Baking, ["Why is my sourdough starter not rising?"](https://www.kingarthurbaking.com/blog/2024/12/19/why-is-my-sourdough-starter-not-rising) — 저온·방치로 스타터가 비활성화되는 원인과 26~32℃(80~90°F) 물로 되살리는 법.
[^3]: King Arthur Baking, ["Ask the Bread Coach: Can sourdough starter be too active?"](https://www.kingarthurbaking.com/blog/2021/07/29/bread-coach-can-sourdough-starter-be-too-active) — 과도하게 활발한 스타터가 반죽을 급속 발효시켜 부피가 부족한(낮은) 완제품을 만드는 사례와 먹이 비율 조정법.
[^4]: King Arthur Baking, ["How to tell if bread dough has risen enough"](https://www.kingarthurbaking.com/blog/2022/08/22/how-to-tell-if-bread-dough-has-risen-enough) — poke test로 본 underproof(자국이 빨리 돌아옴) vs overproof(반죽이 힘없이 무너짐), 타이밍이 안 맞으면 굽고 난 뒤 "collapse and have a dense, gummy center".
[^5]: King Arthur Baking, ["How to tell if bread is done baking"](https://www.kingarthurbaking.com/blog/2023/05/31/how-to-tell-if-bread-is-done) — 굽기 부족 시 gummy한 속, 그리고 다 구워졌어도 충분히 식히기 전에 자르면 마치 안 익은 것처럼 떡진 크럼이 나온다는 점(수분 재분배 미완료).

**신규 코드 요약**: `starter-inactive`, `starter-overripe`(원인) / `spread-flat-disc`, `bland-flavor`(증상).
