# 증상×원인 매트릭스 스케치 — 피타 (pita)

> **목적:** 25종 확장 배치 B6(발효 플랫브레드) 중 피타.
> 핵심 실패축은 "포켓(속 주머니) 형성 여부" — 얇게 민 반죽이 500°F 급의 고열에서 수분이 급격히 증발/기화(steam)하며 두 층이 분리·팽창해야 포켓이 생긴다.[^1]
> 포켓 형성은 원인이 매우 다양해(발효·글루텐·오븐온도·베이킹표면·반죽 건조) 판별력이 가장 시험받는 카테고리다.

## 원인 (Causes)

| id | name | why | action | 구분 |
|---|---|---|---|---|
| `underproof` | 발효 부족 | 가스가 부족하면 반죽이 얇고 힘없어 오븐 속 스팀 압력을 못 버티고 포켓이 안 생긴다. | 1차 발효를 늘려 반죽이 확실히 부풀 때까지 기다려 보세요. | CORE 재사용 — 출처 미확인, 일반 제빵 상식 |
| `overproof` | 과발효 | 발효가 과하면 반죽이 힘을 잃어 포켓이 약하게 생기고 신맛이 난다. | 부피가 과도해지기 전에 성형·굽기를 마쳐 보세요. | CORE 재사용 — 출처 미확인, 일반 제빵 상식 |
| `weak-gluten` | 글루텐 개발 부족 | 글루텐이 약하면 스팀 압력을 가둘 힘이 없어 포켓이 안 생기거나, 반죽이 밀 때 쉽게 찢어진다. | 반죽이 매끄럽고 탄력 있게 늘어날 때까지 치대 보세요. | CORE 재사용 — 출처 미확인, 일반 제빵 상식 |
| `oven-too-cool` | 오븐 온도 낮음 | "포켓의 비밀은 정말로 뜨거운 오븐, 500°F 급"이다. 온도가 낮으면 스팀이 급격히 생기지 않아 반죽이 얇게 퍼지기만 하고 안 부푼다.[^1] | 오븐을 500°F(260℃)까지 예열하고 충분히 달군 뒤 구워 보세요.[^2] | CORE 재사용 |
| `flat-cold-baking-surface` | 베이킹 스톤 미사용/전기오븐 열전달 약함 | 전기 오븐에서는 피타가 "조용히 팬 위에 누워있기만" 했다는 관찰이 있다 — 열전달이 약한 표면/오븐에서는 포켓 형성이 잘 안 된다.[^2] | 예열된 피자 스톤을 오븐 하단에 놓고 그 위에서 굽거나, 오븐 랙에 직접 놓고 구워 보세요.[^2][^3] | 신규 (피자와 공유) |
| `flat-uneven-rolling` | 밀 때 두께 불균일 | 두께가 균일하지 않으면 얇은 부분만 부풀고 두꺼운 부분은 안 부풀어 포켓이 부분적으로만 생긴다. | 밀대로 밀 때 전체를 고르게 돌려가며 일정한 두께로 밀어 보세요. | 신규 (피자와 공유 개념) — 출처 미확인, 일반 제빵 상식 |
| `flat-dough-dried-out` | 반죽이 대기 중 마름 | 작업 중 덮지 않고 방치하면 반죽 표면이 굳어 스팀을 가두지 못해 포켓이 실패하고 표면이 갈라진다. "다른 반죽 덩어리들은 마르지 않게 덮어두라"는 지침이 있다.[^2] | 밀지 않은 반죽 덩어리는 젖은 천이나 랩으로 덮어 마르지 않게 하세요. | 신규 |
| `cold-environment` | 반죽·환경 온도 낮음 | 반죽·실내 온도가 낮으면 발효가 느려져 같은 시간에 덜 부푼다. | 26~28℃ 환경에서 발효시켜 보세요. | CORE 재사용 — 출처 미확인, 일반 제빵 상식 |

## 증상 (Symptoms)

| id | label | 구분 |
|---|---|---|
| `flat-no-pocket` | 구운 뒤 속에 포켓(주머니)이 안 생기거나 매우 작음 | 신규 — 이 카테고리의 핵심 실패 |
| `flat-no-oven-spring` | 오븐 안에서 풍선처럼 부풀지 않음(퍼지기만 함) | 신규 (공유) |
| `flat-uneven-thickness` | 두께가 불균일함 | 신규 (공유) |
| `flat-torn-dough` | 밀 때 찢어지거나 구멍이 남 | 신규 (공유) |
| `thick-crust` | 겉이 두껍고 딱딱함(크래커같음) | CORE 재사용 |
| `pale` | 색이 안 남/창백함 | CORE 재사용 |
| `gummy` | 속이 떡짐/설익음 | CORE 재사용 |
| `sour-smell` | 신맛 | CORE 재사용 |
| `flat-dry-cracked` | 표면이 갈라지고 부스러짐 | 신규 |

## 매트릭스 (●●=2, ●=1, 빈칸=0)

| 원인 \ 증상 | 포켓없음 | 오븐스프링없음 | 두께불균일 | 찢어짐 | 두꺼움딱딱 | 창백 | 속떡짐 | 신맛 | 갈라짐 |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **underproof** | ●● | ●● | | | | | ● | | |
| **overproof** | ● | | | ● | | | | ●● | |
| **weak-gluten** | ●● | | ● | ●● | | | | | |
| **oven-too-cool** | ●● | ●● | | | | ●● | | | |
| **flat-cold-baking-surface** | ●● | | | | | ● | | | |
| **flat-uneven-rolling** | ● | | ●● | | | | | | |
| **flat-dough-dried-out** | ● | | | | ● | | | | ●● |
| **cold-environment** | | ● | | | | | ● | | |

---

## 판별력 검증

### ❌ 단일 증상 "포켓없음(flat-no-pocket)" — FLAT

| 원인 | 점수 |
|---|:--:|
| underproof | 2 |
| weak-gluten | 2 |
| oven-too-cool | 2 |
| flat-cold-baking-surface | 2 |
| overproof | 1 |
| flat-uneven-rolling | 1 |
| flat-dough-dried-out | 1 |

→ **4개 원인이 2점으로 동점 (underproof, weak-gluten, oven-too-cool, flat-cold-baking-surface).** "포켓이 안 생겼다"는 관찰만으로는 발효·글루텐·오븐온도·베이킹표면 중 무엇인지 전혀 못 좁힌다. 원인이 가장 많이 겹치는 카테고리다.

### ✅ 조합 A: 포켓없음 + 오븐스프링없음 + 창백 — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **oven-too-cool** | 2+2+2 | **6** 🥇 |
| underproof | 2+2+0 | 4 |
| flat-cold-baking-surface | 2+0+1 | 3 |
| weak-gluten | 2+0+0 | 2 |

→ **oven-too-cool이 6 vs 4로 뾰족하게 1위.** 창백함(색이 안 남)이 결정타 — 발효 부족이나 글루텐 문제는 색과 직접 관련이 적다.

### ✅ 조합 B: 포켓없음 + 찢어짐 + 두께불균일 — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **weak-gluten** | 2+2+1 | **5** 🥇 |
| flat-uneven-rolling | 1+0+2 | 3 |
| overproof | 1+1+0 | 2 |

→ **weak-gluten이 5 vs 3으로 1위.** "찢어짐"이 강한 신호 — 단순 밀기 불균일(uneven-rolling)만으론 찢어짐이 weak-gluten만큼 강하게 생기지 않는다.

### ✅ 조합 C: 두꺼움딱딱 + 갈라짐 — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **flat-dough-dried-out** | 1+2 | **3** 🥇 |
| (나머지) | | 0 |

→ 압도적 1위. 마르고 갈라지는 조합은 다른 원인과 거의 안 겹친다.

---

## 결론

**PEAKED — 단, 단일 증상(포켓없음)의 4-way 동점이 이 카테고리의 가장 중요한 설계 함의다.**

- ✅ 포켓없음에 창백함(오븐온도)이나 찢어짐(글루텐)처럼 원인-특이적 증상을 더하면 뾰족해진다(조합 A·B·C).
- ⚠️ "포켓이 안 생겼어요"라는 사용자의 첫 보고만으로는 절대 원인을 못 좁힌다 — 반드시 후속 판별 질문이 필요하다.

### DiscriminatorQuestion 제안

1. **oven-too-cool ↔ flat-cold-baking-surface**
   - `pair: ["oven-too-cool", "flat-cold-baking-surface"]`
   - text: "베이킹 스톤/스틸 없이 얇은 팬 위에서 구웠나요?"
   - yesFavors: `flat-cold-baking-surface`, noFavors: `oven-too-cool`
2. **underproof ↔ weak-gluten**
   - `pair: ["underproof", "weak-gluten"]`
   - text: "1차 발효 때 반죽 부피가 눈에 띄게 부풀었나요?"
   - yesFavors: `weak-gluten`(발효는 됐지만 구조가 약함), noFavors: `underproof`

### 동의어(SynonymEntry) 초안

```
{ symptomId: "flat-no-pocket", terms: ["포켓이 안 생겨요", "속이 안 벌어져요", "주머니가 안 생겨요"] }
{ symptomId: "flat-torn-dough", terms: ["밀 때 찢어져요", "구멍이 나요"] }
{ symptomId: "flat-dry-cracked", terms: ["표면이 갈라져요", "부스러져요", "말라서 쩍쩍 갈라져요"] }
{ symptomId: "flat-uneven-thickness", terms: ["두께가 안 일정해요", "한쪽만 두꺼워요"] }
```

## 출처 각주

[^1]: 피타 포켓 형성이 얇게 민 반죽의 급격한 스팀 팽창에 의존한다는 원리는 여러 요리 매체에서 공통적으로 설명되나, `_taxonomy.md` 허용 출처 목록에 있는 1차 출처로 직접 확인하지 못해 **출처 미확인 — 일반 제빵 상식**으로 표기. "500°F급 고열이 핵심"이라는 부분은 King Arthur Baking에서 확인됨(각주 2).
[^2]: King Arthur Baking, "Where's the pop in my pita?" (https://www.kingarthurbaking.com/blog/2008/08/01/wheres-the-pop-in-my-pita) — "the secret is a REALLY hot oven. Like, 500°F", 전기 오븐에서는 포켓이 잘 안 생겼다는 저자의 경험, 반죽을 덮어 마르지 않게 하라는 지침, 오븐 랙에 직접 굽는 방법.
[^3]: King Arthur Baking, "Golden Pita Bread Recipe" (https://www.kingarthurbaking.com/recipes/golden-pita-bread-recipe) — 500°F 예열, 최하단 랙 5분+중상단 랙 2분, "they should puff up", 구운 뒤 마른 천으로 감싸 부드럽게 유지.
