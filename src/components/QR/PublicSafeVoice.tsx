import React, { useState } from "react"
import { MessageSquare, Camera, Image, X, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function PublicSafeVoice() {
const [form, setForm] = useState({ content: "", registrant: "", date: new Date().toISOString().split("T")[0] })
const [photos, setPhotos] = useState<string[]>([])
const [isSubmitting, setIsSubmitting] = useState(false)
const [isSuccess, setIsSuccess] = useState(false)

const handleChange = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }))

const handlePhotoCapture = () => {
const input = document.createElement("input")
input.type = "file"; input.accept = "image/*"; input.capture = "environment"
input.onchange = (e) => {
const file = (e.target as HTMLInputElement).files?.[0]
if (file) { const reader = new FileReader(); reader.onload = (ev) => setPhotos(prev => [...prev, ev.target?.result as string]); reader.readAsDataURL(file) }
}
input.click()
}

const handlePhotoSelect = () => {
const input = document.createElement("input")
input.type = "file"; input.accept = "image/*"; input.multiple = true
input.onchange = (e) => {
const files = (e.target as HTMLInputElement).files
if (files) { Array.from(files).forEach(file => { const reader = new FileReader(); reader.onload = (ev) => setPhotos(prev => [...prev, ev.target?.result as string]); reader.readAsDataURL(file) }) }
}
input.click()
}

const handleRemovePhoto = (index: number) => setPhotos(prev => prev.filter((_, i) => i !== index))

const handleSubmit = async () => {
if (!form.content || !form.registrant) { alert("내용과 작성자를 입력해주세요."); return }
setIsSubmitting(true)
await new Promise(resolve => setTimeout(resolve, 1000))
setIsSubmitting(false)
setIsSuccess(true)
}

const handleReset = () => { setForm({ content: "", registrant: "", date: new Date().toISOString().split("T")[0] }); setPhotos([]); setIsSuccess(false) }

if (isSuccess) {
return (
<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
<div className="bg-white rounded-xl p-8 text-center shadow-lg max-w-sm w-full">
<CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
<h2 className="text-lg font-semibold text-gray-800 mb-2">등록 완료</h2>
<p className="text-sm text-gray-500 mb-6">안전보이스가 성공적으로 등록되었습니다.</p>
<button onClick={handleReset} className="w-full py-3 bg-[var(--primary)] text-white text-sm font-semibold rounded-lg">새 양식 작성</button>
</div>
</div>
)
}

return (
<div className="min-h-screen bg-gray-50 pb-24">
<header className="bg-[var(--primary)] text-white p-4 sticky top-0 z-10">
<div className="flex items-center gap-2"><MessageSquare size={24} /><h1 className="text-base font-semibold">안전보이스 등록</h1></div>
</header>

<main className="p-4">
<div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
<h2 className="text-xs font-semibold text-gray-700 mb-3 flex items-center gap-2"><span className="w-1 h-4 bg-[var(--primary)] rounded-full" />기본 정보</h2>
<div className="space-y-3">
<div><label className="text-[10px] text-gray-500 mb-1 block">등록일 *</label><Input type="date" value={form.date} onChange={e => handleChange("date", e.target.value)} className="text-xs h-9" /></div>
<div><label className="text-[10px] text-gray-500 mb-1 block">작성자 *</label><Input placeholder="이름 입력" value={form.registrant} onChange={e => handleChange("registrant", e.target.value)} className="text-xs h-9" /></div>
<div><label className="text-[10px] text-gray-500 mb-1 block">내용 *</label><textarea placeholder="안전 관련 제안이나 의견을 자유롭게 작성해주세요" value={form.content} onChange={e => handleChange("content", e.target.value)} className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--primary)] min-h-[120px] resize-none" /></div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-4">
<h2 className="text-xs font-semibold text-gray-700 mb-3 flex items-center gap-2"><span className="w-1 h-4 bg-[var(--primary)] rounded-full" />현장 사진 (선택)</h2>
<div className="flex gap-2 mb-3">
<button onClick={handlePhotoCapture} className="flex items-center gap-1 px-4 py-2 text-xs text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"><Camera size={14} />촬영</button>
<button onClick={handlePhotoSelect} className="flex items-center gap-1 px-4 py-2 text-xs text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"><Image size={14} />앨범</button>
</div>
{photos.length > 0 && (
<div className="flex flex-wrap gap-2">
{photos.map((photo, i) => (
<div key={i} className="relative">
<img src={photo} alt={`사진${i + 1}`} className="w-16 h-16 object-cover rounded border" />
<button onClick={() => handleRemovePhoto(i)} className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center"><X size={12} /></button>
</div>
))}
</div>
)}
{photos.length === 0 && <p className="text-xs text-gray-400">필요시 사진을 추가해주세요</p>}
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
<button onClick={handleSubmit} disabled={isSubmitting} className="w-full py-3 bg-[var(--primary)] text-white text-sm font-semibold rounded-lg hover:opacity-90 disabled:opacity-50">{isSubmitting ? "등록 중..." : "등록하기"}</button>
</div>
</div>
)
}