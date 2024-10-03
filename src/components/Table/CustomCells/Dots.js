import React from "react";
import DotsIcon from "../../SVGicons/Dots";
import { useSelector } from "react-redux";

const Dots = ({ onClick }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  return (
    <div style={{ cursor: "pointer" }} onClick={onClick}>
      <DotsIcon fill={themeKeys.primary} />
    </div>
  );
};

export default Dots;
