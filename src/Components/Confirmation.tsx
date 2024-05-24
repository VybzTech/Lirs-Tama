import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUpload } from "../context/UploadContext";
import { useStatus } from "../context/StatusContext";
import envelope from "../assets/images/Envelope.png";
import { useVerify } from "../context/VerificationContext";

const Confirmation = () => {
  const { companyDets, uploads } = useUpload();
  const { Vdirectors, Vofficers } = useVerify();

  const { status } = useStatus();

  useEffect(() => {
    console.log(
      "status: ",
      status,
      "Vdirectors: ",
      Vdirectors ,
      "Vofficers: ",
      Vofficers,
      "companyDets: ",
      companyDets,
      "uploads: ",
      uploads
    );
  }, []);

  return (
    <div className="w-full h-full mt-20 flex flex-col items-center justify center">
      <img className="w-36" src={envelope} alt="Mail template logo" />
      <h1 className="text-2xl mt-7">Registration is awaiting Approval</h1>
      <p className="max-w-96 text-center text-zinc-600 text-md my-12 mt-5">
        Your Registration is awaiting approval. Kindly check your E-mail.
      </p>
      <Link
        to={"/"}
        className="font-semibold text-white bg-blue-500 rounded rounded-md px-32 py-4 hover:bg-blue-700 transition ease ease-in-out duration-150
      text-lg"
      >
        Okay
      </Link>
    </div>
  );
};

export default Confirmation;
