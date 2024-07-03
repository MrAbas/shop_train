import styles from "../ShopPage/ShopPage.module.scss";

export default function ClothPage() {
  return (
    <section className={styles.wrapper}>
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
          <h1 className={styles.title}>Одежда</h1>
          <span className={styles.countProduct}>67 товаров</span>
        </div>
        {/* <div className={styles.btnsFilter}></div> */}
      </div>
    </section>
  );
}
