import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDefaultLocalization } from '../../Api/Apis'; // Adjust the import path

export const fetchDefaultLocalization = createAsyncThunk(
  'localization/fetchDefault',
  async () => {
    const result = await getDefaultLocalization();
    if (result.status) {
      return result.data; // Return the API response data
    } else {
      throw new Error(result.data); // Handle error case
    }
  }
);