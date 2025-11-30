import { PTWGroupItem, WorkPermitItem, JSAItem, SiteEvaluationItem, TBMItem, PTWDocumentType } from "@/types/ptw"
import { DataRow } from "@/components/common/tables/DataTable"

// PTW
export const ptwGroupMockData: PTWGroupItem[] = [
  { id: 3, ptwName: "11월 전기설비 패키지", createdAt: "2025-10-23", registrant: "이관리", updatedAt: "2025-10-26" },
  { id: 2, ptwName: "11월 고소작업 패키지", createdAt: "2025-10-22", registrant: "박현장", updatedAt: "2025-10-27" },
  { id: 1, ptwName: "11월 용접 작업 패키지", createdAt: "2025-10-20", registrant: "김안전", updatedAt: "2025-10-25" }
]

export const workPermitMockData: WorkPermitItem[] = [
  { id: 3, workName: "전기 작업", workDate: "2025-11-17(월)", workLocation: "C동 지하 전기실", workPersonnel: "2명", workType: "LOTOTO", applicant: "(주)전기/박민수", applicationDate: "2025-10-26(일)", signatureStatus: { text: "1/5", color: "red" }, sitePhotos: [], fileAttach: false },
  { id: 2, workName: "고소 작업", workDate: "2025-11-16(일)", workLocation: "B동 옥상", workPersonnel: "5명", workType: "고소", applicant: "(주)설비/이영희", applicationDate: "2025-10-27(월)", signatureStatus: { text: "3/5", color: "red" }, sitePhotos: ["/images/photo3.jpg"], fileAttach: true },
  { id: 1, workName: "용접 작업", workDate: "2025-11-15(토)", workLocation: "03-BE-3호, 04-BE-1/10", workPersonnel: "3명", workType: "화기", applicant: "(주)건설/김철수", applicationDate: "2025-10-29(수)", signatureStatus: { text: "5/5", color: "gray" }, sitePhotos: ["/images/photo1.jpg", "/images/photo2.jpg"], fileAttach: true }
]

export const jsaMockData: JSAItem[] = [
  { id: 3, jsaNo: "JSA-2025-003", workName: "전기 작업", workDate: "2025-11-17(월)", team: "설비팀", applicationDate: "2025-10-26(일)", sitePhotos: [], fileAttach: false },
  { id: 2, jsaNo: "JSA-2025-002", workName: "고소 작업", workDate: "2025-11-16(일)", team: "생산2팀", applicationDate: "2025-10-27(월)", sitePhotos: ["/images/photo3.jpg"], fileAttach: true },
  { id: 1, jsaNo: "JSA-2025-001", workName: "용접 작업", workDate: "2025-11-15(토)", team: "생산1팀", applicationDate: "2025-10-29(수)", sitePhotos: ["/images/photo1.jpg", "/images/photo2.jpg"], fileAttach: true }
]

export const siteEvaluationMockData: SiteEvaluationItem[] = [
  { id: 3, workTeam: "대림산업 C팀", workerName: "정민수", workDate: "2025-10-23", author: "강현장", signatureStatus: { text: "완료", color: "gray" }, sitePhotos: [], fileAttach: false },
  { id: 2, workTeam: "현대건설 B팀", workerName: "박영희", workDate: "2025-10-22", author: "최관리", signatureStatus: { text: "미완료", color: "red" }, sitePhotos: ["/images/photo3.jpg"], fileAttach: true },
  { id: 1, workTeam: "삼성건설 A팀", workerName: "김철수", workDate: "2025-10-20", author: "이안전", signatureStatus: { text: "완료", color: "gray" }, sitePhotos: ["/images/photo1.jpg", "/images/photo2.jpg"], fileAttach: true }
]

export const tbmMockData: TBMItem[] = [
  { id: 3, processName: "전기 작업", meetingDate: "2025-06-03(금)", meetingTime: "13:00~14:00", manager: "박안전", participants: "7명", sitePhotos: [], fileAttach: false },
  { id: 2, processName: "고소 작업", meetingDate: "2025-06-02(목)", meetingTime: "09:00~09:40", manager: "이현장", participants: "10명", sitePhotos: ["/images/photo3.jpg"], fileAttach: true },
  { id: 1, processName: "용접 작업", meetingDate: "2025-06-01(수)", meetingTime: "15:30~16:30", manager: "김팀장", participants: "8명", sitePhotos: ["/images/photo1.jpg", "/images/photo2.jpg"], fileAttach: true }
]

// Inspection
export const inspectionPlanMockData: DataRow[] = [
  { id: 3, planName: "보호구 일상점검(주간)", site: "제3공장", area: "자산(설비)", kind: "특별점검", inspector: "김현장", schedule: "2025/08/18 ~ 2025/08/22", registrant: "안전팀", progress: "미점검" },
  { id: 2, planName: "화기작업 사전점검", site: "제1공장", area: "시설물", kind: "수시점검", inspector: "박현장", schedule: "2025/09/01 ~ 2025/09/03", registrant: "관리자", progress: "완료" },
  { id: 1, planName: "전기설비 정기점검(9월)", site: "제3공장", area: "시설물", kind: "수시점검", inspector: "김안전", schedule: "2025/09/10 ~ 2025/09/15", registrant: "관리자", progress: "미점검" }
]

export const inspectionChecklistMockData: DataRow[] = [
  { id: 3, template: "전기설비 정기점검(9월)", field: "시설물", kind: "정기점검", status: { text: "사용", color: "blue" }, registrant: "김안전", registeredAt: "2025-06-20" },
  { id: 2, template: "개인보호구 일상점검표", field: "자율점검", kind: "수시점검", status: { text: "사용", color: "blue" }, registrant: "박현장", registeredAt: "2025-05-28" },
  { id: 1, template: "화기작업 사전점검표", field: "자산(설비)", kind: "특별점검", status: { text: "미사용", color: "red" }, registrant: "이관리", registeredAt: "2025-04-10" }
]

export const inspectionResultsMockData: DataRow[] = [
  { id: 5, template: "화학물질 취급작업 점검표", workplace: "제1공장", field: "시설물", kind: "특별점검", inspector: "이현장", inspectedAt: "2025-06-27", confirmed: false, notes: "" },
  { id: 4, template: "전기설비 열화상 점검표", workplace: "제5공장", field: "시설물", kind: "정기점검", inspector: "김현장", inspectedAt: "2025-07-18", confirmed: true, notes: "이상없음" },
  { id: 3, template: "이동장비 안전점검표", workplace: "제3공장", field: "시설물", kind: "수시점검", inspector: "곽현장", inspectedAt: "2025-07-20", confirmed: false, notes: "" },
  { id: 2, template: "작업장 환경점검표", workplace: "제1공장", field: "자산(설비)", kind: "정기점검", inspector: "박현장", inspectedAt: "2025-07-29", confirmed: true, notes: "정상" },
  { id: 1, template: "위험기계 장비점검표", workplace: "제2공장", field: "시설물", kind: "수시점검", inspector: "김안전", inspectedAt: "2025-08-02", confirmed: false, notes: "" }
]

// Safety Education
export const safetyEducationMockData: DataRow[] = [
  { id: 3, course: "정기교육", targetGroup: "사무직 종사 근로자", eduName: "정기 안전보건교육", date: "2025/06/03", trainer: "홍길동", sitePhotos: ["/images/photo1.jpg", "/images/photo2.jpg"], eduMaterial: "", proof: "", manage: "" },
  { id: 2, course: "채용 시 교육", targetGroup: "일용근로자·계약 1주 이하 기간제근로자", eduName: "신규 채용 안전교육", date: "2025/06/14", trainer: "이은영", sitePhotos: ["/images/photo3.jpg"], eduMaterial: "", proof: "", manage: "" },
  { id: 1, course: "작업내용 변경 시 교육", targetGroup: "일용근로자·계약 1주 이하 기간제근로자", eduName: "작업 전 변경교육", date: "2025/07/01", trainer: "김도윤", sitePhotos: [], eduMaterial: "", proof: "", manage: "" }
]

// TBM
export const tbmListMockData: DataRow[] = [
  { id: 3, tbm: "기계장비 안전사용 교육", date: "2025/06/01", start: "15:30", end: "16:30", targetCount: 5, participantsCount: 3, leader: "이동현", sitePhotos: ["/images/photo1.jpg", "/images/photo2.jpg", "/images/photo3.jpg"], eduDate: "2025/06/01", eduTime: "15:30 ~ 16:30 (1시간)", targetText: "5명", participantsText: "3명" },
  { id: 2, tbm: "프레스 안전작동 교육", date: "2025/06/01", start: "10:00", end: "12:00", targetCount: 9, participantsCount: 7, leader: "이동현", sitePhotos: ["/images/photo2.jpg"], eduDate: "2025/06/01", eduTime: "10:00 ~ 12:00 (2시간)", targetText: "9명", participantsText: "7명" },
  { id: 1, tbm: "신규직원 안전입문 교육", date: "2025/06/01", start: "13:30", end: "15:00", targetCount: 8, participantsCount: 6, leader: "이동현", sitePhotos: [], eduDate: "2025/06/01", eduTime: "13:30 ~ 15:00 (1시간 30분)", targetText: "8명", participantsText: "6명" }
]

// NearMiss
export const nearMissMockData: DataRow[] = [
  { id: 3, danger: "지게차충돌", place: "산업현장", registrant: "홍길동", date: "2025/06/01", result: "미채택", reason: "기존 대책으로 충분하여 개선 효과 미미", sitePhotos: ["/images/photo1.jpg", "/images/photo2.jpg"], manage: "" },
  { id: 2, danger: "감전", place: "지하1층 전기실", registrant: "홍길동", date: "2025/06/01", result: "미채택", reason: "장비 교체가 선행되어야 개선 가능", sitePhotos: ["/images/photo3.jpg"], manage: "" },
  { id: 1, danger: "추락", place: "지하3층 전기실", registrant: "홍길동", date: "2025/06/01", result: "미채택", reason: "우선순위가 높은 과제가 존재함", sitePhotos: [], manage: "" }
]

export const safeVoiceMockData: DataRow[] = [
  { id: 3, content: "기계실 바닥 미끄러워 미끄럼 방지 매트 필요", registrant: "김근로", date: "2025/06/01", status: "미조치", reason: "매트 재고 확보 필요", sitePhotos: ["/images/photo1.jpg", "/images/photo2.jpg"] },
  { id: 2, content: "출입구 비상연락처 QR 부착 요청", registrant: "익명", date: "2025/06/01", status: "미조치", reason: "관리자 승인 대기", sitePhotos: ["/images/photo3.jpg"] },
  { id: 1, content: "고소 작업 난간 간격 개선 요청", registrant: "익명", date: "2025/06/01", status: "미조치", reason: "현장 조사 예정", sitePhotos: [] }
]

// Asset
export const assetMachineMockData: DataRow[] = [
  { id: 10, name: "슬러지펌프(PM-1-0080)", capacity: "500L/min", quantity: 1, location: "폐수처리장", inspectionCycle: "1년", inspectionDate: "2025/03/15", purpose: "슬러지 이동" },
  { id: 9, name: "호이스트(H-5-3300)", capacity: "2ton", quantity: 2, location: "생산동", inspectionCycle: "6개월", inspectionDate: "2025/05/01", purpose: "중량물 인양" },
  { id: 8, name: "로더(LD-2-0012)", capacity: "1.5ton", quantity: 1, location: "A공장", inspectionCycle: "1년", inspectionDate: "2025/02/10", purpose: "원자재 공급" },
  { id: 7, name: "집진기(D-3-9000)", capacity: "1500m³/h", quantity: 1, location: "가공동", inspectionCycle: "1년", inspectionDate: "2025/03/02", purpose: "분진 제거" },
  { id: 6, name: "지게차(F-1-7000)", capacity: "3ton", quantity: 2, location: "물류창고", inspectionCycle: "6개월", inspectionDate: "2025/04/05", purpose: "제품 운반" },
  { id: 5, name: "용접기(W-2-1100)", capacity: "220V", quantity: 3, location: "제작동", inspectionCycle: "3개월", inspectionDate: "2025/02/18", purpose: "금속 용접" },
  { id: 4, name: "리프트(L-4-0030)", capacity: "500kg", quantity: 1, location: "창고1", inspectionCycle: "1년", inspectionDate: "2025/01/12", purpose: "자재 이동" },
  { id: 3, name: "컨베이어(C-2-1000)", capacity: "150m/min", quantity: 1, location: "C공장", inspectionCycle: "6개월", inspectionDate: "2025/05/20", purpose: "제품 운반" },
  { id: 2, name: "CNC밀링(M-3-2000)", capacity: "2ton", quantity: 2, location: "B공장", inspectionCycle: "1년", inspectionDate: "2025/03/30", purpose: "정밀 부품 가공" },
  { id: 1, name: "프레스(P-1-0001)", capacity: "5ton", quantity: 2, location: "A공장", inspectionCycle: "3개월", inspectionDate: "2025/06/01", purpose: "금속 판재 가공용" }
]

export const assetHazardMockData: DataRow[] = [
  { id: 3, chemicalName: "톨루엔", casNo: "108-88-3", exposureLimit: "50 ppm", dailyUsage: "10 kg", storageAmount: "700 L", registrationDate: "2025/05/20", msds: "", manage: "" },
  { id: 2, chemicalName: "벤젠", casNo: "71-43-2", exposureLimit: "1 ppm", dailyUsage: "1.2 L", storageAmount: "0.7 t", registrationDate: "2025/03/30", msds: "", manage: "" },
  { id: 1, chemicalName: "메틸알코올", casNo: "67-56-1", exposureLimit: "200 ppm", dailyUsage: "25 L", storageAmount: "1 m³", registrationDate: "2025/06/01", msds: "", manage: "" }
]

// Supply Chain
export const partnersMockData: DataRow[] = [
  { id: 3, company: "B건설안전", contractPeriod: "2025-01-10 ~ 2025-12-31", manager: "김영희", contact: "010-1234-5678", planFile: "", etcFile: "", manage: "" },
  { id: 2, company: "E하역", contractPeriod: "2025-02-01 ~ 2025-08-31", manager: "이안전", contact: "010-2345-6789", planFile: "", etcFile: "", manage: "" },
  { id: 1, company: "G하역", contractPeriod: "2025-03-15 ~ 2025-09-14", manager: "박민수", contact: "010-3333-1230", planFile: "", etcFile: "", manage: "" }
]

export const evaluationMockData: DataRow[] = [
  { id: 3, company: "테스트 주식회사", evaluationName: "테스트 주식회사 안전보건수준 선정평가", evaluationType: "선정평가", contractPeriod: "2025-01-01 ~ 2025-12-31", evaluator: "김민수", externalEvaluator: "국가기술안전원", evaluationFile: "", attachmentFile: "" },
  { id: 2, company: "굴착기회사", evaluationName: "굴착기회사 안전보건수준 재평가", evaluationType: "재평가", contractPeriod: "2024-07-01 ~ 2025-06-30", evaluator: "이현주", externalEvaluator: "한국산업안전협회", evaluationFile: "", attachmentFile: "" },
  { id: 1, company: "ABC 협의체", evaluationName: "ABC 협의체 안전보건수준 신규평가", evaluationType: "신규평가", contractPeriod: "2025-04-01 ~ 2026-03-31", evaluator: "박성호", externalEvaluator: "서울안전기술(주)", evaluationFile: "", attachmentFile: "" }
]

export const committeeMockData: DataRow[] = [
  { id: 5, completionDate: "2025-06-22 10:00~11:30", meetingPlace: "본사 대회의실", sitePhotos: ["/images/photo1.jpg"], proof: "", manage: "" },
  { id: 4, completionDate: "2025-06-18 14:00~15:00", meetingPlace: "A공장 회의실", sitePhotos: ["/images/photo2.jpg", "/images/photo3.jpg"], proof: "", manage: "" },
  { id: 3, completionDate: "2025-06-10 13:00~15:00", meetingPlace: "본사 소회의실", sitePhotos: ["/images/photo11.jpg"], proof: "", manage: "" },
  { id: 2, completionDate: "2025-05-28 09:00~10:30", meetingPlace: "C동 회의실", sitePhotos: [], proof: "", manage: "" },
  { id: 1, completionDate: "2025-05-12 16:00~17:00", meetingPlace: "B공장 상황실", sitePhotos: ["/images/site1.jpg"], proof: "", manage: "" }
]

export const siteAuditMockData: DataRow[] = [
  { id: 3, inspectionDate: "2025-01-10", inspectionType: "합동점검", inspectionName: "비상구 개폐 상태 확인", inspectionResult: "이상없음", note: "-", inspector: "박점검", sitePhotos: ["/images/photo11.jpg"], fileAttach: "", manage: "" },
  { id: 2, inspectionDate: "2025-02-01", inspectionType: "일반점검", inspectionName: "이동식 사다리 고정 상태 점검", inspectionResult: "시정조치 완료", note: "나사 조임/고정 브래킷 교체 완료", inspector: "이점검", sitePhotos: [], fileAttach: "", manage: "" },
  { id: 1, inspectionDate: "2025-03-15", inspectionType: "특별점검", inspectionName: "화학물질 보관 용기 누수 여부 확인", inspectionResult: "중대 위험요인", note: "누수 용기 즉시 교체/바닥 세척 및 방수 처리", inspector: "최안전", sitePhotos: [], fileAttach: "", manage: "" }
]

export const trainingMockData: DataRow[] = [
  { id: 6, name: "협의체 F", riskAssessment: { text: "완료", color: "gray" }, hazardousMaterial: { text: "미완료", color: "red" }, responseManual: { text: "미완료", color: "red" }, allSigned: { text: "완료", color: "gray" }, updatedAt: "2025-07-10" },
  { id: 5, name: "협의체 E", riskAssessment: { text: "미완료", color: "red" }, hazardousMaterial: { text: "완료", color: "gray" }, responseManual: { text: "완료", color: "gray" }, allSigned: { text: "미완료", color: "red" }, updatedAt: "2025-07-15" },
  { id: 4, name: "협의체 D", riskAssessment: { text: "완료", color: "gray" }, hazardousMaterial: { text: "완료", color: "gray" }, responseManual: { text: "미완료", color: "red" }, allSigned: { text: "완료", color: "gray" }, updatedAt: "2025-07-18" },
  { id: 3, name: "협의체 C", riskAssessment: { text: "미완료", color: "red" }, hazardousMaterial: { text: "미완료", color: "red" }, responseManual: { text: "미완료", color: "red" }, allSigned: { text: "미완료", color: "red" }, updatedAt: null },
  { id: 2, name: "협의체 B", riskAssessment: { text: "완료", color: "gray" }, hazardousMaterial: { text: "미완료", color: "red" }, responseManual: { text: "완료", color: "gray" }, allSigned: { text: "미완료", color: "red" }, updatedAt: "2025-07-20" },
  { id: 1, name: "협의체 A", riskAssessment: { text: "완료", color: "gray" }, hazardousMaterial: { text: "완료", color: "gray" }, responseManual: { text: "완료", color: "gray" }, allSigned: { text: "완료", color: "gray" }, updatedAt: "2025-07-22" }
]

// Notice
export const noticeMockData: DataRow[] = [
  { id: 3, title: "[중대재해처벌법] 개정 시행령 반영사항 및 대응 가이드 안내", author: "이안전", date: "2025-05-30", views: 123, fileAttach: true },
  { id: 2, title: "[중처법 교육] 관리자 대상 온라인 안전교육 신청 안내", author: "이안전", date: "2025-05-19", views: 365, fileAttach: true },
  { id: 1, title: "[알림] 위험성평가 데이터 연동 시스템 정기 점검 안내 (7월 1일)", author: "박관리", date: "2025-05-11", views: 199, fileAttach: false }
]

export const resourcesMockData: DataRow[] = [
  { id: 3, title: "중대재해 예방조치 이행점검 서식", author: "이안전", date: "2025-05-30", fileAttach: true },
  { id: 2, title: "중대재해 예방관리계획 수립 및 자체점검 결과보고서 서식", author: "이안전", date: "2025-05-19", fileAttach: true },
  { id: 1, title: "도급·용역·위탁 협력업체 유해·위험요인 평가 확인서 서식", author: "박관리", date: "2025-05-11", fileAttach: true }
]

export const lawMockData: DataRow[] = [
  { id: 3, title: "『중대재해 처벌 등에 관한 법률 시행령』 일부개정령안 행정예고", organization: "고용노동부", date: "2025-06-28", fileAttach: false },
  { id: 2, title: "『중대재해 처벌법』 개정법률 공포 (2025.06.21 시행)", organization: "안전보건공단", date: "2025-06-21", fileAttach: true },
  { id: 1, title: "중대산업재해 발생 시 보고 및 조치 매뉴얼(제5차 개정판)", organization: "안전보건공단", date: "2025-06-19", fileAttach: false }
]

// Approval
export const receivedApprovalMockData: DataRow[] = [
  { id: 3, date: "2025-05-11", type: "위험요인개선", content: "유해·위험요인 개선계획 결재 요청", drafter: "박근로", status: { text: "결재대기", color: "orange" }, sign: "done" },
  { id: 2, date: "2025-05-19", type: "점검계획서", content: "정기 자체점검 계획 결재 요청", drafter: "박안전", status: { text: "결재대기", color: "orange" }, sign: "pending" },
  { id: 1, date: "2025-05-30", type: "예산계획서", content: "안전보건 예산 및 인력계획 결재 요청", drafter: "박관리", status: { text: "결재완료", color: "gray" }, sign: "pending" }
]

export const sentApprovalMockData: DataRow[] = [
  { id: 3, date: "2025-05-11", document: "안전보건 예산 및 인력확보 계획서", status: { text: "결재대기", color: "green" }, progress: "0/3", finalApprover: "김관리" },
  { id: 2, date: "2025-05-19", document: "자체점검 계획서", status: { text: "결재완료", color: "blue" }, progress: "3/3", finalApprover: "이대표" },
  { id: 1, date: "2025-05-30", document: "안전보건관리체계 구축계획서", status: { text: "결재대기", color: "green" }, progress: "1/3", finalApprover: "최관리" }
]

// Business
export const basicManagementMockData: DataRow[] = [
  { id: 2, factory: "부산물류센터", manager: "이영희", contact: "051-987-6543", address: "부산광역시 해운대구 좌동 789-10" },
  { id: 1, factory: "서울제조공장", manager: "김철수", contact: "010-1234-5678", address: "경기도 고양시 일산동구 장항동 112-23" }
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
  { id: 5, year: "2025", itemName: "현장 순찰 보안 강화", category: "주간 및 야간 순찰 보안 점검 강화", budget: "15000000", spent: "5000000", remaining: "10000000", carryOver: false, attachment: null, author: "정안전", entryDate: "" },
  { id: 4, year: "2025", itemName: "화학물질 취급 교육", category: "유해물질 안전취급 절차 심화교육", budget: "20000000", spent: "8000000", remaining: "12000000", carryOver: false, attachment: null, author: "최장비", entryDate: "" },
  { id: 3, year: "2025", itemName: "비상대응 시나리오 훈련", category: "전사 비상대응 매뉴얼 체계적 훈련", budget: "25000000", spent: "10000000", remaining: "15000000", carryOver: false, attachment: null, author: "박교육", entryDate: "" },
  { id: 2, year: "2025", itemName: "고소작업 장비 점검", category: "안전대 및 보호장비 정기점검 실시", budget: "30000000", spent: "15000000", remaining: "15000000", carryOver: false, attachment: null, author: "이설비", entryDate: "" },
  { id: 1, year: "2025", itemName: "밀폐공간 진입 안전교육", category: "작업 전 밀폐공간 위험요인 교육", budget: "50000000", spent: "20000000", remaining: "30000000", carryOver: false, attachment: null, author: "김안전", entryDate: "" }
]

export const organizationMockData: DataRow[] = [
  { id: 7, name: "이영수", safetyPosition: "관리감독자", department: "품질관리팀", position: "반장", phone: "010-5555-6666", entryDate: "2021-03-18", assignDate: "2021-04-01" },
  { id: 6, name: "조반장", safetyPosition: "관리감독자", department: "생산2팀", position: "반장", phone: "010-3333-4444", entryDate: "2022-06-12", assignDate: "2022-07-01" },
  { id: 5, name: "김반장", safetyPosition: "관리감독자", department: "생산1팀", position: "반장", phone: "010-1111-2222", entryDate: "2023-01-15", assignDate: "2023-02-01" },
  { id: 4, name: "이보건", safetyPosition: "보건관리자", department: "보건팀", position: "주임", phone: "010-5555-4321", entryDate: "2019-11-20", assignDate: "2019-12-10" },
  { id: 3, name: "박안전", safetyPosition: "안전관리자", department: "안전관리팀", position: "과장", phone: "010-8888-1234", entryDate: "2020-08-15", assignDate: "2020-09-01" },
  { id: 2, name: "최책임", safetyPosition: "안전보건관리책임자", department: "생산관리팀", position: "부장", phone: "010-3333-7777", entryDate: "2021-05-10", assignDate: "2022-03-10" },
  { id: 1, name: "박대표", safetyPosition: "경영책임자", department: "경영지원팀", position: "대표이사", phone: "010-1234-5678", entryDate: "-", assignDate: "2022-01-10" }
]

// Safety Work Permit
export const safetyWorkPermitMockData: DataRow[] = [
  { id: 3, workType: "밀폐공간 진입", workerCount: "6명", hazardLevel: "높음", workPeriod: "2025-06-04 ~ 2025-06-05", registrationDate: "2025-05-30", approvalStatus: { text: "완료", color: "blue" }, attachment: "", manage: "" },
  { id: 2, workType: "크레인 운전", workerCount: "2명", hazardLevel: "중간", workPeriod: "2025-06-03 ~ 2025-06-07", registrationDate: "2025-05-30", approvalStatus: { text: "완료", color: "blue" }, attachment: "", manage: "" },
  { id: 1, workType: "용접", workerCount: "3명", hazardLevel: "높음", workPeriod: "2025-06-01 ~ 2025-06-02", registrationDate: "2025-05-30", approvalStatus: { text: "미완료", color: "red" }, attachment: "", manage: "" }
]

// QR Management
export const qrManagementMockData = [
  { id: 5, qrName: "근로자 앱 사용 가이드 QR", link: "근로자용 사용법 안내", useStatus: true },
  { id: 4, qrName: "관리자 사용 가이드 QR", link: "관리자용 사용 설명서", useStatus: true },
  { id: 3, qrName: "종사자 의견청취 QR", link: "설문/건의 등 의견 수렴 폼 링크", useStatus: true },
  { id: 2, qrName: "관리자 페이지 접속 QR", link: "관리자용 웹페이지 링크", useStatus: true },
  { id: 1, qrName: "근로자 앱 설치 QR", link: "안드로이드/iOS 다운로드 링크", useStatus: true }
]

// Response Manual
export const responseManualMockData: DataRow[] = [
  { id: 3, title: "(산업안전) 2025년 산업안전보건법령의 요지", author: "김작성", date: "2025-05-30", views: 25, fileAttach: true },
  { id: 2, title: "(중대재해) 중대산업재해 등 사고 대비·대응 매뉴얼(2025)", author: "김작성", date: "2025-05-30", views: 234, fileAttach: true },
  { id: 1, title: "(산업안전) 2025년 산업안전보건법령의 요지", author: "김작성", date: "2025-05-30", views: 860, fileAttach: true }
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