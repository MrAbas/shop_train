import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { modalCartSelector } from "../../store/selectors";
import useObserverModalCart from "../../shared/hooks/useObserverModalCart";
import styles from "./MainPage.module.scss";

export default function MainPage() {
  const userIsInactive = localStorage.getItem("authorized");
  const navigate = useNavigate();
  const modalCart = useAppSelector(modalCartSelector);
  const ref = useRef(null);

  useEffect(() => {
    if (userIsInactive === "false") {
      navigate("/loginPage");
    }
  }, [userIsInactive]);

  const { addListener, removeListener } = useObserverModalCart(ref, modalCart); // хук для открытия и закрытия ModalCart

  useEffect(() => {
    if (modalCart) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, [modalCart]);

  return (
    <main ref={ref}>
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
  );
}
