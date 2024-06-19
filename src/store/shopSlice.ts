import { createSlice } from "@reduxjs/toolkit";

interface State {
  active: boolean;
  theme: string;
  authorized: boolean;
  filters: Product;
  optionValueShow: boolean;
  options: object;
}

interface Product {
  size: ProductFilter[];
  color: ProductFilter[];
  sort: ProductFilter[];
}

interface ProductFilter {
  name: string;
  selected: boolean;
}

/* interface Options {
  name: string;
  selected: false;
} */

const initialState: State = {
  active: false,
  theme: localStorage.theme,
  authorized: localStorage.authorized,
  filters: {
    size: [],
    color: [],
    sort: [],
  },
  optionValueShow: false,
  options: {},
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
      const { data, name } = actions.payload;
      const newFilter = data.filter((item) => item.selected);
      state.filters[name] = newFilter;
    },
    showOptionValue(state) {
      if (state.filters.color.length > 0 || state.filters.size.length > 0 || state.filters.sort.length > 0) {
        state.optionValueShow = false;
      }
    },
    addOptions(state, actions) {
      console.log(actions.payload);
    },
  },
});

export const { handleClickActive, toggleTheme, addFilter, showOptionValue, addOptions } = shopSlice.actions;

export default shopSlice.reducer;
