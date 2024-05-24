import { createContext, useState, useContext } from "react";
import { DirectorList } from "../assets/Utils";

const VerificationContext = createContext({});

export const useVerify = () => useContext(VerificationContext);
// type extTCCInfo = { name: string; TCCInfo };
export const VerificationProvider = ({ children }: unknown) => {
  const [Verrors, setVerrors] = useState<object>({});
  const [Vtouched, setVtouched] = useState<object>({});
  const [Vdirectors, setVdirectors] = useState<DirectorList[]>([]);
  const [Vofficers, setVofficers] = useState<DirectorList[]>([]);
  const [VAerrors, setVAerrors] = useState<object>({});
  const [VAtouched, setVAtouched] = useState<object>({});

  return (
    <VerificationContext.Provider
      value={{
        Verrors,
        setVerrors,
        Vtouched,
        setVtouched,
        Vdirectors,
        setVdirectors,
        Vofficers,
        setVofficers,
        VAerrors,
        setVAerrors,
        VAtouched,
        setVAtouched,
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
};

export default VerificationContext;
