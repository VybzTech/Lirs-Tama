import React, { useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import { useStatus } from "../context/StatusContext.js";
import { Fade } from "react-reveal";

const Navbar = () => {
  const { status } = useStatus();

  const Navs = [
    {
      id: 1,
      title: "ACCOUNT VERIFICATION",
      content:
        "Input the TCC ID for all Directors and Principal officers for Validation",
      poll: "#1957F0",
      step: "Verified",
      active:
        status === "" ||
        status === "Verified" ||
        status === "Validated" ||
        status === "Uploaded",
    },
    {
      id: 2,
      title: "VALIDATION OF INFORMATION",
      content:
        "Verify if all informations provided are correct to proceed to the next step",
      poll: "#E48900",
      step: "Validated",
      active:
        status === "Verified" ||
        status === "Validated" ||
        status === "Uploaded",
    },
    {
      id: 3,
      title: "UPLOAD OF DOCUMENT",
      content: "Upload all necessary document to complete your submission",
      poll: "#157F1F",
      step: "Uploaded",
      active: status === "Validated" || status === "Uploaded",
    },
  ];

  useEffect(() => {
    //CHANGE STICKY TO WHEN YOU SCROLL A DIV WITH ID NAVBAR
    // console.log(navbar);
    const handleScroll = () => {
      const navbar: any = document?.getElementById("Navbar");
      // console.log(navbar?.scrollTop);
      // Check if the navbar is scrolled out of view
      // console.log(navbar?.scrollTop > 0);
      if (navbar?.scrollTop > 70) {
        document?.getElementById("NavContent")?.classList?.add("stick");
        document?.querySelector(".Navv")?.classList?.add("stick");
      } else {
        document?.getElementById("NavContent")?.classList?.remove("stick");
        document?.querySelector(".Navv")?.classList?.remove("stick");
      }
    };

    // Attach the scroll event listener to the navbar div
    const navbar = document.getElementById("Navbar");
    navbar?.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      navbar?.removeEventListener("scroll", handleScroll);
    };

    // window?.addEventListener("scroll", () => {
    //   window?.scrollY > window?.screen.availHeight * 0.1
    //     ? document?.getElementById("NavContent")?.classList?.add("stick")
    //     : document?.getElementById("NavContent")?.classList?.remove("stick");
    // });
    // // IMPLEMEMNT STICKY NAVBAR ONCE SCROLLTOP IS >
    // return () => {
    //   window?.removeEventListener("scroll", () => {});
    // };
  }, []);

  return (
    <div
      id="Navbar"
      className="py-2 px-4 trans flex flex-col justify-between
                 md:py-4 md:px-5  
                 lg:py-6 lg:px-8 lg:overflow-y-auto
                 xl:py-4 xl:px-16"
    >
      <Header />
      <div id="NavContent" className="mx-2 xl:mx-0">
        <Fade to="right" delay={200}>
          <h1
            className="text-left navCont my-3
          md:pt-2 md:mb-5 md:mt-2"
          >
            TAX AUDIT MONITORING AGENT (TAMA) REGISTRATION
          </h1>
        </Fade>
        <Fade to="right" delay={200}>
          <span
            className="text-xs pb-5 text-zinc-500 inline-block font-light 
                       tracking-[0.4px] navCont
                       md:text-xs
                       lg:text-sm"
          >
            Steps to Complete
          </span>
        </Fade>
        {/* </div> */}
      </div>
      <div className="Navv">
      <div
        className="Navs mb-[5.5rem] ml-1 flex flex-col gap-2 items-start justify-end
                      md:gap-1 lg:gap-0 lg:mb-28"
      >
        {Navs.map((nav, id) => (
          // <Fade to="right">
          //  </Fade> 6.6
          <Nav
            key={id}
            title={nav?.title}
            content={nav.content}
            poll={nav.poll}
            step={nav?.step}
            id={id}
            active={nav?.active}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
