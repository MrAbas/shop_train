import { Inst } from "../../../shared/icons/Inst";
import { Tg } from "../../../shared/icons/Tg";
import { X } from "../../../shared/icons/X";
import { useAppSelector } from "../../../store/hooks";
import { themeSelector } from "../../../store/selectors";
import styles from "./FormIcons.module.scss";

export default function FormIcons() {
  const theme = useAppSelector(themeSelector);

  const black = "#181818";
  const white = "#f9f9f9";

  return (
    <div className={styles.formIcons}>
      <Tg color={theme === "light" ? black : white} className={styles.formIcon} />
      <Inst color={theme === "light" ? black : white} className={styles.formIcon} />
      <X color={theme === "light" ? black : white} className={styles.formIcon} />
    </div>
  );
}
