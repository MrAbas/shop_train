import SwitchContainer from "./Switch/Switch";
import LoginBLock from "./LoginContainer/LoginContainer";
import "./App.global.scss";
// import RegistrationBlock from "./RegistrationBlock/RegistrationBlock";
import styles from "./App.module.scss"; // TODO импорты не сортируются

function App() {
  return (
    <div className={`${styles.container}`}>
      {/* <RegistrationBlock /> */}
      <LoginBLock />
      <SwitchContainer />
    </div>
  );
}

export default App;
