import { ChangeEvent, useState } from "react";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import SmallClose from "../../../shared/assets/icons/SmallClose";
import indexData from "../../ListProducts/indexData.json";
import { FoundProduct } from "./FoundProduct";
import styles from "./ModalSearch.module.scss";

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

export default function ModalSearch({ open, handleClose }) {
  const [inputValue, setInputValue] = useState("");
  const [fountItem, setFountItem] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    if (value === "") {
      setFountItem([]);
    } else {
      setFountItem(indexData.items.filter((item) => item.title.includes(e.target.value)));
    }
  };

  return (
    <div>
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
              <button
                className={styles.modalClose}
                type="button"
                aria-label="закрытие окна с корзиной"
                onClick={handleClose}
              >
                <SmallClose className={styles.smallClose} />
              </button>
            </div>
            <label className={styles.labelInput}>
              <input
                className={styles.searchModalInput}
                type="text"
                placeholder=""
                value={inputValue}
                onChange={onInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <span className={`${styles.fakePlaceholder} ${isFocused ? styles.focused : ""}`}>
                Название товара, категория, тип...
              </span>
            </label>
            <FoundProduct fountItem={fountItem} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
