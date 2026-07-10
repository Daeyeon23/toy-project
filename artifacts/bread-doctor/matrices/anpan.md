# 증상×원인 매트릭스 — 단팥빵 (anpan)

> **목적:** B3(enriched 단맛 반죽) 배치의 마지막 빵. 단팥빵은 브리오슈/파네토네/밀크빵과 달리 버터·달걀
> 비중은 상대적으로 낮은 편이지만, **팥소(anko) 충전물을 반죽 안에 넣고 봉합하는 공정**이라는 이 빵만의
> 실패 축이 있다. 대상은 **팥소를 반죽으로 감싸 굽는 홈베이킹용 단팥빵**(일본식 앙금빵)으로 고정한다.
>
> **출처 관련 주의:** `_taxonomy.md`의 1순위 허용 출처(King Arthur Baking, Serious Eats, America's Test
> Kitchen, Modernist Bread, Bread Baker's Apprentice, Bread Bible)에는 단팥빵(anpan) 레시피/트러블슈팅
> 문서가 없다. King Arthur Baking과 America's Test Kitchen 사이트에서 "anpan"을 검색했으나 매칭되는
> 레시피가 없었고, Serious Eats는 검색 결과에도 잡히지 않아 직접 인용하지 못했다. `_taxonomy.md`가
> 허용하는 "문화별 전통 빵은 해당 요리 전통을 다루는 신뢰 가능한 요리 매체 우선" 원칙에 따라, 일본 가정식·
> 베이킹을 전문적으로 다루는 편집 매체인 **Just One Cookbook**, **Honest Food Talks**, **Eat, Little Bird**의
> 레시피 페이지를 대체 출처로 사용했다. 이 세 곳은 1순위 목록에는 없으므로, 각 인용마다 이 예외를 명시한다.
> 확인 못한 주장(단팥빵의 정확한 유래 등)은 "출처 미확인"으로 표기했다. 단정적 진단 아님.

## 원인 (Causes)

| id | 구분 | name | why | action |
|---|---|---|---|---|
| `yeast-dead` | CORE 재사용 | 이스트 문제 | 이스트가 죽었거나 뜨거운 물/우유에 사멸하면 발효 자체가 시작되지 않아 부풀지 않습니다. | 유통기한을 확인하고, 물·우유 온도를 30℃ 안팎으로 맞춘 뒤 예비 발효로 활성을 확인하세요.[^1] |
| `underproof` | CORE 재사용 | 발효 부족 | 이스트가 가스를 충분히 만들기 전에 구워, 부피가 안 나고 반죽이 필링 무게를 못 이겨 납작해집니다. | 손가락으로 눌렀을 때 자국이 서서히 돌아올 때까지 1차 발효를 늘려 보세요.[^1][^2] |
| `overproof` | CORE 재사용 | 과발효 | 발효가 과하게 진행되면 반죽이 힘을 잃어 굽는 중 주저앉고 기공이 커집니다. | 손가락 자국이 바로 돌아오면(과발효 신호) 그 전 상태에서 구우세요.[^2] |
| `weak-gluten` | CORE 재사용 | 반죽 개발 부족 (믹싱 부족) | 글루텐이 충분히 형성되지 않으면 팥소 무게를 감싸 지탱할 힘이 약해 주저앉거나 기공이 불규칙해집니다. | 반죽이 윈도우페인 테스트를 통과할 때까지(매끄럽고 얇게 늘어남) 믹싱 시간을 늘려 보세요.[^1][^3] |
| `oven-too-hot` | CORE 재사용 | 오븐 온도 너무 높음 | 겉면이 속보다 훨씬 빨리 익어, 겉은 타는데 속(반죽·필링 경계)까지 열이 충분히 전달되지 못합니다. | 오븐 온도를 낮추고, 갈변이 빠르면 굽는 중간 은박지로 덮으세요.[^3] |
| `oven-too-cool` | CORE 재사용 | 오븐 온도 낮음/굽기 부족 | 열이 부족하면 반죽 속(특히 팥소와 닿는 안쪽)이 설익어 떡지고 색이 옅게 나옵니다. | 오븐을 충분히 예열하고, 온도계로 속 온도(약 85℃/185℉ 이상)를 확인하세요.[^3] |
| `enr-filling-leak` | **신규** | 필링(팥소) 누출/터짐 | 팥소가 따뜻하거나 질어 다루기 어려운 상태로 싸면 봉합이 잘 안 되고, 봉합 부위(시접)를 아래로 두지 않으면 굽는 중 그 틈으로 팥소가 새어나와 타 붙습니다. | 팥소를 냉장고에서 충분히 차갑게 식힌 뒤 정량(약 30~35g)만 반죽 중앙에 놓고, 반죽 가장자리를 모아 시접을 꼼꼼히 눌러 붙이고 이음매가 항상 바닥(아래)을 향하게 두세요.[^1][^4] |
| `enr-filling-imbalance` | **신규** | 필링 비율/배치 과다 | 레시피 기준보다 팥소를 과하게 넣거나 반죽을 얇게 밀어 필링 비율이 높아지면, 반죽이 그 무게·수분을 못 이겨 여러 곳이 얇아져 터지거나 필링 주변만 눅눅해집니다. | 필링 무게를 정량대로 저울에 재고, 중앙을 가장자리보다 두껍게 남겨 반죽으로 고르게 감싼 뒤 성형하세요.[^4] |

## 증상 (Symptoms)

| id | 구분 | label |
|---|---|---|
| `no-rise` | CORE 재사용 | 전혀/거의 안 부풂 |
| `collapsed` | CORE 재사용 | 부풀다 주저앉음 |
| `gummy` | CORE 재사용 | 속이 떡짐 / 질음 |
| `burnt-outside-raw-inside` | CORE 재사용 | 겉은 탔는데 속은 덜 익음 |
| `pale` | CORE 재사용 | 색이 안 남 / 창백함 |
| `large-holes` | CORE 재사용 | 기공이 너무 크고 불규칙 |
| `thick-crust` | CORE 재사용 | 겉이 두껍고 딱딱함 |
| `enr-dense-heavy` | 배치 재사용 (brioche/panettone/milk-bread) | 파운드케이크처럼 무겁고 조밀함 |
| `enr-filling-oozes` | **신규** | 필링(팥소)이 겉으로 새어나오거나 터져 바닥에 눌어붙음 |
| `enr-soggy-around-filling` | **신규** | 반죽 자체는 잘 구워졌는데 필링 바로 주변만 축축/눅눅함 |

## 매트릭스 (●● = 2점, ● = 1점, 빈칸 = 0)

| 원인 \ 증상 | no-rise | collapsed | gummy | burnt-raw | pale | large-holes | thick-crust | dense-heavy | filling-oozes | soggy-around-filling |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| `yeast-dead` | ●● |    | ●● |    | ●  |    |    |    |    |    |
| `underproof` | ●● |    | ●● |    |    |    |    | ●  |    |    |
| `overproof`  | ●  | ●● |    |    |    | ●● |    |    |    |    |
| `weak-gluten` |    | ●● |    |    |    | ●● |    | ●  |    |    |
| `oven-too-hot` |    |    |    | ●● |    |    | ●● |    |    |    |
| `oven-too-cool` |    |    | ●● |    | ●● |    |    |    |    |    |
| `enr-filling-leak` |    | ●  |    |    |    |    |    |    | ●●  |    |
| `enr-filling-imbalance` |    |    |    |    |    |    |    | ●  | ●  | ●●  |

---

## 판별력 검증: 단일 증상 vs 조합

### ❌ 단일 증상 `gummy` (속이 떡짐) — FLAT

| 원인 | 점수 |
|---|:--:|
| `yeast-dead` | 2 |
| `underproof` | 2 |
| `oven-too-cool` | 2 |

→ **2점 3개 동점.** "떡지다"는 것만으론 이스트/발효부족/오븐저온을 못 가른다. 식빵·브리오슈·파네토네·밀크빵과 동일한 패턴 — enriched 배치 전반에서 반복되는 도메인 사실이다.

### ✅ 조합 A: `enr-filling-oozes` + `collapsed` — PEAKED (단팥빵 특이 조합)

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **`enr-filling-leak`** | 2+1 | **3** 🥇 |
| `enr-filling-imbalance` | 1+0 | 1 |

→ **3 vs 1로 뾰족하게 1위.** 봉합 부위가 터지며 주저앉는 조합은 봉합 불량(필링 누출) 쪽에 무게가 실린다.

### ✅ 조합 B: `enr-soggy-around-filling` + `enr-dense-heavy` — PEAKED (단팥빵 특이 조합)

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **`enr-filling-imbalance`** | 2+1 | **3** 🥇 |
| `underproof` | 0+1 | 1 |
| `weak-gluten` | 0+1 | 1 |

→ **3 vs 1, 1로 뾰족하게 1위.** 필링만 눅눅하고 전체적으로 무거우면 필링 과다/비율 문제가 가장 그럴듯하다.

### ⚠️ 조합 C (정직한 근접 사례): `no-rise` + `gummy` + `pale` — 약한 PEAKED

| 원인 | 계산 | 점수 |
|---|---|:--:|
| **`yeast-dead`** | 2+2+1 | **5** 🥇 |
| `underproof` | 2+2+0 | 4 |
| `oven-too-cool` | 0+2+2 | 4 |

→ 1위(5)와 2·3위(4, 4)가 근접. 밀크빵과 마찬가지로 "이스트 vs 발효부족 vs 오븐 저온" 근접 문제가 여기서도 반복된다.

### ⚠️ 추가 관찰 (정직한 동점): `collapsed` + `large-holes`만 — FLAT

| 원인 | 계산 | 점수 |
|---|---|:--:|
| `overproof` | 2+2 | **4** |
| `weak-gluten` | 2+2 | **4** |

→ **완전 동점.** 밀크빵 매트릭스에서 확인된 것과 동일한 "과발효 ↔ 반죽 개발 부족" 근본적 모호함이 단팥빵에도 그대로 있다.

---

## 결론

**PEAKED — 단, 세 개의 원인쌍에 판별 질문이 필요하다.**

- ✅ `enr-filling-oozes`(필링 누출)와 `enr-soggy-around-filling`(필링 주변만 눅눅) 같은 **필링 특이적 증상**이 조합에 들어가면 매우 뾰족하게 갈린다(조합 A, B). 이건 단팥빵만의 고유한 판별 축으로, 브리오슈·파네토네·밀크빵에는 없다.
- ⚠️ 이스트 문제 ↔ 발효 부족 ↔ 오븐 저온 3자 근접(조합 C)과, 과발효 ↔ 반죽 개발 부족(추가 관찰)은 CORE 원인에서 기인한 것이라 enriched 배치 4종 전부에서 반복된다 — 이 앱의 판별 질문 설계가 배치 전체에 공유될 수 있다는 뜻이다.
- ⚠️ `enr-filling-leak`과 `enr-filling-imbalance`는 둘 다 `enr-filling-oozes`(필링 누출) 증상을 만들 수 있어(조합 A에서 3 vs 1로 갈리긴 하지만), 완전히 독립적이진 않다 — 봉합 부위에서 터졌는지 여러 곳에서 스며 나왔는지로 갈라야 한다.

### DiscriminatorQuestion 제안

| id | pair | text | yesFavors | noFavors |
|---|---|---|---|---|
| `q-yeast-vs-underproof` | [`yeast-dead`, `underproof`] | 1차 발효 때 반죽이 부풀긴 했나요? (CORE 재사용) | `underproof` | `yeast-dead` |
| `q-underproof-vs-ovencool` | [`underproof`, `oven-too-cool`] | 오븐에 넣기 전 발효에서 반죽이 충분히 부풀었었나요? | `oven-too-cool` | `underproof` |
| `q-overproof-vs-weakgluten` | [`overproof`, `weak-gluten`] | 반죽이 발효 중 한 번 힘있게 부풀었다가 정점을 넘겨 주저앉았나요, 아니면 애초에 반죽이 늘어지고 힘이 없었나요? | `overproof` | `weak-gluten` |
| `q-fillingleak-vs-fillingimbalance` | [`enr-filling-leak`, `enr-filling-imbalance`] | 새어나온 팥소가 이음매(봉합 부위) 한 곳에서 터져 나왔나요, 아니면 반죽 여러 곳이 얇아지며 스며 나왔나요? | `enr-filling-leak` | `enr-filling-imbalance` |

### SynonymEntry 초안

| symptomId | terms |
|---|---|
| `enr-filling-oozes` | 팥소가 새어나와요, 터졌어요, 바닥에 눌어붙었어요, 필링이 흘러나와요 |
| `enr-soggy-around-filling` | 팥소 주변만 눅눅해요, 필링 근처가 안 익었어요, 속 안쪽만 축축해요 |

(`no-rise`, `gummy`, `collapsed`, `pale` 등 CORE 증상의 동의어와 `enr-dense-heavy`(배치 재사용)의 동의어는 `lib/bread-doctor/knowledge-base.ts`의 `SYNONYMS` 및 brioche.md/panettone.md/milk-bread.md 초안을 그대로 재사용한다.)

---

## 각주 (인용 출처)

> 아래 [^1]~[^4]는 `_taxonomy.md`의 1순위 허용 목록에 없는 출처다. King Arthur Baking·America's Test
> Kitchen·Serious Eats에 단팥빵(anpan) 관련 문서가 없어, "문화별 전통 빵은 신뢰 가능한 요리 매체 우선"
> 원칙에 따라 대체 출처로 사용했음을 명시한다.

[^1]: Just One Cookbook, "Anpan あんパン". https://www.justonecookbook.com/anpan/ — 반죽을 물·우유 30℃ 안팎에서 섞고 약 15분 믹싱해 윈도우페인 테스트("very elastic, smooth, and shiny")를 통과시킬 것을 권장. 필링은 1개당 35g씩 나눠 반죽 중앙에 놓고 가장자리를 모아 시접을 꼼꼼히 눌러 붙인 뒤 시접이 바닥을 향하게 굴려 마무리. 반죽이 과하게 끈적일 때 덧가루를 계속 추가하기보다 기름 바른 손이나 벤치 스크레이퍼를 쓰라는 운영진 코멘트(과도한 덧가루는 반죽을 뻑뻑하게 만들 수 있음).

[^2]: Honest Food Talks, "Anpan Recipe: How To Make Japanese Red Bean Bun". https://www.honestfoodtalks.com/anpan-recipe-red-bean-buns/ — 손가락 찔러보기 발효 확인법("If it quickly closes up, there is still yeast action... leave it to proof for longer"); 팬 위에서 부풀며 서로 붙지 않도록 간격을 두라는 지침; 박력분(케이크 플라워) 대신 중력분을 쓰면 식감이 덜 폭신해진다는 서술.

[^3]: Eat, Little Bird, "Japanese Red Bean Buns (Anpan)". https://eatlittlebird.com/japanese-red-bean-buns-anpan/ — 1차 발효 "doubled in size", 2차 발효 "almost double... touching each other"; 180℃/356℉에서 20~25분, 갈변이 빠르면 은박지로 덮을 것; 완성 확인은 속 온도 85℃/185℉.

[^4]: Eat, Little Bird, 위 문서 — 필링을 30g씩 소분해 냉장고에서 차게 식힌 뒤("cold from the fridge for easier handling") 다루고, 반죽 가장자리를 중앙으로 모아 접으며 매끄러운 공 모양으로 봉합하는 기법을 서술. Honest Food Talks도 "반죽 중앙을 가장자리보다 두껍게" 밀어 필링을 감쌌을 때 두께가 고르게 된다고 서술.

**출처 미확인 표기:** 단팥빵의 유래(1875년 기무라 야스베에가 메이지 천황에게 헌상했다는 이야기)는 다수의 요리 매체(Just One Cookbook 등)와 대중 기사에서 반복적으로 언급되지만, 이번 조사에서 1차 사료나 `_taxonomy.md` 허용 출처로 직접 확인하지 못했으므로 "출처 미확인 — 일반적으로 통용되는 역사"로만 남긴다. 매트릭스의 원인·증상·가중치 판단에는 이 역사적 서술을 근거로 삼지 않았다.
