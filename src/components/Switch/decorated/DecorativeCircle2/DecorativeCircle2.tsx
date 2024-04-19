import { useAppSelector } from "../../../../store/hooks";
import { switchSelector } from "../../../../store/selectors";
import styles from "./DecorativeCircle2.module.scss";

export default function DecorativeCircle2() {
  const isActive = useAppSelector(switchSelector);
  return (
    <div
      className={isActive.active ? `${styles.switchCircle} ${styles.switchCircleChange}` : styles.switchCircle}
    ></div>
  );
}
