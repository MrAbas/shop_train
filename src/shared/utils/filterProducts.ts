import { translateColor } from "./translateColor";

export const filterProducts = (newOption, items) => {
  let filteredItems = [...items];

  // TODO напомнить про Reduce
  newOption.forEach((filter) => {
    if (filter.filterName === "size") {
      filteredItems = filteredItems.filter((item) => item.sizes[filter.name.toLowerCase()]);
    } else if (filter.filterName === "color") {
      filteredItems = filteredItems.filter(
        (item) => item.characteristics.color.toLowerCase() === translateColor(filter.name).toLowerCase(),
      );
    }
  });

  newOption.forEach((filter) => {
    if (filter.filterName === "sort") {
      if (filter.name === "Сначала дешевые") {
        filteredItems.sort((a, b) => a.price - b.price);
      } else if (filter.name === "Сначала дорогие") {
        filteredItems.sort((a, b) => b.price - a.price);
      } else if (filter.name === "Популярные") {
        filteredItems.sort((a, b) => b.popularity - a.popularity);
      } else if (filter.name === "Новинки") {
        filteredItems = filteredItems.filter((el) => el.isNew);
      }
    }
  });

  return filteredItems;
};
