import React from "react";
import left from "../../assets2/ChartOfAccountNew/left.svg";
import right from "../../assets2/ChartOfAccountNew/right.svg";

const PageIcons = (props) => {
  const { state } = props;

  return (
    <img
      style={{ cursor: "pointer" }}
      height={"30px"}
      width={"30px"}
      src={state ? left : right}
      alt="i"
    />
  );
};

export default PageIcons;
