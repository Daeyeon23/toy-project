# 증상×원인 매트릭스 — 브라우니 (brownie)

> **목적:** 멜팅버터·초콜릿 유화 기반 바 쿠키의 실패 양상을 매트릭스로 검증한다 (v3 P1 배치).
> CORE 원인/증상 id는 `_taxonomy.md`를 재사용하고, 브라우니 고유 실패는 `brn-` 접두사로 신규 코드화했다.
> 단정적 진단이 아니라 빌드 전 종이 검증 스케치이며, 각주로 출처를 표시했다. 확인 불가한 주장은 "출처 미확인 — 일반 상식(제과)"으로 표기했다.

## 원인 (Causes)

| id | name | why | action | 근거 |
|---|---|---|---|---|
| `brn-underbaked` (신규) | 덜 구움 | 중심 온도가 응고점에 도달하기 전에 꺼내면 자를 때 중심이 흐물흐물하게 흘러나옵니다. | 가장자리는 셋팅되고 중심은 살짝 흔들리는 정도까지만 굽고, 꺼낸 뒤 완전히 식혀 자르세요. | [1] |
| `oven-too-hot` (CORE 재사용) | 오븐 온도 너무 높음 | 겉면이 먼저 익어 굳어버려 속까지 열이 전달되기 전에 겉이 타고 속은 설익습니다. | 예열 온도를 레시피대로 지키고 오븐 온도계로 확인하세요. | 출처 미확인 — 일반 상식(제과) |
| `brn-overmixed` (신규) | 반죽을 과교반해 글루텐이 발달하고 공기가 과하게 들어감 | 필요 이상으로 오래 섞으면 글루텐이 발달해 케이크처럼 부풀고 퍽퍽해지며, 퍼지 특유의 밀도가 사라집니다. | 나무 주걱으로 가루가 안 보일 때까지만 섞고 바로 멈추세요. | [1] |
| `brn-choc-seized` (신규) | 초콜릿·버터 유화 실패(과열 또는 수분 혼입으로 뭉침) | 초콜릿에 물기가 섞이거나 너무 급하게 가열하면 지방과 코코아 고형분이 분리돼 매끈하게 섞이지 못합니다. | 초콜릿과 버터를 약불/중탕으로 천천히 녹이고, 물기가 섞이지 않게 하세요. | 출처 미확인 — 일반 상식(제과) |
| `brn-too-much-flour` (신규) | 밀가루 과다(계량 실수 포함) | 밀가루 비중이 높아지면 지방 대비 전분·글루텐이 많아져 촉촉함 대신 퍼석함이 두드러집니다. | 계량컵 대신 저울로 밀가루를 계량하고 레시피 비율을 지키세요. | 출처 미확인 — 일반 상식(제과) |

## 증상 (Symptoms)

| id | label | 근거 |
|---|---|---|
| `brn-gooey-underset` (신규) | 중심이 설익어 흐물흐물함(잘 안 잘림) | [1] |
| `burnt-outside-raw-inside` (CORE) | 겉은 진하게 탔는데 속은 설익음 | 출처 미확인 — 일반 상식(제과) |
| `brn-tough-cakey` (신규) | 퍼지가 아니라 퍽퍽하고 케이크 같은 식감 | [1] |
| `brn-greasy-separated` (신규) | 표면·단면에 기름이 분리되어 얼룩짐 | 출처 미확인 — 일반 상식(제과) |
| `brn-dry-crumbly` (신규) | 퍼석하고 부스러짐 | 출처 미확인 — 일반 상식(제과) |
| `brn-no-shiny-crust` (신규) | 특유의 얇고 반짝이는 크래클 탑이 안 생김 | 출처 미확인 — 일반 상식(제과) |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | gooey-underset | burnt-out-raw-in | tough-cakey | greasy-separated | dry-crumbly | no-shiny-crust |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| **brn-underbaked** | ●● | | | | | ● |
| **oven-too-hot** | ● | ●● | | | | |
| **brn-overmixed** | | | ●● | | ● | |
| **brn-choc-seized** | | | | ●● | | |
| **brn-too-much-flour** | | | ● | | ●● | |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `tough-cakey` (퍽퍽한 케이크 식감) — FLAT

| 원인 | 점수 |
|---|:--:|
| brn-overmixed | 2 |
| brn-too-much-flour | 1 |

→ 근접(gap 1). "퍽퍽하다"만으로는 과교반인지 밀가루 과다인지 확실히 못 가른다.

### ✅ 조합 A: `brn-gooey-underset` + `brn-no-shiny-crust` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **brn-underbaked** | 2+1 | **3** 🥇 |
| oven-too-hot | 1+0 | 1 |

→ **brn-underbaked이 3 vs 1로 1위.** 크래클 탑(크러스트)이 안 생긴 채로 흐물흐물한 건 덜 구움의 전형적 신호 — 오븐 고온은 겉이 타면서도 크러스트 자체는 형성된다.

### ✅ 조합 B: `brn-greasy-separated` 단독 — PEAKED

| 원인 | 점수 |
|---|:--:|
| **brn-choc-seized** | **2** 🥇 |
| (나머지) | 0 |

→ 압도적. 기름이 분리되어 얼룩지는 건 초콜릿·버터 유화 실패만의 고유 신호다.

### ⚠️ 조합 C (근접): `brn-tough-cakey` + `brn-dry-crumbly` — 3파 근접

| 원인 | 계산 | 점수 |
|---|---|:--:|
| brn-overmixed | 2+1 | 3 |
| brn-too-much-flour | 1+2 | 3 |

→ **3 vs 3 동점.** 과교반과 밀가루 과다는 둘 다 퍽퍽·퍼석한 결과를 낳아 이 조합만으로는 못 가른다.

---

## 결론

**PEAKED — 단, 하나의 근접 원인쌍이 존재한다.**

- ✅ 크러스트 유무(no-shiny-crust) + 설익음(gooey-underset)은 덜 구움의 뾰족한 신호다 (조합 A).
- ✅ 기름 분리(greasy-separated)는 초콜릿 유화 실패만의 압도적 신호다 (조합 B).
- ⚠️ **brn-overmixed ↔ brn-too-much-flour**: 둘 다 퍽퍽·퍼석한 질감을 낳아 조합 C에서 완전 동점.

### → DiscriminatorQuestion 제안

| id | pair | 질문 | yesFavors | noFavors |
|---|---|---|---|---|
| `q-overmixed-vs-too-much-flour` | [`brn-overmixed`, `brn-too-much-flour`] | 밀가루를 계량컵이 아니라 저울로 정확히 계량했나요? | `brn-overmixed` | `brn-too-much-flour` |

### SynonymEntry 초안 (신규 증상)

```
{ symptomId: "brn-gooey-underset", terms: ["속이 흐물흐물해요", "자르면 흘러요", "안 익었어요"] }
{ symptomId: "brn-tough-cakey", terms: ["퍽퍽해요", "케이크 같아요", "퍼지가 아니에요"] }
{ symptomId: "brn-greasy-separated", terms: ["기름이 분리됐어요", "얼룩덜룩해요", "기름져요"] }
{ symptomId: "brn-dry-crumbly", terms: ["퍼석해요", "부스러져요", "푸석푸석해요"] }
{ symptomId: "brn-no-shiny-crust", terms: ["윗면이 반짝이지 않아요", "크래클이 없어요", "겉면이 갈라지지 않아요"] }
```

---

## 출처 각주

- [1] 퍼지 vs 케이키 브라우니의 질감 차이, 덜 구움/과교반의 영향 — Summer and Cinnamon, "Fudgy vs Cakey vs Chewy Brownies" — https://summerandcinnamon.com/how-to-make-brownies-fudgy-vs-cakey-vs-chewy-explained/ , Just a Mum's Kitchen, "Brownie Troubleshooting Guide" — https://justamumnz.com/2026/03/22/brownie-troubleshooting-guide/
- 출처 미확인 표기 항목은 일반적인 바 쿠키(멜팅버터·크리밍) 제과 상식으로, 개별 사이트에서 문장 그대로 확인하지 못한 채 도메인 지식으로 추론한 내용이다.
