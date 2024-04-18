import SwitchContainer1 from "./SwitchContainer1/SwitchContainer1";
import SwitchContainer2 from "./SwitchContainer2/SwitchContainer2";
import { useAppSelector } from "../../store/hooks";
import { switchSelector } from "../../store/selectors";
import styles from "./Switch.module.scss";

export default function Switch() {
  const isActive = useAppSelector(switchSelector);

  return (
    <div className={isActive.active ? `${styles.switchContainer} ${styles.changeSwitch}` : styles.switchContainer}>
      <SwitchContainer1 />
      <SwitchContainer2 />
    </div>
  );
}
