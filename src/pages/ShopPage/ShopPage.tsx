import { ChooseCategory } from "../../components/ChooseCategory";
import { ChoosePrice } from "../../components/ChoosePrice";
import { CustomSelect } from "../../shared/DefaultBtnSelect";
import styles from "./ShopPage.module.scss";

const categoryNames: { name: string; value: string }[] = [
  { name: "Все категории", value: "catalog" },
  { name: "Одежда", value: "catalog" },
  { name: "Аксессуары", value: "catalog" },
  { name: "Цвет", value: "catalog" },
  { name: "Сувениры", value: "catalog" },
];

const selectData: { name: string; option: string[] }[] = [
  { name: "Размер", option: ["S", "L", "M", "XL", "XXL"] },
  {
    name: "Цвет",
    option: ["Пурпурный", "Жёлтый", "Оранжевый", "Чёрный", "Белый"],
  },
  {
    name: "Сортировка",
    option: ["Популярные", "Новинки", "Сначала дешевые", "Сначала дорогие"],
  },
];

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
        <div className={styles.btnsFilter}>
          <ChooseCategory categoryNames={categoryNames} />
          <ChoosePrice />
          {/* link добавить или заменить кнопки */}
          <CustomSelect selectData={selectData} />
        </div>
      </div>
    </div>
  );
}
