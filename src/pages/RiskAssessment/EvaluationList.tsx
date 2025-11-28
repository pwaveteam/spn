import React,{useState}from"react"
import{useNavigate}from"react-router-dom"
import Button from"@/components/common/base/Button"
import PageTitle from"@/components/common/base/PageTitle"
import Badge from"@/components/common/base/Badge"
import FilterBar from"@/components/common/base/FilterBar"
import Pagination from"@/components/common/base/Pagination"
import InfoBox from"@/components/common/base/InfoBox"
import useFilterBar from"@/hooks/useFilterBar"
import useTableActions from"@/hooks/tableActions"
import{DownloadIcon,Trash2,FilePen,PencilLine}from"lucide-react"
import{EvaluationData}from"@/types/riskAssessment"
import{evaluationListMockData}from"@/data/mockRiskAssessmentData"

const PAGE_SIZE=10

export default function EvaluationList(){
const navigate=useNavigate()
const sortedData=[...evaluationListMockData].sort((a,b)=>a.id-b.id)
const[data,setData]=useState<EvaluationData[]>(sortedData)
const[checked,setChecked]=useState<(number|string)[]>([])
const[currentPage,setCurrentPage]=useState(1)
const totalPages=Math.ceil(data.length/PAGE_SIZE)
const paginatedData=data.slice((currentPage-1)*PAGE_SIZE,currentPage*PAGE_SIZE)

const{searchText,setSearchText}=useFilterBar()

const{handleDelete}=useTableActions({
data,
checkedIds:checked,
onDeleteSuccess:(ids)=>{
const updated=data.filter(row=>!ids.includes(row.id))
setData(updated)
setChecked([])
if((currentPage-1)*PAGE_SIZE>=updated.length)setCurrentPage(prev=>Math.max(1,prev-1))
}
})

const handleStartEvaluation=()=>navigate("/risk-assessment/list",{state:{showChecklist:true}})

return(
<section className="mypage-content w-full px-3 py-1 bg-[#F8F8F8] flex flex-col min-h-screen">
<div className="flex justify-center w-full">
<div className="border border-[#DDDDDD] bg-white rounded-[13px] p-8 mt-3 w-full flex flex-col">
<PageTitle>위험성평가 목록</PageTitle>
<InfoBox message="평가결과 다운로드 시 위험성평가지 양식으로 자동변환됩니다"/>
<div className="mb-3">
<FilterBar startDate=""endDate=""onStartDate={()=>{}}onEndDate={()=>{}}searchText={searchText}onSearchText={setSearchText}onSearch={()=>{}}/>
</div>
<div className="flex justify-between items-center mb-3">
<span className="text-gray-600 text-sm">총 {data.length}건</span>
<div className="flex justify-end gap-1">
<Button variant="action"onClick={handleStartEvaluation}className="flex items-center gap-1"><FilePen size={16}/>위험성평가 실시</Button>
<Button variant="action"onClick={()=>alert("평가 수정 페이지로 이동")}className="flex items-center gap-1"><PencilLine size={16}/>위험성평가 수정</Button>
<Button variant="action"onClick={handleDelete}className="flex items-center gap-1"><Trash2 size={16}/>삭제</Button>
</div>
</div>
<div className="overflow-x-auto bg-white">
<div className="min-w-[1020px]">
<table className="w-full border-collapse">
<thead>
<tr className="bg-[#f3f3f3]">
<th className="border border-[#DDDDDD] p-2 text-[#595F68] text-[15px] font-medium"style={{width:50}}>번호</th>
<th className="border border-[#DDDDDD] p-2 text-[#595F68] text-[15px] font-medium"style={{width:60}}>년도</th>
<th className="border border-[#DDDDDD] p-2 text-[#595F68] text-[15px] font-medium"style={{width:180}}>위험성평가명</th>
<th className="border border-[#DDDDDD] p-2 text-[#595F68] text-[15px] font-medium"style={{width:110}}>평가구분</th>
<th className="border border-[#DDDDDD] p-2 text-[#595F68] text-[15px] font-medium"style={{width:150}}>평가방법</th>
<th className="border border-[#DDDDDD] p-2 text-[#595F68] text-[15px] font-medium"style={{width:120}}>실시규정</th>
<th className="border border-[#DDDDDD] p-2 text-[#595F68] text-[15px] font-medium"style={{width:110}}>등록일</th>
<th className="border border-[#DDDDDD] p-2 text-[#595F68] text-[15px] font-medium"style={{width:110}}>최종수정일</th>
<th className="border border-[#DDDDDD] p-2 text-[#595F68] text-[15px] font-medium"style={{width:110}}>완료일</th>
<th className="border border-[#DDDDDD] p-2 text-[#595F68] text-[15px] font-medium"style={{width:90}}>진행상태</th>
<th className="border border-[#DDDDDD] p-2 text-[#595F68] text-[15px] font-medium"style={{width:90}}>평가결과</th>
</tr>
</thead>
<tbody>
{paginatedData.map(row=>(
<tr key={row.id}>
<td className="border border-[#DDDDDD] p-2 text-center h-[38px]">{row.id}</td>
<td className="border border-[#DDDDDD] p-2 text-center h-[38px]">{row.year}</td>
<td className="border border-[#DDDDDD] p-2 text-center h-[38px]">{row.title}</td>
<td className="border border-[#DDDDDD] p-2 text-center h-[38px]">{row.type}</td>
<td className="border border-[#DDDDDD] p-2 text-center h-[38px]">{row.method}</td>
<td className="border border-[#DDDDDD] p-2 text-center h-[38px]">{row.regulation}</td>
<td className="border border-[#DDDDDD] p-2 text-center h-[38px]">{row.registered}</td>
<td className="border border-[#DDDDDD] p-2 text-center h-[38px]">{row.modified}</td>
<td className="border border-[#DDDDDD] p-2 text-center h-[38px]">{row.completed}</td>
<td className="border border-[#DDDDDD] p-2 text-center h-[38px]">
<Badge color={row.status==="진행"?"green":"blue"}>{row.status}</Badge>
</td>
<td className="border border-[#DDDDDD] p-2 text-center h-[38px]">
{row.completed&&(
<button aria-label="평가 결과 다운로드"className="text-gray-600 hover:text-gray-900"onClick={()=>alert(`ID ${row.id} 평가결과 다운로드`)}><DownloadIcon size={18}/></button>
)}
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
<div className="flex justify-center">
<Pagination currentPage={currentPage}totalPages={totalPages}onPageChange={setCurrentPage}/>
</div>
</div>
</div>
</section>
)
}
