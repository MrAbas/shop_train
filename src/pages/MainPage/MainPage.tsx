import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.scss";

export default function MainPage() {
  const userIsInactive = localStorage.getItem("authorized");
  const navigate = useNavigate();

  useEffect(() => {
    if (userIsInactive === "false") {
      navigate("/loginPage");
    }
  }, [userIsInactive]);
  return (
    <div className={styles.wrapper}>
      <header className={`${styles.header} ${styles.container}`}>
        <nav className={styles.nav}>
          <div className={styles.burgerMenu}>
            {/* <button className={styles.burger} type="button" aria-label="open menu" />
          <span className={styles.menu}>Меню</span> */}
            {/* TODO спросить про кнопку, хотел сделать через label, но не получилось */}
            <button className={styles.burger} type="button" aria-label="open menu">
              Меню
            </button>
          </div>

          <a className={styles.logo} href="/" aria-label="Logo" />
          <ul className={styles.category}>
            <li>
              <a className={styles.search} href="/" aria-label="search" type="button" />
            </li>
            <li>
              <a className={styles.favorites} href="/" aria-label="favorites" type="button" />
            </li>
            <li>
              <a className={styles.compare} href="/" aria-label="сравнение товаров" type="button" />
            </li>
            <li>
              <a className={styles.basket} href="/" aria-label="basket" type="button" />
            </li>
            <li>
              <a className={styles.profile} href="/" aria-label="profile" type="button" />
            </li>
            {/* Не отображаются иконки + лишние border и margin */}
          </ul>
        </nav>
      </header>

      <main>
        <section className={styles.banner}>
          <div className={styles.container}>
            <span className={styles.advertising}>Реклама</span>
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
          </div>
          <a href="/" className={styles.link}>
            В каталог
          </a>
        </section>
      </main>
    </div>
  );
}
