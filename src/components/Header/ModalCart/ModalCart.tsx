import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleModalCart } from "../../../store/shopSlice";
import { useAppDispatch } from "../../../store/hooks";
import SmallClose from "../../../shared/assets/icons/SmallClose";
import emptyCart from "../../../shared/assets/icons/Header/emptyCart.svg";
import WasteBasket from "../../../shared/assets/icons/Header/WasteBasket";
import IconRemove from "../../../shared/assets/icons/IconRemove";
import IconAdd from "../../../shared/assets/icons/IconAdd";
import styles from "./ModalCart.module.scss";

export default function ModalCart() {
  const dispatch = useAppDispatch();
  const [cartState, setCartState] = useState(false);
  const [localCart, setLocalCart] = useState([]);
  // const [severalProducts, setSeveralProducts] = useState(false);
  const [cartFromLocalStorage, setCartFromLocalStorage] = useState([]);

  useEffect(() => {
    if (localStorage.cart) {
      setCartState(!cartState); // TODO если открыт ModalCart, сразу не добавляет
      setLocalCart(JSON.parse(localStorage.cart));
      setCartFromLocalStorage(JSON.parse(localStorage.cart)); // паршу с LS, если в LS есть cart
    } // TODO не понял, как cartState вернуть в false, когда в LS пустой массив
    /* if (localCart.length === 0) {
      setCartState(false);
    } else {
      setCartState(true);
    }
    console.log(localCart); */

    /* if (localCart.length === 0) {
      setCartState(false);
    } */

    /* if (cartFromLocalStorage.length > 1) {
      setSeveralProducts(true);
    } else {
      setSeveralProducts(false);
    } */
  }, []);

  const removeProductLS = (name, size) => {
    const newCart = cartFromLocalStorage.filter((item) => item.name !== name || item.size !== size);

    localStorage.cart = JSON.stringify(newCart);
  };
  // TODO заметил, что иногда компонент исчезает, если есть в LS. И карточки странно отображаются, не во весь экран.
  return (
    <div className={styles.modalCart} onMouseLeave={() => dispatch(handleModalCart())}>
      <div className={styles.headerModal}>
        <h3 className={styles.title}>Корзина</h3>
        <button type="button" onClick={() => dispatch(handleModalCart())} aria-label="закрытие окна с корзиной">
          <SmallClose className={styles.smallClose} />
        </button>
      </div>
      <ul className={`${styles.containerCart} ${styles.scrollContainer}`}>
        {cartState ? (
          localCart.map((item) => (
            <li className={styles.containerFilledCart}>
              <div className={styles.imgCart}>
                <img src={item.image} alt="изображение продукта" />
              </div>
              <div className={styles.productInformation}>
                <div className={styles.containerTitleCart}>
                  <span className={styles.titleContainer}>{`${item.name} ${item.size}`}</span>
                  <button
                    className={styles.btnRemoveProduct}
                    type="button"
                    aria-label="удаление продукта с корзины"
                    onClick={() => removeProductLS(item.name, item.size)}
                  >
                    <WasteBasket className={styles.btnRemoveProduct} />
                  </button>
                </div>
                <div className={styles.containerPriceProduct}>
                  <div className={styles.btnChangePrice}>
                    <button type="button" aria-label="уменьшение количества продукта">
                      <IconRemove className={styles.colorIcon} />
                    </button>
                    <span className={styles.countProduct}>1</span>
                    <button type="button" aria-label="увеличение количества продукта">
                      <IconAdd className={styles.colorIcon} />
                    </button>
                  </div>
                  <span className={styles.price}>{item.price}</span>
                </div>
              </div>
            </li>
          ))
        ) : (
          <img src={emptyCart} alt="" />
        )}
      </ul>
      <div className={styles.orderPrice}>
        <span className={styles.titleContainer}>Сумма заказа:</span>
        <span className={styles.price}>0 ₽</span>
      </div>
      <Link className={styles.linkModalCart} to="/#">
        Оформление заказа
      </Link>
    </div>
  );
}
