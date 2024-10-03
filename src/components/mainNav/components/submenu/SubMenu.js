import React from "react";
import icon from "../../../../assets2/SideNavIcons/Banking.svg";
import {
  IconDiv,
  ImgArr,
  SubDropdown,
  SubMenuDiv,
  Text,
  VLine,
  SvgImg,
} from "./style";
import { useSelector } from "react-redux";
import IcItem from "../buttons/IcItem";

const SubMenu = ({
  data,
  isFloating,
  subMenuClick,
  icColor,
  shadow,
  selectedOption,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const keys = useSelector((state) => state.localization.keys);
  console.log(selectedOption, "ds");
  return (
    <SubDropdown isOpen={true} isFloating={isFloating} shadow={shadow}>
      {data?.map((item) => {
        return (
          <SubMenuDiv isFloating={isFloating}>
            {!isFloating ? (
              <VLine
                isSubmenu={true}
                style={{
                  width: 1,
                  marginRight: 4,
                  background: themeKeys.lightVersion,
                }}
              />
            ) : null}
            <IconDiv
              hover={themeKeys.hover}
              onClick={() => subMenuClick(item)}
              isSelected={selectedOption === keys[item.title]}
            >
              <ImgArr>
                <IcItem iconsrc={item.icon} isSubMenu={true} color={icColor} />
              </ImgArr>
              <Text isFloating={isFloating} color={themeKeys.txtMenuItem}>
                {keys[item.title]}
              </Text>
            </IconDiv>
          </SubMenuDiv>
        );
      })}
    </SubDropdown>
  );
};

export default SubMenu;
