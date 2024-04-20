import { SIGN_UP } from "../../forms/RegistrationForm/constants";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { switchSelector } from "../../../store/selectors";
import { handleClick } from "../../../store/shopSlice";
import LoginButton from "../../../shared/Btn/LoginButton";
import styles from "./SwitchContainer1.module.scss";

export default function SwitchContainer1() {
  const isActive = useAppSelector(switchSelector);
  const dispatch = useAppDispatch();
  const switchForm = () => {
    dispatch(handleClick());
  };

  return (
    <div
      className={
        isActive
          ? `${styles.switchContainer} ${styles.changeContainer}`
          : `${styles.switchContainer} ${styles.isHidden}`
      }
    >
      <h2 className={styles.title}>Hello Friend!</h2>
      <p className={styles.switchDescription}>Enter your personal details and start journey with us</p>
      {/*   <button className={stylesBtn.btn} type="button" onClick={() => switchForm()}>
        {SIGN_UP}
      </button> */}
      <LoginButton content={SIGN_UP} onClick={() => switchForm()} />
    </div>
  );
}
