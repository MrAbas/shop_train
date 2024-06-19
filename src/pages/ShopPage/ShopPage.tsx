import { useEffect } from "react";
import { ChooseCategory } from "../../components/ChooseCategory";
import { ChoosePrice } from "../../components/ChoosePrice";
import { CustomSelect } from "../../shared/DefaultBtnSelect";
import { ListProducts } from "../../components/ListProducts";
import { OptionValue } from "./OptionValue";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addOptions } from "../../store/shopSlice";
import styles from "./ShopPage.module.scss";
import { optionsSelector } from "../../store/selectors";

const categoryNames: { option: string; value: string }[] = [
  { option: "Все категории", value: "/shop" },
  { option: "Одежда", value: "/shop/cloth" },
  { option: "Аксессуары", value: "/shop/accessories'" },
  { option: "Сувениры", value: "/shop/souvenirs" },
  { option: "Канцелярия", value: "/shop/office" },
];

const selectData: { name: string; option: string[]; value: string; withIcon?: boolean }[] = [
  { name: "Размер", option: ["S", "L", "M", "XL", "XXL"], value: "size" },
  {
    name: "Цвет",
    option: ["Пурпурный", "Жёлтый", "Оранжевый", "Чёрный", "Белый"],
    value: "color",
  },
  {
    name: "Сортировка",
    option: ["Популярные", "Новинки", "Сначала дешевые", "Сначала дорогие"], // {name:"Популярные",selected:false}
    value: "sort",
    withIcon: true,
  },
];

export default function ShopPage() {
  const dispatch = useAppDispatch();
  const options = useAppSelector(optionsSelector);
  console.log(options);
  // data из редакса вместо selectData
  useEffect(() => {
    const newData = selectData.map((item) => {
      const newOption = item.option.map((subItem) => ({ name: subItem, selected: false }));
      return newOption;
    });
    dispatch(addOptions(newData));
  }, []);

  useEffect(() => {
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
  }, []);

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
          <h1 className={styles.title}>Каталог</h1>
          <span className={styles.countProduct}>67 товаров</span>
        </div>
        <div className={styles.btnsFilter}>
          <ChooseCategory categoryNames={categoryNames} />
          <ChoosePrice />
          {/* TODO link добавить или заменить кнопки */}
          {selectData.map((filter, index) => (
            <CustomSelect key={`${index + filter.name}`} selectData={filter} />
          ))}
        </div>
        <OptionValue />
        <ListProducts />
      </div>
    </section>
  );
}
