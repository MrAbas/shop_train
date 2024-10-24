import { useAppSelector } from "../../store/hooks";
import { themeSelector } from "../../store/selectors";
import styles from "./LoginBtn.module.scss";

interface ButtonProps {
  content: string;
  onClick?: () => void;
}

const LoginBtn: React.FC<ButtonProps> = ({ content, onClick }) => {
  const theme = useAppSelector(themeSelector);

  return (
    <button className={`${styles.btn} ${styles[`btn_${theme}`]}`} onClick={onClick} type="button">
      {content}
    </button>
  );
};

export default LoginBtn;
