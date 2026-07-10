# 증상×원인 매트릭스 — 토르티야 (id: tortilla)

> **범위:** 이 문서는 **밀가루 토르티야(flour tortilla)**만 다룬다. 옥수수 토르티야(masa 기반)는
> 글루텐이 없어 반죽 휴지·글루텐 발달 논리가 통째로 적용되지 않으므로 별도 문서가 필요하다(범위 밖).
>
> **카테고리 전제:** 토르티야는 이스트 발효를 쓰지 않는 무발효 플랫브레드다(전통 밀가루 토르티야는
> 베이킹파우더도 생략 가능하며, 팽창은 주로 굽는 동안 생기는 수증기에 의존한다[^1]).
> 따라서 `_taxonomy.md`의 CORE 발효 코드(`yeast-dead`/`underproof`/`overproof`/`cold-environment`)는
> 이 매트릭스에서 전부 제외한다. 실패 양상의 중심은 **글루텐 긴장/구조, 수분, 밀기 두께, 팬 온도**다.

## 원인 (Causes)

| id | name | 구분 | why | action |
|---|---|---|---|---|
| `flat-underrest` | 반죽 휴지 부족 | 신규 | 치댄 뒤 충분히 쉬지 못하면 글루텐이 긴장 상태로 남아 얇게 밀어도 계속 오그라들고, 강제로 늘리면 찢어진다[^2]. | 성형 전 30분 이상(최대 몇 시간까지 가능) 덮어서 실온에 휴지시키세요. 이미 치댄 반죽이 잘 안 늘어나면 5~10분 더 쉬게 한 뒤 다시 시도하세요[^2]. |
| `weak-gluten`(CORE 재사용) | 반죽 구조 약함 | CORE | 지방이 밀가루를 과도하게 코팅하거나 지방·수분 균형이 안 맞으면 반죽이 힘없이 부서져, 얇게 밀 때 저항 없이 구멍이 나거나 찢어진다[^3]. **주의:** 식빵과 달리 토르티야는 글루텐을 "더 발달시키는" 방향의 조치(장시간 치대기)가 답이 아니다 — 목표는 최소한의 결합력이다. | 지방(라드/쇼트닝)과 물 비율을 레시피대로 정확히 계량하고, 2분 내외로만 가볍게 치대 결합력만 만드세요[^3]. |
| `excess-hydration`(CORE 재사용) | 수분 과다 | CORE | 물이 많으면 반죽이 질척해 다루기 힘들고, 구운 뒤에도 안까지 잘 마르지 않아 찐득한 느낌이 남는다(일반 제빵 상식 — 이 방향은 출처 미확인). | 물 양을 5~10% 줄이거나 덧가루를 더해 반죽 농도를 "붙었다 떼는 스티키노트" 정도로 맞추세요[^2]. |
| `flat-underhydrated` | 수분 부족 | 신규 | 수분이 부족하면 반죽이 뻑뻑해 밀 때 갈라지거나 가장자리가 부서지고, 구운 뒤 빨리 말라 뻣뻣해진다[^2]. | 따뜻한 물(약 40~50℃)을 반죽이 "촉촉하지만 안 붙는" 농도가 될 때까지 조금씩 추가하세요[^2]. |
| `flat-uneven-thickness` | 두께 불균일/과다 | 신규(스캐폴드 공유, `_taxonomy.md` B6 후보와 동일 의도) | 밀대로 고르게 밀지 못하면 두꺼운 부분은 속까지 안 익고, 얇은 부분은 타거나 뚫린다[^3][^4]. | 중심에서 바깥으로("해가 뻗어나가듯") 밀고, 90도씩 돌려가며 두께를 확인하세요[^2]. |
| `oven-too-hot`(CORE 재사용, 팬/그리들 과열) | 팬 온도 너무 높음 | CORE | 팬이 과열되면 표면 반점이 순식간에 타버리고 속까지 열이 전달되기 전에 겉이 딱딱해진다[^2]. | 불을 살짝 줄이고 굽는 시간을 조금 늘려, 반점이 타지 않고 고르게 생기도록 조절하세요[^2]. |
| `oven-too-cool`(CORE 재사용, 팬/그리들 예열 부족) | 팬 온도 너무 낮음 | CORE | 예열이 부족하면 수증기가 급격히 생기지 않아 기포·부풀음이 안 생기고 색도 잘 안 난다[^3][^4]. | 무유 팬(코팅 없이)을 물방울이 튀자마자 증발할 정도로 충분히 예열한 뒤 구우세요[^2]. |

## 증상 (Symptoms)

| id | label | 구분 |
|---|---|---|
| `flat-tears-rolling` | 밀 때 찢어지거나 구멍이 남 | 신규 |
| `flat-shrinks-back` | 밀어도 자꾸 오그라들어 얇아지지 않음 | 신규 |
| `too-wet`(CORE 재사용) | 반죽이 너무 질어 성형 안 됨 | CORE |
| `flat-no-bubbles` | 구울 때 기포/부풀음이 거의 안 생기고 평평함 | 신규 |
| `flat-tough-chewy` | 다 구운 뒤에도 질기고 뻣뻣해서 씹기 힘듦 | 신규 |
| `flat-dry-brittle` | 식으면 금방 말라 부스러지거나 갈라짐 | 신규 |
| `flat-doughy-thick` | 두껍고 속까지 안 익어 찐득함 | 신규 |
| `pale`(CORE 재사용) | 색이 안 남 / 창백함 | CORE |
| `burnt-outside-raw-inside`(CORE 재사용) | 겉은 탔는데 속(또는 두꺼운 부분)은 덜 익음 | CORE |

## 매트릭스 (●● = 강한 연관 2점, ● = 약한 연관 1점, 빈칸 = 0)

| 원인 \ 증상 | tears-rolling | shrinks-back | too-wet | no-bubbles | tough-chewy | dry-brittle | doughy-thick | pale | burnt-out-raw-in |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **flat-underrest** | ●● | ●● |    |    | ●  |    |    |    |    |
| **weak-gluten** | ●● |    | ●● |    |    |    | ●  |    |    |
| **excess-hydration** |    |    | ●● | ●  |    |    | ●● |    |    |
| **flat-underhydrated** | ●● |    |    | ●  |    | ●● |    |    |    |
| **flat-uneven-thickness** |    |    |    | ●  |    |    | ●● |    | ●●  |
| **oven-too-hot** |    |    |    |    |    | ●  |    |    | ●●  |
| **oven-too-cool** |    |    |    | ●● |    |    | ●  | ●● |    |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `flat-tears-rolling` (밀 때 찢어짐) — FLAT

| 원인 | 점수 |
|---|:--:|
| flat-underrest | 2 |
| weak-gluten | 2 |
| flat-underhydrated | 2 |

→ **2점 3개 동점.** "찢어진다"는 사실만으로는 휴지 부족(탄성 저항)·구조 약함(힘없이 부서짐)·수분 부족(뻑뻑함) 중 무엇인지 전혀 못 좁힌다. 단일 증상은 쓸모없다는 점을 재확인.

### ✅ 조합 A: `flat-tears-rolling` + `flat-shrinks-back` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **flat-underrest** | 2+2 | **4** 🥇 |
| weak-gluten | 2+0 | 2 |
| flat-underhydrated | 2+0 | 2 |

→ **flat-underrest이 4 vs 2로 뾰족하게 1위.** "밀어도 자꾸 오그라든다"는 탄성 저항의 증거이며, 구조 약함(무저항 파손)이나 수분 부족과는 구분되는 휴지 부족의 결정타다.

### ✅ 조합 B: `pale` + `flat-no-bubbles` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **oven-too-cool** | 2+2 | **4** 🥇 |
| flat-uneven-thickness | 0+1 | 1 |
| excess-hydration | 0+1 | 1 |
| flat-underhydrated | 0+1 | 1 |

→ **oven-too-cool이 4 vs 1로 압도적 1위.** 팬 예열 부족은 다른 원인과 거의 겹치지 않아 매우 잘 분리된다.

### ✅ 조합 C: `flat-doughy-thick` + `burnt-outside-raw-inside` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **flat-uneven-thickness** | 2+2 | **4** 🥇 |
| excess-hydration | 2+0 | 2 |
| oven-too-hot | 0+2 | 2 |
| oven-too-cool | 1+0 | 1 |

→ **flat-uneven-thickness가 4 vs 2로 1위.** "두껍고 안 익음" + "겉만 탐"의 조합은 두께 불균일에 가장 강하게 몰린다.

---

## 결론 (판정: PEAKED, 단 동점쌍 있음)

- ✅ 서로 다른 축의 증상 2개를 조합하면 대부분 **뾰족한 top-1**이 나온다 (조합 A·B·C).
- ⚠️ 단일 증상 `flat-tears-rolling`만으로는 `flat-underrest` / `weak-gluten` / `flat-underhydrated` 세 원인이 완전히 동점이다. 조합 A는 `flat-underrest`만 갈라내고, `weak-gluten`↔`flat-underhydrated`는 여전히 구분이 안 되므로 판별 질문이 필요하다.

### DiscriminatorQuestion 제안

```ts
{
  id: "q-underrest-vs-weakgluten",
  pair: ["flat-underrest", "weak-gluten"],
  text: "반죽을 늘리려고 놓으면 다시 오그라드는 저항감이 강하게 느껴지나요?",
  yesFavors: "flat-underrest",
  noFavors: "weak-gluten",
}
{
  id: "q-weakgluten-vs-underhydrated",
  pair: ["weak-gluten", "flat-underhydrated"],
  text: "반죽을 만졌을 때 뻑뻑하고 마른 느낌인가요?",
  yesFavors: "flat-underhydrated",
  noFavors: "weak-gluten",
}
```

### SynonymEntry 초안

```ts
{ symptomId: "flat-tears-rolling", terms: ["찢어져요", "구멍이 나요", "밀다가 뚫려요"] }
{ symptomId: "flat-shrinks-back", terms: ["자꾸 오그라들어요", "안 늘어나요", "밀어도 줄어들어요"] }
{ symptomId: "flat-no-bubbles", terms: ["기포가 안 생겨요", "안 부풀어요", "밋밋해요"] }
{ symptomId: "flat-tough-chewy", terms: ["질겨요", "뻣뻣해요", "고무같아요"] }
{ symptomId: "flat-dry-brittle", terms: ["금방 딱딱해져요", "부서져요", "말라요"] }
{ symptomId: "flat-doughy-thick", terms: ["속이 안 익어요", "찐득해요", "너무 두꺼워요"] }
```

---

## 출처

- [^1]: 일반 제빵 상식 — 출처 미확인. (전통 밀가루 토르티야의 무발효/최소 화학팽창 특성은 여러 자료에서 공통적으로 언급되지만, 이 문서에서 King Arthur/ATK 원문으로 직접 확인한 문장은 아님.)
- [^2]: King Arthur Baking. "How to make tortillas from scratch." (블로그, 2019-05-02) — https://www.kingarthurbaking.com/blog/2019/05/02/make-tortillas-scratch (WebFetch로 원문 확인) / "Flour Tortillas Recipe" — https://www.kingarthurbaking.com/recipes/flour-tortillas-recipe (WebFetch로 원문 확인)
- [^3]: America's Test Kitchen. "Homemade Taco-Size Flour Tortillas." — https://www.americastestkitchen.com/recipes/16425-homemade-taco-size-flour-tortillas (WebFetch로 원문 확인: 반죽 농도/지방 균형, 냉장 휴지, 두꺼운 팬 예열, 표면 기포 확인 등)
- [^4]: America's Test Kitchen 관련 검색 요약 인용(원문 페이지 직접 열람은 못함) — "지방이 너무 적으면 잘 부서지고, 소금이 부족하면 맛이 없고, 베이킹파우더가 많으면 뻑뻑하고 두꺼워진다", "따뜻한 물이 쇼트닝을 녹여 밀가루를 코팅해 글루텐 발달을 줄이고 부드럽게 만든다" 등. 검색 결과에서 인용된 문구이며 해당 ATK 기사 원문을 직접 열어 재확인하지는 못했다. 참고용으로만 사용하고 단정적 수치(예: 정확한 온도)는 넣지 않았다.

**제외한 조사 결과:** Serious Eats/ThermoWorks 블로그가 인용한 "Serious Eats 토르티야 레시피"(뜨거운 물 125°F 템퍼링 등)는 ThermoWorks가 `_taxonomy.md` 허용 출처 목록에 없고 Serious Eats 원문을 직접 확인하지 못해 이 문서에는 반영하지 않았다.
