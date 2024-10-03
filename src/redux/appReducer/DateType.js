import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'Long', // Default date type
};

const dateTypeSlice = createSlice({
  name: 'dateType',
  initialState,
  reducers: {
    setDateType(state, action) {
      state.type = action.payload;
    },
  },
});

export const { setDateType } = dateTypeSlice.actions;
export default dateTypeSlice.reducer;
