# 증상×원인 매트릭스 스케치 — 잉글리시 머핀 (english-muffin)

> **목적:** 25종 확장 배치 B6(발효 플랫브레드) 중 잉글리시 머핀.
> 그리들에서 **양면을 각각 구워야** 하고, 성공 기준이 "nooks and crannies"(기공이 크고 불규칙한 개방형 조직)라는 점이 독특하다.[^1]
> 그리들 화력 코드(`flat-griddle-too-hot`/`flat-griddle-too-cool`)는 난과 공유한다.

## 원인 (Causes)

| id | name | why | action | 구분 |
|---|---|---|---|---|
| `underproof` | 발효 부족 | 가스가 부족하면 조직이 조밀해져 nooks and crannies가 안 생긴다. | 2차 발효를 늘려 반죽이 확실히 부풀 때까지 기다려 보세요. | CORE 재사용 — 출처 미확인, 일반 제빵 상식 |
| `overproof` | 과발효 | 발효가 과하면 반죽이 힘을 잃어 그리들 위에서 눌리듯 주저앉고 신맛이 난다. | 부피가 과도해지기 전에 구워 보세요. | CORE 재사용 — 출처 미확인, 일반 제빵 상식 |
| `weak-gluten` | 글루텐 개발 부족 | 구조가 약하면 조직이 조밀해지고 그리들 위에서 눌리기 쉽다. | 반죽이 매끄럽고 탄력 있게 늘어날 때까지 치대 보세요. | CORE 재사용 — 출처 미확인, 일반 제빵 상식 |
| `flat-excess-yeast` | 이스트 과다 | 반죽 테스트에서 "효모가 너무 많으면 작고 촘촘한 기공이 많이 생긴다"는 결과가 확인됐다 — 겉보기엔 발효부족처럼 조밀해 보이지만 메커니즘은 정반대다.[^2] | 레시피의 이스트량을 줄이고 발효를 더 느리게 진행해 보세요.[^2] | 신규 |
| `flat-griddle-too-hot` | 그리들 화력 과다 | 겉이 너무 빨리 익어(그리들 자국이 타는 동안) 속까지 열이 전달되기 전에 겉만 타버려 속이 설익는다.[^3] | 중약불(medium-low)로 낮추고 한 면당 10~15분 정도로 천천히 구워 보세요.[^3] | 신규 (난과 공유) |
| `flat-griddle-too-cool` | 그리들 화력 부족 | 화력이 부족하면 색이 안 나고, 속까지 데우는 데 오래 걸려 조직이 조밀해지고 겉이 오래 익어 두꺼워진다. | 그리들을 350°F(중약불) 기준으로 충분히 예열해 보세요.[^3] | 신규 (난과 공유) |
| `excess-hydration` | 수분 과다 | 반죽이 너무 질면 성형이 무너지고 그리들 위에서 퍼진다. | 수분을 줄이거나 반죽을 좀 더 단단하게 잡아 보세요. | CORE 재사용 — 출처 미확인, 일반 제빵 상식 |
| `flat-uneven-rolling` | 손/롤링핀으로 두께 불균일하게 성형 | 두께를 고르게 패팅하지 않으면 일부만 눌리거나 얇아진다. 롤링핀을 쓰면 "nooks and crannies가 눌려 사라진다."[^4] | 롤링핀 대신 손으로 가볍게 패팅해 일정한 두께로 만들어 보세요.[^4] | 신규 (피타와 공유 개념) |

## 증상 (Symptoms)

| id | label | 구분 |
|---|---|---|
| `flat-dense-no-crannies` | nooks and crannies 없이 조직이 조밀함 | 신규 — 이 카테고리의 핵심 실패 |
| `burnt-outside-raw-inside` | 겉(그리들 자국)은 타는데 속은 설익음 | CORE 재사용 |
| `pale` | 색이 안 남/창백함 | CORE 재사용 |
| `gummy` | 속이 떡짐/설익음 | CORE 재사용 |
| `flat-uneven-thickness` | 두께가 불균일함 | 신규 (공유) |
| `collapsed` | 구울 때 눌리거나 주저앉음 | CORE 재사용 |
| `sour-smell` | 신맛 | CORE 재사용 |
| `thick-crust` | 겉이 두껍고 딱딱함 | CORE 재사용 |
| `too-wet` | 반죽이 퍼져 모양이 안 잡힘 | CORE 재사용 |

## 매트릭스 (●●=2, ●=1, 빈칸=0)

| 원인 \ 증상 | 조밀함 | 겉탐속덜익음 | 창백 | 속떡짐 | 두께불균일 | 주저앉음 | 신맛 | 두꺼움딱딱 | 너무질음 |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **underproof** | ●● | | | ● | | | | | |
| **overproof** | | | | | | ●● | ●● | | |
| **weak-gluten** | ● | | | | ● | ● | | | |
| **flat-excess-yeast** | ●● | | | ● | | | | | |
| **flat-griddle-too-hot** | | ●● | | ● | | | | | |
| **flat-griddle-too-cool** | | | ●● | ● | | | | ● | |
| **excess-hydration** | | | | | ● | ● | | | ●● |
| **flat-uneven-rolling** | | | | | ●● | | | | |

---

## 판별력 검증

### ❌ 단일 증상 "조밀함(flat-dense-no-crannies)" — FLAT

| 원인 | 점수 |
|---|:--:|
| underproof | 2 |
| flat-excess-yeast | 2 |
| weak-gluten | 1 |

→ **underproof와 flat-excess-yeast가 2점 동점.** 겉보기엔 똑같이 "조밀하다"지만 메커니즘은 정반대(발효 부족 vs 이스트 과다로 인한 조기 붕괴)라 판별 질문이 꼭 필요하다.

### ✅ 조합 A: 겉탐속덜익음 + 속떡짐 — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **flat-griddle-too-hot** | 2+1 | **3** 🥇 |
| flat-griddle-too-cool | 0+1 | 1 |
| underproof | 0+1 | 1 |
| flat-excess-yeast | 0+1 | 1 |

→ **flat-griddle-too-hot이 3 vs 1로 뚜렷하게 1위.**

### ✅ 조합 B: 창백 + 두꺼움딱딱 + 속떡짐 — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **flat-griddle-too-cool** | 2+1+1 | **4** 🥇 |
| flat-griddle-too-hot | 0+0+1 | 1 |
| underproof | 0+0+1 | 1 |
| flat-excess-yeast | 0+0+1 | 1 |

→ **flat-griddle-too-cool이 4 vs 1로 압도적 1위.**

### ✅ 조합 C: 주저앉음 + 신맛 — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **overproof** | 2+2 | **4** 🥇 |
| weak-gluten | 1+0 | 1 |
| excess-hydration | 1+0 | 1 |

→ **overproof가 4 vs 1로 압도적 1위.** 신맛이 결정타.

---

## 결론

**PEAKED — 단, "조밀함" 단일 증상은 심각하게 동점(underproof ↔ flat-excess-yeast)이라 반드시 판별 질문이 필요하다.**

- ✅ 그리들 화력 문제(조합 A·B), 과발효(조합 C)는 매우 뾰족하게 분리된다.
- ⚠️ underproof와 flat-excess-yeast는 겉보기 증상이 거의 동일해 발효 관련 증상만으로는 못 가른다 — 도메인 사실(이 카테고리에서 가장 중요한 함정).

### DiscriminatorQuestion 제안

- `pair: ["underproof", "flat-excess-yeast"]`
- text: "레시피보다 이스트를 더 많이 넣었거나, 반죽이 발효 중 유독 빨리 부풀었나요?"
- yesFavors: `flat-excess-yeast`, noFavors: `underproof`

### 동의어(SynonymEntry) 초안

```
{ symptomId: "flat-dense-no-crannies", terms: ["기공이 없어요", "속이 조밀해요", "구멍이 안 보여요", "너무 촘촘해요"] }
{ symptomId: "flat-uneven-thickness", terms: ["두께가 안 일정해요", "한쪽만 두꺼워요"] }
```

## 출처 각주

[^1]: King Arthur Baking, "English Muffins Recipe" (https://www.kingarthurbaking.com/recipes/english-muffins-recipe) — "For the ultimate 'nook and cranny' experience, fork-split the muffins before toasting."
[^2]: King Arthur Baking, "Navigating the nooks and crannies" (https://www.kingarthurbaking.com/blog/2021/11/18/navigating-the-nooks-and-crannies) — 마틴 필립의 테스트에서 이스트를 과다 투입하면 작고 촘촘한 기공이 생겼고, 발효를 느리게 하거나 반죽을 더 촉촉하게 하는 것이 개선책이었다는 내용.
[^3]: King Arthur Baking, "English Muffins Recipe" (https://www.kingarthurbaking.com/recipes/english-muffins-recipe) — 전기 그리들 350°F 예열 또는 캐스트아이언 중약불, "cook until the bottoms are lightly browned and the sides look matte, 10 to 15 minutes"(양면 각각).
[^4]: King Arthur Baking, "English Muffins Recipe" (https://www.kingarthurbaking.com/recipes/english-muffins-recipe) — 세몰리나/옥수수가루를 뿌려 다루고, 포크로 쪼개야 nooks and crannies가 살아난다는 설명. 롤링핀 사용 시 기공이 눌려 사라진다는 서술은 나머지 카테고리(naan-guide)의 동일 원리를 일반화한 것으로 **직접 확인은 아니며 일반 제빵 상식과의 조합**.
