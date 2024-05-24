import Input from "./Input";
import { BsInfoCircle } from "react-icons/bs";
import { useVerify } from "../context/VerificationContext.tsx";

const PrincipalOfficerForm = ({ showInfoImg }) => {
  const { Verrors, Vtouched } = useVerify();
  return (
    <div>
      <div className="mt-10">
        <span className="align-top text-zinc-400 text-[0.8rem] font-light opacity-80">
          Principal Officer’s TCC ID
          <BsInfoCircle
            onClick={showInfoImg}
            className="inline mb-0.5 ml-2 text-[12px] font-bold"
          />
        </span>
        <p className="text-gray-300 border border-dashed" />
      </div>
      <div className="my-4 justify-start flex flex-col items-start gap-6 ">
        <Input
          name="Officer1"
          label="Principal 1"
          placeholder="Enter Principal Officer's TCC ID"
          errorMsg={Verrors?.Officer1}
          err={Verrors?.Officer1 && Vtouched?.Officer1}
          asComponent={"text"}
          />
        <Input
          name="Officer2"
          label="Principal 2"
          placeholder="Enter Principal Officer's TCC ID"
          errorMsg={Verrors?.Officer2}
          err={Verrors?.Officer2 && Vtouched?.Officer2}
          asComponent={"text"}
          />
        <Input
          name="Officer3"
          label="Principal 3"
          placeholder="Enter Principal Officer's TCC ID"
          errorMsg={Verrors?.Officer3}
          err={Verrors?.Officer3 && Vtouched?.Officer3}
          asComponent={"text"}
          />
      </div>
    </div>
  );
};

export default PrincipalOfficerForm;
