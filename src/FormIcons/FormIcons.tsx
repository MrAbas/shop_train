/* import iconTg from "./tg.svg";
import iconInst from "./inst.svg";
import iconX from "./x.svg"; */
import styles from "./FormIcons.module.scss";

export default function FormIcons() {
  return (
    <div className={styles.formIcons}>
      <img src="./tg.svg" alt="telegram" className={styles.formIcon} />
      <img src="./inst.svg" alt="instagram" className={styles.formIcon} />
      <img src="./x.svg" alt="twitter(x)" className={styles.formIcon} />
    </div>
  );
}
