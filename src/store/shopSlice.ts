import { createSlice } from "@reduxjs/toolkit";

interface State {
  active: boolean;
  theme: string;
  authorized: boolean;
}

const initialState: State = {
  active: false,
  theme: localStorage.theme,
  authorized: localStorage.authorized,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    handleClickActive(state) {
      state.active = !state.active;
    },
    toggleTheme(state) {
      const newTheme = localStorage.theme === "light" ? "dark" : "light";
      localStorage.theme = newTheme;
      state.theme = newTheme;
    },
  },
});

export const { handleClickActive, toggleTheme } = shopSlice.actions;

export default shopSlice.reducer;
