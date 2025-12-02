import React, { useMemo, useState, useCallback, useEffect } from "react"
import { X, Search } from "lucide-react"
import Button from "@/components/common/base/Button"

type Category = "공통"
type CategoryAll = Category | "-전체-"
type Template = { id: number; category: Category; name: string; items: string[] }
type Props = { onClose: () => void; onConfirm: (items: string[]) => void }

const BORDER_CLASS = "border-[#E5E7EB]"
const HEADER_BG_CLASS = "bg-[#F3F5F7]"
const TEXT_PRIMARY_CLASS = "text-[#333A3F]"
const TEXT_SECONDARY_CLASS = "text-[#595F68]"

const TH = `text-[13px] font-medium ${TEXT_SECONDARY_CLASS} ${HEADER_BG_CLASS} border-b ${BORDER_CLASS} px-3 py-3`
const TD = `text-[13px] ${TEXT_PRIMARY_CLASS} px-3 py-2 border-b ${BORDER_CLASS}`
const LABEL_CLASS = `text-sm font-medium ${TEXT_PRIMARY_CLASS} whitespace-nowrap`
const INPUT_CLASS = "h-[36px] border border-[#E5E7EB] rounded-[8px] px-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#B9D0F6] text-sm font-normal text-[#333A3F] placeholder:text-[#AAAAAA]"

const CATEGORY_OPTIONS: { label: string; value: CategoryAll }[] = [
{ label: "-전체-", value: "-전체-" },
{ label: "공통", value: "공통" }
]

const T = (id: number, name: string, items: string[]): Template => ({ id, category: "공통", name, items })

const MOCK_TEMPLATES: Template[] = [
T(1, "공통필수확인(작업전)", [
"[TBM] 작업 전 위험요인 및 대책 공유가 완료되었는가?",
"[TBM] 작업자 전원의 건강 상태(음주, 피로 등)를 확인했는가?",
"[필수 보호구 착용] 안전모, 안전화, 보안경 착용 완료여부",
"[필수 보호구 착용] 방진마스크 (분진 발생 구역 등급 확인) 및 귀마개 착용여부",
"[작업허가서 승인] 화기 / 밀폐공간 / 고소 / 중장비 작업 허가 승인을 득하였는가?",
"[LOTOTO 관리] 정비 대상 설비의 동력(전기) 차단 및 잠금 장치를 체결했는가?",
"[LOTOTO 관리] 조작 금지 표지판(Tag)을 부착했는가?",
"[2인1조 원칙] 단독 작업을 금지하고, 감시인 또는 동료 작업자가 배치되었는가?"
]),
T(2, "설비 정비 및 기계 안전", [
"[잔압 제거] 유압/공압 라인 분해 전, 압력 게이지가 \"0\" Bar임을 확인했는가?",
"[잔압 제거] 어큐뮬레이터(축압기) 내부 압력을 완전히 제거했는가?",
"[고압 가스 취급] 고압 가스 충전용 호스 및 레귤레이터 상태는 양호한가?",
"[고압 가스 취급] 가스 용기는 전도되지 않도록 체인 등으로 고정되어 있는가?",
"[협착 및 끼임 방지] 시운전 시 회전체 반경 내 접근 금지 조치가 되어 있는가?",
"[협착 및 끼임 방지] 정비 중 불시 가동을 방지할 물리적 조치가 확실한가?",
"[화상 및 누유 방지] 고온의 오일/설비 접촉 방지를 위해 충분히 냉각되었는가?",
"[화상 및 누유 방지] 오일 드레인(Drain) 시 바닥 오염 및 미끄럼 방지(흡착포) 조치를 했는가?"
]),
T(3, "작업 환경 및 보건 (밀폐/분진)", [
"[적정 조도 확보] 맨홀 내부, 설비 하부 등 어두운 곳의 작업등(방폭 등)은 설치되었는가?",
"[호흡기 보호] 슬래그/코팅 제거 작업 시 발생하는 분진에 대비해 특급/1급 마스크를 착용했는가?",
"[밀폐공간 안전] 밀폐공간(Chute, Bin) 진입 전 산소 및 유해가스 농도를 측정했는가?",
"[밀폐공간 안전] 밀폐공간 입구에 감시인을 배치했는가?",
"[근골격계 보호] 중량물 취급 시 무리한 자세를 피하고, 보조 도구(체인블럭 등)를 사용하는가?"
]),
T(4, "기구 및 공구 안전", [
"[수공구/전동공구 점검] 스패너, 렌치 등 수공구의 마모나 균열은 없는가?",
"[수공구/전동공구 점검] 전동공구(그라인더 등)의 전선 피복 손상 및 접지 상태는 양호한가?",
"[작업 발판 및 사다리] A형 사다리는 평탄한 곳에 설치하고 전도 방지 조치를 했는가?",
"[작업 발판 및 사다리] 고소 작업 시 안전대 걸이 시설이 확보되어 있는가?"
]),
T(5, "소방시설 외관점검표", [
"불 보이는 위치에 소화기 설치여부","불량기계 적정 설치여부","소화기 용기 변형/손상/부식 여부","가연성 물질 근처 비치 여부",
"소화기 표시사항(제조연월, 사용방법) 훼손 여부","압력게이지 정상범위 여부","사용기간 초과 여부","소화기 거치대, 받침대, 고정상태 이상 여부",
"표시사항 훼손 여부","기초사항(제조번호/제조연월/형식승인) 확인"
]),
T(6, "공용공간 점검표", [
"바닥 마감재 변형, 균열, 파손 여부","벽체 균열, 누수 흔적 여부","천장 마감재 탈락, 누수 흔적 여부","창문/출입문 개폐상태 이상 여부",
"계단 난간 흔들림 여부","복도/통로 장애물 방치 여부","비상구 표지등 점등 여부","피난통로 확보 상태","피난계단 안전상태 이상 여부",
"피난통로 및 계단의 조도 부족 여부"
]),
T(7, "횡단보도/횡방나스 점검표", [
"차량 유도선 훼손 여부","노면 균열, 파손 여부","차량 진입 방지봉 설치 상태","차량 안전시설 유지관리 상태",
"횡단보도 차선 표시 선명 여부","교통신호등 작동 여부","과속방지턱 상태","교통안전 시설물 설치 기준 적정 여부",
"보행자 통행 안전 확보 상태","보행자 신호 준수 여부"
]),
T(8, "외부공간 점검표", [
"조경수, 잔디, 가로수 관리 상태","휴게시설, 의자, 파고라 관리상태","벤치, 운동기구, 체육시설 관리상태",
"조명시설 작동 여부","CCTV 작동 여부","보행로 균열, 파손 여부","배수로 막힘 여부","기타 안전시설 관리 상태"
]),
T(9, "어린이놀이시설 및 체육시설 점검표", [
"놀이기구 설치기준 충족 여부","부품 탈락 여부","충돌 방지 매트 상태","볼트, 너트 풀림 여부","표시사항 부착 여부",
"철제시설 녹 발생 여부","기초 콘크리트 균열 여부","안전펜스 설치 상태","놀이시설 관리대장 작성 여부"
]),
T(10, "소방/전기/승강기 점검표", [
"소화전 압력 정상 여부","소화펌프 작동 여부","스프링클러 작동 여부","비상발전기 작동 여부","누전차단기 정상 동작 여부",
"분전반 차단기 접속상태 양호 여부","승강기 비상벨 작동 여부","승강기 안전센서 작동 여부","승강기 정지층 정확성 여부","승강기 표기 부착 상태"
])
]

const TemplateSelectDialog: React.FC<Props> = ({ onClose, onConfirm }) => {
const [category, setCategory] = useState<CategoryAll>("-전체-")
const [keyword, setKeyword] = useState("")
const [query, setQuery] = useState("")
const [selectedId, setSelectedId] = useState<number | null>(MOCK_TEMPLATES[0]?.id ?? null)

const list = useMemo(() => {
const base = category === "-전체-" ? MOCK_TEMPLATES : MOCK_TEMPLATES.filter(t => t.category === category)
const q = query.trim().toLowerCase()
if (!q) return base
return base.filter(t => t.name.toLowerCase().includes(q) || t.items.some(s => s.toLowerCase().includes(q)))
}, [category, query])

useEffect(() => {
setSelectedId(list[0]?.id ?? null)
}, [list])

const selected = useMemo(() => list.find(t => t.id === selectedId) ?? null, [list, selectedId])

const onChangeCategory = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
setCategory(e.target.value as CategoryAll)
}, [])

const handleSearch = useCallback(() => setQuery(keyword), [keyword])
const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => { 
if (e.key === "Enter") handleSearch() 
}, [handleSearch])

const confirm = useCallback(() => {
if (!selected) { alert("점검표를 선택하세요"); return }
onConfirm(selected.items)
}, [onConfirm, selected])

return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
<div className="bg-white rounded-2xl w-[96vw] max-w-[1200px] p-6 shadow-2xl flex flex-col relative">

{/* Header */}
<div className="flex items-center justify-between mb-4 pb-2">
<h2 className="text-[20px] font-bold tracking-tight text-[#333A3F]">
점검표(체크리스트) 등록
</h2>
<button 
onClick={onClose}
className="p-1 hover:bg-[#F3F5F7] rounded transition text-[#869CAE]"
>
<X size={24} />
</button>
</div>

{/* Filter Area */}
<div className="w-full flex flex-wrap items-center gap-4 mb-4">
<div className="flex items-center gap-3">
<label htmlFor="category" className={LABEL_CLASS}>분류</label>
<select 
id="category" 
value={category} 
onChange={onChangeCategory} 
className={`${INPUT_CLASS} w-[180px] appearance-none pr-8`}
>
{CATEGORY_OPTIONS.map(opt => (
<option key={opt.label} value={opt.value}>{opt.label}</option>
))}
</select>
</div>
<div className="flex items-center gap-3">
<span className={LABEL_CLASS}>검색</span>
<div className="relative">
<input 
type="text" 
className={`${INPUT_CLASS} w-[240px] pr-10`} 
placeholder="검색어 입력" 
value={keyword} 
onChange={e => setKeyword(e.target.value)} 
onKeyDown={handleKeyDown}
/>
<Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
</div>
<Button variant="secondary" className="h-[36px] px-4" onClick={handleSearch}>검색</Button>
</div>
</div>

{/* Tables Grid */}
<div className="grid grid-cols-[3.5fr_6.5fr] gap-5">

{/* Left: Template List */}
<div className="flex flex-col">
<div className="px-1 h-[28px] flex items-center mb-1">
<span className={`text-[13px] font-semibold ${TEXT_PRIMARY_CLASS}`}>점검표 목록</span>
</div>
<div className={`border ${BORDER_CLASS} rounded-lg overflow-hidden h-[420px]`}>
<div className="h-full overflow-auto">
<table className="w-full border-separate border-spacing-0">
<thead className="sticky top-0 z-10">
<tr className={HEADER_BG_CLASS}>
<th className={`${TH} text-left`}>점검표명</th>
</tr>
</thead>
<tbody className="bg-white">
{list.map(t => {
const active = t.id === selectedId
return (
<tr 
key={t.id} 
onClick={() => setSelectedId(t.id)} 
className={`cursor-pointer select-none transition-colors ${active ? "bg-blue-50" : "hover:bg-gray-50"}`}
>
<td className={`${TD} truncate ${active ? "font-medium" : ""}`}>{t.name}</td>
</tr>
)
})}
{list.length === 0 && (
<tr>
<td className={`${TD} text-center text-gray-400 py-8`}>
등록된 점검표가 없습니다.
</td>
</tr>
)}
</tbody>
</table>
</div>
</div>
</div>

{/* Right: Detail Items */}
<div className="flex flex-col">
<div className="px-1 h-[28px] flex items-center mb-1">
<span className={`text-[13px] font-semibold ${TEXT_PRIMARY_CLASS}`}>세부 항목</span>
</div>
<div className={`border ${BORDER_CLASS} rounded-lg overflow-hidden h-[420px]`}>
<div className="h-full overflow-auto">
<table className="w-full border-separate border-spacing-0">
<colgroup>
<col className="w-[60px]" />
<col />
</colgroup>
<thead className="sticky top-0 z-10">
<tr className={HEADER_BG_CLASS}>
<th className={`${TH} text-center border-r ${BORDER_CLASS}`}>번호</th>
<th className={`${TH} text-left`}>점검세부내용</th>
</tr>
</thead>
<tbody className="bg-white">
{!selected && (
<tr>
<td colSpan={2} className={`${TD} text-center text-gray-400 py-8`}>
점검표를 선택하세요.
</td>
</tr>
)}
{selected?.items.map((txt, i) => (
<tr key={i} className="hover:bg-gray-50 transition-colors">
<td className={`${TD} text-center border-r ${BORDER_CLASS}`}>{i + 1}</td>
<td className={TD}>{txt}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>
</div>

{/* Footer Buttons */}
<div className="mt-5 flex justify-center gap-2">
<Button variant="primary" onClick={confirm} className="min-w-[92px]">확인</Button>
</div>

</div>
</div>
)
}

export default TemplateSelectDialog