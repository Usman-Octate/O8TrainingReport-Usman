import { createSlice } from "@reduxjs/toolkit";
import EnLocal from "../../assets2/Json/LocalLang/EnLocal.json";
// import BlueTheme from "../../assets2/Json/theme/LightThemesBlueTheme.json";
import TeelTheme from "../../assets2/Json/theme/LightThemes/TeelTheme.json";
// import SuccessTheme from "../../assets2/Json/theme/LightThemesSuccessTheme.json";
import BlueLightTheme from "../../assets2/Json/theme/LightThemes/BlueLightTheme.json";
// import BlueDarkTheme from "../../assets2/Json/theme/DarkThemes/BlueDarkTheme.json";
import IndigoTheme from "../../assets2/Json/theme/LightThemes/IndigoTheme.json";
// import GrayBlueTheme from "../../assets2/Json/theme/LightThemesGrayBlueTheme.json";
import MainTheme from "../../assets2/Json/theme/LightThemes/MainTheme.json";
import YellowTheme from "../../assets2/Json/theme/LightThemes/YellowTheme.json";
import RedTheme from "../../assets2/Json/theme/LightThemes/RedTheme.json";
import { Constants } from "../../appUtils/Constants";

export const LocalSlice = createSlice({
  name: "localization",
  initialState: {
    keys: EnLocal,
    appLang: Constants.enLang,
    appTheme: Constants.blueTheme,
    themeKeys: MainTheme,
    darkMode: false,
  },
  reducers: {
    setLangauge: (state, action) => {
      state.appLang = action.payload;
    },
    setTheme: (state, action) => {
      const item = action.payload;
      state.appTheme = item;
      if (state.darkMode) {
        if (item === Constants.blueTheme) {
          state.themeKeys = BlueLightTheme;
        } else if (item === Constants.indigoTheme) {
          state.themeKeys = IndigoTheme;
        } else if (item === Constants.teelTheme) {
          state.themeKeys = TeelTheme;
        } else if (item === Constants.mainTheme) {
          state.themeKeys = MainTheme;
        } else if (item === Constants.redTheme) {
          state.themeKeys = RedTheme;
        } else if (item === Constants.yellowTheme) {
          state.themeKeys = YellowTheme;
        }
      } else {
        if (item === Constants.blueTheme) {
          state.themeKeys = BlueLightTheme;
        } else if (item === Constants.indigoTheme) {
          state.themeKeys = IndigoTheme;
        } else if (item === Constants.teelTheme) {
          state.themeKeys = TeelTheme;
        } else if (item === Constants.mainTheme) {
          state.themeKeys = MainTheme;
        } else if (item === Constants.redTheme) {
          state.themeKeys = RedTheme;
        } else if (item === Constants.yellowTheme) {
          state.themeKeys = YellowTheme;
        }
      }
    },
    // toggleDarkMode: (state) => {
    //   state.darkMode = !state.darkMode;
    //   state.themeKeys = state.darkMode ? BlueDarkTheme : BlueLightTheme; // Default to blue theme dark/light
    // },
  },
});

export const { setLangauge, setTheme, toggleDarkMode } = LocalSlice.actions;
export default LocalSlice.reducer;
