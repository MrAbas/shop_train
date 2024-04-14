import RegistrationForm from "../RegistrationForm/RegistrationForm";
import styles from "./RegistrationContainer.module.scss";

export default function RegistrationBlock() {
  return (
    <div className={styles.containerForm}>
      <RegistrationForm />
    </div>
  );
}
