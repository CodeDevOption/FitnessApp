import React from "react";
import logo from "../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const style = "no-underline ";
  const activeStyle = "no-underline border-b-[3px] border-b-[#FF2625]";

  return (
    <nav className="flex justify-around sm:justify-start sm:gap-[122px] gap-[40px] sm:mt-[32px] mt-[20px] items-center ">
      <Link>
        <img
          src={logo}
          alt="logo"
          className="w-[48px] h-[48px] my-0 mx-[20px]"
        />
      </Link>
      <div className="flex gap-[40px] text-[24px] items-end">
        <NavLink to='/' className={({ isActive }) => (isActive ? activeStyle : style)}>
          Home
        </NavLink>
        <a href="#exercises" className="no-underline text-[#3A1212]">
          Exercises
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
