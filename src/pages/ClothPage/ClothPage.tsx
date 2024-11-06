import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ChoosePrice } from "../../components/ChoosePrice";
import { ListProducts } from "../../components/ListProducts";
import { CustomSelect } from "../../shared/DefaultBtnSelect";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { categoriesSelector, optionsSelector } from "../../store/selectors";
import { OptionValue } from "../ShopPage/OptionValue";
import { ChooseCategory } from "../../components/ChooseCategory";
import { returnToDefault } from "../../store/shopSlice";
import { ILinks } from "../../shared/types/interfaces";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import styles from "../ShopPage/ShopPage.module.scss";

const links: ILinks[] = [
  { href: "/", title: "Главная" },
  { href: "/shop", title: "Каталог" },
  { href: "#", title: "Одежда" },
];

export default function ClothPage() {
  const dispatch = useAppDispatch();
  const ref = useRef();
  const options = useAppSelector(optionsSelector);
  const categories = useAppSelector(categoriesSelector);
  const { id } = useParams();

  useEffect(
    () => () => {
      dispatch(returnToDefault());
    },
    [],
  ); // TODO исправить сохранение перенос

  return (
    <main ref={ref}>
      <div className={styles.wrapper}>
        <Breadcrumbs links={links} activeTitle="Одежда" />
        <section>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{categories[id]?.value}</h1>
            <span className={styles.numberOfProducts}>50 товаров</span>
          </div>

          <div className={styles.btnsFilter}>
            <ChooseCategory />
            <ChoosePrice />
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
      </div>
    </main>
  );
}
