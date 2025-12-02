import React,{useEffect,useState}from"react"
import{ShieldCheckIcon,FlagIcon}from"@heroicons/react/24/solid"
import{X}from"lucide-react"

type Policy={id:number;title:string;btnText:string}
const policies:Policy[]=[{id:1,title:"안전보건경영방침",btnText:"안전보건경영방침"},{id:2,title:"안전보건목표",btnText:"안전보건목표"}]

const BORDER_CLASS="border-[var(--border)]"
const TEXT_PRIMARY="text-gray-800"
const TEXT_SECONDARY="text-gray-500"

const policyContent=`(주)***은 경영활동 전반에 전 사원의 안전과 보건을 기업의 최우선 가치로 인식하고,
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

type GoalItem={id:number;detailPlan:string;q1:boolean;q2:boolean;q3:boolean;q4:boolean;KPI:string;department:string}
const goalItems:GoalItem[]=[
{id:1,detailPlan:"정기 위험성평가",q1:true,q2:false,q3:false,q4:false,KPI:"1회/년 이상",department:"전부서"},
{id:2,detailPlan:"수시 위험성평가",q1:false,q2:false,q3:false,q4:false,KPI:"수시",department:"전부서"},
{id:3,detailPlan:"고위험 개선",q1:false,q2:false,q3:false,q4:false,KPI:"개선이행 100%",department:"전부서"},
{id:4,detailPlan:"아차사고수집",q1:false,q2:false,q3:false,q4:false,KPI:"1건/월/인당",department:"안전"},
{id:5,detailPlan:"안전보건교육(정기)",q1:false,q2:false,q3:false,q4:false,KPI:"12시간/반기",department:"전부서"},
{id:6,detailPlan:"안전보건교육(관리감독자)",q1:false,q2:false,q3:false,q4:false,KPI:"16시간/반기",department:"안전"},
{id:7,detailPlan:"안전보건교육(특별안전교육)",q1:false,q2:false,q3:false,q4:false,KPI:"16시간/반기(크레인,유해물질취급자)",department:"안전"},
{id:8,detailPlan:"안전보건교육(신규채용시)",q1:false,q2:false,q3:false,q4:false,KPI:"8시간/년간(채용시)",department:"전부서"},
{id:9,detailPlan:"안전보건교육(MSDS)",q1:false,q2:false,q3:false,q4:false,KPI:"2시간/년간(유해물질취급자)",department:"전부서"},
{id:10,detailPlan:"산업안전보건위원회",q1:false,q2:false,q3:false,q4:false,KPI:"1회/분기",department:"안전"},
{id:11,detailPlan:"소방시설 정기점검",q1:false,q2:false,q3:false,q4:false,KPI:"1회/월",department:"안전"},
{id:12,detailPlan:"합동안전점검",q1:false,q2:false,q3:false,q4:false,KPI:"1회/월",department:"안전"},
{id:13,detailPlan:"일반 건강검진",q1:false,q2:false,q3:false,q4:false,KPI:"관리직1회/2년, 현장직1회/1년",department:"안전"},
{id:14,detailPlan:"특수 건강검진",q1:false,q2:false,q3:false,q4:false,KPI:"1회/년(현장직1회/년)",department:"안전"},
{id:15,detailPlan:"배치전 건강검진",q1:false,q2:false,q3:false,q4:false,KPI:"해당시",department:"안전"},
{id:16,detailPlan:"비상조치훈련",q1:false,q2:false,q3:false,q4:false,KPI:"1회/분기(화재, 누출, 대피, 구조)",department:"전부서"},
{id:17,detailPlan:"작업허가서 발부",q1:false,q2:false,q3:false,q4:false,KPI:"단위 작업별",department:"전부서"},
{id:18,detailPlan:"TBM 실시",q1:false,q2:false,q3:false,q4:false,KPI:"단위 작업별",department:"전부서"},
{id:19,detailPlan:"안전관리제도 운영",q1:false,q2:false,q3:false,q4:false,KPI:"1건/월/인당",department:"전부서"},
{id:20,detailPlan:"안전보건 예산 집행",q1:false,q2:false,q3:false,q4:false,KPI:"수립예산 이행",department:"전부서"}
]

const PolicyModal=({isOpen,onClose}:{isOpen:boolean;onClose:()=>void})=>{
if(!isOpen)return null
return(
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
<div className="bg-white rounded-none md:rounded-2xl w-full md:w-[800px] md:max-w-full p-4 md:p-6 shadow-2xl h-screen md:h-auto md:max-h-[85vh] flex flex-col">
<div className="flex items-center justify-between mb-4 pb-2">
<h2 className={`text-base md:text-xl font-bold tracking-tight ${TEXT_PRIMARY}`}>안전보건경영방침</h2>
<button onClick={onClose} className="p-1 hover:bg-[var(--neutral-bg)] rounded transition text-[var(--neutral)]">
<X size={24}/>
</button>
</div>
<div className="flex-1 overflow-auto">
<div className="bg-gray-50 rounded-lg p-4 md:p-6">
<h3 className="text-sm md:text-base font-semibold text-gray-800 mb-4">방침목표명: 현장 위험요인 실시간 식별 및 제거</h3>
<div className="whitespace-pre-wrap text-xs md:text-sm text-gray-700 leading-relaxed">{policyContent}</div>
</div>
</div>
</div>
</div>
)
}

type BudgetItem={id:number;year:string;itemName:string;category:string;budget:string;spent:string;remaining:string;author:string}
const budgetItems:BudgetItem[]=[
{id:1,year:"2025",itemName:"밀폐공간 진입 안전교육",category:"작업 전 밀폐공간 위험요인 교육",budget:"50000000",spent:"20000000",remaining:"30000000",author:"김안전"},
{id:2,year:"2025",itemName:"고소작업 장비 점검",category:"안전대 및 보호장비 정기점검 실시",budget:"30000000",spent:"15000000",remaining:"15000000",author:"이설비"},
{id:3,year:"2025",itemName:"비상대응 시나리오 훈련",category:"전사 비상대응 매뉴얼 체계적 훈련",budget:"25000000",spent:"10000000",remaining:"15000000",author:"박교육"},
{id:4,year:"2025",itemName:"화학물질 취급 교육",category:"유해물질 안전취급 절차 심화교육",budget:"20000000",spent:"8000000",remaining:"12000000",author:"최장비"},
{id:5,year:"2025",itemName:"현장 순찰 보안 강화",category:"주간 및 야간 순찰 보안 점검 강화",budget:"15000000",spent:"5000000",remaining:"10000000",author:"정안전"}
]

const formatCurrency=(value:string)=>{
const num=parseInt(value.replace(/[^0-9]/g,""),10)
return isNaN(num)?"0원":num.toLocaleString()+"원"
}

const GoalModal=({isOpen,onClose}:{isOpen:boolean;onClose:()=>void})=>{
const[activeTab,setActiveTab]=useState(0)
if(!isOpen)return null
return(
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
<div className="bg-white rounded-none md:rounded-2xl w-full md:w-[95%] md:max-w-[1200px] p-4 md:p-6 shadow-2xl h-screen md:h-auto md:max-h-[85vh] flex flex-col">
<div className="flex items-center justify-between mb-3 pb-2">
<h2 className={`text-base md:text-xl font-bold tracking-tight ${TEXT_PRIMARY}`}>안전보건 목표 및 예산</h2>
<button onClick={onClose} className="p-1 hover:bg-[var(--neutral-bg)] rounded transition text-[var(--neutral)]">
<X size={24}/>
</button>
</div>

<div className="flex gap-2 mb-4 border-b border-gray-200">
<button
onClick={()=>setActiveTab(0)}
className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-all relative ${
activeTab===0
?"text-[#1E3C6B] border-b-2 border-[#1E3C6B]"
:"text-gray-500 hover:text-gray-700"
}`}
>
안전보건 목표 및 추진계획
</button>
<button
onClick={()=>setActiveTab(1)}
className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-all relative ${
activeTab===1
?"text-[#1E3C6B] border-b-2 border-[#1E3C6B]"
:"text-gray-500 hover:text-gray-700"
}`}
>
안전보건예산
</button>
</div>

<div className="flex-1 overflow-auto">
{activeTab===0?(
<div className={`border ${BORDER_CLASS} rounded-lg overflow-hidden`}>
<div className="overflow-x-auto">
<table className="w-full border-separate border-spacing-0">
<thead className="sticky top-0 z-10 bg-[var(--neutral-bg)]">
<tr>
<th className={`border-b ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-center`}>No</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-center min-w-[120px] md:min-w-[200px]`}>세부추진계획</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-center`} colSpan={4}>추진계획(분기)</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-center min-w-[100px] md:min-w-[150px]`}>KPI</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-center min-w-[80px]`}>담당부서</th>
</tr>
<tr>
<th className={`border-b ${BORDER_CLASS} px-2 py-1 text-[10px] md:text-xs ${TEXT_SECONDARY}`}></th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-1 text-[10px] md:text-xs ${TEXT_SECONDARY}`}></th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-1 text-[10px] md:text-xs ${TEXT_SECONDARY} text-center`}>1Q</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-1 text-[10px] md:text-xs ${TEXT_SECONDARY} text-center`}>2Q</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-1 text-[10px] md:text-xs ${TEXT_SECONDARY} text-center`}>3Q</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-1 text-[10px] md:text-xs ${TEXT_SECONDARY} text-center`}>4Q</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-1 text-[10px] md:text-xs ${TEXT_SECONDARY}`}></th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-1 text-[10px] md:text-xs ${TEXT_SECONDARY}`}></th>
</tr>
</thead>
<tbody className="bg-white">
{goalItems.map((item,idx)=>(
<tr key={item.id}>
<td className={`border-b ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] ${TEXT_PRIMARY} text-center`}>{idx+1}</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] ${TEXT_PRIMARY}`}>{item.detailPlan}</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-center`}>
<div className="flex items-center justify-center">
<input type="checkbox" checked={item.q1} readOnly className="w-3 h-3 md:w-4 md:h-4 pointer-events-none"/>
</div>
</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-center`}>
<div className="flex items-center justify-center">
<input type="checkbox" checked={item.q2} readOnly className="w-3 h-3 md:w-4 md:h-4 pointer-events-none"/>
</div>
</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-center`}>
<div className="flex items-center justify-center">
<input type="checkbox" checked={item.q3} readOnly className="w-3 h-3 md:w-4 md:h-4 pointer-events-none"/>
</div>
</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-center`}>
<div className="flex items-center justify-center">
<input type="checkbox" checked={item.q4} readOnly className="w-3 h-3 md:w-4 md:h-4 pointer-events-none"/>
</div>
</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] ${TEXT_PRIMARY}`}>{item.KPI}</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] ${TEXT_PRIMARY} text-center`}>{item.department}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
):(
<div className={`border ${BORDER_CLASS} rounded-lg overflow-hidden`}>
<div className="overflow-x-auto">
<table className="w-full border-separate border-spacing-0">
<thead className="sticky top-0 z-10 bg-[var(--neutral-bg)]">
<tr>
<th className={`border-b ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-center`}>No</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-center min-w-[80px]`}>연도</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-left min-w-[120px] md:min-w-[180px]`}>항목명</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-left min-w-[150px] md:min-w-[200px]`}>세부내역</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-right min-w-[100px] md:min-w-[120px]`}>예산</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-right min-w-[100px] md:min-w-[120px]`}>지출</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-right min-w-[100px] md:min-w-[120px]`}>잔액</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 md:px-3 py-2 text-[11px] md:text-sm font-medium ${TEXT_SECONDARY} text-center min-w-[80px]`}>작성자</th>
</tr>
</thead>
<tbody className="bg-white">
{budgetItems.map((item,idx)=>(
<tr key={item.id}>
<td className={`border-b ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] ${TEXT_PRIMARY} text-center`}>{idx+1}</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] ${TEXT_PRIMARY} text-center`}>{item.year}</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] ${TEXT_PRIMARY}`}>{item.itemName}</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] ${TEXT_SECONDARY}`}>{item.category}</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] ${TEXT_PRIMARY} text-right font-medium`}>{formatCurrency(item.budget)}</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] text-orange-600 text-right font-medium`}>{formatCurrency(item.spent)}</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] text-blue-600 text-right font-medium`}>{formatCurrency(item.remaining)}</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2 text-[11px] md:text-[13px] ${TEXT_PRIMARY} text-center`}>{item.author}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
)}
</div>
</div>
</div>
)
}

const DashboardPolicy:React.FC=()=>{
const[modalType,setModalType]=useState<"policy"|"goal"|null>(null)
const[isMobile,setIsMobile]=useState(false)
useEffect(()=>{const onResize=()=>setIsMobile(window.innerWidth<=767);onResize();window.addEventListener("resize",onResize);return()=>window.removeEventListener("resize",onResize)},[])
const openModal=(type:"policy"|"goal")=>setModalType(type)
const closeModal=()=>setModalType(null)
const IconFor=(id:number)=>id===1?ShieldCheckIcon:FlagIcon

return(<>
{isMobile?(<div className="flex gap-3">{policies.map(p=>(<button key={p.id} className="flex-1 inline-flex items-center justify-center text-sm font-medium rounded-lg h-[50px] px-4 bg-[#031E36] text-white hover:bg-black transition-colors" onClick={()=>openModal(p.id===1?"policy":"goal")} type="button">{p.btnText}</button>))}</div>):(policies.map(p=>{const Icon=IconFor(p.id);return(<article key={p.id} className="rounded-[16px] bg-white shadow-sm border border-[#E0E6EA] px-4 py-4"><div className="grid grid-cols-10 items-center min-h-[90px]"><div className="col-span-7 min-w-0 h-full flex flex-col justify-center"><h3 className="text-base md:text-lg font-semibold text-gray-800 leading-tight">{p.title}</h3><button className="mt-1 inline-flex items-center rounded-lg whitespace-nowrap text-xs sm:text-sm transition-colors duration-300 bg-[#031E36] text-white px-6 py-3 hover:bg-black" onClick={()=>openModal(p.id===1?"policy":"goal")} type="button">{p.btnText} 확인하기</button></div><div className="col-span-3 h-full flex items-center justify-end"><div className="w-10 h-10 rounded-md bg-[#F4F7FA] ring-1 ring-[#E6EDF2] flex items-center justify-center"><Icon className="w-5 h-5 text-[#031E36]"/></div></div></div></article>)}) )}
<PolicyModal isOpen={modalType==="policy"} onClose={closeModal}/>
<GoalModal isOpen={modalType==="goal"} onClose={closeModal}/>
</>)}

export default DashboardPolicy