import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { toggleTheme } from "../store/shopSlice";
import styles from "./BtnTheme.module.scss";

export default function BtnTheme() {
  const dispatch = useAppDispatch();
  const [, setTheme] = useState(localStorage.theme ? localStorage.theme : "light");

  const addToLS = () => {
    const newTheme = localStorage.theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    localStorage.theme = newTheme;
  };
  return (
    <button
      onClick={() => dispatch(toggleTheme(), addToLS())}
      className={styles.btnTheme}
      type="button"
      aria-label="Button change theme"
    />
  );
}
