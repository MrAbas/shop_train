import { RootState } from "./store";

export const switchSelector = (state: RootState) => state.shop.active;

export const themeSelector = (state: RootState) => state.shop.theme;

export const optionsSelector = (state: RootState) => state.shop.options;

export const categoriesSelector = (state: RootState) => state.shop.categories;
