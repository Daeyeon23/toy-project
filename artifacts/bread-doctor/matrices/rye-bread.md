# 증상×원인 매트릭스 스케치 — 호밀빵 (rye-bread)

> **목적:** 25종 확장 배치 B1. 여기서 "호밀빵"은 델리 라이/유대식 호밀빵처럼 **호밀가루 + 밀가루를 섞고 이스트(또는 이스트+호밀 사워)로 발효**하는 유형을 기준으로 한다.
> (100% 호밀·전통 저온 장시간 굽기 방식은 `pumpernickel.md`에서 별도로 다룬다.)
> CORE 발효·오븐 코드를 재사용하고, 호밀 고유의 **낮은 글루텐 형성력·아밀레이즈 효소 활성**에서 오는 실패만 신규 코드로 추가한다.

## 원인 (Causes)

| id | name | 구분 | why | action |
|---|---|---|---|---|
| `rye-amylase-gumminess` | 호밀 아밀레이즈 효소로 인한 떡짐 | 신규 | 호밀에는 밀보다 아밀레이즈 효소가 활발해 전분을 분해하는데, 산도(사워도)가 부족하거나 충분히 굽지 않으면 전분 구조가 안정되지 못해 속이 진득하게 떡진다.[^1][^2] | 호밀 사워(rye sour)나 비네거 등으로 산도를 더하고, 내부 온도 200~210°F까지 충분히 구운 뒤 완전히 식혀서 자른다.[^2] |
| `rye-ratio-too-high` | 호밀 비율 과다로 구조 약화 | 신규 | 레시피보다 호밀가루 비중을 늘리면(또는 바이탈 휘트 글루텐을 빼면) 글루텐 형성 단백질이 부족해져 예상보다 훨씬 낮게 부풀고 조밀·찰기 있게 나온다.[^3][^4] | 밀가루(중력분/강력분) 비중을 다시 높이거나 바이탈 휘트 글루텐을 1~2티스푼 추가해 구조를 보강한다.[^4] |
| `yeast-dead` | 이스트 문제 (CORE) | 재사용 | 이스트가 죽었거나 뜨거운 물에 사멸하면 발효 자체가 시작되지 않아 부풀지 않는다. | 유통기한을 확인하고 물 온도를 40℃ 이하로 맞춘 뒤 예비 발효로 활성을 확인한다. |
| `underproof` | 발효 부족 (CORE) | 재사용 | 이스트가 가스를 충분히 만들기 전에 구우면 부피가 안 나고 속이 떡지며 표면이 예상치 못한 곳에서 터진다. | 반죽이 약 2배가 되고 손가락 자국이 서서히 돌아올 때까지 발효 시간을 늘린다. |
| `overproof` | 과발효 (CORE) | 재사용 | 발효가 과하면 반죽이 힘을 잃어 굽는 중 주저앉고 기공이 커지며 신맛이 강해진다. | 부피가 과하게 늘기 전에 발효를 마치고 바로 굽는다. |
| `cold-environment` | 저온 환경 (CORE) | 재사용 | 반죽·실내 온도가 낮으면 발효 속도가 느려져 같은 시간에 덜 부푼다. | 26~28℃ 환경에서 발효시킨다. |
| `excess-hydration` | 수분 과다 (CORE) | 재사용 | 호밀가루는 원래 흡수율이 높고 펜토산(pentosan) 때문에 잘 뭉치지 않는데, 레시피보다 물이 더 많으면 반죽이 성형 불가능할 정도로 늘어진다.[^3] | 물을 줄이거나 덧가루 대신 손·작업대에 오일을 발라 다루기 쉽게 만든다.[^3] |
| `oven-too-hot` | 오븐 온도 너무 높음 (CORE) | 재사용 | 겉면이 속보다 훨씬 빨리 익어 겉이 타거나 두꺼워지는 동안 속까지 열이 전달되지 못한다. | 오븐 온도를 10~15℃ 낮추고 필요하면 은박지로 덮는다. |
| `oven-too-cool` | 오븐 온도 낮음/굽기 부족 (CORE) | 재사용 | 열이 부족하면 굽는 시간이 늘어나 껍질 형성·수분 증발이 고르지 않아 속이 설익거나 색이 약해진다. 호밀빵은 밀도가 높아 일반 식빵보다 더 오래/높은 내부온도까지 구워야 한다.[^2] | 오븐을 충분히 예열하고 온도계로 확인하며, 내부 온도 200°F 이상까지 굽는다.[^2] |
| `weak-gluten` | 반죽 개발 부족 (CORE) | 재사용 | 호밀 반죽은 원래 밀가루만큼 매끈해지지 않지만, 섞인 밀가루 부분의 글루텐마저 부족하게 개발하면 가스를 가두는 힘이 더 약해져 주저앉고 기공이 불규칙해진다.[^3] | 호밀 반죽은 점토 같은 질감이 정상임을 인지하되, 밀가루가 들어간 배합은 매끄러워질 때까지 믹싱 시간을 조금 더 준다.[^3] |

## 증상 (Symptoms)

| id | label | 구분 |
|---|---|---|
| `no-rise` | 전혀/거의 안 부풂 | CORE |
| `collapsed` | 부풀다 주저앉음 | CORE |
| `gummy` | 속이 떡짐/질음 | CORE |
| `dense-heavy-crumb` | 조밀하고 무거운 속 (익었지만 뻑뻑함) | 신규 |
| `burnt-outside-raw-inside` | 겉은 탔는데 속은 덜 익음 | CORE |
| `pale` | 색이 안 남/창백함 | CORE |
| `blowout` | 옆구리·표면이 터짐 | CORE |
| `large-holes` | 기공이 너무 크고 불규칙 | CORE |
| `too-wet` | 반죽이 너무 질어 성형 안 됨 | CORE |
| `thick-crust` | 겉이 두껍고 딱딱함 | CORE |
| `sour-smell` | 신맛/이상한 냄새 | CORE |

## 매트릭스 (●● = 강한 연관 2점, ● = 약한 연관 1점, 빈칸 = 0)

| 원인 \ 증상 | no-rise | collapsed | gummy | dense | burnt-raw | pale | blowout | large-holes | too-wet | thick-crust | sour-smell |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **rye-amylase-gumminess** | | | ●● | ● | | | | | | | |
| **rye-ratio-too-high** | ● | | | ●● | | | | | ● | | |
| **yeast-dead** | ●● | | ● | | | ● | | | | | |
| **underproof** | ●● | | ●● | | | | ● | | | | |
| **overproof** | | ●● | | | | | | ●● | | | ● |
| **cold-environment** | ●● | | ● | | | | | | | | |
| **excess-hydration** | | | ● | | | | | ● | ●● | | |
| **oven-too-hot** | | | | | ●● | | ● | | | ●● | |
| **oven-too-cool** | | | ●● | ● | | ● | | | | | |
| **weak-gluten** | | ● | | ● | | | | ● | ● | | |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `no-rise` (안 부풂) — FLAT

| 원인 | 점수 |
|---|:--:|
| yeast-dead | 2 |
| underproof | 2 |
| cold-environment | 2 |
| rye-ratio-too-high | 1 |

→ **2점 3개 동점.** 단일 증상만으론 이스트/타이밍/온도 문제를 못 가른다.

### ✅ 조합 A: `no-rise` + `gummy` + `blowout` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **underproof** | 2+2+1 | **5** 🥇 |
| yeast-dead | 2+1+0 | 3 |
| cold-environment | 2+1+0 | 3 |

→ **underproof가 5 vs 3으로 뾰족하게 1위.** `blowout`(예상 못한 곳에서 터짐)이 결정타.

### ⚠️ 조합 B (정직한 반례): `gummy` + `dense-heavy-crumb` — 준-FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| rye-amylase-gumminess | 2+1 | 3 |
| oven-too-cool | 2+1 | 3 |
| rye-ratio-too-high | 0+2 | 2 |
| underproof | 2+0 | 2 |

→ **rye-amylase-gumminess와 oven-too-cool이 3점 동점.** "떡지고 무거운 속"은 효소 문제(충분히 구워도 남는 진득함)와 단순 굽기 부족(더 구우면 해결)이 겉보기엔 같아 보인다. 판별 질문이 필요하다.

### ✅ 조합 C: `dense-heavy-crumb` + `too-wet` + `no-rise` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **rye-ratio-too-high** | 2+1+1 | **4** 🥇 |
| weak-gluten | 1+1+0 | 2 |
| cold-environment | 0+0+2 | 2 |

→ **rye-ratio-too-high가 4 vs 2로 1위.** 레시피 대비 호밀 비중이 과했다는 신호.

### ✅ 조합 D: `collapsed` + `large-holes` + `sour-smell` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **overproof** | 2+2+1 | **5** 🥇 |
| weak-gluten | 1+1+0 | 2 |

→ 압도적. 신맛이 결정타.

---

## 결론

**PEAKED — 단, 아밀레이즈 떡짐↔굽기 부족 쌍은 판별 질문이 필요하다.**

- ✅ 조합 A·C·D는 뾰족한 top-1이 나온다.
- ⚠️ 조합 B: **rye-amylase-gumminess(효소성 떡짐)와 oven-too-cool(단순 굽기 부족)은 "떡지고 무거운 속"만으로 거의 안 갈린다.** 둘 다 결과가 "덜 익은 듯한 속"으로 보이기 때문 — 도메인 사실.

### 판별 질문 (DiscriminatorQuestion 초안)

```ts
{
  id: "q-yeast-dead-vs-underproof",
  pair: ["yeast-dead", "underproof"],
  text: "1차 발효 때 반죽이 부풀긴 했나요?",
  yesFavors: "underproof",
  noFavors: "yeast-dead",
}
{
  id: "q-amylase-vs-oven-too-cool",
  pair: ["rye-amylase-gumminess", "oven-too-cool"],
  text: "내부 온도 200°F(약 93℃) 이상까지 충분히, 오래 구웠는데도 여전히 떡졌나요?",
  yesFavors: "rye-amylase-gumminess", // 충분히 구웠는데도 떡짐 → 효소/산도 문제
  noFavors: "oven-too-cool",          // 애초에 덜 구워짐 → 더 구우면 해결
}
```

### 동의어 (SynonymEntry 초안)

```ts
{ symptomId: "no-rise", terms: ["안부풀어요", "볼륨이 없어요"] },
{ symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
{ symptomId: "gummy", terms: ["떡져요", "속이 안 익은 느낌"] },
{ symptomId: "dense-heavy-crumb", terms: ["너무 무거워요", "너무 조밀해요", "빡빡해요", "돌덩이 같아요"] },
{ symptomId: "burnt-outside-raw-inside", terms: ["겉만 타요", "속이 안 익어요"] },
{ symptomId: "pale", terms: ["색이 안 나요", "창백해요"] },
{ symptomId: "blowout", terms: ["옆이 터졌어요", "갈라져요"] },
{ symptomId: "large-holes", terms: ["기공이 커요", "구멍이 불규칙해요"] },
{ symptomId: "too-wet", terms: ["반죽이 너무 질어요", "손에 다 붙어요"] },
{ symptomId: "thick-crust", terms: ["껍질이 두꺼워요", "겉이 딱딱해요"] },
{ symptomId: "sour-smell", terms: ["너무 시어요", "냄새가 이상해요"] },
```

---

## 각주 (출처)

[^1]: King Arthur Baking, ["How to substitute rye for all-purpose flour"](https://www.kingarthurbaking.com/blog/2020/10/05/how-to-substitute-rye-for-all-purpose-flour) — "Rye's enzymes can create sticky or gummy textures if yeast dough ferments too long"(호밀의 효소 활성이 발효/굽기 조건에 따라 진득한 텍스처를 만든다).
[^2]: King Arthur Baking, ["5 tips for making rye bread"](https://www.kingarthurbaking.com/blog/2015/08/13/5-tips-making-rye-bread) — 사워도(산성 환경)를 섞으면 굽는 동안 효소 활성이 느려져 구조가 무너지는 것을 막는다는 설명, 호밀 비중이 높을수록 발효·굽기 시간이 더 걸린다는 점.
[^3]: King Arthur Baking, ["Sourdough Pumpernickel Bread Recipe"](https://www.kingarthurbaking.com/recipes/sourdough-pumpernickel-bread-recipe) 및 [Classic Pumpernickel Bread Recipe](https://www.kingarthurbaking.com/recipes/classic-pumpernickel-bread-recipe) 팁 — 호밀 반죽은 원래 찰기 있고 점토 같으며(clay-like), 덧가루 대신 오일로 다루는 법, 밀가루/바이탈 글루텐 보강 시 더 높게 부푼다는 설명.
[^4]: King Arthur Baking, ["Types of rye flour"](https://www.kingarthurbaking.com/blog/2020/09/28/types-of-rye-flour) — 백밀가루/호밀 배합 비율에 따라 부피와 밀도가 달라짐, 호밀은 밀보다 글루텐 형성 단백질이 적다는 설명.

**신규 코드 요약**: `rye-amylase-gumminess`, `rye-ratio-too-high`(원인) / `dense-heavy-crumb`(증상).
