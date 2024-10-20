import { useEffect } from "react";
import { Link } from "react-router-dom";
import indexData from "../../../ListProducts/indexData.json";
import WasteBasket from "../../../../shared/assets/icons/Header/WasteBasket";
import IconAdd from "../../../../shared/assets/icons/IconAdd";
import IconRemove from "../../../../shared/assets/icons/IconRemove";
import styles from "./FoundProduct.module.scss";

export default function FoundProduct({ fountItem }) {
  useEffect(() => {
    if (localStorage.cart) {
      console.log(indexData);
      // setCart(indexData.items);

      // setLocalCart(JSON.parse(localStorage.cart));
      // setTotalPrice(JSON.parse(localStorage.cart).reduce((acc, item) => acc + item.price, 0));
    }
  }, [indexData]);

  return (
    <ul className={styles.scrollContainer}>
      {fountItem.length > 0
        ? fountItem.map((item) => (
            <li key={item.id} className={styles.containerFilledCart}>
              <div>
                <img src={item.image} alt="Изображение продукта" />
              </div>
              <div className={styles.filterContent}>
                <div>
                  <span>{item.title}</span>
                </div>

                <div>
                  <span>{item.category}</span>
                </div>

                <div>
                  <span>{item.type}</span>
                </div>
              </div>
            </li>
          ))
        : null}
    </ul>
  );
}
