# 증상×원인 매트릭스 — 마카롱 (macaron)

> **목적:** 머랭 거품 기반 꼬끄(shell)의 실패 양상을 매트릭스로 검증한다 (v3 P1 배치).
> CORE 원인/증상 id는 `_taxonomy.md`를 재사용하고, 마카롱 고유 실패는 `mac-` 접두사로 신규 코드화했다.
> 단정적 진단이 아니라 빌드 전 종이 검증 스케치이며, 각주로 출처를 표시했다. 확인 불가한 주장은 "출처 미확인 — 일반 상식(제과)"으로 표기했다.

## 원인 (Causes)

| id | name | why | action | 근거 |
|---|---|---|---|---|
| `mac-undermixed-macaronage` (신규) | 마카로나주(반죽 접기)가 부족해 반죽이 뻑뻑함 | 반죽이 충분히 흘러내리지 않으면 표면이 매끈해지지 않고 짤 때 뾰족한 뿔이 남습니다. | 주걱으로 반죽을 리본처럼 천천히 흘러내릴 때까지 접어 섞으세요. | [1] |
| `mac-overmixed-macaronage` (신규) | 마카로나주가 과해 반죽이 묽어짐 | 너무 많이 접으면 기포가 과하게 빠져 반죽이 퍼지고 삐에가 생기지 않습니다. | 반죽을 들어 올렸을 때 8자를 그릴 수 있는 정도에서 바로 멈추세요. | [1] |
| `mac-weak-meringue` (신규) | 머랭을 덜 올렸거나 젓는 중 꺼짐(broken meringue) | 머랭 기포가 약하면 구조를 지탱하지 못해 굽는 중 속이 비거나 갈라집니다. | 단단한 뿔이 설 때까지 머랭을 올리고, 설탕을 나눠 넣어 안정시키세요. | [1] |
| `mac-no-rest-skin` (신규) | 굽기 전 표면 건조(스킨 형성) 시간이 부족함 | 표면에 마른 막(스킨)이 안 생기면 오븐 안에서 팽창하는 가스가 약한 지점을 뚫고 나가 갈라집니다. | 짜낸 반죽을 손끝으로 만졌을 때 반죽이 안 묻어날 때까지(보통 20~60분) 실온에서 말리세요. | [1] |
| `oven-too-hot` (CORE 재사용) | 오븐 온도 너무 높음 | 겉이 너무 빨리 익어 스킨이 갈라지거나, 속이 부풀 시간 없이 굳어버립니다. | 오븐 온도계로 실제 온도를 확인하고 레시피 온도를 지키세요. | 출처 미확인 — 일반 상식(제과) |

## 증상 (Symptoms)

| id | label | 근거 |
|---|---|---|
| `mac-no-feet` (신규) | 꼬끄에 삐에(다리)가 안 생김 | [1] |
| `mac-hollow-shell` (신규) | 속이 비어요(할로우 쉘) | [1] |
| `mac-cracked-shell` (신규) | 꼬끄 표면이 갈라짐 | [1] |
| `mac-spread-flat` (신규) | 납작하게 퍼짐(원형 유지 안 됨) | [1] |
| `mac-rough-surface` (신규) | 표면이 거칠고 매끈하지 않음 | [1] |
| `mac-sticky-undried` (신규) | 꼬끄가 끈적이고 안 마름(스킨 형성 실패) | [1] |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | no-feet | hollow-shell | cracked-shell | spread-flat | rough-surface | sticky-undried |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| **mac-undermixed-macaronage** | ● | | | | ●● | |
| **mac-overmixed-macaronage** | ●● | | | ●● | | |
| **mac-weak-meringue** | | ●● | ● | | | |
| **mac-no-rest-skin** | | | ● | | | ●● |
| **oven-too-hot** | | ● | ●● | | | |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `mac-cracked-shell` (표면 갈라짐) — 근접

| 원인 | 점수 |
|---|:--:|
| mac-weak-meringue | 1 |
| mac-no-rest-skin | 1 |
| oven-too-hot | 2 |

→ oven-too-hot이 근소하게 앞서지만(gap 1), 세 원인이 모두 후보로 남아 단일 증상만으로는 확정하기 어렵다.

### ✅ 조합 A: `mac-spread-flat` + `mac-no-feet` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **mac-overmixed-macaronage** | 2+2 | **4** 🥇 |
| mac-undermixed-macaronage | 0+1 | 1 |

→ **mac-overmixed-macaronage가 4 vs 1로 뾰족하게 1위.** 납작하게 퍼지면서 삐에가 없는 건 마카로나주 과다의 결정적 조합.

### ✅ 조합 B: `mac-sticky-undried` 단독 — PEAKED

| 원인 | 점수 |
|---|:--:|
| **mac-no-rest-skin** | **2** 🥇 |
| (나머지) | 0 |

→ 압도적. 꼬끄가 끈적이고 안 마른 건 휴지(스킨 형성) 부족만의 고유 신호다.

### ⚠️ 조합 C (근접): `mac-cracked-shell` + `mac-hollow-shell` — 근접

| 원인 | 계산 | 점수 |
|---|---|:--:|
| oven-too-hot | 2+1 | 3 |
| mac-weak-meringue | 1+2 | 3 |

→ **3 vs 3 완전 동점.** 오븐 고온과 약한 머랭 둘 다 갈라짐+할로우 쉘을 낳아 판별 질문이 필요하다.

---

## 결론

**PEAKED — 단, 하나의 근접 원인쌍이 존재한다.**

- ✅ 퍼짐+삐에 없음(조합 A)은 마카로나주 과다의 뾰족한 신호다.
- ✅ 끈적임(조합 B)은 스킨 형성 부족만의 압도적 신호다.
- ⚠️ **oven-too-hot ↔ mac-weak-meringue**: 갈라짐+할로우 쉘 조합에서 완전 동점(조합 C).

### → DiscriminatorQuestion 제안

| id | pair | 질문 | yesFavors | noFavors |
|---|---|---|---|---|
| `q-oven-hot-vs-weak-meringue` | [`oven-too-hot`, `mac-weak-meringue`] | 머랭을 올릴 때 거품기를 들어 올리면 뿔이 휘지 않고 단단하게 설 때까지 올렸나요? | `oven-too-hot` | `mac-weak-meringue` |

### SynonymEntry 초안 (신규 증상)

```
{ symptomId: "mac-no-feet", terms: ["삐에가 안 생겨요", "다리가 없어요", "밑단이 안 생겨요"] }
{ symptomId: "mac-hollow-shell", terms: ["속이 비어요", "할로우 쉘이에요", "안이 텅 비었어요"] }
{ symptomId: "mac-cracked-shell", terms: ["표면이 갈라져요", "꼬끄가 터져요", "윗면이 깨져요"] }
{ symptomId: "mac-spread-flat", terms: ["납작하게 퍼져요", "모양이 안 잡혀요", "동그랗게 안 나와요"] }
{ symptomId: "mac-rough-surface", terms: ["표면이 거칠어요", "매끈하지 않아요", "울퉁불퉁해요"] }
{ symptomId: "mac-sticky-undried", terms: ["끈적여요", "안 말라요", "손에 묻어나요"] }
```

---

## 출처 각주

- [1] 마카롱 삐에·할로우 쉘·갈라짐의 원인(마카로나주, 머랭 상태, 스킨 형성, 오븐 온도) — Homebody Eats, "Macaron Troubleshooting (Complete Guide)" — https://homebodyeats.com/macaron-troubleshooting/ , Homebody Eats, "How To Fix Hollow Macarons" — https://homebodyeats.com/how-to-fix-hollow-macarons/ , Chelsweets, "Cracked Macarons: What Causes Them & How to Fix It" — https://chelsweets.com/cracked-macarons/
- 출처 미확인 표기 항목은 일반적인 머랭 거품 제과 상식으로, 개별 사이트에서 문장 그대로 확인하지 못한 채 도메인 지식으로 추론한 내용이다.
