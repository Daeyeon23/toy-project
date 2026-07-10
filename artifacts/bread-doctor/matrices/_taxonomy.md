# 빵 종류 확장 — 공통 분류체계 & 리서치 로스터

> **목적:** 25종 빵의 증상×원인 매트릭스를 병렬로 리서치하기 전에, 서로 호환되는 데이터 스키마를 고정한다.
> 각 매트릭스 파일은 이 문서의 CORE 코드를 최대한 재사용하고, 빵 고유의 실패 양상만 새 코드로 추가한다.
> 최종적으로 `lib/bread-doctor/knowledge-base.ts`의 `Cause`/`Symptom`/`Association` 타입에 그대로 데이터화하는 것이 목표이므로,
> 필드 구조(`id`, `name`/`label`, `why`, `action`, `weight: 1|2`)를 그대로 따른다.

## 데이터 스키마 (types/bread-doctor.ts 기준)

```ts
Symptom       { id: string; label: string }
Cause         { id: string; name: string; why: string; action: string }
Association   { causeId: string; symptomId: string; weight: 1 | 2 }
DiscriminatorQuestion { id; pair: [string,string]; text; yesFavors; noFavors }
SynonymEntry  { symptomId: string; terms: string[] }
```

## CORE 코드 (식빵 매트릭스에서 이미 코드화됨 — 재사용 우선)

### CORE 원인 (causeId)
| id | name |
|---|---|
| `yeast-dead` | 이스트 문제 (죽음/오래됨/뜨거운 물에 사멸) |
| `underproof` | 발효 부족 |
| `overproof` | 과발효 |
| `cold-environment` | 반죽·환경 온도 낮음 |
| `weak-gluten` | 반죽 개발 부족 (글루텐 약함) |
| `oven-too-hot` | 오븐 온도 너무 높음 |
| `oven-too-cool` | 오븐 온도 낮음/굽기 부족 |
| `excess-hydration` | 수분 과다 |
| `excess-salt` | 소금 과다/이스트 직접 접촉 |

### CORE 증상 (symptomId)
| id | label |
|---|---|
| `no-rise` | 전혀/거의 안 부풂 |
| `collapsed` | 부풀다 주저앉음 |
| `gummy` | 속이 떡짐/질음 |
| `burnt-outside-raw-inside` | 겉은 탔는데 속은 덜 익음 |
| `pale` | 색이 안 남/창백함 |
| `blowout` | 옆구리·표면이 터짐 |
| `large-holes` | 기공이 너무 크고 불규칙 |
| `too-wet` | 반죽이 너무 질어 성형 안 됨 |
| `thick-crust` | 겉이 두껍고 딱딱함 |
| `sour-smell` | 신맛/이상한 냄새 |

**규칙: 새 빵의 실패 양상이 위 CORE 항목과 본질적으로 같으면 새 id를 만들지 말고 CORE id를 그대로 재사용한다.**
정말 그 빵/카테고리에만 있는 실패 양상일 때만 새 코드를 추가하고, 카테고리 접두사를 붙인다 (예: `lam-butter-leak`, `enr-filling-leak`, `quick-leavener-dead`, `flat-no-oven-spring`, `boil-underboiled`). 이렇게 하면 배치 간 코드 충돌 없이 나중에 그대로 합칠 수 있다.

## 카테고리별 확장 후보 (참고용 스캐폴드 — 리서치 중 자유롭게 조정/추가 가능)

- **사워도우/호밀 계열**: `starter-inactive`(스타터 활성 부족), `starter-overripe`(과숙성)
- **라미네이션(크루아상/데니시)**: `lam-butter-leak`(라미네이션 붕괴·버터 유출), `lam-underlamination`(접기 부족)
- **enriched(브리오슈/파네토네/밀크빵/단팥빵)**: `enr-heavy-crumb`(버터·설탕 과다로 구조 약화), `enr-filling-leak`(충전물 누출, 단팥빵)
- **화학 팽창(스콘/소다빵/콘브레드)**: `quick-leavener-dead`(베이킹소다/파우더 비활성·부족), `quick-overmixed`(과다 믹싱으로 질겨짐)
- **플랫브레드(피자/난/피타/잉글리시머핀)**: `flat-no-oven-spring`(포켓/부풀림 실패), `flat-uneven-thickness`(두께 불균일)
- **무발효 플랫브레드(토르티야/라바쉬)**: 발효 관련 CORE 코드 대부분 제외, 수분·글루텐·굽기 중심
- **보일링 계열(베이글/프레첼)**: `boil-underboiled`(보일링 부족), `boil-lye-issue`(알칼리 용액 농도 문제, 프레첼)

## 인용 출처 — 허용 목록 (환각 방지)

다음처럼 신뢰 가능한 출처만 인용한다. 실제로 접근/확인 가능한 URL이나 정확한 문헌명을 남길 것. **확인 불가능한 주장은 출처를 지어내지 말고 "출처 미확인 — 일반 제빵 상식"으로 표기한다.**

- King Arthur Baking (kingarthurbaking.com) — 각 빵 종류별 troubleshooting 가이드
- Serious Eats / Kenji López-Alt 기사
- America's Test Kitchen / Cook's Illustrated
- The Bread Baker's Apprentice — Peter Reinhart
- Modernist Bread — Nathan Myhrvold & Francisco Migoya
- The Bread Bible — Rose Levy Beranbaum
- 문화별 전통 빵(난/피타/토르티야 등)은 해당 요리 전통을 다루는 신뢰 가능한 요리 매체(예: Serious Eats의 지역빵 기사) 우선

## 매트릭스 파일 템플릿 (기존 `symptom-cause-matrix.md` 형식 준수)

각 파일은 `artifacts/bread-doctor/matrices/<bread-id>.md`에 저장하며 다음 섹션을 포함한다:
1. 원인 표 (id/name/why/action — CORE 재사용 표시 + 신규 코드)
2. 증상 표 (id/label — CORE 재사용 표시 + 신규 코드)
3. 매트릭스 (weight 1|2)
4. **판별력 검증**: 단일 증상(FLAT 확인) 1개 + 조합(PEAKED 확인) 2~3개 — 식빵 MBT#1과 동일한 형식
5. **결론**: peaked인지 flat인지, 동점 원인쌍이 있으면 DiscriminatorQuestion 제안, 동의어(SynonymEntry) 초안
6. 각 원인/증상/매트릭스 가중치 주장에 인용 출처 각주

## 리서치 로스터 & 배치 (8개 병렬 배치, 총 24종 신규 + 식빵 기존 = 25종)

| 배치 | 빵 (id) | 비고 |
|---|---|---|
| B1 사워도우·호밀 | `sourdough`, `rye-bread`, `pumpernickel` | starter 기반, CORE 발효 코드 다수 재사용 |
| B2 라미네이션 | `croissant`, `danish-pastry` | 버터 라미네이션 실패 중심 |
| B3 enriched 단맛 반죽 | `brioche`, `panettone`, `milk-bread`, `anpan` | 버터/설탕/탕종/충전물 |
| B4 화학 팽창 | `scone`, `soda-bread`, `cornbread` | 이스트 없음, 베이킹소다/파우더 |
| B5 프랑스·이탈리아 린도우 | `baguette`, `ciabatta`, `focaccia`, `pain-de-campagne` | CORE 코드 재사용 비중 최대 |
| B6 발효 플랫브레드 | `pizza-dough`, `naan`, `pita`, `english-muffin` | 오븐/그리들 스프링 중심 |
| B7 무발효 플랫브레드 | `tortilla`, `lavash` | 발효 코드 대부분 제외 |
| B8 보일링 계열 | `bagel`, `pretzel` | 보일링·알칼리 용액 중심 |

기존 `symptom-cause-matrix.md`(식빵)는 그대로 유지하며 이동하지 않는다(plan.md/idea.md/knowledge-base.ts에서 참조 중).
