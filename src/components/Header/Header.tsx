import { useEffect, useRef } from "react";
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
import useObserverModalCart from "../../shared/hooks/useObserverModalCart";
import styles from "./Header.module.scss";

export default function Header() {
  const dispatch = useAppDispatch();
  const modalCart = useAppSelector(modalCartSelector);
  const ref = useRef();

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
    <>
      <header ref={ref} className={styles.header}>
        <nav className={`${styles.nav} ${styles.container}`}>
          <MuiDrawer />
          <Link className={styles.logo} to="/" aria-label="Logo" />
          <ul className={styles.category}>
            <li>
              <button className={styles.listBtn} aria-label="search" type="button">
                <IconSearch className={styles.btnIcon} />
              </button>
            </li>
            <li>
              <Link className={styles.listLink} to="/" aria-label="favorites" type="button">
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
