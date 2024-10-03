import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCurrency: {
    label: "USD",
    value: "USD",
    fullForm: "United States Dollar",
    currencySign: "$",
    exchangeRate: 3.675,
  },
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    updateCurrency(state, action) {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { updateCurrency } = currencySlice.actions;

export default currencySlice.reducer;
