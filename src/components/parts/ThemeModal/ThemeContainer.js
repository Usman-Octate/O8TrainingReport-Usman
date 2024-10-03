import React, { useEffect, useRef } from "react";
import light from "../../../assets2/ProfileModal/Light.svg";
import dark from "../../../assets2/ProfileModal/Dark.svg";
import { Constants } from "../../../appUtils/Constants";
import { useDispatch } from "react-redux";
import { setTheme } from "../../../redux/appReducer/Localization";
import {
  Wrapper2,
  Name2,
  Title2,
  Title3,
  Mode,
  BrighterMode,
  BrighterMode2,
  SubText2,
  Heading,
  ColorSection,
  Circle,
} from "./Style";

const ThemeContainer = ({ handleClickOutside }) => {
  const dispatch = useDispatch();
  const themeClick = (item) => {
    dispatch(setTheme(item));
  };

  const Tagline = "Pick a theme of the application";
  const title = "Theme Selection";

  return (
    <Wrapper2>
      <Heading>
        <Title2>{title}</Title2>
        <SubText2>{Tagline}</SubText2>
      </Heading>
      <Title3>Mode</Title3>
      <Mode>
        <BrighterMode>
          <img src={light} alt="Light Mode" />
          <Name2>Light</Name2>
        </BrighterMode>
        <BrighterMode>
          <img src={dark} alt="Dark Mode" />
          <Name2>Dark</Name2>
        </BrighterMode>
      </Mode>
      <Title2>Color</Title2>
      <ColorSection>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "5px",
            width: "90%",
          }}
        >
          <BrighterMode2 onClick={() => themeClick(Constants.mainTheme)}>
            <Circle color={"#2E90FA"}></Circle>
            <Name2>Octate</Name2>
          </BrighterMode2>
          <BrighterMode2 onClick={() => themeClick(Constants.blueTheme)}>
            <Circle color={"#1849a9"}></Circle>
            <Name2>Midnight</Name2>
          </BrighterMode2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            gap: "5px",
          }}
        >
          <BrighterMode2 onClick={() => themeClick(Constants.redTheme)}>
            <Circle color={"#F63D68"}></Circle>
            <Name2>Jane</Name2>
          </BrighterMode2>
          <BrighterMode2 onClick={() => themeClick(Constants.teelTheme)}>
            <Circle color={"#15B79E"}></Circle>
            <Name2>Aurora</Name2>
          </BrighterMode2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "5px",
            width: "90%",
          }}
        >
          <BrighterMode2 onClick={() => themeClick(Constants.indigoTheme)}>
            <Circle color={"#6172F3"}></Circle>
            <Name2>Cosmos</Name2>
          </BrighterMode2>
          <BrighterMode2 onClick={() => themeClick(Constants.yellowTheme)}>
            <Circle color={"#4A5578"}></Circle>
            <Name2>Space</Name2>
          </BrighterMode2>
        </div>
      </ColorSection>
    </Wrapper2>
  );
};

export default ThemeContainer;
