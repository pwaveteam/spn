// components/PTW/PTWHeader.tsx
import React from "react"
import { Input } from "@/components/ui/input"

interface PTWHeaderProps {
name: string
onChangeName: (value: string) => void
}

export default function PTWHeader({ name, onChangeName }: PTWHeaderProps): React.ReactElement {
return (
<div className="flex flex-wrap items-center justify-between bg-[#F9FAFB] rounded-lg px-4 py-3 mb-4 text-sm text-gray-700">
<div className="flex items-center gap-3 w-full">
<span className="whitespace-nowrap"><strong>PTW명:</strong></span>

<Input 
value={name} 
onChange={(e) => onChangeName(e.target.value)}
className="h-8 bg-white w-full max-w-[400px] border-[#DFDFDF] focus-visible:ring-1 focus-visible:ring-gray-400" 
placeholder="예: 11월 4주차 일지"
/>
</div>
</div>
)
}