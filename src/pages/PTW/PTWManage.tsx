import React,{useState,useEffect}from"react"
import{useLocation}from"react-router-dom"
import PageTitle from"@/components/common/base/PageTitle"
import TabMenu from"@/components/common/base/TabMenu"
import PTWWorkPermit from"./forms/PTWWorkPermit"
import PTWJSA from"./forms/PTWJSA"
import PTWSiteEvaluation from"./forms/PTWSiteEvaluation"
import PTWTBM from"./forms/PTWTBM"
import FilePanel,{PTWFile}from"./FilePanel/FilePanel"
import{Input}from"@/components/ui/input"

export default function PTWManage():React.ReactElement{
const location=useLocation()
const initialTab=(location.state as{activeTab?:number}|undefined)?.activeTab??0
const[activeTab,setActiveTab]=useState<number>(initialTab)
const[attachedFiles,setAttachedFiles]=useState<PTWFile[]>([])
const[ptwName,setPtwName]=useState<string>("11월 용접 작업")
const tabs=["위험작업허가서","작업위험분석(JSA)","현장 위험성평가(JSA)","TBM"]
const[pageTitle,setPageTitle]=useState<string>("PTW 관리")
const ptwId="TEMP_ID"

useEffect(()=>{
setPageTitle(tabs[activeTab])
},[activeTab])

return(
<div className="bg-white rounded-lg shadow-sm p-6">
<PageTitle>{pageTitle}</PageTitle>

<div className="flex flex-wrap items-center justify-between bg-[#F9FAFB] rounded-lg px-4 py-3 mb-4 text-sm text-gray-700">
<div className="flex items-center gap-3 w-full">
<span className="whitespace-nowrap"><strong>PTW명:</strong></span>
<Input
value={ptwName}
onChange={e=>setPtwName(e.target.value)}
className="h-8 bg-white w-full max-w-[400px] border-[#DFDFDF] focus-visible:ring-1 focus-visible:ring-gray-400"
placeholder="예: 11월 4주차 일지"
/>
</div>
</div>

<TabMenu tabs={tabs}activeIndex={activeTab}onTabClick={setActiveTab}className="mb-6"/>

<div className="flex gap-6">
<div className="flex-shrink-0">
{activeTab===0&&<PTWWorkPermit ptwId={ptwId}attachedFiles={attachedFiles}/>}
{activeTab===1&&<PTWJSA ptwId={ptwId}attachedFiles={attachedFiles}/>}
{activeTab===2&&<PTWSiteEvaluation ptwId={ptwId}attachedFiles={attachedFiles}/>}
{activeTab===3&&<PTWTBM ptwId={ptwId}attachedFiles={attachedFiles}/>}
</div>

<div className="hidden lg:block w-[380px] flex-shrink-0">
<div className="sticky top-6 border border-gray-200 rounded-lg bg-white">
<FilePanel ptwId={ptwId}onFilesChange={setAttachedFiles}/>
</div>
</div>
</div>
</div>
)
}