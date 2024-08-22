import { useEffect } from "react";
import { Link } from "react-router-dom";
import indexData from "../../../ListProducts/indexData.json";
import WasteBasket from "../../../../shared/assets/icons/Header/WasteBasket";
import IconAdd from "../../../../shared/assets/icons/IconAdd";
import IconRemove from "../../../../shared/assets/icons/IconRemove";
import styles from "./FoundProduct.module.scss";

export default function FoundProduct({ fountItem }) {
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [cart, setCart] = useState([]);

  console.log(fountItem);

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
            <li key={`${item.id + item.size}`} className={styles.containerFilledCart}>
              <div className={styles.imgCart}>
                <img src={item.image} alt="изображение продукта" />
              </div>
              <div className={styles.productInformation}>
                <div className={styles.containerTitleCart}>
                  <Link to={`/shop/${item.category}/${item.itemId}`} className={styles.titleContainer}>
                    {`${item.title}, ${Object.keys(item.sizes).filter((key) => item.sizes[key])}`}
                    {/* TODO как их(если много размеров) выводить раздельно ?  */}
                  </Link>
                  <button
                    className={styles.btnRemoveProduct}
                    type="button"
                    aria-label="удаление продукта с корзины"
                    /* onClick={(e) => {
                      e.stopPropagation(); // TODO
                      removeProductLS(item.name, item.size);
                    }} */
                  >
                    <WasteBasket className={styles.btnRemoveProduct} />
                  </button>
                </div>
                <div className={styles.containerPriceProduct}>
                  <div className={styles.btnChangePrice}>
                    <button
                      type="button"
                      aria-label="уменьшение количества продукта"
                      // onClick={() => removeProduct(item.id, item.size, item.name)}
                      disabled={item.count === 1}
                      className={item.count === 1 ? styles.btnDisabled : ""}
                    >
                      <IconRemove className={styles.colorIcon} />
                    </button>
                    <span className={styles.numberOfProducts}>{item.count}</span>
                    <button
                      type="button"
                      aria-label="увеличение количества продукта"
                      // onClick={() => addProduct(item.id, item.size, item.name)}
                    >
                      <IconAdd className={styles.colorIcon} />
                    </button>
                  </div>
                  <span className={styles.price}>{item.price}</span>
                </div>
              </div>
            </li>
          ))
        : null}
    </ul>
  );
}
