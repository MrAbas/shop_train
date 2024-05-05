import { Inst } from "../../../shared/icons/Inst";
import { Tg } from "../../../shared/icons/Tg";
import { X } from "../../../shared/icons/X";
import { useAppSelector } from "../../../store/hooks";
import { themeSelector } from "../../../store/selectors";
import { black, white } from "./constants";
import styles from "./FormIcons.module.scss";

export default function FormIcons() {
  const theme = useAppSelector(themeSelector);

  const blackColor = black;
  const whiteColor = white;

  return (
    <div className={styles.formIcons}>
      <Tg color={theme === "light" ? blackColor : whiteColor} className={styles.formIcon} />
      <Inst color={theme === "light" ? blackColor : whiteColor} className={styles.formIcon} />
      <X color={theme === "light" ? blackColor : whiteColor} className={styles.formIcon} />
    </div>
  );
}
