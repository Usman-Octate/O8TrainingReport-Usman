import React from "react";
import styled from "styled-components";
import upIcon from "../../assets2/ChartOfAccountsIcons/Up.svg";
import downIcon from "../../assets2/ChartOfAccountsIcons/Down.svg";

const UpDownIcon = () => {
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3px",
          marginLeft: "5px",
        }}
      >
        <img src={upIcon} alt="Image" />
        <img src={downIcon} alt="Image" />
      </div>
    </Wrapper>
  );
};

export default UpDownIcon;

const Wrapper = styled.div``;
