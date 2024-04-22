import SwitchContainer1 from "./SwitchContainer1/SwitchContainer1";
import SwitchContainer2 from "./SwitchContainer2/SwitchContainer2";
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
      <SwitchContainer1 />
      <SwitchContainer2 />
      <DecorativeCircle1 />
      <DecorativeCircle2 />
    </div>
  );
}
