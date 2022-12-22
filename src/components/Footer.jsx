import React from "react";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <div className="mt-16 w-full bg-[#fff3f4]">
      <div className="flex flex-col gap-10 items-center px-10 pt-6">
        <img src={Logo} alt="" />
        <h1 className="text-md md:text-2xl py-10 text-[#3A1212] font-semibold">
          copyright © 2022. all rights reserved CodeDevOption
        </h1>
      </div>
    </div>
  );
};

export default Footer;
