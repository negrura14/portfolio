import React, { useEffect, useState } from "react";

import Logo from "../../assets/svg.svg";
import Navbar from "../NavBar/NavBar";
import NavMobile from "../NavMobile/NavMobile";
import Socials from "../Socials/Socials";
import DateTimeDisplay from '../Time/Time'


const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20 " : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 `}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
       
          <img src={Logo} alt="" />
       
        {/* navbar */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        {/* socials  */}
        <div className="hidden lg:block">
          <Socials /> 
          
        </div>
         <div className="relative left-10">
           <DateTimeDisplay/>
         </div>
        {/* nav mobile  */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
