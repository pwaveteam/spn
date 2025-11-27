import React, { useEffect, useState } from "react"
import { ShieldCheckIcon, FlagIcon } from "@heroicons/react/24/solid"

// PolicyGoal.tsx에서 가져온 경영방침 데이터
const policyData = {
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

// Budget.tsx에서 가져온 안전보건목표 데이터
const inspectionData = [
  { id: 1, detailPlan: "정기 위험성평가", q1: true, q2: false, q3: false, q4: false, KPI: "1회/년 이상", department: "전부서" },
  { id: 2, detailPlan: "수시 위험성평가", q1: false, q2: false, q3: false, q4: false, KPI: "수시", department: "전부서" },
  { id: 3, detailPlan: "고위험 개선", q1: false, q2: false, q3: false, q4: false, KPI: "개선이행 100%", department: "전부서" },
  { id: 4, detailPlan: "아차사고수집", q1: false, q2: false, q3: false, q4: false, KPI: "1건/월/인당", department: "안전" },
  { id: 5, detailPlan: "안전보건교육(정기)", q1: false, q2: false, q3: false, q4: false, KPI: "12시간/반기", department: "전부서" },
  { id: 6, detailPlan: "안전보건교육(관리감독자)", q1: false, q2: false, q3: false, q4: false, KPI: "16시간/반기", department: "안전" },
  { id: 7, detailPlan: "안전보건교육(특별안전교육)", q1: false, q2: false, q3: false, q4: false, KPI: "16시간/반기(크레인,유해물질취급자)", department: "안전" },
  { id: 8, detailPlan: "안전보건교육(신규채용시)", q1: false, q2: false, q3: false, q4: false, KPI: "8시간/년간(채용시)", department: "전부서" },
  { id: 9, detailPlan: "안전보건교육(MSDS)", q1: false, q2: false, q3: false, q4: false, KPI: "2시간/년간(유해물질취급자)", department: "전부서" },
  { id: 10, detailPlan: "산업안전보건위원회", q1: false, q2: false, q3: false, q4: false, KPI: "1회/분기", department: "안전" },
  { id: 11, detailPlan: "소방시설 정기점검", q1: false, q2: false, q3: false, q4: false, KPI: "1회/월", department: "안전" },
  { id: 12, detailPlan: "합동안전점검", q1: false, q2: false, q3: false, q4: false, KPI: "1회/월", department: "안전" },
  { id: 13, detailPlan: "일반 건강검진", q1: false, q2: false, q3: false, q4: false, KPI: "관리직1회/2년, 현장직1회/1년", department: "안전" },
  { id: 14, detailPlan: "특수 건강검진", q1: false, q2: false, q3: false, q4: false, KPI: "1회/년(현장직1회/년)", department: "안전" },
  { id: 15, detailPlan: "배치전 건강검진", q1: false, q2: false, q3: false, q4: false, KPI: "해당시", department: "안전" },
  { id: 16, detailPlan: "비상조치훈련", q1: false, q2: false, q3: false, q4: false, KPI: "1회/분기(화재, 누출, 대피, 구조)", department: "전부서" },
  { id: 17, detailPlan: "작업허가서 발부", q1: false, q2: false, q3: false, q4: false, KPI: "단위 작업별", department: "전부서" },
  { id: 18, detailPlan: "TBM 실시", q1: false, q2: false, q3: false, q4: false, KPI: "단위 작업별", department: "전부서" },
  { id: 19, detailPlan: "안전관리제도 운영", q1: false, q2: false, q3: false, q4: false, KPI: "1건/월/인당", department: "전부서" },
  { id: 20, detailPlan: "안전보건 예산 집행", q1: false, q2: false, q3: false, q4: false, KPI: "수립예산 이행", department: "전부서" },
  { id: 21, detailPlan: "성과측정 및 모니터링", q1: false, q2: false, q3: false, q4: false, KPI: "1회/반기", department: "전부서" },
  { id: 22, detailPlan: "시정조치 이행", q1: false, q2: false, q3: false, q4: false, KPI: "수시", department: "전부서" }
]

type Policy = {
  id: number
  title: string
  btnText: string
  content: React.ReactNode
}

const policies: Policy[] = [
  {
    id: 1,
    title: "안전보건경영방침",
    btnText: "안전보건경영방침",
    content: (
      <div className="mt-6 space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-semibold text-gray-600">연도</span>
              <p className="mt-1 text-base font-medium text-gray-900">{policyData.year}</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-600">방침목표명</span>
              <p className="mt-1 text-base font-medium text-gray-900">{policyData.goalTitle}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-3">내용</h3>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="whitespace-pre-wrap text-left leading-relaxed text-sm md:text-base text-gray-700" style={{ lineHeight: 1.8 }}>
              {policyData.content}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "안전보건목표",
    btnText: "안전보건목표",
    content: (
      <div className="mt-6">
        <div className="mb-4">
          <p className="text-sm text-gray-600">총 {inspectionData.length}건의 목표 및 추진계획</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-3 py-2 text-xs md:text-sm font-semibold text-gray-700 text-center">No</th>
                <th className="border border-gray-300 px-3 py-2 text-xs md:text-sm font-semibold text-gray-700 text-center min-w-[180px]">세부추진계획</th>
                <th className="border border-gray-300 px-3 py-2 text-xs md:text-sm font-semibold text-gray-700 text-center">1분기</th>
                <th className="border border-gray-300 px-3 py-2 text-xs md:text-sm font-semibold text-gray-700 text-center">2분기</th>
                <th className="border border-gray-300 px-3 py-2 text-xs md:text-sm font-semibold text-gray-700 text-center">3분기</th>
                <th className="border border-gray-300 px-3 py-2 text-xs md:text-sm font-semibold text-gray-700 text-center">4분기</th>
                <th className="border border-gray-300 px-3 py-2 text-xs md:text-sm font-semibold text-gray-700 text-center min-w-[150px]">성과지표(KPI)</th>
                <th className="border border-gray-300 px-3 py-2 text-xs md:text-sm font-semibold text-gray-700 text-center">담당부서</th>
              </tr>
            </thead>
            <tbody>
              {inspectionData.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-3 py-2 text-xs md:text-sm text-gray-700 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-3 py-2 text-xs md:text-sm text-gray-700">{item.detailPlan}</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {item.q1 ? (
                      <svg className="w-4 h-4 md:w-5 md:h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20" style={{ color: "var(--secondary)" }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-gray-300">-</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {item.q2 ? (
                      <svg className="w-4 h-4 md:w-5 md:h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20" style={{ color: "var(--secondary)" }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-gray-300">-</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {item.q3 ? (
                      <svg className="w-4 h-4 md:w-5 md:h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20" style={{ color: "var(--secondary)" }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-gray-300">-</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {item.q4 ? (
                      <svg className="w-4 h-4 md:w-5 md:h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20" style={{ color: "var(--secondary)" }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-gray-300">-</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-xs md:text-sm text-gray-700">{item.KPI}</td>
                  <td className="border border-gray-300 px-3 py-2 text-xs md:text-sm text-gray-700 text-center">{item.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
]

const DashboardPolicy: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Policy | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 767)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const openDialog = (p: Policy) => {
    setSelected(p)
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
    setSelected(null)
  }

  const IconFor = (id: number) => (id === 1 ? ShieldCheckIcon : FlagIcon)

  return (
    <>
      {isMobile ? (
        <div className="flex gap-3">
          {policies.map(p => (
            <button
              key={p.id}
              className="flex-1 inline-flex items-center justify-center text-sm font-medium rounded-lg h-[50px] px-4 bg-[#031E36] text-white hover:bg-black transition-colors"
              onClick={() => openDialog(p)}
              type="button"
            >
              {p.btnText}
            </button>
          ))}
        </div>
      ) : (
        policies.map(p => {
          const Icon = IconFor(p.id)
          return (
            <article
              key={p.id}
              className="rounded-[16px] bg-white shadow-sm border border-[#E0E6EA] px-4 py-4"
            >
              <div className="grid grid-cols-10 items-center min-h-[90px]">
                <div className="col-span-7 min-w-0 h-full flex flex-col justify-center">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-tight">
                    {p.title}
                  </h3>
                  <button
                    className="mt-1 inline-flex items-center rounded-lg whitespace-nowrap text-xs sm:text-sm transition-colors duration-300 bg-[#031E36] text-white px-6 py-3 hover:bg-black"
                    onClick={() => openDialog(p)}
                    type="button"
                  >
                    {p.btnText} 확인하기
                  </button>
                </div>
                <div className="col-span-3 h-full flex items-center justify-end">
                  <div className="w-10 h-10 rounded-md bg-[#F4F7FA] ring-1 ring-[#E6EDF2] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#031E36]" />
                  </div>
                </div>
              </div>
            </article>
          )
        })
      )}
      {open && selected && (
        <div className="fixed inset-0 z-[9999] bg-black/30 flex items-center justify-center" onClick={closeDialog}>
          <div
            className="bg-white rounded-[16px] shadow-lg relative border border-[#E0E6EA] p-6 max-h-[75vh] overflow-y-auto w-[75vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="닫기"
              onClick={closeDialog}
              className="absolute top-4 right-4 inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="border-b pb-3 mb-4">
              <h2 className="text-lg font-semibold text-gray-900">{selected.title}</h2>
            </div>
            {selected.content}
          </div>
        </div>
      )}
    </>
  )
}

export default DashboardPolicy