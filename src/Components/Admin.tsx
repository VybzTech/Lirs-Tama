// import Toppest from "./Toppest.tsx";
// import Requirements2 from "./Requirements2.tsx";
// import { useStatus } from "../context/StatusContext.js";
// import { useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import { Field, Form, Formik, FormikHelpers } from "formik";
// import { useUpload } from "../context/UploadContext.tsx";
import { useEffect, useState } from "react";
// import { ClipLoader } from "react-spinners";
// import { addFiles, getFiles } from "../Api.js";
import ErrorBound from "./ErrorBound.jsx";
import toast from "react-hot-toast";
import axios from "axios";
// import ErrorInfo from "./ErrorInfo.tsx";

// interface FormValues {
//   pdfName: string;
//   dirCert: File | null;
// }
interface File {
  id: number;
  fileName: string;
  folderPath: string;
}

const Admin = () => {
  // const { setStatus } = useStatus();

  // const navigate = useNavigate();
  const [pulled, set] = useState<boolean>(false);

  // const { setUploads, companyDets, uploads, setU2errors, setU2touched } =
  //   useUpload();

  // const handlePrevious = (e: any) => {
  //   e.preventDefault();
  //   setStatus("Validated");
  // };

  const [files, setFiles] = useState<File[]>([]);

  let response: File[];
  // const rs = async () => {
  //   try {
  //     const ress = await axios.get("http://localhost/API/tcc/readFiles.php");

  //     if (ress?.status === 200) {
  //       response = ress?.data?.data;
  //       setFiles(ress?.data?.data);
  //       set(true);
  //       console.log("Files", files);
  //     }
  //   } catch (err: unknown) {
  //     if (err?.message === "Network Error") {
  //       toast.error("Network Error !", { position: "top-right" });
  //     } else {
  //       console.error("Error validating info:", err);
  //       toast.error("Error Validating Company ID", { position: "top-right" });
  //     }
  //     throw err;
  //   }
  // };

  useEffect(() => {
    // async () => {
    //   // pulled ? rs() : null;
    //   // !pulled ? rs() : null;
    //   try {
    //     const ress = await
    axios
      .get("http://localhost/API/tcc/readFiles.php")
      .then((res) => {
        response = res?.data?.data;
      })
      .catch((e) => {
        if (e?.message === "Network Error") {
          toast.error("Network Error !", { position: "top-right" });
        } else {
          console.error("Error validating info:", e);
          toast.error("Error Validating Company ID", { position: "top-right" });
        }
        throw e;
      })
      .finally(() => {
        setFiles(response);
      });

    //   if (ress?.status === 200) {
    //     set(true);
    //     console.log("Files", files);
    //   }
    // } catch (err: unknown) {
    //   if (err?.message === "Network Error") {
    //     toast.error("Network Error !", { position: "top-right" });
    //   } else {
    //     console.error("Error validating info:", err);
    //     toast.error("Error Validating Company ID", { position: "top-right" });
    //   }
    //   throw err;
    // }
    // };
    // }, [pulled]);
  }, []);

  const downloadFile = (id: number) => {
    window.location.href = `http://localhost/API/tcc/downloadFile.php?id=${id}`;
  };
  console.log(files);
  return (
    <div className="admin">
      <ul>
        {files.length > 0 &&
          files.map((file: File) => (
            <li
              key={file.id}
              className="ml-5 mb-2 px-6 py-2 rounded rounded-md transition-all ease ease-in-out hover:bg-zinc-50"
            >
              <p className="block text-lg">{file.fileName}</p>
              <button
                className="bg-blue-500 ml-2 px-6 py-2 text-white border rounded rounded-md duration-300 transition-all ease ease-in-out hover:bg-blue-600"
                onClick={() => downloadFile(file.id)}
              >
                Download PDF
              </button>
            </li>
          ))}
      </ul>
      {/* <ErrorBound>
      </ErrorBound> */}

      {/* <Toppest handlePrevious={handlePrevious} />
      <p className="mb-10 tracking-[-0.15px]">
        <span className="opacity-50">Company Information</span>
        <span className="tracking-[-2px] opacity-50 mx-4">___________ </span>
        Other Requirements
      </p>
      <Formik
        key={"UploadedForm"}
        validateOnChange
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            setFieldValue,
            errors,
            touched,
            isValid,
            dirty,
            isSubmitting,
          } = formik;
          setU2errors(errors);
          setU2touched(touched);
          return (
            <Form method="POST" encType="multipart/form-data" role="form">
              <div className="mb-7">
                <Input
                  name={"pdfName"}
                  label={"Director name"}
                  placeholder={"Mr. Adekunle Moses Abdulgafar"}
                  errorMsg={errors?.pdfName}
                  err={errors?.pdfName && touched?.pdfName}
                  asComponent={"text"}
                />
              </div>
              <div>
                <label htmlFor="dirCert">Upload PDF</label>
                <input
                  id="dirCert"
                  name="dirCert"
                  type="file"
                  // <Field
                  //   id={"dirCert"}
                  //   type="file"
                  //   accept=".pdf"
                  //   title={`CITN / ICAN Certificate for at least one Director.`}
                  //   name={"dirCert"}
                  className="p-2 w-64 ml-1 mr-1 border border-zinc-400 opacity-65 rounded rounded-md cursor-pointer"
                  onChange={(event) => {
                    console.log(event.currentTarget.files?.[0]);
                    setFieldValue(
                      "dirCert",
                      event.currentTarget.files?.[0] || null
                    );
                  }}
                />
                {errors.dirCert && touched.dirCert ? (
                  <ErrorInfo info={"Some error msg"} />
                ) : null}
                <button
                  type="button"
                  onClick={() => {
                    document?.getElementById("dirCert").click();
                  }}
                  className="bg-blue-500 ml-2 px-6 py-2 text-white border rounded rounded-md duration-300 transition-all ease ease-in-out hover:bg-blue-600"
                >
                  Upload
                </button>
              </div>
              <div className="flexMe justify-end gap-7 mt-24">
                <button
                  onClick={handlePrevious}
                  className="bg-transparent rounded rounded-md font-semibold py-3.5 px-10 border-2 border-blue-500 text-blue-500"
                >
                  Previous
                </button>
                <button
                  className={`bg-blue-500 rounded rounded-md font-semibold py-3.5 px-10
                  text-white ${!(dirty && isValid) ? "disabled-btn" : ""}`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {submitted ? (
                    <>
                      Please wait
                      <ClipLoader
                        size={13}
                        className="ml-1.5"
                        speedMultiplier={0.7}
                        color="#fff"
                      />
                    </>
                  ) : (
                    "Complete"
                  )}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik> */}
    </div>
  );
};

export default Admin;
