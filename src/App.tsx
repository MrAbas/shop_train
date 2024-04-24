import Switch from "./components/Switch/Switch";
import RegistrationForm from "./components/forms/RegistrationForm/RegistrationForm";
import LoginForm from "./components/forms/LoginForm/LoginForm";
import BtnTheme from "./components/BtnTheme/BtnTheme";
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
