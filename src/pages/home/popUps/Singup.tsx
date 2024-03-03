import Popu_association from "../../../components/commen/popUps/PopuAssociation/Popu_association";
import PopupIterprice from "../../../components/commen/popUps/PopupIterprice/PopupIterprice";
import PopupPritacler from "../../../components/commen/popUps/PopupPritacler/PopupPritacler";
import { useYourContext } from "../../../context/MultiStepForm";

const Singup = () => {
  const { userType } = useYourContext();
  let popupComponent;

  switch (userType) {
    case "Particulier":
    popupComponent = <PopupPritacler />;
    break;
    case "Indépendant":
    popupComponent = <PopupIterprice />;
    break;
    case "Entreprise":
    popupComponent = <PopupIterprice />;
    break;
    default:
    popupComponent = <Popu_association />;
    break;
  }
  return (
    <div>
        {popupComponent}
    </div>
  )
}

export default Singup