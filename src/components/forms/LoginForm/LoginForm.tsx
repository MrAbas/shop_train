import FormIcons from "../FormIcons/FormIcons";
import { SIGN_IN } from "../../Switch/constants";
import stylesBtn from "../../../shared/stylesBtns.module.scss";
import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  return (
    <div className={styles.loginContainer}>
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
