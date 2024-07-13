import { createSlice } from "@reduxjs/toolkit";

interface Option {
  name: string;
  selected?: boolean;
  price?: number;
}

export interface Options {
  titleSelect: string;
  option: Option[];
  value: string;
}

interface OptionsCategories {
  titleSelect: string;
  cloth?: { name: string; value: string; option: Option[] };
  accessories?: { name: string; value: string; option: Option[] };
  souvenirs?: { name: string; value: string; option: Option[] };
  office?: { name: string; value: string; option: Option[] };
}

interface State {
  active: boolean;
  theme: string;
  authorized: boolean;
  categories: OptionsCategories;
  options: Options[];
}

const initialState: State = {
  active: false,
  theme: localStorage.theme,
  authorized: localStorage.authorized,
  categories: {
    titleSelect: "Категории",
    cloth: {
      name: "cloth",
      value: "Одежда",
      option: [
        { name: "Футболки", selected: false },
        { name: "Лонг-сливы", selected: false },
        { name: "Худи", selected: false },
        { name: "Верхняя одежда", selected: false },
      ],
    },
    accessories: {
      name: "accessories",
      value: "Аксессуары",
      option: [
        { name: "Сумки", selected: false },
        { name: "Головные уборы", selected: false },
        { name: "Зонты", selected: false },
      ],
    },
    souvenirs: {
      name: "souvenirs",
      value: "Сувениры",
      option: [
        { name: "Бизнес-сувениры", selected: false },
        { name: "Промо-сувениры", selected: false },
      ],
    },
    office: {
      name: "office",
      value: "Канцелярия",
      option: [
        { name: "ручки", selected: false },
        { name: "тетради", selected: false },
      ],
    },
  },

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
        { name: "M", selected: false },
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
            } else if (filterName === "Категории" && el.name !== name) {
              el.selected = false;
            }
            return el;
          });
        }
        return item;
      });
    },
    toggleSelectCategories(state, actions) {
      const { name, filterName } = actions.payload;
      state.categories[name].option = state.categories[name].option.map((el) => {
        if (el.name === filterName) {
          el.selected = !el.selected;
        } else {
          el.selected = false;
        }
        return el;
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

export const {
  handleClickActive,
  toggleTheme,
  addOptions,
  toggleSelect,
  toggleSelectCategories,
  optionDelete,
  addFilteredPrice,
} = shopSlice.actions;

export default shopSlice.reducer;
