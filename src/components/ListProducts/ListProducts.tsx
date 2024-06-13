// import { useState } from "react";
import indexData from "./indexData.json";
import { Product } from "./Product";
import styles from "./ListProducts.module.scss";

export default function ListProducts() {
  /* TODO добавить фильтр */
  // const [products, setProducts] = useState(false);

  return (
    <ul className={styles.productList}>
      {indexData.items.map((item, index) => (
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
