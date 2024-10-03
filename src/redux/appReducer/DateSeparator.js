
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  separator: ' ', 
};

const dateSeparatorSlice = createSlice({
  name: 'dateSeparator',
  initialState,
  reducers: {
    setDateSeparator: (state, action) => {
      state.separator = action.payload;
    },
  },
});

export const { setDateSeparator } = dateSeparatorSlice.actions;
export default dateSeparatorSlice.reducer;
