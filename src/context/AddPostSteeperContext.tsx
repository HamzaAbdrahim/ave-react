import React, { createContext, useContext, ReactNode, useState } from 'react';

interface YourContextProps {
    Poststep: number;
    showPostPopup:boolean;
    IslodingPostPopUp:boolean;
    handleNextStep:() => void;
    toggleshowPostPopup:() => void;
    ChangelodingPostPopUpState:(value:boolean) => void;
    ToPoststep:(value:number) => void
    IsAddloctionPopup:boolean;
toggleIsAddloctionPopup:() => void;
}

const YourContext = createContext<YourContextProps | undefined>(undefined);

interface YourContextProviderProps {
  children: ReactNode;
}

const AddPostContextProvider: React.FC<YourContextProviderProps> = ({ children }) => {
  const [Poststep, setPoststep] = useState(1);
  const [showPostPopup, setShowPostPopup] = useState<boolean>(false);
  const [IslodingPostPopUp, setIslodingPostPopUp] = useState<boolean>(false);
  const [IsAddloctionPopup, setIsAddloctionPopup] = useState<boolean>(false);


  const handleNextStep = () => {
    setPoststep((prevStep) => prevStep + 1);
  };
  const toggleshowPostPopup = () => {
    setShowPostPopup(!showPostPopup)
  };
  const toggleIsAddloctionPopup = () => {
    setIsAddloctionPopup(!IsAddloctionPopup)
  };

  const ChangelodingPostPopUpState = (value:true|false) => {
    setIslodingPostPopUp(value)
  }
     

  const ToPoststep = (stepNumber:number) => {
    if ( Poststep > stepNumber ) {
       return setPoststep(stepNumber)
    }
  }

  const contextValue: YourContextProps = {
    Poststep,
showPostPopup,
IslodingPostPopUp,
handleNextStep,
toggleshowPostPopup,
ChangelodingPostPopUpState,
ToPoststep,
IsAddloctionPopup,
toggleIsAddloctionPopup
  };

  



  return <YourContext.Provider value={contextValue}>{children}</YourContext.Provider>;
};

// Create a custom hook for using the context
const AddPostContext = () => {
  const context = useContext(YourContext);
  if (!context) {
    throw new Error('useYourContext must be used within a YourContextProvider');
  }
  return context;
};

export { AddPostContextProvider, AddPostContext };
