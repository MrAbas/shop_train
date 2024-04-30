import { SIGN_UP } from "../../forms/RegistrationForm/constants";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { switchSelector, themeSelector } from "../../../store/selectors";
import { handleClick } from "../../../store/shopSlice";
import { LoginBtn1 } from "../../../shared/Btns/LoginBtn1";
import styles from "./SignUp.module.scss";

export default function SignUp() {
  const isActive = useAppSelector(switchSelector);
  const theme = useAppSelector(themeSelector);

  const dispatch = useAppDispatch();
  const switchForm = () => {
    dispatch(handleClick());
  };

  return (
    <div
      className={
        isActive
          ? `${styles.switchContainer} ${styles[`switchContainer_${theme}`]}`
          : `${styles.switchContainer} ${styles[`switchContainer_${theme}`]} ${styles.isHidden}`
      }
    >
      <h2 className={`${styles.title} ${styles[`title_${theme}`]}`}>Hello Friend!</h2>
      <p className={`${styles.switchDescription} ${styles[`switchDescription_${theme}`]}`}>
        Enter your personal details and start journey with us
      </p>
      <LoginBtn1 content={SIGN_UP} onClick={() => switchForm()} />
    </div>
  );
}
