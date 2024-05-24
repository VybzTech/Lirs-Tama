import { createContext, useState, useContext } from "react";

const UploadContext = createContext({});

export const useUpload = () => useContext(UploadContext);

export const UploadProvider = ({ children }: any) => {
  const [Uerrors, setUerrors] = useState<object>({});
  const [Utouched, setUtouched] = useState<object>({});
  const [companyDets, setCompanyDets] = useState<object>({});
  const [uploads, setUploads] = useState<object>({});
  const [U2errors, setU2errors] = useState<object>({});
  const [U2touched, setU2touched] = useState<object>({});

  return (
    <UploadContext.Provider
      value={{
        Uerrors,
        setUerrors,
        Utouched,
        setUtouched,
        companyDets,
        setCompanyDets,
        U2errors,
        setU2errors,
        U2touched,
        setU2touched,
        uploads,
        setUploads,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export default UploadContext;
