import styles from "./Switch.module.scss";

export default function SwitchContainer() {
  return (
    <div className={styles.switchContainer}>
      <h2 className={styles.title}>Welcome Back !</h2>
      <p className={styles.switchDescription}>To keep connected with us please login with your personal info</p>
      <button className={styles.switchBtn} type="button">
        SIGN IN
      </button>
    </div>
  );
}
