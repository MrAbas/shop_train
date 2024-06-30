import { useEffect, useState } from "react";
import indexData from "./indexData.json";
import { Product } from "./Product";
import { useAppSelector } from "../../store/hooks";
import { optionsSelector } from "../../store/selectors";
import { translateColor } from "../../shared/utils/translateColor";
import styles from "./ListProducts.module.scss";

export default function ListProducts() {
  const [showItems, setShowItems] = useState([]);
  const options = useAppSelector(optionsSelector);
  // const [currentOptionsEl, setCurrentOptionsEl] = useState("");

  useEffect(() => {
    // Функция фильтрации данных
    // Применяем выбранные фильтры по размеру и цвету

    if (indexData.items.length) {
      const newOption = [];
      options.map((item) => {
        item.option.forEach((el) => {
          if (el.selected === true) {
            newOption.push({ name: el.name, filterName: item.value });
          }
        });

        return item;
      });

      let newItems = indexData.items;

      newOption.forEach((filter) => {
        newItems = newItems.filter((item) => {
          if (filter.filterName === "size") {
            return item.sizes[filter.name.toLowerCase()];
          }
          if (filter.filterName === "color") {
            return item.characteristics.color.toLowerCase() === translateColor(filter.name).toLowerCase();
          }

          if (filter.filterName === "sort") {
            if (filter.name === "Сначала дешевые") {
              newItems.sort((a, b) => a.price - b.price);
            }
            if (filter.name === "Сначала дорогие") {
              newItems.sort((a, b) => b.price - a.price);
            }
            /* if (filter.name === "Популярные") {
              // console.log(newItems.sort((el) => el.popularity));
              console.log(newItems.map((el) => el.popularity));
            }
            if (filter.name === "Новинки") {
              console.log(1);
            } */
          }
          return true;
        });
      });
      setShowItems(newItems);
    }
  }, [options]);

  /* TODO добавить фильтр */
  // const [products, setProducts] = useState(false);
  /* console.log(indexData.items);
  console.log(product); */

  return (
    <ul className={styles.productList}>
      {showItems.map((item, index) => (
        <Product
          key={`${item.title + index}`}
          id={item.id}
          image={item.image}
          title={item.title}
          available={item.available}
          article={item.article}
          price={item.price}
        />
      ))}
    </ul>
  );
}
