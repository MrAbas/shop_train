import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { themeSelector } from "../../store/selectors";
import { toggleTheme } from "../../store/shopSlice";
import styles from "./BtnTheme.module.scss";

export default function BtnTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeSelector);

  return (
    <button
      className={`${styles.btnTheme} ${styles[`btnTheme_${theme}`]}`}
      onClick={() => dispatch(toggleTheme())}
      type="button"
      aria-label="Button change theme"
    />
  );
}
