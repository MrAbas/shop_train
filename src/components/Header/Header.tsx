import { Outlet } from "react-router-dom";
import { MuiDrawer } from "../MuiDrawer";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} ${styles.container}`}>
          <div className={styles.burgerMenu}>
            {/* <button className={styles.burger} type="button" aria-label="open menu" />
          <span className={styles.menu}>Меню</span> */}
            {/* TODO спросить про кнопку, хотел сделать через label, но не получилось */}

            <MuiDrawer />
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
      <Outlet />
    </>
  );
}
