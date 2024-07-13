import { useParams } from "react-router-dom";
import { ChoosePrice } from "../../components/ChoosePrice";
import { ListProducts } from "../../components/ListProducts";
import { CustomSelect } from "../../shared/DefaultBtnSelect";
import { useAppSelector } from "../../store/hooks";
import { categoriesSelector, optionsSelector } from "../../store/selectors";
import { OptionValue } from "../ShopPage/OptionValue";
import { ChooseCategory } from "../../components/ChooseCategory";
import styles from "../ShopPage/ShopPage.module.scss";

export default function ClothPage() {
  const options = useAppSelector(optionsSelector);
  const categories = useAppSelector(categoriesSelector);
  const { id } = useParams();
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
            <a className={`${styles.styleLinks}`} href="/shop">
              Каталог
            </a>
          </li>
          <li>
            <a className={`${styles.styleLinks} ${styles.currentLinks}`} href="#T">
              {categories[id]?.value}
            </a>
          </li>
        </ul>

        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{categories[id]?.value}</h1>
          <span className={styles.countProduct}>50 товаров</span>
        </div>

        <div className={styles.btnsFilter}>
          {/* data={options.find((item) => item.titleSelect === "Категории")} */}
          <ChooseCategory />
          <ChoosePrice />
          {/* TODO link добавить или заменить кнопки */}
          {options.map((item, index) => {
            if (item.titleSelect === "Цена" || item.titleSelect === "Категории") {
              return null;
            }
            return <CustomSelect key={`${index + item.titleSelect}`} data={item} />;
          })}
        </div>
        <OptionValue />
        <ListProducts />
      </div>
    </section>
  );
}
