import { plus } from "../assets";
import styles from "../styles";
import { twitter, linkedin } from "../assets";
import { useState } from "react";
const DirectorCard = ({ name, title, img, content }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="pt-[32px] pb-[56px] px-[20px] flex flex-col justify-center w-full items-center bg-stateGreen relative z-[1]">
      <img
        src={img}
        alt="name"
        className="w-[96px] h-[96px] rounded-full mb-[16px]"
      />
      <h4 className="font-livvic font-bold text-[18px] text-raptureBlue leading-[28px]">
        {name}
      </h4>
      <h5 className="font-livvic text-[15px] text-white leading-[25px]">
        {title}
      </h5>
      <div
        onClick={() => setToggle((prev) => !prev)}
        className={`w-[56px] h-[56px] rounded-full ${styles.flexCenter} ${
          toggle ? "bg-raptureBlue" : "bg-lightCoral"
        }  absolute -bottom-[28px] cursor-pointer z-[10]`}
      >
        <img
          src={plus}
          alt="icon"
          className={toggle ? "rotate-[45deg]" : "rotate-0"}
        />
      </div>
      <div
        className={`${
          styles.flexCenter
        } flex-col px-[48px] absolute duration-[.3s] w-[100%] ${
          toggle ? "h-[100%]" : "h-0"
        } bottom-0 bg-darkGreen z-[5] overflow-hidden`}
      >
        <h4 className="font-livvic font-bold text-[18px] text-raptureBlue leading-[28px]">
          {name}
        </h4>
        <p className={`${styles.paragraph} text-center mt-[8px] mb-[24px]`}>
          {content}
        </p>
        <div className={`${styles.flexCenter} gap-[15px]`}>
          <img src={twitter} alt="twitter" className="cursor-pointer" />
          <img src={linkedin} alt="linkedin" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default DirectorCard;
