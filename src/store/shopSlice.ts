import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  active: boolean;
}

const initialState: CounterState = {
  active: false,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    handleClick(state) {
      state.active = !state.active;
    },
    /* increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }, */
  },
});

export const { handleClick } = shopSlice.actions;

export default shopSlice.reducer;
