import React, { useState, useMemo, useEffect } from "react"
import { X } from "lucide-react"
import Button from "@/components/common/base/Button"
import Pagination from "@/components/common/base/Pagination"
import FilterBar from "@/components/common/base/FilterBar"
import { DOCUMENT_DETAILS, DocumentDetail } from "@/data/mockDocumentData"
import { useLoadingStore } from "@/stores/loadingStore"

interface PTWListModalProps {
isOpen: boolean
onClose: () => void
onSelect: (data: DocumentDetail) => void
documentType: "위험작업허가서" | "작업위험분석(JSA)" | "현장 위험성평가(JSA)" | "TBM"
}

const BORDER_CLASS = "border-[var(--border)]"
const HEADER_BG_CLASS = "bg-[#F3F5F7]"
const TEXT_PRIMARY_CLASS = "text-[#333A3F]" 
const TEXT_SECONDARY_CLASS = "text-[#595F68]"

export default function PTWListModal({ isOpen, onClose, onSelect, documentType }: PTWListModalProps) {
const [searchKeyword, setSearchKeyword] = useState("")
const [currentPage, setCurrentPage] = useState(1)
const itemsPerPage = 10
const { setLoading } = useLoadingStore()

const ptwList = useMemo(() => {
const allDocs = Object.entries(DOCUMENT_DETAILS).map(([id, detail]) => {
let type = ""
let name = detail.workType || detail.workName || detail.processName || "" 
let writer = detail.applicantName || detail.teamMember?.name || detail.manager || "" 

if (id.startsWith("PTW")) type = "위험작업허가서"
else if (id.startsWith("JSA")) type = "작업위험분석(JSA)"
else if (id.startsWith("EVAL")) type = "현장 위험성평가(JSA)"
else if (id.startsWith("TBM")) type = "TBM"

return {
id,
type,
name,
writer,
createdAt: detail.applicationDate || detail.date || "", 
detailData: detail 
}
})

return allDocs.filter(doc => doc.type === documentType)
}, [documentType])

const filteredList = searchKeyword
? ptwList.filter(item => 
item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
item.writer.toLowerCase().includes(searchKeyword.toLowerCase())
)
: ptwList

useEffect(() => {
setCurrentPage(1)
}, [searchKeyword])

const totalPages = Math.ceil(filteredList.length / itemsPerPage)
const paginatedList = filteredList.slice(
(currentPage - 1) * itemsPerPage,
currentPage * itemsPerPage
)

const handleSelect = async (detailData: DocumentDetail) => {
onClose()
setLoading(true)
try {
await new Promise(resolve => setTimeout(resolve, 1500))
onSelect(detailData)
} finally {
setLoading(false)
}
}

if (!isOpen) return null

return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

<div className="bg-white rounded-2xl w-[1000px] max-w-full p-6 shadow-2xl h-[85vh] flex flex-col relative">

<div className="flex items-center justify-between mb-2 pb-2">
<h2 className="text-[20px] font-bold tracking-tight text-[#333A3F]">
{documentType}
</h2>
<button 
onClick={onClose}
className="p-1 hover:bg-[#F3F5F7] rounded transition text-[#869CAE]"
>
<X size={24} />
</button>
</div>

<div className="mb-4">
<FilterBar 
showDateRange={false} 
searchText={searchKeyword}
onSearchText={setSearchKeyword}
onSearch={() => setCurrentPage(1)} 
/>
</div>

<div className="flex-1 overflow-auto mb-4 border border-[#E5E7EB] rounded-lg">
<table className="w-full border-separate border-spacing-0">
<thead className="sticky top-0 z-10">
<tr className={HEADER_BG_CLASS}>
<th className={`border-b ${BORDER_CLASS} px-4 py-3 text-[14px] font-medium ${TEXT_SECONDARY_CLASS} w-[160px] text-center`}>
문서 구분
</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-3 text-[14px] font-medium ${TEXT_SECONDARY_CLASS} text-left`}>
작업명
</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-3 text-[14px] font-medium ${TEXT_SECONDARY_CLASS} w-[100px] text-center`}>
작성자
</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-3 text-[14px] font-medium ${TEXT_SECONDARY_CLASS} w-[120px] text-center`}>
작성일
</th>
<th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-3 text-[14px] font-medium ${TEXT_SECONDARY_CLASS} w-[90px] text-center`}>
선택
</th>
</tr>
</thead>
<tbody className="bg-white">
{paginatedList.length > 0 ? (
paginatedList.map((item) => (
<tr key={item.id} className="hover:bg-gray-50 transition-colors">
<td className={`border-b ${BORDER_CLASS} px-4 py-2 text-[13px] ${TEXT_PRIMARY_CLASS} text-center`}>
<span className="inline-block px-2 py-0.5 bg-[#F3F4F6] rounded text-[12px] font-medium text-gray-600">
{item.type}
</span>
</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-2 text-[13px] ${TEXT_PRIMARY_CLASS} font-normal`}>
{item.name}
</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-2 text-[13px] ${TEXT_PRIMARY_CLASS} text-center`}>
{item.writer}
</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-2 text-[13px] ${TEXT_PRIMARY_CLASS} text-center text-gray-500`}>
{item.createdAt}
</td>
<td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2`}>
<div className="flex items-center justify-center w-full h-full">
<Button 
variant="action" 
onClick={() => handleSelect(item.detailData)}
className="text-[11px] h-[26px] px-2 py-0"
>
선택
</Button>
</div>
</td>
</tr>
))
) : (
<tr>
<td 
colSpan={5} 
className="p-12 text-[14px] text-gray-400 text-center"
>
<span>{searchKeyword ? "검색 결과가 없습니다." : "등록된 문서가 없습니다."}</span>
</td>
</tr>
)}
</tbody>
</table>
</div>

<div className="flex justify-center pt-2">
<Pagination 
currentPage={currentPage}
totalPages={totalPages}
onPageChange={setCurrentPage}
/>
</div>

</div>
</div>
)
}