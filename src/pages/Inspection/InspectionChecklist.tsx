import React,{useState}from"react"
import{useNavigate}from"react-router-dom"
import Button from"@/components/common/base/Button"
import FilterBar from"@/components/common/base/FilterBar"
import DataTable,{Column,DataRow}from"@/components/common/tables/DataTable"
import TabMenu from"@/components/common/base/TabMenu"
import PageTitle from"@/components/common/base/PageTitle"
import Pagination from"@/components/common/base/Pagination"
import useFilterBar from"@/hooks/useFilterBar"
import usePagination from"@/hooks/usePagination"
import useTableActions from"@/hooks/tableActions"
import useTabNavigation from"@/hooks/useTabNavigation"
import{CirclePlus,Trash2,Save}from"lucide-react"
import{inspectionChecklistMockData}from"@/data/mockData"

const TAB_LABELS=["점검일정","점검결과","점검표(체크리스트)"]
const TAB_PATHS=["/inspection/plan","/inspection/results","/inspection/checklist"]

type ChecklistRow=DataRow&{
template:string
field:string
kind:string
status:{text:string;color:string}
registrant:string
registeredAt:string
}

const columns:Column[]=[
{key:"index",label:"번호",type:"index"},
{key:"template",label:"점검표명"},
{key:"field",label:"점검분야"},
{key:"kind",label:"점검종류"},
{key:"status",label:"사용여부",type:"badge"},
{key:"registeredAt",label:"최종등록일"},
{key:"registrant",label:"등록인"},
{key:"manage",label:"관리",type:"manage"}
]

export default function InspectionChecklist(){
const navigate=useNavigate()
const{currentIndex,handleTabClick}=useTabNavigation(TAB_PATHS)

const[data,setData]=useState<ChecklistRow[]>(inspectionChecklistMockData as ChecklistRow[])
const[checkedIds,setCheckedIds]=useState<(number|string)[]>([])

const{searchText,setSearchText}=useFilterBar()
const[inspectionField,setInspectionField]=useState("")
const[inspectionKind,setInspectionKind]=useState("")

const{
currentPage,
totalPages,
currentData,
onPageChange
}=usePagination<ChecklistRow>(data,30)

const{
handleCreate,
handleDelete,
handleDownload
}=useTableActions({
data,
checkedIds,
onCreate:()=>navigate("/inspection/checklist/register"),
onDeleteSuccess:(ids)=>setData(p=>p.filter(r=>!ids.includes(r.id)))
})

return(
<section className="inspection-checklist w-full bg-white">
<PageTitle>{TAB_LABELS[currentIndex]}</PageTitle>
<TabMenu tabs={TAB_LABELS}activeIndex={currentIndex}onTabClick={handleTabClick}className="mb-6"/>

<div className="mb-3">
<FilterBar
inspectionField={inspectionField}
onInspectionFieldChange={setInspectionField}
inspectionKind={inspectionKind}
onInspectionKindChange={setInspectionKind}
searchText={searchText}
onSearchText={setSearchText}
onSearch={()=>{}}
showDateRange={false}
/>
</div>

<div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
<span className="text-gray-600 text-sm leading-none pt-[3px] mt-2 sm:mt-0">총 {data.length}건</span>

<div className="flex flex-col gap-1 w-full justify-end sm:hidden">
<div className="flex gap-1 justify-end">
<Button variant="action"onClick={handleCreate}className="flex items-center gap-1"><CirclePlus size={16}/>신규등록</Button>
<Button variant="action"onClick={handleDownload}className="flex items-center gap-1"><Save size={16}/>다운로드</Button>
<Button variant="action"onClick={handleDelete}className="flex items-center gap-1"><Trash2 size={16}/>삭제</Button>
</div>
</div>

<div className="hidden sm:flex flex-nowrap gap-1 w-auto justify-end">
<Button variant="action"onClick={handleCreate}className="flex items-center gap-1"><CirclePlus size={16}/>신규등록</Button>
<Button variant="action"onClick={handleDownload}className="flex items-center gap-1"><Save size={16}/>다운로드</Button>
<Button variant="action"onClick={handleDelete}className="flex items-center gap-1"><Trash2 size={16}/>삭제</Button>
</div>
</div>

<div className="overflow-x-auto bg-white">
<DataTable
columns={columns}
data={currentData}
onCheckedChange={setCheckedIds}
onManageClick={row=>navigate(`/inspection/checklist/${row.id}`)}
/>
</div>

<Pagination currentPage={currentPage}totalPages={totalPages}onPageChange={onPageChange}/>
</section>
)
}