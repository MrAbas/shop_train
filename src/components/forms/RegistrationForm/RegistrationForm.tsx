import { FormIcons } from "../FormIcons";
import { SIGN_UP } from "./constants";
import { switchSelector, themeSelector } from "../../../store/selectors";
import { useAppSelector } from "../../../store/hooks";
import { LoginBtn2 } from "../../../shared/Btns/LoginBtn2";
import styles from "./RegistrationForm.module.scss";

export default function RegistrationForm() {
  const isActive = useAppSelector(switchSelector);
  const theme = useAppSelector(themeSelector);
  return (
    <div
      className={
        isActive
          ? `${styles.containerForm} ${styles.changeContainer} ${styles.changeForm} ${styles[`containerForm_${theme}`]}`
          : `${styles.containerForm} ${styles.changeContainer} ${styles[`containerForm_${theme}`]} `
      }
    >
      <form className={styles.registrationForm} method="action">
        <h2 className={`${styles.title} ${styles[`title_${theme}`]}`}>Create Account</h2>
        <FormIcons />
        <span className={`${styles.registrationSpan} ${styles[`registrationSpan_${theme}`]}`}>
          or use email for registration
        </span>
        <input className={`${styles.formInput} ${styles[`formInput_${theme}`]}`} type="text" placeholder="Name" />
        <input className={`${styles.formInput} ${styles[`formInput_${theme}`]}`} type="text" placeholder="Email" />
        <input
          className={`${styles.formInput} ${styles[`formInput_${theme}`]}`}
          type="password"
          placeholder="Password"
        />
        <LoginBtn2 content={SIGN_UP} />
      </form>
    </div>
  );
}
