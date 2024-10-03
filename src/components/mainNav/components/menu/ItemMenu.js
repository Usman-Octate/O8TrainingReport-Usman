import React, { useEffect, useRef, useState } from "react";
import ArrowRight from "../../../../assets2/SideNavIcons/ArrowRight.svg";
import ArrowDown from "../../../../assets2/SideNavIcons/ArrowDown.svg";
import SubMenu from "../submenu/SubMenu";

import {
  Dropdown,
  Option,
  VLine,
  DropDownOptions,
  OptionDiv,
  OptionContainer,
  ImgArr,
} from "./style";
import FLoatingSubMenu from "../FloatingMenu/FloatingSubMenu";
import {
  hiddenArrow,
  hiddenArrow2,
  isShowArrow,
  isSubmenuAvailable,
} from "./utils";
import { useSelector } from "react-redux";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import IcItem from "../buttons/IcItem";

const ItemMenu = ({
  data,
  isOpen,
  submenu,
  selectedOption,
  handleDropDownOptionClick,
  onOptionClick,
  isFloating = false,
  setIsFloatSubMenu,
  icColor,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const keys = useSelector((state) => state.localization.keys);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState("");
  const [leftMargin, setLeftMargin] = useState(0);
  const floatingMenuRef = useRef(0);

  useEffect(() => {
    setLeftMargin(floatingMenuRef.current.offsetWidth);
  }, [floatingMenuRef.current]);

  const subMenuClick = (item) => {
    onOptionClick(keys[item.title]);
  };

  const handleToggleSubmenu = (e, item) => {
    // console.log(item, "sasa", selectedOption);
    handleDropDownOptionClick(keys[item]);
    if (isSubmenuAvailable(item)) {
      if (item == isSubmenuOpen) {
        setIsSubmenuOpen("");
        setIsFloatSubMenu(false);
      } else {
        setLeftMargin(floatingMenuRef.current.offsetWidth);
        setIsSubmenuOpen(item);
        setIsFloatSubMenu(true);
      }
    } else {
      setIsSubmenuOpen("");
      onOptionClick(item);
    }
  };

  const getSubMenu = (item) => {
    console.log("ss", item);
    let len = submenu?.length;
    let list = [];
    for (let i = 0; i < len; i++) {
      if (submenu[i].id == item) {
        list = submenu[i].data;
        return list;
      }
    }
    return list;
  };

  const isCurrMenuOpen = (item) => isSubmenuOpen == item;

  const getArrow = (item) => {
    let arrow = <FaAngleRight />;
    if (isCurrMenuOpen(item)) {
      if (!isFloating) {
        arrow = <FaAngleDown />;
      }
    } else if (isFloating) {
      arrow = <FaAngleDown />;
    }
    return arrow;
  };
  // const getBtnColor = () => (isOpen ? themeKeys.hover : "none");
  return (
    <Dropdown
      isFloating={isFloating}
      isOpen={isOpen}
      bgColor={themeKeys.menuItem}
    >
      <DropDownOptions>
        <OptionContainer isFloating={isFloating} ref={floatingMenuRef}>
          {data.map((item, index) => {
            return (
              <>
                <OptionDiv
                  onClick={(e) => handleToggleSubmenu(e, item)}
                  isSelected={selectedOption === keys[item]}
                  hoverColor={themeKeys.hover}
                >
                  <Option
                    isFloating={isFloating}
                    key={index}
                    textColor={themeKeys.txtMenuItem}
                  >
                    {keys[item]}
                  </Option>
                  {isShowArrow(item) ? (
                    <ImgArr
                      isFloating={isFloating}
                      isHidden={item == hiddenArrow || item == hiddenArrow2}
                    >
                      <IcItem
                        color={themeKeys.navItemArrow}
                        iconsrc={getArrow(item)}
                        isSubMenu={true}
                      />
                    </ImgArr>
                  ) : (
                    ""
                  )}
                </OptionDiv>
                {isCurrMenuOpen(item) ? (
                  isFloating ? (
                    <FLoatingSubMenu
                      leftMargin={leftMargin}
                      data={getSubMenu(item)}
                      isFloating={isFloating}
                      color={icColor}
                      subMenuClick={(e) => subMenuClick(e)}
                    />
                  ) : (
                    <SubMenu
                      data={getSubMenu(item)}
                      isFloating={isFloating}
                      icColor={icColor}
                      subMenuClick={subMenuClick}
                      selectedOption={selectedOption}
                    />
                  )
                ) : null}
              </>
            );
          })}
        </OptionContainer>
      </DropDownOptions>
    </Dropdown>
  );
};

export default ItemMenu;
