import React, { useState } from "react";
import ArrowRight from "../../../../assets2/SideNavIcons/ArrowRight.svg";
import ArrowDown from "../../../../assets2/SideNavIcons/ArrowDown.svg";
import ItemMenu from "../menu/ItemMenu";
import { Container, Btn, Text, Image, IconText, Arrow } from "./style";
import { useSelector } from "react-redux";
import IcItem from "./IcItem";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

const NavButton = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  // const iconsrc = require(`../../../../assets2/SideNavIcons/${props.icon}.svg`);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState("");
  console.log(props.icon);
  const handleToggleDropdown = () => {
    if (props.title === "Dashboard" && props.title !== "") {
      props.setSelectedOption(null);
      props.onOptionClick(props.title);
    } else if (props.title !== "Dashboard") {
      setIsOpen(!isOpen);
      if (props.title == isSubmenuOpen) {
        setIsSubmenuOpen("");
      } else {
        setIsSubmenuOpen(props.title);
      }
    }
  };

  const getContainerColor = () => (isOpen ? themeKeys.menuItem : "none");
  const getBtnColor = () => (isOpen ? themeKeys.menuItemSelectedColor : "none");
  const getHoverColor = () => (isOpen ? "none" : themeKeys.hover);
  const getTextColor = () =>
    isOpen ? themeKeys.selectedNavIconColor : themeKeys.txtMenuItem;
  const getArrowColor = () =>
    isOpen ? themeKeys.selectedNavIconColor : themeKeys.navItemArrow;
  const getIconColor = () =>
    isOpen ? themeKeys.selectedNavIconColor : props.icColor;
  return (
    <Container isOpen={isOpen} color={getContainerColor()}>
      <Btn
        onClick={handleToggleDropdown}
        isOpen={isOpen}
        hover={getHoverColor()}
        // isSelected={props.selectedOption}
        bgColor={getBtnColor()}
      >
        <IconText>
          <IcItem color={getIconColor()} iconsrc={props.icon} />
          <Text textColor={getTextColor()}>{props.title}</Text>
        </IconText>
        <Arrow iconShow={props.iconShow}>
          <IcItem
            color={getArrowColor()}
            iconsrc={isOpen ? <FaAngleDown /> : <FaAngleRight />}
          />
        </Arrow>
      </Btn>

      {props.title !== "Dashboard" && isOpen ? (
        <ItemMenu
          setIsFloatSubMenu={() => console.log()}
          isOpen={isOpen}
          icColor={props.icColor}
          data={props.options}
          selectedOption={props.selectedOption}
          handleDropDownOptionClick={(e) => props.handleDropDownOptionClick(e)}
          onOptionClick={props.onOptionClick}
          submenu={props.submenu}
        />
      ) : null}
    </Container>
  );
};

export default NavButton;
