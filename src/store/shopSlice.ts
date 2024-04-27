import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface state {
  active: boolean;
  theme: string;
  authorized: boolean;
}

const initialState: state = {
  active: false,
  theme: localStorage.theme,
  authorized: localStorage.authorized,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    handleClick(state) {
      state.active = !state.active;
    },
    toggleTheme(state) {
      const newTheme = localStorage.theme === "light" ? "dark" : "light";
      localStorage.theme = newTheme;
      state.theme = newTheme;
    },
  },
});

export const { handleClick, toggleTheme } = shopSlice.actions;

export default shopSlice.reducer;
