import { IoAlertCircleOutline } from "react-icons/io5";

type errInfo = {
  info: string;
};

const ErrorInfo = ({ info }: errInfo) => {
  return (
    <span className="flex items-center max-w-[80%]">
      <IoAlertCircleOutline className="mr-1 w-3.5 h-3.5 text-red-500 object-contain" />
      <span className="text-red-500 text-[0.7rem] tracking-[-0.09px]">
        {info}
      </span>
    </span>
  );
};

export default ErrorInfo;
