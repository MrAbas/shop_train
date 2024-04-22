import React from "react";
import styles from "./ErrorPage.module.scss";

export default function ErrorPage2() {
  return (
    <div className={`${styles.container}`}>
      <a href="https://codepen.io/uiswarup/full/vYPxywO" target="_blank" rel="noreferrer">
        <header className={`${styles.topHeader}`} />

        {/* dust particel */}
        <div>
          <div className={`${styles.starSec}`} />
          <div className={`${styles.starThird}`} />
          <div className={`${styles.starFourth}`} />
          <div className={`${styles.starFifth}`} />
        </div>
        {/*  Dust particle end  */}

        <div className={`${styles.lampWrap}`}>
          <div className={`${styles.lamp}`}>
            <div className={`${styles.cable}`} />
            <div className={`${styles.cover}`} />
            <div className={`${styles.inCover}`}>
              <div className={`${styles.bulb}`} />
            </div>
            <div className={`${styles.light}`} />
          </div>
        </div>
        {/*  END Lamp */}
        <section className={`${styles.error}`}>
          {/*  Content */}
          <div className={`${styles.errorContent}`}>
            <div className={`${styles.errorMessage} ${styles.message}`}>
              <h1 className={`${styles.messageTitle}`}>Page Not Found</h1>
              <p className={`${styles.messageText}`}>
                We're sorry, the page you were looking for isn't found here. The link you followed may either be broken
                or no longer exists. Please try again, or take a look at our.
              </p>
            </div>
            <div className={`${styles.errorNav} ${styles.eNav}`}>
              <a href="/loginPage" target="_blanck" className="eNavLink" aria-label="return page" />
            </div>
          </div>
          {/* END Content */}
        </section>
      </a>
    </div>
  );
}
