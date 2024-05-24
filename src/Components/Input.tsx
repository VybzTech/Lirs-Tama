/* eslint-disable @typescript-eslint/ban-types */
import { Field } from "formik";
import ErrorInfo from "./ErrorInfo";

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  asComponent: string;
  errorMsg: string;
  err: boolean;
};

const Input = ({
  name,
  label,
  placeholder,
  asComponent,
  errorMsg,
  err,
}: InputProps) => {
  if (asComponent === "textarea") {
    return (
      <div className="w-full">
        {/* w-fit md: */}
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-[13.5px] text-[#111]" htmlFor={label}>
            {label}
          </label>
          {err && <ErrorInfo info={errorMsg} />}
        </div>
        <Field
          autoComplete="off"
          name={name}
          className="text-zinc-500 w-full border border-[1.75px] border-solid border-[#ccc] px-4 py-3 rounded rounded-md focus:border-1 placeholder:text-[12px] tracking-[0.2px] placeholder:font-light"
          placeholder={placeholder}
          as="textarea"
        />
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-[13.5px] text-[#111]" htmlFor={label}>
            {label}
          </label>
          {err && <ErrorInfo info={errorMsg} />}
        </div>
        <Field
          autoComplete="off"
          name={name}
          className="text-zinc-500 w-full border border-[1.75px] border-solid border-[#ccc] px-4 py-3 rounded rounded-md focus:border-1 placeholder:text-[12px] tracking-[0.2px] placeholder:font-light"
          type={asComponent}
          placeholder={placeholder}
        />
      </div>
    );
  }
};

export default Input;
