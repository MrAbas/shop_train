import "./App.global.scss";
import Switcher from "./Switch/Switch";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`${styles.container}`}>
      <Switcher />
    </div>
  );
}

export default App;
