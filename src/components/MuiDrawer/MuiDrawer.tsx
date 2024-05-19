import React from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import BurgerMenuSvg from "../../shared/assets/icons/BurgerMenuSvg";
import styles from "./MuiDrawer.module.scss";

export default function MuiDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContent}>
        <nav>
          <a className={styles.logo} href="/" aria-label="logo" />
        </nav>
        <Box sx={{ width: 10000, height: 10000 }} role="presentation" onClick={toggleDrawer(false)}>
          <List sx={{ padding: 0 }} className={styles.drawerList}>
            {["Каталог", "Покупателям", "Контакты"].map((text, index /* TODO Как сделать ссылки на кнопки */) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={{
                    padding: 0,
                    marginBottom: index === 0 ? "24px" : index === 1 ? "24px" : 0,
                    marginTop: index === 1 ? "24px" : index === 2 ? "24px" : 0,
                  }}
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
