import React,{useState,useCallback}from"react"
import{useNavigate}from"react-router-dom"
import Button from"@/components/common/base/Button"
import FilterBar from"@/components/common/base/FilterBar"
import DataTable,{Column}from"@/components/common/tables/DataTable"
import TabMenu from"@/components/common/base/TabMenu"
import PageTitle from"@/components/common/base/PageTitle"
import Pagination from"@/components/common/base/Pagination"
import useFilterBar from"@/hooks/useFilterBar"
import usePagination from"@/hooks/usePagination"
import useTabNavigation from"@/hooks/useTabNavigation"
import useTableActions from"@/hooks/tableActions"
import{CirclePlus,Save,Printer,Trash2}from"lucide-react"
import{PTWGroupItem}from"@/types/ptw"
import{ptwGroupMockData}from"@/data/mockData"

const TAB_LABELS = ["PTW 그룹", "위험작업허가서", "작업위험분석(JSA)", "현장 위험성평가", "TBM"]
const TAB_PATHS = ["/ptw/list", "/ptw/work-permit", "/ptw/jsa", "/ptw/site-evaluation", "/ptw/tbm"]

const columns:Column<PTWGroupItem>[]=[
{key:"index",label:"번호",type:"index",align:"center"},
{key:"ptwName",label:"PTW명"},
{key:"createdAt",label:"등록일"},
{key:"registrant",label:"등록인"},
{key:"updatedAt",label:"최종수정일"},
{key:"manage",label:"관리",type:"manage"}
]

export default function PTWList(){
const navigate=useNavigate()
const{currentIndex,handleTabClick}=useTabNavigation(TAB_PATHS)
const{startDate,endDate,searchText,setStartDate,setEndDate,setSearchText}=useFilterBar()
const[data,setData]=useState<PTWGroupItem[]>(ptwGroupMockData)
const[checkedIds,setCheckedIds]=useState<(number|string)[]>([])
const{currentPage,totalPages,currentData,onPageChange}=usePagination<PTWGroupItem>(data,30)

const{
handleCreate,
handleDelete,
handleDownload
}=useTableActions({
data,
checkedIds,
onCreate:()=>navigate("/ptw/register"),
onDeleteSuccess:ids=>setData(prev=>prev.filter(r=>!ids.includes(r.id)))
})

const handlePrint=useCallback(()=>window.print(),[])

const handleManageClick=useCallback(()=>{
navigate("/ptw/manage",{state:{activeTab:0}})
},[navigate])

return(
<section className="w-full bg-white">
<PageTitle>PTW</PageTitle>

<TabMenu tabs={TAB_LABELS}activeIndex={currentIndex}onTabClick={handleTabClick}className="mb-6"/>

<div className="mb-3">
<FilterBar
startDate={startDate}
endDate={endDate}
onStartDate={setStartDate}
onEndDate={setEndDate}
searchText={searchText}
onSearchText={setSearchText}
onSearch={()=>{}}
/>
</div>

<div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-3 gap-1">
<span className="text-gray-600 text-sm leading-none pt-[3px] mt-2 sm:mt-0">총 {data.length}건</span>

<div className="flex flex-col gap-1 w-full justify-end sm:hidden">
<div className="flex flex-nowrap gap-1 justify-end">
<Button variant="action"onClick={handleCreate}className="flex items-center gap-1"><CirclePlus size={16}/>신규등록</Button>
<Button variant="action"onClick={handleDownload}className="flex items-center gap-1"><Save size={16}/>다운로드</Button>
<Button variant="action"onClick={handlePrint}className="flex items-center gap-1"><Printer size={16}/>인쇄</Button>
<Button variant="action"onClick={handleDelete}className="flex items-center gap-1"><Trash2 size={16}/>삭제</Button>
</div>
</div>

<div className="hidden sm:flex flex-nowrap gap-1 w-auto justify-end">
<Button variant="action"onClick={handleCreate}className="flex items-center gap-1"><CirclePlus size={16}/>신규등록</Button>
<Button variant="action"onClick={handleDownload}className="flex items-center gap-1"><Save size={16}/>다운로드</Button>
<Button variant="action"onClick={handlePrint}className="flex items-center gap-1"><Printer size={16}/>인쇄</Button>
<Button variant="action"onClick={handleDelete}className="flex items-center gap-1"><Trash2 size={16}/>삭제</Button>
</div>
</div>

<div className="overflow-x-auto bg-white">
<DataTable<PTWGroupItem>
columns={columns}
data={currentData}
onCheckedChange={setCheckedIds}
onManageClick={handleManageClick}
/>
</div>

<Pagination currentPage={currentPage}totalPages={totalPages}onPageChange={onPageChange}/>
</section>
)
}