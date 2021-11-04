import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoresActivableSalesResponse } from "./types";

type StoresState = {
  total: number | null;
  hasClube: number | null;
  hasActivableSales: number | null;
};

const initialState: StoresState = {
  total: null,
  hasClube: null,
  hasActivableSales: null,
};

export const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    storesActivableSalesReceived: (
      state,
      action: PayloadAction<StoresActivableSalesResponse>,
    ) => {
      state.total = action.payload.total;
      state.hasClube = action.payload.hasClube;
      state.hasActivableSales = action.payload.hasActivableSales;
    },
  },
});

export const storesReducer = storesSlice.reducer;

export const { storesActivableSalesReceived } = storesSlice.actions;
