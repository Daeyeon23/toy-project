# 증상×원인 매트릭스 — 붓세 (bouchée)

> **목적:** 전란(whole-egg) 거품 스펀지 기반 샌드 과자의 실패 양상을 매트릭스로 검증한다 (v3 P2 배치).
> CORE 원인/증상 id는 `_taxonomy.md`를 재사용하고, 붓세 고유 실패는 `spg-` 접두사로 신규 코드화했다.
> **주의**: 붓세(일본식 프렌치 스펀지 샌드 과자)를 직접 다룬 영어권 자료가 드물어, 같은 전란 거품 스펀지
> 메커니즘을 공유하는 **제누아즈(genoise)** 자료로 원리를 검증했다. 단정적 진단이 아니라 빌드 전 종이
> 검증 스케치이며, 확인 불가한 주장은 "출처 미확인 — 일반 상식(제누아즈/전란거품 공통)"으로 표기했다.

## 원인 (Causes)

| id | name | why | action | 근거 |
|---|---|---|---|---|
| `spg-underwhipped-eggs` (신규) | 전란(또는 노른자+설탕)을 충분히 휘핑하지 않음 | 이 반죽은 화학 팽창제 없이 오직 거품낸 달걀의 기계적 공기만으로 부풀기 때문에, 덜 휘핑하면 애초에 부풀 공기가 부족합니다. | 반죽이 계속 부피가 늘다가 리본처럼 흘러내리며 자국이 잠시 남을 때까지(약 3배 부피) 충분히 휘핑하세요. | [1] |
| `spg-deflated-batter` (신규) | 가루를 섞을 때 거칠게 섞어 거품이 꺼짐 | 순수 달걀 거품 위에 가루를 얹는 구조라, 거칠게 섞으면 애써 만든 기포가 터져 반죽이 가라앉습니다. | 흰자를 다루듯 가볍게 아래에서 위로 접어가며 최소한으로 섞으세요. | [1] |
| `spg-oven-opened-early` (신규) | 굽는 도중 오븐을 일찍 엶 | 오븐 문을 일찍 열면 온도가 급격히 떨어지고 찬 공기가 들어와, 아직 단백질 구조가 굳지 않은 반죽 중앙이 꺼집니다. | 반죽 부피가 확정되는 시점(보통 15~20분)까지는 오븐 문을 열지 마세요. | [2] |
| `oven-too-cool` (CORE 재사용) | 오븐 온도 낮음/굽기 부족 | 열이 부족하면 달걀 거품이 충분히 굳기 전에 시간이 지나 부피가 가라앉거나 속이 축축하게 남습니다. | 오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요. | 출처 미확인 — 일반 상식(제누아즈/전란거품 공통) |
| `spg-overbaked-dry` (신규) | 과다하게 구워 수분이 날아감 | 필요 이상으로 오래 구우면 반죽의 수분이 증발해 퍼석하고 질겨집니다. | 표면을 살짝 눌렀을 때 자국 없이 되돌아오는 시점에 바로 꺼내세요. | 출처 미확인 — 일반 상식(제누아즈/전란거품 공통) |

## 증상 (Symptoms)

| id | label | 근거 |
|---|---|---|
| `spg-dense-flat` (신규) | 부풀지 않고 조밀·납작함 | [1] |
| `spg-sunken-center` (신규) | 중앙이 꺼짐 | [2] |
| `collapsed` (CORE) | 부풀다 주저앉음 | 출처 미확인 — 일반 상식(제누아즈/전란거품 공통) |
| `spg-dry-crumbly` (신규) | 퍼석하고 부스러짐 | 출처 미확인 — 일반 상식(제누아즈/전란거품 공통) |
| `spg-tough-rubbery` (신규) | 질기고 고무 같음 | 출처 미확인 — 일반 상식(제누아즈/전란거품 공통) |
| `gummy` (CORE) | 속이 떡짐/질음 | 출처 미확인 — 일반 상식(제누아즈/전란거품 공통) |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | dense-flat | sunken-center | collapsed | dry-crumbly | tough-rubbery | gummy |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| **spg-underwhipped-eggs** | ●● | | | | | ● |
| **spg-deflated-batter** | ● | | | | ●● | |
| **spg-oven-opened-early** | | ●● | ● | | | |
| **oven-too-cool** | | | ● | | | ●● |
| **spg-overbaked-dry** | | | | ●● | ● | |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `gummy` (속이 떡짐) — 근접

| 원인 | 점수 |
|---|:--:|
| spg-underwhipped-eggs | 1 |
| oven-too-cool | 2 |

→ gap 1로 근접. "속이 떡진다"만으로는 전란을 덜 휘핑한 건지 오븐이 낮은 건지 확실히 못 가른다.

### ✅ 조합 A: `spg-sunken-center` + `collapsed` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **spg-oven-opened-early** | 2+1 | **3** 🥇 |
| oven-too-cool | 0+1 | 1 |

→ **spg-oven-opened-early가 3 vs 1로 뾰족하게 1위.** 중앙이 꺼지면서 주저앉는 건 오븐을 일찍 연 것의 전형적 신호.

### ✅ 조합 B: `spg-dry-crumbly` 단독 — PEAKED

| 원인 | 점수 |
|---|:--:|
| **spg-overbaked-dry** | **2** 🥇 |
| spg-deflated-batter | 0 |

→ 압도적. 퍼석하고 부스러지는 건 과다 굽기만의 고유 신호다.

### ⚠️ 조합 C (근접): `gummy` + `spg-dense-flat` — 근접

| 원인 | 계산 | 점수 |
|---|---|:--:|
| spg-underwhipped-eggs | 1+2 | 3 |
| oven-too-cool | 2+0 | 2 |

→ gap 1로 근접. 전란을 덜 휘핑한 것과 오븐이 낮은 것 둘 다 떡지고 조밀한 결과를 낳는다.

---

## 결론

**PEAKED — 단, 하나의 근접 원인쌍이 존재한다.**

- ✅ 중앙 꺼짐+주저앉음(조합 A)은 오븐을 일찍 연 것의 뾰족한 신호다.
- ✅ 퍼석함(조합 B)은 과다 굽기만의 압도적 신호다.
- ⚠️ **spg-underwhipped-eggs ↔ oven-too-cool**: 떡짐+조밀함 조합에서 근접하다(gap 1).

### → DiscriminatorQuestion 제안

| id | pair | 질문 | yesFavors | noFavors |
|---|---|---|---|---|
| `q-underwhipped-vs-oven-cool` | [`spg-underwhipped-eggs`, `oven-too-cool`] | 전란(또는 노른자+설탕)을 거품기로 들어 올렸을 때 리본처럼 흘러내리는 자국이 남을 때까지 충분히 휘핑했나요? | `oven-too-cool` | `spg-underwhipped-eggs` |

### SynonymEntry 초안 (신규 증상)

```
{ symptomId: "spg-dense-flat", terms: ["안 부풀어요", "조밀해요", "납작해요"] }
{ symptomId: "spg-sunken-center", terms: ["중앙이 꺼졌어요", "가운데가 내려앉았어요"] }
{ symptomId: "spg-dry-crumbly", terms: ["퍼석해요", "부스러져요", "푸석해요"] }
{ symptomId: "spg-tough-rubbery", terms: ["질겨요", "고무 같아요"] }
```

---

## 출처 각주

- [1] 전란 거품(달걀 휘핑)만으로 부풀리는 스펀지의 원리, 덜 휘핑 시 밀도 증가 — Eats Delightful, "Genoise Cake (Vanilla Sponge Cake 101)" — https://eatsdelightful.com/genoise-cake-vanilla-sponge-cake-101/ , Baran Bakery, "Genoise Sponge Cake" — https://baranbakery.com/genoise-sponge-cake/
- [2] 굽는 도중 오븐 문을 여는 것과 조기 붕괴의 관계 — Eats Delightful, "Genoise Cake (Vanilla Sponge Cake 101)" — https://eatsdelightful.com/genoise-cake-vanilla-sponge-cake-101/ ("Don't open the oven for at least 15-20 minutes")
- 출처 미확인 표기 항목은 일반적인 전란 거품 스펀지(제누아즈류) 제과 상식으로, 붓세 자체를 다룬 문헌은 확인하지 못해 공유 메커니즘으로 추론한 내용이다.
