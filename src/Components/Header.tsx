import Logo from "../assets/images/Logo.png";
import { Fade } from "react-reveal";

const Header = () => {
  return (
    <header className="my-6">
      <div className="flex items-start justify-left gap-0 
                      md:gap-1 
                      lg:gap-2 xl:gap-3">
        <img
          className="w-11 object-contain md:w-18 lg:w-[3rem] xl:w-[3.75rem]"
          src={Logo}
          alt="Company Logo"
        />
        <Fade to="right" delay={200}>
          <h1 className="navCont ml-2 mt-1">LAGOS STATE INTERNAL REVENUE SERVICE</h1>
        </Fade>
      </div>
    </header>
  );
};

export default Header;
