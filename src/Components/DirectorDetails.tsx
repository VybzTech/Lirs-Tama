import Input from "./Input";
import { DDetailsProps } from "../assets/Utils";

const DirectorDetails = ({
  name,
  fullName,
  head,
  idPlaceholder,
  fullNamePlaceholder,
  err,
  idErr,
  errMsg,
  idErrMsg,
}: DDetailsProps) => {
  return (
    <div className="w-full">
      <div className="detailsHead font-medium text-sm text-gray-800">
        {head} details
        <hr />
      </div>
      <div
        className="flexMe flex-col gap-4 mt-4 mb-8 justify-center
                      md:flex-row md:gap-9"
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

export default DirectorDetails;
