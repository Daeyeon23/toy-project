# 증상×원인 매트릭스 — 라바쉬 (id: lavash)

> **범위:** 전통 라바쉬(아르메니아식 얇은 플랫브레드)를 기준으로 한다. 일부 현대 레시피(King Arthur의
> 예반죽/preferment 버전, Serious Eats의 저온 장시간 발효 버전)는 소량의 이스트를 쓰지만[^1][^2],
> 라바쉬의 구조적 성패는 얇게 늘리기·팬/화덕 온도에 좌우되며 이스트는 풍미·보관성 정도에만 영향을 준다는
> 것이 King Arthur 원문의 서술이다[^1]. 따라서 이 매트릭스에서도 CORE 발효 코드(`yeast-dead`/
> `underproof`/`overproof`/`cold-environment`)는 제외한다.
>
> **자료 한계 고지:** 라바쉬는 토르티야보다 영어권 자료가 훨씬 적다. King Arthur의 정식 레시피 페이지
> 1건[^1]은 원문을 직접 확인했다. Serious Eats(Andrew Janjigian 저)의 라바쉬 레시피는 실존을 확인했지만
> 본문 접근에 실패해 재료 구성과 소요시간 등 검색 결과에 나온 사실만 인용했고[^2], 조리법상 트러블슈팅
> 문구는 인용하지 않았다. 그 외 라바쉬 특유의 증상(피타처럼 과하게 부풀어 오름 등)은 여러 개인 블로그에서
> 반복적으로 언급되지만 `_taxonomy.md` 허용 출처 목록에 없어 전부 "출처 미확인 — 일반 제빵 상식"으로
> 표기했다.

## 원인 (Causes)

| id | name | 구분 | why | action |
|---|---|---|---|---|
| `flat-underrest`(토르티야와 코드 공유) | 반죽 휴지 부족 | 신규 | 1차 반죽 후, 그리고 분할 후 각각 충분히 쉬지 못하면 반죽이 "이완"되지 않아 얇게 늘릴 때 계속 오그라들고 저항이 강해 찢어진다[^1]. | 1차 발효/휴지 후 눌러도 자국이 서서히 돌아오는 "이완" 상태까지 쉬게 하고, 분할 후에도 밀기 전에 다시 쉬게 하세요. 저항이 느껴지면 손 위에 반죽을 걸쳐 늘리듯 부드럽게 당겨 보세요[^1]. |
| `weak-gluten`(CORE 재사용) | 반죽 구조 약함 | CORE | 강력분 비중이 너무 낮거나(예: '00' 밀가루만 사용) 너무 얇게 늘리면 구조가 버티지 못해 저항 없이 구멍이 나거나 찢어진다[^1]. | 강력분(bread flour)과 '00' 밀가루를 레시피 비율대로 섞어 쓰고, 한 번에 너무 얇게 늘리지 말고 단계적으로 늘려 보세요[^1]. |
| `flat-underhydrated` (토르티야와 코드 공유) | 수분 부족 | 신규 | 수분이 부족하면 반죽이 뻑뻑해 늘릴 때 갈라지고, 구운 뒤 금방 말라 딱딱해진다(일반 제빵 상식 — 출처 미확인). | 반죽이 매끄럽고 약간 촉촉하게 뭉쳐질 정도로 물을 조금씩 추가하세요. |
| `excess-hydration`(CORE 재사용) | 수분 과다 | CORE | 물이 많으면 반죽이 늘어지고 다루기 힘들어지며, 구운 뒤에도 속이 눅눅하게 남는다(일반 제빵 상식 — 출처 미확인). | 물 양을 줄이거나 덧가루로 반죽 농도를 조절하세요. |
| `flat-uneven-thickness`(토르티야와 코드 공유) | 두께 불균일 | 신규 | 13×9인치 정도의 큰 타원으로 고르게 늘리지 못하면 두꺼운 부분은 안 익고 얇은 부분은 타거나 뚫린다[^1]. | 가운데보다 가장자리를 살짝 더 두껍게 남기며 최대한 고르고 얇게 늘리세요[^1]. |
| `oven-too-hot`(CORE 재사용, 브로일/화덕 과열) | 화덕/브로일 온도 너무 높음 | CORE | 브로일·고온 화덕에서 너무 오래/세게 구우면 표면이 순식간에 타면서 고르게 갈색이 나지 않고 부분적으로 딱딱해진다[^1]. | 30초~1분 단위로 짧게 굽고 색이 나는 정도를 계속 확인하세요[^1]. |
| `oven-too-cool`(CORE 재사용) | 화덕/팬 예열 부족 | CORE | 충분히 예열되지 않으면 반점(블리스터)과 부풀음이 안 생기고 색이 밋밋하게 남는다[^1]. | 오븐/화덕용 스틸이나 스톤을 500°F(약 260℃)까지 충분히 예열한 뒤 구우세요[^1]. |
| `flat-air-pocket` | 표면 밀착 부족(공기층 형성) | 신규(라바쉬 전용) | 반죽을 늘릴 때 두 겹이 서로 눌러 붙지 않거나 표면에 구멍을 내지 않으면, 굽는 동안 안쪽에 큰 공기주머니가 생겨 피타처럼 부풀어 오른다(일반 제빵 상식 — 출처 미확인, King Arthur 원문에는 이 메커니즘이 명시돼 있지 않음). | 늘린 반죽 표면을 포크 등으로 가볍게 찔러 두거나 밀착시켜, 구울 때 한 곳에 공기가 크게 갇히지 않게 하세요. |

## 증상 (Symptoms)

| id | label | 구분 |
|---|---|---|
| `flat-tears-rolling`(공유) | 늘릴 때 찢어지거나 구멍이 남 | 신규 |
| `flat-shrinks-back`(공유) | 늘려도 자꾸 오그라들어 얇아지지 않음 | 신규 |
| `too-wet`(CORE 재사용) | 반죽이 너무 질어 성형 안 됨 | CORE |
| `flat-no-bubbles`(공유) | 구울 때 반점(블리스터)·부풀음이 거의 안 생김 | 신규 |
| `flat-tough-chewy`(공유) | 다 구운 뒤 질기고 뻣뻣해서 씹기 힘듦 | 신규 |
| `flat-dry-brittle`(공유) | 식으면 금방 말라 부스러지거나 갈라짐 | 신규 |
| `flat-doughy-thick`(공유) | 두껍고 속까지 안 익어 찐득함 | 신규 |
| `pale`(CORE 재사용) | 색이 안 남 / 창백함 | CORE |
| `burnt-outside-raw-inside`(CORE 재사용) | 겉(또는 두꺼운 부분 표면)은 탔는데 안쪽은 덜 마름 | CORE |
| `flat-overpuffed` | 피타처럼 크게 부풀어 속에 큰 공기주머니가 생김 | 신규(라바쉬 전용 — 라바쉬는 얇고 평평해야 하므로 이 자체가 실패 증상) |

## 매트릭스 (●● = 강한 연관 2점, ● = 약한 연관 1점, 빈칸 = 0)

| 원인 \ 증상 | tears-rolling | shrinks-back | too-wet | no-bubbles | tough-chewy | dry-brittle | doughy-thick | pale | burnt-out-raw-in | overpuffed |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **flat-underrest** | ●● | ●● |    |    | ●  |    |    |    |    |    |
| **weak-gluten** | ●● |    | ●  |    |    |    |    |    |    |    |
| **flat-underhydrated** | ●  |    |    |    | ●  | ●● |    |    |    |    |
| **excess-hydration** |    |    | ●● |    |    |    | ●  |    |    |    |
| **flat-uneven-thickness** |    |    |    | ●  |    |    | ●● |    | ●●  |    |
| **oven-too-hot** |    |    |    |    |    | ●  |    |    | ●●  | ●  |
| **oven-too-cool** |    |    |    | ●● |    |    | ●  | ●● |    |    |
| **flat-air-pocket** |    |    |    |    |    |    | ●  |    |    | ●●  |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `flat-tears-rolling` (늘릴 때 찢어짐) — FLAT(2단 동점)

| 원인 | 점수 |
|---|:--:|
| flat-underrest | 2 |
| weak-gluten | 2 |
| flat-underhydrated | 1 |

→ **flat-underrest와 weak-gluten이 2점으로 동점.** "찢어진다"만으로는 탄성 저항형(휴지 부족)인지 무저항 파손형(구조 약함)인지 못 가른다.

### ✅ 조합 A: `flat-tears-rolling` + `too-wet` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **weak-gluten** | 2+1 | **3** 🥇 |
| flat-underrest | 2+0 | 2 |
| excess-hydration | 0+2 | 2 |

→ **weak-gluten이 3 vs 2로 근소하게 1위.** 마진이 크지 않아(1점 차) 실제 서비스에서는 "그래도 반죽이 찢어졌나요?" 같은 확인 질문을 병행하는 게 안전하다는 점을 정직하게 남긴다.

### ✅ 조합 B: `flat-dry-brittle` + `flat-tough-chewy` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **flat-underhydrated** | 2+1 | **3** 🥇 |
| flat-underrest | 0+1 | 1 |
| oven-too-hot | 1+0 | 1 |

→ **flat-underhydrated가 3 vs 1로 뚜렷하게 1위.**

### ✅ 조합 C: `burnt-outside-raw-inside` + `flat-doughy-thick` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **flat-uneven-thickness** | 2+2 | **4** 🥇 |
| oven-too-hot | 2+0 | 2 |
| excess-hydration | 0+1 | 1 |
| oven-too-cool | 0+1 | 1 |
| flat-air-pocket | 0+1 | 1 |

→ **flat-uneven-thickness가 4 vs 2로 뚜렷하게 1위.**

### ⚠️ 조합 D (정직한 반례): `flat-tears-rolling` + `flat-doughy-thick`만 — FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| flat-underrest | 2+0 | 2 |
| weak-gluten | 2+0 | 2 |
| flat-uneven-thickness | 0+2 | 2 |

→ **세 원인이 2점으로 동점.** "늘릴 때 찢어졌다"와 "두껍고 안 익었다"만으로는 휴지 부족·구조 약함·두께 불균일 중 무엇인지 못 가른다. 이건 매트릭스 결함이 아니라, 얇게 늘리는 실패가 여러 원인에서 비슷하게 나타나는 도메인의 사실이다(식빵 MBT#1의 조합 D와 동일한 종류의 정직한 한계).

---

## 결론 (판정: PEAKED, 단 동점쌍 다수 — 판별 질문 의존도가 토르티야보다 높음)

- ✅ 서로 다른 축의 증상을 조합하면 대부분 top-1이 나온다(조합 A·B·C). 다만 조합 A는 마진이 1점뿐이라 "약하게 peaked"로 취급해야 한다.
- ⚠️ 단일 증상 `flat-tears-rolling`은 물론, 조합 D처럼 "늘리기 실패 + 굽기 실패"를 섞어도 세 원인이 동점이 될 수 있다. 라바쉬는 토르티야보다 판별 질문에 더 의존해야 한다.
- `flat-overpuffed`/`flat-air-pocket` 쌍은 이 배치에서 유일하게 확실히 연결된 증상-원인이라, 사용자가 이 증상을 보고하면 매우 뾰족하게 좁혀진다(다른 원인은 overpuffed에 전혀 관여하지 않음).

### DiscriminatorQuestion 제안

```ts
{
  id: "q-underrest-vs-weakgluten", // 토르티야 문서와 동일 질문 재사용 가능
  pair: ["flat-underrest", "weak-gluten"],
  text: "반죽을 늘리려고 놓으면 다시 오그라드는 저항감이 강하게 느껴지나요?",
  yesFavors: "flat-underrest",
  noFavors: "weak-gluten",
}
{
  id: "q-thickness-check",
  pair: ["flat-uneven-thickness", "flat-underrest"],
  text: "반죽 두께가 부위별로 심하게 다른가요(가운데만 두껍거나 얇음)?",
  yesFavors: "flat-uneven-thickness",
  noFavors: "flat-underrest",
}
```

### SynonymEntry 초안

```ts
{ symptomId: "flat-overpuffed", terms: ["피타처럼 부풀어요", "속에 공기주머니가 생겨요", "너무 많이 부풀어요"] }
{ symptomId: "flat-air-pocket"" /* 원인 코드이므로 증상 동의어 대상 아님 — 참고용 제외 */ }
{ symptomId: "flat-tears-rolling", terms: ["늘리다가 찢어져요", "구멍이 나요", "얇게 안 펴져요"] }
{ symptomId: "flat-no-bubbles", terms: ["반점이 안 생겨요", "안 부풀어요", "밋밋해요"] }
```

---

## 출처

- [^1]: King Arthur Baking. "Lavash Recipe." — https://www.kingarthurbaking.com/recipes/lavash-recipe (WebFetch로 원문 확인: 밀가루 배합, 1시간+1시간 휴지, 손으로 늘리는 기법, 13×9인치 목표, 브로일 30초~1분, 반점/부풀음, 보관 시 물 뿌려 되살리기 등)
- [^2]: Serious Eats. Andrew Janjigian, "Lavash (Armenian Flatbread)" — https://www.seriouseats.com/lavash-armenian-flatbread-5206283 . **확인 상태: URL·저자·재료 구성(브레드플라워·통밀가루·옥수수전분·인스턴트 이스트·꿀·식물성 오일·소금)·총 소요시간(14시간 25분)은 검색 결과 스니펫으로 확인.** WebFetch가 차단되어 본문(트러블슈팅 문구)은 직접 확인하지 못했으며, 그 내용은 이 문서에 인용하지 않았다.
- 그 외 "피타처럼 과하게 부풀어 오름", "가장자리가 뻣뻣하게 갈라짐" 등 개인 블로그(Daring Gourmet, Hilda's Kitchen 등)에서 반복 언급된 증상은 `_taxonomy.md` 허용 출처 목록에 해당하지 않아 인용하지 않고, 매트릭스에는 "출처 미확인 — 일반 제빵 상식"으로만 반영했다(`flat-air-pocket` 원인, `flat-overpuffed`↔`oven-too-hot` 연관, `flat-underhydrated`/`excess-hydration` 일부 항목).
