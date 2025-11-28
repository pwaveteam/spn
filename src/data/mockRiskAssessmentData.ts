import{CauseImporterRow,NearMissImporterRow,EvaluationData,FrequencyStep1Row,FrequencyRiskDataRow,FrequencyStep3Row,ThreeStep1Row,ThreeStepRiskDataRow,ThreeStep3Row,ChemicalEditableRow,ChecklistSection,ProcessRow,ChecklistStep1Row}from"@/types/riskAssessment"

export const causeImporterMockData:CauseImporterRow[]=[
{id:1,category:'설비결함',situation:'기계 부품 파손으로 인한 충돌 위험',hazard:'돌출물 접촉으로 인한 상해'},
{id:2,category:'작업자 부주의',situation:'안전모 미착용으로 낙하물 충돌 위험',hazard:'머리 손상 위험'},
{id:3,category:'관리미흡',situation:'출입통제 미비로 위험구역 무단 진입',hazard:'고소작업 중 추락 위험'},
{id:4,category:'작업환경 요인',situation:'조명 부족으로 인한 시야 확보 어려움',hazard:'시야 제한에 따른 충돌 위험'},
{id:5,category:'보호구 미착용',situation:'화학물질 취급 중 보호안경 미착용',hazard:'화학물질 접촉으로 눈 손상'},
{id:6,category:'설비오작동',situation:'센서 오작동으로 인한 기계 자동 작동',hazard:'협착 및 절단 위험'},
{id:7,category:'불안전한 작업방법',situation:'적재물 위에서 작업 수행',hazard:'높이작업 시 낙상 위험'},
{id:8,category:'위험물 관리미흡',situation:'인화성 물질 밀폐 보관 미흡',hazard:'화재 및 폭발 위험'},
{id:9,category:'비상조치 미비',situation:'비상정지장치 접근 어려움',hazard:'비상 상황 시 즉시 대응 불가'},
{id:10,category:'작업자 피로누적',situation:'과로로 집중력 저하',hazard:'부주의에 의한 사고 증가'}
]

export const nearMissImporterMockData:NearMissImporterRow[]=[
{id:1,process:'물류 하역 작업',hazard:'하역 중 적재물 낙하로 인한 부상 위험',action:'적재물 고정 상태 점검 및 하역 시 2인 1조 작업'},
{id:2,process:'기계 유지보수',hazard:'방호장치 해체 후 손 끼임 위험',action:'정비 전 전원 차단 및 방호장치 설치 상태 확인'},
{id:3,process:'용접 작업',hazard:'불꽃 비산으로 인한 화상 위험',action:'방염포 설치 및 보호구 착용'},
{id:4,process:'지게차 운행',hazard:'협소 구역에서 충돌 위험',action:'후진 시 유도자 배치 및 경고음 작동 확인'},
{id:5,process:'화학약품 이송',hazard:'용기 누출로 인한 피부 접촉 위험',action:'밀폐용기 사용 및 이송 전 외관 점검'},
{id:6,process:'고소 작업',hazard:'작업 중 추락 위험',action:'이동식 작업대 고정 및 안전벨트 착용'},
{id:7,process:'절단기 사용',hazard:'날카로운 절단날에 의한 베임 위험',action:'작업 전 안전커버 작동 여부 확인'},
{id:8,process:'전기 설비 점검',hazard:'감전 위험',action:'절연 장갑 착용 및 차단기 확인 후 작업'},
{id:9,process:'도장 작업',hazard:'밀폐 공간 내 유증기 흡입 위험',action:'송풍기 설치 및 유기용제 사용 기준 준수'},
{id:10,process:'운반 작업',hazard:'과중 하중 취급 시 근골격계 부담',action:'운반 보조구 사용 및 적정 중량 유지'}
]

export const evaluationListMockData:EvaluationData[]=[
{id:30,year:2025,title:"금속 절삭 작업 위험성 평가",type:"정기평가",method:"빈도·강도법",regulation:"산안법 제37조",registered:"2025-06-01",modified:"2025-06-02",completed:"2025-06-10",status:"완료"},
{id:29,year:2025,title:"분진 취급 공정 위험평가",type:"수시평가",method:"체크리스트법",regulation:"산안법 제37조",registered:"2025-06-03",modified:"2025-06-05",completed:"",status:"진행"},
{id:28,year:2025,title:"레이저 절단기 작업 평가",type:"최초평가",method:"화학물질 평가법",regulation:"산안법 제37조",registered:"2025-06-06",modified:"2025-06-07",completed:"2025-06-08",status:"완료"},
{id:27,year:2025,title:"용광로 작업장 평가",type:"정기평가",method:"위험성수준 3단계 판단법",regulation:"산안법 제37조",registered:"2025-05-28",modified:"2025-05-30",completed:"2025-06-01",status:"완료"},
{id:26,year:2025,title:"연마 작업장 위험성 평가",type:"정기평가",method:"체크리스트법",regulation:"산안법 제37조",registered:"2025-05-25",modified:"2025-05-26",completed:"2025-05-27",status:"완료"},
{id:25,year:2024,title:"화학물질 보관소 위험평가",type:"수시평가",method:"정성적 평가",regulation:"산안법 제37조",registered:"2024-12-01",modified:"2024-12-03",completed:"",status:"진행"},
{id:24,year:2024,title:"제철소 고온작업 평가",type:"정기평가",method:"빈도·강도법",regulation:"산안법 제37조",registered:"2024-11-10",modified:"2024-11-12",completed:"2024-11-14",status:"완료"},
{id:23,year:2024,title:"지게차 운전 평가",type:"최초평가",method:"체크리스트법",regulation:"산안법 제37조",registered:"2024-10-01",modified:"2024-10-03",completed:"2024-10-05",status:"완료"},
{id:22,year:2024,title:"전기 설비 위험성 평가",type:"수시평가",method:"정량적 평가",regulation:"산안법 제37조",registered:"2024-09-12",modified:"2024-09-13",completed:"2024-09-15",status:"완료"},
{id:21,year:2024,title:"가스 누출 점검 평가",type:"수시평가",method:"정성적 평가",regulation:"산안법 제37조",registered:"2024-08-30",modified:"2024-09-01",completed:"",status:"진행"},
{id:20,year:2024,title:"플랜트 해체 작업 위험평가",type:"정기평가",method:"체크리스트법",regulation:"산안법 제37조",registered:"2024-08-10",modified:"2024-08-12",completed:"2024-08-14",status:"완료"},
{id:19,year:2024,title:"압력용기 취급 평가",type:"최초평가",method:"정량적 평가",regulation:"산안법 제37조",registered:"2024-07-22",modified:"2024-07-23",completed:"2024-07-25",status:"완료"},
{id:18,year:2024,title:"유해화학물질 취급 평가",type:"정기평가",method:"화학물질 평가법",regulation:"산안법 제37조",registered:"2024-07-10",modified:"2024-07-12",completed:"2024-07-14",status:"완료"},
{id:17,year:2024,title:"냉매 가스 취급 작업 평가",type:"수시평가",method:"정성적 평가",regulation:"산안법 제37조",registered:"2024-06-30",modified:"2024-07-01",completed:"2024-07-03",status:"완료"},
{id:16,year:2024,title:"가공기계 위험성 평가",type:"정기평가",method:"위험성수준 3단계 판단법",regulation:"산안법 제37조",registered:"2024-06-15",modified:"2024-06-16",completed:"",status:"진행"},
{id:15,year:2024,title:"야간 작업 평가",type:"수시평가",method:"빈도·강도법",regulation:"산안법 제37조",registered:"2024-06-01",modified:"2024-06-02",completed:"2024-06-03",status:"완료"},
{id:14,year:2024,title:"고소작업 위험성 평가",type:"최초평가",method:"정성적 평가",regulation:"산안법 제37조",registered:"2024-05-12",modified:"2024-05-13",completed:"2024-05-15",status:"완료"},
{id:13,year:2024,title:"중장비 작업 평가",type:"정기평가",method:"정량적 평가",regulation:"산안법 제37조",registered:"2024-05-01",modified:"2024-05-02",completed:"2024-05-04",status:"완료"},
{id:12,year:2024,title:"컨베이어벨트 점검 평가",type:"수시평가",method:"체크리스트법",regulation:"산안법 제37조",registered:"2024-04-20",modified:"2024-04-21",completed:"",status:"진행"},
{id:11,year:2024,title:"수출 포장 작업 평가",type:"정기평가",method:"정량적 평가",regulation:"산안법 제37조",registered:"2024-04-01",modified:"2024-04-02",completed:"2024-04-04",status:"완료"},
{id:10,year:2023,title:"야적장 적재 평가",type:"정기평가",method:"빈도·강도법",regulation:"산안법 제37조",registered:"2023-12-01",modified:"2023-12-02",completed:"2023-12-05",status:"완료"},
{id:9,year:2023,title:"산소용접 작업 평가",type:"최초평가",method:"체크리스트법",regulation:"산안법 제37조",registered:"2023-11-11",modified:"2023-11-12",completed:"2023-11-14",status:"완료"},
{id:8,year:2023,title:"가연성 액체 취급 평가",type:"수시평가",method:"정성적 평가",regulation:"산안법 제37조",registered:"2023-10-05",modified:"2023-10-07",completed:"",status:"진행"},
{id:7,year:2023,title:"산업용 로봇 작업 평가",type:"정기평가",method:"정량적 평가",regulation:"산안법 제37조",registered:"2023-09-18",modified:"2023-09-19",completed:"2023-09-21",status:"완료"},
{id:6,year:2023,title:"건축 해체 작업 위험평가",type:"수시평가",method:"위험성수준 3단계 판단법",regulation:"산안법 제37조",registered:"2023-09-01",modified:"2023-09-02",completed:"2023-09-04",status:"완료"},
{id:5,year:2023,title:"용접 후 가스 제거 평가",type:"최초평가",method:"정성적 평가",regulation:"산안법 제37조",registered:"2023-08-12",modified:"2023-08-14",completed:"2023-08-15",status:"완료"},
{id:4,year:2023,title:"이동형 크레인 작업 평가",type:"정기평가",method:"체크리스트법",regulation:"산안법 제37조",registered:"2023-07-01",modified:"2023-07-02",completed:"2023-07-03",status:"완료"},
{id:3,year:2023,title:"컨테이너 하역 평가",type:"정기평가",method:"정성적 평가",regulation:"산안법 제37조",registered:"2023-06-20",modified:"2023-06-21",completed:"",status:"진행"},
{id:2,year:2023,title:"공장 내 피난동선 점검",type:"수시평가",method:"정량적 평가",regulation:"산안법 제37조",registered:"2023-06-01",modified:"2023-06-02",completed:"2023-06-04",status:"완료"},
{id:1,year:2023,title:"정전기 발생 위험성 평가",type:"정기평가",method:"화학물질 평가법",regulation:"산안법 제37조",registered:"2023-05-10",modified:"2023-05-11",completed:"2023-05-13",status:"완료"}
]

export const frequencyStep1MockData:FrequencyStep1Row[]=[
{id:1,work:"운송준비",hazard:"내부 청소 작업 시 바닥면의 분진이 재비산되면서 흡입 위험",law:"산업안전보건법 제32조(보호구의 지급 등)",action:"- 보호구 지급 및 착용",proof:null},
{id:2,work:"운송준비",hazard:"청소 작업 시 소음에 노출되어 난청 발생 위험",law:"산업안전보건법 제32조(보호구의 지급 등)",action:"- 보호구 지급 및 착용",proof:null},
{id:3,work:"운송준비",hazard:"반복 청소 작업으로 근골격계질환 위험",law:"산업안전보건법 제661조(유해성 등의 주지)",action:"- 유해요인 교육\n- 올바른 자세\n- 대체요령",proof:null},
{id:4,work:"운송준비",hazard:"청소 장비에 걸려 넘어짐 위험",law:"산업안전보건법 제3조(전도의 방지)",action:"- 정리정돈\n- 전도예방조치",proof:null},
{id:5,work:"운송준비",hazard:"제한된 공간 점검 시 충돌 위험",law:"산업안전보건법 제3조(전도의 방지)",action:"- 정리정돈\n- 전도예방조치",proof:null},
{id:6,work:"여객운송",hazard:"승·하선 시 넘어짐 위험",law:"산업안전보건법 제23조(가설통로의 구조)",action:"- 가설통로 설치\n- 안전난간 설치",proof:null},
{id:7,work:"여객운송",hazard:"점검 시 낙하 위험",law:"산업안전보건법 제47조(구명구 등)",action:"- 구명장구 비치",proof:null},
{id:8,work:"여객운송",hazard:"작업 공간 점검 시 낙하 위험",law:"산업안전보건법 제113조(안전난간 구조 및 설치요건)",action:"- 안전난간\n- 발끝막이판",proof:null},
{id:9,work:"여객운송",hazard:"기계 가동음에 의한 난청 위험",law:"산업안전보건법 제516조(청력보호구의 지급 등)",action:"- 청력보호구 지급",proof:null},
{id:10,work:"여객운송",hazard:"진동으로 인한 피로 증가 위험",law:"산업안전보건법 제79조(휴게시설)",action:"- 휴게시설 설치",proof:null},
{id:11,work:"여객운송",hazard:"정기 점검 시 기후 영향 위험",law:"산업안전보건법 제32조(보호구의 지급 등)",action:"- 보호구 지급 및 착용",proof:null},
{id:12,work:"여객운송",hazard:"정기 점검 시 기후 영향 위험",law:"산업안전보건법 제37조(작업 및 감장 작업 중지)",action:"- 작업 중지",proof:null},
{id:13,work:"여객운송",hazard:"통로 조명 부족으로 인한 사고 위험",law:"산업안전보건법 제21조(통로의 조명)",action:"- 차량 조명 확보\n- 조명 설치",proof:null},
{id:14,work:"여객운송",hazard:"이동 중 넘어짐 위험",law:"산업안전보건법 제3조(전도의 방지)",action:"- 정리정돈\n- 전도예방조치",proof:null}
]

export const frequencyStep2MockData:FrequencyRiskDataRow[]=[
{id:1,work:"운송준비",hazard:"내부 청소 작업 시 바닥면의 분진이 재비산되면서 흡입 위험",action:"- 보호구 지급 및 착용",attachmentFile:null,frequency:3,intensity:2,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:2,work:"운송준비",hazard:"청소 작업 시 청소 장비 등의 가동음에 의한 소음에 노출되어 난청 발생 위험",action:"- 보호구 지급 및 착용",attachmentFile:null,frequency:2,intensity:2,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:3,work:"운송준비",hazard:"운행 전 청소 작업 시 반복해서 청소 작업을 수행하여 근골격계질환 위험",action:"- 근골격계부담작업의 유해요인 교육\n- 올바른 작업자세\n- 대체요령 교육",attachmentFile:null,frequency:2,intensity:3,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:4,work:"운송준비",hazard:"청소 작업 시 청소 장비 등에 의한 걸림으로 넘어짐 위험",action:"- 작업장 정리정돈 및 청소\n- 전도예방조치(고정)",attachmentFile:null,frequency:1,intensity:1,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:5,work:"운송준비",hazard:"협소한 장소 및 구성된 곳 등 제한된 공간의 점검 시 충돌 사고 위험",action:"- 작업장 정리정돈 및 청소\n- 전도예방조치(고정)",attachmentFile:null,frequency:1,intensity:2,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:6,work:"여객운송",hazard:"승·하선 및 이동 시 틈틈이 의한 넘어짐 위험",action:"- 가설통로 설치\n- 안전난간 설치",attachmentFile:null,frequency:2,intensity:1,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:7,work:"여객운송",hazard:"운송수단의 운행 시 제한적인 작업공간 이동 및 점검 시 떨어지는 사고 위험",action:"- 작업장소 구명장구 비치",attachmentFile:null,frequency:2,intensity:2,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:8,work:"여객운송",hazard:"운송수단의 운행 시 제한적인 작업공간의 이동 및 점검 시 아래로 떨어지는 사고 위험",action:"- 안전난간 설치\n- 발끝막이판 설치",attachmentFile:null,frequency:3,intensity:3,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:9,work:"여객운송",hazard:"여객석의 운행 시 기계실 등의 점검에 따른 기계 가동음에 노출되어 난청 발생 위험",action:"- 청력보호구 지급 착용",attachmentFile:null,frequency:2,intensity:2,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:10,work:"여객운송",hazard:"운송수단의 운행 시 틈틈이로 전신 진동 등으로 근무자 스트레스, 피로도 증가 위험",action:"- 근로자 휴게시설 설치",attachmentFile:null,frequency:2,intensity:1,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:11,work:"여객운송",hazard:"승객의 안전을 위하여 운행 시 정기적인 점검 등으로 기후(한랭/고온)에 영향을 받아 안",action:"- 보호구 지급 및 착용",attachmentFile:null,frequency:2,intensity:2,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:12,work:"여객운송",hazard:"승객의 안전을 위하여 운행 시 정기적인 점검 등으로 기후(한랭/고온)에 영향을 받아 안",action:"- 작업 및 감장 작업 중지",attachmentFile:null,frequency:1,intensity:1,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:13,work:"여객운송",hazard:"승객의 이동 통로가 어두울 경우 안전사고 발생 위험",action:"- 안전하게 통행할 수 있도록 75lux 이상의 차량 조명\n- 조명 시설 설치",attachmentFile:null,frequency:2,intensity:2,afterPhoto:null,evaluator:"",evaluationDate:new Date()},
{id:14,work:"여객운송",hazard:"여객선 등 운송수단의 이동 시 틈틈 등에 의해 넘어질 수 있는 위험",action:"- 작업장 정리정돈 및 청소\n- 전도예방조치(고정)",attachmentFile:null,frequency:2,intensity:1,afterPhoto:null,evaluator:"",evaluationDate:new Date()}
]

export const frequencyStep3MockData:FrequencyStep3Row[]=[
{id:1,work:"운송준비",hazard:"내부 청소 작업 시 바닥면의 분진이 재비산되면서 흡입 위험",action:"청소 시 방진마스크 착용 및 습식 청소 시행",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:3,intensity:2,afterPhoto:null},
{id:2,work:"운송준비",hazard:"청소 작업 시 청소 장비 등의 가동음에 의한 소음에 노출되어 난청 발생 위험",action:"청소작업 시 귀마개 착용 의무화",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:2,intensity:2,afterPhoto:null},
{id:3,work:"운송준비",hazard:"운행 전 청소 작업 시 반복해서 청소 작업을 수행하여 근골격계질환 위험",action:"작업 전 스트레칭 교육 및 작업대 높이 조정",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:2,intensity:3,afterPhoto:null},
{id:4,work:"운송준비",hazard:"청소 작업 시 청소 장비 등에 의한 걸림으로 넘어짐 위험",action:"청소 장비 정리정돈 및 작업장 바닥 정비",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:1,intensity:1,afterPhoto:null},
{id:5,work:"운송준비",hazard:"협소한 장소 및 구성된 곳 등 제한된 공간의 점검 시 충돌 사고 위험",action:"점검 전 작업구간 사전 정리 및 위험표시 부착",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:1,intensity:2,afterPhoto:null},
{id:6,work:"여객운송",hazard:"승·하선 및 이동 시 틈틈이 의한 넘어짐 위험",action:"승선 시 안전유도선 표시 및 조도 확보",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:2,intensity:1,afterPhoto:null},
{id:7,work:"여객운송",hazard:"운송수단의 운행 시 제한적인 작업공간 이동 및 점검 시 떨어지는 사고 위험",action:"이동 경로 안전난간 설치 및 안전모 착용",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:2,intensity:2,afterPhoto:null},
{id:8,work:"여객운송",hazard:"운송수단의 운행 시 제한적인 작업공간의 이동 및 점검 시 아래로 떨어지는 사고 위험",action:"이동 시 추락방지장치 착용 및 2인 1조 작업",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:3,intensity:3,afterPhoto:null},
{id:9,work:"여객운송",hazard:"여객석의 운행 시 기계실 등의 점검에 따른 기계 가동음에 노출되어 난청 발생 위험",action:"점검 시 귀마개 착용 및 소음 측정 실시",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:2,intensity:2,afterPhoto:null},
{id:10,work:"여객운송",hazard:"운송수단의 운행 시 틈틈이로 전신 진동 등으로 근무자 스트레스, 피로도 증가 위험",action:"작업시간 조정 및 휴게시설 마련",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:2,intensity:1,afterPhoto:null},
{id:11,work:"여객운송",hazard:"승객의 안전을 위하여 운행 시 정기적인 점검 등으로 기후(한랭/고온)에 영향을 받아 안",action:"계절별 적정 복장 및 기상 상황에 맞춘 점검시간 조정",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:2,intensity:2,afterPhoto:null},
{id:12,work:"여객운송",hazard:"승객의 안전을 위하여 운행 시 정기적인 점검 등으로 기후(한랭/고온)에 영향을 받아 안",action:"작업복 보급 및 기후 영향 예보에 따른 작업계획 수립",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:1,intensity:1,afterPhoto:null},
{id:13,work:"여객운송",hazard:"승객의 이동 통로가 어두울 경우 안전사고 발생 위험",action:"비상등 및 보조등 점검 및 설치",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:2,intensity:2,afterPhoto:null},
{id:14,work:"여객운송",hazard:"여객선 등 운송수단의 이동 시 틈틈 등에 의해 넘어질 수 있는 위험",action:"틈 보수 및 안전라인 표시",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",frequency:2,intensity:1,afterPhoto:null}
]

export const threeStep1MockData:ThreeStep1Row[]=[
{id:1,work:"운송준비",hazard:"내부 청소 작업 시 바닥면의 분진이 재비산되면서 흡입 위험",law:"산업안전보건법 제32조(보호구의 지급 등)",action:"- 보호구 지급 및 착용",proof:null},
{id:2,work:"운송준비",hazard:"청소 작업 시 소음에 노출되어 난청 발생 위험",law:"산업안전보건법 제32조(보호구의 지급 등)",action:"- 보호구 지급 및 착용",proof:null},
{id:3,work:"운송준비",hazard:"반복 청소 작업으로 근골격계질환 위험",law:"산업안전보건법 제661조(유해성 등의 주지)",action:"- 유해요인 교육\n- 올바른 자세\n- 대체요령",proof:null},
{id:4,work:"운송준비",hazard:"청소 장비에 걸려 넘어짐 위험",law:"산업안전보건법 제3조(전도의 방지)",action:"- 정리정돈\n- 전도예방조치",proof:null},
{id:5,work:"운송준비",hazard:"제한된 공간 점검 시 충돌 위험",law:"산업안전보건법 제3조(전도의 방지)",action:"- 정리정돈\n- 전도예방조치",proof:null},
{id:6,work:"여객운송",hazard:"승·하선 시 넘어짐 위험",law:"산업안전보건법 제23조(가설통로의 구조)",action:"- 가설통로 설치\n- 안전난간 설치",proof:null},
{id:7,work:"여객운송",hazard:"점검 시 낙하 위험",law:"산업안전보건법 제47조(구명구 등)",action:"- 구명장구 비치",proof:null},
{id:8,work:"여객운송",hazard:"작업 공간 점검 시 낙하 위험",law:"산업안전보건법 제113조(안전난간 구조 및 설치요건)",action:"- 안전난간\n- 발끝막이판",proof:null},
{id:9,work:"여객운송",hazard:"기계 가동음에 의한 난청 위험",law:"산업안전보건법 제516조(청력보호구의 지급 등)",action:"- 청력보호구 지급",proof:null},
{id:10,work:"여객운송",hazard:"진동으로 인한 피로 증가 위험",law:"산업안전보건법 제79조(휴게시설)",action:"- 휴게시설 설치",proof:null},
{id:11,work:"여객운송",hazard:"정기 점검 시 기후 영향 위험",law:"산업안전보건법 제32조(보호구의 지급 등)",action:"- 보호구 지급 및 착용",proof:null},
{id:12,work:"여객운송",hazard:"정기 점검 시 기후 영향 위험",law:"산업안전보건법 제37조(작업 및 감장 작업 중지)",action:"- 작업 중지",proof:null},
{id:13,work:"여객운송",hazard:"통로 조명 부족으로 인한 사고 위험",law:"산업안전보건법 제21조(통로의 조명)",action:"- 차량 조명 확보\n- 조명 설치",proof:null},
{id:14,work:"여객운송",hazard:"이동 중 넘어짐 위험",law:"산업안전보건법 제3조(전도의 방지)",action:"- 정리정돈\n- 전도예방조치",proof:null}
]

export const threeStep2MockData:ThreeStepRiskDataRow[]=[
{id:1,work:"운송준비",hazard:"내부 청소 작업 시 바닥면의 분진이 재비산되면서 흡입 위험",action:"- 보호구 지급 및 착용",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:2},
{id:2,work:"운송준비",hazard:"청소 작업 시 청소 장비 등의 가동음에 의한 소음에 노출되어 난청 발생 위험",action:"- 보호구 지급 및 착용",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:2},
{id:3,work:"운송준비",hazard:"운행 전 청소 작업 시 반복해서 청소 작업을 수행하여 근골격계질환 위험",action:"- 근골격계부담작업의 유해요인 교육\n- 올바른 작업자세\n- 대체요령 교육",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:2},
{id:4,work:"운송준비",hazard:"청소 작업 시 청소 장비 등에 의한 걸림으로 넘어짐 위험",action:"- 작업장 정리정돈 및 청소\n- 전도예방조치(고정)",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:1},
{id:5,work:"운송준비",hazard:"협소한 장소 및 구성된 곳 등 제한된 공간의 점검 시 충돌 사고 위험",action:"- 작업장 정리정돈 및 청소\n- 전도예방조치(고정)",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:2},
{id:6,work:"여객운송",hazard:"승·하선 및 이동 시 틈틈이 의한 넘어짐 위험",action:"- 가설통로 설치\n- 안전난간 설치",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:1},
{id:7,work:"여객운송",hazard:"운송수단의 운행 시 제한적인 작업공간 이동 및 점검 시 떨어지는 사고 위험",action:"- 작업장소 구명장구 비치",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:2},
{id:8,work:"여객운송",hazard:"운송수단의 운행 시 제한적인 작업공간의 이동 및 점검 시 아래로 떨어지는 사고 위험",action:"- 안전난간 설치\n- 발끝막이판 설치",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:3},
{id:9,work:"여객운송",hazard:"여객석의 운행 시 기계실 등의 점검에 따른 기계 가동음에 노출되어 난청 발생 위험",action:"- 청력보호구 지급 착용",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:2},
{id:10,work:"여객운송",hazard:"운송수단의 운행 시 틈틈이로 전신 진동 등으로 근무자 스트레스, 피로도 증가 위험",action:"- 근로자 휴게시설 설치",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:1},
{id:11,work:"여객운송",hazard:"승객의 안전을 위하여 운행 시 정기적인 점검 등으로 기후(한랭/고온)에 영향을 받아 안",action:"- 보호구 지급 및 착용",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:2},
{id:12,work:"여객운송",hazard:"승객의 안전을 위하여 운행 시 정기적인 점검 등으로 기후(한랭/고온)에 영향을 받아 안",action:"- 작업 및 감장 작업 중지",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:1},
{id:13,work:"여객운송",hazard:"승객의 이동 통로가 어두울 경우 안전사고 발생 위험",action:"- 안전하게 통행할 수 있도록 75lux 이상의 차량 조명\n- 조명 시설 설치",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:2},
{id:14,work:"여객운송",hazard:"여객선 등 운송수단의 이동 시 틈틈 등에 의해 넘어질 수 있는 위험",action:"- 작업장 정리정돈 및 청소\n- 전도예방조치(고정)",attachmentFile:null,afterPhoto:null,evaluator:"",evaluationDate:new Date(),riskLevel:1}
]

export const threeStep3MockData:ThreeStep3Row[]=[
{id:1,work:"운송준비",hazard:"내부 청소 작업 시 바닥면의 분진이 재비산되면서 흡입 위험",action:"청소 시 방진마스크 착용 및 습식 청소 시행",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:2,afterPhoto:null},
{id:2,work:"운송준비",hazard:"청소 작업 시 청소 장비 등의 가동음에 의한 소음에 노출되어 난청 발생 위험",action:"청소작업 시 귀마개 착용 의무화",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:2,afterPhoto:null},
{id:3,work:"운송준비",hazard:"운행 전 청소 작업 시 반복해서 청소 작업을 수행하여 근골격계질환 위험",action:"작업 전 스트레칭 교육 및 작업대 높이 조정",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:3,afterPhoto:null},
{id:4,work:"운송준비",hazard:"청소 작업 시 청소 장비 등에 의한 걸림으로 넘어짐 위험",action:"청소 장비 정리정돈 및 작업장 바닥 정비",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:1,afterPhoto:null},
{id:5,work:"운송준비",hazard:"협소한 장소 및 구성된 곳 등 제한된 공간의 점검 시 충돌 사고 위험",action:"점검 전 작업구간 사전 정리 및 위험표시 부착",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:2,afterPhoto:null},
{id:6,work:"여객운송",hazard:"승·하선 및 이동 시 틈틈이 의한 넘어짐 위험",action:"승선 시 안전유도선 표시 및 조도 확보",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:1,afterPhoto:null},
{id:7,work:"여객운송",hazard:"운송수단의 운행 시 제한적인 작업공간 이동 및 점검 시 떨어지는 사고 위험",action:"이동 경로 안전난간 설치 및 안전모 착용",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:3,afterPhoto:null},
{id:8,work:"여객운송",hazard:"운송수단의 운행 시 제한적인 작업공간의 이동 및 점검 시 아래로 떨어지는 사고 위험",action:"이동 시 추락방지장치 착용 및 2인 1조 작업",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:3,afterPhoto:null},
{id:9,work:"여객운송",hazard:"여객석의 운행 시 기계실 등의 점검에 따른 기계 가동음에 노출되어 난청 발생 위험",action:"점검 시 귀마개 착용 및 소음 측정 실시",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:2,afterPhoto:null},
{id:10,work:"여객운송",hazard:"운송수단의 운행 시 틈틈이로 전신 진동 등으로 근무자 스트레스, 피로도 증가 위험",action:"작업시간 조정 및 휴게시설 마련",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:1,afterPhoto:null},
{id:11,work:"여객운송",hazard:"승객의 안전을 위하여 운행 시 정기적인 점검 등으로 기후(한랭/고온)에 영향을 받아 안",action:"계절별 적정 복장 및 기상 상황에 맞춘 점검시간 조정",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:2,afterPhoto:null},
{id:12,work:"여객운송",hazard:"승객의 안전을 위하여 운행 시 정기적인 점검 등으로 기후(한랭/고온)에 영향을 받아 안",action:"작업복 보급 및 기후 영향 예보에 따른 작업계획 수립",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:1,afterPhoto:null},
{id:13,work:"여객운송",hazard:"승객의 이동 통로가 어두울 경우 안전사고 발생 위험",action:"비상등 및 보조등 점검 및 설치",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:2,afterPhoto:null},
{id:14,work:"여객운송",hazard:"여객선 등 운송수단의 이동 시 틈틈 등에 의해 넘어질 수 있는 위험",action:"틈 보수 및 안전라인 표시",plannedDate:new Date(),completedDate:new Date(),evaluator:"최담당",riskLevel:1,afterPhoto:null}
]

export const chemicalStep1MockData:ChemicalEditableRow[]=[
{id:1,process:"도장공정",product:"외장 패널",substance:"톨루엔",exposure:"흡입 가능성 높음",toxicity:"자연발화성",risk:3,action:"국소배기장치 설치, 보호구 착용, 환기설비 보완",image:null},
{id:2,process:"세정공정",product:"금속 프레임",substance:"MEK",exposure:"피부접촉",toxicity:"신장독성",risk:2,action:"",image:null},
{id:3,process:"혼합공정",product:"도료 원액",substance:"자일렌",exposure:"흡입 및 피부접촉",toxicity:"중추신경계 영향",risk:1,action:"작업시간 단축",image:null},
{id:4,process:"경화공정",product:"합성수지",substance:"스티렌",exposure:"밀폐공간 흡입 우려",toxicity:"발암성 의심",risk:3,action:"",image:null},
{id:5,process:"세척공정",product:"세정액 용기",substance:"IPA",exposure:"증기 발생",toxicity:"안구 자극",risk:2,action:"세정 전 팬 가동, 보안경 착용",image:null}
]

export const checklistMockData:ChecklistSection[]=[
{title:"물질 유해성",downloadKey:"hazardous-substance",items:["현재 취급하고 있는 물질보다 독성이 적은 물질(노출 기준 수치가 높은)로 대체 가능한가?","현재 물질의 물리적 성질을 고려하고 있다면 비발염성 물질로 대체가 가능한가?","현재 유해물질 취급 공정의 폐쇄가 가능한가?"]},
{title:"물질노출 가능성",downloadKey:"exposure-possibility",items:["현재 사용하고 있는 화학물질의 사용량을 줄일 수 있는가?","물질 또는 교체된 공정의 누출 가능성이 줄어들었는가?","대상 유해물질을 공정 내 밀폐화가 가능한가?","유해물질 취급 시점에서의 재질이적이 최소화가 가능한가?","국소배기장치/후드 설치를 통한 유해물질 노출이 감소가 가능한가?","기존의 국소배기장치/후드 배출점보다 배출점의 설치위치를 좀 더 가까이 설치 가능한가?","직업환경 관리자의 정기적인 점검이 잘 이루어지고 있는가?"]},
{title:"작업방법",downloadKey:"work-method",items:["유해물질 취급 공정을 인근 공정 및 작업장소와 격리하여 작업할 수 있는가?","유해물질 취급 공정과 인근 작업장소 사이의 공기 이동을 차단하기 위한 차단벽 설치가 가능한가?","현재 유해물질 취급 작업을 자동화 또는 반자동화로 공정 변경이 가능한가?","유해물질 용기를 별도의 저장장소에 보관 가능한가?","유해물질 취급전 적절히 점검이 되고 있는가?"]},
{title:"관리방안",downloadKey:"management-plan",items:["특수건강검진을 정기적으로 실시하고 있는가?","작업환경측정을 정기적으로 실시하고 있는가?","해당 화학물질에 대해 근로자 교육을 실시하는가?","개인보호용품 등을 보호구가 적정하게 지급되는가?","근로자 작업 중 호흡을 보호구를 착용하고 있는가?"]},
{title:"기타 개선내역",type:"form"}
]

export const processSelectorMockData:ProcessRow[]=[
{id:1,process:'작업장 정리',description:'내부 청소 작업 시 바닥면의 분진이 재비산되면서 흡입 위험'},
{id:2,process:'기계 점검',description:'청소 작업 시 청소 장비 등의 가동음에 의한 소음에 노출되어 난청 발생 위험'},
{id:3,process:'배선 정비',description:'운행 전 청소 작업 시 반복해서 청소 작업을 수행하여 근골격계질환 위험'},
{id:4,process:'폐기물 처리',description:'청소 작업 시 청소 장비 등에 의한 걸림으로 넘어짐 위험'},
{id:5,process:'설비 유지보수',description:'협소한 장소 및 구성된 곳 등 제한된 공간의 점검 시 충돌 사고 위험'},
{id:6,process:'승객 유도',description:'승·하선 및 이동 시 틈틈이 의한 넘어짐 위험'},
{id:7,process:'차량 이동',description:'운송수단의 운행 시 제한적인 작업공간 이동 및 점검 시 떨어지는 사고 위험'},
{id:8,process:'외부 점검',description:'운송수단의 운행 시 제한적인 작업공간의 이동 및 점검 시 아래로 떨어지는 사고 위험'},
{id:9,process:'기계실 점검',description:'여객석의 운행 시 기계실 등의 점검에 따른 기계 가동음에 노출되어 난청 발생 위험'},
{id:10,process:'장거리 운행',description:'운송수단의 운행 시 틈틈이로 전신 진동 등으로 근무자 스트레스, 피로도 증가 위험'}
]

export const checklistStep1MockData:ChecklistStep1Row[]=[
{id:1,category:"작업장 환경",hazard:"조명 부족으로 인한 시야 확보 곤란",safetyMeasure:"작업장 조도 300lux 이상 유지",checkResult:"양호",note:""},
{id:2,category:"기계설비",hazard:"회전 부위 방호장치 미설치",safetyMeasure:"방호덮개 설치 및 정기점검",checkResult:"불량",note:"방호덮개 파손"},
{id:3,category:"전기안전",hazard:"누전으로 인한 감전 위험",safetyMeasure:"누전차단기 설치 및 접지",checkResult:"양호",note:""},
{id:4,category:"화재예방",hazard:"소화기 미비치",safetyMeasure:"작업장 내 소화기 2개 이상 비치",checkResult:"양호",note:""},
{id:5,category:"보호구",hazard:"안전모 미착용",safetyMeasure:"안전모 착용 의무화",checkResult:"양호",note:""},
{id:6,category:"작업자세",hazard:"부적절한 자세로 인한 근골격계 질환",safetyMeasure:"작업대 높이 조절 및 스트레칭",checkResult:"보통",note:"개선 필요"},
{id:7,category:"화학물질",hazard:"MSDS 미비치",safetyMeasure:"모든 화학물질 MSDS 비치",checkResult:"불량",note:"일부 누락"},
{id:8,category:"소음",hazard:"85dB 이상 소음 노출",safetyMeasure:"귀마개 지급 및 착용",checkResult:"양호",note:""},
{id:9,category:"환기",hazard:"밀폐공간 환기 불량",safetyMeasure:"환기시설 가동 및 점검",checkResult:"보통",note:""},
{id:10,category:"비상구",hazard:"비상구 폐쇄 또는 물건 적치",safetyMeasure:"비상구 상시 개방 유지",checkResult:"양호",note:""}
]
