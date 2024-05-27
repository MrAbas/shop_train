import Tg from "../../../shared/assets/icons/Footer/Tg";
import styles from "./FooterSocialNetworks.module.scss";

export default function FooterSocialNetworks() {
  return (
    <div className={styles.footerSocialNetworks}>
      <a
        className={styles.socialMediaLink}
        href="https://t.me/rostelecomofficial"
        aria-label="link telegram"
        target="_blank"
        rel="noreferrer"
      >
        <Tg className={styles.socialMediaIcon} />
      </a>
    </div>
  );
}
