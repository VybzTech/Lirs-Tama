import { Field } from "formik";
import ErrorInfo from "./ErrorInfo";

type uploadDoc = {
  id: number;
  title: string;
  name: string;
  errorMsg: string;
  err: boolean;
};

const UploadDoc = ({ id, title, name, err, errorMsg }: uploadDoc) => {
  return (
    <div className="mt-4 mb-8 relative w-full">
      <div className="flex justify-between pr-5">
        <p className="font-medium text-[1rem] py-1.5 mb-2 text-gray-700">
          <span className="text-lg text-black mr-1  ">{id}. </span>
          {title}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <Field
            id={name}
            type="file"
            accept=".pdf"
            title={`Upload ${name}`}
            name={name}
            // onChange={(event) => {
            //   setFieldValue(name, event.currentTarget.files[0]);
            // }}
            className="p-2 w-64 ml-1 mr-1 border border-zinc-400 opacity-65 rounded rounded-md cursor-pointer"
          />
          <button
            type="button"
            onClick={() => {
              document?.getElementById(name).click();
            }}
            className="bg-blue-500 ml-2 px-6 py-2 text-white border rounded rounded-md duration-300 transition-all ease ease-in-out hover:bg-blue-600"
          >
            Upload
          </button>
        </div>
        {err && <ErrorInfo info={errorMsg} />}
      </div>
    </div>
  );
};

export default UploadDoc;
