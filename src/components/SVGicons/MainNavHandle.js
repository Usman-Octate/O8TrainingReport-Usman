import React from "react";

const MainNavHandle = ({ startCol, endCol }) => {
  return (
    <svg
      width="15"
      height="94"
      viewBox="0 0 15 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 80C15 88 4.76837e-06 94 4.76837e-06 94L4.76837e-06 0C4.76837e-06 0 15 5.5 15 13C15 20.5 15 72 15 80Z"
        fill="url(#paint0_linear_4101_58876)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4101_58876"
          x1="15"
          y1="47"
          x2="4.76837e-06"
          y2="47"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={startCol} />
          <stop offset="1" stop-color={endCol} />
          {/* #53B1FD */}
          {/* #2E90FA */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MainNavHandle;
