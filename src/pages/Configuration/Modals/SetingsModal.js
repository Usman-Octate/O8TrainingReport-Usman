import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: auto;
  border-radius: 12px;
  position: relative;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
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
`;

const Title = styled.div`
  font-size: 14px;
  padding-left: 5px;
  color: #58606f;
  font-weight: bold;
`;

const Line = styled.div`
  background-color: #ecedef;
  height: 1px;
  width: 100%;
  margin: 10px 0px;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.div`
  font-size: 14px;
  color: ${(props) => (props.primary ? "#ffffff" : "#232222")};
  border: ${(props) => (props.primary ? "none" : "1px solid #cbcbcb")};
  padding: ${(props) => (props.primary ? "12px 0" : "10px 0px")};
  width: 100%;
  text-align: center;
  background-color: ${(props) => (props.primary ? props.btnColor : "#ffffff")};
  border-radius: 8px;
  cursor: pointer;
`;

const SettingsModal = ({ title, buttons, children, closeModal }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const modalRef = useRef();

  // Close modal when clicking outside the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    // Attach event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <Wrap>
      <Wrapper ref={modalRef}>
        <Title>{title}</Title>
        <Line />
        {/* Children will represent custom inputs or other content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {children}
        </div>
        <ActionButtons>
          {/* Render buttons dynamically */}
          {buttons.map((button, index) => (
            <Button
              key={index}
              btnColor={button.primary ? themeKeys.primary : ""}
              primary={button.primary}
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}
        </ActionButtons>
      </Wrapper>
    </Wrap>
  );
};

export default SettingsModal;
