# 증상×원인 매트릭스 스케치 — 펌퍼니클 (pumpernickel)

> **목적:** 25종 확장 배치 B1. 펌퍼니클은 호밀 커널 전체(겨+배아+배유)를 쓰는 **가장 짙고 거친 호밀가루**를 높은 비율로 쓰며,
> 전통적으로 **사워도 배양 + 저온(약 200~225°F) 장시간(수 시간~하루) 찜/밀폐 굽기**를 쓴다.[^1][^4]
> 그래서 "낮고 조밀함" 자체는 실패가 아니라 정상 특성이며, 매트릭스는 그 정도를 넘어선 실패(과숙성·아밀레이즈 떡짐·크러스트 균열 등)에 집중한다.
> `sourdough.md`/`rye-bread.md`와 같은 배치이므로 `starter-*`, `rye-*` 코드를 그대로 재사용한다.

## 원인 (Causes)

| id | name | 구분 | why | action |
|---|---|---|---|---|
| `starter-inactive` | 스타터 활성 부족/미성숙 (sourdough.md 재사용) | 재사용 | 펌퍼니클은 대부분 사워도 기반이라, 스타터가 약하면 가스 생산력이 부족해 거의 안 부풀고 속이 눅눅하게 남는다. | 스타터가 먹인 뒤 6~8시간 안에 2배가 되는 리듬을 확인한 뒤에 반죽에 쓴다. |
| `starter-overripe` | 스타터 과숙성/과활성 (sourdough.md 재사용) | 재사용 | 스타터가 정점을 지나면 반죽이 예상보다 빨리 과발효되어 구조를 잃고 주저앉으며 신맛이 강해진다. | 스타터를 정점 근처에서 사용하고 먹이 비율에서 스타터 비중을 줄인다. |
| `rye-ratio-too-high` | 호밀(특히 펌퍼니클/전곡) 비율 과다로 구조 붕괴 (rye-bread.md 재사용) | 재사용 | 전통적으로도 호밀 비율이 매우 높아 원래 낮고 조밀하지만, 밀가루·바이탈 글루텐 보강 없이 지나치게 높으면(예: 100% 통호밀) 구조가 아예 무너져 잘랐을 때 뭉개진다.[^2][^3] | 레시피에 명시된 밀가루/바이탈 글루텐 비율을 지키고, 더 가벼운 식감을 원하면 중력분 비중을 늘린다.[^3] |
| `rye-amylase-gumminess` | 호밀 아밀레이즈 효소로 인한 떡짐 (rye-bread.md 재사용) | 재사용 | 통호밀가루는 아밀레이즈 활성이 특히 높아, 산도가 부족하거나 충분히 안 구우면 전분이 과분해되어 속이 진득하게 떡진다.[^2] | 사워도의 산도를 충분히 살리고, 내부 온도까지 충분히·오래 굽는다. |
| `underproof` | 발효 부족 (CORE) | 재사용 | 발효가 부족하면 부피가 안 나고 속이 조밀·떡지게 된다. | 반죽이 눌렸을 때 자국이 서서히 돌아올 때까지 발효 시간을 늘린다. |
| `overproof` | 과발효 (CORE) | 재사용 | 발효가 과하면 반죽이 힘을 잃어 굽는 중 주저앉고 기공이 커지며 신맛이 강해진다. | 부피가 과하게 늘기 전에 발효를 마치고 바로 굽는다. |
| `oven-too-cool` | 오븐 온도 낮음/굽는 시간·온도 부족 (CORE) | 재사용 | 펌퍼니클은 밀도가 높아 원래도 저온 장시간(약 200~225°F, 5시간 이상) 굽기가 정석인데, 시간·온도가 그보다도 부족하면 속까지 열이 전달되지 못해 떡지고 무겁다.[^1][^4] | 전통 방식대로 낮은 온도로 충분히 길게(레시피 기준 5시간 내외) 굽거나, 일반 오븐 레시피는 내부 온도 200°F 이상까지 굽는다.[^4] |
| `pumpernickel-crust-crack` | 증기 부족으로 겉면이 갈라짐 | 신규 | 굽는 초반에 수분(증기)이 부족하면 겉면이 너무 빨리 굳어(matte, 팽창 정지) 반죽이 계속 부풀려는 힘과 부딱친 겉면이 갈라진다.[^5] | 뚜껑 있는 용기(더치 오븐 등)나 오븐 안 물팬으로 초반 20분 정도 증기를 유지한다.[^5] |

## 증상 (Symptoms)

| id | label | 구분 |
|---|---|---|
| `no-rise` | 전혀/거의 안 부풂 (정상적인 낮은 볼륨 이상으로 아예 안 부풂) | CORE |
| `collapsed` | 부풀다 주저앉음 | CORE |
| `gummy` | 속이 떡짐/질음 | CORE |
| `dense-heavy-crumb` | 조밀하고 무거운 속 (익었지만 뻑뻑함, rye-bread.md 재사용) | 재사용 |
| `too-wet` | 반죽이 너무 질어 성형 안 됨 | CORE |
| `thick-crust` | 겉이 두껍고 딱딱함 | CORE |
| `sour-smell` | 신맛/이상한 냄새 | CORE |
| `large-holes` | 기공이 너무 크고 불규칙 (조밀한 빵에서는 드물지만 과발효 시 나타남) | CORE |
| `crust-alligator-cracking` | 겉면이 갈라지고 조각남(악어 가죽처럼) | 신규 |
| `blowout` | 옆구리·표면이 예상치 못하게 터짐 | CORE |

## 매트릭스 (●● = 강한 연관 2점, ● = 약한 연관 1점, 빈칸 = 0)

| 원인 \ 증상 | no-rise | collapsed | gummy | dense | too-wet | thick-crust | sour-smell | large-holes | crust-crack | blowout |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **starter-inactive** | ●● | | ● | ● | | | | | | |
| **starter-overripe** | | ●● | | | | | ●● | ● | | |
| **rye-ratio-too-high** | ● | | | ●● | ● | | | | | |
| **rye-amylase-gumminess** | | | ●● | ● | | | | | | |
| **underproof** | ●● | | ●● | | | | | | | |
| **overproof** | | ●● | | | | | ● | ●● | | |
| **oven-too-cool** | | | ●● | ● | ● | | | | | |
| **pumpernickel-crust-crack** | | | | | | ● | | | ●● | |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `no-rise` (안 부풂) — FLAT

| 원인 | 점수 |
|---|:--:|
| starter-inactive | 2 |
| underproof | 2 |
| rye-ratio-too-high | 1 |

→ **2점 2개 동점.** 단일 증상만으론 스타터 문제와 타이밍 문제를 못 가른다.

### ✅ 조합 A: `crust-alligator-cracking` + `thick-crust` — PEAKED (절대적)

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **pumpernickel-crust-crack** | 2+1 | **3** 🥇 |
| (나머지) | | 0 |

→ 압도적. 증기 부족으로 인한 크러스트 균열은 다른 원인과 거의 안 겹친다.

### ⚠️ 조합 B (정직한 반례): `no-rise` + `gummy` + `dense-heavy-crumb` — 준-FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| underproof | 2+2+0 | 4 |
| starter-inactive | 2+1+1 | 4 |
| oven-too-cool | 0+2+1 | 3 |
| rye-amylase-gumminess | 0+2+1 | 3 |

→ **underproof와 starter-inactive가 4점 동점.** "안 부풀고 떡진 무거운 속"만으로는 스타터 자체 문제인지 발효 타이밍 문제인지 못 가른다 — 식빵 매트릭스의 조합 D(이스트↔발효부족)와 같은 패턴.

### ✅ 조합 C: `dense-heavy-crumb` + `too-wet` + `no-rise` — PEAKED (모더레이트)

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **rye-ratio-too-high** | 2+1+1 | **4** 🥇 |
| starter-inactive | 1+0+2 | 3 |
| oven-too-cool | 1+1+0 | 2 |

→ **rye-ratio-too-high가 4로 1위**지만 starter-inactive(3)와 격차가 1점뿐이라 완전히 압도적이진 않다. 레시피의 호밀·밀가루 비율을 다시 확인해볼 신호로는 충분하지만, 필요하면 "스타터가 부풀었는지" 후속 질문이 유용할 수 있다.

### ✅ 조합 D: `collapsed` + `large-holes` + `sour-smell` — PEAKED (동점 주의)

| 원인 | 계산 | 점수 |
|---|---|:--:|
| overproof | 2+2+1 | 5 |
| starter-overripe | 2+1+2 | 5 |

→ **5점 동점.** sourdough.md와 동일한 패턴 — 과숙성 스타터를 쓰면 반죽도 결국 과발효되므로 증상만으로 구분이 어렵다.

---

## 결론

**대체로 PEAKED — 단, 두 쌍(스타터↔발효부족, 스타터과숙성↔반죽과발효)은 판별 질문이 필요하다.**

- ✅ 조합 A는 절대적으로 뾰족하다. 크러스트 균열은 펌퍼니클의 장시간 굽기 특성과 직결된 고유 실패 양상.
- ✅ 조합 C는 완전히 압도적이진 않지만(4 vs 3) top-1은 분명하다.
- ⚠️ 조합 B·D: 스타터 자체 문제 vs 반죽 타이밍 문제는 사워도우 계열 전체(사워도우/호밀/펌퍼니클)에서 반복되는 근본적 한계다 — 도메인 사실이지 매트릭스 결함이 아니다.

### 판별 질문 (DiscriminatorQuestion 초안)

```ts
{
  id: "q-starter-inactive-vs-underproof-pn",
  pair: ["starter-inactive", "underproof"],
  text: "스타터 자체가 반죽에 넣기 전 잘 부풀어 있었나요(거품 있고 향긋한 산미)?",
  yesFavors: "underproof",
  noFavors: "starter-inactive",
}
{
  id: "q-starter-overripe-vs-overproof-pn",
  pair: ["starter-overripe", "overproof"],
  text: "반죽에 섞기 전 스타터 자체가 이미 정점을 지나 가라앉고 시큼한 냄새가 강했나요?",
  yesFavors: "starter-overripe",
  noFavors: "overproof",
}
```

### 동의어 (SynonymEntry 초안)

```ts
{ symptomId: "no-rise", terms: ["안부풀어요", "볼륨이 없어요"] },
{ symptomId: "collapsed", terms: ["주저앉아요", "꺼졌어요"] },
{ symptomId: "gummy", terms: ["떡져요", "속이 안 익은 느낌"] },
{ symptomId: "dense-heavy-crumb", terms: ["돌덩이 같아요", "너무 무거워요", "너무 빡빡해요"] },
{ symptomId: "too-wet", terms: ["반죽이 너무 질어요", "손에 다 붙어요"] },
{ symptomId: "thick-crust", terms: ["껍질이 두꺼워요", "겉이 딱딱해요"] },
{ symptomId: "sour-smell", terms: ["너무 시어요", "냄새가 이상해요"] },
{ symptomId: "large-holes", terms: ["기공이 커요", "구멍이 불규칙해요"] },
{ symptomId: "crust-alligator-cracking", terms: ["겉이 갈라져요", "표면이 쩍쩍 갈라져요", "껍질이 조각나요"] },
{ symptomId: "blowout", terms: ["옆이 터졌어요", "갈라져요"] },
```

---

## 각주 (출처)

[^1]: King Arthur Baking, ["Westphalian Rye Bread Recipe"](https://www.kingarthurbaking.com/recipes/westphalian-rye-bread-recipe) — 전통 펌퍼니클 계열은 225°F 예열 오븐에서 밀폐(알루미늄 포일) 상태로 약 5시간 저온 장시간 굽는다는 설명.
[^2]: King Arthur Baking, ["How to substitute rye for all-purpose flour"](https://www.kingarthurbaking.com/blog/2020/10/05/how-to-substitute-rye-for-all-purpose-flour) — 호밀의 효소(아밀레이즈) 활성이 발효/굽기 조건에 따라 진득한 텍스처를 만든다는 설명.
[^3]: King Arthur Baking, ["Types of rye flour"](https://www.kingarthurbaking.com/blog/2020/09/28/types-of-rye-flour) — 펌퍼니클 가루는 "all of the bran, germ, and endosperm"을 포함해 가장 거칠고 무거운 결과물을 만든다는 설명, 밀가루 배합 비율이 부피에 미치는 영향.
[^4]: King Arthur Baking, ["Sourdough Pumpernickel Bread Recipe"](https://www.kingarthurbaking.com/recipes/sourdough-pumpernickel-bread-recipe) — 내부 온도 200°F 기준, 호밀 반죽의 찰기 있는 질감이 정상이라는 설명.
[^5]: King Arthur Baking, ["For crispy, crackly crusts, put a lid on it"](https://www.kingarthurbaking.com/blog/2024/02/27/covered-baker-bread-steaming) — 증기가 부족하면 겉면이 너무 빨리 굳어(matte, 팽창 정지) 부피와 크럼 구조가 나빠진다는 설명("Moist conditions allow the loaf to expand more fully — the crust will stretch rather than dry out and set").

**신규 코드 요약**: `pumpernickel-crust-crack`(원인) / `crust-alligator-cracking`(증상). 그 외 `starter-inactive`/`starter-overripe`/`rye-ratio-too-high`/`rye-amylase-gumminess`/`dense-heavy-crumb`는 같은 배치(B1)의 `sourdough.md`/`rye-bread.md`에서 정의한 코드를 그대로 재사용.
