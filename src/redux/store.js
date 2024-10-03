import { configureStore } from "@reduxjs/toolkit";
import localKeysReducer from "./appReducer/Localization";
import authReducer from "./appReducer/Auth";
import numberReducer from "./appReducer/NumberFormat";
import dateFormatReducer from "./appReducer/DateFormat";
import dateTypeReducer from "./appReducer/DateType";
import dateSeparatorReducer from './appReducer/DateSeparator';
import currencyReducer from './appReducer/CurrencySlice'; 
import timeFormatReducer from './appReducer/timeFormatSlice';  



export const store = configureStore({
  reducer: {
    localization: localKeysReducer,
    auth: authReducer,
    number: numberReducer,


    dateFormat: dateFormatReducer,
    dateType: dateTypeReducer,
    dateSeparator: dateSeparatorReducer,
    currency: currencyReducer,

    timeFormat: timeFormatReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
