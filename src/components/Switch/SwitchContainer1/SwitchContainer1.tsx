import { SIGN_UP } from "../../forms/RegistrationForm/constants";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { switchSelector, themeSelector } from "../../../store/selectors";
import { handleClick } from "../../../store/shopSlice";
import LoginButton from "../../../shared/Btn/LoginButton";
import styles from "./SwitchContainer1.module.scss";

export default function SwitchContainer1() {
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
          ? `${styles.switchContainer} ${styles[`switchContainer_${theme}`]} ${styles.changeContainer}`
          : `${styles.switchContainer} ${styles[`switchContainer_${theme}`]} ${styles.isHidden}`
      }
    >
      <h2 className={`${styles.title} ${styles[`title_${theme}`]}`}>Hello Friend!</h2>
      <p className={`${styles.switchDescription} ${styles[`switchDescription_${theme}`]}`}>
        Enter your personal details and start journey with us
      </p>
      <LoginButton content={SIGN_UP} onClick={() => switchForm()} />
    </div>
  );
}
