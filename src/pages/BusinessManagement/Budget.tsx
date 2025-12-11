import React, { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import PageTitle from "@/components/common/base/PageTitle"
import TabMenu from "@/components/common/base/TabMenu"
import FilterBar from "@/components/common/base/FilterBar"
import BudgetTable, { BudgetItem } from "@/components/snippetBusiness/BudgetTable"
import InspectionTable, { InspectionItem } from "@/components/snippetBusiness/InspectionTable"
import Button from "@/components/common/base/Button"
import { Trash2 } from "lucide-react"
import useFilterBar from "@/hooks/useFilterBar"
import useTableActions from "@/hooks/tableActions"
import { inspectionItemsMockData, budgetItemsMockData } from "@/data/mockBusinessData"

const TAB_LABELS = ["안전보건 목표 및 추진계획", "안전보건예산"]

export default function Budget() {
const [searchParams, setSearchParams] = useSearchParams()
const [activeTab, setActiveTab] = useState<number>(0)

useEffect(() => {
setSearchParams({ tab: TAB_LABELS[activeTab] })
}, [activeTab, setSearchParams])
const [inspItems, setInspItems] = useState<InspectionItem[]>(inspectionItemsMockData)
const [budgetItems, setBudgetItems] = useState<BudgetItem[]>(budgetItemsMockData)
const [checkedIds, setCheckedIds] = useState<(number | string)[]>([])

const { startDate, endDate, setStartDate, setEndDate } = useFilterBar()

const handleInspAdd = () => {
const nextId = Math.max(...inspItems.map(i => i.id), 0) + 1
setInspItems(prev => [...prev, {
id: nextId,
detailPlan: "",
q1: false,
q2: false,
q3: false,
q4: false,
KPI: "",
department: "",
achievementRate: "",
resultRemark: "",
entryDate: new Date().toISOString().slice(0, 10)
}])
}

const handleBudgetAdd = () => {
const nextId = Math.max(...budgetItems.map(i => i.id), 0) + 1
setBudgetItems(prev => [...prev, {
id: nextId,
year: startDate.slice(0, 4) || new Date().getFullYear().toString(),
itemName: "",
category: "",
budget: "0",
spent: "0",
remaining: "0",
carryOver: false,
attachment: null,
author: "",
entryDate: new Date().toISOString().slice(0, 10)
}])
}

const inspActions = useTableActions({
data: inspItems,
checkedIds,
onAdd: handleInspAdd,
onSave: () => {},
onDeleteSuccess: (ids) => setInspItems(prev => prev.filter(item => !ids.includes(item.id))),
saveMessage: "목표 및 추진계획이 저장되었습니다"
})

const budgetActions = useTableActions({
data: budgetItems,
checkedIds,
onAdd: handleBudgetAdd,
onSave: () => {},
onDeleteSuccess: (ids) => setBudgetItems(prev => prev.filter(item => !ids.includes(item.id))),
saveMessage: "안전보건예산이 저장되었습니다"
})

const currentActions = activeTab === 0 ? inspActions : budgetActions
const currentItems = activeTab === 0 ? inspItems : budgetItems

const handleInspChange = (id: number | string, field: keyof Omit<InspectionItem, "id">, value: string | boolean) => {
setInspItems(items => items.map(item => item.id === id ? { ...item, [field]: value } : item))
}

const handleBudgetChange = (id: number | string, field: keyof Omit<BudgetItem, "id" | "year">, value: string | boolean | File) => {
setBudgetItems(items => items.map(item => {
if (item.id !== id) return item
const next = { ...item, [field]: value }
if (field === "budget" || field === "spent") {
const b = parseInt(next.budget.replace(/[^0-9]/g, ""), 10) || 0
const s = parseInt(next.spent.replace(/[^0-9]/g, ""), 10) || 0
next.remaining = Math.max(0, b - s).toString()
if (next.remaining === "0") next.carryOver = false
}
return next
}))
}

return (
<section className="mypage-content w-full bg-white">
<PageTitle>{TAB_LABELS[activeTab]}</PageTitle>
<TabMenu tabs={TAB_LABELS} activeIndex={activeTab} onTabClick={setActiveTab} className="mb-6" />

<div className="mb-3">
<FilterBar
startDate={startDate}
endDate={endDate}
onStartDate={setStartDate}
onEndDate={setEndDate}
onSearch={() => {}}
/>
</div>

<div className="flex justify-between items-center mb-3">
<span className="text-gray-600 text-sm">총 {currentItems.length}건</span>
<div className="flex gap-1">
<Button variant="action" onClick={currentActions.handleDelete} className="flex items-center gap-1">
<Trash2 size={16} />삭제
</Button>
</div>
</div>

<div className="overflow-x-auto bg-white">
{activeTab === 0 ? (
<InspectionTable items={inspItems} onChangeField={handleInspChange} />
) : (
<BudgetTable items={budgetItems} onChangeField={handleBudgetChange} />
)}
</div>

<div className="flex justify-end mt-5">
<Button variant="primary" onClick={currentActions.handleSave}>저장하기</Button>
</div>
</section>
)
}