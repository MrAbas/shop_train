import { createSlice } from "@reduxjs/toolkit";

interface State {
  active: boolean;
  theme: string;
  authorized: boolean;
  options: Options[];
}

export interface Options {
  titleSelect: string;
  option: { name: string; selected?: boolean; price?: number }[];
  value: string;
}

const initialState: State = {
  active: false,
  theme: localStorage.theme,
  authorized: localStorage.authorized,
  options: [
    {
      titleSelect: "Цена",
      option: [
        { name: "min", price: 0 },
        { name: "max", price: 0 },
      ],
      value: "price",
    },
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
            } else if (filterName === "Сортировка" && el.name !== name) {
              el.selected = false;
            }
            return el;
          });
        }
        return item;
      });
    },
    addFilteredPrice(state, actions) {
      const { filterName, min, max } = actions.payload;
      state.options = state.options.map((item) => {
        if (item.titleSelect === filterName) {
          item.option = item.option.map((el) => {
            if (el.name === "min") {
              el.price = min;
              el.selected = true;
            }
            if (el.name === "max") {
              el.price = max;
              el.selected = true;
            }
            return el;
          });
        }
        return item;
      });
    },

    optionDelete(state, actions) {
      // TODO объединить с toggleSelect

      const nameOptionValue = actions.payload;

      state.options.map((item) => {
        item.option.forEach((el) => {
          if (el.selected === true && el.name === nameOptionValue) {
            el.selected = false;
          }
        });

        return item;
      });
    },
  },
});

export const { handleClickActive, toggleTheme, addOptions, toggleSelect, optionDelete, addFilteredPrice } =
  shopSlice.actions;

export default shopSlice.reducer;
