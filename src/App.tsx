import Switch from "./components/Switch/Switch";
import RegistrationForm from "./components/forms/RegistrationForm/RegistrationForm";
import LoginForm from "./components/forms/LoginForm/LoginForm";
import "./App.global.scss";
import styles from "./App.module.scss"; // TODO импорты не сортируются

function App() {
  return (
    <div className={`${styles.container}`}>
      <RegistrationForm />
      <LoginForm />
      <Switch />
    </div>
  );
}

export default App;
