import React from "react";
import styled from "styled-components";
import { PiWarningCircleBold } from "react-icons/pi";
const Wrapper = styled.div`
  background-color: #f7f7f7;
  width: 372px;
  height: 213px;
  border-radius: 12px;
  position: absolute;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #9fa3ab;
  text-align: center;
`;

const Wrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 900;
  background-color: rgba(150, 149, 149, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 1px 19px 20px black;
`;

const Contain = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
  /* height: 80px; */
`;
const TagLine = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #69707e;
  /* text-align: center; */
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0 35px;
  margin-top: 1rem;
`;
const Btn = styled.button`
  background-color: #2e90fa;
  padding: 11px 17px;
  border-radius: 8px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
`;
const Btn2 = styled.div`
  background-color: white;
  padding: 11px 17px;
  border-radius: 8px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  color: #464f60;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
`;

const MyModal = ({
  main,
  cancel,
  ref,
  text,
  heading,
  mainText,
  cancelText,
  thirdText,
  thirdButton,
}) => {
  return (
    <Wrap ref={ref}>
      <Wrapper>
        <Div>
          <PiWarningCircleBold color={"#F7A539"} size={50} />
          <TagLine>{heading}</TagLine>
          <Text>{text}</Text>
        </Div>
        <Contain>
          <Btn onClick={main}>{mainText}</Btn>
          <Btn2 onClick={cancel}>{cancelText}</Btn2>
          {thirdText ? <Btn2 onClick={thirdButton}>{thirdText}</Btn2> : null}
        </Contain>
      </Wrapper>
    </Wrap>
  );
};

export default MyModal;
