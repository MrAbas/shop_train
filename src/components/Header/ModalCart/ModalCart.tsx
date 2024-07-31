import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { handleModalCart } from "../../../store/shopSlice";
import { useAppDispatch } from "../../../store/hooks";
import SmallClose from "../../../shared/assets/icons/SmallClose";
import emptyCart from "../../../shared/assets/icons/Header/emptyCart.svg";
import WasteBasket from "../../../shared/assets/icons/Header/WasteBasket";
import IconRemove from "../../../shared/assets/icons/IconRemove";
import IconAdd from "../../../shared/assets/icons/IconAdd";
import styles from "./ModalCart.module.scss";

const cx = classNames.bind(styles);

export default function ModalCart() {
  const dispatch = useAppDispatch();

  const [cartState, setCartState] = useState(false);
  const [localCart, setLocalCart] = useState([]);
  const [changeModalCart, setChangeModalCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (localStorage.cart) {
      setLocalCart(JSON.parse(localStorage.cart));
      setTotalPrice(JSON.parse(localStorage.cart).reduce((acc, item) => acc + item.price, 0));

      if (JSON.parse(localStorage.cart).length > 0) {
        setCartState(!cartState);
      }

      if (JSON.parse(localStorage.cart).length > 1) {
        setChangeModalCart(true);
      }
    }
  }, [localStorage.cart]);

  useEffect(() => {
    if (localCart.length < 1) {
      setCartState(false);
    } else {
      setCartState(true);
    }
  }, [localCart]);

  const removeProductLS = (name, size) => {
    const newCart = JSON.parse(localStorage.cart).filter((item) => item.name !== name || item.size !== size);
    localStorage.cart = JSON.stringify(newCart);
    setLocalCart(newCart);
  };

  const addProduct = ({ numberOfProduct }) => numberOfProduct + 1; // TODO закрывается не смог протестить, обсудить

  const removeProduct = ({ numberOfProduct }) => numberOfProduct - 1;

  const modalCart = cx({
    modalCart: true,
    changeModalCart,
  });

  return (
    <div className={modalCart} onMouseLeave={() => dispatch(handleModalCart())}>
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
                  <span className={styles.titleContainer}>{`${item.name}, ${item.size}`}</span>
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
                    <button
                      type="button"
                      aria-label="уменьшение количества продукта"
                      onClick={() => removeProduct(item.count)}
                    >
                      <IconRemove className={styles.colorIcon} />
                    </button>
                    <span className={styles.numberOfProducts}>{item.count}</span>
                    <button type="button" aria-label="увеличение количества продукта">
                      <IconAdd className={styles.colorIcon} onClick={() => addProduct(item.count)} />
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
        <span className={styles.price}>{`${totalPrice} ₽`}</span>
      </div>
      <Link className={styles.linkModalCart} to="/#">
        Оформление заказа
      </Link>
    </div>
  );
}
