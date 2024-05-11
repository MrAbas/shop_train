import { CustomSelect } from "../../shared/CustomSelect";
import styles from "./ShopPage.module.scss";

const btnNames: string[] = ["Все категории", "Одежда", "Аксессуары", "Цвет", "Сувениры"];

export default function ShopPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.links}>
          <li>
            <a className={styles.styleLinks} href="/">
              Главная
            </a>
          </li>
          <li>
            <a className={`${styles.styleLinks} ${styles.currentLinks}`} href="#T">
              Каталог
            </a>
          </li>
        </ul>

        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Каталог</h1>
          <span className={styles.countProduct}>67 товаров</span>
        </div>
        <div>
          <CustomSelect btnNames={btnNames} />
        </div>
      </div>
    </div>
  );
}
