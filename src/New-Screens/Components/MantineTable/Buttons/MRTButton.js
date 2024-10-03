import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Btn = styled.div`
  padding: ${(props) => (props.height ? '7px 10px' : '5px 10px')};
  border-radius: 8px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: ${(props) => props.color};
  transition: all 0.5s ease;

  @media (max-width: 1024px) {
    min-width: ${(props) => (props.fixWidth ? '4.8rem' : '')};
    padding: 4px 6px;
  }

  &:hover {
    background-color: ${(props) => props.hover};
  }
`;

const Text = styled.div`
  color: ${(props) => props.color};
  font-weight: 600;
  margin-left: 8px;
  font-size: 14px;
  padding: ${(props) => (props.size ? '1px 0px' : '3px 0px')};

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

  @media (max-width: 1024px) {
    width: 16px;
  }
`;

const MRTButton = ({ icon: Icon, color, hoverColor, title, size, height, fixWidth, onClick,iconSize }) => {
  const sBlue = 'blue';
  const sGrey = 'grey';
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const getBtnColor = () => (color === sBlue ? themeKeys.primary : themeKeys.c20);
  const selectedColor = getBtnColor();
  const getTextColor = () => (color === sBlue ? themeKeys.c20 : '#827CA3');
  const getIconColor = () => themeKeys.primary;
  const getHoverColor = () => (color === sBlue ? themeKeys.darkHover : themeKeys.hover2);

  return (
    <Btn
      color={getBtnColor()}
      onClick={onClick}
      fixWidth={fixWidth}
      height={height}
      hover={getHoverColor()}
    >
      <Image>
        {Icon && <Icon color={getIconColor()} size={iconSize} />}
      </Image>
      <Text color={getTextColor()} size={size}>
        {title}
      </Text>
    </Btn>
  );
};

export default MRTButton;
