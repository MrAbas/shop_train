import FormIcons from "../FormIcons/FormIcons";
import { SIGN_IN } from "../../Switch/SwitchContainer2/constants";
import { useAppSelector } from "../../../store/hooks";
import { switchSelector, themeSelector } from "../../../store/selectors";
import LoginButton from "../../../shared/Btn/LoginButton";
import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  const isActive = useAppSelector(switchSelector);
  const theme = useAppSelector(themeSelector);

  return (
    <div
      className={
        isActive
          ? `${styles.loginContainer} ${styles[`loginContainer_${theme}`]}
           ${styles.changeContainer} ${styles.changeForm}`
          : `${styles.loginContainer} ${styles.changeContainer}`
      }
    >
      <form className={styles.loginForm}>
        <h2 className={`${styles.titleForm} ${styles[`titleForm_${theme}`]}`}>Sign in to Website</h2>
        <FormIcons />
        <span className={`${styles.spanForm} ${styles[`spanForm_${theme}`]}`}>or use your email account</span>
        <input className={`${styles.inputForm} ${styles[`inputForm_${theme}`]}`} type="text" placeholder="Email" />
        <input
          className={`${styles.inputForm} ${styles[`inputForm_${theme}`]}`}
          type="password"
          placeholder="Password"
        />
        <a
          className={`${styles.linkForm} ${styles[`linkForm_${theme}`]}`}
          href="."
          aria-label="if you forgot the password"
        >
          Forgot your password?
          {/* TODO href ошибка # */}
        </a>
        <LoginButton content={SIGN_IN} />
      </form>
    </div>
  );
}
