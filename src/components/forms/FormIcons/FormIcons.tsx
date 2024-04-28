import iconTg from "../../../shared/icons/tg.svg";
import iconInst from "../../../shared/icons/inst.svg";
import iconX from "../../../shared/icons/x.svg";
import styles from "./FormIcons.module.scss";

export default function FormIcons() {
  return (
    <div className={styles.formIcons}>
      <img src={iconTg} alt="telegram" className={styles.formIcon} />
      <img src={iconInst} alt="instagram" className={styles.formIcon} />
      <img src={iconX} alt="twitter(x)" className={styles.formIcon} />
    </div>
  );
}
