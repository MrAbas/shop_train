import { SIGN_IN } from "./constants";
import stylesBtn from "../../shared/stylesBtns.module.scss";
import styles from "./Switch.module.scss";

export default function Switch() {
  return (
    <div className={styles.switchContainer}>
      <h2 className={styles.title}>Welcome Back!</h2>
      <p className={styles.switchDescription}>To keep connected with us please login with your personal info</p>
      <button className={stylesBtn.btn} type="button">
        {SIGN_IN}
      </button>
    </div>
  );
}
