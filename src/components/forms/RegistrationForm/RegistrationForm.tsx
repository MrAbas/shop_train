import FormIcons from "../FormIcons/FormIcons";
import { SIGN_UP } from "./constants";
import { switchSelector } from "../../../store/selectors";
import { useAppSelector } from "../../../store/hooks";
import stylesBtn from "../../../shared/stylesBtns.module.scss";
import styles from "./RegistrationForm.module.scss";

export default function RegistrationForm() {
  const isActive = useAppSelector(switchSelector);

  return (
    <div
      className={
        isActive.active
          ? `${styles.containerForm} ${styles.changeContainer} ${styles.changeForm}`
          : `${styles.containerForm} ${styles.changeContainer}`
      }
    >
      <form className={styles.registrationForm} method="action">
        <h2 className={styles.title}>Create Account</h2>
        <FormIcons />
        <span className={styles.registrationSpan}>or use email for registration</span>
        <input className={styles.formInput} type="text" placeholder="Name" />
        <input className={styles.formInput} type="text" placeholder="Email" />
        <input className={styles.formInput} type="password" placeholder="Password" />
        <button className={stylesBtn.btn} type="button">
          {SIGN_UP}
        </button>
      </form>
    </div>
  );
}
