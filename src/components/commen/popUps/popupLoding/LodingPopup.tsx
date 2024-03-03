import "./popupLoding.css";

const LodingPopup = () => {
  return (
    <>
    <div className="overLay__popup animate__slideInDown animate__animated  position-absolute z-2 top-0 left-0 w-100 h-100 bg-black bg-opacity-50">
    </div>
    <div className="lds-roller z-3  position-absolute top-50 left-50 translate-middle"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </>
  )
}

export default LodingPopup