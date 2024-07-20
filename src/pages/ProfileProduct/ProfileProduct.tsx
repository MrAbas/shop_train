import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import IconFavoriteProduct from "../../shared/assets/icons/ProfileProduct/IconFavoriteProduct";
import IconShareProduct from "../../shared/assets/icons/ProfileProduct/IconShareProduct";
import IconRemove from "../../shared/assets/icons/ProfileProduct/IconRemove";
import IconAdd from "../../shared/assets/icons/ProfileProduct/IconAdd";
import IconCross from "../../shared/assets/icons/ProfileProduct/IconCross";
import IconPlus from "../../shared/assets/icons/ProfileProduct/IconPlus";
import { translate } from "../../shared/utils/translate";
import indexData from "../../components/ListProducts/indexData.json";
import { ModalSizeTable } from "./ModalSizeTable";
import { ModalShareProduct } from "./ModalShareProduct";
import styles from "./ProfileProduct.module.scss";

export default function ProfileProduct() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { id, itemId } = useParams();

  const [openModalSizeTable, setOpenModalSizeTable] = useState(false);
  const [openModalShare, setOpenModalShare] = useState(false);

  const handleOpenModalSizeTable = () => setOpenModalSizeTable(true);
  const handleOpenModalShareProduct = () => setOpenModalShare(true);

  const filteredItem = indexData.items.find((item) => item.id === itemId);
  const { title, image, price, article, available, description, characteristics } = filteredItem;
  const { type, color, collar, silhouette, print, decor, composition, season, collection } = characteristics;

  // console.log(filteredItem);

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
          <Link className={styles.styleLinks} to={`/shop/${id}`}>
            {translate(id)}
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
              <img className={styles.productImg} src={`${process.env.PUBLIC_URL}${image}`} alt="" />
            </li>
            <li className={styles.product}>
              <img className={styles.productImg} src={`${process.env.PUBLIC_URL}${image}`} alt="" />
            </li>
            <li className={styles.product}>
              <img className={styles.productImg} src={`${process.env.PUBLIC_URL}${image}`} alt="" />
            </li>
            <li className={styles.product}>
              <img className={styles.productImg} src={`${process.env.PUBLIC_URL}${image}`} alt="" />
            </li>
          </ul>
          <div className={styles.productCard}>
            <h1 className={styles.productTitle}>{title}</h1>
            <div className={styles.productActions}>
              <span className={styles.price}>
                {price}
                <span> ₽</span>
              </span>
              <div className={styles.btnsActions}>
                <button className={styles.actionsBtn} type="button" aria-label="add to favorite">
                  <IconFavoriteProduct className={styles.colorBtn} />
                </button>
                <button
                  className={styles.actionsBtn}
                  type="button"
                  aria-label="share product"
                  onClick={handleOpenModalShareProduct}
                >
                  <IconShareProduct className={styles.colorBtn} />
                  <ModalShareProduct open={openModalShare} setOpen={setOpenModalShare} />
                </button>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.available}>{available}</span>
              <span className={styles.productCharacteristics}>
                Арт.:
                <span> </span>
                <span>{article}</span>
              </span>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.productCharacteristics}>Цвет:</span>
              <span className={styles.productPropertyName}>{translate(color)}</span>
            </div>
            <div className={styles.productInfo} style={{ marginBottom: "12px" }}>
              <span className={styles.productCharacteristics}>Размер:</span>
              <span className={styles.productPropertyName}>M</span>
              {/* TODO брать с LocalStorage  */}
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
            <button className={styles.sizeTable} type="button" onClick={handleOpenModalSizeTable}>
              Таблица размеров
            </button>

            <ModalSizeTable open={openModalSizeTable} setOpen={setOpenModalSizeTable} />

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
                    className={`${styles.customAccordionElements} ${styles.customAccordionSummary}`}
                    expandIcon={expanded === "panel1" ? <IconCross /> : <IconPlus />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Описание:
                  </AccordionSummary>
                  <AccordionDetails className={`${styles.customAccordionElements} ${styles.customAccordionDetails}`}>
                    {description}
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
                    className={`${styles.customAccordionElements} ${styles.customAccordionSummary}`}
                    expandIcon={expanded === "panel2" ? <IconCross /> : <IconPlus />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Характеристики:
                  </AccordionSummary>
                  <AccordionDetails className={`${styles.customAccordionElements} ${styles.customAccordionDetails}`}>
                    <ul className={styles.listCharacteristics}>
                      <li>
                        Type:
                        <span>{type}</span>
                      </li>
                      <li>
                        Color:
                        <span>{color}</span>
                      </li>
                      <li>
                        Collar:
                        <span>{collar}</span>
                      </li>
                      <li>
                        Silhouette:
                        <span>{silhouette}</span>
                      </li>
                      <li>
                        Print:
                        <span>{print}</span>
                      </li>
                      <li>
                        Decor:
                        <span>{decor}</span>
                      </li>
                      <li>
                        Composition:
                        <span>{composition}</span>
                      </li>
                      <li>Features:</li>
                      <li>FabricType:</li>
                      <li>Sleeve:</li>
                      <li>Clasp:</li>
                      <li>
                        Season:
                        <span>{season}</span>
                      </li>
                      <li>
                        Collection:
                        <span>{collection}</span>
                      </li>
                    </ul>
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
