import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 13vw;
  height: 100vh;
  margin-top: 2rem;
`;

const Title = styled.div`
  color: #6a727f;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  padding: 20px 0;
  text-align: center;
`;

const Option = styled.div`
  text-align: center;
  color: #7d838f;
  padding: 15px 0;
  width: 100%;
  font-size: 12px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#eef5ff" : "transparent")};
  transition: all 0.5s ease;
  margin: 5px 0;
  &:hover {
    background-color: #eef5ff;
    transform: scale(1);
  }
`;

const SettingsNavigation = () => {
  const [activeOption, setActiveOption] = useState(null);

  const options = [
    "Finance & Accounting",
    "Transaction Numbering",
    "Cost Center",
    "General Configuration",
  ];

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <Wrapper>
      <Title>SECTION TABS</Title>
      {options.map((option) => (
        <Option
          key={option}
          isActive={activeOption === option}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </Option>
      ))}
    </Wrapper>
  );
};

export default SettingsNavigation;
