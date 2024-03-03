import { useYourContext } from "../../../../context/MultiStepForm";
import OuLine from "../../OuLine";
import MediaForm from "./MediaForm";
import MediaLinks from "./MediaLinks";
import "./popupMedia.css";


const Popup_media = () => {
  const { step } = useYourContext();  

  return (
    <>
    <section
      className={`m-0 gap-2  animate__animated
      ${step === 1 ? 'animate__bounceInDown' : 'animate__bounceOutDown'}
      `}
    >
      <MediaForm />
      <div className="col-lg-8 col-xl-6 mx-auto">
      <OuLine />
      </div>
      <MediaLinks />
      <p className="text-center media-discrption"> 
      En continuant, vous acceptez automatiquement nos
       <a href="#" className="text-text-decoration-underline">conditions générales</a>, <br />
      notre <a href="#" className="text-text-decoration-underline">  politique de confidentialité </a> et notre politique en 
      <a href="#" className="text-text-decoration-underline">matière de cookies</a>.
      </p>
    </section>
    </>
  );
};

export default Popup_media;