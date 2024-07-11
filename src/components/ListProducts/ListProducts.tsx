import { useEffect, useState } from "react";
import indexData from "./indexData.json";
import { Product } from "./Product";
import { useAppSelector } from "../../store/hooks";
import { optionsSelector } from "../../store/selectors";
import { filterProducts } from "../../shared/utils/filterProducts";
import styles from "./ListProducts.module.scss";

export default function ListProducts() {
  const [showItems, setShowItems] = useState([]);
  const options = useAppSelector(optionsSelector);

  useEffect(() => {
    // Функция фильтрации данных
    // Применяем выбранные фильтры по размеру и цвету

    if (indexData.items.length) {
      const newOption = [];
      options.map((item) => {
        item.option.forEach((el) => {
          if (el.selected === true) {
            newOption.push({ name: el.name, price: el.price, filterName: item.value });
            // console.log(newOption);
            // TODO сейчас при клике на другие опшины добавляется price, нужно добавить проверку
          }
        });

        return item;
      });
      const filteredItems = filterProducts(newOption, indexData.items);
      setShowItems(filteredItems);
    }
  }, [options]);

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
