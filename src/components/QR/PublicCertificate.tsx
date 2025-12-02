import React, { useState } from "react"
import { GraduationCap, Upload, X, CheckCircle, FileText, Image } from "lucide-react"
import { Input } from "@/components/ui/input"

type FileItem = { name: string; type: string; data: string }

export default function PublicCertificate() {
  const [form, setForm] = useState({ name: "", department: "", phone: "", educationName: "", completionDate: "" })
  const [files, setFiles] = useState<FileItem[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }))

  const handleFileSelect = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*,.pdf"
    input.multiple = true
    input.onchange = (e) => {
      const selectedFiles = (e.target as HTMLInputElement).files
      if (selectedFiles) {
        Array.from(selectedFiles).forEach(file => {
          const reader = new FileReader()
          reader.onload = (ev) => setFiles(prev => [...prev, { name: file.name, type: file.type, data: ev.target?.result as string }])
          reader.readAsDataURL(file)
        })
      }
    }
    input.click()
  }

  const handleRemoveFile = (index: number) => setFiles(prev => prev.filter((_, i) => i !== index))

  const handleSubmit = async () => {
    if (!form.name || !form.educationName || !form.completionDate) { alert("이름, 교육명, 이수일을 입력해주세요."); return }
    if (files.length === 0) { alert("이수증 파일을 업로드해주세요."); return }
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleReset = () => { setForm({ name: "", department: "", phone: "", educationName: "", completionDate: "" }); setFiles([]); setIsSuccess(false) }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-xl p-8 text-center shadow-lg max-w-sm w-full">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-2">제출 완료</h2>
          <p className="text-sm text-gray-500 mb-6">이수증이 성공적으로 제출되었습니다.</p>
          <button onClick={handleReset} className="w-full py-3 bg-[var(--primary)] text-white text-sm font-semibold rounded-lg">새 이수증 제출</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-[var(--primary)] text-white p-4 sticky top-0 z-10">
        <div className="flex items-center gap-2"><GraduationCap size={24} /><h1 className="text-base font-semibold">이수증 제출</h1></div>
      </header>

      <main className="p-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <h2 className="text-xs font-semibold text-gray-700 mb-3 flex items-center gap-2"><span className="w-1 h-4 bg-[var(--primary)] rounded-full" />제출자 정보</h2>
          <div className="space-y-3">
            <div><label className="text-[10px] text-gray-500 mb-1 block">이름 *</label><Input placeholder="이름 입력" value={form.name} onChange={e => handleChange("name", e.target.value)} className="text-xs h-9" /></div>
            <div><label className="text-[10px] text-gray-500 mb-1 block">소속/부서</label><Input placeholder="소속 또는 부서 입력" value={form.department} onChange={e => handleChange("department", e.target.value)} className="text-xs h-9" /></div>
            <div><label className="text-[10px] text-gray-500 mb-1 block">연락처</label><Input placeholder="010-0000-0000" value={form.phone} onChange={e => handleChange("phone", e.target.value)} className="text-xs h-9" /></div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <h2 className="text-xs font-semibold text-gray-700 mb-3 flex items-center gap-2"><span className="w-1 h-4 bg-[var(--primary)] rounded-full" />교육 정보</h2>
          <div className="space-y-3">
            <div><label className="text-[10px] text-gray-500 mb-1 block">교육명 *</label><Input placeholder="이수한 교육명 입력" value={form.educationName} onChange={e => handleChange("educationName", e.target.value)} className="text-xs h-9" /></div>
            <div><label className="text-[10px] text-gray-500 mb-1 block">이수일 *</label><Input type="date" value={form.completionDate} onChange={e => handleChange("completionDate", e.target.value)} className="text-xs h-9" /></div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h2 className="text-xs font-semibold text-gray-700 mb-3 flex items-center gap-2"><span className="w-1 h-4 bg-[var(--primary)] rounded-full" />이수증 파일 *</h2>
          <p className="text-[10px] text-gray-400 mb-3">이미지 또는 PDF 파일을 업로드해주세요</p>
          <button onClick={handleFileSelect} className="flex items-center gap-2 px-4 py-2 text-xs text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 w-full justify-center"><Upload size={14} />파일 선택</button>
          {files.length > 0 && (
            <div className="mt-3 space-y-2">
              {files.map((file, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  {file.type.startsWith("image/") ? (
                    <img src={file.data} alt={file.name} className="w-10 h-10 object-cover rounded" />
                  ) : (
                    <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center"><FileText size={16} className="text-red-500" /></div>
                  )}
                  <span className="flex-1 text-xs text-gray-600 truncate">{file.name}</span>
                  <button onClick={() => handleRemoveFile(i)} className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center"><X size={12} /></button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button onClick={handleSubmit} disabled={isSubmitting} className="w-full py-3 bg-[var(--primary)] text-white text-sm font-semibold rounded-lg hover:opacity-90 disabled:opacity-50">{isSubmitting ? "제출 중..." : "제출하기"}</button>
      </div>
    </div>
  )
}