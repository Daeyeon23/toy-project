# 증상×원인 매트릭스 스케치 — 난 (naan)

> **목적:** 25종 확장 배치 B6(발효 플랫브레드) 중 난.
> 오븐이 아닌 **캐스트아이언 팬/그리들/탄두르의 순간 고열**로 짧게 굽는 것이 핵심 차이 — "기포(char spot) 형성"과 "그리들 화력"이 실패축.
> CORE 코드를 재사용하고, 그리들 화력 문제는 `flat-griddle-too-hot`/`flat-griddle-too-cool`로 (다른 그리들 계열인 잉글리시머핀과 코드 공유), 반죽 취급 문제는 신규 코드로 추가한다.

## 원인 (Causes)

| id | name | why | action | 구분 |
|---|---|---|---|---|
| `yeast-dead` | 이스트 문제 | 이스트가 죽었거나 오래되면 발효 자체가 시작되지 않아 반죽이 안 부풀고 색도 안 납니다.[^1] | 유통기한을 확인하고 예비 발효로 활성을 확인해 보세요. | CORE 재사용 |
| `underproof` | 발효 부족 | 가스가 충분히 안 만들어져 반죽이 얇고 힘없이 구워집니다.[^1] | 1차 발효를 늘려 반죽이 확실히 부풀 때까지 기다려 보세요. | CORE 재사용 |
| `overproof` | 과발효 | 발효가 과하면 반죽이 힘을 잃고 신맛이 납니다. | 부피가 과도해지기 전에 구워 보세요. | CORE 재사용 — 출처 미확인, 일반 제빵 상식 |
| `flat-griddle-too-hot` | 그리들/팬 화력 과다 | 표면(특히 기포 부분)이 30~40초 만에 타버리는데, 속까지 열이 전달되기 전에 겉만 익어 겉탐속설익음이 됩니다.[^2] | 중강불(medium-high)로 낮추고, 첫 면 30~40초·둘째 면 40~50초 기준으로 시간을 조절해 보세요.[^2] | 신규 (잉글리시머핀과 공유) |
| `flat-griddle-too-cool` | 그리들/팬 화력 부족 | 팬이 충분히 뜨겁지 않으면 기포가 안 생기고 색도 안 나며 밀도 높고 뻣뻣해집니다.[^3] | 캐스트아이언/그리들을 중강불로 충분히 예열한 뒤 구워 보세요.[^3] | 신규 (잉글리시머핀과 공유) |
| `excess-hydration` | 수분 과다 | 반죽이 너무 질면 손으로 늘리기 어렵고 다루기 힘들어집니다. | 수분을 줄이거나 덧가루를 써 반죽 강도를 높여 보세요. | CORE 재사용 — 출처 미확인, 일반 제빵 상식 |
| `flat-overworked-dough` | 과다 믹싱 | 밀가루 단백질(글루텐)을 과하게 발달시키면 반죽이 질기고 조밀해집니다. 난은 매끈해질 때까지 최소한만 섞는 것이 원칙입니다.[^4] | 반죽을 덩어리 없이 균일해질 때까지만 섞고 더 치대지 마세요.[^4] | 신규 |
| `flat-rolled-with-pin` | 롤링핀으로 밀기 | 롤링핀으로 밀면 반죽 속 가스가 다 빠져나가 얇고 두껍고 딱딱한 난이 됩니다. 손으로 늘려야 기포/부풀림이 남습니다.[^5] | 롤링핀 대신 손으로 둥글게/길게 늘려 보세요.[^5] | 신규 |

## 증상 (Symptoms)

| id | label | 구분 |
|---|---|---|
| `no-rise` | 1차 발효 중 반죽이 거의 안 부풂 | CORE 재사용 |
| `flat-no-oven-spring` | 구울 때 부풀지 않고 기포(char spot)가 거의 안 생김 | 신규 (공유) |
| `pale` | 표면에 색/그릴마크가 안 남 | CORE 재사용 |
| `burnt-outside-raw-inside` | 기포 부분은 타는데 속은 덜 익음 | CORE 재사용 |
| `gummy` | 속이 떡짐/설익음 | CORE 재사용 |
| `thick-crust` | 두껍고 딱딱한 질감 | CORE 재사용 |
| `flat-uneven-thickness` | 두께가 불균일함 | 신규 (공유) |
| `too-wet` | 반죽이 손에 달라붙어 다루기 힘듦 | CORE 재사용 |
| `sour-smell` | 신맛 | CORE 재사용 |

## 매트릭스 (●●=2, ●=1, 빈칸=0)

| 원인 \ 증상 | 안부풂(발효) | 오븐스프링없음 | 창백 | 겉탐속덜익음 | 속떡짐 | 두꺼움딱딱 | 두께불균일 | 너무질음 | 신맛 |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **yeast-dead** | ●● | | ● | | ● | | | | |
| **underproof** | ●● | ● | | | ● | | | | |
| **overproof** | | | | | ● | | | | ●● |
| **flat-griddle-too-hot** | | | | ●● | ● | | | | |
| **flat-griddle-too-cool** | | ●● | ●● | | | | | | |
| **excess-hydration** | | | | | ● | | ● | ●● | |
| **flat-overworked-dough** | | ● | | | | ●● | | | |
| **flat-rolled-with-pin** | | ●● | | | | ●● | | | |

---

## 판별력 검증

### ❌ 단일 증상 "속떡짐(gummy)" — FLAT

| 원인 | 점수 |
|---|:--:|
| yeast-dead | 1 |
| underproof | 1 |
| overproof | 1 |
| flat-griddle-too-hot | 1 |
| excess-hydration | 1 |

→ **5개 원인이 모두 1점으로 동점.** "속이 떡진다"만으로는 이스트·발효·화력·수분 중 무엇도 못 좁힌다. 원래 식빵 매트릭스의 "단일 증상은 쓸모없다"는 결론이 난에서도 재확인된다.

### ✅ 조합 A: 안부풂 + 속떡짐 + 창백 — PEAKED (근소 마진)

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **yeast-dead** | 2+1+1 | **4** 🥇 |
| underproof | 2+1+0 | 3 |

→ yeast-dead가 4 vs 3으로 근소하게 1위(창백함이 살짝 유리하게 작용 — 이스트 활성 자체가 없으면 발효 부산물도 거의 없음). 마진이 좁아 CORE 판별 질문(`q-yeast-vs-underproof`: "1차 발효 때 반죽이 부풀긴 했나요?")을 그대로 재사용해야 한다.

### ✅ 조합 B: 겉탐속덜익음 + 속떡짐 — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **flat-griddle-too-hot** | 2+1 | **3** 🥇 |
| yeast-dead | 0+1 | 1 |
| underproof | 0+1 | 1 |
| overproof | 0+1 | 1 |
| excess-hydration | 0+1 | 1 |

→ **flat-griddle-too-hot이 3 vs 1로 뚜렷하게 1위.** "기포는 타는데 속은 설익음"은 화력 과다의 고유 신호다.

### ✅ 조합 C: 창백 + 오븐스프링없음 — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **flat-griddle-too-cool** | 2+2 | **4** 🥇 |
| flat-rolled-with-pin | 0+2 | 2 |
| flat-overworked-dough | 0+1 | 1 |

→ **flat-griddle-too-cool이 4 vs 2로 1위.** 창백함(색이 안 남)이 결정타 — 화력 부족은 색도 기포도 둘 다 없게 만들지만, 롤링핀 문제는 색은 정상일 수 있다.

### ⚠️ 조합 D (정직한 반례): 두꺼움딱딱 + 오븐스프링없음만

| 원인 | 계산 | 점수 |
|---|---|:--:|
| flat-rolled-with-pin | 2+2 | 4 |
| flat-overworked-dough | 2+1 | 3 |
| flat-griddle-too-cool | 0+2 | 2 |

→ flat-rolled-with-pin과 flat-overworked-dough가 4 vs 3으로 근접해, "왜 두껍고 딱딱한지"는 이 두 증상만으로 확실히 못 가른다.

---

## 결론

**대체로 PEAKED — 단, 두 지점에서 근접/동점이 있다.**

- ✅ 화력 문제(조합 B·C)는 다른 원인과 잘 분리된다.
- ⚠️ yeast-dead ↔ underproof(조합 A), flat-rolled-with-pin ↔ flat-overworked-dough(조합 D)는 근접해 판별 질문이 필요하다.

### DiscriminatorQuestion 제안

1. **yeast-dead ↔ underproof** — CORE 판별 질문 `q-yeast-vs-underproof` 그대로 재사용 ("1차 발효 때 반죽이 부풀긴 했나요?").
2. **flat-rolled-with-pin ↔ flat-overworked-dough**
   - `pair: ["flat-rolled-with-pin", "flat-overworked-dough"]`
   - text: "밀대(롤링핀)로 반죽을 밀어서 폈나요?"
   - yesFavors: `flat-rolled-with-pin`, noFavors: `flat-overworked-dough`

### 동의어(SynonymEntry) 초안

```
{ symptomId: "flat-no-oven-spring", terms: ["기포가 안 생겨요", "안 부풀어요", "부글부글 안 올라와요"] }
{ symptomId: "flat-uneven-thickness", terms: ["두께가 안 일정해요", "한쪽만 두꺼워요"] }
{ symptomId: "thick-crust", terms: ["질겨요", "딱딱해요", "뻣뻣해요"] }
```

## 출처 각주

[^1]: King Arthur Baking, "Ask the Bread Coach: My dough isn't rising — what now?" (https://www.kingarthurbaking.com/blog/2023/03/23/ask-the-bread-coach-my-dough-isnt-rising-what-now) — 이스트 품질, 반죽 온도 75~80°F, 가정 제빵자의 만성적 발효 부족 경향.
[^2]: King Arthur Baking, "Naan Recipe" (https://www.kingarthurbaking.com/recipes/naan-recipe) — 캐스트아이언/전기그리들 중강불 예열, 첫 면 30~40초까지 기포 형성 후 뒤집기, 둘째 면 40~50초.
[^3]: King Arthur Baking, "Naan: A guide to this classic flatbread" (https://www.kingarthurbaking.com/blog/2021/03/23/naan-guide) — 캐스트아이언 팬으로 탄두르에 가까운 결과를 낼 수 있다는 설명(화력이 부족하면 그 효과가 안 남을 것이라는 역방향 추론은 출처 미확인·일반 제빵 상식).
[^4]: 과다 믹싱으로 인한 질김/조밀함은 The Fresh Loaf 포럼 등에서 논의되나 `_taxonomy.md` 허용 출처 목록에 없어 **출처 미확인 — 일반 제빵 상식**으로 표기.
[^5]: King Arthur Baking, "Naan: A guide to this classic flatbread" (https://www.kingarthurbaking.com/blog/2021/03/23/naan-guide) — "a rolling pin will push out all the gas and leave you with a flat, thick, tough bread"라고 명시.
