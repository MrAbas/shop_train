import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Backdrop, Fade } from "@mui/material";
import CloseModal from "../../../shared/assets/icons/ProfileProduct/CloseModal";
import styles from "./ModalSizeTable.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 975,
  height: 477,
  bgcolor: "#242c39",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "rgb(255 255 255)",
};

export default function ModalSizeTable({ open, setOpen }) {
  const handleClose = () => setOpen(!open);

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
              <Typography className={styles.modalTitle} id="modal-modal-title" variant="h6" component="h2">
                Таблица размеров
              </Typography>
              <button className={styles.modalClose} type="button" onClick={handleClose} aria-label="close modal">
                <CloseModal className={styles.colorCloseModal} />
              </button>
            </div>

            <table className={styles.table}>
              <thead>
                <tr className={styles.trContainer}>
                  <th className={styles.thHead}>Российский размер</th>
                  <th className={styles.thHead}>Размер производителя</th>
                  <th className={styles.thHead}>Обхват груди, в см</th>
                  <th className={styles.thHead}>Обхват талии, в см</th>
                  <th className={styles.thHead}>Обхват бедер, в см</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tdBody}>44-46</td>
                  <td className={styles.tdBody}>S</td>
                  <td className={styles.tdBody}>78-82</td>
                  <td className={styles.tdBody}>58-62</td>
                  <td className={styles.tdBody}>86-90</td>
                </tr>
                <tr>
                  <td className={styles.tdBody}>48-50</td>
                  <td className={styles.tdBody}>M</td>
                  <td className={styles.tdBody}>82-86</td>
                  <td className={styles.tdBody}>62-66</td>
                  <td className={styles.tdBody}>90-94</td>
                </tr>
                <tr>
                  <td className={styles.tdBody}>50</td>
                  <td className={styles.tdBody}>L</td>
                  <td className={styles.tdBody}>86-90</td>
                  <td className={styles.tdBody}>66-70</td>
                  <td className={styles.tdBody}>94-98</td>
                </tr>
                <tr>
                  <td className={styles.tdBody}>52-54</td>
                  <td className={styles.tdBody}>XL</td>
                  <td className={styles.tdBody}>90-94</td>
                  <td className={styles.tdBody}>70-74</td>
                  <td className={styles.tdBody}>98-102</td>
                </tr>
                <tr>
                  <td className={styles.tdBody}>56</td>
                  <td className={styles.tdBody}>XXL</td>
                  <td className={styles.tdBody}>94-98</td>
                  <td className={styles.tdBody}>74-78</td>
                  <td className={styles.tdBody}>102-106</td>
                </tr>
              </tbody>
            </table>
            <button className={`${styles.btnTableSize} ${styles.btnTableSizeDisabled}`} type="button">
              В корзину
            </button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
