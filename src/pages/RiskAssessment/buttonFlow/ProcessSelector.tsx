import{useState}from'react'
import{Info}from'lucide-react'
import DataTable,{Column,DataRow}from'@/components/common/tables/DataTable'
import EditableTextArea from'@/components/common/inputs/EditableTextArea'
import Tooltip from'@/components/common/base/Tooltip'
import{processSelectorMockData}from'@/data/mockRiskAssessmentData'

type ProcessSelectorProps={
industry:any
selected:any
onSelect:(value:any)=>void
}

export default function ProcessSelector({industry,selected,onSelect}:ProcessSelectorProps){
const[rows,setRows]=useState(processSelectorMockData)
const handleChange=(id:number,val:string)=>setRows(prev=>prev.map(row=>(row.id===id?{...row,description:val}:row)))

const columns: Column[] = [
{ key: 'process', label: '공정(작업)', minWidth: 120, align: 'center' },
{ key: 'description', label: '공정 설명', minWidth: 300, align: 'left', renderCell: row => (
<EditableTextArea
value={row.description as string}
onChange={val => handleChange(row.id as number, val)}
maxLength={200}
rows={2}
placeholder="공정 설명을 입력하세요"
className="text-xs sm:text-xs md:text-sm"
/>
)}
]

const data: DataRow[] = rows.map(row => ({ id: row.id, process: row.process, description: row.description }))

return (
<div className="space-y-4 text-xs sm:text-xs md:text-sm">
<DataTable columns={columns} data={data} selectable />
</div>
)
}