import FormIcons from "../FormIcons/FormIcons";
import styles from "./RegistrationForm.module.scss";

export default function RegistrationForm() {
  return (
    <form className={styles.registrationForm} method="action">
      <h2 className={styles.title}>Create Account</h2>
      <FormIcons />
      <span className={styles.registrationSpan}>or use email for registration</span>
      <input className={styles.formInput} type="text" placeholder="Name" />
      <input className={styles.formInput} type="text" placeholder="Email" />
      <input className={styles.formInput} type="password" placeholder="Password" />
      <button className={styles.formBtn} type="button">
        SIGN UP
      </button>
    </form>
  );
}
