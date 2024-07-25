import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { falseModalCart } from "../../store/shopSlice";
import styles from "./MainPage.module.scss";

export default function MainPage() {
  const userIsInactive = localStorage.getItem("authorized");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userIsInactive === "false") {
      navigate("/loginPage");
    }
  }, [userIsInactive]);

  if (localStorage.cart) {
    // TODO закрытие на клик ModalCart, почему работает на всех страницах ? После обновления уже не работает
    window.onclick = () => {
      dispatch(falseModalCart());
    };
  }
  return (
    <div className={styles.wrapper}>
      <main>
        <section className={styles.banner}>
          <span className={styles.advertising}>Реклама</span>
          <div className={styles.bannerContainer}>
            <div className={styles.subtitle}>
              <span className={styles.subOne}>Зима, мода</span>
              <br />
              <span className={styles.subTwo}>и технологии</span>
              <div className={styles.decorate} />
              <div />
            </div>
            <h2 className={styles.bannerTitle}>
              <span className={styles.bannerSubtitle}>[ в новой коллекции ]</span>
              <span className={styles.bannerTitleText}>Ростелеком</span>
            </h2>
            <Link to="/shop" className={styles.link}>
              В каталог
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
