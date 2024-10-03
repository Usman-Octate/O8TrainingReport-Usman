import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  format: '24-hour', 
};

const timeFormatSlice = createSlice({
  name: 'timeFormat',
  initialState,
  reducers: {
    setTimeFormat(state, action) {
      state.format = action.payload; 
    },
  },
});

export const { setTimeFormat } = timeFormatSlice.actions;
export default timeFormatSlice.reducer;
