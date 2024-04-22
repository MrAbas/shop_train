import { SIGN_IN } from "./constants";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { switchSelector, themeSelector } from "../../../store/selectors";
import { handleClick } from "../../../store/shopSlice";
import LoginButton from "../../../shared/Btn/LoginButton";
import styles from "./SwitchContainer2.module.scss";

export default function SwitchContainer2() {
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
          ? `${styles.switchContainer} ${styles[`switchContainer_${theme}`]} ${styles.isHidden}`
          : `${styles.switchContainer} ${styles[`switchContainer_${theme}`]} ${styles.changeContainer}`
      }
    >
      <h2 className={`${styles.title} ${styles[`title_${theme}`]}`}>Welcome Back!</h2>
      <p className={`${styles.switchDescription} ${styles[`switchDescription_${theme}`]}`}>
        To keep connected with us please login with your personal info
      </p>
      {/* <button className={stylesBtn.btn} type="button" onClick={() => switchForm()}>
        {SIGN_IN}
      </button> */}
      <LoginButton content={SIGN_IN} onClick={() => switchForm()} />
    </div>
  );
}
