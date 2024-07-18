import { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import IconFavoriteProduct from "../../shared/assets/icons/ProfileProduct/IconFavoriteProduct";
import IconShareProduct from "../../shared/assets/icons/ProfileProduct/IconShareProduct";
import IconRemove from "../../shared/assets/icons/ProfileProduct/IconRemove";
import IconAdd from "../../shared/assets/icons/ProfileProduct/IconAdd";
import styles from "./ProfileProduct.module.scss";

export default function ProfileProduct() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

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
          <Link className={styles.styleLinks} to="/">
            Одежда(должен меняться)
          </Link>
        </li>
        <li>
          <Link className={`${styles.styleLinks} ${styles.currentLinks}`} to="#T">
            Название продукта
          </Link>
        </li>
      </ul>
      <section className={styles.container}>
        <div className={styles.profileContent}>
          <ul className={styles.productsList}>
            <li className={styles.product}>
              <img className={styles.productImg} src={`${process.env.PUBLIC_URL}/img/products/raincoat.png`} alt="" />
            </li>
            <li className={styles.product}>
              <img className={styles.productImg} src={`${process.env.PUBLIC_URL}/img/products/raincoat.png`} alt="" />
            </li>
            <li className={styles.product}>
              <img className={styles.productImg} src={`${process.env.PUBLIC_URL}/img/products/raincoat.png`} alt="" />
            </li>
            <li className={styles.product}>
              <img className={styles.productImg} src={`${process.env.PUBLIC_URL}/img/products/raincoat.png`} alt="" />
            </li>
          </ul>
          <div className={styles.productCard}>
            <h1 className={styles.productTitle}>Delego trucido</h1>
            <div className={styles.productActions}>
              <span className={styles.price}>299 ₽</span>
              <div className={styles.btnsActions}>
                <button className={styles.actionsBtn} type="button" aria-label="add to favorite">
                  <IconFavoriteProduct className={styles.colorBtn} />
                </button>
                <button className={styles.actionsBtn} type="button" aria-label="add to favorite">
                  <IconShareProduct className={styles.colorBtn} />
                </button>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.available}>Есть в наличии</span>
              <span className={styles.productCharacteristics}>Арт.: 4120</span>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.productCharacteristics}>Цвет:</span>
              <span className={styles.productPropertyName}>Черный</span>
            </div>
            <div className={styles.productInfo} style={{ marginBottom: "12px" }}>
              {/* TODO применил инлайн стили */}
              <span className={styles.productCharacteristics}>Размер:</span>
              <span className={styles.productPropertyName}>M</span>
            </div>
            <div className={styles.btnsSizeContainer}>
              <button className={styles.btnSize} type="button">
                S
              </button>
              <button className={styles.btnSize} type="button">
                L
              </button>
              <button className={`${styles.btnSize} ${styles.btnSizeActive}`} type="button">
                M
              </button>
              <button className={styles.btnSize} type="button">
                XL
              </button>
              <button className={styles.btnSize} type="button">
                XXL
              </button>
            </div>
            <button className={styles.sizeTable} type="button">
              Таблица размеров
            </button>
            <div className={styles.productContainer}>
              <span className={styles.productCharacteristics}>Количество:</span>

              <div className={styles.productContainerBtns}>
                <div className={styles.containerTotalProduct}>
                  {/* <span className={styles.totalProducts}>Всего в корзине: </span> */}
                  <button
                    className={styles.btnCountProducts}
                    type="button"
                    aria-label="Кнопка, уменьшающая количество товара в корзине"
                  >
                    <IconRemove className={styles.countAction} />
                  </button>
                  <span className={styles.countProduct}>1</span>
                  <button
                    className={styles.btnCountProducts}
                    type="button"
                    aria-label="Кнопка, увеличивающая количество товара в корзине"
                  >
                    <IconAdd className={styles.countAction} />
                  </button>
                </div>
                <button className={styles.addToCart} type="button">
                  В корзину
                </button>
              </div>
            </div>
            <div>
              <div className={styles.containerAccordion}>
                <Accordion
                  className={styles.customAccordion}
                  expanded={expanded === "panel1"}
                  onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
                >
                  <AccordionSummary
                    className={styles.customAccordionSummary}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Описание:
                  </AccordionSummary>
                  <AccordionDetails className={styles.customAccordionDetails}>
                    Что может быть лучше вместительного шоппера? Вместительный шоппер от Ростелекома! Аксессуар точно
                    найдет свое применение в повседневной жизни, ведь его можно брать куда угодно: на прогулку, в
                    магазин, и конечно же, на работу.
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className={styles.containerAccordion}>
                <Accordion
                  className={styles.customAccordion}
                  expanded={expanded === "panel2"}
                  onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
                >
                  <AccordionSummary
                    className={styles.customAccordionSummary}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Характеристики:
                  </AccordionSummary>
                  <AccordionDetails className={styles.customAccordionDetails}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
