import styles from "./stylesBtn.module.scss";

interface ButtonProps {
  content: string;
  onClick?: () => void;
}

const LoginButton: React.FC<ButtonProps> = ({ content, onClick }) => (
  <button className={styles.btn} onClick={onClick} type="button">
    {content}
  </button>
);

export default LoginButton;
