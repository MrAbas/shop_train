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
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.burgerMenu}>
          <button className={styles.burger} type="button" aria-label="open menu" />
          <span className={styles.menu}>Меню</span>
        </div>

        <a className={styles.logo} href="/" aria-label="Logo">
          {/* <img src="../../shared/icons/logo.svg" alt="Logo" /> */}
        </a>

        <div className={styles.category}>
          <a className={styles.search} href="/" aria-label="search" />
          <a className={styles.favorites} href="/" aria-label="favorites" />
          <a className={styles.compare} href="/" aria-label="сравнение товаров" />
          <a className={styles.basket} href="/" aria-label="basket" />
          <a className={styles.profile} href="/" aria-label="profile" />
        </div>
      </nav>
    </div>
  );
}
