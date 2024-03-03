import React, { createContext, useContext, ReactNode } from 'react';
import { User } from '../types/Types';

// Define the types for your context
interface YourContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

// Create the context
const YourContext = createContext<YourContextProps | undefined>(undefined);

// Create a provider for your context
interface YourContextProviderProps {
  children: ReactNode;
}

const MassgesContextProvider: React.FC<YourContextProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
    
  const contextValue: YourContextProps = {
    user,
    setUser,
  };
  
  return <YourContext.Provider value={contextValue}>{children}</YourContext.Provider>;
};

// Create a custom hook for using the context
const FormDataContext = () => {
  const context = useContext(YourContext);
  if (!context) {
    throw new Error('useYourContext must be used within a YourContextProvider');
  }
  return context;
};

export { MassgesContextProvider, FormDataContext };
