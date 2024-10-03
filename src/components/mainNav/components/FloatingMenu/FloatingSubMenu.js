import React from "react";
import { ClosedNavSubMenu } from "./style";
import SubMenu from "../submenu/SubMenu";
import { useSelector } from "react-redux";

const FLoatingSubMenu = ({ data, leftMargin, subMenuClick, color }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const divider = 8;
  return (
    <ClosedNavSubMenu
      leftMargin={leftMargin + divider}
      bgColor={themeKeys.menuItem}
    >
      <SubMenu
        isFloating={true}
        data={data}
        subMenuClick={(e) => subMenuClick(e)}
        icColor={color}
        shadow={true}
      />
    </ClosedNavSubMenu>
  );
};

export default FLoatingSubMenu;
