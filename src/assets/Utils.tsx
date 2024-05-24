type TCCInfo = {
  id: string | number;
  CompanyID: string;
  TCC_ID: string;
  firstName: string;
  lastName: string;
  payerID: string;
};

type DirectorList = {
  name: string;
  info: TCCInfo;
};

type CompanyProps = {
  Cid: string;
  companyID: string;
  companyName: string;
  companyEmail: string;
  companyNo: number;
  companyHistory: string;
};

type DDetailsProps = {
  name: string; 
  fullName: string;
  head: string;
  idPlaceholder: string;
  fullNamePlaceholder: string;
  err: boolean;
  idErr: boolean;
  errMsg: string;
  idErrMsg: string;
};
type navPropsType = {
  id: number;
  title: string;
  content: string;
  poll: string;
  active: boolean;
  step: string;
};

export type {errP, TCCInfo, DirectorList, CompanyProps,DDetailsProps,navPropsType };
