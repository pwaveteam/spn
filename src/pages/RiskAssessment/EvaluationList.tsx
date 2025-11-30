import React,{useState}from"react"
import{useNavigate}from"react-router-dom"
import Button from"@/components/common/base/Button"
import PageTitle from"@/components/common/base/PageTitle"
import FilterBar from"@/components/common/base/FilterBar"
import Pagination from"@/components/common/base/Pagination"
import InfoBox from"@/components/common/base/InfoBox"
import DataTable,{Column,DataRow}from"@/components/common/tables/DataTable"
import useFilterBar from"@/hooks/useFilterBar"
import useTableActions from"@/hooks/tableActions"
import usePagination from"@/hooks/usePagination"
import{Trash2,FilePen,PencilLine}from"lucide-react"
import{evaluationListMockData}from"@/data/mockRiskAssessmentData"

const evaluationColumns:Column[]=[
{key:"index",label:"번호",type:"index"},
{key:"year",label:"년도"},
{key:"title",label:"위험성평가명"},
{key:"type",label:"평가구분"},
{key:"method",label:"평가방법"},
{key:"regulation",label:"실시규정"},
{key:"registered",label:"등록일"},
{key:"modified",label:"최종수정일"},
{key:"completed",label:"완료일"},
{key:"status",label:"진행상태",type:"badge"},
{key:"result",label:"평가결과",type:"download"}
]

export default function EvaluationList(){
const navigate=useNavigate()
const sortedData=[...evaluationListMockData].sort((a,b)=>a.id-b.id)
const[data,setData]=useState<DataRow[]>(sortedData)
const[checkedIds,setCheckedIds]=useState<(number|string)[]>([])

const{searchText,setSearchText}=useFilterBar()

const{
currentPage,
totalPages,
currentData,
onPageChange
}=usePagination<DataRow>(data,10)

const{handleDelete}=useTableActions({
data,
checkedIds,
onDeleteSuccess:(ids)=>setData(prev=>prev.filter(row=>!ids.includes(row.id)))
})

const handleStartEvaluation=()=>navigate("/risk-assessment/list",{state:{showChecklist:true}})

const handleDownload=(row:DataRow)=>{
if(row.completed){
alert(`ID ${row.id} 평가결과 다운로드`)
}
}

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
<div className="flex gap-1">
<Button variant="action"onClick={handleStartEvaluation}className="flex items-center gap-1"><FilePen size={16}/>위험성평가 실시</Button>
<Button variant="action"onClick={()=>alert("평가 수정 페이지로 이동")}className="flex items-center gap-1"><PencilLine size={16}/>위험성평가 수정</Button>
<Button variant="action"onClick={handleDelete}className="flex items-center gap-1"><Trash2 size={16}/>삭제</Button>
</div>
</div>

<div className="overflow-x-auto bg-white">
<DataTable columns={evaluationColumns}data={currentData}onCheckedChange={setCheckedIds}onDownloadClick={handleDownload}/>
</div>

<Pagination currentPage={currentPage}totalPages={totalPages}onPageChange={onPageChange}/>
</div>
</div>
</section>
)
}