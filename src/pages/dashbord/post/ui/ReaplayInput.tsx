import Inputlabel from "../../../../components/commen/ui/Inputlabel"

const ReaplayInput = () => {
  return (
    <>
    <div className='flex-items gap-3 col-11 ml-auto px-4 pb-2'>
    <div className='size-50px'>
      <img src="https://i.ibb.co/PTrBjrY/Image-40.png" className="img-fluid w-100 h-100" alt="" />
    </div>
    <div className="w-100">
      <Inputlabel name={""} type={"text"} label={"Reaplay"} />
    </div>
  </div>
  <div className="flex-items justify-content-end gap-2 px-4 pb-4">
  <button  className="flex-items gap-2 justify-content-center medium-blue-button outline">
    Close
    <i className="bi bi-x-circle"></i>  
  </button>
  <button className="flex-items gap-2 p-1 justify-content-center medium-blue-button">
  Reaplay
    <i className="bi bi-send sp-letter-05"></i>
  </button>
</div>
    </>
  )
}

export default ReaplayInput