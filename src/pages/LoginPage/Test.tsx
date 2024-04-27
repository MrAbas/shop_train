import Switch from "../../components/SwitchRegistration/Switch";
import RegistrationForm from "../../components/forms/RegistrationForm/RegistrationForm";
import LoginForm from "../../components/forms/LoginForm/LoginForm";
import BtnTheme from "../../components/BtnTheme/BtnTheme";
import { useAppSelector } from "../../store/hooks";
import { themeSelector } from "../../store/selectors";
// import "../..//App.global.scss"; // TODO
import styles from "../../App.module.scss";

export const Test = () => {
  const theme = useAppSelector(themeSelector);

  return (
    <div className={`${styles.container} ${styles[`container_${theme}`]}`}>
      <RegistrationForm />
      <LoginForm />
      <Switch />
      <BtnTheme />
    </div>
  );
};
