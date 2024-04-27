import { useAppSelector } from "../../../../store/hooks";
import { switchSelector, themeSelector } from "../../../../store/selectors";
import styles from "./DecorativeCircle1.module.scss";

export default function DecorativeCircle1() {
  const isActive = useAppSelector(switchSelector);
  const theme = useAppSelector(themeSelector);
  return (
    <div
      className={
        isActive
          ? `${styles.switchCircle} ${styles.switchCircleChange} ${styles[`switchCircle_${theme}`]}`
          : `${styles.switchCircle} ${styles[`switchCircle_${theme}`]}`
      }
    />
  );
}
