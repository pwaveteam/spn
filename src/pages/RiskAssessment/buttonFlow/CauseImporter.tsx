import Button from'@/components/common/base/Button'
import DataTable,{Column,DataRow}from'@/components/common/tables/DataTable'
import{causeImporterMockData}from'@/data/mockRiskAssessmentData'

type Props={isOpen:boolean;onClose:()=>void;onSubmit?:()=>void}

export default function CauseImporter({ isOpen, onClose, onSubmit }: Props) {
if (!isOpen) return null

const columns: Column[] = [
{ key: 'category', label: '위험분류', minWidth: 160, align: 'center' },
{ key: 'situation', label: '위험발생 상황 및 결과', minWidth: 300, align: 'left' },
{ key: 'hazard', label: '유해위험요인', minWidth: 240, align: 'left' }
]

const data:DataRow[]=causeImporterMockData.map(row=>({
id:row.id,
category:row.category,
situation:row.situation,
hazard:row.hazard
}))

return (
<div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
<div className="bg-white w-full max-w-[960px] rounded-[13px] border border-[#E5E5E5] shadow-md">
<div className="px-5 py-4 font-semibold text-base text-[#333639]">기인물요인 불러오기</div>
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