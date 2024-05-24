import Input from "./Input";
import { useVerify } from "../context/VerificationContext";

type ODetailsProps = {
  name: string;
  head: string;
  fullName: string;
  idPlaceholder: string;
  fullNamePlaceholder: string;
  err: boolean;
  idErr: boolean;
  errMsg: string;
  idErrMsg: string;
};

const PrincipalOfficerDetails = ({
  name,
  head,
  fullName,
  idPlaceholder,
  fullNamePlaceholder,
  err,
  idErr,
  errMsg,
  idErrMsg,
}: ODetailsProps) => {
  return (
    <div>
      <div className="detailsHead font-semibold text-sm">
        {head} Details
        <hr />
      </div>
      <div
         className="my-4 justify-start gap-6 flex flex-col itmes-center
         md:flex-row md:gap-8"
         
        // className="flexMe flex-col gap-4 mt-4 mb-8 justify-center
        //               md:flex-row md:gap-9"
      >
        <Input
          name={name}
          label="Payer ID"
          placeholder={idPlaceholder}
          asComponent={"text"}
          err={idErr}
          errorMsg={idErrMsg}
        />
        <Input
          name={fullName}
          label="Fullname"
          placeholder={fullNamePlaceholder}
          asComponent={"text"}
          err={err}
          errorMsg={errMsg}
        />
      </div>
    </div>
  );
};

export default PrincipalOfficerDetails;
