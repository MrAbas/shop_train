import React from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import styles from "./MuiDrawer.module.scss";

export default function MuiDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  /* TODO не понял как стилизовать + ошибочка */
  const DrawerList = (
    <Box sx={{ width: 100000 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Каталог", "Покупателям", "Контакты"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)} className={styles.burger} type="button" aria-label="open menu">
        Меню
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
