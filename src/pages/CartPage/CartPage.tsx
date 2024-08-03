import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import test from "./bomber.png";
import IconRemove from "../../shared/assets/icons/IconRemove";
import IconAdd from "../../shared/assets/icons/IconAdd";
import WasteBasket from "../../shared/assets/icons/Header/WasteBasket";
import useObserverModalCart from "../../shared/hooks/useObserverModalCart";
import { useAppSelector } from "../../store/hooks";
import { modalCartSelector } from "../../store/selectors";
import styles from "./CartPage.module.scss";

export default function CartPage() {
  const modalCart = useAppSelector(modalCartSelector);
  const ref = useRef();
  const [checked, setChecked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [localCart, setLocalCart] = useState([]);

  const { addListener, removeListener } = useObserverModalCart(ref, modalCart); // хук для открытия и закрытия ModalCart

  useEffect(() => {
    if (localStorage.cart) {
      setLocalCart(JSON.parse(localStorage.cart));
      setTotalPrice(JSON.parse(localStorage.cart).reduce((acc, item) => acc + item.price, 0));
    }
  }, [localStorage.cart]);

  useEffect(() => {
    if (modalCart) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, [modalCart]);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const removeProductLS = (name, size) => {
    const newCart = JSON.parse(localStorage.cart).filter((item) => item.name !== name || item.size !== size);
    localStorage.cart = JSON.stringify(newCart);
    setLocalCart(newCart);
  };

  return (
    <main ref={ref}>
      <section className={styles.sectionCart}>
        <Breadcrumbs />
        <div className={styles.sectionContainer}>
          <div className={styles.containerTitle}>
            <h1 className={styles.title}>Корзина</h1>
            <span className={styles.numberOfProducts}>1 товар</span>
          </div>
          <div className={styles.containerCart}>
            <div className={styles.informationProduct}>
              <ul className={styles.productList}>
                {localCart.length > 0
                  ? localCart.map((item) => (
                      <li key={`${item.id + item.size}`} className={styles.productContainerCart}>
                        <img className={styles.imgProduct} src={test} alt="" />
                        <span className={styles.itemCart}>{item.name}</span>
                        <span className={styles.itemCart}>{`Размер: ${item.size}`}</span>
                        <div className={styles.priceContainer}>
                          <span className={styles.itemPrice}>{item.price}</span>
                          <span className={styles.innerText}>Цена за 1 шт.</span>
                        </div>
                        <div className={styles.containerCountProduct}>
                          <button
                            className={styles.btnNumberOfProducts}
                            type="button"
                            aria-label="Кнопка, уменьшающая количество товара в корзине"
                          >
                            <IconRemove />
                          </button>
                          <span className={styles.numberOfProducts}>1</span>
                          <button
                            className={styles.btnNumberOfProducts}
                            type="button"
                            aria-label="Кнопка, увеличивающая количество товара в корзине"
                          >
                            <IconAdd />
                          </button>
                        </div>
                        <div className={styles.containerBtnRemove}>
                          <span className={styles.itemPrice}>2 300 ₽ </span>
                          <button
                            className={styles.btnRemoveProduct}
                            type="button"
                            aria-label="Удаление продукта с корзины"
                            onClick={() => removeProductLS(item.name, item.size)}
                          >
                            <WasteBasket />
                          </button>
                        </div>
                      </li>
                    ))
                  : null}
              </ul>
              <div className={styles.containerPromoCode}>
                <input className={styles.inputPromoCode} placeholder="Промокод" type="text" />
                <span className={styles.promoCodeTitle}>Чтобы воспользоваться скидкой введите промокод</span>
              </div>
            </div>
            <div className={styles.userCheck}>
              <div className={styles.userCheckContainer}>
                <div className={styles.infoCheck}>
                  <span className={styles.amountTitle}>1 товар на сумму:</span>
                  <span className={styles.checkPrice}>2 300</span>
                </div>
                <div className={styles.infoCheck}>
                  <span className={styles.amountTitle}>Сумма со скидками:</span>
                  <span className={styles.checkPrice}>2 300</span>
                </div>
              </div>
              <div className={styles.totalContainer}>
                <span className={styles.totalTitle}>Итого:</span>
                <span className={styles.totalPrice}>{`${totalPrice} ₽`}</span>
              </div>
              <div className={styles.orderingContainer}>
                <Link
                  className={checked ? `${styles.bookingLink}` : `${styles.bookingLink} ${styles.disabledBookingLink}`}
                  to="/"
                >
                  Оформить заказ
                </Link>
                <label className={styles.labelOrdering} htmlFor="realCheckbox">
                  <input
                    onChange={toggleChecked}
                    className={styles.realCheckbox}
                    type="checkbox"
                    id="realCheckbox"
                    name="realCheckbox"
                    checked={checked}
                  />

                  <span className={styles.customCheckbox} />

                  <span className={styles.labelInnerText}>
                    Нажимая на кнопку «Оформить заказ», вы даете согласие на обработку
                    <Link className={styles.labelLink} to="/">
                      персональных данных
                    </Link>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <a className={styles.callToSupport} href="tel: +7 (499) 999-82-83" aria-label="позвонить службе поддержки" />
          {/* TODO Стоит ли выносить в отдельный компонент ? */}
        </div>
      </section>
    </main>
  );
}
