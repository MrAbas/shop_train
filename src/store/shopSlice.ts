import { createSlice } from "@reduxjs/toolkit";

interface State {
  active: boolean;
  theme: string;
  authorized: boolean;
  filters: product;
}

interface product {
  size: string[];
  color: string[];
  sort: string[];
}

const initialState: State = {
  active: false,
  theme: localStorage.theme,
  authorized: localStorage.authorized,

  filters: {
    size: [],
    color: [],
    sort: [],
  },
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
    addFilter(state, actions) {
      console.log(actions.payload);
    },
    // removeFilter(state, actions) {},
  },
});

export const { handleClickActive, toggleTheme, addFilter } = shopSlice.actions;

export default shopSlice.reducer;
