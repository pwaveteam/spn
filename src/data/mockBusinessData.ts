import { DataRow } from "@/components/common/tables/DataTable"
import { OrgNode } from "@/components/snippetBusiness/OrganizationTree"
import { InspectionItem } from "@/components/snippetBusiness/InspectionTable"
import { BudgetItem } from "@/components/snippetBusiness/BudgetTable"

export const approvalLineMockData: DataRow[] = [
  { id: 1, name: "일반결재", steps: "2단계", approvers: "관리감독자 → 안전관리자", createdAt: "2025-11-01" },
  { id: 2, name: "긴급결재", steps: "2단계", approvers: "안전관리자 → 경영책임자", createdAt: "2025-11-01" },
  { id: 3, name: "교육결재", steps: "3단계", approvers: "관리감독자 → 안전관리자 → 안전보건관리책임자", createdAt: "2025-11-01" },
  { id: 4, name: "안전작업허가", steps: "4단계", approvers: "관리감독자 → 안전관리자 → 보건관리자 → 안전보건관리책임자", createdAt: "2025-11-01" },
  { id: 5, name: "경영보고", steps: "4단계", approvers: "안전관리자 → 보건관리자 → 안전보건관리책임자 → 경영책임자", createdAt: "2025-11-01" },
  { id: 6, name: "전체결재", steps: "5단계", approvers: "관리감독자 → 안전관리자 → 보건관리자 → 안전보건관리책임자 → 경영책임자", createdAt: "2025-11-01" }
]

export interface DocumentApprovalSetting {
  id: number
  approvalType: string
  useApproval: boolean
  approvalLineId: number | null
}

export const documentApprovalSettingsMockData: DocumentApprovalSetting[] = [
  { id: 1, approvalType: "위험작업허가서", useApproval: true, approvalLineId: 3 },
  { id: 2, approvalType: "작업위험분석(JSA)", useApproval: true, approvalLineId: 3 },
  { id: 3, approvalType: "현장 위험성평가", useApproval: true, approvalLineId: 3 },
  { id: 4, approvalType: "TBM(PTW)", useApproval: false, approvalLineId: null },
  { id: 5, approvalType: "위험성평가", useApproval: true, approvalLineId: 1 },
  { id: 6, approvalType: "안전보건교육", useApproval: true, approvalLineId: 4 },
  { id: 7, approvalType: "안전점검", useApproval: true, approvalLineId: 1 },
  { id: 8, approvalType: "위험기계/기구/설비", useApproval: true, approvalLineId: 1 },
  { id: 9, approvalType: "유해/위험물질", useApproval: true, approvalLineId: 1 },
  { id: 10, approvalType: "아차사고", useApproval: false, approvalLineId: null },
  { id: 11, approvalType: "안전보이스", useApproval: false, approvalLineId: null },
  { id: 12, approvalType: "작업중지요청서", useApproval: true, approvalLineId: 3 },
  { id: 13, approvalType: "경영방침", useApproval: true, approvalLineId: 1 },
  { id: 14, approvalType: "안전보건 목표 및 추진계획", useApproval: true, approvalLineId: 1 },
  { id: 15, approvalType: "안전보건예산", useApproval: true, approvalLineId: 1 }
]

export const orgTreeMockData: OrgNode[] = [
  {
    id: "1", title: "경영책임자", name: "박대표", position: "대표이사",
    children: [
      {
        id: "2", title: "안전보건관리책임자", name: "최책임", position: "부장",
        children: [
          { id: "3", title: "안전관리자", name: "박안전", position: "과장" },
          { id: "4", title: "보건관리자", name: "이보건", position: "주임" }
        ]
      }
    ]
  }
]

export const supervisorNodesMockData: OrgNode[] = [
  { id: "5", title: "관리감독자", name: "김반장", position: "반장" },
  { id: "6", title: "관리감독자", name: "조반장", position: "반장" },
  { id: "7", title: "관리감독자", name: "최반장", position: "반장" }
]

export const inspectionItemsMockData: InspectionItem[] = [
  { id: 1, detailPlan: "정기 위험성평가", q1: true, q2: false, q3: false, q4: false, KPI: "1회/년 이상", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 2, detailPlan: "수시 위험성평가", q1: false, q2: false, q3: false, q4: false, KPI: "수시", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 3, detailPlan: "고위험 개선", q1: false, q2: false, q3: false, q4: false, KPI: "개선이행 100%", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 4, detailPlan: "아차사고수집", q1: false, q2: false, q3: false, q4: false, KPI: "1건/월/인당", department: "안전", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 5, detailPlan: "안전보건교육(정기)", q1: false, q2: false, q3: false, q4: false, KPI: "12시간/반기", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 6, detailPlan: "안전보건교육(관리감독자)", q1: false, q2: false, q3: false, q4: false, KPI: "16시간/반기", department: "안전", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 7, detailPlan: "안전보건교육(특별안전교육)", q1: false, q2: false, q3: false, q4: false, KPI: "16시간/반기(크레인,유해물질취급자)", department: "안전", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 8, detailPlan: "안전보건교육(신규채용시)", q1: false, q2: false, q3: false, q4: false, KPI: "8시간/년간(채용시)", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 9, detailPlan: "안전보건교육(MSDS)", q1: false, q2: false, q3: false, q4: false, KPI: "2시간/년간(유해물질취급자)", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 10, detailPlan: "산업안전보건위원회", q1: false, q2: false, q3: false, q4: false, KPI: "1회/분기", department: "안전", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 11, detailPlan: "소방시설 정기점검", q1: false, q2: false, q3: false, q4: false, KPI: "1회/월", department: "안전", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 12, detailPlan: "합동안전점검", q1: false, q2: false, q3: false, q4: false, KPI: "1회/월", department: "안전", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 13, detailPlan: "일반 건강검진", q1: false, q2: false, q3: false, q4: false, KPI: "관리직1회/2년, 현장직1회/1년", department: "안전", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 14, detailPlan: "특수 건강검진", q1: false, q2: false, q3: false, q4: false, KPI: "1회/년(현장직1회/년)", department: "안전", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 15, detailPlan: "배치전 건강검진", q1: false, q2: false, q3: false, q4: false, KPI: "해당시", department: "안전", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 16, detailPlan: "비상조치훈련", q1: false, q2: false, q3: false, q4: false, KPI: "1회/분기(화재, 누출, 대피, 구조)", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 17, detailPlan: "작업허가서 발부", q1: false, q2: false, q3: false, q4: false, KPI: "단위 작업별", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 18, detailPlan: "TBM 실시", q1: false, q2: false, q3: false, q4: false, KPI: "단위 작업별", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 19, detailPlan: "안전관리제도 운영", q1: false, q2: false, q3: false, q4: false, KPI: "1건/월/인당", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 20, detailPlan: "안전보건 예산 집행", q1: false, q2: false, q3: false, q4: false, KPI: "수립예산 이행", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 21, detailPlan: "성과측정 및 모니터링", q1: false, q2: false, q3: false, q4: false, KPI: "1회/반기", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" },
  { id: 22, detailPlan: "시정조치 이행", q1: false, q2: false, q3: false, q4: false, KPI: "수시", department: "전부서", achievementRate: "", resultRemark: "", entryDate: "" }
]

export const budgetItemsMockData: BudgetItem[] = [
  { id: 1, year: "2025", itemName: "밀폐공간 진입 안전교육", category: "작업 전 밀폐공간 위험요인 교육", budget: "50000000", spent: "20000000", remaining: "30000000", carryOver: false, attachment: null, author: "김안전", entryDate: "" },
  { id: 2, year: "2025", itemName: "고소작업 장비 점검", category: "안전대 및 보호장비 정기점검 실시", budget: "30000000", spent: "15000000", remaining: "15000000", carryOver: false, attachment: null, author: "이설비", entryDate: "" },
  { id: 3, year: "2025", itemName: "비상대응 시나리오 훈련", category: "전사 비상대응 매뉴얼 체계적 훈련", budget: "25000000", spent: "10000000", remaining: "15000000", carryOver: false, attachment: null, author: "박교육", entryDate: "" },
  { id: 4, year: "2025", itemName: "화학물질 취급 교육", category: "유해물질 안전취급 절차 심화교육", budget: "20000000", spent: "8000000", remaining: "12000000", carryOver: false, attachment: null, author: "최장비", entryDate: "" },
  { id: 5, year: "2025", itemName: "현장 순찰 보안 강화", category: "주간 및 야간 순찰 보안 점검 강화", budget: "15000000", spent: "5000000", remaining: "10000000", carryOver: false, attachment: null, author: "정안전", entryDate: "" }
]

export const basicManagementMockData: DataRow[] = [
  { id: 1, factory: "부산물류센터", manager: "이영희", contact: "051-987-6543", address: "부산광역시 해운대구 좌동 789-10" },
  { id: 2, factory: "당진 슬래그공장", manager: "홍길동", contact: "041-987-6543", address: "충청남도 당진시 송악읍 고대공단2길 220" },
  { id: 3, factory: "포항제철소 슬래그 공장", manager: "최관리", contact: "054-123-4567", address: "경상북도 포항시 남구 동해안로 6213" }
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

export const organizationMockData: DataRow[] = [
  { id: 1, name: "박대표", safetyPosition: "경영책임자", department: "경영지원팀", position: "대표이사", phone: "010-1234-5678", entryDate: "-", assignDate: "2022-01-10" },
  { id: 2, name: "최책임", safetyPosition: "안전보건관리책임자", department: "생산관리팀", position: "부장", phone: "010-3333-7777", entryDate: "2025-05-10", assignDate: "2022-03-10" },
  { id: 3, name: "박안전", safetyPosition: "안전관리자", department: "안전관리팀", position: "과장", phone: "010-8888-1234", entryDate: "2025-08-15", assignDate: "2020-09-01" },
  { id: 4, name: "이보건", safetyPosition: "보건관리자", department: "보건팀", position: "주임", phone: "010-5555-4321", entryDate: "2025-11-20", assignDate: "2019-12-10" },
  { id: 5, name: "김반장", safetyPosition: "관리감독자", department: "생산1팀", position: "반장", phone: "010-1111-2222", entryDate: "2025-01-15", assignDate: "2023-02-01" },
  { id: 6, name: "조반장", safetyPosition: "관리감독자", department: "생산2팀", position: "반장", phone: "010-3333-4444", entryDate: "2025-06-12", assignDate: "2022-07-01" },
  { id: 7, name: "이영수", safetyPosition: "관리감독자", department: "설비보전팀", position: "반장", phone: "010-5555-6666", entryDate: "2025-03-18", assignDate: "2021-04-01" }
]

export const educationCertificateMockData: DataRow[] = [
  { id: 1, name: "홍길동", phone: "010-1234-5678", submitDate: "2025-11-20(목)", eduName: "신규채용자 교육", eduDate: "2025-11-15(토)", certificate: "certificate_1.pdf", confirm: { text: "확인", color: "blue" } },
  { id: 2, name: "김철수", phone: "010-2345-6789", submitDate: "2025-12-05(금)", eduName: "관리감독자 교육 (4분기)", eduDate: "2025-12-01(월)", certificate: "certificate_2.pdf", confirm: { text: "확인", color: "blue" } },
  { id: 3, name: "이영희", phone: "010-3456-7890", submitDate: "2025-11-01(토)", eduName: "유압 설비 특별 교육", eduDate: "2025-10-28(화)", certificate: "", confirm: { text: "미확인", color: "red" } },
  { id: 4, name: "최안전", phone: "010-4444-5555", submitDate: "2025-12-10(화)", eduName: "밀폐공간 작업 특별 교육", eduDate: "2025-12-08(월)", certificate: "certificate_4.pdf", confirm: { text: "확인", color: "blue" } },
  { id: 5, name: "박현장", phone: "010-5555-6666", submitDate: "2025-10-25(토)", eduName: "화기 작업 특별 교육", eduDate: "2025-10-20(월)", certificate: "certificate_5.pdf", confirm: { text: "확인", color: "blue" } }
]

export const budgetMockData: DataRow[] = [
  { id: 1, year: "2026", itemName: "슬래그 밀 정비 특화 안전 장비 구입", category: "밀폐/고소 작업 안전 장비 확보", budget: "50000000", spent: "3000000", remaining: "47000000", carryOver: true, attachment: "장비목록.pdf", author: "김안전", entryDate: "2025-12-01" },
  { id: 2, year: "2025", itemName: "유압 설비 안전 진단 용역", category: "유압 라인 및 어큐뮬레이터 정기 점검", budget: "30000000", spent: "28000000", remaining: "2000000", carryOver: false, attachment: "용역계약서.pdf", author: "이설비", entryDate: "2025-01-15" },
  { id: 3, year: "2025", itemName: "중대재해 비상 대응 훈련 (4분기)", category: "가상 시나리오 기반 전사 훈련", budget: "25000000", spent: "25000000", remaining: "0", carryOver: false, attachment: "훈련보고서.pdf", author: "박교육", entryDate: "2025-10-01" },
  { id: 4, year: "2026", itemName: "위험 작업 허가 시스템 개발 및 유지보수", category: "PTW/JSA 전산화 시스템 구축", budget: "60000000", spent: "0", remaining: "60000000", carryOver: true, attachment: "개발계획.pdf", author: "최장비", entryDate: "2025-12-15" },
  { id: 5, year: "2025", itemName: "협력업체 안전보건 컨설팅 비용", category: "협력업체 위험성평가 및 교육 지원", budget: "15000000", spent: "15000000", remaining: "0", carryOver: false, attachment: "컨설팅계약.pdf", author: "정안전", entryDate: "2025-03-20" }
]
