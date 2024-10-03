import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NumberSeprator: ",",
  DecimalSeprator: ".",
  NegitiveNumber: "-",
  NumberGrouping: "123,457,789",  // Default value for Number Grouping
  DecimalPlacesQuantity: "3",     // Default for Quantity
  DecimalPlacesAmount: "2",       // Default for Amount
};

const FormatSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    NumberValue(state, action) {
      state.NumberSeprator = action.payload;
    },
    DecimalValue(state, action) {
      state.DecimalSeprator = action.payload;
    },
    NegitiveValue(state, action) {
      state.NegitiveNumber = action.payload;
    },
    NumberGroupingValue(state, action) {
      state.NumberGrouping = action.payload;
    },
    DecimalPlacesQuantityValue(state, action) {
      state.DecimalPlacesQuantity = action.payload;
    },
    DecimalPlacesAmountValue(state, action) {
      state.DecimalPlacesAmount = action.payload;
    },
  },
});

export const {
  NumberValue,
  DecimalValue,
  NegitiveValue,
  NumberGroupingValue,
  DecimalPlacesQuantityValue,
  DecimalPlacesAmountValue,
} = FormatSlice.actions;
export default FormatSlice.reducer;
