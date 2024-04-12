import "./App.global";
import Switcher from "./Switcher/Switcher";
import styles from "./App.module";

function App() {
  return (
    <div className={`${styles.container}`}>
      <Switcher />
    </div>
  );
}

export default App;
