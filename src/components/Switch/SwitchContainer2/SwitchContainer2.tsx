import { SIGN_IN } from "./constants";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { switchSelector } from "../../../store/selectors";
import stylesBtn from "../../../shared/stylesBtns.module.scss";
import styles from "./SwitchContainer2.module.scss";
import { handleClick } from "../../../store/shopSlice";

export default function SwitchContainer2() {
  const isActive = useAppSelector(switchSelector);
  const dispatch = useAppDispatch();
  const switchForm = () => {
    dispatch(handleClick());
  };

  return (
    <div
      className={
        isActive.active
          ? `${styles.switchContainer} ${styles.isHidden}`
          : `${styles.switchContainer} ${styles.changeContainer}`
      }
    >
      <h2 className={styles.title}>Welcome Back!</h2>
      <p className={styles.switchDescription}>To keep connected with us please login with your personal info</p>
      <button className={stylesBtn.btn} type="button" onClick={() => switchForm()}>
        {SIGN_IN}
      </button>
    </div>
  );
}
