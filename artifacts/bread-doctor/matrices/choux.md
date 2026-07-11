# 증상×원인 매트릭스 — 슈 (choux)

> **목적:** 스팀 팽창(익반죽/판아드) 기반 슈 반죽의 실패 양상을 매트릭스로 검증한다 (v3 P2 배치).
> CORE 원인/증상 id는 `_taxonomy.md`를 재사용하고, 슈 고유 실패는 `choux-` 접두사로 신규 코드화했다.
> 단정적 진단이 아니라 빌드 전 종이 검증 스케치이며, 각주로 출처를 표시했다. 확인 불가한 주장은 "출처 미확인 — 일반 상식(제과)"으로 표기했다.

## 원인 (Causes)

| id | name | why | action | 근거 |
|---|---|---|---|---|
| `choux-wet-panade` (신규) | 익반죽(판아드)의 수분을 충분히 날리지 않음 | 냄비에서 반죽을 충분히 저어 말리지 않으면 수분이 과다하게 남아, 오븐에서 증기로 부풀 힘이 약하고 속이 눅눅하게 남습니다. | 냄비 바닥에 얇은 막이 눌어붙기 시작할 때까지 중불에서 계속 저으며 수분을 날리세요. | [1] |
| `choux-too-many-eggs` (신규) | 달걀을 과다 투입해 반죽이 너무 묽음 | 달걀을 넣을 때마다 반죽 되기를 확인하지 않고 전부 넣으면 반죽이 흘러내릴 만큼 묽어져 모양을 못 잡고 퍼집니다. | 반죽을 주걱으로 들어 올렸을 때 역삼각형(V자)으로 천천히 떨어지는 되기가 될 때까지 달걀을 나눠 넣으세요. | [2] |
| `oven-too-cool` (CORE 재사용) | 오븐 온도 낮음/굽기 부족 | 열이 부족하면 반죽 속 수분이 충분한 증기압을 만들지 못해 부풀지 않습니다. | 오븐을 충분히 예열하고 온도계로 실제 온도를 확인하세요. | [2] |
| `oven-too-hot` (CORE 재사용) | 오븐 온도 너무 높음 | 겉면이 먼저 빠르게 굳어버려 반죽이 부풀 공간이 열리기 전에 표면이 고정돼 불규칙하게 갈라집니다. | 예열 온도를 레시피대로 지키고 오븐 온도계로 확인하세요. | [2] |
| `choux-underdried` (신규) | 다 구운 뒤 충분히 말리지 않고 꺼냄 | 겉이 갈색이 나도 속에 증기가 남아있는 채로 꺼내면, 식으면서 그 수증기가 다시 수분으로 응축돼 꺼지고 축축해집니다. | 마지막 5~10분은 오븐 문을 나무 숟가락으로 살짝 열어 증기를 빼며 완전히 말리세요. | [3] |

## 증상 (Symptoms)

| id | label | 근거 |
|---|---|---|
| `choux-not-risen` (신규) | 거의 안 부풀고 납작함 | [1] |
| `choux-spread-flat` (신규) | 모양을 못 잡고 퍼짐 | [2] |
| `choux-cracked-uneven` (신규) | 표면이 불규칙하게 갈라짐 | [2] |
| `choux-collapsed-deflated` (신규) | 다 부풀었다가 꺼짐/주저앉음 | [3] |
| `choux-soggy-interior` (신규) | 속이 축축하고 설익음 | [1] |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | not-risen | spread-flat | cracked-uneven | collapsed-deflated | soggy-interior |
|---|:--:|:--:|:--:|:--:|:--:|
| **choux-wet-panade** | ●● | | | | ● |
| **choux-too-many-eggs** | ● | ●● | | | |
| **oven-too-cool** | ● | | | | ●● |
| **oven-too-hot** | | | ●● | | |
| **choux-underdried** | | | | ●● | ● |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `choux-not-risen` (안 부풂) — 근접

| 원인 | 점수 |
|---|:--:|
| choux-wet-panade | 2 |
| choux-too-many-eggs | 1 |
| oven-too-cool | 1 |

→ wet-panade가 근소하게 앞서지만(gap 1) 세 원인 모두 후보로 남는다.

### ✅ 조합 A: `choux-spread-flat` 단독 — PEAKED

| 원인 | 점수 |
|---|:--:|
| **choux-too-many-eggs** | **2** 🥇 |
| (나머지) | 0 |

→ 압도적. 모양을 못 잡고 퍼지는 건 달걀 과다만의 고유 신호다.

### ✅ 조합 B: `choux-collapsed-deflated` 단독 — PEAKED

| 원인 | 점수 |
|---|:--:|
| **choux-underdried** | **2** 🥇 |
| (나머지) | 0 |

→ 압도적. 다 부풀었다가 꺼지는 건 덜 말리고 꺼낸 것만의 고유 신호다.

### ⚠️ 조합 C (근접): `choux-not-risen` + `choux-soggy-interior` — 완전 동점

| 원인 | 계산 | 점수 |
|---|---|:--:|
| choux-wet-panade | 2+1 | 3 |
| oven-too-cool | 1+2 | 3 |

→ **3 vs 3 완전 동점.** 판아드 수분 과다와 오븐 저온 둘 다 "안 부풀고 축축함"으로 나타나 판별 질문이 필요하다.

---

## 결론

**PEAKED — 단, 하나의 근접 원인쌍이 존재한다.**

- ✅ 퍼짐(조합 A)은 달걀 과다만의 압도적 신호다.
- ✅ 부풀었다 꺼짐(조합 B)은 덜 말리고 꺼낸 것만의 압도적 신호다.
- ⚠️ **choux-wet-panade ↔ oven-too-cool**: 안 부풂+축축함 조합에서 완전 동점(조합 C).

### → DiscriminatorQuestion 제안

| id | pair | 질문 | yesFavors | noFavors |
|---|---|---|---|---|
| `q-wet-panade-vs-oven-cool` | [`choux-wet-panade`, `oven-too-cool`] | 반죽(판아드)을 불에서 저을 때 냄비 바닥에 얇은 막이 생길 때까지 충분히 저어 수분을 날렸나요? | `oven-too-cool` | `choux-wet-panade` |

### SynonymEntry 초안 (신규 증상)

```
{ symptomId: "choux-not-risen", terms: ["안 부풀어요", "납작해요", "거의 안 부풀어요"] }
{ symptomId: "choux-spread-flat", terms: ["퍼져요", "모양이 안 잡혀요", "옆으로 흘러요"] }
{ symptomId: "choux-cracked-uneven", terms: ["표면이 갈라져요", "울퉁불퉁하게 터져요"] }
{ symptomId: "choux-collapsed-deflated", terms: ["부풀었다가 꺼져요", "주저앉아요", "바람 빠진 것 같아요"] }
{ symptomId: "choux-soggy-interior", terms: ["속이 축축해요", "안이 안 익었어요", "눅눅해요"] }
```

---

## 출처 각주

- [1] 판아드 수분 과다·불충분한 건조와 안 부풂·눅눅함의 관계 — French Pastry Secrets, "Why Your Choux Isn't Rising: 5 Common Mistakes and How to Fix Them" — https://www.frenchpastrysecrets.com/why-your-choux-isnt-rising-5-common-mistakes-and-how-to-fix-them/
- [2] 달걀 과다 투입과 퍼짐, 오븐 온도(너무 뜨겁거나 차가움)의 영향 — French Pastry Secrets, "Why Your Choux Isn't Rising: 5 Common Mistakes and How to Fix Them" — https://www.frenchpastrysecrets.com/why-your-choux-isnt-rising-5-common-mistakes-and-how-to-fix-them/
- [3] 조기 증기 배출·불충분한 건조와 붕괴의 관계, 오븐 문 살짝 열어 말리기 — The Daily Meal, "The Reason Your Cream Puffs Continue To Fall Flat" — https://www.thedailymeal.com/1341671/why-cream-puffs-fall-flat-fix/
- 출처 미확인 표기 항목은 일반적인 슈(스팀 팽창) 제과 상식으로, 개별 사이트에서 문장 그대로 확인하지 못한 채 도메인 지식으로 추론한 내용이다.
