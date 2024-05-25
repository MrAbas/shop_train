import { useEffect } from "react";
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

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: "Abas@gmail.com",
      password: "testAbas",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect,
    };

    fetch("api/login", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    return () => {};
  }, []);

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
