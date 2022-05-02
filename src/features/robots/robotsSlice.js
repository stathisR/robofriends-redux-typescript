import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  robots: [],
  status: 'idle',
  error: null
};

export const fetchRobots = createAsyncThunk('robots/fetchRobots', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const robotsSlice = createSlice({
  name: 'robots',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchRobots.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(fetchRobots.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.robots = action.payload;
    })
    .addCase(fetchRobots.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
});

export default robotsSlice.reducer;

export const selectRobots = (state) => state.robots.robots;