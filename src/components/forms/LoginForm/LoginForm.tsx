import FormIcons from "../FormIcons/FormIcons";
import { SIGN_IN } from "../../Switch/SwitchContainer2/constants";
import { useAppSelector } from "../../../store/hooks";
import { switchSelector } from "../../../store/selectors";
import stylesBtn from "../../../shared/stylesBtns.module.scss";
import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  const isActive = useAppSelector(switchSelector);
  return (
    <div className={isActive.active ? styles.loginContainer : `${styles.loginContainer} ${styles.changeContainer}`}>
      <form className={styles.loginForm}>
        <h2 className={styles.titleForm}>Sign in to Website</h2>
        <FormIcons />
        <span className={styles.spanForm}>or use your email account</span>
        <input className={styles.inputForm} type="text" placeholder="Email" />
        <input className={styles.inputForm} type="password" placeholder="Password" />
        <a className={styles.linkForm} href="." aria-label="if you forgot the password">
          Forgot your password?
          {/* TODO href ошибка # */}
        </a>
        <button className={stylesBtn.btn} type="button">
          {SIGN_IN}
        </button>
      </form>
    </div>
  );
}
