import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import SmallClose from "../../../shared/assets/icons/SmallClose";
import styles from "./ModalShareProduct.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 620,
  height: 105,
  bgcolor: "#333a47",
  borderRadius: 1,
  boxShadow: 24,
  p: 2,
  color: "rgb(255 255 255)",
};

export default function ModalShareProduct({ open, setOpen }) {
  const handleClose = () => setOpen(!open);

  const shareUrlWhatsApp = "https://www.youtube.com/";
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
              <Typography className={styles.modalTitle} id="transition-modal-title" variant="h6" component="h2">
                ПОДЕЛИТЬСЯ
              </Typography>
              <button className={styles.modalClose} type="button" onClick={handleClose} aria-label="close modal">
                <SmallClose className={styles.smallClose} />
              </button>
            </div>
            <div className={styles.btnsShare}>
              <WhatsappShareButton url={shareUrlWhatsApp}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <TelegramShareButton url={shareUrlWhatsApp}>
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
