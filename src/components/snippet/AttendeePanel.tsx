import React, { useState } from "react"
import Button from "@/components/common/base/Button"
import DataTable, { Column, DataRow } from "@/components/common/tables/DataTable"
import { Trash2, Plus, Send } from "lucide-react"
import Badge from "@/components/common/base/Badge"
import useTableActions from "@/hooks/tableActions"

interface Attendee { name: string; phone: string; signed?: boolean }
interface Props { attendees: Attendee[]; onAdd: (att: Attendee) => void; onRemove: (idx: number) => void }

const BORDER_CLASS = "border-[var(--border)]"
const TEXT_PRIMARY = "text-gray-800"
const TEXT_SIZE = "text-xs md:text-sm"
const INPUT_HEIGHT = "h-9 md:h-10"
const BTN_HEIGHT = "h-9 md:h-10"

const tableStyle = `
<style>
.hide-select-col table thead th:first-child, .hide-select-col table tbody td:first-child {display:none!important;}
.no-row-hover table tbody tr:hover {pointer-events:none;}
.no-row-hover table tbody tr button {pointer-events:auto;}
</style>
`

export default function AttendeePanel({ attendees, onAdd, onRemove }: Props) {
const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [demoRows, setDemoRows] = useState<Attendee[]>(attendees.length === 0 ? [
{ name: "홍길동", phone: "010-1234-5678", signed: false },
{ name: "박안전", phone: "010-2222-3333", signed: true },
{ name: "최관리", phone: "010-4444-5555", signed: true }
] : [])

const isDemo = attendees.length === 0
const currentList = isDemo ? demoRows : attendees

const { handleAdd: triggerAdd, handleSubmit } = useTableActions({
data: currentList,
checkedIds: [],
onAdd: () => {
if (!name.trim()) { alert("이름을 입력해주세요"); return }
const phoneDigits = phone.replace(/[^0-9]/g, "")
if (phoneDigits.length !== 11) { alert("연락처를 정확히 입력해주세요 (11자리)"); return }
onAdd({ name, phone, signed: false })
setName("")
setPhone("")
},
onSubmit: () => {
if (currentList.length === 0) { alert("등록된 참석자가 없습니다"); return }
alert(`${currentList.length}명의 참석자에게 서명 요청이 전송되었습니다`)
},
submitMessage: ""
})

const formatPhone = (v: string) => {
const only = v.replace(/[^0-9]/g, "")
if (only.length <= 3) return only
if (only.length <= 7) return `${only.slice(0, 3)}-${only.slice(3)}`
return `${only.slice(0, 3)}-${only.slice(3, 7)}-${only.slice(7, 11)}`
}

const handleDelete = (idx: number) => {
if (!window.confirm("정말 삭제하시겠습니까?")) return
if (isDemo) setDemoRows(rows => rows.filter((_, i) => i !== idx))
else onRemove(idx)
alert("삭제되었습니다.")
}

const columns: Column[] = [
{ key: "name", label: "이름", minWidth: 60, maxWidth: 90 },
{ key: "phone", label: "휴대폰", minWidth: 100, maxWidth: 130 },
{ key: "signature", label: "서명", minWidth: 60, maxWidth: 80 },
{ key: "actions", label: "삭제", minWidth: 40, maxWidth: 50 }
]

const data: DataRow[] = currentList.map((att, idx) => ({
id: idx,
name: att.name,
phone: att.phone,
signature: <Badge color={att.signed ? "blue" : "red"}>{att.signed ? "완료" : "미완료"}</Badge>,
actions: (
<button aria-label="삭제" className="p-1 rounded hover:bg-gray-100 relative z-10" style={{ pointerEvents: 'auto' }} onClick={() => handleDelete(idx)}>
<Trash2 className="w-4 h-4 text-gray-600" />
</button>
)
}))

return (
<div className="flex flex-col h-full">
<div dangerouslySetInnerHTML={{ __html: tableStyle }} />
<div className="border border-gray-100 rounded-xl md:rounded-2xl p-3 md:p-4">
<h3 className={`${TEXT_PRIMARY} font-semibold ${TEXT_SIZE} mb-3 md:mb-4`}>참석자 등록하기</h3>

<div className="flex flex-col lg:flex-row gap-2 items-end mb-3 md:mb-4">
<div className="flex-1 min-w-0 w-full lg:w-auto">
<label className={`${TEXT_SIZE} font-medium ${TEXT_PRIMARY} mb-1 block`}>이름</label>
<input
value={name}
onChange={e => setName(e.target.value)}
placeholder="이름 입력"
maxLength={20}
className={`border ${BORDER_CLASS} rounded-lg px-2 md:px-3 ${INPUT_HEIGHT} w-full ${TEXT_SIZE}`}
onKeyDown={e => {
if (!/[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/.test(e.key) && !["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"].includes(e.key)) e.preventDefault()
}}
onPaste={e => e.preventDefault()}
/>
</div>
<div className="flex-1 min-w-0 w-full lg:w-auto">
<label className={`${TEXT_SIZE} font-medium ${TEXT_PRIMARY} mb-1 block`}>연락처</label>
<input
value={phone}
onChange={e => setPhone(formatPhone(e.target.value))}
placeholder="010-1234-5678"
maxLength={13}
className={`border ${BORDER_CLASS} rounded-lg px-2 md:px-3 ${INPUT_HEIGHT} w-full ${TEXT_SIZE}`}
inputMode="numeric"
onKeyDown={e => {
if (!/[0-9]/.test(e.key) && !["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"].includes(e.key)) e.preventDefault()
}}
/>
</div>
<Button variant="action" onClick={triggerAdd} className={`${BTN_HEIGHT} ${TEXT_SIZE} shrink-0 w-full lg:w-auto flex items-center justify-center gap-1`}>
<Plus size={16} className="md:w-[18px] md:h-[18px]" />추가
</Button>
</div>

<div className="border-t border-gray-100 pt-3 hide-select-col no-row-hover">
<DataTable columns={columns} data={data} selectable={false} />
{data.length === 0 && (
<div className={`w-full text-center text-gray-400 mt-6 ${TEXT_SIZE} select-none`}>등록된 참석자가 없습니다</div>
)}
<div className="flex justify-end mt-3 md:mt-4">
<Button variant="action" onClick={handleSubmit} className={`${BTN_HEIGHT} ${TEXT_SIZE} flex items-center gap-1`}>
<Send size={16} className="md:w-[18px] md:h-[18px]" />참석자 서명 전송하기
</Button>
</div>
</div>
</div>
</div>
)
}