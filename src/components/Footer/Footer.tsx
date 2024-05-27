import { FooterSocialNetworks } from "./FooterSocialNetworks";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopContainer}>
          <div className={styles.containerLogo}>
            <a className={styles.logo} href="/" aria-label="Logo" />
          </div>
          <div className={styles.footerContacts}>
            <a href="tel: 7 (499) 999-82-83">+7 (499) 999-82-83</a>
            <a href="mailto:rostelecom.merc@rt.ru">rostelecom.merc@rt.ru</a>
          </div>
          <div className={styles.footerLinks}>
            <a href="https://vc.ru/rt" target="_blank" rel="noreferrer">
              vc.ru
            </a>
            <a href="https://habr.com/ru/articles/436308/" target="_blank" rel="noreferrer">
              habr.com
            </a>
          </div>
          <FooterSocialNetworks />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContainer}>
          <div className={`${styles.siteRights} ${styles.fonts}`}>
            © 2023 ПАО «Ростелеком» Все права защищены (18+)
          </div>
          <div className={`${styles.sitePolicy} ${styles.fonts}`}>
            <a href="/">Политика обработки данных</a>
            <a href="/">Политика конфиденциальности</a>
          </div>
          <div className={`${styles.mobileVersion} ${styles.fonts}`}>
            <a href="/">Мобильная версия</a>
          </div>
        </div>
      </div>
    </div>
  );
}
