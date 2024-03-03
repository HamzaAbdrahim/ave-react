import { useState } from "react";
import AddPostPopup from "../../../components/commen/popUps/AddpostPopup/AddPostPopup";
import PopupDmaend from "../../../components/commen/popUps/PopupDmaend/PopupDmaend";
import PopupHome from "../../../components/commen/popUps/PopupHome/PopupHome";
import { useYourContext } from "../../../context/MultiStepForm";
import LogoutPopup from "../../../components/commen/popUps/LogoutPopup/StateSheardPopup";

const AccueilPopup = () => {
  const { ActiveCartButton , setActiveButton } = useYourContext();
  const [showShadow, setShowShadow] = useState(false);

  console.log(ActiveCartButton);
  

  const toggleShadow = () => {
    setShowShadow(!showShadow);
    setActiveButton('nothing')
  };

  const renderComponent = () => {
    switch (ActiveCartButton) {
      case "Demande publique":
        return <PopupHome />;
      case "Deconnexion":
        return (
          <LogoutPopup
            type="err"
            title={"Deconnexion"}
            description={"Just a small miss, 2/5 Tasks"}
          />
        );
      case "Demande priveé":
        return <PopupDmaend />;
      case "Mes Demandes ":
        return <AddPostPopup />;
      case 'nothing':
        return null 
      default:
        return null;
    }
  };

  const shadowClass = !showShadow && renderComponent() !== null ? "active" : "";

  return (
    <>
      <div
        onClick={toggleShadow}
        className={`bg-shadow ${shadowClass}`}
      ></div>
      {renderComponent()}
    </>
  );
};

export default AccueilPopup;
