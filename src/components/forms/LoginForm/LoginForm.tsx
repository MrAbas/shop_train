import { useState } from "react";
import FormIcons from "../FormIcons/FormIcons";
import { SIGN_IN } from "../../Switch/SwitchContainer2/constants";
import { useAppSelector } from "../../../store/hooks";
import { switchSelector, themeSelector } from "../../../store/selectors";
import LoginButton from "../../../shared/Btn/LoginButton";
import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  const isActive = useAppSelector(switchSelector);
  const theme = useAppSelector(themeSelector);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    if (email && password) {
      localStorage.setItem("authorized", "true");
    }
    console.log(email);
    console.log(password); // TODO  не работает
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

        <LoginButton onClick={handleSubmit} content={SIGN_IN} />
      </div>
    </div>
  );
}
