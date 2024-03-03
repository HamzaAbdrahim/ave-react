import React from "react"
import ReaplayContent from "./ui/ReaplayContent"
import ReaplayInput from "./ui/ReaplayInput"
type props = {
  isShow:false | true
}
const Reaplay:React.FC<props> = ({isShow}) => {
  return (
    <div className={`mt-3 animate__animated ${isShow ? "animate__fadeInDown" : "d-none" }`} >
    <ReaplayContent />
    <ReaplayInput />
    </div>
  )
}

export default Reaplay