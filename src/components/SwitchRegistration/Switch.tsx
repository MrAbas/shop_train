import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import { useAppSelector } from "../../store/hooks";
import { switchSelector, themeSelector } from "../../store/selectors";
import DecorativeCircle1 from "./decorated/DecorativeCircle1/DecorativeCircle1";
import DecorativeCircle2 from "./decorated/DecorativeCircle2/DecorativeCircle2";
import styles from "./Switch.module.scss";

export default function Switch() {
  const isActive = useAppSelector(switchSelector);
  const theme = useAppSelector(themeSelector);
  return (
    <div
      className={
        isActive
          ? `${styles.switchContainer} ${styles.changeSwitch} ${styles[`switchContainer_${theme}`]}`
          : styles.switchContainer
      }
    >
      <SignUp />
      <SignIn />
      <DecorativeCircle1 />
      <DecorativeCircle2 />
    </div>
  );
}
