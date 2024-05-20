import React from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import BurgerMenuSvg from "../../shared/assets/icons/Header/BurgerMenuSvg";
import styles from "./MuiDrawer.module.scss";

export default function MuiDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // TODO Добавить кнопку закрытия меню

  const DrawerList = (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContent}>
        <nav className={styles.nav}>
          <a className={styles.logo} href="/" aria-label="logo" />
          <div className={styles.containerBtns}>
            <button type="button" aria-label="close menu" />
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
        <Box sx={{ width: "100vw", height: "100vw" }} role="presentation" onClick={toggleDrawer(false)}>
          <List sx={{ padding: 0 }} className={styles.drawerList}>
            {["Каталог", "Покупателям", "Контакты"].map((text, index /* TODO Как сделать ссылки на кнопки */) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={{
                    padding: 0,
                    marginBottom: index === 0 ? "24px" : index === 1 ? "24px" : 0,
                    marginTop: index === 1 ? "24px" : index === 2 ? "24px" : 0,
                  }} // TODO поменять через not first child
                >
                  <ListItemText sx={{ margin: 0 }} primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
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
