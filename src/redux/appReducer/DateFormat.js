import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  format: 'DD MMMM YYYY', 
};

const dateFormatSlice = createSlice({
  name: 'dateFormat',
  initialState,
  reducers: {
    setDateFormat(state, action) {
      state.format = action.payload;
    },
  },
});

export const { setDateFormat } = dateFormatSlice.actions;
export default dateFormatSlice.reducer;
