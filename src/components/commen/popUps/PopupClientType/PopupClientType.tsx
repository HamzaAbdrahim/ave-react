import "./popu_client_type.css";
import './popu_client_type.css'
import { useYourContext } from "../../../../context/MultiStepForm";
import OuLine from "../../OuLine";

const PopupClientType = () => {
  const { handleNext , handleButtonClick , userType , step } = useYourContext();

  return (
    <>
    <section
    className={`row gap-4 animate__animated mx-auto
    ${step === 2 ? 'animate__bounceInDown' : 'animate__bounceOutDown'}
    `}>
      <div className="col-sm-8 col-lg-6 mx-auto text-center">
        <h3 className="subtitel-popup">quel est le type de vos services?</h3>
        <button className={`${userType === 'Particulier' ? 'active': ''} 
        btn-white-shadow mx-auto mt-3`} 
        onClick={() => handleButtonClick('Particulier')}>Particulier</button>
        <OuLine />
        <button className={`${userType === 'Indépendant' ? 'active': ''} btn-white-shadow mx-auto`} 
        onClick={() => handleButtonClick('Indépendant')}>Indépendant</button>
        <button className={`${userType === 'Entreprise' ? 'active': ''} 
        btn-white-shadow mx-auto mt-3`} 
        onClick={() => handleButtonClick('Entreprise')}>Entreprise</button>
        <OuLine />
        <button className={`${userType === 'Association' ? 'active': ''} btn-white-shadow mx-auto`} 
        onClick={() => handleButtonClick('Association')}>Association</button>
        <button onClick={handleNext} type="submit" className="btn-primary w-100 mt-3">M’inscrire</button>
      </div>
    </section>
    </>
  );
};

export default PopupClientType;