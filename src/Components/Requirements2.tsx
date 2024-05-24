import UploadDoc from "./UploadDoc";
import { useUpload } from "../context/UploadContext.tsx";

const Requirements2 = () => {
  const { U2errors, U2touched } = useUpload();
  const myArray: {
    name: string;
    title: string;
    err: boolean;
    errorMsg: string;
  }[] = [
    {
      name: "dirCert",
      title: "CITN / ICAN Certificate for at least one Director.",
      err: U2errors?.dirCert && U2touched?.dirCert,
      errorMsg: U2errors?.dirCert,
    },
    // {
    //   name: "lasCard",
    //   title:
    //     "LASSRA card for residents or sworn affidavit for non-resident plus any means of identification.",
    //   err: U2errors?.lasCard && U2touched?.lasCard,
    //   errorMsg: U2errors?.lasCard,
    // },
    // {
    //   name: "techEvidence",
    //   title: "Evidence of technical and administrative competence.",
    //   err: U2errors?.techEvidence && U2touched?.techEvidence,
    //   errorMsg: U2errors?.techEvidence,
    // },
  ];
  return (
    <>
      <p className="mb-2 font-semibold text-[0.95rem] text-slate-800">
        Requirements
      </p>
      <hr />
      {myArray?.map((item, id) => (
        <UploadDoc
          key={id}
          id={id + 1}
          err={item?.err}
          name={item?.name}
          title={item?.title}
          errorMsg={item?.errorMsg}
        />
      ))}
    </>
  );
};
export default Requirements2;
