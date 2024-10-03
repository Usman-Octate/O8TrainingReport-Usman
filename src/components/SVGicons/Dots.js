import React from "react";

const Dots = ({ fill }) => {
  return (
    <svg
      width="4"
      height="17"
      viewBox="0 0 4 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2.8894" r="2" fill={fill} />
      <circle cx="2" cy="8.8894" r="2" fill={fill} />
      <circle cx="2" cy="14.8894" r="2" fill={fill} />
    </svg>
  );
};

export default Dots;
