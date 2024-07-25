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
  const [urlImg, setUrlImg] = useState(null);
  const [cartState, setCartState] = useState(false);

  useEffect(() => {
    if (localStorage.cart) {
      setCartState(!cartState); // TODO если открыт ModalCart, сразу не добавляет
      const localCart = JSON.parse(localStorage.cart);
      localCart.forEach((item) => {
        setUrlImg(item.image);
      });
    }
  }, [localStorage.cart]);
  return (
    <div className={styles.modalCart} onMouseLeave={() => dispatch(handleModalCart())}>
      <div className={styles.headerModal}>
        <h3 className={styles.title}>Корзина</h3>
        <button type="button" onClick={() => dispatch(handleModalCart())} aria-label="закрытие окна с корзиной">
          <SmallClose className={styles.smallClose} />
        </button>
      </div>
      <div className={styles.containerCart}>
        {cartState ? (
          <div className={styles.containerFilledCart}>
            <div className={styles.imgCart}>
              <img src={urlImg} alt="" />
            </div>
            <div className={styles.productInformation}>
              <div className={styles.containerTitleCart}>
                <span className={styles.titleContainer}>Название</span>
                <button className={styles.btnRemoveProduct} type="button" aria-label="удаление продукта с корзины">
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
                <span className={styles.price}>Цена</span>
              </div>
            </div>
          </div>
        ) : (
          <img src={emptyCart} alt="" />
        )}
      </div>
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
