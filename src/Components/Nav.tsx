import dashes from "../assets/images/Line.svg";
import { IoCheckmarkCircle, IoCheckmarkCircleOutline } from "react-icons/io5";
import { Fade } from "react-reveal";
import { navPropsType } from "../assets/Utils";
import { useStatus } from "../context/StatusContext";

const Nav = ({ id, title, content, poll, active }: navPropsType) => {
  const { status, setstatus } = useStatus();
  console.log(id, active, status);
  return (
    <div
      className={`gap-1 Nav flex
                 md:gap-1.5 md:mb-0.5 md:mb-2  
                 md:mr-[-0.5rem] md:mt-0 ${id === 0 ? "" : "lg:mt-[-0.7rem]"}`}
    >
      <div className="img flex flex-col items-center justify-start mt-[-0.05rem]">
        {active ? (
          <IoCheckmarkCircle
            className={`w-6 h-6 text-gray-800 trans
            ${status === "" && active && status !== "Verified" ? "w-7 h-7" : ""}
            ${status === "Verified" && id === 1 && active ? "w-7 h-7" : ""}
            ${status === "Validated" && id === 2 && active ? "w-7 h-7" : ""}
            `}
          />
        ) : (
          // ${active && status !== "" ? "w-7 h-7" : ""}
          <IoCheckmarkCircleOutline className="w-6 h-6 text-gray-600 trans md:w-6 md:h-6" />
        )}
        {id !== 2 && (
          <img
            className="w-0.5 mt-[-.25rem] lg:max-h-[70%]"
            src={dashes}
            alt="dashes design"
          />
        )}
      </div>
      <div
        className="w-[3px] min-w-[3px] h-24 mt-1 rec trans rounded rounded-sm
                   md:w-[5px] md:h-20 md:mt-2 
                   lg:w-[2.5px] lg:min-w-[2.5px] xl:h-16"
        style={{ backgroundColor: poll }}
      ></div>
      <div>
        <Fade to="right" delay={200}>
          <h3
            className={`navCont mt-1.5 text-sm leading-[1.2] font-bold uppercase
                        ml-0.5 ${active ? "text-stone-900" : "text-stone-700"}
                        md:leading-[1.3] md:text-[1rem] md:font-extrabold md:ml-1.5
                        lg:text-[0.9rem] xl:text-[1rem]`}
          >
            {title}
          </h3>
        </Fade>
        <Fade to="right" delay={200}>
          <span
            className="navCont mt-1.5 font-extralight text-[0.7rem]
                         leading-1 mt-0.5 text-zinc-600 ml-0.5
                         md:mt-1 md:text-[0.7rem] md:leading-[1.35] md:pr-3.5 md:ml-1.5
                         lg:leading-[1.6] xl:text-[0.8rem] xl:pr-5"
          >
            {content}
          </span>
        </Fade>
      </div>
    </div>
  );
};

export default Nav;
