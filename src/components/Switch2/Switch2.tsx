import { SIGN_UP } from "../forms/RegistrationForm/constants";
import styles from "./Switch2.module.scss";

export default function Switch() {
  return (
    <div className={styles.switchContainer}>
      <h2 className={styles.title}>Hello Friend!</h2>
      <p className={styles.switchDescription}>Enter your personal details and start journey with us</p>
      <button className={styles.switchBtn} type="button">
        {SIGN_UP}
      </button>
    </div>
  );
}
