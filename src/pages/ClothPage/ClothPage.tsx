import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ChoosePrice } from "../../components/ChoosePrice";
import { ListProducts } from "../../components/ListProducts";
import { CustomSelect } from "../../shared/DefaultBtnSelect";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { categoriesSelector, optionsSelector } from "../../store/selectors";
import { OptionValue } from "../ShopPage/OptionValue";
import { ChooseCategory } from "../../components/ChooseCategory";
import styles from "../ShopPage/ShopPage.module.scss";
import { returnToDefault } from "../../store/shopSlice";

export default function ClothPage() {
  const options = useAppSelector(optionsSelector);
  const categories = useAppSelector(categoriesSelector);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(
    () => () => {
      dispatch(returnToDefault());
    },
    [],
  );

  return (
    <main className={styles.wrapper}>
      <ul className={styles.links}>
        <li>
          <Link className={styles.styleLinks} to="/">
            Главная
          </Link>
        </li>
        <li>
          <Link className={`${styles.styleLinks}`} to="/shop">
            Каталог
          </Link>
        </li>
        <li>
          <Link className={`${styles.styleLinks} ${styles.currentLinks}`} to="#T">
            {categories[id]?.value}
          </Link>
        </li>
      </ul>
      <section>
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
      </section>
    </main>
  );
}
