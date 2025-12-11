import React from "react"
import DataTable, { Column, DataRow } from "@/components/common/tables/DataTable"
import { DocumentApprovalSetting } from "@/data/mockBusinessData"

interface ApprovalLineOption {
  id: number | string
  name: string
  steps: string
}

interface Props {
  settings: DocumentApprovalSetting[]
  approvalLines: ApprovalLineOption[] | DataRow[]
  onToggleApproval: (id: number, value: boolean) => void
  onApprovalLineChange: (id: number, value: string) => void
}

export default function ApprovalDocTable({
  settings,
  approvalLines,
  onToggleApproval,
  onApprovalLineChange
}: Props) {
  const columns: Column<DataRow>[] = [
    { key: "approvalType", label: "결재 유형" },
    { key: "useApproval", label: "결재 사용", type: "toggle" },
    {
      key: "approvalLineId",
      label: "적용 결재선",
      minWidth: 200,
      renderCell: (row) => (
        <select
          value={row.approvalLineId ?? ""}
          onChange={(e) => onApprovalLineChange(row.id as number, e.target.value)}
          disabled={!row.useApproval}
          className={`w-full border border-[var(--border)] rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--primary)] transition-colors ${
            !row.useApproval ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white"
          }`}
        >
          <option value="">결재선 선택</option>
          {approvalLines.map(line => (
            <option key={line.id} value={line.id}>
              {line.name} ({line.steps})
            </option>
          ))}
        </select>
      )
    }
  ]

  const data: DataRow[] = settings.map(s => ({
    id: s.id,
    approvalType: s.approvalType,
    useApproval: s.useApproval,
    approvalLineId: s.approvalLineId
  }))

  return (
    <>
      <div className="mb-3 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>안내:</strong> 결재 사용을 활성화하면 해당 문서 작성 시 선택된 결재선에 따라 결재 프로세스가 진행됩니다.
        </p>
      </div>
      <DataTable
        columns={columns}
        data={data}
        selectable={false}
        onToggleChange={(id, _key, value) => onToggleApproval(id as number, value)}
      />
    </>
  )
}
