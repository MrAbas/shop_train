import { filterSort } from "../helpers/filterSort";
import { translate } from "./translate";

export const filterProducts = (newOption, items, id, categories) => {
  let filteredItems = [...items];
  if (id) {
    filteredItems = filteredItems.filter((el) => el.category === id);
  }

  categories[id]?.option.forEach((item) => {
    if (item.selected) {
      filteredItems = filteredItems.filter((el) => el.type === translate(item.name));
    }
  });

  newOption.forEach((filter) => {
    if (filter.filterName === "size") {
      filteredItems = filteredItems.filter((item) => item.sizes[filter.name.toLowerCase()]);
    } else if (filter.filterName === "color") {
      filteredItems = filteredItems.filter(
        (item) => item.characteristics.color.toLowerCase() === translate(filter.name).toLowerCase(),
      );
    }
  });

  newOption.forEach((filter) => {
    filteredItems = filterSort(filter.filterName, filter.name, filteredItems);
    if (filter.filterName === "price") {
      if (filter.name === "min") {
        filteredItems = filteredItems.filter((el) => el.price >= filter.price);
      } else if (filter.name === "max") {
        filteredItems = filteredItems.filter((el) => el.price <= filter.price);
      }
    }
  });

  return filteredItems;
};
