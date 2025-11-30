import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "@/components/common/base/Button"
import FilterBar from "@/components/common/base/FilterBar"
import DataTable, { Column, DataRow } from "@/components/common/tables/DataTable"
import TabMenu from "@/components/common/base/TabMenu"
import PageTitle from "@/components/common/base/PageTitle"
import Pagination from "@/components/common/base/Pagination"
import usePagination from "@/hooks/usePagination"
import useTabNavigation from "@/hooks/useTabNavigation"
import useTableActions from "@/hooks/tableActions"
import { CirclePlus, QrCode, Trash2, Save } from "lucide-react"
import jsPDF from "jspdf"
import { safetyEducationMockData } from "@/data/mockData"

const TAB_LABELS = ["안전보건교육"]
const TAB_PATHS = ["/safety-education"]

const educationColumns: Column[] = [
{ key: "index", label: "번호", type: "index" },
{ key: "course", label: "교육과정" },
{ key: "targetGroup", label: "교육대상" },
{ key: "eduName", label: "교육명" },
{ key: "date", label: "교육일자" },
{ key: "trainer", label: "강사" },
{ key: "sitePhotos", label: "현장사진", type: "photo" },
{ key: "eduMaterial", label: "교육자료", type: "download" },
{ key: "proof", label: "첨부파일", type: "download" },
{ key: "manage", label: "관리", type: "manage" }
]

export default function EducationList() {
const navigate = useNavigate()

const [data, setData] = useState<DataRow[]>(safetyEducationMockData)
const [checkedIds, setCheckedIds] = useState<(number | string)[]>([])

const [educationCourse, setEducationCourse] = useState("")
const [educationTarget, setEducationTarget] = useState("")

const { currentIndex, handleTabClick } = useTabNavigation(TAB_PATHS)

const {
currentPage,
totalPages,
currentData,
onPageChange
} = usePagination<DataRow>(data, 30)

const handleDownloadEducationPdf = () => {
if (checkedIds.length === 0) { alert("다운로드할 항목을 선택하세요"); return }
const dateStr = new Date().toISOString().split("T")[0].replace(/-/g, "")
new jsPDF().save(`안전보건교육_${dateStr}.pdf`)
}

const {
handleDelete,
handleGenerateQR
} = useTableActions({
data,
checkedIds,
onDeleteSuccess: ids => setData(prev => prev.filter(r => !ids.includes(r.id)))
})

return (
<section className="education-content w-full bg-white">
<PageTitle>안전보건교육</PageTitle>

<TabMenu tabs={TAB_LABELS} activeIndex={currentIndex} onTabClick={handleTabClick} className="mb-6" />

<div className="mb-3">
<FilterBar
showDateRange={false}
educationCourse={educationCourse}
onEducationCourseChange={setEducationCourse}
educationTarget={educationTarget}
onEducationTargetChange={setEducationTarget}
onSearch={() => {}}
/>
</div>

<div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
<span className="text-gray-600 text-sm leading-none pt-[3px] mt-2 sm:mt-0">총 {data.length}건</span>

<div className="flex flex-col gap-1 w-full justify-end sm:hidden">
<div className="flex gap-1 justify-end">
<Button variant="action" onClick={() => navigate("/safety-education/register")} className="flex items-center gap-1"><CirclePlus size={16} />신규등록</Button>
<Button variant="action" onClick={handleGenerateQR} className="flex items-center gap-1"><QrCode size={16} />QR 생성</Button>
<Button variant="action" onClick={handleDownloadEducationPdf} className="flex items-center gap-1"><Save size={16} />다운로드</Button>
<Button variant="action" onClick={handleDelete} className="flex items-center gap-1"><Trash2 size={16} />삭제</Button>
</div>
</div>

<div className="hidden sm:flex flex-nowrap gap-1 w-auto justify-end">
<Button variant="action" onClick={() => navigate("/safety-education/register")} className="flex items-center gap-1"><CirclePlus size={16} />신규등록</Button>
<Button variant="action" onClick={handleGenerateQR} className="flex items-center gap-1"><QrCode size={16} />QR 생성</Button>
<Button variant="action" onClick={handleDownloadEducationPdf} className="flex items-center gap-1"><Save size={16} />다운로드</Button>
<Button variant="action" onClick={handleDelete} className="flex items-center gap-1"><Trash2 size={16} />삭제</Button>
</div>
</div>

<div className="overflow-x-auto bg-white">
<DataTable columns={educationColumns} data={currentData} onCheckedChange={setCheckedIds} />
</div>

<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
</section>
)
}