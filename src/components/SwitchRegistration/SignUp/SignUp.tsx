import { SIGN_UP } from "../../forms/RegistrationForm/constants";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { switchSelector, themeSelector } from "../../../store/selectors";
import { handleClickActive } from "../../../store/shopSlice";
import { LoginBtn } from "../../../shared/LoginBtn";
import styles from "./SignUp.module.scss";

export default function SignUp() {
  const isActive = useAppSelector(switchSelector);
  const theme = useAppSelector(themeSelector);

  const dispatch = useAppDispatch();
  const switchForm = () => {
    dispatch(handleClickActive());
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
      <LoginBtn content={SIGN_UP} onClick={() => switchForm()} />
    </div>
  );
}
