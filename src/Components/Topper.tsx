import { IoIosArrowBack } from "react-icons/io";

const Topper = ({ handlePrevious }: Function) => {
  return (
    <div className="mb-8">
      <div
        onClick={handlePrevious}
        style={{ color: "#585858" }}
        className="mb-5 textShade flexMe justify-start gap-2 text-[12px] leading-[2] text-gray-300 
                   hover:cursor-pointer"
      >
        <IoIosArrowBack className="w-6 h-6" />
        <span>Go back</span>
      </div>
      <h1 className="headers">validate details</h1>
      <span
        style={{ color: "#585858" }}
        className="textShade inline-block text-[13.5px] pt-3 tracking-[0.5px]"
      >
        Kindly confirm all the details provided Below.
      </span>
    </div>
  );
};

export default Topper;
