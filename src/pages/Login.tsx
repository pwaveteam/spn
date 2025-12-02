import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import Checkbox from "../components/common/base/Checkbox"

type FormState={id:string;pw:string;remember:boolean}
type ModalType="none"|"forgotId"|"forgotPw"

export default function Login(){
const navigate=useNavigate()
const[form,setForm]=useState<FormState>({id:"",pw:"",remember:false})
const[modal,setModal]=useState<ModalType>("none")
const onSubmit=(e:FormEvent)=>{e.preventDefault();navigate("/dashboard")}
const close=()=>setModal("none")

return(
<div className="relative min-h-screen flex flex-col bg-[url('/images/bg-industrial-navy.jpg')] bg-cover bg-center">
<div className="absolute inset-0 bg-black/60"></div>

<div className="relative flex justify-center pt-16 sm:pt-20">
<img src="/logo.svg" alt="Company Logo" className="h-8 sm:h-12 md:h-14 object-contain"/>
</div>

<div className="relative flex flex-grow items-center justify-center px-4 py-6">
<div className="w-full max-w-[340px] sm:max-w-md bg-white/10 backdrop-blur-md rounded-lg shadow-xl border border-white/20 p-5 sm:p-8 md:p-10 flex flex-col">
<h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white tracking-wide mb-5 sm:mb-6 md:mb-8">로그인</h2>

<form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
<input type="text" value={form.id} onChange={e=>setForm(s=>({...s,id:e.target.value}))} placeholder="관리자 아이디" className="w-full rounded-md px-3 sm:px-4 py-3 sm:py-4 bg-white/90 focus:bg-white focus:ring-2 focus:ring-[#031E36] outline-none text-gray-900 text-sm sm:text-base"/>
<input type="password" value={form.pw} onChange={e=>setForm(s=>({...s,pw:e.target.value}))} placeholder="비밀번호" className="w-full rounded-md px-3 sm:px-4 py-3 sm:py-4 bg-white/90 focus:bg-white focus:ring-2 focus:ring-[#031E36] outline-none text-gray-900 text-sm sm:text-base"/>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-2">
<button type="button" onClick={()=>setForm(s=>({...s,remember:!s.remember}))} className="flex items-center gap-2 text-gray-200 text-xs sm:text-sm select-none">
<Checkbox checked={form.remember} onChange={()=>setForm(s=>({...s,remember:!s.remember}))}/>아이디 저장
</button>

<div className="flex gap-3 sm:gap-4 text-xs sm:text-sm font-normal">
<button type="button" onClick={()=>setModal("forgotId")} className="text-gray-400 hover:text-gray-200 transition-colors">아이디 찾기</button>
<span className="text-gray-500">|</span>
<button type="button" onClick={()=>setModal("forgotPw")} className="text-gray-400 hover:text-gray-200 transition-colors">비밀번호 찾기</button>
</div>
</div>

<button type="submit" className="w-full bg-[#031E36] hover:bg-[#05294A] text-white font-semibold rounded-md py-3 sm:py-4 tracking-wide transition-all text-sm sm:text-base">로그인</button>
</form>
</div>
</div>

<footer className="relative z-10 text-center py-3 sm:py-4 text-[10px] sm:text-xs text-gray-400 tracking-wide">© Pulsewave Corp. All Rights Reserved.</footer>

{modal!=="none"&&(
<div className="fixed inset-0 z-50 flex items-center justify-center px-4">
<div className="absolute inset-0 bg-black/70" onClick={close}></div>

<div className="relative w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl p-5 sm:p-6 md:p-8 text-white">

{modal==="forgotId"&&(
<div className="space-y-4 sm:space-y-5">
<h3 className="text-lg sm:text-xl font-semibold text-center">관리자 아이디 찾기</h3>
<input type="text" placeholder="이름" className="w-full rounded-md px-3 py-2.5 sm:py-3 bg-white/90 text-gray-900 focus:ring-2 focus:ring-[#031E36] outline-none text-sm sm:text-base"/>
<input type="text" placeholder="연락처" className="w-full rounded-md px-3 py-2.5 sm:py-3 bg-white/90 text-gray-900 focus:ring-2 focus:ring-[#031E36] outline-none text-sm sm:text-base" onChange={e=>{e.target.value=e.target.value.replace(/[^0-9]/g,"")}}/>
<div className="flex gap-2 sm:gap-3">
<button type="button" onClick={close} className="flex-1 bg-white/20 hover:bg-white/30 text-white rounded-md py-2.5 sm:py-3 text-sm sm:text-base font-medium">취소</button>
<button type="button" onClick={()=>{alert("관리자 아이디가 전송되었습니다.");close()}} className="flex-1 bg-[#031E36] hover:bg-[#05294A] text-white rounded-md py-2.5 sm:py-3 text-sm sm:text-base font-medium">확인</button>
</div>
</div>
)}

{modal==="forgotPw"&&(
<div className="space-y-4 sm:space-y-5">
<h2 className="text-lg sm:text-xl font-semibold text-center">비밀번호 찾기</h2>
<input type="text" placeholder="관리자 아이디" className="w-full rounded-md px-3 py-2.5 sm:py-3 bg-white/90 text-gray-900 focus:ring-2 focus:ring-[#031E36] outline-none text-sm sm:text-base"/>
<input type="text" placeholder="연락처" className="w-full rounded-md px-3 py-2.5 sm:py-3 bg-white/90 text-gray-900 focus:ring-2 focus:ring-[#031E36] outline-none text-sm sm:text-base" onChange={e=>{e.target.value=e.target.value.replace(/[^0-9]/g,"")}}/>
<div className="flex gap-2 sm:gap-3">
<button type="button" onClick={close} className="flex-1 bg-white/20 hover:bg-white/30 text-white rounded-md py-2.5 sm:py-3 text-sm sm:text-base font-medium">취소</button>
<button type="button" onClick={()=>{alert("임시 비밀번호가 전송되었습니다.");close()}} className="flex-1 bg-[#031E36] hover:bg-[#05294A] text-white rounded-md py-2.5 sm:py-3 text-sm sm:text-base font-medium">확인</button>
</div>
</div>
)}
</div>
</div>
)}
</div>
)
}
