import { useNavigate } from "react-router-dom"

export const useRiskAssessmentSave = () => {
  const navigate = useNavigate()

  const handleSaveComplete = () => {
    if (window.confirm("작성한 평가내용을 저장하시겠습니까?")) {
      alert("저장되었습니다")
      setTimeout(() => {
        navigate("/risk-assessment/list")
      }, 500)
    }
  }

  return { handleSaveComplete }
}
