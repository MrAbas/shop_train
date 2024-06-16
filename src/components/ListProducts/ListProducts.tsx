import { useEffect, useState } from "react";
import indexData from "./indexData.json";
import { Product } from "./Product";
import { useAppSelector } from "../../store/hooks";
import { productSelector } from "../../store/selectors";
import styles from "./ListProducts.module.scss";

export default function ListProducts() {
  const [showItems, setShowItems] = useState(indexData.items);
  const product = useAppSelector(productSelector);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return, @typescript-eslint/no-unused-vars
    /*  indexData.items.map((item) => {
      if (item.sizes.l === product.size) {
        setShowItems(indexData.items.filter((item) => item.sizes.s === product[0].size));
      }
    }); */
  }, [product]);

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
