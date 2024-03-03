import facebook_icon from "../../../../assets/icon _facebook.png"
import googl_icon from "../../../../assets/googl-icon.png"
import { useYourContext } from "../../../../context/MultiStepForm";
import { Link } from "react-router-dom";
const MediaLinks = () => {
  const { handleNext } = useYourContext();  

  return (
    <div className="col-lg-7 col-xxl-6 mx-auto">
      <Link to='#' onClick={handleNext} className="Facebook singup-box d-flex align-items-center
       justify-content-center mx-auto mb-3 px-2" style={{ gap: "20px" }}>
        <img src={facebook_icon} alt="" />
          Sign in with Facebook
      </Link>
      <Link to='#' onClick={handleNext} className="Google singup-box d-flex align-items-center
           justify-content-center mx-auto px-2 mb-3" style={{ gap: "20px" }}>
             <img src={googl_icon} alt="" />
            Sign in with Google
      </Link>
        </div>
  )
}

export default MediaLinks