import LoginForm from "../LoginForm/LoginForm";
import styles from "./LoginContainer.module.scss";

export default function LoginContainer() {
  return (
    <div className={styles.loginContainer}>
      <LoginForm />
    </div>
  );
}
