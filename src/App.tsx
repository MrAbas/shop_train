import Switch from "./components/SwitchRegistration/Switch";
import { RegistrationForm } from "./components/forms/RegistrationForm";
import { LoginForm } from "./components/forms/LoginForm";
import { BtnTheme } from "./components/BtnTheme";
import { useAppSelector } from "./store/hooks";
import { themeSelector } from "./store/selectors";
import "./App.global.scss";
import styles from "./App.module.scss"; // TODO импорты не сортируются

function App() {
  const theme = useAppSelector(themeSelector);

  return (
    <div className={`${styles.container} ${styles[`container_${theme}`]}`}>
      <RegistrationForm />
      <LoginForm />
      <Switch />
      <BtnTheme />
    </div>
  );
}

export default App;
