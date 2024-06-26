import { createSlice } from "@reduxjs/toolkit";

interface State {
  active: boolean;
  theme: string;
  authorized: boolean;
  filters: Product;
  optionValueShow: boolean;
  options: Options[];
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

export interface Options {
  titleSelect: string;
  option: { name: string; selected: boolean }[];
  value: string;
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
  optionValueShow: false,
  options: [
    {
      titleSelect: "Размер",
      option: [
        { name: "S", selected: false },
        { name: "L", selected: false },
        { name: "L", selected: false },
        { name: "XL", selected: false },
        { name: "XXL", selected: false },
      ],
      value: "size",
    },
    {
      titleSelect: "Цвет",
      option: [
        { name: "Пурпурный", selected: false },
        { name: "Жёлтый", selected: false },
        { name: "Оранжевый", selected: false },
        { name: "Чёрный", selected: false },
        { name: "Белый", selected: false },
      ],
      value: "color",
    },
    {
      titleSelect: "Сортировка",
      option: [
        { name: "Популярные", selected: false },
        { name: "Новинки", selected: false },
        { name: "Сначала дешевые", selected: false },
        { name: "Сначала дорогие", selected: false },
      ],
      value: "sort",
    },
  ],
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
    showOptionValue(state) {
      if (state.filters.color.length > 0 || state.filters.size.length > 0 || state.filters.sort.length > 0) {
        state.optionValueShow = false;
      }
    },
    addOptions(state, actions) {
      state.options = actions.payload;
    },
    toggleSelect(state, actions) {
      const { name, filterName } = actions.payload;

      state.options = state.options.map((item) => {
        if (item.titleSelect === filterName) {
          item.option = item.option.map((el) => {
            if (el.name === name) {
              el.selected = !el.selected;
            }
            return el;
          });
        }
        return item;
      });
    },
  },
});

export const { handleClickActive, toggleTheme, showOptionValue, addOptions, toggleSelect } = shopSlice.actions;

export default shopSlice.reducer;
