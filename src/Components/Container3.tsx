/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";
import Input from "./Input";
import toast from "react-hot-toast";
import Toppest from "./Toppest.tsx";
import { companyInfo } from "../Api.js";
import ErrorInfo from "./ErrorInfo.tsx";
import {
  CircleLoader,
  ClipLoader,
  FadeLoader,
  MoonLoader,
} from "react-spinners";
import { Field, Form, Formik } from "formik";
import Requirements from "./Requirements.tsx";
import React, { useEffect, useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useStatus } from "../context/StatusContext.js";
import { useUpload } from "../context/UploadContext.tsx";
import { addCompanyInfo } from "../Api.js";
import { CompanyProps, errP } from "../assets/Utils.tsx";

const Container3 = () => {
  const { status, setStatus } = useStatus();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [Cname, setCname] = useState<boolean>(false);
  const [newCompany, set] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);
  const {
    Uerrors,
    setUerrors,
    Utouched,
    setUtouched,
    companyDets,
    setCompanyDets,
  } = useUpload();

  const handlePrevious = (e: any) => {
    setStatus("Verified");
  };

  const t = (v: boolean) => {
    // , tym: number | undefined
    setTimeout(
      () => {
        setSearching(v);
        setSubmitted(v);
      },
      1200
      // !tym ? 1200 : tym
    );
  };

  useEffect(() => {}, [status, companyDets]);

  const initialValues = {
    companyID: "",
    companyName: "",
    companyEmail: "",
    companyNo: "",
    companyHistory: "",
    // REQUIREMENTS INIT VALUES
    // cacDoc: "",
    // financial3yrs: "",
    // efccForm: "",
    // formalLetter: "",
    // regFee: "",
    // businessPrem: "",
  };

  const validationSchema = Yup.object().shape({
    companyID: Yup.string()
      .min(4, "Incomplete Payer ID")
      .matches(/^c-\d{3,}$/i, "Invalid Payer ID format")
      .required("Please provide a valid company ID"),
    companyName: Yup.string()
      .min(3, "Incomplete Company Name")
      .required("Kindly confirm your Company's name"),
    companyEmail: Yup.string()
      .email("Invalid email format")
      .required("Kindly provide your Company's email"),
    companyNo: Yup.string()
      .matches(/^(0|\+?234)?\d{9,}$/, "Invalid Phone No")
      .required("Kindly provide your Company's phone No"),
    companyHistory: Yup.string().min(10).trim().notRequired(),
    // REQUIREMENTS INIT VALUES
    // cacDoc: Yup.mixed().required("Upload appropiate document"),
    // financial3yrs: Yup.mixed().required("Upload appropiate document"),
    // efccForm: Yup.mixed().required("Upload appropiate document"),
    // formalLetter: Yup.mixed().required("Upload appropiate document"),
    // regFee: Yup.mixed().required("Upload appropiate document"),
    // businessPrem: Yup.mixed().required("Upload appropiate document"),
  });

  const manageID = async (
    e: any,
    fieldSetter: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => void
  ) => {
    setSearching(true);
    // className="w-7 h-7
    let response;
    // CHECK IF FIELD IS NOT EMPTY
    if (e?.target?.value === "") {
      toast.error("Kindly include your Company Id !", {
        position: "top-right",
      });
      t(false);
      return;
    }
    try {
      const res = await companyInfo();
      if (res.status === 200) response = res.data;
      console.log("THIS IS DATA FROM Companies DB", response);
      // PULLED COMPANY INFO
      const compInfo: CompanyProps[] = response?.filter(
        (res: CompanyProps) =>
          res?.companyID?.toLowerCase() === e?.target?.value.toLowerCase()
      );
      console.log(compInfo);

      if (compInfo.length > 0) {
        const {
          companyID,
          companyEmail,
          companyName,
          companyNo,
          Cid,
          companyHistory,
        } = compInfo[0];
        toast.success("Successful", {
          position: "top-right",
        });
        console.log(Cid, companyID);
        fieldSetter("companyName", companyName, true);
        fieldSetter("companyNo", companyNo, true);
        fieldSetter("companyEmail", companyEmail, true);
        fieldSetter("companyHistory", companyHistory, true);
        // setSearching(false);
        setCname(true);
      } else if (compInfo.length < 1) {
        fieldSetter("companyName", "", false);
        fieldSetter("companyNo", "", false);
        fieldSetter("companyEmail", "", false);
        fieldSetter("companyHistory", "", false);
        set(true);
        toast.success("This Company's information has not been pulled", {
          position: "top-right",
        });
        t(false);
      }
    } catch (err: unknown) {
      if (err?.message === "Network Error") {
        toast.error("Network Error !", { position: "top-right" });
      } else {
        console.error("Error validating info:", err);
        toast.error("Error Validating Company ID", { position: "top-right" });
      }
      t(false);
      throw err;
    }
  };

  const submitForm = async (values, actions) => {
    console.log("I'm submitting");
    setSubmitted(true);
    setCompanyDets(values);
    // ADD COMPANY NOT PULLED TO DB - Companies
    if (newCompany) {
      let response;
      try {
        const res = await addCompanyInfo(values);
        console.log(res);
        if (res.status === 201) response = res.data;
        console.log("Successul addition of company", response);
      } catch (e: unknown) {
        if (e?.message === "Network Error") {
          console.error(e);
          toast.error("Network Error !", { position: "top-right" });
        } else {
          console.error("Error adding company !");
        }
        throw e;
      }
    }
    setTimeout(() => {
      setSubmitted(false);
      setStatus("Uploaded");
      console.log("companyDets : ", companyDets);
    }, 1750);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tempore harum mollitia voluptate fugiat, ratione totam reprehenderit. Exercitationem, obcaecati sint! */}
      <Toppest handlePrevious={handlePrevious} />
      <div className="container 3">
        <p className="mb-10 tracking-[-0.15px]">
          Company Information
          <span className="tracking-[-2px] opacity-50 mx-4">___________ </span>
          <span className="opacity-50">Other Requirements</span>
        </p>
        <p className="mb-2 font-semibold text-[0.95rem] text-slate-800">
          Company's Information
        </p>
        <hr />
        <div className="my-6 justify-start flexMe gap-7 [&>form]:w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange
            onSubmit={submitForm}
            key={"UploadForm"}
          >
            {(formik) => {
              const {
                errors,
                touched,
                setFieldValue,
                handleBlur,
                isValid,
                dirty,
              } = formik;
              setUerrors(errors);
              setUtouched(touched);
              return (
                <Form>
                  <div
                    className="my-6 justify-start gap-4 flex flex-col 
                               w-full  md:w-full lg:flex-row lg:gap-12"
                  >
                    {/* HAD TO CALL THE INPUT COMPONENT MANUALLY BECAUSE OF SIDE EFFECTS  */}
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          className="text-[13.5px] text-[#111]"
                          htmlFor="companyID"
                        >
                          Payer ID
                        </label>
                        {Uerrors?.companyID && Utouched?.companyID && (
                          <ErrorInfo info={Uerrors?.companyID} />
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Field
                          autoComplete="off"
                          name="companyID"
                          className="text-zinc-500 w-full border border-[1.75px] border-solid border-[#ccc] px-4 py-3 rounded rounded-md focus:border-1 placeholder:text-[12px] tracking-[0.2px] placeholder:font-light"
                          placeholder="C-****414"
                          onBlur={(e: unknown) => {
                            handleBlur(e);
                            manageID(e, setFieldValue);
                          }}
                        />
                        {!Cname && (
                          <>
                            <MoonLoader
                              loading={searching}
                              size={20}
                              className="fill-stone-400 mr-[-1.8rem] md:ml-[-0.2rem]"
                            />
                          </>
                        )}
                        {Cname && (
                          <IoCheckmarkCircle className="w-7 h-7 fill-green-600 mr-[-1.8rem]" />
                        )}
                      </div>
                    </div>
                    <Input
                      label="Company Name"
                      placeholder="ABC"
                      name={"companyName"}
                      asComponent={"text"}
                      err={Uerrors?.companyName && Utouched?.companyName}
                      errorMsg={Uerrors?.companyName}
                    />
                  </div>
                  <div
                    className="my-6 justify-start gap-4 flex flex-col 
                                  md:w-full lg:flex-row lg:gap-12"
                  >
                    <Input
                      asComponent="email"
                      label="Email Address"
                      placeholder="johndoe@example.com"
                      name={"companyEmail"}
                      err={Uerrors?.companyEmail && Utouched?.companyEmail}
                      errorMsg={Uerrors?.companyEmail}
                    />
                    <Input
                      label="Phone Number"
                      placeholder="08023456789"
                      name={"companyNo"}
                      asComponent={"number"}
                      err={Uerrors?.companyNo && Utouched?.companyNo}
                      errorMsg={Uerrors?.companyNo}
                    />
                  </div>
                  <Input
                    asComponent="textarea"
                    label="Company History"
                    placeholder="Lorem ipsum dolor "
                    name={"companyHistory"}
                    err={Uerrors?.companyHistory && Utouched?.companyHistory}
                    errorMsg={Uerrors?.companyHistory}
                  />
                  {/* <Requirements /> */}
                  <div className="flexMe justify-end gap-7 mt-20 flex-col md:flex-row">
                    <button
                      onClick={handlePrevious}
                      className="w-full bg-transparent rounded rounded-md font-semibold py-3.5 px-10 border-2 border-blue-500 text-blue-500
                                 md:w-fit"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className={`w-full bg-blue-500 rounded rounded-md font-semibold py-3.5 px-10 md:w-fit
                      text-white ${!dirty && isValid ? "disabled-btn" : ""}`}
                    >
                      {}
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
                        "Continue"
                      )}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Container3;
