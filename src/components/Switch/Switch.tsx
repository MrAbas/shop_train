import SwitchContainer1 from "./SwitchContainer1/SwitchContainer1";
import SwitchContainer2 from "./SwitchContainer2/SwitchContainer2";
import { useAppSelector } from "../../store/hooks";
import { switchSelector } from "../../store/selectors";
import DecorativeCircle1 from "./decorated/DecorativeCircle1/DecorativeCircle1";
import styles from "./Switch.module.scss";
import DecorativeCircle2 from "./decorated/DecorativeCircle2/DecorativeCircle2";

export default function Switch() {
  const isActive = useAppSelector(switchSelector);

  return (
    <div className={isActive ? `${styles.switchContainer} ${styles.changeSwitch}` : styles.switchContainer}>
      <SwitchContainer1 />
      <SwitchContainer2 />
      <DecorativeCircle1 />
      <DecorativeCircle2 />
    </div>
  );
}
