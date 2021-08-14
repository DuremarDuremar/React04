import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import {
  DefaultState,
  DefaultAction,
  DefaultActionTypes,
} from "../types/default";

const initialState: DefaultState = {
  loading: false,
  items: [],
  error: null,
};

export const axiosFrame = createAsyncThunk("slider/axiosFrame", async () => {
  const res = axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/848/frames`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
      },
    }
  );
  return await res.then((res) => res.data.frames);
});

const sliderSlice: any = createSlice({
  name: "slider",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(axiosFrame.pending, (state) => {
        state.loading = true;
      })
      .addCase(axiosFrame.fulfilled, (state, { payload }: any) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(axiosFrame.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {} = sliderSlice.actions;

export default sliderSlice.reducer;
