import React from "react"
import Button from "@/components/common/base/Button"
import FilterBar from "@/components/common/base/FilterBar"
import DataTable,{Column,DataRow}from"@/components/common/tables/DataTable"
import TabMenu from"@/components/common/base/TabMenu"
import PageTitle from"@/components/common/base/PageTitle"
import SafeVoiceRegisterModal from"@/pages/NearMiss/SafeVoiceRegister"
import Pagination from"@/components/common/base/Pagination"
import useFilterBar from"@/hooks/useFilterBar"
import useTabNavigation from"@/hooks/useTabNavigation"
import usePagination from"@/hooks/usePagination"
import useTableActions from"@/hooks/tableActions"
import{CirclePlus,Trash2,Save}from"lucide-react"
import{safeVoiceMockData}from"@/data/mockData"

const TAB_LABELS=["아차사고","안전보이스"]
const TAB_PATHS=["/nearmiss","/nearmiss/safevoice"]

const safeVoiceColumns:Column[]=[
{key:"index",label:"번호",type:"index"},
{key:"content",label:"내용"},
{key:"registrant",label:"작성자"},
{key:"date",label:"등록일"},
{key:"sitePhotos",label:"현장사진",type:"photo"},
{key:"status",label:"조치여부",type:"stateToggle",stateOptions:{
left:{text:"조치",color:"green"},
right:{text:"미조치",color:"orange"}
}},
{key:"reason",label:"미조치 사유",type:"input"}
]

export default function SafeVoice(){
const[data,setData]=React.useState<DataRow[]>(safeVoiceMockData)
const[checkedIds,setCheckedIds]=React.useState<(number|string)[]>([])
const[modalOpen,setModalOpen]=React.useState(false)

const{
startDate,
endDate,
searchText,
setStartDate,
setEndDate,
setSearchText
}=useFilterBar()
const{currentIndex,handleTabClick}=useTabNavigation(TAB_PATHS)

const{
currentPage,
totalPages,
currentData,
onPageChange
}=usePagination<DataRow>(data,30)

const{
handleCreate,
handleDelete,
handleDownload,
handleSave
}=useTableActions({
data,
checkedIds,
onCreate:()=>setModalOpen(true),
onDeleteSuccess:ids=>setData(prev=>prev.filter(row=>!ids.includes(row.id))),
onSave:()=>{console.log("안전보이스 저장",data)}
})

const handleStateToggle=(id:number|string,newValue:string)=>{
setData(prev=>prev.map(r=>r.id===id
?{...r,status:newValue,reason:newValue==="조치"?"조치 완료":r.reason}
:r
))
}

const handleInputChange=(id:number|string,key:string,value:string)=>{
setData(prev=>prev.map(r=>r.id===id?{...r,[key]:value}:r))
}

const handleSaveRow=(newItem:Partial<DataRow>)=>{
setData(prev=>[{id:prev.length+1,status:"미조치",reason:"",sitePhotos:[],...newItem},...prev])
setModalOpen(false)
}

return(
<section className="safevoice-content w-full bg-white">
<PageTitle>{TAB_LABELS[currentIndex]}</PageTitle>
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

<div className="mb-3 flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-2">
<span className="text-sm text-gray-600 leading-none mt-2 sm:mt-0">총 {data.length}건</span>
<div className="flex gap-1 justify-end w-full sm:w-auto">
<Button variant="action"onClick={handleCreate}className="flex gap-1 items-center"><CirclePlus size={16}/>신규등록</Button>
<Button variant="action"onClick={handleDownload}className="flex gap-1 items-center"><Save size={16}/>다운로드</Button>
<Button variant="action"onClick={handleDelete}className="flex gap-1 items-center"><Trash2 size={16}/>삭제</Button>
</div>
</div>

<div className="overflow-x-auto bg-white">
<DataTable
columns={safeVoiceColumns}
data={currentData}
onCheckedChange={setCheckedIds}
onStateToggleChange={handleStateToggle}
onInputChange={handleInputChange}
/>
</div>

<Pagination currentPage={currentPage}totalPages={totalPages}onPageChange={onPageChange}/>

<div className="flex justify-end mt-5">
<Button variant="primary"onClick={handleSave}>저장하기</Button>
</div>

{modalOpen&&(
<SafeVoiceRegisterModal
isOpen={modalOpen}
onClose={()=>setModalOpen(false)}
onSave={handleSaveRow}
/>
)}
</section>
)
}