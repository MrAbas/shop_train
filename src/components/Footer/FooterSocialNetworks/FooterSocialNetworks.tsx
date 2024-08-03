import Tg from "../../../shared/assets/icons/Footer/Tg";
import Vk from "../../../shared/assets/icons/Footer/Vk";
import Yt from "../../../shared/assets/icons/Footer/Yt";
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
      <a
        className={styles.socialMediaLink}
        href="https://t.me/rostelecomofficial"
        aria-label="link telegram"
        target="_blank"
        rel="noreferrer"
      >
        <Vk className={styles.socialMediaIcon} />
      </a>
      <a
        className={styles.socialMediaLink}
        href="https://t.me/rostelecomofficial"
        aria-label="link telegram"
        target="_blank"
        rel="noreferrer"
      >
        <Yt className={styles.socialMediaIcon} />
      </a>
    </div>
  );
}
