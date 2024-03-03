import plus_icon from "../../../assets/plus 1.png";
import  masterCard from "../../../assets/masterCard__img.png";

const AddPaymentCard = () => {
  return (
    <div>
        <p className="mb-5 fs-px-22 ln-ht-27px fw-bold">Mes Cartes</p>
        <div className="d-flex flex-wrap align-items-start gap-4 mb-5">
        <button className="plus-button">
            <img src={plus_icon}  alt="" />
        </button>
        <div className="masterCard">
            <img src={masterCard} className="w-100 h-100 img-fluid" alt="" />
        </div>
        </div>
    </div>
  )
}

export default AddPaymentCard

