import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MuiDrawer } from "../MuiDrawer/index";
import SearchSvg from "../../shared/assets/icons/Header/SearchSvg";
import FavoritesSvg from "../../shared/assets/icons/Header/FavoritesSvg";
import CompareSvg from "../../shared/assets/icons/Header/CompareSvg";
import BasketSvg from "../../shared/assets/icons/Header/BasketSvg";
import ProfileSvg from "../../shared/assets/icons/Header/ProfileSvg";
import { ModalBasket } from "./ModalBasket";
import styles from "./Header.module.scss";

export default function Header() {
  const [modalBasket, setModalBasket] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} ${styles.container}`}>
          <MuiDrawer />
          <a className={styles.logo} href="/" aria-label="Logo" />
          <ul className={styles.category}>
            <li>
              <button className={styles.listBtn} aria-label="search" type="button">
                <SearchSvg className={styles.btnIcon} />
              </button>
            </li>
            <li>
              <a className={styles.listLink} href="/" aria-label="favorites" type="button">
                <FavoritesSvg className={styles.listLink} />
              </a>
            </li>
            <li>
              <a className={styles.listLink} href="/" aria-label="compare" type="button">
                <CompareSvg className={styles.listLink} />
              </a>
            </li>
            <li>
              <a
                className={styles.listLink}
                href="/"
                aria-label="basket"
                type="button"
                onMouseEnter={() => setModalBasket(true)}
                // onMouseLeave={() => setModalBasket(false)}
              >
                <BasketSvg className={styles.listLink} />
              </a>
              {modalBasket && <ModalBasket setModalBasket={setModalBasket} />}
            </li>
            <li>
              <button className={styles.listBtn} aria-label="profile" type="button">
                <ProfileSvg className={styles.btnIcon} />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
