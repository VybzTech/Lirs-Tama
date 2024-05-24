import Input from "./Input";
import { BsInfoCircle } from "react-icons/bs";
import { useVerify } from "../context/VerificationContext.tsx";

const DirectorForm = ({ showInfoImg }) => {
  const { Verrors, Vtouched } = useVerify();

  return (
    <div>
      <div className="">
        <span className="align-top text-zinc-400 text-[0.8rem] font-light opacity-80">
          Director’s TCC ID
          <BsInfoCircle
            onClick={showInfoImg}
            className="inline mb-0.5 ml-2 text-[12px] font-bold hover:cursor-pointer"
          />
        </span>
        <p className="text-gray-300 tracking-2 border border-dashed" />
      </div>
      <div
        className="my-4 justify-start gap-6 flex flex-col itmes-center
                      md:flex-row md:gap-8"
      >
        <Input
          name="director1"
          label="Director 1"
          placeholder="e.g LA/TCC/000XXXXXXX"
          err={Verrors?.director1 && Vtouched?.director1}
          errorMsg={Verrors?.director1}
          asComponent={"text"}
        />
        <Input
          name="director2"
          label="Director 2"
          placeholder="e.g LA/TCC/000XXXXXXX"
          err={Verrors?.director2 && Vtouched?.director2}
          errorMsg={Verrors?.director2}
          asComponent={"text"}
        />
      </div>
    </div>
  );
};

export default DirectorForm;
