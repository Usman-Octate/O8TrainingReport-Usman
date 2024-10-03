import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  combinedFormat: '',
};

const combinedDateFormatSlice = createSlice({
  name: 'combinedDateFormat',
  initialState,
  reducers: {
    updateCombinedFormat: (state, action) => {
      state.combinedFormat = action.payload;
    },
  },
});

export const { updateCombinedFormat } = combinedDateFormatSlice.actions;
export default combinedDateFormatSlice.reducer;
