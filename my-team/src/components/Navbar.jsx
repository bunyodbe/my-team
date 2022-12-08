import { useState } from "react";
import { navLinks } from "../constants";
import { menu, close, logo } from "../assets";
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
              <a
                className="font-livvic text-[18px] text-white leading-[28px] transition-[.2s] hover:text-lightCoral"
                href=""
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="ss:block hidden">
        <Button content="contact us" color="#fff" />
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
              <a
                className="font-livvic text-[18px] text-white leading-[28px] transition-[.2s] hover:text-lightCoral"
                href=""
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <Button content="contact us" color="#fff" />
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
