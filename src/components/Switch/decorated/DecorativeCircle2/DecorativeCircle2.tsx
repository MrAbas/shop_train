import { useAppSelector } from "../../../../store/hooks";
import { switchSelector, themeSelector } from "../../../../store/selectors";
import styles from "./DecorativeCircle2.module.scss";

export default function DecorativeCircle2() {
  const isActive = useAppSelector(switchSelector);
  const theme = useAppSelector(themeSelector);

  return (
    <div
      className={
        isActive
          ? `${styles.switchCircle} ${styles[`switchCircle_${theme} ${styles.switchCircleChange} `]}`
          : `${styles.switchCircle} ${styles[`switchCircle_${theme}`]}`
      }
    />
  );
}
