import { PTWGroupItem, WorkPermitItem, JSAItem, SiteEvaluationItem, TBMItem, PTWDocumentType } from "@/types/ptw"
import { DataRow } from "@/components/common/tables/DataTable"

// PTW
export const ptwGroupMockData: PTWGroupItem[] = [
  { id: 1, ptwName: "Master Roller 어큐뮬레이터 교체 패키지", createdAt: "2025-10-28(화)", registrant: "최승휴", updatedAt: "2025-10-28(화)" },
  { id: 2, ptwName: "소형밀 내부 점검 및 오일 작업 패키지", createdAt: "2025-10-26(일)", registrant: "문반장", updatedAt: "2025-10-27(월)" },
  { id: 3, ptwName: "10월 설비 LOTOTO 필수 작업 패키지", createdAt: "2025-10-25(토)", registrant: "양강현", updatedAt: "2025-10-29(수)" },
  { id: 4, ptwName: "인렛 슈트 코팅 제거 일일 패키지", createdAt: "2025-10-27(월)", registrant: "이호성", updatedAt: "2025-10-27(월)" },
  { id: 5, ptwName: "11월 유압 시스템 긴급 점검 패키지", createdAt: "2025-11-20(목)", registrant: "최정비", updatedAt: "2025-11-25(화)" },
  { id: 6, ptwName: "12월 슬래그 밀 정기 정비 패키지", createdAt: "2025-12-01(월)", registrant: "홍길동", updatedAt: "2025-12-05(금)" }

]
export const workPermitMockData: WorkPermitItem[] = [
  { id: 1, workName: "밀 실 주변 전기 배선 절연 보강 작업", workDate: "2025-12-03(화)", workLocation: "Slag Mill 실 전기실", workPersonnel: "2명", workType: "전기, 고소", applicant: "(주)전기안전/김민수", applicationDate: "2025-12-01(일)", signatureStatus: { text: "1/4", color: "red" }, sitePhotos: [], fileAttach: false },
  { id: 2, workName: "컨베이어 벨트 교체 용접 작업", workDate: "2025-12-01(월)", workLocation: "Slag Mill 실 주변", workPersonnel: "3명", workType: "화기, LOTOTO", applicant: "(주)건설/김철수", applicationDate: "2025-11-29(토)", signatureStatus: { text: "4/4", color: "blue" }, sitePhotos: ["/images/conv_zone.jpg"], fileAttach: true },
  { id: 3, workName: "HSLM 유압 오일 보충 및 라인 점검", workDate: "2025-12-12(목)", workLocation: "Slag Mill 실 유압장치", workPersonnel: "2명", workType: "LOTOTO, 고압", applicant: "(주)관리팀/이정아", applicationDate: "2025-12-10(화)", signatureStatus: { text: "3/4", color: "red" }, sitePhotos: ["/images/oil_line.jpg"], fileAttach: true },
  { id: 4, workName: "소형밀 내부 잔류물 긁어내기 및 청소", workDate: "2025-12-13(금)", workLocation: "소형밀 실", workPersonnel: "2명", workType: "밀폐공간, 분진", applicant: "(주)생산협력/문반장", applicationDate: "2025-12-11(수)", signatureStatus: { text: "4/4", color: "blue" }, sitePhotos: [], fileAttach: false },
  { id: 5, workName: "Master Roller 어큐뮬레이터 교체 작업", workDate: "2025-12-17(화)", workLocation: "Slag Mill 실 Roller 구역", workPersonnel: "3명", workType: "고소, 중량물", applicant: "(주)보전서비스/최정비", applicationDate: "2025-12-15(일)", signatureStatus: { text: "4/4", color: "blue" }, sitePhotos: ["/images/roller_zone.jpg"], fileAttach: true },
  { id: 6, workName: "슬래그 밀 내부 인렛 슈트 코팅 제거", workDate: "2025-12-10(화)", workLocation: "Slag Mill 실 내부", workPersonnel: "2명", workType: "밀폐공간", applicant: "(주)엔지니어링/박현우", applicationDate: "2025-12-08(일)", signatureStatus: { text: "2/4", color: "red" }, sitePhotos: [], fileAttach: true }
]

export const jsaMockData: JSAItem[] = [
  { id: 1, jsaNo: "SPS&A-JSA-001", workName: "컨베이어 벨트 교체 및 LOTOTO 점검", workDate: "2025-12-01(월)", team: "설비보전팀", applicationDate: "2025-11-28(금)", sitePhotos: ["/images/conv_zone.jpg"], fileAttach: true },
  { id: 2, jsaNo: "SPS&A-JSA-002", workName: "밀 실 주변 전기 배선 절연 보강", workDate: "2025-12-03(화)", team: "전기팀", applicationDate: "2025-12-01(일)", sitePhotos: [], fileAttach: false },
  { id: 3, jsaNo: "SPS&A-JSA-003", workName: "소형밀 내부 잔류물 긁어내기 및 청소", workDate: "2025-12-13(금)", team: "생산지원팀", applicationDate: "2025-12-11(수)", sitePhotos: [], fileAttach: true },
  { id: 4, jsaNo: "SPS&A-JSA-004", workName: "HSLM 유압 오일 보충 및 라인 점검", workDate: "2025-12-12(목)", team: "설비보전팀", applicationDate: "2025-12-10(화)", sitePhotos: ["/images/oil_line.jpg"], fileAttach: true },
  { id: 5, jsaNo: "SPS&A-JSA-005", workName: "Master Roller 어큐뮬레이터 교체", workDate: "2025-12-17(화)", team: "협력사(보전)", applicationDate: "2025-12-15(일)", sitePhotos: ["/images/roller_zone.jpg"], fileAttach: true },
  { id: 6, jsaNo: "SPS&A-JSA-006", workName: "슬래그 밀 내부 인렛 슈트 코팅 제거", workDate: "2025-12-10(화)", team: "생산지원팀", applicationDate: "2025-12-08(일)", sitePhotos: [], fileAttach: true },
  { id: 7, jsaNo: "SPS&A-JSA-007", workName: "유압 라인 고압/고온 작업 위험 분석", workDate: "2025-12-11(수)", team: "설비보전팀", applicationDate: "2025-12-09(월)", sitePhotos: [], fileAttach: false },
  { id: 8, jsaNo: "SPS&A-JSA-008", workName: "중량물 운반 2인 1조 준수 점검", workDate: "2025-12-04(수)", team: "안전팀", applicationDate: "2025-12-02(월)", sitePhotos: ["/images/lifting_check.jpg"], fileAttach: false },
  { id: 9, jsaNo: "SPS&A-JSA-009", workName: "밀 실 주변 협소/고소 작업 안전 수칙 점검", workDate: "2025-12-19(목)", team: "안전팀", applicationDate: "2025-12-17(화)", sitePhotos: ["/images/height_zone.jpg"], fileAttach: false }
]

export const siteEvaluationMockData: SiteEvaluationItem[] = [
  { id: 1, workTeam: "자체(생산지원)", workerName: "이호성", workDate: "2025-12-02", author: "김감독", signatureStatus: { text: "완료", color: "blue" }, sitePhotos: ["/images/eval_01.jpg"], fileAttach: true },
  { id: 2, workTeam: "자체(설비보전)", workerName: "최승휴", workDate: "2025-12-05", author: "박안전", signatureStatus: { text: "완료", color: "blue" }, sitePhotos: [], fileAttach: true },
  { id: 3, workTeam: "협력사(전기)", workerName: "김민수", workDate: "2025-12-03", author: "최감독", signatureStatus: { text: "미완료", color: "red" }, sitePhotos: [], fileAttach: false },
  { id: 4, workTeam: "자체(생산지원)", workerName: "양강현", workDate: "2025-12-10", author: "정관리", signatureStatus: { text: "완료", color: "blue" }, sitePhotos: ["/images/eval_04.jpg"], fileAttach: true },
  { id: 5, workTeam: "협력사(보전)", workerName: "최정비", workDate: "2025-12-17", author: "문감독", signatureStatus: { text: "완료", color: "blue" }, sitePhotos: ["/images/eval_05.jpg"], fileAttach: true },
  { id: 6, workTeam: "자체(생산지원)", workerName: "이호성", workDate: "2025-12-13", author: "배안전", signatureStatus: { text: "미완료", color: "red" }, sitePhotos: [], fileAttach: false },
  { id: 7, workTeam: "협력사(엔지니어링)", workerName: "박현우", workDate: "2025-12-12", author: "김안전", signatureStatus: { text: "완료", color: "blue" }, sitePhotos: ["/images/eval_07.jpg"], fileAttach: true },
  { id: 8, workTeam: "자체(설비보전)", workerName: "최승휴", workDate: "2025-12-09", author: "오관리", signatureStatus: { text: "완료", color: "blue" }, sitePhotos: [], fileAttach: false },
  { id: 9, workTeam: "자체(안전팀)", workerName: "정안전", workDate: "2025-12-19", author: "홍감독", signatureStatus: { text: "미완료", color: "red" }, sitePhotos: ["/images/eval_09.jpg"], fileAttach: true }
]

export const tbmMockData: TBMItem[] = [
  { id: 1, processName: "인렛슈트 코팅 제거 작업 TBM", meetingDate: "2025-12-10(화)", meetingTime: "08:30~09:00", manager: "이호성", participants: "2명", sitePhotos: ["/images/tbm_01.jpg"], fileAttach: true },
  { id: 2, processName: "소형밀 내부 점검 및 오일 주입 TBM", meetingDate: "2025-12-13(금)", meetingTime: "08:40~09:10", manager: "문반장", participants: "3명", sitePhotos: [], fileAttach: false },
  { id: 3, processName: "Master Roller 어큐뮬레이터 교체 TBM", meetingDate: "2025-12-17(화)", meetingTime: "13:00~13:30", manager: "최승휴", participants: "4명", sitePhotos: ["/images/tbm_03.jpg"], fileAttach: true },
  { id: 4, processName: "HSLM 오일 보충 작업 TBM", meetingDate: "2025-12-12(목)", meetingTime: "14:00~14:30", manager: "양강현", participants: "2명", sitePhotos: ["/images/tbm_04.jpg"], fileAttach: true },
  { id: 5, processName: "컨베이어 벨트 교체 작업 TBM", meetingDate: "2025-12-01(월)", meetingTime: "07:30~08:00", manager: "김철수", participants: "5명", sitePhotos: [], fileAttach: true },
  { id: 6, processName: "밀 실 주변 전기 배선 절연 보강 TBM", meetingDate: "2025-12-03(화)", meetingTime: "10:00~10:20", manager: "김민수", participants: "2명", sitePhotos: ["/images/tbm_06.jpg"], fileAttach: false },
  { id: 7, processName: "유압 라인 고압/고온 작업 TBM", meetingDate: "2025-12-11(수)", meetingTime: "09:30~10:00", manager: "오감독", participants: "3명", sitePhotos: ["/images/tbm_07.jpg"], fileAttach: true },
  { id: 8, processName: "중량물 운반 및 양중 안전 TBM", meetingDate: "2025-12-04(수)", meetingTime: "08:00~08:30", manager: "장감독", participants: "4명", sitePhotos: [], fileAttach: false }
]

export const inspectionPlanMockData: DataRow[] = [
  { id: 11, planName: "슬래그 밀 메인 베어링 오일 분석 및 윤활 상태 점검", site: "Slag Mill 실", area: "자산(설비)", kind: "특별점검", inspector: "오영수", schedule: "2025/12/20 ~ 2025/12/22", registrant: "홍길동", progress: "미점검" },
  { id: 10, planName: "슬래그 밀 LOTO 시스템 정기 점검", site: "Slag Mill 실", area: "자산(설비)", kind: "특별점검", inspector: "이안전", schedule: "2025/12/15 ~ 2025/12/16", registrant: "김민수", progress: "미점검" },
  { id: 9, planName: "인렛 슈트 코팅 제거 작업허가서(PTW) 확인", site: "Slag Mill 실", area: "자산(설비)", kind: "수시점검", inspector: "김현장", schedule: "2025/12/10 ~ 2025/12/10", registrant: "박현우", progress: "진행중" },
  { id: 8, planName: "마스터 롤러 어큐뮬레이터 교체 안전 점검", site: "Slag Mill 실", area: "자산(설비)", kind: "특별점검", inspector: "최정비", schedule: "2025/12/17 ~ 2025/12/18", registrant: "이정아", progress: "완료" },
  { id: 7, planName: "HSLM 오일 보충 작업 위험성평가 확인", site: "Slag Mill 실", area: "자산(설비)", kind: "수시점검", inspector: "박관리", schedule: "2025/12/12 ~ 2025/12/12", registrant: "최준영", progress: "미점검" },
  { id: 6, planName: "협소/고소 작업 안전 수칙 준수 점검 (밀 실 주변)", site: "(주)에스피에스앤아이 당진 슬래그공장", area: "시설물", kind: "특별점검", inspector: "정안전", schedule: "2025/12/19 ~ 2025/12/19", registrant: "김철수", progress: "미점검" },
  { id: 5, planName: "유압 라인 고압/고온 작업 위험 분석 검토", site: "Slag Mill 실", area: "자산(설비)", kind: "수시점검", inspector: "오감독", schedule: "2025/12/11 ~ 2025/12/11", registrant: "이민지", progress: "진행중" },
  { id: 4, planName: "소형밀 내부 점검 및 오일 주입 안전 확인", site: "소형밀 실", area: "자산(설비)", kind: "특별점검", inspector: "문반장", schedule: "2025/12/13 ~ 2025/12/13", registrant: "박서준", progress: "미점검" },
  { id: 3, planName: "분진 발생 작업 호흡기 보호구 착용 점검", site: "(주)에스피에스앤아이 당진 슬래그공장", area: "시설물", kind: "수시점검", inspector: "배소장", schedule: "2025/12/05 ~ 2025/12/05", registrant: "정희원", progress: "완료" },
  { id: 2, planName: "중량물 운반 2인 1조 및 보조도구 준수 점검", site: "소형밀 실", area: "자산(설비)", kind: "특별점검", inspector: "장감독", schedule: "2025/12/03 ~ 2025/12/04", registrant: "김은정", progress: "완료" },
  { id: 1, planName: "컨베이어 벨트 교체 LOTOTO 실시 점검", site: "Slag Mill 실", area: "자산(설비)", kind: "특별점검", inspector: "윤영광", schedule: "2025/12/01 ~ 2025/12/02", registrant: "최정수", progress: "완료" }
]

export const inspectionChecklistMockData: DataRow[] = [
  { id: 1, template: "공통 필수 확인 (작업 전) 점검표", field: "자율점검", kind: "특별점검", status: { text: "미사용", color: "red" }, registrant: "홍길동", registeredAt: "2025-10-10(금)" },
  { id: 2, template: "설비 정비 및 기계 안전 점검표", field: "자산(설비)", kind: "정기점검", status: { text: "사용", color: "blue" }, registrant: "최정비", registeredAt: "2025-11-15(토)" },
  { id: 3, template: "기구 및 공구 안전 점검표", field: "자율점검", kind: "수시점검", status: { text: "사용", color: "blue" }, registrant: "김안전", registeredAt: "2025-12-03(수)" },
  { id: 4, template: "작업 환경 및 보건 (밀폐/분진) 점검표", field: "시설물", kind: "수시점검", status: { text: "사용", color: "blue" }, registrant: "박현장", registeredAt: "2025-11-25(화)" },
  { id: 5, template: "중량물 취급 및 양중 안전 체크리스트", field: "자산(설비)", kind: "특별점검", status: { text: "사용", color: "blue" }, registrant: "이안전", registeredAt: "2025-12-01(월)" },
  { id: 6, template: "소방 및 비상 대응 설비 점검표", field: "시설물", kind: "정기점검", status: { text: "미사용", color: "red" }, registrant: "정관리", registeredAt: "2025-11-20(목)" }
]

export const inspectionResultsMockData: DataRow[] = [
  { id: 1, template: "컨베이어 LOTOTO 최종 점검표", workplace: "Slag Mill 실", field: "자산(설비)", kind: "특별점검", inspector: "윤영광", inspectedAt: "2025-12-02(화)", confirmed: false, notes: "LOTOTO 해제 전 3단계 확인 미흡." },
  { id: 2, template: "중량물 운반 작업 안전점검표", workplace: "소형밀 실", field: "자산(설비)", kind: "특별점검", inspector: "장감독", inspectedAt: "2025-12-04(목)", confirmed: true, notes: "2인 1조 작업 원칙 준수 확인." },
  { id: 3, template: "분진 작업 환경 측정 기록", workplace: "(주)에스피에스앤아이 당진 슬래그공장", field: "시설물", kind: "수시점검", inspector: "배소장", inspectedAt: "2025-12-05(금)", confirmed: true, notes: "분진 농도 기준치 이하 측정됨." },
  { id: 4, template: "소형밀 내부 점검 기록", workplace: "소형밀 실", field: "자산(설비)", kind: "특별점검", inspector: "문반장", inspectedAt: "2025-12-13(토)", confirmed: true, notes: "내부 잔류물 제거 및 지정 오일 주입 완료." },
  { id: 5, template: "유압 라인 점검 결과서", workplace: "Slag Mill 실", field: "자산(설비)", kind: "수시점검", inspector: "오감독", inspectedAt: "2025-12-11(목)", confirmed: true, notes: "고온 작업 후 냉각 상태 및 압력 정상 확인." },
  { id: 6, template: "협소/고소 작업 안전 점검표", workplace: "(주)에스피에스앤아이 당진 슬래그공장", field: "시설물", kind: "특별점검", inspector: "정안전", inspectedAt: "2025-12-19(금)", confirmed: false, notes: "안전벨트 체결 불량 1건 적발. 현장 교육 조치." },
  { id: 7, template: "HSLM 오일 보충 위험성평가 이행 결과", workplace: "Slag Mill 실", field: "자산(설비)", kind: "수시점검", inspector: "박관리", inspectedAt: "2025-12-12(금)", confirmed: true, notes: "고임목 설치 및 유출 오일 즉시 제거 완료." },
  { id: 8, template: "어큐뮬레이터 교체 완료 점검표", workplace: "Slag Mill 실", field: "자산(설비)", kind: "특별점검", inspector: "최정비", inspectedAt: "2025-12-18(목)", confirmed: true, notes: "질소 압력 및 유압 라인 누설 없음." },
  { id: 9, template: "작업허가서(PTW) 최종 확인 기록", workplace: "Slag Mill 실", field: "자산(설비)", kind: "수시점검", inspector: "김현장", inspectedAt: "2025-12-10(화)", confirmed: true, notes: "작업 완료 후 잔재물 및 안전 펜스 정리됨." },
  { id: 10, template: "LOTO 시스템 정기 점검표", workplace: "Slag Mill 실", field: "자산(설비)", kind: "특별점검", inspector: "이안전", inspectedAt: "2025-12-16(화)", confirmed: false, notes: "전기 차단점 1곳 태그 마모 확인. 재발급 조치 필요." },
  { id: 11, template: "슬래그 밀 메인 베어링 오일 분석 결과서", workplace: "Slag Mill 실", field: "자산(설비)", kind: "특별점검", inspector: "오영수", inspectedAt: "2025-12-22(월)", confirmed: true, notes: "마모 입자 없음. 오일 상태 양호." }
]

// Safety Education
export const safetyEducationMockData: DataRow[] = [
  { id: 1, course: "작업내용 변경 시 교육", targetGroup: "밀폐공간 진입 작업자", eduName: "밀폐공간 작업 특별 안전 교육", date: "2025-12-08(월)", trainer: "김안전", sitePhotos: [], eduMaterial: "밀폐공간_안전지침.pdf", proof: "참석자 서명부", manage: "인렛슈트 코팅 제거 전" },
  { id: 2, course: "특별교육", targetGroup: "고소/중량물 작업자", eduName: "고소 및 중량물 취급 특별 안전 교육", date: "2025-12-15(월)", trainer: "박안전", sitePhotos: ["/images/edu_02.jpg"], eduMaterial: "고소작업_매뉴얼.pptx", proof: "평가 기록", manage: "어큐뮬레이터 교체 전" },
  { id: 3, course: "특별교육", targetGroup: "설비 정비 작업 근로자", eduName: "LOTOTO(잠금/표지) 특별 안전 교육", date: "2025-12-01(월)", trainer: "이안전", sitePhotos: ["/images/edu_03.jpg"], eduMaterial: "LOTOTO_절차서.pdf", proof: "이론/실습 평가", manage: "전기/기계 정비 필수" },
  { id: 4, course: "정기교육", targetGroup: "전체 협력업체 근로자", eduName: "협력업체 정기 안전보건 교육 (4분기)", date: "2025-12-10(화)", trainer: "홍길동", sitePhotos: [], eduMaterial: "4분기_안전교육자료.pptx", proof: "참석자 명단", manage: "법정 정기 교육" },
  { id: 5, course: "채용 시 교육", targetGroup: "신규 채용 일용직 근로자", eduName: "신규 채용자 일반 안전보건교육", date: "2025-12-03(수)", trainer: "최안전", sitePhotos: ["/images/edu_05.jpg"], eduMaterial: "신규채용_기초안전.pdf", proof: "이수증", manage: "매월 초 시행" },
  { id: 6, course: "특별교육", targetGroup: "유압장치 취급 작업자", eduName: "유압/고압 설비 안전 및 잔압 제거 교육", date: "2025-12-11(목)", trainer: "김정비", sitePhotos: ["/images/edu_06.jpg"], eduMaterial: "유압_안전지침.pdf", proof: "서명부", manage: "HSLM 오일 보충 전" },
  { id: 7, course: "정기교육", targetGroup: "사무직 종사 근로자", eduName: "정기 안전보건 교육 (4분기)", date: "2025-12-05(금)", trainer: "박관리", sitePhotos: [], eduMaterial: "사무직_안전.pptx", proof: "참석 확인", manage: "법정 정기 교육" },
  { id: 8, course: "작업내용 변경 시 교육", targetGroup: "소형밀 청소 작업자", eduName: "고농도 분진 발생 작업 안전 교육", date: "2025-12-12(금)", trainer: "이안전", sitePhotos: ["/images/edu_08.jpg"], eduMaterial: "분진_마스크_착용법.pdf", proof: "현장 사진", manage: "소형밀 청소 전" },
  { id: 9, course: "특별교육", targetGroup: "화기 작업 관련 근로자", eduName: "화기 작업 및 소화 설비 사용 특별 교육", date: "2025-11-29(토)", trainer: "최반장", sitePhotos: [], eduMaterial: "화기_작업허가_절차.pptx", proof: "서명부", manage: "용접 작업 전" },
  { id: 10, course: "정기교육", targetGroup: "관리감독자", eduName: "관리감독자 정기 안전보건 교육", date: "2025-11-30(일)", trainer: "안전팀장", sitePhotos: ["/images/edu_10.jpg"], eduMaterial: "감독자_책임과_역할.pdf", proof: "이수 확인", manage: "법정 정기 교육" }
]

// TBM
export const tbmListMockData: DataRow[] = [
  { id: 1, tbm: "밀폐공간 진입 안전수칙 및 감시인 역할 교육", date: "2025-12-10(화)", start: "08:30", end: "09:00", targetCount: 4, participantsCount: 4, leader: "이호성", sitePhotos: ["/images/tbm_01.jpg"], eduDate: "2025-12-10(화)", eduTime: "08:30 ~ 09:00 (30분)", targetText: "4명", participantsText: "4명" },
  { id: 2, tbm: "LOTOTO 실시 절차 및 에너지 차단 확인 교육", date: "2025-12-01(월)", start: "07:30", end: "08:00", targetCount: 5, participantsCount: 5, leader: "김민수", sitePhotos: ["/images/tbm_02.jpg"], eduDate: "2025-12-01(월)", eduTime: "07:30 ~ 08:00 (30분)", targetText: "5명", participantsText: "5명" },
  { id: 3, tbm: "유압/고압 설비 작업 전 잔압 해제 교육", date: "2025-12-12(금)", start: "14:00", end: "14:30", targetCount: 3, participantsCount: 3, leader: "이정아", sitePhotos: ["/images/tbm_03.jpg"], eduDate: "2025-12-12(금)", eduTime: "14:00 ~ 14:30 (30분)", targetText: "3명", participantsText: "3명" },
  { id: 4, tbm: "소형밀 청소 작업 분진 발생 및 호흡기 보호 교육", date: "2025-12-13(토)", start: "08:40", end: "09:10", targetCount: 3, participantsCount: 2, leader: "문반장", sitePhotos: ["/images/tbm_04.jpg"], eduDate: "2025-12-13(토)", eduTime: "08:40 ~ 09:10 (30분)", targetText: "3명", participantsText: "2명" },
  { id: 5, tbm: "중량물 운반 시 2인 1조 및 보조도구 사용 교육", date: "2025-12-04(목)", start: "08:00", end: "08:30", targetCount: 4, participantsCount: 4, leader: "장감독", sitePhotos: ["/images/tbm_05.jpg"], eduDate: "2025-12-04(목)", eduTime: "08:00 ~ 08:30 (30분)", targetText: "4명", participantsText: "4명" },
  { id: 6, tbm: "어큐뮬레이터 교체 고소 및 낙하물 방지 교육", date: "2025-12-17(화)", start: "13:00", end: "13:30", targetCount: 5, participantsCount: 5, leader: "최정비", sitePhotos: ["/images/tbm_06.jpg"], eduDate: "2025-12-17(화)", eduTime: "13:00 ~ 13:30 (30분)", targetText: "5명", participantsText: "5명" },
  { id: 7, tbm: "화기 작업 전 소화기 비치 및 주변 인화물 제거 교육", date: "2025-12-01(월)", start: "15:30", end: "16:00", targetCount: 4, participantsCount: 4, leader: "김철수", sitePhotos: ["/images/tbm_07.jpg"], eduDate: "2025-12-01(월)", eduTime: "15:30 ~ 16:00 (30분)", targetText: "4명", participantsText: "4명" },
  { id: 8, tbm: "전기 설비 작업 전원 차단 및 절연 도구 사용 교육", date: "2025-12-03(수)", start: "10:00", end: "10:30", targetCount: 3, participantsCount: 3, leader: "김민수", sitePhotos: ["/images/tbm_08.jpg"], eduDate: "2025-12-03(수)", eduTime: "10:00 ~ 10:30 (30분)", targetText: "3명", participantsText: "3명" },
  { id: 9, tbm: "유압 라인 고온 작업 시 화상 예방 및 PPE 교육", date: "2025-12-11(목)", start: "09:30", end: "10:00", targetCount: 3, participantsCount: 3, leader: "오감독", sitePhotos: ["/images/tbm_09.jpg"], eduDate: "2025-12-11(목)", eduTime: "09:30 ~ 10:00 (30분)", targetText: "3명", participantsText: "3명" },
  { id: 10, tbm: "비상 상황 발생 시 대피 경로 및 비상 연락 체계 교육", date: "2025-12-19(금)", start: "08:00", end: "08:15", targetCount: 6, participantsCount: 6, leader: "정안전", sitePhotos: ["/images/tbm_10.jpg"], eduDate: "2025-12-19(금)", eduTime: "08:00 ~ 08:15 (15분)", targetText: "6명", participantsText: "6명" }
]

export const nearMissMockData: DataRow[] = [
  { id: 1, danger: "슬래그 분진 폭발 위험", place: "집진 설비 인근", registrant: "박안전", date: "2025-12-15(월)", result: "채택", reason: "집진기 필터 교체 주기 단축 및 정전기 방지 조치 시행", sitePhotos: ["/images/nm_01.jpg"], manage: "" },
  { id: 2, danger: "호이스트 낙하물", place: "Slag Mill 실 (2층)", registrant: "최정비", date: "2025-12-10(화)", result: "미채택", reason: "해당 구간 작업 전 통제 계획 이미 수립되어 있음", sitePhotos: ["/images/nm_02.jpg"], manage: "" },
  { id: 3, danger: "유압 오일 분출", place: "유압 라인 주변", registrant: "홍길동", date: "2025-12-12(금)", result: "채택", reason: "고압 호스 정기 검사 및 교체 예산 즉시 반영", sitePhotos: ["/images/nm_03.jpg", "/images/nm_04.jpg"], manage: "" },
  { id: 4, danger: "밀폐 공간 질식", place: "인렛 슈트 입구", registrant: "김근로", date: "2025-12-08(월)", result: "채택", reason: "감시인 배치 및 공기 측정 장비 추가 확보", sitePhotos: [], manage: "" },
  { id: 5, danger: "지게차 충돌", place: "제품 출하장 통로", registrant: "이운전", date: "2025-12-04(목)", result: "미채택", reason: "운전자 시야 확보용 반사경 설치 완료되어 개선 효과 미미", sitePhotos: ["/images/nm_05.jpg"], manage: "" }
]

export const safeVoiceMockData: DataRow[] = [
  { id: 1, content: "슬래그 밀 주변 높은 소음으로 귀마개 등급 상향 필요", registrant: "익명", date: "2025-12-05(금)", status: "조치 예정", reason: "특수 방음 귀마개 품의 진행 중", sitePhotos: ["/images/sv_01.jpg"] },
  { id: 2, content: "유압 장치 점검 맨홀 덮개가 무거워 2인 1조 표시 요청", registrant: "김근로", date: "2025-12-11(목)", status: "조치 완료", reason: "중량물 경고 스티커 및 2인 1조 문구 부착 완료", sitePhotos: ["/images/sv_02.jpg", "/images/sv_03.jpg"] },
  { id: 3, content: "협소 공간 작업 시 방폭 손전등 지급 요청", registrant: "익명", date: "2025-12-17(수)", status: "미조치", reason: "적정 사양의 방폭등 선정 위해 현장 조사 예정", sitePhotos: [] },
  { id: 4, content: "출하장 바닥에 떨어진 미분으로 인한 미끄러짐 위험", registrant: "박안전", date: "2025-12-02(화)", status: "조치 완료", reason: "미분 제거 위한 이동식 집진 청소기 배치 완료", sitePhotos: ["/images/sv_04.jpg"] },
  { id: 5, content: "작업 허가서 승인 시 현장 사진 첨부 의무화 요청", registrant: "이감독", date: "2025-12-19(금)", status: "미조치", reason: "시스템 업데이트 관련 관리자 승인 대기 중", sitePhotos: [] }
]

export const assetMachineMockData: DataRow[] = [
  { id: 1, name: "슬래그 밀 #1 (SM-1)", capacity: "200ton/h", quantity: 1, location: "Slag Mill 실", inspectionCycle: "1년", inspectionDate: "2025-11-01(토)", purpose: "슬래그 분쇄" },
  { id: 2, name: "Master Roller #3 (MR-3)", capacity: "100bar", quantity: 1, location: "Slag Mill 실", inspectionCycle: "6개월", inspectionDate: "2025-10-15(수)", purpose: "유압식 압력 조절" },
  { id: 3, name: "컨베이어 (BC-170)", capacity: "150m/min", quantity: 1, location: "원료 이송 구역", inspectionCycle: "6개월", inspectionDate: "2025-12-05(금)", purpose: "원료 운반" },
  { id: 4, name: "호이스트 (H-2-0050)", capacity: "5ton", quantity: 1, location: "Slag Mill 실", inspectionCycle: "6개월", inspectionDate: "2025-09-20(토)", purpose: "중량물 인양 (라이너 교체 등)" },
  { id: 5, name: "집진기 #2 (D-2-9000)", capacity: "2000m³/h", quantity: 1, location: "집진동", inspectionCycle: "1년", inspectionDate: "2025-03-02(일)", purpose: "분진 제거 (밀 실)" },
  { id: 6, name: "지게차 #1 (F-1-7000)", capacity: "3ton", quantity: 2, location: "물류창고", inspectionCycle: "6개월", inspectionDate: "2025-04-05(토)", purpose: "제품/원자재 운반" },
  { id: 7, name: "유압 펌프 유닛 (HP-1)", capacity: "250L/min", quantity: 1, location: "Slag Mill 실 유압장치", inspectionCycle: "3개월", inspectionDate: "2025-12-01(월)", purpose: "유압 시스템 구동" },
  { id: 8, name: "슬러지 이송 펌프 (SP-1)", capacity: "500L/min", quantity: 2, location: "폐수처리장", inspectionCycle: "1년", inspectionDate: "2025-03-15(토)", purpose: "폐수 처리" },
  { id: 9, name: "전기 패널 (MCC-1)", capacity: "440V", quantity: 1, location: "전기실", inspectionCycle: "1년", inspectionDate: "2025-01-20(월)", purpose: "전력 공급 및 제어" },
  { id: 10, name: "용접기 (W-3-1100)", capacity: "380V", quantity: 2, location: "제작동", inspectionCycle: "3개월", inspectionDate: "2025-02-18(화)", purpose: "금속 용접 및 보수" }
]

export const assetHazardMockData: DataRow[] = [
  { id: 1, chemicalName: "메틸알코올", casNo: "67-56-1", exposureLimit: "200 ppm", dailyUsage: "25 L", storageAmount: "1 m³", registrationDate: "2025-06-01(일)", msds: "MSDS-001.pdf", manage: "밀폐공간 사용 금지" },
  { id: 2, chemicalName: "공업용 솔벤트 (희석제)", casNo: "N/A", exposureLimit: "100 ppm", dailyUsage: "5 L", storageAmount: "300 L", registrationDate: "2025-07-15(화)", msds: "MSDS-002.pdf", manage: "환기 시설 확보" },
  { id: 3, chemicalName: "유압 작동유 (HSLM Oil)", casNo: "N/A", exposureLimit: "5 mg/m³", dailyUsage: "10 L", storageAmount: "5 t", registrationDate: "2025-01-10(금)", msds: "MSDS-003.pdf", manage: "누유 방지 대책" },
  { id: 4, chemicalName: "염산 (35%)", casNo: "7647-01-0", exposureLimit: "2 ppm", dailyUsage: "1 L", storageAmount: "50 L", registrationDate: "2025-09-01(월)", msds: "MSDS-004.pdf", manage: "산성 보호구 착용" },
  { id: 5, chemicalName: "아세톤", casNo: "67-64-1", exposureLimit: "500 ppm", dailyUsage: "0.5 L", storageAmount: "50 L", registrationDate: "2025-10-20(월)", msds: "MSDS-005.pdf", manage: "화기 엄금 (인화성)" },
  { id: 6, chemicalName: "분진 (슬래그 미분)", casNo: "N/A", exposureLimit: "10 mg/m³", dailyUsage: "N/A", storageAmount: "N/A", registrationDate: "2025-02-01(토)", msds: "MSDS-006.pdf", manage: "특급 방진마스크 착용" },
  { id: 7, chemicalName: "암모니아수", casNo: "1336-21-6", exposureLimit: "25 ppm", dailyUsage: "0.1 L", storageAmount: "10 L", registrationDate: "2025-08-10(일)", msds: "MSDS-007.pdf", manage: "밀폐된 공간 사용 금지" },
  { id: 8, chemicalName: "윤활 그리스", casNo: "N/A", exposureLimit: "5 mg/m³", dailyUsage: "1 kg", storageAmount: "500 kg", registrationDate: "2025-04-18(금)", msds: "MSDS-008.pdf", manage: "피부 접촉 주의" },
  { id: 9, chemicalName: "톨루엔", casNo: "108-88-3", exposureLimit: "50 ppm", dailyUsage: "10 kg", storageAmount: "700 L", registrationDate: "2025-05-20(화)", msds: "MSDS-009.pdf", manage: "유기용제 취급 교육 이수" },
  { id: 10, chemicalName: "질소 (고압가스)", casNo: "7727-37-9", exposureLimit: "N/A", dailyUsage: "N/A", storageAmount: "20 Cyl", registrationDate: "2025-03-30(일)", msds: "MSDS-010.pdf", manage: "용기 전도 방지 및 잔압 확인" }
]

// Supply Chain
export const partnersMockData: DataRow[] = [
  { id: 1, company: "대진설비보전", contractPeriod: "2025-04-01 ~ 2026-03-31", manager: "최정비", contact: "010-9999-1111", planFile: "계획서_대진.pdf", etcFile: "", manage: "슬래그 밀 정비 전담" },
  { id: 2, company: "동아하역물류", contractPeriod: "2025-07-01 ~ 2026-06-30", manager: "이하준", contact: "010-8888-2222", planFile: "계획서_동아.pdf", etcFile: "안전교육_동아.zip", manage: "슬래그 제품 운반" },
  { id: 3, company: "하나환경산업", contractPeriod: "2025-10-01 ~ 2025-12-31", manager: "김청소", contact: "010-7777-3333", planFile: "", etcFile: "", manage: "고소/밀폐공간 청소" },
  { id: 4, company: "세화전기안전", contractPeriod: "2025-01-01 ~ 2025-12-31", manager: "박전기", contact: "010-6666-4444", planFile: "계획서_세화.pdf", etcFile: "", manage: "전기 설비 정기 점검" },
  { id: 5, company: "미래건설기술", contractPeriod: "2025-03-01 ~ 2025-09-30", manager: "정건설", contact: "010-5555-5555", planFile: "", etcFile: "안전서약서_미래.pdf", manage: "유압라인 교체 작업" },
  { id: 6, company: "안전보건컨설팅", contractPeriod: "2025-08-01 ~ 2026-07-31", manager: "홍강사", contact: "010-4444-6666", planFile: "교육계획_안전보건.pdf", etcFile: "", manage: "특별 안전 교육 전담" }
]

export const evaluationMockData: DataRow[] = [
  { id: 1, company: "대진설비보전", evaluationName: "슬래그 밀 정비 협력사 신규평가", evaluationType: "신규평가", contractPeriod: "2025-04-01 ~ 2026-03-31", evaluator: "김안전", externalEvaluator: "한국안전기술원", evaluationFile: "대진_신규평가서.pdf", attachmentFile: "" },
  { id: 2, company: "동아하역물류", evaluationName: "제품 운반 협력사 재평가", evaluationType: "재평가", contractPeriod: "2024-07-01 ~ 2025-06-30", evaluator: "이감독", externalEvaluator: "한국산업안전협회", evaluationFile: "동아_재평가서.pdf", attachmentFile: "점검결과_동아.zip" },
  { id: 3, company: "하나환경산업", evaluationName: "고위험 작업(청소) 협력사 선정평가", evaluationType: "선정평가", contractPeriod: "2025-10-01 ~ 2025-12-31", evaluator: "박관리", externalEvaluator: "기술안전공단", evaluationFile: "하나_선정평가서.pdf", attachmentFile: "" },
  { id: 4, company: "세화전기안전", evaluationName: "전기 설비 협력사 정기평가", evaluationType: "정기평가", contractPeriod: "2025-01-01 ~ 2025-12-31", evaluator: "최현장", externalEvaluator: "안전보건기술(주)", evaluationFile: "세화_정기평가.pdf", attachmentFile: "" },
  { id: 5, company: "미래건설기술", evaluationName: "중대재해 발생 위험 작업 특별평가", evaluationType: "특별평가", contractPeriod: "2025-03-01 ~ 2025-09-30", evaluator: "정안전", externalEvaluator: "안전보건컨설팅", evaluationFile: "미래_특별평가.pdf", attachmentFile: "개선계획서.zip" }
]

export const committeeMockData: DataRow[] = [
  { id: 1, completionDate: "2025-12-10 10:00~11:30", meetingPlace: "본사 대회의실", sitePhotos: ["/images/mt_1.jpg"], proof: "회의록_251210.pdf", manage: "4분기 정기 회의" },
  { id: 2, completionDate: "2025-11-25 14:00~15:00", meetingPlace: "슬래그공장 회의실", sitePhotos: ["/images/mt_2.jpg"], proof: "회의록_251125.pdf", manage: "유압 설비 개선안 논의" },
  { id: 3, completionDate: "2025-10-30 13:00~15:00", meetingPlace: "본사 소회의실", sitePhotos: [], proof: "회의록_251030.pdf", manage: "협력업체 평가 결과 공유" },
  { id: 4, completionDate: "2025-09-15 09:00~10:30", meetingPlace: "C동 교육장", sitePhotos: ["/images/mt_4.jpg"], proof: "회의록_250915.pdf", manage: "밀폐공간 작업 절차 수립" },
  { id: 5, completionDate: "2025-08-12 16:00~17:00", meetingPlace: "A공장 상황실", sitePhotos: ["/images/mt_5.jpg"], proof: "회의록_250812.pdf", manage: "TBM 시행 결과 보고" },
  { id: 6, completionDate: "2025-07-05 10:00~11:00", meetingPlace: "슬래그공장 회의실", sitePhotos: ["/images/mt_6.jpg"], proof: "회의록_250705.pdf", manage: "상반기 안전 목표 점검" }
]

export const siteAuditMockData: DataRow[] = [
  { id: 1, inspectionDate: "2025-12-05(금)", inspectionType: "특별점검", inspectionName: "슬래그 밀 LOTO 시스템 작동 및 태그 확인", inspectionResult: "중대 위험요인", note: "LOTO 해제 절차 미준수 2건 적발, 즉시 재교육", inspector: "최안전", sitePhotos: ["/images/sa_1.jpg"], fileAttach: "LOTO_Audit.pdf", manage: "위험작업 허가서 연계" },
  { id: 2, inspectionDate: "2025-12-10(화)", inspectionType: "합동점검", inspectionName: "밀폐공간 작업 전 산소/유해가스 농도 측정", inspectionResult: "이상없음", note: "산소 20.9%, H2S 0 ppm 확인", inspector: "박점검", sitePhotos: ["/images/sa_2.jpg"], fileAttach: "", manage: "인렛슈트 청소 작업" },
  { id: 3, inspectionDate: "2025-12-17(수)", inspectionType: "일반점검", inspectionName: "유압라인 분해/조립 시 잔압 제거 여부", inspectionResult: "시정조치 완료", note: "압력 게이지 '0' Bar 확인 후 작업 시작", inspector: "이점검", sitePhotos: [], fileAttach: "", manage: "어큐뮬레이터 교체" },
  { id: 4, inspectionDate: "2025-11-28(금)", inspectionType: "정기점검", inspectionName: "중량물 인양 호이스트 와이어 로프 마모도", inspectionResult: "이상없음", note: "마모율 기준치 미만", inspector: "김감독", sitePhotos: ["/images/sa_4.jpg"], fileAttach: "호이스트_점검.xls", manage: "4분기 설비 점검" },
  { id: 5, inspectionDate: "2025-12-03(화)", inspectionType: "특별점검", inspectionName: "분진 작업 시 특급 방진마스크 착용 준수", inspectionResult: "시정조치 필요", note: "마스크 미착용 1건, 현장 경고 및 재착용 조치", inspector: "정안전", sitePhotos: ["/images/sa_5.jpg"], fileAttach: "", manage: "소형밀 청소 작업" }
]

export const trainingMockData: DataRow[] = [
  { id: 1, name: "협의체 A (정비)", riskAssessment: { text: "완료", color: "blue" }, hazardousMaterial: { text: "완료", color: "blue" }, responseManual: { text: "완료", color: "blue" }, allSigned: { text: "완료", color: "blue" }, updatedAt: "2025-12-01(월)" },
  { id: 2, name: "협의체 B (전기)", riskAssessment: { text: "완료", color: "blue" }, hazardousMaterial: { text: "미완료", color: "red" }, responseManual: { text: "완료", color: "blue" }, allSigned: { text: "미완료", color: "red" }, updatedAt: "2025-12-05(금)" },
  { id: 3, name: "협의체 C (청소)", riskAssessment: { text: "미완료", color: "red" }, hazardousMaterial: { text: "미완료", color: "red" }, responseManual: { text: "미완료", color: "red" }, allSigned: { text: "미완료", color: "red" }, updatedAt: null },
  { id: 4, name: "협의체 D (물류)", riskAssessment: { text: "완료", color: "blue" }, hazardousMaterial: { text: "완료", color: "blue" }, responseManual: { text: "미완료", color: "red" }, allSigned: { text: "완료", color: "blue" }, updatedAt: "2025-11-20(목)" },
  { id: 5, name: "협의체 E (건설)", riskAssessment: { text: "미완료", color: "red" }, hazardousMaterial: { text: "완료", color: "blue" }, responseManual: { text: "완료", color: "blue" }, allSigned: { text: "미완료", color: "red" }, updatedAt: "2025-10-15(수)" },
  { id: 6, name: "협의체 F (특수)", riskAssessment: { text: "완료", color: "blue" }, hazardousMaterial: { text: "미완료", color: "red" }, responseManual: { text: "미완료", color: "red" }, allSigned: { text: "완료", color: "blue" }, updatedAt: "2025-12-18(수)" }
]

// Notice
export const noticeMockData: DataRow[] = [
  { id: 1, title: "[필독] 12월 슬래그 밀 정기 정비 기간 안전 수칙 준수 강조", author: "홍길동", date: "2025-12-01(월)", views: 250, fileAttach: true },
  { id: 2, title: "[안내] 위험 작업 허가제(PTW) 시스템 개편에 따른 사용 교육 일정", author: "박관리", date: "2025-11-28(금)", views: 188, fileAttach: false },
  { id: 3, title: "[중요] 밀폐 공간(슈트/빈) 작업 전 유해가스 측정 의무화 안내", author: "김안전", date: "2025-11-20(목)", views: 310, fileAttach: true },
  { id: 4, title: "4분기 전 직원 정기 안전보건교육 이수 확인 요청", author: "최감독", date: "2025-11-15(토)", views: 405, fileAttach: false },
  { id: 5, title: "[공지] 협력업체 정기 안전보건수준 평가 결과 및 피드백 회신", author: "이안전", date: "2025-11-05(수)", views: 220, fileAttach: true }
]

export const resourcesMockData: DataRow[] = [
  { id: 1, title: "슬래그 밀 정비 시 LOTOTO(잠금/표지) 표준 절차서", author: "김정비", date: "2025-12-05(금)", fileAttach: true },
  { id: 2, title: "고소 작업 및 중량물 인양 작업 위험성평가 서식", author: "박안전", date: "2025-11-25(화)", fileAttach: true },
  { id: 3, title: "밀폐공간 출입 전 산소/유해가스 측정 기록부", author: "최감독", date: "2025-11-18(화)", fileAttach: true },
  { id: 4, title: "협력업체 정기 안전보건 교육 이수 확인 서식", author: "홍길동", date: "2025-11-07(금)", fileAttach: false },
  { id: 5, title: "유압라인 분해/조립 작업 시 안전수칙 TBM 자료", author: "이정아", date: "2025-12-11(목)", fileAttach: true }
]

export const lawMockData: DataRow[] = [
  { id: 1, title: "고압가스 안전관리법 개정안 주요 내용 안내", organization: "고용노동부", date: "2025-12-01(월)", fileAttach: true },
  { id: 2, title: "밀폐공간 보건 작업 프로그램 가이드라인 (최신판)", organization: "안전보건공단", date: "2025-11-25(화)", fileAttach: false },
  { id: 3, title: "화학물질 관리법 개정사항 및 MSDS 비치 의무 안내", organization: "환경부", date: "2025-11-10(월)", fileAttach: true },
  { id: 4, title: "산업안전보건기준에 관한 규칙(슬래그 밀 관련 조항 발췌)", organization: "고용노동부", date: "2025-10-30(목)", fileAttach: true },
  { id: 5, title: "TBM(작업 전 안전점검 회의) 이행 가이드 및 기록 서식", organization: "안전보건공단", date: "2025-10-20(월)", fileAttach: true }
]

export const receivedApprovalMockData: DataRow[] = [
  { id: 1, date: "2025-12-17(수)", type: "작업위험분석(JSA)", content: "Master Roller 어큐뮬레이터 교체 위험분석", drafter: "최정비", status: { text: "결재대기", color: "yellow" } },
  { id: 2, date: "2025-12-13(토)", type: "현장위험성평가", content: "소형밀 내부 잔류물 청소 위험성평가", drafter: "문반장", status: { text: "결재대기", color: "yellow" } },
  { id: 3, date: "2025-12-12(금)", type: "위험작업허가서", content: "HSLM 유압 오일 보충 작업 허가 요청", drafter: "이정아", status: { text: "결재완료", color: "green" } },
  { id: 4, date: "2025-12-10(화)", type: "TBM 안전일지", content: "밀폐공간 진입 안전수칙 TBM 기록", drafter: "이호성", status: { text: "결재완료", color: "green" } },
  { id: 5, date: "2025-12-05(금)", type: "위험작업허가서", content: "컨베이어 벨트 용접 작업 허가 요청", drafter: "김철수", status: { text: "반려", color: "red" } },
  { id: 6, date: "2025-12-04(목)", type: "점검결과 보고서", content: "중량물 운반 안전 점검 결과 보고", drafter: "장감독", status: { text: "결재완료", color: "green" } },
  { id: 7, date: "2025-12-02(화)", type: "협력업체 평가서", content: "협력업체 B 안전보건수준 재평가서", drafter: "박안전", status: { text: "결재대기", color: "yellow" } },
  { id: 8, date: "2025-11-20(목)", type: "TBM 안전일지", content: "전기 설비 정기 점검 TBM 기록", drafter: "김민수", status: { text: "결재완료", color: "green" } }
]

export const sentApprovalMockData: DataRow[] = [
  { id: 1, date: "2025-12-19(금)", document: "4분기 산업안전보건위원회 회의록 승인 요청", status: { text: "결재대기", color: "yellow" }, progress: "0/3", finalApprover: "최대표" },
  { id: 2, date: "2025-12-18(수)", document: "슬래그 밀 정기 점검 계획서 수정본", status: { text: "결재중", color: "yellow" }, progress: "1/4", finalApprover: "김공장장" },
  { id: 3, date: "2025-12-16(화)", document: "밀폐공간 작업 절차서 개정안", status: { text: "결재완료", color: "green" }, progress: "3/3", finalApprover: "홍소장" },
  { id: 4, date: "2025-12-10(화)", document: "12월 안전 교육 이수 현황 보고서", status: { text: "결재중", color: "yellow" }, progress: "2/3", finalApprover: "박관리" },
  { id: 5, date: "2025-12-05(금)", document: "유해화학물질 관리 대장 업데이트 승인 요청", status: { text: "결재완료", color: "green" }, progress: "2/2", finalApprover: "이환경" },
  { id: 6, date: "2025-11-30(일)", document: "2026년 안전보건 예산 및 인력 확보 계획서", status: { text: "결재대기", color: "yellow" }, progress: "0/4", finalApprover: "최대표" },
  { id: 7, date: "2025-11-25(화)", document: "협력업체 안전보건 관리 실태 점검 보고", status: { text: "반려", color: "red" }, progress: "1/3", finalApprover: "김공장장" }
]

// Business
export const basicManagementMockData: DataRow[] = [
  { id: 3, factory: "포항제철소 슬래그 공장", manager: "최관리", contact: "054-123-4567", address: "경상북도 포항시 남구 동해안로 6213" },
  { id: 2, factory: "당진 슬래그공장", manager: "홍길동", contact: "041-987-6543", address: "충청남도 당진시 송악읍 고대공단2길 220" },
  { id: 1, factory: "부산물류센터", manager: "이영희", contact: "051-987-6543", address: "부산광역시 해운대구 좌동 789-10" }
]

export const policyGoalMockData = {
  year: "2025",
  goalTitle: "현장 위험요인 실시간 식별 및 제거",
  content: `(주)***은 경영활동 전반에 전 사원의 안전과 보건을 기업의 최우선 가치로 인식하고,
법규 및 기준을 준수하는 안전보건관리체계를 구축하여 전 직원이 안전하고 쾌적한 환경에서 근무할 수 있도록 최선을 다한다.

이를 위해 다음과 같은 안전보건활동을 통해 지속적으로 안전보건환경을 개선한다.

1. 경영책임자는 '근로자의 생명 보호'와 '안전한 작업환경 조성'을 기업경영활동의 최우선 목표로 삼는다.
2. 경영책임자는 사업장에 안전보건관리체계를 구축하여 사업장의 위험요인 제거·통제를 위한 충분한 인적·물적 자원을 제공한다.
3. 안전보건 목표를 설정하고, 이를 달성하기 위한 세부적인 실행계획을 수립하여 이행한다.
4. 안전보건 관계 법령 및 관련 규정을 준수하는 내부규정을 수립하여 충실히 이행한다.
5. 근로자의 참여를 통해 위험요인을 파악하고, 파악된 위험요인은 반드시 개선하고, 교육을 통해 공유한다.
6. 모든 구성원이 자신의 직무와 관련된 위험요인을 알도록 하고, 위험요인 제거·대체 및 통제기법에 관해 교육·훈련을 실시한다.
7. 모든 공급자와 계약자가 우리의 안전보건 방침과 안전 요구사항을 준수하도록 한다.
8. 모든 구성원은 안전보건활동에 대한 책임과 의무를 성실히 준수토록 한다.`
}

export const budgetMockData: DataRow[] = [
  { id: 1, year: "2026", itemName: "슬래그 밀 정비 특화 안전 장비 구입", category: "밀폐/고소 작업 안전 장비 확보", budget: "50000000", spent: "3000000", remaining: "47000000", carryOver: true, attachment: "장비목록.pdf", author: "김안전", entryDate: "2025-12-01" },
  { id: 2, year: "2025", itemName: "유압 설비 안전 진단 용역", category: "유압 라인 및 어큐뮬레이터 정기 점검", budget: "30000000", spent: "28000000", remaining: "2000000", carryOver: false, attachment: "용역계약서.pdf", author: "이설비", entryDate: "2025-01-15" },
  { id: 3, year: "2025", itemName: "중대재해 비상 대응 훈련 (4분기)", category: "가상 시나리오 기반 전사 훈련", budget: "25000000", spent: "25000000", remaining: "0", carryOver: false, attachment: "훈련보고서.pdf", author: "박교육", entryDate: "2025-10-01" },
  { id: 4, year: "2026", itemName: "위험 작업 허가 시스템 개발 및 유지보수", category: "PTW/JSA 전산화 시스템 구축", budget: "60000000", spent: "0", remaining: "60000000", carryOver: true, attachment: "개발계획.pdf", author: "최장비", entryDate: "2025-12-15" },
  { id: 5, year: "2025", itemName: "협력업체 안전보건 컨설팅 비용", category: "협력업체 위험성평가 및 교육 지원", budget: "15000000", spent: "15000000", remaining: "0", carryOver: false, attachment: "컨설팅계약.pdf", author: "정안전", entryDate: "2025-03-20" }
]

export const organizationMockData: DataRow[] = [
  { id: 1, name: "박대표", safetyPosition: "경영책임자", department: "경영지원팀", position: "대표이사", phone: "010-1234-5678", entryDate: "-", assignDate: "2022-01-10" },
  { id: 2, name: "최책임", safetyPosition: "안전보건관리책임자", department: "생산관리팀", position: "부장", phone: "010-3333-7777", entryDate: "2021-05-10", assignDate: "2022-03-10" },
  { id: 3, name: "박안전", safetyPosition: "안전관리자", department: "안전관리팀", position: "과장", phone: "010-8888-1234", entryDate: "2020-08-15", assignDate: "2020-09-01" },
  { id: 4, name: "이보건", safetyPosition: "보건관리자", department: "보건팀", position: "주임", phone: "010-5555-4321", entryDate: "2019-11-20", assignDate: "2019-12-10" },
  { id: 5, name: "김반장", safetyPosition: "관리감독자", department: "생산1팀", position: "반장", phone: "010-1111-2222", entryDate: "2023-01-15", assignDate: "2023-02-01" },
  { id: 6, name: "조반장", safetyPosition: "관리감독자", department: "생산2팀", position: "반장", phone: "010-3333-4444", entryDate: "2022-06-12", assignDate: "2022-07-01" },
  { id: 7, name: "이영수", safetyPosition: "관리감독자", department: "설비보전팀", position: "반장", phone: "010-5555-6666", entryDate: "2021-03-18", assignDate: "2021-04-01" }
]

export const educationCertificateMockData: DataRow[] = [
  { id: 1, name: "홍길동", phone: "010-1234-5678", submitDate: "2025-11-20(목)", eduName: "신규채용자 교육", eduDate: "2025-11-15(토)", certificate: "certificate_1.pdf", confirm: { text: "확인", color: "blue" } },
  { id: 2, name: "김철수", phone: "010-2345-6789", submitDate: "2025-12-05(금)", eduName: "관리감독자 교육 (4분기)", eduDate: "2025-12-01(월)", certificate: "certificate_2.pdf", confirm: { text: "확인", color: "blue" } },
  { id: 3, name: "이영희", phone: "010-3456-7890", submitDate: "2025-11-01(토)", eduName: "유압 설비 특별 교육", eduDate: "2025-10-28(화)", certificate: "", confirm: { text: "미확인", color: "red" } },
  { id: 4, name: "최안전", phone: "010-4444-5555", submitDate: "2025-12-10(화)", eduName: "밀폐공간 작업 특별 교육", eduDate: "2025-12-08(월)", certificate: "certificate_4.pdf", confirm: { text: "확인", color: "blue" } },
  { id: 5, name: "박현장", phone: "010-5555-6666", submitDate: "2025-10-25(토)", eduName: "화기 작업 특별 교육", eduDate: "2025-10-20(월)", certificate: "certificate_5.pdf", confirm: { text: "확인", color: "blue" } }
]

// Safety Work Permit
export const safetyWorkPermitMockData: DataRow[] = [
  { id: 1, workType: "용접 (화기 작업)", workerCount: "3명", hazardLevel: "높음", workPeriod: "2025-12-01 ~ 2025-12-02", registrationDate: "2025-11-29", approvalStatus: { text: "완료", color: "blue" }, attachment: "화기_PTW.pdf", manage: "컨베이어 벨트 보수" },
  { id: 2, workType: "밀폐공간 진입", workerCount: "2명", hazardLevel: "높음", workPeriod: "2025-12-10 ~ 2025-12-10", registrationDate: "2025-12-08", approvalStatus: { text: "완료", color: "blue" }, attachment: "밀폐_PTW.pdf", manage: "인렛 슈트 내부 청소" },
  { id: 3, workType: "고소 작업 (3m 이상)", workerCount: "4명", hazardLevel: "높음", workPeriod: "2025-12-17 ~ 2025-12-18", registrationDate: "2025-12-15", approvalStatus: { text: "미완료", color: "red" }, attachment: "", manage: "어큐뮬레이터 교체" },
  { id: 4, workType: "전기 작업 (LOTOTO)", workerCount: "2명", hazardLevel: "중간", workPeriod: "2025-12-03 ~ 2025-12-03", registrationDate: "2025-12-01", approvalStatus: { text: "완료", color: "blue" }, attachment: "전기_PTW.pdf", manage: "배선 절연 보강" },
  { id: 5, workType: "중량물 양중 작업", workerCount: "3명", hazardLevel: "중간", workPeriod: "2025-12-04 ~ 2025-12-04", registrationDate: "2025-12-03", approvalStatus: { text: "반려", color: "red" }, attachment: "", manage: "장비 이동/설치" }
]

// Response Manual
export const responseManualMockData: DataRow[] = [
  { id: 1, title: "(중대재해) 슬래그 밀 내부 협착/끼임 사고 발생 시 비상 대응 절차", author: "홍길동", date: "2025-12-05(금)", views: 860, fileAttach: true },
  { id: 2, title: "(밀폐공간) 인렛 슈트 및 사일로 밀폐공간 진입 및 구조 매뉴얼", author: "김안전", date: "2025-12-10(화)", views: 350, fileAttach: true },
  { id: 3, title: "(화재/폭발) 분진 폭발 대비 및 비상 소화 설비 사용 매뉴얼", author: "박관리", date: "2025-11-30(일)", views: 550, fileAttach: true },
  { id: 4, title: "(화학물질) 유압 작동유 및 위험물질 누출 시 긴급 방제 조치 지침", author: "최정비", date: "2025-12-12(금)", views: 280, fileAttach: true },
  { id: 5, title: "(산업안전) 작업 전 LOTOTO 실시 및 해제 단계별 표준 매뉴얼", author: "이감독", date: "2025-12-01(월)", views: 780, fileAttach: true }
]

// QR
export const qrManagementMockData = [
  { id: 5, qrName: "근로자 앱 사용 가이드 QR", link: "근로자용 사용법 안내", useStatus: true },
  { id: 4, qrName: "관리자 사용 가이드 QR", link: "관리자용 사용 설명서", useStatus: true },
  { id: 3, qrName: "종사자 의견청취 QR", link: "설문/건의 등 의견 수렴 폼 링크", useStatus: true },
  { id: 2, qrName: "관리자 페이지 접속 QR", link: "관리자용 웹페이지 링크", useStatus: true },
  { id: 1, qrName: "이수증 제출 QR", link: "안드로이드/iOS 다운로드 링크", useStatus: true }
]

// PTW Utilities
export const findPTWDataById = (id: number, type: PTWDocumentType): PTWGroupItem | WorkPermitItem | JSAItem | SiteEvaluationItem | TBMItem | undefined => {
  const dataMap = { "ptw-group": ptwGroupMockData, "work-permit": workPermitMockData, "jsa": jsaMockData, "site-evaluation": siteEvaluationMockData, "tbm": tbmMockData }
  return dataMap[type].find(item => item.id === id)
}

export const getDocumentTypeByTabIndex = (tabIndex: number): PTWDocumentType => {
  const typeMap: Record<number, PTWDocumentType> = { 0: "work-permit", 1: "jsa", 2: "site-evaluation", 3: "tbm" }
  return typeMap[tabIndex] || "work-permit"
}

export const getTabIndexByDocumentType = (type: PTWDocumentType): number => {
  const indexMap: Record<PTWDocumentType, number> = { "ptw-group": 0, "work-permit": 0, "jsa": 1, "site-evaluation": 2, "tbm": 3 }
  return indexMap[type] || 0
}