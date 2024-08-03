import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
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
import SmallClose from "../../shared/assets/icons/SmallClose";
import styles from "./Header.module.scss";

const style = {
  position: "fixed",
  top: "340px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  height: 570,
  bgcolor: "#333a47",
  boxShadow: 24,
  p: "24px",
};

export default function Header() {
  const dispatch = useAppDispatch();
  const modalCart = useAppSelector(modalCartSelector);
  const ref = useRef();
  const [open, setOpen] = useState(false);

  const { addListener, removeListener } = useObserverModalCart(ref, modalCart); // хук для открытия и закрытия ModalCart

  useEffect(() => {
    if (modalCart) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, [modalCart]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <header ref={ref} className={styles.header}>
        <nav className={`${styles.nav} ${styles.container}`}>
          <MuiDrawer />
          <Link className={styles.logo} to="/" aria-label="Logo" />
          <ul className={styles.category}>
            <li>
              <button onClick={handleOpen} className={styles.listBtn} aria-label="search" type="button">
                <IconSearch className={styles.btnIcon} />
              </button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <div className={styles.modalHeader}>
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h3"
                        sx={{ margin: "0 0 24px", textAlign: "center", color: "#e8e9ea" }}
                      >
                        Поиск товаров
                      </Typography>
                      <button className={styles.modalClose} type="button" aria-label="закрытие окна с корзиной">
                        <SmallClose className={styles.smallClose} />
                      </button>
                    </div>
                    <input
                      className={styles.searchModalInput}
                      type="text"
                      placeholder="Название товара, категория, тип..."
                    />
                  </Box>
                </Fade>
              </Modal>
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
