import { useState } from "react";
import FormIcons from "../FormIcons/FormIcons";
import { SIGN_IN } from "../../SwitchRegistration/SignIn/constants";
import { useAppSelector } from "../../../store/hooks";
import { switchSelector, themeSelector } from "../../../store/selectors";
import LoginBtn2 from "../../../shared/Btns/LoginButton2/LoginBtn2";
import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  const isActive = useAppSelector(switchSelector);
  const theme = useAppSelector(themeSelector);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email && password) {
      localStorage.setItem("authorized", "true");
    }
  };

  return (
    <div
      className={
        isActive
          ? `${styles.loginContainer} ${styles[`loginContainer_${theme}`]}
           ${styles.changeContainer} ${styles.changeForm}`
          : `${styles.loginContainer} ${styles.changeContainer}`
      }
    >
      <div className={styles.loginForm}>
        <h2 className={`${styles.titleForm} ${styles[`titleForm_${theme}`]}`}>Sign in to Website</h2>
        <FormIcons />
        <span className={`${styles.spanForm} ${styles[`spanForm_${theme}`]}`}>or use your email account</span>
        <input
          className={`${styles.inputForm} ${styles[`inputForm_${theme}`]}`}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`${styles.inputForm} ${styles[`inputForm_${theme}`]}`}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a
          className={`${styles.linkForm} ${styles[`linkForm_${theme}`]}`}
          href="."
          aria-label="if you forgot the password"
        >
          Forgot your password?
        </a>

        <LoginBtn2 onClick={handleSubmit} content={SIGN_IN} />
      </div>
    </div>
  );
}
