import React, { useState, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { ClipboardCheck, ChevronRight } from "lucide-react"
import { inspectionPlanMockData } from "@/data/mockData"

type PlanRow = {
id: number | string
planName: string
site: string
area: string
kind: string
inspector: string
schedule: string
progress: "미점검" | "완료"
}

export default function PublicInspectionList() {
const navigate = useNavigate()
const [searchParams] = useSearchParams()
const [data, setData] = useState<PlanRow[]>([])

useEffect(() => {
const ids = searchParams.get("ids")

if (ids) {
const idList = ids.split(",").map(id => parseInt(id))
const filtered = (inspectionPlanMockData as PlanRow[]).filter(item => 
idList.includes(Number(item.id))
)
setData(filtered)
} else {
setData(inspectionPlanMockData as PlanRow[])
}
}, [searchParams])

const handleStartInspection = (id: number | string) => {
navigate(`/public/inspection/${id}/execute`)
}

return (
<div className="min-h-screen bg-gray-50">
{/* 헤더 */}
<header className="bg-[var(--primary)] text-white p-4 sticky top-0 z-10">
<div className="flex items-center gap-2">
<ClipboardCheck size={24} />
<h1 className="text-base font-semibold">점검 목록</h1>
</div>
</header>

{/* 목록 */}
<main className="p-4">
<p className="text-xs text-gray-500 mb-3">총 {data.length}건</p>

<div className="flex flex-col gap-3">
{data.map(item => (
<div
key={item.id}
className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
>
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-gray-800 flex-1 pr-2">
{item.planName}
</h3>
<span
className={`text-xs px-2 py-1 rounded-full shrink-0 ${
item.progress === "완료"
? "bg-gray-100 text-gray-500"
: "bg-blue-100 text-blue-600"
}`}
>
{item.progress}
</span>
</div>

<div className="text-xs text-gray-500 space-y-1 mb-3">
<p>장소: {item.site}</p>
<p>점검분야: {item.area}</p>
<p>점검종류: {item.kind}</p>
<p>점검일정: {item.schedule}</p>
<p>점검자: {item.inspector}</p>
</div>

{item.progress === "완료" ? (
<button
disabled
className="w-full py-2 rounded-lg bg-gray-100 text-gray-400 text-xs font-medium"
>
점검완료
</button>
) : (
<button
onClick={() => handleStartInspection(item.id)}
className="w-full py-2 rounded-lg bg-[var(--primary)] text-white text-xs font-medium flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
>
점검하기
<ChevronRight size={14} />
</button>
)}
</div>
))}
</div>

{data.length === 0 && (
<div className="text-center py-10 text-gray-400 text-sm">
점검 항목이 없습니다.
</div>
)}
</main>
</div>
)
}