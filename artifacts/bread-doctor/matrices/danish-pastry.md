# 증상×원인 매트릭스 — 데니시 페이스트리 (danish-pastry)

> **목적:** 버터 라미네이션 기반 빵의 실패 양상 검증 (B2 배치, 크루아상과 짝). 크루아상과 라미네이션 관련 `lam-` 코드를 최대한 공유하고,
> 데니시 고유의 **충전물(필링)** 관련 실패만 신규 코드로 추가한다.
> 단정적 진단이 아니라 빌드 전 종이 검증 스케치이며, 각주로 출처를 표시했다. 확인 불가한 주장은 "출처 미확인 — 일반 제빵 상식"으로 표기했다.

## 원인 (Causes)

| id | name | why | action | 근거 |
|---|---|---|---|---|
| `underproof` (CORE 재사용) | 최종 발효 부족 | 성형 후 충분히 부풀지 않으면 오븐 스프링이 약해 층이 안 열리고 속이 조밀하며 버터가 새어나올 틈이 생깁니다. | 성형 후 실온에서 약 1시간, 반죽이 눈에 띄게 부풀 때까지 발효하세요. | [6] |
| `overproof` (CORE 재사용) | 과발효 | 특히 복잡하게 접은 모양(페이스트리 롤 등)은 오래 발효할수록 반죽이 힘을 잃어 모양이 옆으로 터지듯 무너집니다. | 모양이 복잡할수록 발효 시간을 1시간 안팎으로 짧게 잡고 단순한 모양을 우선하세요. | [5] |
| `oven-too-hot` (CORE 재사용) | 오븐 온도 너무 높음 | 겉과 충전물 표면이 먼저 타거나 끓어 넘치며, 속의 층까지 열이 고르게 전달되지 못합니다. | 레시피 온도(예: 200℃)를 지키고, 필요하면 굽는 중간에 은박지로 덮어 표면을 보호하세요. | [6] |
| `oven-too-cool` (CORE 재사용) | 오븐 온도 낮음/굽기 부족 | 열이 부족하면 충전물 주변 반죽까지 열이 못 미쳐 속이 눅눅하고 색이 약해집니다. | 오븐을 충분히 예열하고 색과 반죽 익음을 확인하며 시간을 늘리세요. | 출처 미확인 — 일반 제빵 상식 |
| `weak-gluten` (CORE 재사용) | 반죽 개발/휴지 부족 | 글루텐이 약한 반죽으로 충전물을 감싸거나 접으면 그 부위가 얇아져 찢어지고 충전물이 새어나옵니다. | 반죽이 매끄럽고 탄력 있게 늘어날 때까지 믹싱하고, 충분히 휴지시킨 뒤 성형하세요. | 출처 미확인 — 일반 제빵 상식 |
| `lam-butter-melted` (신규, 크루아상과 공유) | 라미네이션·성형·발효 중 버터가 물러지거나 일부 녹음 | 작업 환경이 따뜻하거나 성형 후 냉장 없이 발효하면 버터가 반죽에 흡수되거나 굽기 전에 새어나옵니다. | 접기 사이·성형 후 냉장해 버터를 다시 굳히고, 서늘한 환경에서 작업하세요. | [1][2] |
| `lam-underlamination` (신규, 크루아상과 공유) | 접기 횟수 부족/불균일한 밀기로 버터가 고르게 안 퍼짐 | 버터 분포가 불균일하면 부분적으로 층이 아예 안 생기고 얇은 곳에서 버터가 새어나옵니다. | 매 접기 전 균일한 두께로 밀고 모서리까지 버터가 덮이는지 확인하세요. | [1] |
| `lam-low-fat-butter` (신규, 크루아상과 공유) | 저지방·고수분 버터 사용 | 수분이 많은 버터는 미는 동안 부서져 반죽에 흡수되며 뚜렷한 층 대신 무겁고 기름진 결과를 냅니다. | 지방 82% 이상의 유럽식 버터를 사용하세요. | [3][4] |
| `lam-filling-too-wet` (신규) | 충전물(크림치즈/과일/커스터드)의 수분이 과다함 | 수분이 많은 충전물은 굽는 동안 반죽 쪽으로 스며들어 속을 눅눅하게 하거나, 끓으면서 밖으로 새어나옵니다. | 과일 충전물은 미리 졸여 수분을 줄이고, 크림치즈 충전물은 물기를 뺀 뒤 사용하세요. | 출처 미확인 — 일반 제빵 상식 |
| `lam-overfilled` (신규) | 충전물을 레시피보다 과도하게 채움 | 충전물이 많으면 봉합 부위가 버티지 못해 굽는 중 터지거나 모양 자체가 무너집니다. | 레시피에 표시된 충전물 양을 지키고, 가장자리를 충분히 남겨 봉합하세요. | 출처 미확인 — 일반 제빵 상식 |

## 증상 (Symptoms)

| id | label | 근거 |
|---|---|---|
| `no-rise` (CORE) | 거의 안 부풀고 오븐 스프링이 없음 | 출처 미확인 — 일반 제빵 상식 |
| `collapsed` (CORE) | 부풀다 주저앉음 | 출처 미확인 — 일반 제빵 상식 |
| `gummy` (CORE) | 속/반죽이 떡지고 안 익음 | 출처 미확인 — 일반 제빵 상식 |
| `pale` (CORE) | 색이 안 남/창백함 | 출처 미확인 — 일반 제빵 상식 |
| `burnt-outside-raw-inside` (CORE) | 겉은 진하게 익었는데 속/충전물 주변은 안 익음 | 출처 미확인 — 일반 제빵 상식 |
| `sour-smell` (CORE) | 신맛/이상한 냄새 | 출처 미확인 — 일반 제빵 상식 |
| `lam-butter-leak` (신규, 공유) | 구울 때 버터가 흘러나와 웅덩이/탄 자국이 생김 | [1][2] |
| `lam-flat-no-layers` (신규, 공유) | 단면이 조밀하고 층이 잘 안 보임 | [1] |
| `lam-greasy-texture` (신규, 공유) | 다 구운 후 속이 기름지고 눅눅함 | [3] |
| `lam-filling-leak` (신규) | 굽는 중 충전물이 옆으로 새어나옴 | 출처 미확인 — 일반 제빵 상식 |
| `lam-soggy-center` (신규) | 충전물 주변 반죽이 눅눅하고 안 익은 느낌 | 출처 미확인 — 일반 제빵 상식 |
| `lam-shape-distortion` (신규) | 모양이 뭉개지거나 충전물이 옆으로 터져나와 형태가 무너짐 | [5] |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | no-rise | collapsed | gummy | pale | burnt-out-raw-in | sour-smell | lam-butter-leak | lam-flat-no-layers | lam-greasy-texture | lam-filling-leak | lam-soggy-center | lam-shape-distortion |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **underproof** | ●● | | ●● | | | | ● | | | | | |
| **overproof** | | ●● | | | | ● | | | | | | ●● |
| **oven-too-hot** | | | | | ●● | | ● | | | ● | | |
| **oven-too-cool** | | | ●● | ●● | | | | | | | ● | |
| **weak-gluten** | | ● | | | | | | | | ●● | | ● |
| **lam-butter-melted** | | | | | | | ●● | ●● | ●● | | | |
| **lam-underlamination** | | | | | | | ● | ●● | | | | |
| **lam-low-fat-butter** | ● | | | | | | | ●● | ●● | | | |
| **lam-filling-too-wet** | | | ● | | | | | | | ●● | ●● | |
| **lam-overfilled** | | | | | | | | | | ●● | ● | ●● |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `lam-filling-leak` (충전물이 샘) — FLAT

| 원인 | 점수 |
|---|:--:|
| weak-gluten | 2 |
| lam-filling-too-wet | 2 |
| lam-overfilled | 2 |
| oven-too-hot | 1 |

→ **2점 3개 동점.** "충전물이 샌다"만으로는 반죽이 약해서인지, 충전물이 질어서인지, 너무 많이 채워서인지 전혀 못 가른다.

### ✅ 조합 A: `lam-flat-no-layers` + `lam-butter-leak` + `lam-greasy-texture` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **lam-butter-melted** | 2+2+2 | **6** 🥇 |
| lam-low-fat-butter | 2+0+2 | 4 |
| lam-underlamination | 2+1+0 | 3 |

→ **lam-butter-melted가 6 vs 4로 뾰족하게 1위.** "버터가 눈에 보이게 흘러나옴"이 결정타 — 저지방 버터는 흘러나오기보다 반죽에 흡수돼 기름져지는 쪽.

### ✅ 조합 B: `no-rise` + `gummy` + `lam-butter-leak` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **underproof** | 2+2+1 | **5** 🥇 |
| oven-too-cool | 0+2+0 | 2 |
| lam-butter-melted | 0+0+2 | 2 |
| lam-filling-too-wet | 0+1+0 | 1 |

→ **underproof 1위.** 5 vs 2로 확실히 갈린다.

### ✅ 조합 C: `lam-filling-leak` + `lam-shape-distortion` + `lam-soggy-center` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **lam-overfilled** | 2+2+1 | **5** 🥇 |
| lam-filling-too-wet | 2+0+2 | 4 |
| weak-gluten | 2+1+0 | 3 |

→ **lam-overfilled 1위**지만 lam-filling-too-wet과 5 vs 4로 근접 — 뒤에서 판별 질문으로 보강 필요.

### ⚠️ 조합 D (정직한 반례): `burnt-outside-raw-inside` + `lam-butter-leak` — 근접 동점

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **oven-too-hot** | 2+1 | **3** 🥇 |
| lam-butter-melted | 0+2 | 2 |

→ oven-too-hot이 3 vs 2로 앞서지만 격차가 작다. `pale`이나 `lam-greasy-texture`처럼 서로 겹치지 않는 증상이 추가로 확인되면 더 뾰족해진다(예: `lam-greasy-texture`가 있으면 lam-butter-melted로, `pale`이 있으면 애초에 oven-too-hot이 배제됨).

---

## 결론

**PEAKED — 단, 두 개의 근접 원인쌍이 존재한다.**

- ✅ 크루아상과 동일하게, 축이 다른 증상 조합(leak+flat+greasy, no-rise+gummy+leak)은 뾰족한 top-1을 낸다 (조합 A·B).
- ✅ 데니시 고유의 필링 증상(`lam-filling-leak`+`lam-shape-distortion`+`lam-soggy-center`)도 조합하면 대체로 갈리지만 (조합 C), **lam-overfilled ↔ lam-filling-too-wet**은 5 vs 4로 근접해 오탐 가능성이 남는다.
- ⚠️ **oven-too-hot ↔ lam-butter-melted**(조합 D)도 겹치는 증상(`lam-butter-leak`)이 있어 근접 동점 — 온도 문제(오븐 vs 버터 취급)를 증상만으로 확실히 가르기 어렵다.

### → DiscriminatorQuestion 제안

| id | pair | 질문 | yesFavors | noFavors |
|---|---|---|---|---|
| `q-overfilled-vs-wet-filling` | [`lam-overfilled`, `lam-filling-too-wet`] | 충전물을 레시피보다 많이 채웠나요? | `lam-overfilled` | `lam-filling-too-wet` |
| `q-butter-melted-vs-low-fat-danish` | [`lam-butter-melted`, `lam-low-fat-butter`] | 사용한 버터가 지방 82% 이상의 유럽식(발효) 버터였나요? | `lam-butter-melted` | `lam-low-fat-butter` |
| `q-oven-hot-vs-butter-melted` | [`oven-too-hot`, `lam-butter-melted`] | 겉면 색이 필요 이상으로 진하게 타거나 충전물이 끓어 넘쳤나요 (버터가 새는 게 아니라)? | `oven-too-hot` | `lam-butter-melted` |

### SynonymEntry 초안 (신규 증상)

```
{ symptomId: "lam-filling-leak", terms: ["충전물이 새요", "크림이 흘러나와요", "속이 터져나와요"] }
{ symptomId: "lam-soggy-center", terms: ["속이 눅눅해요", "충전물 주변이 안 익었어요", "속이 질척해요"] }
{ symptomId: "lam-shape-distortion", terms: ["모양이 뭉개졌어요", "형태가 무너졌어요", "구울 때 옆으로 터졌어요"] }
{ symptomId: "lam-butter-leak", terms: ["버터가 흘러나와요", "버터가 새요", "기름 웅덩이가 생겨요"] }
{ symptomId: "lam-flat-no-layers", terms: ["층이 안 보여요", "겹이 안 생겼어요", "빵이 조밀해요"] }
```

---

## 출처 각주

- [1] King Arthur Baking, "When less is more: Why fewer folds make a better croissant" (2021, 라미네이션 원리는 데니시에도 동일 적용) — https://www.kingarthurbaking.com/blog/2021/10/19/fewer-folds-makes-better-croissants
- [2] King Arthur Baking, "Making Baker's Croissants" — https://www.kingarthurbaking.com/blog/2011/02/21/capturing-butter-heaven-making-bakers-croissants
- [3] America's Test Kitchen, "How to Laminate Pastry Easily" — https://www.americastestkitchen.com/articles/7577-how-to-laminate-pastry-easily
- [4] America's Test Kitchen, Croissants (버터 블록 기법, 데니시와 동일 라미네이션 원리) — https://www.americastestkitchen.com/recipes/6770-croissants
- [5] King Arthur Baking, "Danish Pastry: Beauty or the Beast" (2013) — https://www.kingarthurbaking.com/blog/2013/02/19/danish-pastry-beauty-or-the-beast
- [6] King Arthur Baking, Danish Pastry Recipe — https://www.kingarthurbaking.com/recipes/danish-pastry-recipe
- 출처 미확인 표기 항목은 일반적인 라미네이션·충전물 제빵 상식으로, 개별 사이트에서 문장 그대로 확인하지 못한 채 도메인 지식으로 추론한 내용이다.
