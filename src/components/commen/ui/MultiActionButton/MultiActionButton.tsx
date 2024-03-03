import { useYourContext } from "../../../../context/MultiStepForm";
import "./multiactionbutton.css";
import { FC } from "react";

interface Action {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
}

interface MultiActionButtonProps {
  actions: Action[];
}

const MultiActionButton:FC<MultiActionButtonProps> = ({ actions }) => {
  const { setActiveButton } = useYourContext(); 
  return (
    <>
      {actions.map((action, index) => (
        <button key={index}   onClick={() => setActiveButton(action.label)}
        className="clr-blue-gray action__button flex-items gap-4 fs-px_14 fw-medium ln-ht-17px" >
          {action.icon} {action.label}
        </button>
      ))}
    </>
  );
};

export default MultiActionButton
