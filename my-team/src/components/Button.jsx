import React from "react";

const Button = ({ content, color }) => (
  <button
    className={`py-[8px] px-[32px] font-livvic text-[18px] transition duration-200 ease-in text-white leading-[28px] border border-${color} rounded-[24px] hover:border-lightCoral hover:text-lightCoral`}
  >
    {content}
  </button>
);

export default Button;
