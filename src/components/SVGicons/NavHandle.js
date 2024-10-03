import React from "react";

const NavHandle = ({ startCol, endCol }) => {
  return (
    <svg
      width="16"
      height="95"
      viewBox="0 0 16 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* #1849a9 */}
      {/* #2f5bb1 */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stop-color={startCol} />
          <stop offset="100%" stop-color={endCol} />
        </linearGradient>
      </defs>
      <g filter="url(#filter0_b_5186_62018)">
        <path
          d="M0.5 14.5C0.5 6.5 15.5 0.5 15.5 0.5L15.5 94.5C15.5 94.5 0.5 89 0.5 81.5C0.5 74 0.5 22.5 0.5 14.5Z"
          fill="url(#gradient1)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_5186_62018"
          x="-7.5"
          y="-7.5"
          width="31"
          height="110"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_5186_62018"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_5186_62018"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default NavHandle;
