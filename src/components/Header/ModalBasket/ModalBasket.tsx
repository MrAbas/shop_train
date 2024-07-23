import { Link } from "react-router-dom";
import SmallClose from "../../../shared/assets/icons/SmallClose";
import emptyCard from "../../../shared/assets/icons/Header/emptyCart.svg";
import styles from "./ModalBasket.module.scss";

export default function ModalBasket({ setModalBasket }) {
  return (
    <div className={styles.modalBasket} onMouseLeave={() => setModalBasket(false)}>
      <div className={styles.headerModal}>
        <h3 className={styles.title}>Корзина</h3>
        <button type="button" onClick={() => setModalBasket(false)} aria-label="закрытие окна с корзиной">
          <SmallClose className={styles.smallClose} />
        </button>
      </div>
      <div className={styles.containerEmptyCart}>
        <img src={emptyCard} alt="" />
      </div>
      <div className={styles.orderPrice}>
        <span>Сумма заказа:</span>
        <span>0 ₽</span>
      </div>
      <Link className={styles.linkModalBasket} to="/#">
        Оформление заказа
      </Link>
    </div>
  );
}
