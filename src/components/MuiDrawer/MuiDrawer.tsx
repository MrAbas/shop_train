import React from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import BurgerMenuSvg from "../../shared/assets/icons/Header/IconBurgerMenu";
import AccordionMenu from "../AccordionMenu/AccordionMenu";
import styles from "./MuiDrawer.module.scss";

export default function MuiDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContent}>
        <nav className={styles.nav}>
          <a className={styles.logo} href="/" aria-label="logo" />
          <div className={styles.containerBtns}>
            <div className={styles.containerCloseMenu}>
              <button
                onClick={toggleDrawer(false)}
                className={styles.closeMenu}
                type="button"
                aria-label="close menu"
              />
            </div>
            <div className={styles.btnsMenu}>
              <button className={styles.langBtn} type="button" aria-label="перевести на русский">
                Ru
              </button>
              <button className={styles.langBtn} type="button" aria-label="translate into English">
                En
              </button>
            </div>
          </div>
        </nav>
        <Box sx={{ width: "100vw", height: "100vw" }} role="presentation">
          <List sx={{ padding: 0, margin: "0 auto" }} className={styles.drawerList}>
            {["Каталог", "Покупателям", "Контакты"].map((text) => (
              <ListItem key={text} disablePadding className={styles.listMargin}>
                <ListItemButton>
                  <ListItemText onClick={toggleDrawer(false)} sx={{ margin: 0 }} primary={text} />
                </ListItemButton>
              </ListItem>
            ))}

            <AccordionMenu />
          </List>
          <Divider />
        </Box>
      </div>
    </div>
  );

  return (
    <div className={styles.burgerMenu}>
      <button onClick={toggleDrawer(true)} className={styles.burgerBtn} type="button" aria-label="open menu">
        <BurgerMenuSvg className={styles.burgerIcon} />
        Меню
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
