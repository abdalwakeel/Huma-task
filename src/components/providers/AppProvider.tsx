import { createContext, type  ReactNode } from "react";

interface AppContextType {
  appName: string;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppContext.Provider value={{ appName: "My App" }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;



