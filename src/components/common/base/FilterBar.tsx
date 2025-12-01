import React from "react"
import Button from "@/components/common/base/Button"

interface FilterBarProps {
showDateRange?: boolean
startDate?: string
endDate?: string
onStartDate?: (date: string) => void
onEndDate?: (date: string) => void
keyword?: string
onKeywordChange?: (value: string) => void
searchText?: string
onSearchText?: (value: string) => void
educationCourse?: string
onEducationCourseChange?: (value: string) => void
educationTarget?: string
onEducationTargetChange?: (value: string) => void
inspectionField?: string
onInspectionFieldChange?: (value: string) => void
inspectionKind?: string
onInspectionKindChange?: (value: string) => void
onSearch: () => void
}

const TEXT_CLASS = "text-gray-800"
const INPUT_CLASS = `h-[32px] md:h-[36px] border border-[var(--border)] rounded-[8px] px-2 md:px-3 bg-white focus:outline-none focus:ring-1 focus:ring-[var(--secondary)] text-xs md:text-sm font-normal ${TEXT_CLASS} placeholder:text-gray-500`

const courseOptions = [
{ value: "", label: "교육과정 선택" },
{ value: "정기교육", label: "정기교육" },
{ value: "채용 시 교육", label: "채용 시 교육" },
{ value: "작업내용 변경 시 교육", label: "작업내용 변경 시 교육" },
{ value: "특별교육", label: "특별교육" },
{ value: "신규교육", label: "신규교육" },
{ value: "보수교육", label: "보수교육" },
{ value: "최초 노무제공 시 교육", label: "최초 노무제공 시 교육" },
{ value: "건설업 기초안전보건교육", label: "건설업 기초안전보건교육" }
]

const targetOptions = [
{ value: "", label: "교육대상 선택" },
{ value: "근로자 교육", label: "근로자 교육" },
{ value: "관리자 교육", label: "관리자 교육" },
{ value: "기타 교육", label: "기타 교육" }
]

export const inspectionFieldOptions = [
{ value: "", label: "점검분야 선택" },
{ value: "시설물", label: "시설물" },
{ value: "자산(설비)", label: "자산(설비)" },
{ value: "자율점검", label: "자율점검" }
]

export const inspectionKindOptions = [
{ value: "", label: "점검종류 선택" },
{ value: "정기점검", label: "정기점검" },
{ value: "수시점검", label: "수시점검" },
{ value: "특별점검", label: "특별점검" },
{ value: "일일점검", label: "일일점검" }
]

const renderSelect = (value: string, onChange: (v: string) => void, options: { value: string; label: string }[]) => (
<select className={`${INPUT_CLASS} w-full sm:w-[220px] appearance-none pr-6 md:pr-8`} value={value} onChange={e => onChange(e.target.value)}>
{options.map(opt => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
</select>
)

const FilterBar: React.FC<FilterBarProps> = ({
showDateRange = true,
startDate,
endDate,
onStartDate,
onEndDate,
keyword,
onKeywordChange,
searchText,
onSearchText,
educationCourse,
onEducationCourseChange,
educationTarget,
onEducationTargetChange,
inspectionField,
onInspectionFieldChange,
inspectionKind,
onInspectionKindChange,
onSearch
}) => {
const shouldShowDate = Boolean(showDateRange && startDate !== undefined && endDate !== undefined && onStartDate && onEndDate)

const hasSearchInput = (keyword !== undefined && onKeywordChange) || (searchText !== undefined && onSearchText)

return (
<section className="tbm-filter w-full flex flex-wrap items-center gap-2 px-2 md:px-3 py-2 md:py-3 mb-2 md:mb-3 bg-white border border-[var(--border)] rounded-[10px]">
<div className="flex flex-wrap items-center gap-2 flex-grow min-w-0 w-full">
{shouldShowDate && (
<div className="flex items-center gap-1 md:gap-2 w-full sm:w-auto min-w-0">
<span className="text-xs md:text-sm font-medium text-gray-800 whitespace-nowrap shrink-0">기간</span>
<div className="flex items-center gap-1 md:gap-2 flex-1 sm:flex-none w-full sm:w-auto">
<input type="date" className={`${INPUT_CLASS} flex-1 sm:w-[130px] w-full`} value={startDate} onChange={e => onStartDate!(e.target.value)} />
<span className={`text-xs md:text-sm font-normal ${TEXT_CLASS} select-none shrink-0`}>~</span>
<input type="date" className={`${INPUT_CLASS} flex-1 sm:w-[130px] w-full`} value={endDate} onChange={e => onEndDate!(e.target.value)} />
</div>
</div>
)}

{((educationCourse !== undefined && onEducationCourseChange) || (educationTarget !== undefined && onEducationTargetChange)) && (
<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto flex-shrink-0">
{educationCourse !== undefined && onEducationCourseChange && renderSelect(educationCourse, onEducationCourseChange, courseOptions)}
{educationTarget !== undefined && onEducationTargetChange && renderSelect(educationTarget, onEducationTargetChange, targetOptions)}
</div>
)}

{((inspectionField !== undefined && onInspectionFieldChange) || (inspectionKind !== undefined && onInspectionKindChange)) && (
<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto flex-shrink-0">
{inspectionField !== undefined && onInspectionFieldChange && renderSelect(inspectionField, onInspectionFieldChange, inspectionFieldOptions)}
{inspectionKind !== undefined && onInspectionKindChange && renderSelect(inspectionKind, onInspectionKindChange, inspectionKindOptions)}
</div>
)}

{hasSearchInput ? (
<div className="flex items-center gap-1 md:gap-2 w-full sm:w-auto min-w-0">
<div className="flex items-center gap-1 md:gap-2 w-full sm:w-auto">
<input
type="text"
className={`${INPUT_CLASS} flex-1 w-full sm:w-[250px]`}
placeholder="검색어 입력"
value={keyword ?? searchText ?? ""}
onChange={e => { if (onKeywordChange) onKeywordChange(e.target.value); else if (onSearchText) onSearchText(e.target.value) }}
/>
<Button variant="primary" className="h-[32px] md:h-[36px] px-3 md:px-5 text-xs md:text-sm shrink-0" onClick={onSearch}>검색</Button>
</div>
</div>
) : (
<div className="flex items-center gap-1 flex-shrink-0 w-full sm:w-auto">
<Button variant="primary" className="h-[32px] md:h-[36px] px-3 md:px-5 text-xs md:text-sm w-full sm:w-auto" onClick={onSearch}>검색</Button>
</div>
)}
</div>
</section>
)
}

export default FilterBar