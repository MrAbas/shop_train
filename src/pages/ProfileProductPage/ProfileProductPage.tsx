import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { toast } from "react-toastify";
import { useAppSelector } from "../../store/hooks";
import { modalCartSelector } from "../../store/selectors";
import useObserverModalCart from "../../shared/hooks/useObserverModalCart";
import IconFavoriteProduct from "../../shared/assets/icons/ProfileProduct/IconFavoriteProduct";
import IconShareProduct from "../../shared/assets/icons/ProfileProduct/IconShareProduct";
import IconRemove from "../../shared/assets/icons/IconRemove";
import IconAdd from "../../shared/assets/icons/IconAdd";
import IconCross from "../../shared/assets/icons/ProfileProduct/IconCross";
import IconPlus from "../../shared/assets/icons/ProfileProduct/IconPlus";
import { translate } from "../../shared/utils/translate";
import indexData from "../../components/ListProducts/indexData.json";
import { ModalSizeTable } from "./ModalSizeTable";
import { ModalShareProduct } from "./ModalShareProduct";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import styles from "./ProfileProductPage.module.scss";

const cx = classNames.bind(styles);

export default function ProfileProductPage() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const modalCart = useAppSelector(modalCartSelector);
  const { itemId } = useParams();
  const ref = useRef();

  const [openModalSizeTable, setOpenModalSizeTable] = useState(false);
  const [openModalShare, setOpenModalShare] = useState(false);
  const [chosenSize, setChosenSize] = useState(null);
  // const [showCountProduct, setShowCountProduct] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(1);

  const filteredItem = indexData.items.find((item) => item.id === itemId);
  const { title, image, price, article, available, description, characteristics, sizes, category, inStock } =
    filteredItem;
  const { type, color, collar, silhouette, print, decor, composition, season, collection } = characteristics;

  /* useEffect(() => {
    if (localStorage.cart) {
      setShowCountProduct(true);
    }
  }, []); */

  useEffect(() => {
    if (localStorage.cart) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const existingItem = cart.find((item) => item.itemId === itemId && item.size === chosenSize);

      if (existingItem) {
        setNumberOfProducts(existingItem.count);
      } else {
        setNumberOfProducts(1);
      }
    }
  }, [chosenSize]);

  const { addListener, removeListener } = useObserverModalCart(ref, modalCart); // хук для открытия и закрытия ModalCart

  useEffect(() => {
    if (modalCart) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, [modalCart]);

  const handleClick = (currentSize) => {
    setChosenSize(currentSize);
  };

  const handleOpenModalSizeTable = () => setOpenModalSizeTable(true);
  const handleOpenModalShareProduct = () => setOpenModalShare(true);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  const sizesKeys = Object.keys(sizes);
  const missingProducts = sizesKeys.filter((key) => !sizes[key]);

  const productInfo = [
    { category, color, count: numberOfProducts, image, inStock, name: title, price, itemId, size: chosenSize },
  ];

  const setLocalStorage = () => {
    if (!localStorage.cart) {
      localStorage.setItem("cart", JSON.stringify(productInfo));
    } else {
      let cart = JSON.parse(localStorage.getItem("cart"));
      const exists = cart.find((item) => item.itemId === itemId && item.size === chosenSize);

      if (exists) {
        cart = cart.map((item) => {
          if (item.itemId === itemId && item.size === chosenSize) {
            item.count = numberOfProducts;
          }
          return item;
        });
      } else {
        cart.push({
          category,
          color,
          count: numberOfProducts,
          image,
          inStock,
          name: title,
          price,
          itemId,
          size: chosenSize,
        });
      }

      // TODO брать numberOfProducts с LS

      localStorage.cart = JSON.stringify(cart);
    }
  };

  const increment = () => {
    setNumberOfProducts(numberOfProducts + 1);
  };

  const decrement = () => {
    if (numberOfProducts > 1) {
      setNumberOfProducts(numberOfProducts - 1);
    }
  };

  const notify = () => {
    toast("Default Notification !");
  };
  // TODO изменить 247 строку
  return (
    <main ref={ref}>
      <div className={styles.wrapper}>
        <Breadcrumbs />
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
                  </button>
                  <ModalShareProduct open={openModalShare} setOpen={setOpenModalShare} />
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
                <span className={styles.productPropertyName}>{chosenSize}</span>
              </div>
              <div className={styles.btnsSizeContainer}>
                {Object.keys(sizes).map((size) => (
                  <button
                    key={size}
                    className={cx({
                      btnSize: true,
                      btnSizeDisabled: missingProducts.includes(size.toLowerCase()),
                      btnSizeActive: chosenSize === size.toUpperCase(),
                    })}
                    type="button"
                    onClick={() => handleClick(size.toUpperCase())}
                    disabled={missingProducts.includes(size.toLowerCase())}
                  >
                    {size.toUpperCase()}
                  </button>
                ))}
              </div>
              <button className={styles.sizeTable} type="button" onClick={handleOpenModalSizeTable}>
                Таблица размеров
              </button>

              <ModalSizeTable open={openModalSizeTable} setOpen={setOpenModalSizeTable} />

              <div className={styles.productContainer}>
                <span className={styles.productCharacteristics}>Количество:</span>

                <div className={styles.productContainerBtns}>
                  {chosenSize ? (
                    <div className={styles.containerTotalProduct}>
                      <button
                        className={cx({
                          btnNumberOfProducts: true,
                          btnNumberOfProductsDisabled: numberOfProducts === 1,
                        })}
                        type="button"
                        aria-label="Кнопка, уменьшающая количество товара в корзине"
                        onClick={decrement}
                      >
                        <IconRemove />
                      </button>
                      <span className={styles.numberOfProducts}>{numberOfProducts}</span>
                      <button
                        className={styles.btnNumberOfProducts}
                        type="button"
                        aria-label="Кнопка, увеличивающая количество товара в корзине"
                      >
                        <IconAdd onClick={increment} />
                      </button>
                    </div>
                  ) : (
                    <div className={styles.containerTotalProduct}>
                      <span className={styles.totalProducts}>Всего в корзине: 0</span>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setLocalStorage();
                      notify();
                    }}
                    className={styles.addToCart}
                    type="button"
                  >
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
                          <span> </span>
                          <span>{type}</span>
                        </li>
                        <li>
                          Color:
                          <span> </span>
                          <span>{color}</span>
                        </li>
                        <li>
                          Collar:
                          <span> </span>
                          <span>{collar}</span>
                        </li>
                        <li>
                          Silhouette:
                          <span> </span>
                          <span>{silhouette}</span>
                        </li>
                        <li>
                          Print:
                          <span> </span>
                          <span>{print}</span>
                        </li>
                        <li>
                          Decor:
                          <span> </span>
                          <span>{decor}</span>
                        </li>
                        <li>
                          Composition:
                          <span> </span>
                          <span>{composition}</span>
                        </li>
                        <li>Features:</li>
                        <li>FabricType:</li>
                        <li>Sleeve:</li>
                        <li>Clasp:</li>
                        <li>
                          Season:
                          <span> </span>
                          <span>{season}</span>
                        </li>
                        <li>
                          Collection:
                          <span> </span>
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
      </div>
    </main>
  );
}
