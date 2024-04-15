import iconTg from "../../../shared/icons/tg.svg";
import iconInst from "../../../shared/icons/inst.svg";
import iconTw from "../../../shared/icons/twitter.svg";
import styles from "./FormIcons.module.scss";

export default function FormIcons() {
  return (
    <div className={styles.formIcons}>
      <img src={iconTg} alt="telegram" className={styles.formIcon} />
      <img src={iconInst} alt="instagram" className={styles.formIcon} />
      <img src={iconTw} alt="twitter(x)" className={styles.formIcon} />
    </div>
  );
}
