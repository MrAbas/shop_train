import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MuiDrawer } from "../MuiDrawer/index";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { modalCartSelector } from "../../store/selectors";
import IconSearch from "../../shared/assets/icons/Header/IconSearch";
import IconFavorite from "../../shared/assets/icons/Header/IconFavorite";
import IconCompare from "../../shared/assets/icons/Header/IconCompare";
import IconProductPack from "../../shared/assets/icons/Header/IconProductPack";
import IconProfile from "../../shared/assets/icons/Header/IconProfile";
import { ModalCart } from "./ModalCart";
import { trueModalCart } from "../../store/shopSlice";
import ModalSearch from "./ModalSearch/ModalSearch";
import styles from "./Header.module.scss";

// TODO debounce поисковик

export default function Header() {
  const dispatch = useAppDispatch();
  const modalCart = useAppSelector(modalCartSelector);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} ${styles.container}`}>
          <MuiDrawer />
          <Link className={styles.logo} to="/" aria-label="Logo" />
          <ul className={styles.category}>
            <li>
              <button onClick={handleOpen} className={styles.listBtn} aria-label="search" type="button">
                <IconSearch className={styles.btnIcon} />
              </button>
              <ModalSearch open={open} handleClose={handleClose} />
            </li>
            <li>
              <Link className={styles.listLink} to="/favorites" aria-label="favorites" type="button">
                <IconFavorite className={styles.listLink} />
              </Link>
            </li>
            <li>
              <Link className={styles.listLink} to="/" aria-label="compare" type="button">
                <IconCompare className={styles.listLink} />
              </Link>
            </li>
            <li>
              <Link
                className={styles.listLink}
                to="/cart"
                aria-label="cart"
                type="button"
                onMouseEnter={() => {
                  dispatch(trueModalCart());
                }}
              >
                <IconProductPack className={styles.listLink} />
              </Link>
              {modalCart && <ModalCart />}
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
