import { useAppSelector } from "../../../../store/hooks";
import { switchSelector } from "../../../../store/selectors";
import styles from "./DecorativeCircle1.module.scss";

export default function DecorativeCircle1() {
  const isActive = useAppSelector(switchSelector);
  return <div className={isActive ? `${styles.switchCircle} ${styles.switchCircleChange}` : styles.switchCircle} />;
}
