import { logo } from "../assets";
import { navLinks, socials } from "../constants";

const Footer = () => (
  <footer className="sm:py-[48px] py-[60px] flex sm:flex-row flex-col sm:justify-between justify-start">
    <div className="flex xs:flex-row flex-col xs:items-start items-center sm:justify-start justify-between md:gap-[120px] sm:gap-[30px] gap-0 sm:mb-0 mb-[35px]">
      <div className="flex flex-col justify-between xs:items-start items-center xs:self-normal self-stretch">
        <img src={logo} alt="logo" className=" w-[96px] h-[24px]" />
        <ul className="list-none flex xs:py-0 py-[24px]">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`${
                index !== navLinks.length - 1 ? "mr-[25px]" : "mr-0"
              }`}
            >
              <a
                className="font-livvic text-[18px] text-white leading-[28px] transition duration-200 ease-in hover:text-lightCoral"
                href=""
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="font-livvic font-normal text-[18px] leading-[25px] text-white opacity-60 xs:text-start text-center">
        987 Hillcrest <br /> LaneIrvine, CA <br /> California 92714 <br /> Call
        Us : 949-833-7432
      </p>
    </div>
    <div className="flex xs:flex-row sm:flex-col flex-col  justify-between self-stretch xs:items-start items-center">
      <div className="flex gap-[16px] xs:mb-0 mb-[15px]">
        {socials.map((item) => (
          <img
            key={item.id}
            src={item.icon}
            alt={item.id}
            className="w-[24px] h-[24px] cursor-pointer"
          />
        ))}
      </div>
      <p className="font-livvic font-normal text-[18px] leading-[25px] text-white opacity-60 xs:text-start text-center">
        Copyright 2020. All Rights Reserved
      </p>
    </div>
  </footer>
);

export default Footer;
