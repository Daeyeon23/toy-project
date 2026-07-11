# 증상×원인 매트릭스 — 시폰케이크 (chiffon cake)

> **목적:** 분리교반(노른자 배터 + 머랭 폴딩)법 케이크의 실패 양상을 매트릭스로 검증한다 (v3 P2 배치).
> CORE 원인/증상 id는 `_taxonomy.md`를 재사용하고, 시폰케이크 고유 실패는 `chif-` 접두사로 신규 코드화했다.
> 단정적 진단이 아니라 빌드 전 종이 검증 스케치이며, 각주로 출처를 표시했다. 확인 불가한 주장은 "출처 미확인 — 일반 상식(제과)"으로 표기했다.

## 원인 (Causes)

| id | name | why | action | 근거 |
|---|---|---|---|---|
| `chif-underbaked-moist` (신규) | 덜 구워 속에 수분이 남음 | 표면은 익어 보여도 중심에 수분이 남으면 식으면서 그 무게로 주저앉고 바닥에 젤리 같은 층이 생깁니다. | 최소 50분 이상 저온에서 충분히 굽고, 꼬치로 찔러 반죽이 안 묻어날 때까지 확인하세요. | [1] |
| `chif-weak-meringue-fold` (신규) | 머랭을 덜 올렸거나 폴딩 중 꺼짐 | 머랭이 케이크의 유일한 팽창원이라, 약하거나 꺼진 머랭은 굽는 중 공기 구조를 지탱하지 못해 부풀지 않고 조밀해집니다. | 단단한 뿔이 설 때까지 머랭을 올리고, 노른자 배터에 가볍게 나눠 접어 넣으세요. | [2] |
| `chif-not-cooled-upside-down` (신규) | 굽고 나서 뒤집어 식히지 않음 | 시폰 반죽은 구조가 약해, 뒤집어 자체 무게를 반대로 걸어주지 않으면 식으면서 자기 무게로 주저앉습니다. | 오븐에서 꺼내자마자 팬째 뒤집어(병 위에 걸치는 등) 완전히 식을 때까지 두세요. | [2] |
| `chif-oiled-pan` (신규) | 팬에 기름칠을 함(시폰팬은 기름칠 금지) | 반죽이 팬 벽을 붙잡고 타고 올라가야 부푸는데, 기름칠된 미끄러운 벽에서는 반죽이 벽을 타지 못해 부풀다가 주저앉습니다. | 시폰 전용 팬에는 기름칠·코팅을 하지 말고 맨 팬 그대로 사용하세요. | 출처 미확인 — 일반 상식(제과) |
| `oven-too-hot` (CORE 재사용) | 오븐 온도 너무 높음 | 표면이 먼저 빠르게 굳어 팽창 압력을 못 이기고 갈라지며, 속은 고르게 안 익습니다. | 예열 온도를 레시피대로 지키고 오븐 온도계로 확인하세요. | 출처 미확인 — 일반 상식(제과) |

## 증상 (Symptoms)

| id | label | 근거 |
|---|---|---|
| `chif-gummy-layer` (신규) | 바닥에 젤리 같은 질척한 층이 생김 | [1] |
| `collapsed` (CORE) | 부풀다 주저앉음 | [1] |
| `chif-shrunk-sides` (신규) | 식은 뒤 옆면이 팬에서 떨어져 오그라듦 | [2] |
| `chif-dense-heavy` (신규) | 가볍지 않고 무겁고 조밀함 | 출처 미확인 — 일반 상식(제과) |
| `chif-cracked-top` (신규) | 윗면이 갈라짐 | 출처 미확인 — 일반 상식(제과) |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | gummy-layer | collapsed | shrunk-sides | dense-heavy | cracked-top |
|---|:--:|:--:|:--:|:--:|:--:|
| **chif-underbaked-moist** | ●● | ● | | | |
| **chif-weak-meringue-fold** | | | ● | ●● | |
| **chif-not-cooled-upside-down** | | ● | ●● | | |
| **chif-oiled-pan** | | | ●● | | |
| **oven-too-hot** | | | | | ●● |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `shrunk-sides` (옆면 수축) — 근접

| 원인 | 점수 |
|---|:--:|
| chif-weak-meringue-fold | 1 |
| chif-not-cooled-upside-down | 2 |
| chif-oiled-pan | 2 |

→ 3파 근접(gap 0). "옆면이 오그라들었다"만으로는 뒤집어 안 식힌 건지 팬에 기름칠을 한 건지 못 가른다.

### ✅ 조합 A: `chif-cracked-top` 단독 — PEAKED

| 원인 | 점수 |
|---|:--:|
| **oven-too-hot** | **2** 🥇 |
| (나머지) | 0 |

→ 압도적. 윗면이 갈라지는 건 오븐 고온만의 고유 신호다.

### ✅ 조합 B: `chif-gummy-layer` + `collapsed` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **chif-underbaked-moist** | 2+1 | **3** 🥇 |
| chif-not-cooled-upside-down | 0+1 | 1 |

→ **chif-underbaked-moist가 3 vs 1로 뾰족하게 1위.** 바닥에 젤리 층이 생기면서 주저앉는 건 덜 구움의 전형적 조합.

### ⚠️ 근접쌍: `chif-not-cooled-upside-down` ↔ `chif-oiled-pan`

`shrunk-sides` 단독 조합에서 이미 확인했듯, 두 원인 모두 옆면 수축을 2점으로 동일하게 낳아 증상만으로는 구분이 안 된다.

---

## 결론

**PEAKED — 단, 하나의 근접 원인쌍이 존재한다.**

- ✅ 갈라짐(조합 A)은 오븐 고온만의 압도적 신호다.
- ✅ 젤리층+주저앉음(조합 B)은 덜 구움의 뾰족한 신호다.
- ⚠️ **chif-not-cooled-upside-down ↔ chif-oiled-pan**: 옆면 수축만으로는 완전 동점.

### → DiscriminatorQuestion 제안

| id | pair | 질문 | yesFavors | noFavors |
|---|---|---|---|---|
| `q-not-cooled-vs-oiled-pan` | [`chif-not-cooled-upside-down`, `chif-oiled-pan`] | 시폰팬 안쪽에 기름칠이나 코팅을 하지 않은 맨 팬을 사용했나요? | `chif-not-cooled-upside-down` | `chif-oiled-pan` |

### SynonymEntry 초안 (신규 증상)

```
{ symptomId: "chif-gummy-layer", terms: ["바닥이 떡져요", "젤리 같은 층이 생겨요", "밑이 질척해요"] }
{ symptomId: "chif-shrunk-sides", terms: ["옆면이 오그라들었어요", "테두리가 팬에서 떨어졌어요"] }
{ symptomId: "chif-dense-heavy", terms: ["무거워요", "조밀해요", "가볍지 않아요"] }
{ symptomId: "chif-cracked-top", terms: ["윗면이 갈라져요", "표면이 터져요"] }
```

---

## 출처 각주

- [1] 덜 구워짐과 바닥 젤리층·붕괴의 관계, 저온 장시간 굽기 필요성 — Love in the Kitchen, "Notes on how to solve chiffon cake problems" — http://lydialovesbaking.blogspot.com/2014/07/notes-on-how-to-solve-chiffon-cake.html
- [2] 뒤집어 식히기와 옆면 수축·붕괴 방지의 관계, 머랭 폴딩 상태 확인 — FoodCrumbles, "How to Prevent a Collapsed Chiffon Cake" — https://foodcrumbles.com/how-to-prevent-a-collapsed-chiffon-cake/
- 출처 미확인 표기 항목은 일반적인 분리교반(시폰) 제과 상식으로, 개별 사이트에서 문장 그대로 확인하지 못한 채 도메인 지식으로 추론한 내용이다.
