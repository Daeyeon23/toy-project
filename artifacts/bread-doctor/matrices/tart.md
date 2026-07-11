# 증상×원인 매트릭스 — 타르트 (tart)

> **목적:** 러빙법(파트 브리제/사블레) 반죽 셸의 실패 양상을 매트릭스로 검증한다 (v3 P1 배치).
> CORE 원인/증상 id는 `_taxonomy.md`를 재사용하고, 타르트 고유 실패는 `tart-` 접두사로 신규 코드화했다.
> 단정적 진단이 아니라 빌드 전 종이 검증 스케치이며, 각주로 출처를 표시했다. 확인 불가한 주장은 "출처 미확인 — 일반 상식(제과)"으로 표기했다.

## 원인 (Causes)

| id | name | why | action | 근거 |
|---|---|---|---|---|
| `tart-overworked-gluten` (신규) | 반죽을 과하게 치대 글루텐이 과다 형성됨 | 글루텐이 많이 발달하면 반죽이 질겨지고 탄성 때문에 구울 때 계속 오그라듭니다. | 버터가 보이는 상태로 남을 만큼만, 가루가 뭉칠 때까지만 최소한으로 반죽하세요. | [1] |
| `tart-warm-dough-shrink` (신규) | 반죽을 충분히 휴지·냉장하지 않고 바로 구움 | 차갑게 굳지 않은 글루텐은 탄성이 남아있어 오븐 열에 수축하며 옆면이 낮아집니다. | 팬에 앉힌 뒤 최소 30분 냉장해 글루텐을 이완시키고 지방을 다시 굳히세요. | [2] |
| `tart-no-pie-weights` (신규) | 프리베이킹 시 파이 웨이트(무게추) 없이 또는 부족하게 구움 | 무게추가 없으면 바닥이 부풀어 오르거나 옆면이 안쪽으로 무너집니다. | 유산지를 깔고 쌀·콩·전용 웨이트로 반죽을 눌러가며 프리베이킹하세요. | 출처 미확인 — 일반 상식(제과) |
| `tart-underbaked-shell` (신규) | 프리베이킹이 부족해 셸 자체가 덜 구워짐 | 셸이 충분히 익어 방수층을 만들지 못하면 필링의 수분이 스며들어 바닥이 눅눅해집니다. | 바닥까지 옅은 갈색이 될 때까지 프리베이킹하고, 필요하면 달걀물로 코팅하세요. | [2] |
| `oven-too-hot` (CORE 재사용) | 오븐 온도 너무 높음 | 가장자리가 먼저 짙게 타버려 중심까지 고르게 익기 전에 겉이 타고 속이 설익습니다. | 예열 온도를 레시피대로 지키고 오븐 온도계로 확인하세요. | 출처 미확인 — 일반 상식(제과) |

## 증상 (Symptoms)

| id | label | 근거 |
|---|---|---|
| `tart-shrunk-sides` (신규) | 옆면이 오그라들어 낮아짐 | [1] |
| `tart-tough-crust` (신규) | 질기고 딱딱한 식감(버터맛 대신 글루텐이 느껴짐) | [1] |
| `tart-soggy-bottom` (신규) | 바닥이 눅눅하고 축축함 | [2] |
| `tart-puffed-bottom` (신규) | 바닥이 부풀어 올라 필링 공간이 줄어듦 | 출처 미확인 — 일반 상식(제과) |
| `burnt-outside-raw-inside` (CORE) | 겉은 진하게 탔는데 속은 설익음 | 출처 미확인 — 일반 상식(제과) |
| `tart-pale-bottom` (신규) | 바닥만 색이 안 나고 창백함(윗면은 괜찮음) | 출처 미확인 — 일반 상식(제과) |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | shrunk-sides | tough-crust | soggy-bottom | puffed-bottom | burnt-out-raw-in | pale-bottom |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| **tart-overworked-gluten** | ● | ●● | | | | |
| **tart-warm-dough-shrink** | ●● | | | | | |
| **tart-no-pie-weights** | | | | ●● | | |
| **tart-underbaked-shell** | | | ●● | | | ● |
| **oven-too-hot** | | | | | ●● | |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `shrunk-sides` (옆면 수축) — FLAT

| 원인 | 점수 |
|---|:--:|
| tart-overworked-gluten | 1 |
| tart-warm-dough-shrink | 2 |

→ gap 1로 근접. "옆면이 오그라들었다"만으로는 반죽을 과하게 치댔는지 휴지 없이 구웠는지 확실히 못 가른다.

### ✅ 조합 A: `tart-puffed-bottom` 단독 — PEAKED

| 원인 | 점수 |
|---|:--:|
| **tart-no-pie-weights** | **2** 🥇 |
| (나머지) | 0 |

→ 압도적. 바닥이 부풀어 오르는 건 파이 웨이트 부재만의 고유 신호다.

### ✅ 조합 B: `tart-soggy-bottom` + `tart-pale-bottom` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **tart-underbaked-shell** | 2+1 | **3** 🥇 |
| (나머지) | 0 | 0 |

→ 압도적. 바닥만 색이 안 나고 눅눅한 건 프리베이킹 부족의 전형적 조합.

### ⚠️ 조합 C (근접): `tart-shrunk-sides` + `tart-tough-crust` — 근접

| 원인 | 계산 | 점수 |
|---|---|:--:|
| tart-overworked-gluten | 1+2 | 3 |
| tart-warm-dough-shrink | 2+0 | 2 |

→ gap 1로 근접. 둘 다 옆면 수축을 낳지만 "질기다"는 과반죽 쪽에 조금 더 기운다 — 완전히 뾰족하진 않아 판별 질문으로 보강한다.

---

## 결론

**PEAKED — 단, 하나의 근접 원인쌍이 존재한다.**

- ✅ 바닥이 부푸는 것(puffed-bottom)은 파이 웨이트 부재만의 압도적 신호다 (조합 A).
- ✅ 눅눅함+창백한 바닥(soggy+pale-bottom)은 프리베이킹 부족의 압도적 신호다 (조합 B).
- ⚠️ **tart-overworked-gluten ↔ tart-warm-dough-shrink**: 둘 다 옆면 수축을 낳아 조합 C가 근접하다(gap 1).

### → DiscriminatorQuestion 제안

| id | pair | 질문 | yesFavors | noFavors |
|---|---|---|---|---|
| `q-overworked-vs-warm-shrink` | [`tart-overworked-gluten`, `tart-warm-dough-shrink`] | 반죽을 팬에 앉힌 뒤 굽기 전 냉장고에서 30분 이상 휴지시켰나요? | `tart-overworked-gluten` | `tart-warm-dough-shrink` |

### SynonymEntry 초안 (신규 증상)

```
{ symptomId: "tart-shrunk-sides", terms: ["옆면이 줄어들었어요", "테두리가 낮아졌어요", "반죽이 오그라들었어요"] }
{ symptomId: "tart-tough-crust", terms: ["질겨요", "딱딱해요", "버터맛이 안 나요"] }
{ symptomId: "tart-soggy-bottom", terms: ["바닥이 눅눅해요", "축축해요", "밑이 안 익었어요"] }
{ symptomId: "tart-puffed-bottom", terms: ["바닥이 부풀었어요", "속이 부풀어 올랐어요", "바닥이 솟았어요"] }
{ symptomId: "tart-pale-bottom", terms: ["바닥만 색이 안 나요", "밑면이 하얘요"] }
```

---

## 출처 각주

- [1] 반죽 과다 치댐과 글루텐 발달, 옆면 수축의 관계 — King Arthur Baking, "How to keep pie crust from shrinking, once and for all" — https://www.kingarthurbaking.com/blog/2023/05/17/how-to-keep-pie-crust-from-shrinking
- [2] 프리베이킹 부족과 눅눅한 바닥의 관계 — King Arthur Baking, "Prevent soggy bottoms in pies with these baker secrets" — https://www.kingarthurbaking.com/blog/2023/11/06/prevent-pie-soggy-bottom , King Arthur Baking, "How to prebake pie crust — and why you should" — https://www.kingarthurbaking.com/blog/2021/05/24/prebake-pie-crust
- 출처 미확인 표기 항목은 일반적인 러빙법(파트 브리제) 제과 상식으로, 개별 사이트에서 문장 그대로 확인하지 못한 채 도메인 지식으로 추론한 내용이다.
