import { MouseEvent } from "react";
import { useAppSelector } from "../../../store/hooks";
import { themeSelector } from "../../../store/selectors";
import styles from "./stylesBtn2.module.scss";

interface ButtonProps {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const LoginBtn2: React.FC<ButtonProps> = ({ content, onClick }) => {
  const theme = useAppSelector(themeSelector);

  return (
    <button className={`${styles.btn} ${styles[`btn_${theme}`]}`} onClick={onClick} type="button">
      {content}
    </button>
  );
};
// TODO поменять названия кнопок.
export default LoginBtn2;
