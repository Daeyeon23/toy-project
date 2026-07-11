# 증상×원인 매트릭스 — 휘낭시에 (financier)

> **목적:** 브라운버터(뵈르 노아제트) 기반 유화 배터의 실패 양상을 매트릭스로 검증한다 (v3 P1 배치).
> CORE 원인/증상 id는 `_taxonomy.md`를 재사용하고, 휘낭시에 고유 실패는 `fin-` 접두사로 신규 코드화했다.
> 단정적 진단이 아니라 빌드 전 종이 검증 스케치이며, 각주로 출처를 표시했다. 확인 불가한 주장은 "출처 미확인 — 일반 상식(제과)"으로 표기했다.

## 원인 (Causes)

| id | name | why | action | 근거 |
|---|---|---|---|---|
| `fin-underbrowned-butter` (신규) | 브라운버터를 충분히 갈색화하지 않고 멈춤 | 버터를 갈색화하지 않으면 헤이즐넛 향과 견과류 풍미가 안 나고, 수분도 덜 날아가 반죽이 무겁게 가라앉습니다. | 중불에서 거품이 가라앉고 바닥 밀크 고형분이 짙은 갈색(토스트한 빵가루색)이 될 때까지, 흰 냄비를 써서 색을 확인하며 저으세요. | [1] |
| `fin-burnt-butter` (신규) | 브라운버터를 태워 쓴맛·탄내가 남음 | 밀크 고형분이 갈색을 넘어 검게 타면 캐러멜화가 아니라 탄화가 일어나 쓴맛이 반죽 전체에 퍼집니다. | 원하는 색이 되기 직전에 불에서 내리세요 — 잔열로 색이 계속 진해집니다. | [1] |
| `oven-too-cool` (CORE 재사용) | 오븐 온도 낮음/굽기 부족 | 열이 부족하면 반죽 중심까지 빠르게 열이 전달되지 않아 부풀지 못하고 납작하게 가라앉습니다. | 오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요. | 출처 미확인 — 일반 상식(제과) |
| `oven-too-hot` (CORE 재사용) | 오븐 온도 너무 높음 | 겉면이 먼저 짙게 익어버려 속까지 열이 전달되기 전에 겉이 타거나 설익은 속이 남습니다. | 예열 온도를 레시피대로 지키고 온도계로 확인하세요. | 출처 미확인 — 일반 상식(제과) |
| `fin-overwhipped-batter` (신규) | 흰자·가루를 섞을 때 과교반해 글루텐이 발달하고 공기가 빠짐 | 필요 이상으로 오래 섞으면 밀가루의 글루텐이 발달해 질겨지고, 가벼운 기포가 꺼져 조밀해집니다. | 가루가 안 보일 때까지만 주걱으로 가볍게 섞고 바로 멈추세요. | 출처 미확인 — 일반 상식(제과) |

## 증상 (Symptoms)

| id | label | 근거 |
|---|---|---|
| `fin-no-nutty-aroma` (신규) | 헤이즐넛 향 없이 밋밋한 버터향만 남 | [1] |
| `fin-bitter-aftertaste` (신규) | 쓴맛/탄내가 남 | [1] |
| `pale` (CORE) | 색이 안 남/창백함 | 출처 미확인 — 일반 상식(제과) |
| `burnt-outside-raw-inside` (CORE) | 겉은 진하게 탔는데 속은 설익음 | 출처 미확인 — 일반 상식(제과) |
| `fin-flat-dense` (신규) | 부풀지 않고 눌린 듯 조밀함 | 출처 미확인 — 일반 상식(제과) |
| `fin-tough-rubbery` (신규) | 질기고 고무 같은 식감 | 출처 미확인 — 일반 상식(제과) |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | no-nutty-aroma | bitter-aftertaste | pale | burnt-out-raw-in | flat-dense | tough-rubbery |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| **fin-underbrowned-butter** | ●● | | ● | | | |
| **fin-burnt-butter** | | ●● | | ● | | |
| **oven-too-cool** | | | ●● | | ● | |
| **oven-too-hot** | | ● | | ●● | | |
| **fin-overwhipped-batter** | | | | | ● | ●● |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `flat-dense` (조밀·안 부풂) — FLAT

| 원인 | 점수 |
|---|:--:|
| oven-too-cool | 1 |
| fin-overwhipped-batter | 1 |

→ **1점 동점.** "부풀지 않고 조밀하다"만으로는 오븐이 낮은 건지 과교반한 건지 못 가른다.

### ✅ 조합 A: `fin-tough-rubbery` + `fin-flat-dense` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **fin-overwhipped-batter** | 2+1 | **3** 🥇 |
| oven-too-cool | 0+1 | 1 |

→ **fin-overwhipped-batter가 3 vs 1로 뾰족하게 1위.** "질기고 고무 같다"는 과교반의 결정적 신호 — 오븐 온도 문제는 질감을 질기게 만들지 않는다.

### ✅ 조합 B: `pale` + `fin-flat-dense` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **oven-too-cool** | 2+1 | **3** 🥇 |
| fin-overwhipped-batter | 0+1 | 1 |

→ **oven-too-cool이 3 vs 1로 1위.** 색이 안 나면서 조밀한 건 저온의 전형적 신호.

### ⚠️ 조합 C (근접): `fin-no-nutty-aroma` + `pale` — 3파 근접

| 원인 | 점수 |
|---|:--:|
| fin-underbrowned-butter | 3 |
| oven-too-cool | 2 |

→ **gap 1로 근접.** 버터를 덜 볶은 것과 오븐이 낮은 것 둘 다 "향이 약하고 색이 안 남"으로 나타나 판별 질문이 필요하다.

---

## 결론

**PEAKED — 단, 하나의 근접 원인쌍이 존재한다.**

- ✅ "질기고 고무 같다"(fin-tough-rubbery)는 과교반만의 고유 신호라 조합 A가 뾰족하게 갈린다.
- ✅ "색이 안 나고 조밀하다"(pale+flat-dense)는 저온의 전형적 조합으로 조합 B가 뾰족하게 갈린다.
- ⚠️ **fin-underbrowned-butter ↔ oven-too-cool**: 둘 다 향이 약하고 색이 안 나는 결과를 낳아, "헤이즐넛 향 없음"+"색 안 남"만으로는 근접하다.

### → DiscriminatorQuestion 제안

| id | pair | 질문 | yesFavors | noFavors |
|---|---|---|---|---|
| `q-underbrowned-vs-oven-cool` | [`fin-underbrowned-butter`, `oven-too-cool`] | 버터를 볶을 때 헤이즐넛 향이 날 때까지 충분히 갈색으로 만들었나요? | `oven-too-cool` | `fin-underbrowned-butter` |

### SynonymEntry 초안 (신규 증상)

```
{ symptomId: "fin-no-nutty-aroma", terms: ["고소한 향이 안 나요", "버터향이 밋밋해요", "헤이즐넛 향이 없어요"] }
{ symptomId: "fin-bitter-aftertaste", terms: ["쓴맛이 나요", "탄내가 나요", "뒷맛이 써요"] }
{ symptomId: "fin-flat-dense", terms: ["안 부풀어요", "조밀해요", "눌린 것 같아요"] }
{ symptomId: "fin-tough-rubbery", terms: ["질겨요", "고무 같아요", "쫄깃하다 못해 질겨요"] }
```

---

## 출처 각주

- [1] 브라운버터(beurre noisette) 제조 원리 — 흰 냄비로 색 확인, 잔열로 색이 계속 진해짐, 밀크 고형분 탄화 시 쓴맛: A Dash of Megnut, "How to Brown Butter" — https://www.adashofmegnut.com/brown-butter/ , Crafty Baking, "How to Brown Butter" — https://www.craftybaking.com/how-to/how-to-brown-butter-beurre-noisette-or-brown-butter/
- 출처 미확인 표기 항목은 일반적인 구움과자(유화 배터) 제과 상식으로, 개별 사이트에서 문장 그대로 확인하지 못한 채 도메인 지식으로 추론한 내용이다.
