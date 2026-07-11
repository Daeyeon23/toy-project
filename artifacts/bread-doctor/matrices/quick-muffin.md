# 증상×원인 매트릭스 — 머핀(퀵브레드) (quick-muffin)

> **목적:** 화학 팽창(베이킹파우더) 퀵브레드 머핀법 반죽의 실패 양상을 매트릭스로 검증한다 (v3 P2 배치).
> CORE 원인/증상 id는 `_taxonomy.md`를 재사용하고, 이 품목 고유 실패는 `qmuf-` 접두사로 신규 코드화했다
> — **기존 빵의 `quick-`(스콘/소다빵/콘브레드) 접두사와 의도적으로 다른 문자열**이다.
> **네이밍 주의**: 이 품목은 이스트 반죽인 "잉글리시 머핀"(`leavened-flatbread` 카테고리)과 이름이
> 겹치지만 완전히 다른 항목이다 — 피커에서 카테고리 라벨("화학팽창 머핀" vs "발효 플랫브레드")로 구분된다.
> 단정적 진단이 아니라 빌드 전 종이 검증 스케치이며, 각주로 출처를 표시했다. 확인 불가한 주장은 "출처 미확인 — 일반 상식(제과)"으로 표기했다.

## 원인 (Causes)

| id | name | why | action | 근거 |
|---|---|---|---|---|
| `qmuf-overmixed-tunneling` (신규) | 과교반으로 글루텐이 과다 발달함 | 젖은 재료와 마른 재료를 섞은 뒤 오래 저으면 글루텐이 발달해, 팽창 가스가 무작위로 빠져나가지 못하고 세로 통로(터널)를 뚫습니다. | 마른 가루가 안 보일 때까지만 몇 번 젓고, 약간의 덩어리가 남아도 멈추세요. | [1] |
| `qmuf-too-much-leavener` (신규) | 베이킹파우더를 과다 투입함 | 팽창제가 너무 많으면 기포가 과도하게 커지고 서로 합쳐져 조직이 거칠어지며, 지탱하지 못하고 부풀었다 꺼집니다. | 레시피의 베이킹파우더 계량을 저울/계량스푼으로 정확히 지키세요. | 출처 미확인 — 일반 상식(제과) |
| `qmuf-leavener-dead` (신규) | 베이킹파우더가 비활성이거나 부족함 | 팽창제가 오래됐거나 부족하면 반죽을 밀어 올릴 가스가 충분히 생성되지 않아 안 부풀고 조밀합니다. | 유통기한을 확인하고, 물에 소량을 넣어 즉시 거품이 이는지 활성을 테스트하세요. | 출처 미확인 — 일반 상식(제과) |
| `qmuf-underbaked-center` (신규) | 덜 구워 중앙이 설익음 | 중심 온도가 응고점에 도달하기 전에 꺼내면 눅눅하게 남고 식으면서 가라앉습니다. | 꼬치로 중앙을 찔러 반죽이 안 묻어날 때까지 구우세요. | 출처 미확인 — 일반 상식(제과) |
| `oven-too-hot` (CORE 재사용) | 오븐 온도 너무 높음 | 겉면이 먼저 짙게 익어 속까지 열이 전달되기 전에 겉이 타고 속이 설익습니다. | 예열 온도를 레시피대로 지키고 오븐 온도계로 확인하세요. | 출처 미확인 — 일반 상식(제과) |

## 증상 (Symptoms)

| id | label | 근거 |
|---|---|---|
| `qmuf-tunneling` (신규) | 세로로 긴 구멍(터널)이 생김 | [1] |
| `qmuf-tough-chewy` (신규) | 질기고 쫄깃함 | [1] |
| `qmuf-flat-no-dome` (신규) | 봉긋한 돔 없이 납작함 | 출처 미확인 — 일반 상식(제과) |
| `qmuf-coarse-crumb` (신규) | 조직이 거칠고 불균일함 | 출처 미확인 — 일반 상식(제과) |
| `gummy` (CORE) | 속이 떡짐/질음 | 출처 미확인 — 일반 상식(제과) |
| `burnt-outside-raw-inside` (CORE) | 겉은 진하게 탔는데 속은 설익음 | 출처 미확인 — 일반 상식(제과) |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | tunneling | tough-chewy | flat-no-dome | coarse-crumb | gummy | burnt-out-raw-in |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| **qmuf-overmixed-tunneling** | ●● | ●● | | | | |
| **qmuf-too-much-leavener** | | | ● | ●● | | |
| **qmuf-leavener-dead** | | | ●● | | ● | |
| **qmuf-underbaked-center** | | | ● | | ●● | |
| **oven-too-hot** | | | | | ● | ●● |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `qmuf-flat-no-dome` (돔 없이 납작함) — 근접

| 원인 | 점수 |
|---|:--:|
| qmuf-too-much-leavener | 1 |
| qmuf-leavener-dead | 2 |
| qmuf-underbaked-center | 1 |

→ leavener-dead가 근소하게 앞서지만(gap 1) 세 원인 모두 후보로 남는다.

### ✅ 조합 A: `qmuf-tunneling` + `qmuf-tough-chewy` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **qmuf-overmixed-tunneling** | 2+2 | **4** 🥇 |
| (나머지) | 0 | 0 |

→ 압도적. 세로 터널과 질긴 식감은 과교반만의 결정적 조합.

### ✅ 조합 B: `burnt-outside-raw-inside` 단독 — PEAKED

| 원인 | 점수 |
|---|:--:|
| **oven-too-hot** | **2** 🥇 |
| qmuf-underbaked-center | 0 |

→ 압도적. 겉만 진하게 타는 건 오븐 고온만의 고유 신호.

### ⚠️ 조합 C (근접): `qmuf-flat-no-dome` + `gummy` — 완전 동점

| 원인 | 계산 | 점수 |
|---|---|:--:|
| qmuf-leavener-dead | 2+1 | 3 |
| qmuf-underbaked-center | 1+2 | 3 |

→ **3 vs 3 완전 동점.** 베이킹파우더 비활성과 덜 구움 둘 다 "안 부풀고 축축함"으로 나타나 판별 질문이 필요하다.

---

## 결론

**PEAKED — 단, 하나의 근접 원인쌍이 존재한다.**

- ✅ 터널링+질김(조합 A)은 과교반만의 압도적 신호다.
- ✅ 겉만 탐(조합 B)은 오븐 고온만의 압도적 신호다.
- ⚠️ **qmuf-leavener-dead ↔ qmuf-underbaked-center**: 안 부풂+떡짐 조합에서 완전 동점(조합 C).

### → DiscriminatorQuestion 제안

| id | pair | 질문 | yesFavors | noFavors |
|---|---|---|---|---|
| `q-leavener-dead-vs-underbaked` | [`qmuf-leavener-dead`, `qmuf-underbaked-center`] | 꼬치로 중앙을 찔렀을 때 반죽이 묻어나왔나요? | `qmuf-underbaked-center` | `qmuf-leavener-dead` |

### SynonymEntry 초안 (신규 증상)

```
{ symptomId: "qmuf-tunneling", terms: ["구멍이 세로로 나요", "터널이 생겨요", "속에 긴 구멍이 있어요"] }
{ symptomId: "qmuf-tough-chewy", terms: ["질겨요", "쫄깃해요", "쫀득해요"] }
{ symptomId: "qmuf-flat-no-dome", terms: ["봉긋하지 않아요", "돔이 안 생겨요", "납작해요"] }
{ symptomId: "qmuf-coarse-crumb", terms: ["조직이 거칠어요", "속이 울퉁불퉁해요"] }
```

---

## 출처 각주

- [1] 과교반과 터널링(세로 구멍)·질긴 식감의 관계 — DreamWhip Bakers, "What Causes Tunneling in Muffins?" — https://dreamwhipbakers.com/what-causes-tunneling-in-muffins/ , Baking Bites, "What is tunneling?" — https://bakingbites.com/2011/06/what-is-tunneling/
- 출처 미확인 표기 항목은 일반적인 화학팽창(머핀법) 제과 상식으로, 개별 사이트에서 문장 그대로 확인하지 못한 채 도메인 지식으로 추론한 내용이다.
