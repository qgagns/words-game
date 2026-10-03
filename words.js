// 🌿 [정령의 세계 지도]
// 새로운 맵을 만들고 싶으면 그냥 [맵 이름]을 적고 아래에 단어들을 적으시면 됩니다!
// 이름 후보군: 숲, 나무, 식물, 정원, 골짜기, 자연
//            호수, 바다, 물, 강, 샘, 폭포, 섬, 
//            하늘, 바람, 구름, 산, 고원, 언덕, 별
//            유적, 신전, 사원, 도서관, 책, 고대, 교과서\

const WORLD_MAPS_TEXT = `

[풍요와 도약의 숲]
# 상승, 증가, 긍정의 정령들이 노니는 곳
boost, increase, raise, enhance, promote	[동] 증대시키다, 높이다, 향상시키다, 촉진하다
escalation, increase, rise, growth	[명] 상승, 증가, 확대
accelerate, speed up, hasten	[동] 가속하다, 속도를 높이다, 서두르다
facilitate, ease, simplify, promote	[동] 용이하게 하다, 쉽게 하다, 촉진하다
foster, encourage, cultivate, nurture	[동] 조성하다, 장려하다, 육성하다
stimulate, energize, motivate, activate	[동] 자극하다, 활력을 불어넣다, 동기를 부여하다
amplify, augment, expand, enlarge, increase	[동] 늘리다, 증폭하다, 확대하다
proliferation, spread, expansion, growth	[명] 증식, 확산, 확대, 증가
heighten, reinforce, strengthen, intensify	[동] 높이다, 강화하다, 증대시키다
thrive, flourish, prosper, prosper	[동] 번영하다, 번성하다, 잘 자라다
outpace, outperform, surpass, exceed	[동] 능가하다, 앞지르다, 뛰어넘다
breakthrough, advance, development, innovation	[명] 획기적 발전, 진전, 혁신
abundance, plenty, wealth, profusion	[명] 풍부함, 다량, 풍족함
nutrient-rich, nutritious, nourishing	[형] 영양이 풍부한, 영양가 있는
resilience, toughness, strength, adaptability	[명] 회복력, 탄력성, 적응력
revitalize, rejuvenate, renew, restore	[동] 소생시키다, 활력을 되찾게 하다, 새롭게 하다
revival, renewal, restoration, resurgence	[명] 되살아남, 부활, 회복
recreate, reproduce, reproduce, reenact	[동] 재현하다, 다시 만들어 내다
restoration, recovery, renewal, repair	[명] 복원, 복구, 회복
recover, restore, retrieve, regain, reclaim	[동] 되찾다, 복원하다, 회수하다
retrieval, recovery, recovery, regaining	[명] 인출, 회수, 되찾기
conserve, preserve, protect, save	[동] 보존하다, 보호하다, 아끼다
preservation, conservation, protection	[명] 보존, 보호
retain, sustain, maintain, preserve	[동] 유지하다, 지속하다, 보존하다
retention, preservation, maintenance	[명] 보유, 유지, 기억력
safeguard, protect, defend, secure	[동] 보호하다, 지키다, 방어하다
intact, undamaged, unharmed, whole	[형] 온전한, 손상되지 않은
sustainability, durability, viability	[명] 지속 가능성, 지속성, 생존 가능성
sustenance, nourishment, support, livelihood	[명] 자양물, 영양, 생계 유지
durable, enduring, lasting, long-lasting	[형] 내구성 있는, 오래 지속되는
permanent, lasting, enduring, eternal	[형] 영구적인, 지속적인
stabilize, steady, secure, balance	[동] 안정시키다, 안정되게 하다
standardize, normalize, regularize	[동] 표준화하다, 규격화하다
optimized, improved, refined, efficient	[형] 최적화된, 개선된, 효율적인
adequate, sufficient, enough, satisfactory	[형] 적절한, 충분한, 만족스러운
competence, ability, capability, proficiency	[명] 역량, 능력, 숙련도
competent, capable, qualified, proficient	[형] 유능한, 능력 있는, 자격이 있는
adept, skilled, proficient, expert	[형] 능숙한, 숙련된, 전문가 수준의
versatile, adaptable, flexible, multifaceted	[형] 다재다능한, 적응력 있는, 융통성 있는
ingenious, inventive, creative, clever	[형] 독창적인, 기발한, 창의적인
ingenuity, originality, creativity, inventiveness	[명] 독창성, 기발함, 창의성
authentic, genuine, real, legitimate	[형] 진정한, 진짜의, 진품의
sincerity, honesty, genuineness, earnestness	[명] 진정성, 성실함, 진실함
unpretentious, modest, simple, plain	[형] 가식 없는, 소박한, 겸손한
plainness, simplicity, modesty	[명] 소박함, 단순함, 검소함
frugality, thrift, economy, thriftiness	[명] 검소, 절약
invaluable, priceless, precious, irreplaceable	[형] 대단히 귀중한, 값을 매길 수 없는, 소중한
of value, worthwhile, valuable, worth ~	[형] 가치 있는, ~할 가치가 있는
merit, advantage, benefit, selling point	[명] 장점, 이점, 매력, 주목할 점
captivate, fascinate, charm, enthrall	[동] 사로잡다, 매혹하다
fascinating, captivating, intriguing, appealing	[형] 매력적인, 흥미로운, 마음을 사로잡는
exquisite, elegant, delicate, refined	[형] 정교한, 우아한, 세련된
sophistication, refinement, elegance, complexity	[명] 정교함, 세련됨, 복잡함
masterpiece, classic, great work, work of art	[명] 걸작, 명작, 예술 작품
acclaim, praise, approval, commendation	[명] 찬사, 호평, 칭찬; [동] 칭송하다
commendable, praiseworthy, admirable, deserving	[형] 칭찬할 만한, 훌륭한
esteemed, respected, honored, revered	[형] 존경받는, 존중받는
admiration, adoration, respect, appreciation	[명] 감탄, 존경, 흠모, 감사
stature, status, standing, reputation	[명] 위상, 지위, 명성
contented, gratified, satisfied, pleased	[형] 만족한, 만족스러워하는
overjoyed, delighted, thrilled, ecstatic	[형] 매우 기쁜, 기뻐하는
self-actualization, self-fulfillment, fulfillment	[명] 자아실현, 자기충족
self-esteem, self-respect, self-worth	[명] 자존감, 자부심, 자기 가치
beneficial, advantageous, favorable, helpful	[형] 유익한, 이로운, 도움이 되는
contribute to ~, aid, assist, help	[동] ~에 기여하다, ~을 돕다
contribution, assistance, aid, input	[명] 기여, 공헌, 도움, 기여한 것
compensate for, make up for, offset, counterbalance	[숙] ~을 보완하다, ~을 만회하다, ~을 상쇄하다
remedy, solution, cure, treatment	[명] 치료책, 해결책; [동] 바로잡다
alleviate, mitigate, relieve, ease, lessen	[동] 완화하다, 경감하다, 덜어 주다
mitigation, alleviation, reduction, relief	[명] 완화, 경감, 감소
moderate, alleviate, temper, lessen	[동] 완화하다, 조정하다; [형] 온건한, 적당한
substantial, considerable, significant, considerable	[형] 상당한, 실질적인, 중요한
crucial, indispensable, pivotal, vital, essential, critical	[형] 중대한, 결정적인, 중추적인, 필수적인


[결핍과 침식의 바다]
# 감소, 손상, 부정의 정령들이 노니는 곳
aggravate, worsen, intensify, exacerbate	[동] 악화시키다, 심화시키다
undermine, impair, damage	[동] 약화시키다, 훼손하다
demolish, destroy, wreck, ruin	[동] 무너뜨리다, 파괴하다
collapse, crumble, fall apart	[동] 무너지다, 붕괴하다
destruction, collapse, ruin, devastation	[명] 붕괴, 파괴, 몰락
catastrophic, devastating, disastrous, calamitous	[형] 대재앙의, 파괴적인, 처참한
extinction, disappearance, elimination	[명] 멸종, 소멸, 사라짐
extinguish, put out, quench	[동] 끄다, 소멸시키다
vanish, disappear, fade	[동] 사라지다, 없어지다
decline, diminish, decrease, lessen	[동] 감소하다, 줄어들다
decelerate, slow down, reduce speed	[동] 감속하다, 속도를 늦추다
deplete, exhaust, drain, use up	[동] 고갈시키다, 소진하다, 다 쓰다
depletion, exhaustion, depletion, drain	[명] 고갈, 소진
starvation, hunger, famine	[명] 기아, 굶주림, 기근
deprivation, lack, denial	[명] 박탈, 결핍, 부족
scarcity, shortage, lack, deficiency	[명] 부족, 결핍
in short supply, inadequate, insufficient, scarce	[형] 부족한, 불충분한, 부적절한
cannot afford to ~, be unable to afford to ~	[동] ~할 여유가 없다
hazard, danger, risk, peril	[명] 위험, 위험 요소
fatal, deadly, lethal	[형] 치명적인, 죽음을 초래하는
hazardous, perilous, dangerous, risky	[형] 위험한, 매우 위험한
severe, serious, acute, harsh	[형] 심각한, 가혹한, 극심한
threatening, menacing, intimidating	[형] 위협적인, 위협하는
pose a threat, threaten, endanger	[숙] 위협을 가하다, 위협하다
come under threat, be threatened, be at risk	[동] 위협을 받다, 위험에 처하다
endanger, jeopardize, imperil	[동] 위험에 빠뜨리다, 위태롭게 하다
susceptible, vulnerable, sensitive, prone	[형] 취약한, 영향받기 쉬운
pitfall, trap, danger, hazard	[명] 함정, 위험
obstacle, barrier, hindrance, impediment	[명] 장애물, 방해물
constraint, limitation, restriction, restraint	[명] 제약, 한계, 제한
burden, load, weight, responsibility	[명] 부담, 짐, 책임; [동] 짐을 지우다
disrupt, disturb, interfere with, interrupt	[동] 혼란에 빠뜨리다, 방해하다, 교란하다
disruption, disturbance, interruption, interference	[명] 중단, 혼란, 방해
suppress, restrain, repress, curb	[동] 억누르다, 억제하다
restrict, limit, constrain, confine	[동] 제한하다, 한정하다
compulsory, obligatory, mandatory, required	[형] 의무적인, 강제적인
inflexible, rigid, strict, uncompromising	[형] 엄격한, 경직된, 융통성 없는
discourage, dissuade, deter, dishearten	[동] 단념시키다, 만류하다, 낙담시키다
disallow, prohibit, forbid, ban	[동] 금지하다
outlaw, prohibit, ban, criminalize	[동] 불법화하다, 금지하다
seal off, block off, close off	[숙] 봉쇄하다, 차단하다
isolate, sequester, segregate, quarantine	[동] 격리시키다, 고립시키다
isolation, sequestration, segregation, quarantine	[명] 격리, 고립
solitary, lonely, isolated, secluded	[형] 고독한, 외딴, 고립된
insular, narrow-minded, isolated, inward-looking	[형] 편협한, 고립된
disband, dissolve, break up	[동] 해산하다
displace, remove, evict, oust	[동] 쫓아내다, 몰아내다
abandon, relinquish, give up, forsake	[동] 버리다, 포기하다, 내주다
forfeit, lose, surrender, sacrifice	[동] 몰수당하다, 상실하다, 포기하다
forfeit, penalty, loss	[명] 박탈, 몰수, 손실
cease, halt, stop, suspend	[동] 중단하다, 그치다, 멈추다
cease, terminate, conclude, end	[동] 끝내다, 종료하다
halt, stop, cessation	[명] 중단, 정지
backfire, fail, rebound, misfire	[동] 역효과를 낳다, 실패하다
futile, useless, pointless, fruitless	[형] 헛된, 쓸모없는
futility, uselessness, pointlessness, fruitlessness	[명] 헛됨, 쓸모없음
fruitlessly, in vain, unsuccessfully	[부] 헛되이, 결실 없이
distort, twist, misrepresent, deform	[동] 왜곡하다
misguide, mislead, deceive, steer wrong	[동] 오도하다, 잘못 인도하다
erroneously, incorrectly, mistakenly, wrongly	[부] 잘못되게, 그릇되게
flaw, defect, fault, imperfection	[명] 결함, 흠
superficial, shallow, surface-level, cursory	[형] 피상적인, 얕은, 겉으로 드러난
mediocre, average, ordinary, second-rate	[형] 평범한, 보통밖에 안 되는
shabby, worn-out, ragged, run-down	[형] 초라한, 허름한, 낡은
vulgarity, crudeness, obscenity, coarseness	[명] 상스러움, 저속함, 음란함
obsolete, outdated, outmoded, antiquated	[형] 구식의, 쓸모없게 된
dispensable, unnecessary, nonessential	[형] 없어도 되는, 불필요한
redundant, superfluous, excessive, unnecessary	[형] 불필요한, 중복되는, 과도한
undesirable, unwanted, unfavorable, objectionable	[형] 바람직하지 못한, 원치 않는
worrisome, worrying, concerning, troubling	[형] 걱정스러운, 우려되는
insecurity, uncertainty, anxiety, instability	[명] 불안, 불확실성, 불안정
helplessness, powerlessness, impotence	[명] 무력함, 무기력
depression, melancholy, sadness, gloom	[명] 우울감, 우울, 침울함
bitterness, resentment, rancor, acrimony	[명] 쓴맛, 원한, 적개심


[혜안과 지식의 고원]
# 인식, 지각, 예측의 정령들이 노니는 곳
perceive, recognize, notice, detect	[동] 인지하다, 인식하다, 알아차리다
perceptual, sensory, perceptive	[형] 지각의, 감각의
cognitive, intellectual, mental	[형] 인지적인, 지적인, 정신적인
cognitive capacity, mental capacity, intellectual ability	[명] 인지적 능력, 정신적 능력
conscious, aware, deliberate	[형] 의식적인, 알고 있는
awareness, consciousness, recognition	[명] 자각, 인식, 의식
insight, understanding, perception, intuition	[명] 통찰, 통찰력, 이해
contemplation, reflection, meditation, consideration	[명] 심사숙고, 성찰, 명상
deliberate, intentional, purposeful, conscious	[형] 의도적인, 신중한
mindset, mentality, attitude, outlook	[명] 사고방식, 마음가짐, 태도
reasoning, logic, inference, thinking	[명] 추론, 논리, 사고
dedicate, devote, commit, consecrate	[동] 바치다, 헌신하다
anticipate, expect, predict, foresee	[동] 예상하다, 예측하다
assumption, supposition, presumption, belief	[명] 가정, 추정, 전제
hypothesis, theory, proposition, conjecture	[명] 가설, 이론, 추측
theorize, hypothesize, speculate	[동] 이론을 세우다, 가설을 세우다, 추측하다
theoretical, hypothetical, conceptual, abstract	[형] 이론적인, 가설적인, 개념적인
speculative, conjectural, hypothetical, theoretical	[형] 사색적인, 추측에 근거한, 가설적인
concept, notion, idea, conception	[명] 개념, 생각
abstract, theoretical, conceptual	[형] 추상적인, 이론적인, 개념적인
empirical, experimental, observational, factual	[형] 경험적인, 실증적인, 관찰에 근거한
analyze, examine, investigate, scrutinize	[동] 분석하다, 조사하다, 면밀히 검토하다
analysis, examination, investigation, scrutiny	[명] 분석, 조사, 면밀한 검토
evaluate, assess, judge, appraise	[동] 평가하다, 판단하다, 감정하다
appraisal, evaluation, assessment, judgment	[명] 평가, 감정, 판단
validation, verification, confirmation, authentication	[명] 검증, 확인, 인증
criteria, standards, benchmarks, measures	[명] 기준, 표준, 평가 기준
decipher, decode, interpret, unravel	[동] 해독하다, 판독하다, 해석하다
interpret, explain, construe, understand	[동] 해석하다, 설명하다, 이해하다
differentiate, distinguish, discriminate, separate	[동] 구별하다, 구분하다
categorization, classification, grouping, sorting	[명] 범주화, 분류
clarify, explain, illuminate, elucidate	[동] 명확하게 하다, 설명하다
apparent, evident, obvious, clear	[형] 분명한, 명백한
self-evident, obvious, unquestionable	[형] 자명한, 명백한
pronounced, marked, noticeable, distinct	[형] 두드러진, 뚜렷한
accentuate, emphasize, highlight, stress	[동] 강조하다, 두드러지게 하다
identify, recognize, distinguish, pinpoint	[동] 확인하다, 식별하다, 찾아내다
identity, individuality, character, selfhood	[명] 정체성, 개성, 자아
distinctive, unique, characteristic, individual	[형] 독특한, 구별되는, 특징적인
distinctiveness, uniqueness, individuality, originality	[명] 독특성, 차별성, 고유성
precision, accuracy, exactness, specificity	[명] 정밀성, 정확성, 정확함
elaborate, detailed, intricate, sophisticated	[형] 정교한, 공들인, 상세한
elaborate, explain, expand, develop	[동] 상세히 설명하다, 정교하게 만들다
exhaustive, thorough, comprehensive, complete	[형] 철저한, 포괄적인, 완전한
coherent, consistent, logical, orderly	[형] 일관성 있는, 논리 정연한
perspective, viewpoint, standpoint, outlook	[명] 관점, 시각
tunnel vision, narrow perspective, narrow-mindedness	[명] 좁은 시야, 편협한 관점
subjective, personal, individual, biased	[형] 주관적인, 개인적인
biased, prejudiced, partial, one-sided	[형] 편향된, 선입견이 있는, 편파적인
prejudice, bias, preconception, stereotype	[명] 편견, 선입견
inclination, predisposition, tendency, propensity	[명] 성향, 경향
cynical, skeptical, distrustful, pessimistic	[형] 냉소적인, 회의적인, 불신하는
skeptical, doubtful, suspicious, questioning	[형] 회의적인, 의심하는
critical, analytical, evaluative, judgmental	[형] 비판적인, 분석적인
critical, crucial, essential, vital	[형] 중대한, 결정적인, 필수적인
uncritical, unquestioning, undiscerning	[형] 무비판적인, 무조건 받아들이는
illusion, misconception, delusion, false impression	[명] 착각, 환상, 잘못된 인식
ignorance, unawareness, lack of knowledge	[명] 무지, 무식, 지식 부족
unfamiliarity, inexperience, lack of knowledge	[명] 낯섦, 익숙하지 않음, 경험 부족
unanticipated, unexpected, unforeseen, unpredictable	[형] 예상치 못한, 예측하지 못한
unintended, accidental, inadvertent, unplanned	[형] 의도치 않은, 우발적인
inadvertently, accidentally, unintentionally, unknowingly	[부] 의도치 않게, 부주의하게
coincidence, chance, accident, happenstance	[명] 우연의 일치, 우연
randomness, unpredictability, chance	[명] 무작위성, 예측 불가능성
random, arbitrary, haphazard, accidental	[형] 무작위적인, 임의의
probable, likely, plausible, possible	[형] 가능한, 개연성 있는
unlikely, improbable, doubtful, implausible	[형] ~할 것 같지 않은, 가능성이 낮은
inevitable, unavoidable, inescapable, certain	[형] 불가피한, 필연적인
inevitably, unavoidably, necessarily, certainly	[부] 필연적으로, 불가피하게
contradict, oppose, conflict with, refute	[동] 모순되다, 반박하다, 반대하다
paradoxical, contradictory, self-contradictory	[형] 역설적인, 모순되는
controversial, disputed, debatable, contentious	[형] 논란의 여지가 있는, 논쟁적인
questionable, doubtful, dubious, uncertain	[형] 의문스러운, 미심쩍은
assert, claim, maintain, contend	[동] 주장하다, 단언하다
assert, make a point, argue, state	[동] 주장하다, 요점을 제시하다
statement, assertion, declaration, remark	[명] 진술, 주장, 선언
allegory, metaphor, symbolism, analogy	[명] 우화, 풍유, 은유
rhetoric, eloquence, oratory, grandiloquence	[명] 수사법, 웅변, 미사여구
satire, parody, irony, ridicule	[명] 풍자, 패러디, 조롱
satirize, mock, ridicule, lampoon	[동] 풍자하다, 조롱하다
visionary, pioneering, innovative, forward-looking	[형] 선구적인, 혁신적인, 미래지향적인
visionary, seer, prophet	[명] 예지력 있는 사람, 선견자
prose, writing, narrative, composition	[명] 산문, 글, 서술


[역사와 질서의 도서관]
# 사회, 제도, 규칙, 관계의 정령들이 노니는 곳
institution, organization, establishment, system	[명] 제도, 기관, 조직
institutional, organizational, systemic	[형] 제도적인, 기관의, 조직의
administrative, managerial, executive	[형] 행정의, 관리의
municipal, civic, local, urban	[형] 지자체의, 시의, 지역의
hierarchy, ranking, order, structure	[명] 위계, 계층제, 서열
centralize, concentrate, consolidate	[동] 중앙 집중화하다, 집중시키다
centralized, concentrated, consolidated	[형] 중앙 집중화된, 집중된
decentralize, devolve, distribute	[동] 분권화하다, 탈중앙화하다
regulation, rule, restriction, control	[명] 규정, 규제, 제한
norm, standard, convention, principle	[명] 규범, 기준, 관례
doctrine, creed, dogma, principle	[명] 교리, 신조, 정설
convention, custom, tradition, practice	[명] 관습, 관례
conventional, customary, traditional, standard	[형] 관습적인, 전통적인, 통상적인
pass ~ down, hand down, transmit, inherit	[동] ~을 물려주다, 전수하다
heritage, legacy, inheritance, tradition	[명] 유산, 유산으로 물려받은 것
dynasty, royal house, lineage	[명] 왕조, 왕가, 혈통
dominant, prevailing, leading, powerful	[형] 지배적인, 우세한
dominate, control, govern, rule	[동] 지배하다, 통제하다
authoritative, influential, commanding, credible	[형] 권위 있는, 영향력 있는
steer, guide, direct, lead	[동] 유도하다, 조종하다, 이끌다
manipulate, control, exploit, influence	[동] 조종하다, 조작하다, 이용하다
conduct, carry out, perform, execute	[동] 수행하다, 실시하다
conduct, behavior, manner, demeanor	[명] 행동거지, 처신, 태도
discipline, training, control, order	[명] 훈육, 규율, 통제
disciplinary, corrective, punitive	[형] 훈육의, 규율상의, 처벌의
obedience, compliance, submission, conformity	[명] 복종, 순종, 따름
conform, comply, obey, adapt	[동] 순응하다, 따르다, 복종하다
passive, inactive, submissive, unresponsive	[형] 수동적인, 소극적인
reprimand, rebuke, scold, censure	[명] 질책, 징계; [동] 질책하다
punishment, penalty, discipline, sanction	[명] 처벌, 벌, 제재
autonomous, independent, self-governing, self-directed	[형] 자율적인, 자주적인
autonomy, independence, self-government, freedom	[명] 자율성, 자주성, 독립
initiative, enterprise, leadership, drive	[명] 진취성, 주도권, 추진력
spontaneous, voluntary, instinctive, unplanned	[형] 자발적인, 자연스러운, 즉흥적인
prioritize, rank, favor, emphasize	[동] 우선순위에 두다, 우선시하다
precedence, priority, preference, superiority	[명] 우선, 우선권
allocate, assign, allot, distribute	[동] 할당하다, 배분하다
reallocate, redistribute, reassign	[동] 재할당하다, 재분배하다
distribute, allocate, spread, dispense	[동] 분배하다, 배포하다, 퍼뜨리다
distributed, dispersed, decentralized, scattered	[형] 분산된, 흩어진
disperse, scatter, spread, distribute	[동] 분산시키다, 흩뜨리다
circulation, distribution, flow, movement	[명] 유통, 순환, 흐름
logistics, distribution, supply chain	[명] 물류, 유통 체계, 공급망
procure, obtain, acquire, secure	[동] 조달하다, 획득하다
commodity, merchandise, goods, product	[명] 상품, 물품, 원자재
commercialization, marketing, monetization	[명] 상업화, 상품화
corporate, business, commercial, company	[형] 기업의, 상업의
monetary, financial, pecuniary	[형] 통화의, 화폐의, 금융의
vendor, seller, merchant, dealer	[명] 판매자, 상인
collaborative, cooperative, joint, collective	[형] 협력적인, 공동의
communal, collective, shared, community-based	[형] 공동체의, 공동의
bonding, attachment, connection, solidarity	[명] 유대, 결속, 연대
affiliated, associated, connected, linked	[형] 소속된, 연계된
mutual, reciprocal, shared, common	[형] 상호 간의, 공통의
equitable, fair, impartial, just	[형] 공평한, 공정한
hospitality, welcome, friendliness, reception	[명] 환대, 친절한 대접
accord, grant, give, bestow	[동] 부여하다, 수여하다
accord, agreement, harmony, consensus	[명] 합의, 일치, 조화
engage with, interact with, communicate with, connect with	[동] ~와 관계를 맺다, 상호작용하다
involvement, participation, engagement, participation	[명] 참여, 관여
interpersonal, social, relational	[형] 대인 관계의, 사회적인
intimate, close, personal, familiar	[형] 친밀한, 밀접한, 사적인
intervention, interference, involvement, mediation	[명] 개입, 간섭
rivalry, competition, contest, antagonism	[명] 경쟁, 대항 관계
conflict, dispute, disagreement, confrontation	[명] 갈등, 분쟁, 논쟁
dispute, challenge, contest, question	[동] 반박하다, 이의를 제기하다
animus, hostility, antagonism, resentment	[명] 반감, 미움, 적대감
rejection, refusal, denial, dismissal	[명] 거부, 배척
disregard, neglect, ignore, overlook	[동] 무시하다, 소홀히 하다
disregard, neglect, indifference	[명] 무시, 태만, 무관심
disclose, reveal, uncover, expose	[동] 폭로하다, 밝히다, 드러내다
conceal, hide, cover, mask	[동] 숨기다, 감추다
disguise, mask, camouflage, conceal	[동] 위장하다, 감추다
mimic, imitate, imitate, copy	[동] 흉내 내다, 모방하다
mimicry, imitation, emulation, copying	[명] 흉내, 모방
decoy, bait, lure, distraction	[명] 미끼, 유인물
decoy, lure, entice, draw	[동] 유인하다
induce, prompt, cause, trigger	[동] 유도하다, 촉발하다, 유발하다
provoke, trigger, elicit, incite	[동] 유발하다, 촉발하다, 자극하다
prompt, immediate, quick, rapid	[형] 신속한, 즉각적인
persuade, convince, induce, sway	[동] 설득하다
persuasive, convincing, compelling, influential	[형] 설득력 있는
alter, modify, change, revise	[동] 바꾸다, 수정하다, 변경하다
convert, transform, change, turn	[동] 전환하다, 변형시키다
conversion, transformation, alteration, change	[명] 전환, 변형, 변화
transition, shift, change, transformation	[명] 전환, 변천, 변화
substitute, replace, exchange, swap	[동] 대체하다, 대신하다
substitute, replacement, alternative, stand-in	[명] 대체물, 대안, 대신하는 것
counterpart, equivalent, parallel, match	[명] 상응하는 것, 대응물, 맞먹는 것
correlation, association, relationship, connection	[명] 상관관계, 연관성
consequence, result, outcome, effect	[명] 결과, 영향
ascribe, attribute, credit, assign	[동] ~의 탓이나 원인으로 돌리다
owing to, because of, due to, on account of	[숙] ~ 때문에
mechanism, process, system, procedure	[명] 기제, 작동 방식, 과정
dynamics, forces, interactions, relationships	[명] 역학, 동력, 상호작용
interface, connection, link, point of contact	[명] 인터페이스, 접점, 연결 부분
transmit, convey, communicate, transfer	[동] 전달하다, 전파하다, 옮기다
transmission, transfer, communication, dissemination	[명] 전이, 전달, 전파


[이어짐의 신전]
# 서로를 이어주는 정령들이 노니는 곳
also, in addition, additionally	[접부] 또한, 추가적으로, 게다가
besides, moreover, furthermore	[접부] 게다가, 더욱이
on top of that, what's more	[접부] 거기에 더, 게다가, 더한 것은
not only A but (also) B, B as well as A	[접] A뿐만 아니라 B도
either A or B	[접] A나 B 둘 중 하나
neither A nor B	[접] A도 B도 둘다 아닌
in essence, essentially	[접부] 본질적으로
however, yet, nevertheless, nonetheless, still	[접부] 그럼에도 불구하고
while, whereas	[접] ~인 반면에
on the other hand	[접부] 반면에
instead, rather	[접부] 대신에, 오히려
despite, in spite of	[전] ~에도 불구하고
instead of, rather than	[전/접] ~대신에, ~보다는
though, although	[접] 비록 ~일지라도
even though	[접] (사실일 때) 비록 ~일지라도
even if	[접] (가정일 때) 비록 ~하더라도, 설령 ~일지라도
on the contrary, in contrast, by contrast	[접부] 대조적으로
conversely	[접부] 반대로, 역으로
by comparison	[접부] 그에 비해, 비교해 보면
meanwhile	[접부] 한편으로는, 그러는 동안에
likewise, similarly	[접부] 비슷하게, 유사하게
equally, by the same token	[접부] 같은 이유로, 마찬가지로
in the same way, in like manner	[접부] 같은 방식으로, 마찬가지 방식으로
as ~ as ...	[구] ...만큼 ~한
as ~, so ...	[구] ~인 것처럼, ...도 그렇다
for example, e.g., for instance, as an example	[접부] 예를 들어, 한 예로
to illustrate, as an illustration	[접부] 예를 들어 설명하자면, 한 예로써
(let us) say	[접부] 예를 들어 ~라고 해보자
a case in point is	[구] ~가 좋은 예이다
if, providing, provided, suppose, supposing	[접] 만약 ~라면
even if	[접] 심지어 ~라도
unless	[접] ~하지 않는 한
in case (that)	[접] ~할 경우에 대비하여
as long as	[접] ~하는 한
because, since, as	[접] ~ 때문에, ~이므로
because of, due to, owing to	[전] ~ 때문에
therefore, thus, hence	[접부] 그러므로, 따라서
accordingly	[접부] 따라서, 그에 맞춰
as a result, consequently, as a consequence	[접부] 결과적으로, 따라서
for this reason	[접부] 이러한 이유로
so	[접] 그래서, 따라서
so ~ that ..., such ~ that ...	[구] 너무 ~해서 ...하다
surely, certainly, undoubtedly, unquestionably	[접부] 확실히, 틀림없이
above all	[접부] 무엇보다도
in particular, particularly, especially	[접부] 특히, 특별히
in fact, as a matter of fact, actually, indeed	[접부] 사실은, 실제로
in other words, that is (to say), namely	[접부] 즉, 다시 말해
to put it another way	[접부] 다른 말로 하자면
in a word, in short, in brief, to be brief, to put it simply	[접부] 간단히 말하자면, 짧게 말하자면
in summary, to sum up, to summarize, in a nutshell	[접부] 요약하자면, 정리하자면
in conclusion, to conclude	[접부] 결론적으로
all in all, largerly, on the whole, overall	[접부] 대체로, 전반적으로
ultimately, in the end	[접부] 결국, 최종적으로
to start (begin) with, firstly, first of all	[접부] 첫째로, 무엇보다 먼저
subsequently	[접부] 그 후에, 이어서

`;