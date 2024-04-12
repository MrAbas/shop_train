import styles from "./Switch.module.scss";

export default function Switch() {
  return (
    <div className={`${styles.switchContainer}`}>
      <h2 className={`${styles.switchTitle}`}>Welcome Back !</h2>
      <p className={`${styles.switchDescription}`}>To keep connected with us please login with your personal info</p>
      <button className={`${styles.switchBtn}`}>SIGN IN</button>
    </div>
  );
}
