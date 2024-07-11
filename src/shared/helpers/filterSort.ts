export const filterSort = (filterName, name, filteredItems) => {
  let result = [...filteredItems];

  if (filterName === "sort") {
    if (name === "Сначала дешевые") {
      result.sort((a, b) => a.price - b.price);
    } else if (name === "Сначала дорогие") {
      result.sort((a, b) => b.price - a.price);
    } else if (name === "Популярные") {
      result.sort((a, b) => b.popularity - a.popularity);
    } else if (name === "Новинки") {
      result = result.filter((el) => el.isNew);
    }
  }
  return result;
};
