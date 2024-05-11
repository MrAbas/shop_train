import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MainPage.module.scss";

export default function MainPage() {
  const userIsInactive = localStorage.getItem("authorized");
  const navigate = useNavigate();

  useEffect(() => {
    if (userIsInactive === "false") {
      navigate("/loginPage");
    }
  }, [userIsInactive]);
  return (
    <div className={styles.wrapper}>
      <main>
        <section className={styles.banner}>
          <div className={styles.container}>
            <span className={styles.advertising}>Реклама</span>
            <div className={styles.subtitle}>
              <span className={styles.subOne}>Зима, мода</span>
              <br />
              <span className={styles.subTwo}>и технологии</span>
              <div className={styles.decorate} />
              <div />
            </div>
            <h2 className={styles.bannerTitle}>
              <span className={styles.bannerSubtitle}>[ в новой коллекции ]</span>
              <span className={styles.bannerTitleText}>Ростелеком</span>
            </h2>
          </div>
          <Link to="/shop" className={styles.link}>
            В каталог
          </Link>
        </section>
      </main>

      {/* TOD  */}
    </div>
  );
}
