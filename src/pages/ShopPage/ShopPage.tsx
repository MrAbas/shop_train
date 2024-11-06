import { useEffect } from "react";
import { ChooseCategoryLink } from "../../components/ChooseCategoryLink";
import { ChoosePrice } from "../../components/ChoosePrice";
import { CustomSelect } from "../../shared/DefaultBtnSelect";
import { ListProducts } from "../../components/ListProducts";
import { OptionValue } from "./OptionValue";
import { addOptions } from "../../store/shopSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { optionsSelector } from "../../store/selectors";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ILinks } from "../../shared/types/interfaces";
import styles from "./ShopPage.module.scss";

const categoryNames: { option: string; value: string; selected?: boolean }[] = [
  { option: "Все категории", value: "/shop", selected: false },
  { option: "Одежда", value: "/shop/cloth" },
  { option: "Аксессуары", value: "/shop/accessories" },
  { option: "Сувениры", value: "/shop/souvenirs" },
  { option: "Канцелярия", value: "/shop/office" },
];

interface OptionPrice {
  name: string;
  price: number;
}

interface SelectData {
  titleSelect: string;
  option: string[] | OptionPrice[];
  value: string;
  withIcon?: boolean;
}

const selectData: SelectData[] = [
  {
    titleSelect: "Цена",
    option: [
      { name: "min", price: 0 },
      { name: "max", price: 0 },
    ],
    value: "price",
  },
  { titleSelect: "Размер", option: ["S", "L", "M", "XL", "XXL"], value: "size" },
  {
    titleSelect: "Цвет",
    option: ["Пурпурный", "Жёлтый", "Оранжевый", "Чёрный", "Белый"],
    value: "color",
  },
  {
    titleSelect: "Сортировка",
    option: ["Популярные", "Новинки", "Сначала дешевые", "Сначала дорогие"], // {name:"Популярные",selected:false}
    value: "sort",
    withIcon: true,
  },
];

const links: ILinks[] = [
  { href: "/", title: "Главная" },
  { href: "/shop", title: "Каталог" },
];

export default function ShopPage() {
  const dispatch = useAppDispatch();
  const options = useAppSelector(optionsSelector);

  useEffect(() => {
    const newData = selectData.map((item) => {
      const newOption = item.option.map((subItem) => {
        if (typeof subItem === "string") {
          return { name: subItem, selected: false };
        }
        if (typeof subItem === "object") {
          return { ...subItem, selected: false };
        }
        return subItem;
      });
      return { ...item, option: newOption };
    });
    dispatch(addOptions(newData));
  }, []);

  /*   useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: "Abas@gmail.com",
      password: "testAbas",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect,
    };
    async function getLogin() {
      const login = await fetch("api/login", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

      console.log(login);
    }
    getLogin();
  }, []); */

  return (
    <main>
      <div className={styles.wrapper}>
        <Breadcrumbs links={links} activeTitle="Каталог" />
        <section>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Каталог</h1>
            <span className={styles.numberOfProducts}>67 товаров</span>
          </div>
          <div className={styles.btnsFilter}>
            <ChooseCategoryLink categoryNames={categoryNames} />
            <ChoosePrice />
            {options.map((item, index) => {
              const optionSelect = item.titleSelect;
              if (optionSelect === "Цена" || optionSelect === "Категории") {
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
