import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Switch from "../../components/SwitchRegistration/Switch";
import { RegistrationForm } from "../../components/forms/RegistrationForm";
import { LoginForm } from "../../components/forms/LoginForm";
import { BtnTheme } from "../../components/BtnTheme";
import { useAppSelector } from "../../store/hooks";
import { themeSelector } from "../../store/selectors";
import "../../App.global.scss";
import styles from "../../App.module.scss";

const LoginPage = () => {
  const theme = useAppSelector(themeSelector);
  const userIsInactive = localStorage.getItem("authorized");
  const navigate = useNavigate();

  useEffect(() => {
    if (userIsInactive === "true") {
      navigate("/");
    }
  }, [userIsInactive]);

  return (
    <div className={`${styles.container} ${styles[`container_${theme}`]}`}>
      <RegistrationForm />
      <LoginForm />
      <Switch />
      <BtnTheme />
    </div>
  );
};

export default LoginPage;
