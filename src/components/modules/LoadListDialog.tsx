import React, { useState, useEffect } from "react"
import { X } from "lucide-react"
import Button from "@/components/common/base/Button"
import Pagination from "@/components/common/base/Pagination"

interface Item {
  id: string | number
  name: string
}

interface LoadListDialogProps {
  isOpen: boolean
  items: Item[]
  selectedId?: string | number | null
  selectedIds?: (string | number)[]
  onChangeSelected: (selected: (string | number)[] | string | number | null) => void
  onClose: () => void
  singleSelect?: boolean
}

const BORDER_CLASS = "border-[var(--border)]"
const HEADER_BG_CLASS = "bg-[#F3F5F7]"
const TEXT_PRIMARY_CLASS = "text-[#333A3F]" 
const TEXT_SECONDARY_CLASS = "text-[#595F68]"

export default function LoadListDialog({
  isOpen,
  items,
  selectedId = null,
  selectedIds = [],
  onChangeSelected,
  onClose,
  singleSelect = false,
}: LoadListDialogProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    if (isOpen) setCurrentPage(1)
  }, [isOpen])

  const handleSelect = (id: string | number) => {
    if (singleSelect) {
      onChangeSelected(id)
      onClose()
    } else {
      const current = selectedIds || []
      const isSelected = current.includes(id)
      const newSelected = isSelected 
        ? current.filter(x => x !== id) 
        : [...current, id]
      onChangeSelected(newSelected)
    }
  }

  const totalPages = Math.ceil(items.length / itemsPerPage)
  const paginatedList = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const sampleDates = ["2024-05-26", "2024-05-25", "2024-05-24", "2024-05-23", "2024-05-22"]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl w-[800px] max-w-full p-6 shadow-2xl h-[85vh] flex flex-col relative">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-2 pb-2">
          <h2 className="text-[20px] font-bold tracking-tight text-[#333A3F]">
            위험성평가표 불러오기
          </h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-[#F3F5F7] rounded transition text-[#869CAE]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="text-right mb-2 text-[13px] text-[#FF4D4F]">
          * '승인완료' 상태의 위험성평가표만 조회됩니다.
        </div>

        {/* Table Area */}
        <div className="flex-1 overflow-auto mb-4 border border-[#E5E7EB] rounded-lg">
          <table className="w-full border-separate border-spacing-0">
            <thead className="sticky top-0 z-10">
              <tr className={HEADER_BG_CLASS}>
                <th className={`border-b ${BORDER_CLASS} px-4 py-3 text-[14px] font-medium ${TEXT_SECONDARY_CLASS} w-[80px] text-center`}>
                  No
                </th>
                <th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-3 text-[14px] font-medium ${TEXT_SECONDARY_CLASS} text-left`}>
                  위험성평가명
                </th>
                <th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-3 text-[14px] font-medium ${TEXT_SECONDARY_CLASS} w-[120px] text-center`}>
                  등록일
                </th>
                <th className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-3 text-[14px] font-medium ${TEXT_SECONDARY_CLASS} w-[90px] text-center`}>
                  선택
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {paginatedList.length > 0 ? (
                paginatedList.map((item, index) => {
                  const globalIndex = (currentPage - 1) * itemsPerPage + index + 1
                  const isSelected = singleSelect 
                    ? selectedId === item.id 
                    : selectedIds?.includes(item.id)

                  return (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className={`border-b ${BORDER_CLASS} px-4 py-2 text-[13px] ${TEXT_PRIMARY_CLASS} text-center`}>
                        {globalIndex}
                      </td>
                      <td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-2 text-[13px] ${TEXT_PRIMARY_CLASS} font-normal`}>
                        {item.name}
                      </td>
                      <td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-4 py-2 text-[13px] ${TEXT_PRIMARY_CLASS} text-center text-gray-500`}>
                        {sampleDates[index % sampleDates.length]}
                      </td>
                      <td className={`border-b ${BORDER_CLASS} border-l ${BORDER_CLASS} px-2 py-2`}>
                        <div className="flex items-center justify-center w-full h-full">
                          <Button 
                            variant={isSelected ? "secondary" : "action"} 
                            onClick={() => handleSelect(item.id)}
                            className="text-[11px] h-[26px] px-2 py-0"
                          >
                            {isSelected && !singleSelect ? "해제" : "선택"}
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td 
                    colSpan={4} 
                    className="p-12 text-[14px] text-gray-400 text-center"
                  >
                    <span>등록된 위험성평가표가 없습니다.</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center pt-2">
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

      </div>
    </div>
  )
}