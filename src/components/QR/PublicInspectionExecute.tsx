import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Camera, Image, X } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { inspectionPlanMockData } from "@/data/mockData"

type CheckItem = { id: number; category: string; item: string; checked: boolean; note: string; photo?: string }

const mockCheckItems: CheckItem[] = [
{ id: 1, category: "안전시설", item: "소화기 비치 상태", checked: false, note: "" },
{ id: 2, category: "안전시설", item: "비상구 표시등 작동", checked: false, note: "" },
{ id: 3, category: "안전시설", item: "안전난간 설치 상태", checked: false, note: "" },
{ id: 4, category: "전기설비", item: "분전반 관리 상태", checked: false, note: "" },
{ id: 5, category: "전기설비", item: "접지 상태", checked: false, note: "" },
{ id: 6, category: "작업환경", item: "정리정돈 상태", checked: false, note: "" },
{ id: 7, category: "작업환경", item: "통로 확보 상태", checked: false, note: "" },
]

export default function PublicInspectionExecute() {
const { id } = useParams()
const navigate = useNavigate()
const [planInfo, setPlanInfo] = useState<any>(null)
const [checkItems, setCheckItems] = useState<CheckItem[]>(mockCheckItems)
const [isSubmitting, setIsSubmitting] = useState(false)

useEffect(() => {
const plan = (inspectionPlanMockData as any[]).find(p => String(p.id) === id)
setPlanInfo(plan)
}, [id])

const handleCheck = (itemId: number, value: boolean) => setCheckItems(prev => prev.map(item => item.id === itemId ? { ...item, checked: value } : item))
const handleNoteChange = (itemId: number, note: string) => setCheckItems(prev => prev.map(item => item.id === itemId ? { ...item, note } : item))
const handleRemovePhoto = (itemId: number) => setCheckItems(prev => prev.map(item => item.id === itemId ? { ...item, photo: undefined } : item))

const handlePhotoCapture = (itemId: number) => {
const input = document.createElement("input")
input.type = "file"
input.accept = "image/*"
input.capture = "environment"
input.onchange = (e) => {
const file = (e.target as HTMLInputElement).files?.[0]
if (file) {
const reader = new FileReader()
reader.onload = (ev) => setCheckItems(prev => prev.map(item => item.id === itemId ? { ...item, photo: ev.target?.result as string } : item))
reader.readAsDataURL(file)
}
}
input.click()
}

const handlePhotoSelect = (itemId: number) => {
const input = document.createElement("input")
input.type = "file"
input.accept = "image/*"
input.onchange = (e) => {
const file = (e.target as HTMLInputElement).files?.[0]
if (file) {
const reader = new FileReader()
reader.onload = (ev) => setCheckItems(prev => prev.map(item => item.id === itemId ? { ...item, photo: ev.target?.result as string } : item))
reader.readAsDataURL(file)
}
}
input.click()
}

const handleSubmit = async () => {
setIsSubmitting(true)
await new Promise(resolve => setTimeout(resolve, 1000))
alert("점검이 완료되었습니다.")
navigate("/public/inspection")
}

const completedCount = checkItems.filter(item => item.checked).length
const progress = Math.round((completedCount / checkItems.length) * 100)
const groupedItems = checkItems.reduce((acc, item) => { if (!acc[item.category]) acc[item.category] = []; acc[item.category].push(item); return acc }, {} as Record<string, CheckItem[]>)

if (!planInfo) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><p className="text-gray-500 text-sm">점검 정보를 불러오는 중...</p></div>

return (
<div className="min-h-screen bg-gray-50 pb-24">
<header className="bg-[var(--primary)] text-white p-4 sticky top-0 z-10">
<div className="flex items-center gap-3">
<button onClick={() => navigate(-1)} className="p-1"><ArrowLeft size={20} /></button>
<div className="flex-1 min-w-0">
<h1 className="text-sm font-semibold truncate">{planInfo.planName}</h1>
<p className="text-xs opacity-80">{planInfo.site}</p>
</div>
</div>
</header>

<div className="bg-white border-b border-gray-200 p-4">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-500">점검 진행률</span>
<span className="text-xs font-semibold text-[var(--primary)]">{completedCount}/{checkItems.length} ({progress}%)</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-[var(--primary)] h-2 rounded-full transition-all" style={{ width: `${progress}%` }} /></div>
</div>

<main className="p-4">
{Object.entries(groupedItems).map(([category, items]) => (
<div key={category} className="mb-6">
<h2 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-2"><span className="w-1 h-4 bg-[var(--primary)] rounded-full" />{category}</h2>
<div className="flex flex-col gap-3">
{items.map(item => (
<div key={item.id} className={`bg-white rounded-lg border p-4 ${item.checked ? "border-green-300 bg-green-50" : "border-gray-200"}`}>
<div className="flex items-center justify-between mb-3">
<p className="text-sm font-medium text-gray-800">{item.item}</p>
<label className="flex items-center gap-2 text-xs">
<Checkbox checked={item.checked} onCheckedChange={v => handleCheck(item.id, Boolean(v))} />
<span className={item.checked ? "text-green-600 font-medium" : "text-gray-500"}>확인</span>
</label>
</div>
<input type="text" placeholder="비고 입력" value={item.note} onChange={(e) => handleNoteChange(item.id, e.target.value)} className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg mb-2 focus:outline-none focus:border-[var(--primary)]" />
<div className="flex items-center gap-2">
<button onClick={() => handlePhotoCapture(item.id)} className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"><Camera size={14} />촬영</button>
<button onClick={() => handlePhotoSelect(item.id)} className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"><Image size={14} />앨범</button>
{item.photo && (
<div className="relative">
<img src={item.photo} alt="사진" className="w-10 h-10 object-cover rounded border" />
<button onClick={() => handleRemovePhoto(item.id)} className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center"><X size={10} /></button>
</div>
)}
</div>
</div>
))}
</div>
</div>
))}
</main>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
<button onClick={handleSubmit} disabled={isSubmitting} className="w-full py-3 bg-[var(--primary)] text-white text-sm font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity">{isSubmitting ? "제출 중..." : "점검 완료"}</button>
</div>
</div>
)
}