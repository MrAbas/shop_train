import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import indexData from "./indexData.json";
import { Product } from "./Product";
import { useAppSelector } from "../../store/hooks";
import { categoriesSelector, optionsSelector } from "../../store/selectors";
import { filterProducts } from "../../shared/utils/filterProducts";
import styles from "./ListProducts.module.scss";

export default function ListProducts() {
  const [showItems, setShowItems] = useState([]);
  const options = useAppSelector(optionsSelector);
  const { id } = useParams();
  const categories = useAppSelector(categoriesSelector);

  useEffect(() => {
    // Функция фильтрации данных
    if (indexData.items.length) {
      const newOption = [];

      options.map((item) => {
        item.option.forEach((el) => {
          if (el.selected === true) {
            newOption.push({ name: el.name, price: el.price, filterName: item.value });
          }
        });

        return item;
      });

      const filteredItems = filterProducts(newOption, indexData.items, id, categories);
      setShowItems(filteredItems);
    }
  }, [options, categories]);

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
