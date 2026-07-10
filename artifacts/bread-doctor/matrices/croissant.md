# 증상×원인 매트릭스 — 크루아상 (croissant)

> **목적:** 버터 라미네이션(접기) 기반 빵의 실패 양상을 매트릭스로 검증한다 (B2 배치, 식빵 MBT#1과 동일 형식).
> CORE 원인/증상 id는 `_taxonomy.md`를 재사용하고, 라미네이션 고유 실패는 `lam-` 접두사로 신규 코드화했다.
> 단정적 진단이 아니라 빌드 전 종이 검증 스케치이며, 각주로 출처를 표시했다. 확인 불가한 주장은 "출처 미확인 — 일반 제빵 상식"으로 표기했다.

## 원인 (Causes)

| id | name | why | action | 근거 |
|---|---|---|---|---|
| `underproof` (CORE 재사용) | 최종 발효 부족 | 성형 후 충분히 부풀지 않은 채 구우면 오븐 스프링이 약해 층 사이 공간이 안 열리고, 속이 익지 않은 채 조밀해집니다. | 손가락으로 눌렀을 때 자국이 서서히 돌아올 때까지 1~1.5시간 상온에서 최종 발효하세요. | [2][4] |
| `overproof` (CORE 재사용) | 과발효 | 반죽이 너무 오래 부풀면 글루텐과 버터층의 구조가 약해져 굽는 중 주저앉고, 효모 대사산물로 신맛이 납니다. | 부피가 눈에 띄게 커지되 손가락 자국이 아주 서서히만 돌아오는 시점에 멈추고 바로 구우세요. | 출처 미확인 — 일반 제빵 상식 |
| `oven-too-hot` (CORE 재사용) | 오븐 온도 너무 높음 | 겉면이 먼저 짙게 익어버려 속의 층까지 열이 전달되기 전에 겉이 타거나 두꺼워집니다. | 예열 온도를 레시피대로(예: 220℃ 투입 후 200℃로 낮춤) 지키고 오븐 온도계로 확인하세요. | [2] |
| `oven-too-cool` (CORE 재사용) | 오븐 온도 낮음/굽기 부족 | 열이 부족하면 겹쳐진 부분(시작·끝 단)까지 열이 못 미쳐 날반죽이 남고 색이 약해집니다. | 오븐을 충분히 예열하고, 겹쳐진 단에 생반죽이 안 보일 때까지 굽는 시간을 늘리세요. | [2] |
| `weak-gluten` (CORE 재사용) | 반죽 개발/휴지 부족 | 글루텐이 덜 형성된 반죽은 밀 때 저항 없이 찢어져 버터가 반죽을 뚫고 나오거나 층이 한쪽으로 몰립니다. | 밀 때 반죽이 수축하거나 찢어지면 즉시 3단 접어 냉동실에 15분 넣어 휴지시키세요. | [4] |
| `lam-butter-melted` (신규) | 라미네이션·성형·최종발효 중 버터가 물러지거나 일부 녹음 | 작업 환경이 너무 따뜻하거나(80℉/27℃ 초과) 성형 후 냉장 없이 바로 발효하면 버터가 반죽에 흡수되거나 굽기 전에 새어나옵니다. | 접기 사이·성형 후 각각 냉장(30분 이상)해 버터를 다시 굳히고, 작업실 온도를 서늘하게 유지하세요. | [1][2] |
| `lam-cold-butter-fracture` (신규) | 버터가 반죽보다 훨씬 차갑고 단단해 밀 때 깨짐 | 버터가 유연하지 않으면 밀대 압력에 조각조각 부서져 반죽 속에 불균일하게 흩어지고, 그 틈으로 반죽끼리 눌러붙습니다. | 버터를 밀기 전 "차갑지만 손가락으로 눌리는" 정도까지 실온에 두거나 두들겨 펴서 반죽과 비슷한 굳기로 맞추세요. | [2][4] |
| `lam-underlamination` (신규) | 접기 횟수 부족 또는 불균일한 밀기로 버터가 고르게 안 퍼짐 | 버터가 반죽 전체에 균일하게 분포하지 못하면 버터가 있는 곳과 없는 곳의 층 발달이 달라져 부분적으로 층이 아예 안 생깁니다. | 매 접기 전 반죽을 균일한 두께로 밀고, 모서리까지 버터가 덮이는지 확인하세요. | [1] |
| `lam-overlamination` (신규) | 접기·밀기를 과도하게 반복해 버터층이 지나치게 얇아짐 | 버터가 너무 얇게 눌리면 오븐에서 증기를 낼 수분이 부족해 층이 서로 붙어버리고, 반죽도 팽창을 못 견디게 팽팽해집니다. | 접기는 3~4회(레시피 기준)를 넘기지 말고, 접을 때마다 충분히 휴지시켜 반죽이 지나치게 늘어나지 않게 하세요. | [1] |
| `lam-low-fat-butter` (신규) | 저지방·고수분(일반 슈퍼마켓용) 버터 사용 | 수분이 많은 버터는 미는 동안 부서져 반죽과 뒤섞이며, 뚜렷한 층 대신 반죽에 흡수되어 무거운 결과를 냅니다. | 지방 82% 이상의 유럽식(발효) 버터를 사용하세요. | [3][4] |

## 증상 (Symptoms)

| id | label | 근거 |
|---|---|---|
| `no-rise` (CORE) | 거의 안 부풀고 오븐 스프링이 없음, 눌린 채로 구워짐 | [1] |
| `collapsed` (CORE) | 부풀다 주저앉음 | 출처 미확인 — 일반 제빵 상식 |
| `gummy` (CORE) | 겹쳐진 부분/속이 떡지고 안 익음 | [2] |
| `pale` (CORE) | 색이 안 남/창백함 | 출처 미확인 — 일반 제빵 상식 |
| `burnt-outside-raw-inside` (CORE) | 겉은 진한 갈색인데 층 사이는 안 익음 | [2] |
| `thick-crust` (CORE) | 겉이 두껍고 딱딱함 | 출처 미확인 — 일반 제빵 상식 |
| `sour-smell` (CORE) | 신맛/이상한 냄새 | 출처 미확인 — 일반 제빵 상식 |
| `lam-butter-leak` (신규) | 구울 때 버터가 흘러나와 팬에 웅덩이/탄 자국이 생김 | [1][2] |
| `lam-flat-no-layers` (신규) | 단면이 조밀하고 층이 잘 안 보임 (뻑뻑하고 무거운 식감, 벌집 구조 실패) | [1] |
| `lam-uneven-layers` (신규) | 층이 한쪽은 두껍고 한쪽은 얇게 불균일함 | [2][4] |
| `lam-butter-streaks-raw` (신규) | 겉은 익었는데 층 사이에 날가루/생버터 얼룩이 보임 | 출처 미확인 — 일반 제빵 상식 |
| `lam-greasy-texture` (신규) | 다 구운 후 속이 기름지고 눅눅하며 손에 기름이 묻음 | [3] |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | no-rise | collapsed | gummy | pale | burnt-out-raw-in | thick-crust | sour-smell | lam-butter-leak | lam-flat-no-layers | lam-uneven-layers | lam-butter-streaks-raw | lam-greasy-texture |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **underproof** | ●● | | ●● | | | | | ● | | | | |
| **overproof** | | ●● | | | | | ● | | ● | | | |
| **oven-too-hot** | | | | | ●● | ●● | | ● | | | | |
| **oven-too-cool** | | | ●● | ●● | | | | | ● | | | |
| **weak-gluten** | | ● | | | | | | | | ●● | ● | |
| **lam-butter-melted** | | | | | | | | ●● | ●● | | | ●● |
| **lam-cold-butter-fracture** | | | | | | | | | ● | ●● | ● | |
| **lam-underlamination** | | | | | | | | ● | ●● | ●● | | |
| **lam-overlamination** | ● | | | | | | | | ●● | | | |
| **lam-low-fat-butter** | ● | | | | | | | | ●● | | | ●● |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `lam-flat-no-layers` (층이 안 보임) — FLAT

| 원인 | 점수 |
|---|:--:|
| lam-butter-melted | 2 |
| lam-underlamination | 2 |
| lam-overlamination | 2 |
| lam-low-fat-butter | 2 |
| overproof | 1 |
| oven-too-cool | 1 |
| lam-cold-butter-fracture | 1 |

→ **2점 4개 동점.** "층이 안 보인다"만으로는 버터 온도 문제/접기 부족/접기 과다/버터 재질 문제를 전혀 못 가른다. 단일 증상은 식빵 MBT#1과 동일하게 쓸모없음을 재확인.

### ✅ 조합 A: `lam-butter-leak` + `lam-flat-no-layers` + `lam-greasy-texture` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **lam-butter-melted** | 2+2+2 | **6** 🥇 |
| lam-low-fat-butter | 0+2+2 | 4 |
| lam-underlamination | 1+2+0 | 3 |
| lam-overlamination | 0+2+0 | 2 |

→ **lam-butter-melted가 6 vs 4로 뾰족하게 1위.** 버터가 "눈에 보이게 흘러나옴"(leak)이 결정타 — 저지방 버터 문제는 흘러나오기보다 반죽에 흡수돼 기름져지는 쪽이라 leak 점수가 없다.

### ✅ 조합 B: `no-rise` + `gummy` + `lam-butter-leak` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **underproof** | 2+2+1 | **5** 🥇 |
| oven-too-cool | 0+2+0 | 2 |
| lam-butter-melted | 0+0+2 | 2 |
| lam-overlamination | 1+0+0 | 1 |

→ **underproof 1위.** 5 vs 2로 확실히 갈림 — "덜 부풀고+속이 떡지고+버터가 샘"의 조합은 최종 발효 부족의 전형적 신호.

### ✅ 조합 C: `burnt-outside-raw-inside` + `thick-crust` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **oven-too-hot** | 2+2 | **4** 🥇 |
| (나머지) | | 0 |

→ 압도적. 오븐 고온은 다른 원인과 증상이 거의 안 겹쳐 매우 잘 분리된다 (식빵 매트릭스의 조합 C와 동일한 패턴).

### ⚠️ 조합 D (정직한 반례): `lam-uneven-layers` 단독 — 3파 동점

| 원인 | 점수 |
|---|:--:|
| weak-gluten | 2 |
| lam-cold-butter-fracture | 2 |
| lam-underlamination | 2 |

→ "층이 불균일하다"만으로는 **글루텐 부족/버터가 깨짐/접기 자체가 불균일**을 못 가른다. `lam-butter-streaks-raw`(weak-gluten·cold-butter-fracture에만 1점)를 추가해도 두 원인은 여전히 동점 — 판별 질문이 필요한 진짜 반례.

---

## 결론

**PEAKED — 단, 두 개의 근접 원인쌍이 존재한다.**

- ✅ 축이 다른 증상(예: leak + flat + greasy, 또는 no-rise + gummy + leak)을 조합하면 뾰족한 top-1이 나온다 (조합 A·B·C).
- ✅ `burnt-outside-raw-inside`처럼 원인-특이적 증상은 단독으로도 강력한 판별자다.
- ⚠️ 두 쌍이 증상만으로 거의 안 갈린다:
  1. **weak-gluten ↔ lam-cold-butter-fracture** (조합 D) — 둘 다 층이 불균일해짐.
  2. **lam-butter-melted ↔ lam-low-fat-butter** — `lam-flat-no-layers`+`lam-greasy-texture`만 보면 둘 다 4점 동점 (leak이 없으면). 같은 논리로 **lam-overlamination ↔ lam-low-fat-butter**도 `no-rise`+`lam-flat-no-layers`만으로는 3점 동점.

### → DiscriminatorQuestion 제안

| id | pair | 질문 | yesFavors | noFavors |
|---|---|---|---|---|
| `q-weak-gluten-vs-cold-butter` | [`weak-gluten`, `lam-cold-butter-fracture`] | 반죽을 밀 때 반죽 자체가 찢어졌나요 (버터 조각이 아니라)? | `weak-gluten` | `lam-cold-butter-fracture` |
| `q-butter-melted-vs-low-fat` | [`lam-butter-melted`, `lam-low-fat-butter`] | 사용한 버터가 지방 82% 이상의 유럽식(발효) 버터였나요? | `lam-butter-melted` | `lam-low-fat-butter` |
| `q-overlamination-vs-underlamination` | [`lam-overlamination`, `lam-underlamination`] | 접기(턴)를 4번보다 많이 했나요? | `lam-overlamination` | `lam-underlamination` |

### SynonymEntry 초안 (신규 증상)

```
{ symptomId: "lam-butter-leak", terms: ["버터가 흘러나와요", "버터가 새요", "기름 웅덩이가 생겨요", "버터가 다 빠져나갔어요"] }
{ symptomId: "lam-flat-no-layers", terms: ["층이 안 보여요", "겹이 안 생겼어요", "빵이 조밀해요", "벌집무늬가 없어요"] }
{ symptomId: "lam-uneven-layers", terms: ["층이 삐뚤빼뚤해요", "한쪽만 결이 있어요", "층이 고르지 않아요"] }
{ symptomId: "lam-butter-streaks-raw", terms: ["속에 버터 얼룩이 있어요", "안쪽에 생버터 자국이 보여요", "밀가루 줄이 보여요"] }
{ symptomId: "lam-greasy-texture", terms: ["속이 기름져요", "느끼해요", "손에 기름이 묻어요", "눅눅하고 번들거려요"] }
```

---

## 출처 각주

- [1] King Arthur Baking, "When less is more: Why fewer folds make a better croissant" (2021) — https://www.kingarthurbaking.com/blog/2021/10/19/fewer-folds-makes-better-croissants
- [2] King Arthur Baking, "Making Baker's Croissants"(Capturing Butter Heaven, 2011) 및 Baker's Croissants Recipe — https://www.kingarthurbaking.com/blog/2011/02/21/capturing-butter-heaven-making-bakers-croissants , https://www.kingarthurbaking.com/recipes/bakers-croissants-recipe
- [3] America's Test Kitchen, "How to Laminate Pastry Easily" — https://www.americastestkitchen.com/articles/7577-how-to-laminate-pastry-easily
- [4] America's Test Kitchen, Croissants (레시피 헤드노트/버터 블록 기법) — https://www.americastestkitchen.com/recipes/6770-croissants
- 출처 미확인 표기 항목은 일반적인 라미네이션 제빵 상식으로, 개별 사이트에서 문장 그대로 확인하지 못한 채 도메인 지식으로 추론한 내용이다.
