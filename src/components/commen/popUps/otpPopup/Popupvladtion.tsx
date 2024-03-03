import { useYourContext } from "../../../../context/MultiStepForm";
import OuLine from "../../OuLine";
import OtpInput from "../../ui/otpInput/OtpInput";
import OptCounter from "./OptCounter";

const Popupvladtion = () => {
  const { TypeVerification , setVerification , handleNext } = useYourContext();

  const handleOtpChange = (otp: string) => {
    console.log('OTP:', otp);
  };
  return (
    <div className="Popupvladtion mt-3 animate__animated animate__bounceInDown">
      <div className={`col-md-8 mx-auto 
      ${TypeVerification === '' ? 'animate__animated animate__bounceInDown' : ' animate__animated animate__fadeOutUpBig d-none' }`}>
      <button onClick={() => setVerification('email')} className={`btn-white-shadow  mx-auto mt-3 
      ${TypeVerification === 'email' ? 'active' : false}`} >Email Verification</button>
      <OuLine />
      <button onClick={() => setVerification('Phonenumber')} className={`btn-white-shadow  mx-auto mt-3 
      ${TypeVerification === 'Phonenumber' ? 'active' : false}`} >Phone Number Verification</button>
      </div>

    <div className={`${TypeVerification === '' ? 'animate__animated animate__fadeOutUpBig d-none' : 'animate__animated animate__bounceInDown'}`}>
      <p className="Popupvladtion__discrption text-center">Ave  vous envoie le code de verification dans <br /> quelques instants</p>
      <OtpInput length={6} onChange={handleOtpChange} />
      {TypeVerification !== '' && <OptCounter startSeconds={60} />}
      <div className="row text-center mt-3">
      <button onClick={handleNext} className="green-button col-lg-8">Done</button>
      </div>
      </div> 
    </div>
  )
}

export default Popupvladtion