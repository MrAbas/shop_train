import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface state {
  active: boolean;
  theme: string;
}

const initialState: state = {
  active: false,
  theme: "light-theme",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    handleClick(state) {
      state.active = !state.active;
    },
    toggleTheme(state) {
      state.theme = state.theme === "light-theme" ? "dark-theme" : "light-theme";
    },
  },
});

export const { handleClick, toggleTheme } = shopSlice.actions;

export default shopSlice.reducer;
