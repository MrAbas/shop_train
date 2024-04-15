import Switch from "./components/Switch/Switch";
import RegistrationForm from "./components/forms/RegistrationForm/RegistrationForm";
// import Switch2 from "./components/Switch2/Switch2";
// import LoginForm from "./components/forms/LoginForm/LoginForm";
import "./App.global.scss";
import styles from "./App.module.scss"; // TODO импорты не сортируются

function App() {
  return (
    <div className={`${styles.container}`}>
      <Switch />
      <RegistrationForm />
      {/* <LoginForm /> */}
      {/* <Switch2 /> */}
    </div>
  );
}

export default App;
