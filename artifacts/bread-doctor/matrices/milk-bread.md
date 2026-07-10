# 증상×원인 매트릭스 — 우유식빵/호카이도 밀크빵 (milk-bread)

> **목적:** B3(enriched 단맛 반죽) 배치의 세 번째 빵. 밀크빵은 브리오슈·파네토네와 달리 버터·달걀 비중은
> 상대적으로 낮지만, **탕종(tangzhong, 물+밀가루를 미리 호화시킨 반죽)** 이라는 이 카테고리 고유의 공정이
> 성패를 가르는 핵심 변수다. 대상은 **탕종법을 쓰는 홈베이킹용 식빵/모닝빵**(King Arthur Japanese Milk
> Bread / ATK Furikake Japanese Milk Bread 계열)으로 고정한다.
>
> **주의:** 탕종의 정확한 비율·목표 온도(65℃/149℉)와 "촉촉함·유통기한 연장" 효과는 King Arthur Baking의
> 레시피/블로그로 직접 확인했다. 그러나 "탕종을 잘못 만들면 구체적으로 얼마나 빨리 마르는가/얼마나 질어지는가"
> 같은 정량적 실패 서술은 이번 조사에서 허용 출처로 직접 확인하지 못해 "출처 미확인 — 일반 제빵 상식"으로
> 표기했다. 단정적 진단 아님.

## 원인 (Causes)

| id | 구분 | name | why | action |
|---|---|---|---|---|
| `yeast-dead` | CORE 재사용 | 이스트 문제 | 이스트가 죽었거나 뜨거운 물/우유에 사멸하면 발효 자체가 시작되지 않아 부풀지 않습니다. | 유통기한을 확인하고, 우유·물 온도를 40℃ 이하로 맞춘 뒤 예비 발효로 활성을 확인하세요. |
| `underproof` | CORE 재사용 | 발효 부족 | 이스트가 가스를 충분히 만들기 전에 구워, 부피가 안 나고 속이 떡지며 탕종의 보습 효과도 제대로 드러나지 않습니다. | 반죽이 "puffy하지만 꼭 2배는 아니어도 되는" 상태까지 1차 발효를 진행하세요.[^2] |
| `overproof` | CORE 재사용 | 과발효 | 발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고 기공이 커집니다. | 팬 높이 기준선을 넘기기 전에 발효를 마치고 바로 구우세요. |
| `weak-gluten` | CORE 재사용 | 반죽 개발 부족 (믹싱 부족) | 글루텐이 충분히 형성되지 않으면 탕종이 머금은 수분과 우유·버터의 무게를 가둘 힘이 약해 주저앉고 기공이 불규칙해집니다. | 반죽이 매끄럽고 탄력 있게 늘어날 때까지(윈도우페인 테스트) 믹싱 시간을 늘리고, 버터는 한 큰술씩 나눠 넣으며 완전히 흡수시키세요.[^4] |
| `oven-too-hot` | CORE 재사용 | 오븐 온도 너무 높음 | 겉면이 속보다 훨씬 빨리 익어, 겉은 타거나 두꺼워지는 동안 속까지 열이 전달되지 못합니다. | 오븐 온도를 레시피보다 낮추고, 필요하면 굽는 중간 은박지로 덮으세요. |
| `oven-too-cool` | CORE 재사용 | 오븐 온도 낮음/굽기 부족 | 열이 부족하면 속이 설익어 떡지고 색이 옅게 나옵니다. 목표 속 온도(약 190℉/88℃ 이상)에 못 미친 채 꺼내면 특히 그렇습니다. | 오븐을 충분히 예열하고, 디지털 온도계로 속 온도가 190℉ 이상인지 확인한 뒤 꺼내세요.[^1][^2] |
| `enr-heavy-crumb` | 배치 재사용 (brioche/panettone) | 레시피 자체의 구조적 한계 (버터·설탕·달걀 비중) | 우유식빵도 버터·설탕·달걀이 들어간 enriched 반죽이라, 비율이 높은 레시피는 글루텐이 그 무게를 못 이겨 다소 무겁고 조밀해질 수 있습니다. | 브레드 플라워 비중을 유지하고, 버터는 나눠 넣는 시간을 늘려 보세요.[^4] |
| `enr-tangzhong-imbalance` | **신규** | 탕종 비율/온도 실패 (과·소 조리, 생략) | 탕종을 목표 온도(약 65℃/149℉)까지 충분히 호화시키지 않거나 생략하면 전분이 물을 붙잡는 능력이 약해져, 밀크빵 특유의 "촉촉함이 오래가는" 효과가 사라지고 하루 이틀 만에 빨리 말라 뻑뻑해질 수 있습니다.[^1][^3] 반대로 물·우유 비율을 과하게 늘려 탕종을 너무 질게 만들면 본반죽 전체가 지나치게 질어져 성형이 무너지거나, 덜 구워졌을 때 속이 떡질 수 있습니다.(출처 미확인 — 일반 제빵 상식) | 탕종은 물 3큰술+우유 3큰술+빵가루(강력분) 2큰술 비율로, 젓는 자국이 바닥에 남는 뻑뻑한 상태까지 정확히 익힌 뒤 미지근하게 식혀서 사용하세요.[^1] |

## 증상 (Symptoms)

| id | 구분 | label |
|---|---|---|
| `no-rise` | CORE 재사용 | 전혀/거의 안 부풂 |
| `collapsed` | CORE 재사용 | 부풀다 주저앉음 |
| `gummy` | CORE 재사용 | 속이 떡짐 / 질음 |
| `burnt-outside-raw-inside` | CORE 재사용 | 겉은 탔는데 속은 덜 익음 |
| `pale` | CORE 재사용 | 색이 안 남 / 창백함 |
| `large-holes` | CORE 재사용 | 기공이 너무 크고 불규칙 |
| `too-wet` | CORE 재사용 | 반죽이 너무 질어 성형 안 됨 |
| `thick-crust` | CORE 재사용 | 겉이 두껍고 딱딱함 |
| `enr-dense-heavy` | 배치 재사용 (brioche/panettone) | 파운드케이크처럼 무겁고 조밀함 |
| `enr-stales-fast` | **신규** | 구운 다음 날부터 빨리 말라 뻑뻑해짐 (밀크빵 특유의 "오래 촉촉함"이 안 나타남) |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | no-rise | collapsed | gummy | burnt-raw | pale | large-holes | too-wet | thick-crust | dense-heavy | stales-fast |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| `yeast-dead` | ●● |    | ●● |    | ●  |    |    |    |    |    |
| `underproof` | ●● |    | ●● |    |    |    |    |    | ●  |    |
| `overproof`  | ●  | ●● |    |    |    | ●● |    |    |    |    |
| `weak-gluten` |    | ●● |    |    |    | ●● | ●  |    | ●  |    |
| `oven-too-hot` |    |    |    | ●● |    |    |    | ●● |    |    |
| `oven-too-cool` |    |    | ●● |    | ●● |    |    |    |    |    |
| `enr-heavy-crumb` | ●  |    | ●  |    |    |    |    |    | ●●  |    |
| `enr-tangzhong-imbalance` |    |    | ●  |    |    |    | ●  |    |    | ●●  |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `gummy` (속이 떡짐) — FLAT

| 원인 | 점수 |
|---|:--:|
| `yeast-dead` | 2 |
| `underproof` | 2 |
| `oven-too-cool` | 2 |
| `enr-heavy-crumb` | 1 |
| `enr-tangzhong-imbalance` | 1 |

→ **2점 3개 동점.** "떡지다"는 것만으로는 이스트/발효부족/오븐저온을 전혀 못 가른다. 식빵 매트릭스와 동일한 패턴.

### ✅ 조합 A: `enr-stales-fast` + `too-wet` + `gummy` — PEAKED (탕종 특이 조합)

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **`enr-tangzhong-imbalance`** | 2+1+1 | **4** 🥇 |
| `yeast-dead` | 0+0+2 | 2 |
| `underproof` | 0+0+2 | 2 |
| `oven-too-cool` | 0+0+2 | 2 |

→ **4 vs 2로 뾰족하게 1위.** `enr-stales-fast`(빨리 마름)가 결정타 — 이 증상은 탕종 실패에만 강하게 연결되는 밀크빵 특이적 증상.

### ⚠️ 조합 B (정직한 근접 사례): `no-rise` + `gummy` + `pale` — 약한 PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **`yeast-dead`** | 2+2+1 | **5** 🥇 |
| `underproof` | 2+2+0 | 4 |
| `oven-too-cool` | 0+2+2 | 4 |

→ 1위(5)와 2·3위(4, 4)가 근접한 3파전. 식빵/브리오슈/파네토네에서 반복적으로 나타난 "이스트 vs 발효부족 vs 오븐(저온)" 근접 문제가 밀크빵에도 그대로 남는다 — 판별 질문 필요.

### ✅ 조합 C: `burnt-outside-raw-inside` + `thick-crust` — PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **`oven-too-hot`** | 2+2 | **4** 🥇 |
| (나머지) | | 0 |

→ 압도적. 오븐 고온 문제는 다른 원인과 증상이 거의 안 겹쳐 매우 잘 분리된다.

### ⚠️ 추가 관찰 (정직한 동점): `collapsed` + `large-holes`만 — FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| `overproof` | 2+2 | **4** |
| `weak-gluten` | 2+2 | **4** |

→ **완전 동점.** 과발효와 반죽 개발 부족은 둘 다 "주저앉고 기공이 크다"는 결과를 만들어 이 두 증상만으론 못 가른다. 식빵 매트릭스에서도 잠재해 있던 조합인데, 여기서 명시적으로 확인됐다.

---

## 결론

**PEAKED — 단, 두 개의 원인쌍에 판별 질문이 필요하다.**

- ✅ `enr-stales-fast`(빨리 마름) 같은 **탕종 특이적 증상**이 조합에 들어가면 매우 뾰족하게 갈린다(조합 A). 이건 밀크빵만의 고유한 판별 신호로, 브리오슈·파네토네에는 없는 축이다.
- ✅ 오븐 온도 계열은 다른 enriched 빵과 마찬가지로 잘 분리된다(조합 C).
- ⚠️ 이스트 문제 ↔ 발효 부족 ↔ 오븐 저온 3자 근접(조합 B)과, 과발효 ↔ 반죽 개발 부족(추가 관찰)은 증상만으론 깔끔히 못 가른다 — enriched 반죽 전반에 걸친 반복 패턴이다.

### DiscriminatorQuestion 제안

| id | pair | text | yesFavors | noFavors |
|---|---|---|---|---|
| `q-yeast-vs-underproof` | [`yeast-dead`, `underproof`] | 1차 발효 때 반죽이 부풀긴 했나요? (CORE 재사용) | `underproof` | `yeast-dead` |
| `q-underproof-vs-ovencool` | [`underproof`, `oven-too-cool`] | 오븐에 넣기 전 발효에서 반죽이 충분히(팬 위로 볼록하게) 부풀었었나요? | `oven-too-cool` | `underproof` |
| `q-overproof-vs-weakgluten` | [`overproof`, `weak-gluten`] | 반죽이 발효 중 한 번 힘있게 부풀었다가 정점을 넘겨 주저앉았나요, 아니면 애초에 반죽이 늘어지고 힘이 없어서 잘 안 부푼 채로 주저앉았나요? | `overproof` | `weak-gluten` |

### SynonymEntry 초안

| symptomId | terms |
|---|---|
| `enr-stales-fast` | 빨리 굳어요, 하루 지나면 뻣뻣해요, 금방 말라요, 촉촉함이 안 오래가요 |
| `enr-dense-heavy` | 너무 무거워요, 퍽퍽해요, 촘촘해요 (배치 재사용, brioche/panettone과 동일 의미) |

(`no-rise`, `gummy`, `collapsed`, `too-wet` 등 CORE 증상의 동의어는 `lib/bread-doctor/knowledge-base.ts`의 `SYNONYMS`를 그대로 재사용한다.)

---

## 각주 (인용 출처)

[^1]: King Arthur Baking, "Japanese Milk Bread Recipe". https://www.kingarthurbaking.com/recipes/japanese-milk-bread-recipe — 탕종 비율(물 3큰술+우유 3큰술+빵가루 2큰술), 목표 온도 65℃/149℉가 "pre-gelatinizes the flour's starches, which makes them more able to retain liquid"라고 설명. 젓는 자국이 바닥에 남을 때까지 3~5분 조리, 350℉에서 30~35분 굽고 속 온도 190℉ 이상 확인.

[^2]: King Arthur Baking, "Japanese Milk Bread Rolls Recipe". https://www.kingarthurbaking.com/recipes/japanese-milk-bread-rolls-recipe — 1차 발효는 "puffy but not necessarily doubled in bulk" 상태(60~90분), 2차 발효 40~50분; 350℉에서 25~30분, 속 온도 190℉ 이상.

[^3]: King Arthur Baking 블로그, "Tangzhong, the secret to softer bread" (2018-03-26). https://www.kingarthurbaking.com/blog/2018/03/26/tangzhong — 전분 호화로 더 많은 수분을 오래 머금어 "stay soft and fresh longer"진다고 설명하며, 이 효과가 시나몬롤·브리오슈 등 enriched 반죽에서 특히 유효하다고 서술.

[^4]: America's Test Kitchen, "Furikake Japanese Milk Bread". https://www.americastestkitchen.com/recipes/15293-furikake-japanese-milk-bread — 탕종을 전자레인지로 "stiff, smooth, pudding-like consistency"까지 만드는 방법, 버터를 한 큰술씩 나눠 넣는 믹싱법, 속 온도 205~210℉ 완성 기준, 스파이럴 성형이 "feathery strands"/"gossamer-thin layers" 구조를 만든다는 서술.

**출처 미확인 표기:** 탕종을 과·소 조리했을 때 정확히 얼마나 빨리 마르는지, 또는 탕종 비율이 높을 때 본반죽이 얼마나 질어지는지에 대한 정량적 서술은 이번 조사에서 King Arthur/ATK 등 허용 출처로 직접 확인하지 못했다. 개인 블로그(예: 탕종 조리 온도 미달로 반죽이 뻑뻑해졌다는 후기)에서 반복 언급되지만 `_taxonomy.md` 허용 출처 목록에 없어 인용하지 않았고, 위 매트릭스에서는 "출처 미확인 — 일반 제빵 상식"으로만 반영했다.
