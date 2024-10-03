import React, { useState } from "react";
import styled from "styled-components";
import DropDown from "../components/buttons/DropDown"; // Adjust the path as needed

const Wrapper = styled.div``;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin: 20px 0px 20px 10px;
`;
const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 10px 0px;
`;
const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  margin-left: 5px;
`;
const Image = styled.div``;

const SectionWithToggle = ({ title, children, lineVisible }) => {
  const [isToggle, setIsToggle] = useState(false);
  
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <Title>
        <Image style={{ cursor: "pointer" }} onClick={handleToggle}>
          {isToggle ? (
            <DropDown size={"Small"} icon={"ArrowDown"} />
          ) : (
            <DropDown size={"Small"} icon={"ArrowRight"} />
          )}
        </Image>
        <Text>{title}</Text>
      </Title>
      {lineVisible ? <Line /> : null}
      {isToggle ? <Wrapper>{children}</Wrapper> : null}
      {lineVisible ? null : <Line />}
    </>
  );
};

export default SectionWithToggle;
