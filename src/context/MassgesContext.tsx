import React, { createContext, useContext, ReactNode, useState } from 'react';

// Define the types for your context
interface YourContextProps {
SelectedUser:number,
toggolUser:(vlaue:number) => void
search: string;
setSearch: (value: string) => void;
}

// Create the context
const YourContext = createContext<YourContextProps | undefined>(undefined);

// Create a provider for your context
interface YourContextProviderProps {
  children: ReactNode;
}

const MassgesContextProvider: React.FC<YourContextProviderProps> = ({ children }) => {
    const [SelectedUser, setSelectedUser] = useState<number>(1);
    const [search, setSearch] = useState<string>('');
    const toggolUser = (vlaue:number) => {
        setSelectedUser(vlaue)
     }
     
  const contextValue: YourContextProps = {
    SelectedUser,
    toggolUser,
    search,
    setSearch,
  };

  return <YourContext.Provider value={contextValue}>{children}</YourContext.Provider>;
};

// Create a custom hook for using the context
const MassgesContext = () => {
  const context = useContext(YourContext);
  if (!context) {
    throw new Error('useYourContext must be used within a YourContextProvider');
  }
  return context;
};

export { MassgesContextProvider, MassgesContext };
