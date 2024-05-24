import Toppest from "./Toppest.tsx";
import Requirements2 from "./Requirements2.tsx";
import { useStatus } from "../context/StatusContext.js";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useUpload } from "../context/UploadContext.tsx";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { addFiles, getFiles } from "../Api.js";
import Input from "./Input.tsx";
import toast from "react-hot-toast";
import axios from "axios";
import ErrorInfo from "./ErrorInfo.tsx";

interface FormValues {
  pdfName: string;
  dirCert: File | null;
}
interface File {
  id: number;
  name: string;
  path: string;
}

const Container4 = () => {
  const { setStatus } = useStatus();

  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { setUploads, companyDets, uploads, setU2errors, setU2touched } =
    useUpload();

  const handlePrevious = (e: any) => {
    e.preventDefault();
    setStatus("Validated");
  };

  // const initialValues = { dirCert: "", lasCard: "", techEvidence: "" };
  const initialValues: FormValues = { pdfName: "", dirCert: null };

  const validationSchema = Yup.object().shape({
    pdfName: Yup.string()
      .min(2, "Name is too short")
      .required("Please include pdf name !"),
    dirCert: Yup.mixed().required("Upload appropiate document"),
    //.nullable()
    //.test('fileSize', 'File too large', (value) => !value ||
    //(value && value.size <= 1024 * 1024 * 10)) // 10MB limit
    // lasCard: Yup.mixed().required("Upload appropiate document"),
    // techEvidence: Yup.mixed().required("Upload appropiate document"),
  });
  // const formData = new FormData();
  const submitForm = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    // (values: unknown, { setSubmitting }) => {
    setSubmitted(true);
    setUploads(values);

    const formData = new FormData();
    formData.append("pdfName", values?.pdfName);

    if (values?.dirCert) {
      // formData.append('dirCert', values.dirCert);
      formData.append("dirCert", values?.dirCert as Blob);
    }

    // formData.append("pdfName", "New Const");
    // formData.append(
    //   "dirCert",
    //   document.querySelector("input[name='dirCert']")?.value
    // );
    // console.log(values);
    // console.log(values);
    // console.log(formData.entries());
    // console.log(formData.get("pdfName"));
    console.log("dirCert is: ", formData.get("dirCert"));
    // ADD FILES TO DB - Files
    axios
      .post("http://localhost/API/tcc/createFiles.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "http://localhost:5173", // Enable CORS
          // "Accept": "*"
        },
      })
      .then((res) => {
        console.log(res?.data);
        setSubmitting(false);
      })
      .catch((err) => {
        console.error("Error uploading file: ", err);
        setSubmitting(false);
      });
    // PERFORM FINAL API CALL HERE
    // let response;
    // try {
    //   // console.log(formData);
    //   const res = await addFiles(formData);
    //   console.log("This is Res response from add Files: ", res);
    //   if (res.status === 201) {
    //     response = res.data;
    //     console.log("Successul addition of Files", response);
    //   }
    // } catch (e: unknown) {
    //   if (e?.message === "Network Error") {
    //     toast.error("Network Error !", { position: "top-right" });
    //     console.error(e);
    //   } else {
    //     console.error("Error adding company !");
    //   }
    //   throw e;
    // }

    setTimeout(() => {
      setSubmitted(false);
      // setStatus("Completed");
      // navigate("/Completed");
    }, 2500);
  };

  const [files, setFiles] = useState<File[]>([]);
 

  // const downloadFile = (id: number) => {
  //   window.location.href = `http://localhost/download_file.php?id=${id}`;
  // };

  return (
    <div className="container 4">
      <Toppest handlePrevious={handlePrevious} />
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
              {/* <Requirements2 /> */}
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
      </Formik>
    </div>
  );
};

export default Container4;
