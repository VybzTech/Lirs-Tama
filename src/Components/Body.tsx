import Container1 from "./Container1.jsx";
import Container2 from "./Container2.tsx";
import Container3 from "./Container3.tsx";
import Container4 from "./Container4.tsx";
import { useStatus } from "../context/StatusContext.js";

const Body = () => {
  const { status } = useStatus();

  //AVAILABLE STATUS ('Verified', 'Validated', 'Uploaded', 'Completed') Verification
  const statusComponentMap = {
    Verified: Container2,
    Validated: Container3,
    Uploaded: Container4,
  };
  // If status is not found in the map, default to Container1
  const Component = statusComponentMap[status] || Container4;

  return <Component />;
};

export default Body;
