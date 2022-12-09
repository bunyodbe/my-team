import React from "react";

const Button = ({ content, color }) => (
  <button
    className={`py-[8px] px-[32px] font-livvic text-[18px] font-semibold transition duration-200 ease-in text-${color} leading-[28px] border-[2px] border-${color} rounded-[24px] `}
  >
    {content}
  </button>
);

export default Button;
