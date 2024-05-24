import { IoIosArrowBack } from "react-icons/io";

const Toppest = ({ handlePrevious }: Function) => {
  return (
    <div className="mb-8">
      <div
        onClick={handlePrevious}
        style={{ color: "#585858" }}
        className="mb-5 textShade flexMe gap-2 text-[12px] leading-[2] text-gray-300 hover:cursor-pointer"
      >
        <IoIosArrowBack className="w-6 h-6" />
        <span>Go back</span>
      </div>
      <h1 className="headers">upload details</h1>
      <span
        style={{ color: "#585858" }}
        className="textShade inline-block text-[0.9rem] pt-5 tracking-[0.25px]"
      >
        Kindly upload all documents.
      </span>
    </div>
  );
};

export default Toppest;
