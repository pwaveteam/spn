import Button from'@/components/common/base/Button'
import DataTable,{Column,DataRow}from'@/components/common/tables/DataTable'
import{nearMissImporterMockData}from'@/data/mockRiskAssessmentData'

type Props={isOpen:boolean;onClose:()=>void;onSubmit?:()=>void}

export default function NearMissImporter({ isOpen, onClose, onSubmit }: Props) {
if (!isOpen) return null

const columns: Column[] = [
{ key: 'process', label: '공정(작업)', minWidth: 180, align: 'center' },
{ key: 'hazard', label: '유해위험요인', minWidth: 400, align: 'left' },
{ key: 'action', label: '현재 안전보건조치', minWidth: 280, align: 'left' }
]

const data:DataRow[]=nearMissImporterMockData.map(row=>({
id:row.id,
process:row.process,
hazard:row.hazard,
action:row.action
}))

return (
<div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
<div className="bg-white w-full max-w-[1120px] rounded-[13px] border border-[#E5E5E5] shadow-md">
<div className="px-5 py-4 font-semibold text-base text-[#333639]">아차사고 불러오기</div>
<div className="px-5 pt-0 pb-4 max-h-[65vh] overflow-y-auto">
<DataTable columns={columns} data={data} />
</div>
<div className="flex justify-center gap-1 px-5 pb-5">
<Button variant="primaryOutline" onClick={onClose} className="min-w-[80px] h-[36px] text-sm">닫기</Button>
<Button variant="primary" onClick={onSubmit} className="min-w-[80px] h-[36px] text-sm">확인</Button>
</div>
</div>
</div>
)
}