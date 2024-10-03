import React from "react";
import { useAppContext } from "../../context/AppProvider";
import { useSelector } from "react-redux";

const SortUp = () => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const strokeColor = themeKeys.primary || '#464F60';

  return (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5.25L6 2.25L3 5.25"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10.75L6 13.75L9 10.75"
        stroke={strokeColor}
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SortUp;
