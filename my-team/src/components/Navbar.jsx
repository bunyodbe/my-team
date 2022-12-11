import { useState } from "react";
import { navLinks } from "../constants";
import { menu, close, logo } from "../assets";
import { NavLink } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="sm:pt-[75px] pt-[45px] flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="ss:w-[160px] w-[127px] ss:h-[40px] h-[32px] ss:mr-[80px] mr-[0]"
        />
        <ul className="ss:flex hidden">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`${
                index !== navLinks.length - 1 ? "mr-[40px]" : "mr-0"
              }`}
            >
              <NavLink
                to={link.path}
                className="font-livvic text-[18px] text-white leading-[28px] transition duration-200 ease-in hover:text-lightCoral"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="ss:block hidden">
        <NavLink to={"/contact"}>
          <Button content="contact us" color="white" />
        </NavLink>
      </div>
      <img
        src={menu}
        alt="menu"
        className="ss:hidden block w-[20px] h-[17px] cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
      />
      <div
        className={`ss:hidden flex flex-col items-start px-[48px] pt-[112px] transition-all-[.3s] absolute top-0 w-[255px] ${
          toggle ? "right-0 transition-[.3s]" : "close-nav"
        } z-[100] h-full bg-[#2C6269] `}
      >
        <ul className="ss:hidden flex flex-col">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`${
                index !== navLinks.length - 1 ? "mb-[24px]" : "mb-[36px]"
              }`}
            >
              <NavLink
                to={link.path}
                className="font-livvic text-[18px] text-white leading-[28px] transition-[.2s] hover:text-lightCoral"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to={"/contact"}>
          <Button content="contact us" color="white" />
        </NavLink>
        <img
          src={close}
          alt="toggle"
          className="absolute top-[55px] right-[25px] cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
