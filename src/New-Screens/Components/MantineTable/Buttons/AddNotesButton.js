import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Btn = styled.div`
  padding: ${(props) => (props.height ? "7px 10px" : "8px 8px")};
  border-radius: 8px;
  display: flex;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  align-items: center;
  background-color: ${(props) => (props.disabled ? "#DEE2E6" : props.bgColor)};
  transition: all 0.5s ease;

  @media (max-width: 1024px) {
    min-width: ${(props) => (props.fixWidth ? "4.8rem" : "")};
    padding: 4px 6px;
  }

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#DEE2E6" : props.BtnHover};
  }
`;

const Text = styled.div`
  color: ${(props) => (props.disabled ? "#A0A0A0" : props.txtColor)};
  font-weight: 400;
  margin-left: 8px;
  font-size: 13px;
  padding: ${(props) => (props.size ? "1px 0px" : "3px 0px")};
  height: 15px;

  @media (max-width: 750px) {
    font-size: 10px;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  height: 16px;

  @media (max-width: 1024px) {
    width: 16px;
  }
`;

const AddNotesButton = ({
  icon: Icon,
  color,
  hoverColor,
  title,
  size,
  height,
  fixWidth,
  onClick,
  disabled, // New prop
}) => {
  const sBlue = "blue";
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const getBtnColor = () => (color === sBlue ? "#2e90fa" : "#2e90fa");
  const getTextColor = () => {
    if (disabled) {
      return "#A0A0A0"; // Disabled color
    }
    return themeKeys.primary || "#2e90fa"; // Use theme's primary color if available, otherwise fallback
  };
  const getIconColor = () => (disabled ? "#A0A0A0" : themeKeys.primary);
  const getHoverColor = () =>
    color === sBlue ? themeKeys.darkHover : themeKeys.hover2;

  return (
    <Btn
      color={getBtnColor()}
      onClick={!disabled ? onClick : undefined}
      fixWidth={fixWidth}
      height={height}
      hover={getHoverColor()}
      BtnHover={themeKeys.NewHover}
      disabled={disabled} // Pass the disabled prop to the styled component
      bgColor={themeKeys.TableHead}
    >
      <Image>{Icon && <Icon color={getIconColor()} size={18} />}</Image>
      <Text
        txtColor={themeKeys.primary}
        color={getTextColor()}
        size={size}
        disabled={disabled}
      >
        {title}
      </Text>
    </Btn>
  );
};

export default AddNotesButton;
