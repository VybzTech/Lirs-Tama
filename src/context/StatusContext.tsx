import { createContext, useState, useContext } from "react";
 
const StatusContext = createContext("");


export const useStatus = () => useContext(StatusContext);

export const StatusProvider = ({ children }: any) => {
  const [status, setStatus] = useState<string>("");

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusContext;
