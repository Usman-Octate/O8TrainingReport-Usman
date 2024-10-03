import React, { useState } from "react";
import { ClosedNavMenu } from "./style";
import ItemMenu from "../menu/ItemMenu";
import { useSelector } from "react-redux";

const FLoatingMenu = ({
  data,
  isOpen,
  selectedPos,
  selectedOption,
  onOptionClick,
  submenu,
  handleDropDownOptionClick,
  centerFloatMenu,
  icColor,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [isFloatSubMenu, setIsFloatSubMenu] = useState(false);

  return (
    <ClosedNavMenu
      bgColor={themeKeys.menuItem}
      top={selectedPos - 16}
      isFloatSubMenu={isFloatSubMenu}
      centerFloatMenu={centerFloatMenu}
    >
      <ItemMenu
        setIsFloatSubMenu={setIsFloatSubMenu}
        isFloating={true}
        isOpen={isOpen}
        data={data.menu}
        selectedOption={selectedOption}
        handleDropDownOptionClick={(e) => handleDropDownOptionClick(e)}
        onOptionClick={(e) => onOptionClick(e)}
        submenu={submenu}
        icColor={icColor}
      />
    </ClosedNavMenu>
  );
};

export default FLoatingMenu;
