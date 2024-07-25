import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MuiDrawer } from "../MuiDrawer/index";
import IconSearch from "../../shared/assets/icons/Header/IconSearch";
import IconFavorite from "../../shared/assets/icons/Header/IconFavorite";
import IconCompare from "../../shared/assets/icons/Header/IconCompare";
import IconProductPack from "../../shared/assets/icons/Header/IconProductPack";
import IconProfile from "../../shared/assets/icons/Header/IconProfile";
import { ModalCart } from "./ModalCart";
import styles from "./Header.module.scss";

export default function Header() {
  const [modalCart, setModalCart] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} ${styles.container}`}>
          <MuiDrawer />
          <a className={styles.logo} href="/" aria-label="Logo" />
          <ul className={styles.category}>
            <li>
              <button className={styles.listBtn} aria-label="search" type="button">
                <IconSearch className={styles.btnIcon} />
              </button>
            </li>
            <li>
              <a className={styles.listLink} href="/" aria-label="favorites" type="button">
                <IconFavorite className={styles.listLink} />
              </a>
            </li>
            <li>
              <a className={styles.listLink} href="/" aria-label="compare" type="button">
                <IconCompare className={styles.listLink} />
              </a>
            </li>
            <li>
              <a
                className={styles.listLink}
                href="/"
                aria-label="basket"
                type="button"
                onMouseEnter={() => setModalCart(true)}
                // onMouseLeave={() => setModalBasket(false)}
              >
                <IconProductPack className={styles.listLink} />
              </a>
              {modalCart && <ModalCart setModalBasket={setModalCart} />}
            </li>
            <li>
              <button className={styles.listBtn} aria-label="profile" type="button">
                <IconProfile className={styles.btnIcon} />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
