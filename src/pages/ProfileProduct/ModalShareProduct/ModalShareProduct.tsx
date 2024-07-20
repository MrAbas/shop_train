import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CloseModal from "../../../shared/assets/icons/ProfileProduct/CloseModal";
import IconWhatsApp from "../../../shared/assets/icons/ProfileProduct/IconWhatsApp";
import IconTelegram from "../../../shared/assets/icons/ProfileProduct/IconTelegram";
import styles from "./ModalShareProduct.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 773,
  bgcolor: "#333a47",
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
  color: "rgb(255 255 255)",
};

export default function ModalShareProduct({ open, setOpen }) {
  const handleClose = () => setOpen(false);

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
                <CloseModal className={styles.colorCloseModal} />
              </button>
            </div>
            <div className={styles.btnsShare}>
              <button type="button" aria-label="share WhatsApp" className={styles.btnShare}>
                <IconWhatsApp />
              </button>
              <button type="button" aria-label="share WhatsApp" className={styles.btnShare}>
                <IconTelegram />
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
