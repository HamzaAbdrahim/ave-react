import Inputlabel from "../../ui/Inputlabel"
import world__icon from "../../../../assets/world 1.png";
import arrow__down from "../../../../assets/Vector (1).png";
import "./addPostPopup.css";
import UplodeFile from "../../../../pages/dashbord/dmaned/UplodeFile";
import { useYourContext } from "../../../../context/MultiStepForm";


const AddPostPopup = () => {
  const { setActiveButton } = useYourContext();

  return (
    <>
    <section className={`uplode-post-popup  py-3 row bg-white  active `}>
    <div className="text-end">
      <button onClick={() => setActiveButton('nothing')}>
        <i className="bi bi-x-lg clr-blue-gray" style={{fontSize:'min(40px ,20px )'}}></i>
      </button>
    </div>
    <div className="flex-items mb-3" style={{gap:'1rem'}}>
      <img src={world__icon} alt="" />
      <a href="#" className="flex-items fw-medium gap-3 Demande-link">
          Demande publique
          <img src={arrow__down} alt="" />
      </a>
  </div>
      <Inputlabel name={""} type={"text"} label={""} />
      <div className="my-2"></div>
      <UplodeFile onFileUpload={function (file: File): void {
        console.log(file);              
          } } />
    <div className="my-4"></div>
  <div className="flex-items justify-content-between">
      <p className="Lieu-text">Lieu</p>
      <a href="#" className="arrow-right">
        &gt;
      </a>
  </div>
  <hr style={{height:'2px' , backgroundColor:'#afb7cf '}}/>
  <div className="flex-items justify-content-between">
      <p className="Lieu-text">Budget</p>
      <a href="#" className="arrow-right">
        &gt;
      </a>
  </div>
  <hr style={{height:'2px' , backgroundColor:'#afb7cf '}} />
  <div className="flex-items justify-content-between">
      <p className="Lieu-text">Catégorie</p>
      <a href="#" className="arrow-right">
          &gt;
      </a>
  </div>
  </section>
    </>
  )
}

export default AddPostPopup