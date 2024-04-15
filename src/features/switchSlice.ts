import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  switch: boolean;
}

const initialState: CounterState = {
  switch: false,
};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {},
});

// export const {} = switchSlice.actions;

export default switchSlice.reducer;
