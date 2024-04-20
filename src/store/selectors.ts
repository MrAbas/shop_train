import { RootState } from "./store";

export const switchSelector = (state: RootState) => state.shop.active;

export const themeSelector = (state: RootState) => state.shop.theme;
