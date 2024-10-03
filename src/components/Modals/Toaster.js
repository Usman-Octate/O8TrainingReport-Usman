import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled, RxCross2 } from "react-icons/rx";
import { PiWarningCircleBold } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const Box = styled.div`
  position: absolute;
  display: flex;
  left: 40%;
  top: 3%;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.5s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 1100;
`;

const Content = styled.div`
  width: 369px;
  height: 60px;
  border: ${(props) =>
    props.color === "check"
      ? "1px solid #34C759"
      : props.color === "info"
      ? "1px solid #2E90FA"
      : props.color === "warning"
      ? "1px solid #F7A539"
      : props.color === "cross"
      ? "1px solid #FD6158"
      : null};
  border-radius: 12px;
  // border-top-left-radius: 12px;
  // border-bottom-left-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const Inner = styled.div`
  display: flex;
  width: 337px;
`;

const Inner2 = styled.div`
  display: flex;
  width: 320px;
`;

const TextDiv = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

const TagLine = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #464f60;
`;

const Text = styled.div`
  font-size: 12px;
  color: darkgrey;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
`;

const IconDiv2 = styled.div`
  display: flex;
  margin: auto;
  /* margin-left: 8.3rem; */
  cursor: pointer;
`;

const Toaster = ({ icon, text, text2, handleClose, duration }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(handleClose, 500);
    }, duration);

    return () => clearTimeout(timer);
  }, [handleClose, duration]);

  return (
    <Box isVisible={isVisible}>
      <Content color={icon}>
        <Inner>
          <Inner2>
            <IconDiv>
              {icon === "check" ? (
                <FaRegCheckCircle size={24} color={"#34C759"} />
              ) : icon === "cross" ? (
                <RxCrossCircled size={24} color={"#FD6158"} />
              ) : icon === "warning" ? (
                <PiWarningCircleBold size={24} color={"#F7A539"} />
              ) : icon === "info" ? (
                <BsInfoCircle size={24} color={"#2E90FA"} />
              ) : null}
            </IconDiv>

            <TextDiv>
              <TagLine>{text}</TagLine>
              <Text>{text2}</Text>
            </TextDiv>
          </Inner2>
          <IconDiv2 onClick={handleClose}>
            <RxCross2 size={20} color={"grey"} />
          </IconDiv2>
        </Inner>
      </Content>
    </Box>
  );
};

export default Toaster;
