// src/pages/PTW/PTWManage.tsx

import React, { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import PageTitle from "@/components/common/base/PageTitle"
import TabMenu from "@/components/common/base/TabMenu"
import PTWWorkPermit from "./forms/PTWWorkPermit"
import PTWJSA from "./forms/PTWJSA"
import PTWSiteEvaluation from "./forms/PTWSiteEvaluation"
import PTWTBM from "./forms/PTWTBM"
import PTWHeader from "./PTWHeader"
import FilePanel, { PTWFile } from "./FilePanel/FilePanel"

export default function PTWManage(): React.ReactElement {
  const { ptwId } = useParams()
  const location = useLocation()
  const initialTab = location.state?.activeTab || 0
  const [activeTab, setActiveTab] = useState<number>(initialTab)
  const [attachedFiles, setAttachedFiles] = useState<PTWFile[]>([])
  const tabs = ["위험작업허가서", "작업위험분석(JSA)", "현장 위험성평가(JSA)", "TBM"]
  const [pageTitle, setPageTitle] = useState<string>("PTW 관리")

  const ptwInfo = {
    name: "11월 용접 작업",
    writer: "홍길동",
    status: "승인대기",
    createdAt: "2025-11-07"
  }

  useEffect(() => {
    setPageTitle(tabs[activeTab])
  }, [activeTab])

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <PageTitle>{pageTitle}</PageTitle>
      <PTWHeader info={ptwInfo} />
      <TabMenu
        tabs={tabs}
        activeIndex={activeTab}
        onTabClick={setActiveTab}
        className="mb-6"
      />

      <div className="flex gap-6">
        <div className="flex-shrink-0">
          {activeTab === 0 && <PTWWorkPermit ptwId={ptwId} attachedFiles={attachedFiles} />}
          {activeTab === 1 && <PTWJSA ptwId={ptwId} attachedFiles={attachedFiles} />}
          {activeTab === 2 && <PTWSiteEvaluation ptwId={ptwId} attachedFiles={attachedFiles} />}
          {activeTab === 3 && <PTWTBM ptwId={ptwId} attachedFiles={attachedFiles} />}
        </div>

        <div className="hidden lg:block w-[380px] flex-shrink-0">
          <div className="sticky top-6 border border-gray-200 rounded-lg bg-white">
            <FilePanel ptwId={ptwId} onFilesChange={setAttachedFiles} />
          </div>
        </div>
      </div>
    </div>
  )
}