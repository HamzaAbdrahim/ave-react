import { useYourContext } from "../../../context/MultiStepForm";


const Stepper = () => {
  const { ToStep , step} = useYourContext();
  
  return (
    <div className="d-flex align-items-center justify-content-center
     mb-3 animate__animated animate__bounceInDown px-0 px-md-2 ">
    <span onClick={() => ToStep(1) } className={`step-box cursor-pointer 
    ${step === 1 ? "" : 'done'}`}>
      {step === 1 ? 1 :<i className="bi bi-check2 text-white"></i>}
    </span>
    <hr className={`blue-line ${step >= 2 ? 'done'  : '' }`} />
    <span onClick={() => ToStep(2) } className={`step-box cursor-pointer 
    ${step >= 3 ? "done" : ''}`}>
    {step >= 3 ? <i className="bi bi-check2 text-white"></i> : 2}
    </span>
    <hr className={`blue-line ${step >= 3 ? 'done' : '' }`} />
    <span onClick={() => ToStep(3) } className={`step-box cursor-pointer ${step > 3 ? "done" : ''}`}>
    {step > 3 ? <i className="bi bi-check2 text-white"></i> : 3}
    </span>
    <hr className={`blue-line ${step >= 4 ? 'done' : '' }`} />
    <span onClick={() => ToStep(4) } className={`step-box cursor-pointer ${step > 4 ? "done" : ''}`}>
    {step > 4 ? <i className="bi bi-check2 text-white"></i> : 4}
    </span>
  </div>
  )
}

export default Stepper

