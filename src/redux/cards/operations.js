import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGet } from '../../service/axios';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (_, thunkAPI) => {
    try {
      const response = await axiosGet('/tata/card');
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
