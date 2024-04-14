import SwitchContainer from "./Switch/Switch";
import "./App.global.scss";
// import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import styles from "./App.module.scss"; // TODO импорты не сортируются

function App() {
  return (
    <div className={`${styles.container}`}>
      {/* <LoginForm /> */}
      <SwitchContainer />
      <RegistrationForm />
    </div>
  );
}

export default App;
