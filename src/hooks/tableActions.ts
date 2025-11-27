import QRCode from "qrcode"
import { useLoadingStore } from "@/stores/loadingStore"

export interface TableActionsParams<T = any> {
  data: T[]
  checkedIds: (number | string)[]
  onCreate?: () => void
  onDeleteSuccess?: (deletedIds: (number | string)[]) => void
  onSave?: () => void
  onAdd?: () => void
  onImageSave?: () => void
  onUploadClick?: () => void
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit?: () => void
  onLoad?: () => void
  saveMessage?: string
  submitMessage?: string
}

export interface TableActions {
  handleCreate: () => void
  handleDelete: () => void
  handleDownload: () => void
  handleGenerateQR: () => Promise<void>
  handleFormDownload: () => void
  handleSave: () => void
  handleAdd: () => void
  handleImageSave: () => void
  handleUploadClick: () => void
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: () => void
  handleLoad: () => void
}

export default function useTableActions<T = any>({
  data,
  checkedIds,
  onCreate,
  onDeleteSuccess,
  onSave,
  onAdd,
  onImageSave,
  onUploadClick,
  onFileChange,
  onSubmit,
  onLoad,
  saveMessage = "저장되었습니다",
  submitMessage = "전송되었습니다"
}: TableActionsParams<T>): TableActions {
  const { setLoading } = useLoadingStore()

  const handleCreate = () => {
    onCreate?.()
  }

  const handleDelete = async () => {
    if (checkedIds.length === 0) {
      alert("삭제할 항목을 선택하세요")
      return
    }
    if (!window.confirm("정말 삭제하시겠습니까?")) return

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      onDeleteSuccess?.(checkedIds)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    if (checkedIds.length === 0) {
      alert("다운로드할 항목을 선택하세요")
      return
    }

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 300))
      alert("다운로드 기능은 준비중입니다")
    } finally {
      setLoading(false)
    }
  }

  const handleGenerateQR = async () => {
    if (checkedIds.length === 0) {
      alert("QR 생성할 항목을 선택하세요")
      return
    }

    setLoading(true)
    try {
      for (const id of checkedIds) {
        const row: any = data.find((item: any) => item.id === id)
        if (!row) continue
        const text = Object.entries(row)
          .filter(([key]) => key !== "id")
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n")
        const dataUrl = await QRCode.toDataURL(text, { width: 300 })
        const link = document.createElement("a")
        link.href = dataUrl
        link.download = `QR_${id}.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } catch {
      alert("QR 생성 실패")
    } finally {
      setLoading(false)
    }
  }

  const handleFormDownload = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 300))
      alert("양식 다운로드 기능은 준비중입니다")
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!window.confirm("저장하시겠습니까?")) return

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      onSave?.()
      alert(saveMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = () => {
    onAdd?.()
  }

  const handleImageSave = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 300))
      if (onImageSave) {
        onImageSave()
      } else {
        alert("안전조직도 이미지 저장이 완료되었습니다.")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleUploadClick = () => {
    onUploadClick?.()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onFileChange) {
      onFileChange(e)
    } else {
      if (e.target.files && e.target.files.length > 0) {
        alert(`선택된 파일: ${e.target.files[0].name}`)
      }
    }
  }

  const handleSubmit = async () => {
    if (!window.confirm("서류를 전송하시겠습니까?")) return

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      onSubmit?.()
      alert(submitMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleLoad = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 300))
      onLoad?.()
    } finally {
      setLoading(false)
    }
  }

  return {
    handleCreate,
    handleDelete,
    handleDownload,
    handleGenerateQR,
    handleFormDownload,
    handleSave,
    handleAdd,
    handleImageSave,
    handleUploadClick,
    handleFileChange,
    handleSubmit,
    handleLoad
  }
}