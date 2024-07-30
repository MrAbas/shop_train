import { Link, useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { categoriesSelector } from "../../store/selectors";
import indexData from "../ListProducts/indexData.json";
import styles from "./Breadcrumbs.module.scss";

export default function Breadcrumbs() {
  const categories = useAppSelector(categoriesSelector);
  const { id, itemId } = useParams();

  const location = useLocation();
  const currentUrl = location.pathname;

  const filteredItem = indexData.items.find((item) => item.id === itemId);
  const nameLink = filteredItem ? filteredItem.title : null;

  return (
    <ul className={styles.links}>
      <li>
        <Link className={`${styles.styleLinks} ${styles.linksColor}`} to="/">
          Главная
        </Link>
      </li>
      {currentUrl === "/shop" && (
        <li>
          <Link className={`${styles.styleLinks} ${styles.currentLinks}`} to="#T">
            Каталог
          </Link>
        </li>
      )}
      {id && !itemId && (
        <>
          <li>
            <Link className={`${styles.styleLinks} ${styles.linksColor}`} to="/shop">
              Каталог
            </Link>
          </li>
          <li>
            <Link className={`${styles.styleLinks} ${styles.currentLinks}`} to="#T">
              {categories[id]?.value}
            </Link>
          </li>
        </>
      )}
      {itemId && (
        <>
          <li>
            <Link className={`${styles.styleLinks} ${styles.linksColor}`} to="/shop">
              Каталог
            </Link>
          </li>
          <li>
            <Link className={`${styles.styleLinks} ${styles.linksColor}`} to={`/shop/${id}`}>
              {categories[id]?.value}
            </Link>
          </li>
          <li>
            <Link className={`${styles.styleLinks} ${styles.currentLinks}`} to="#T">
              {nameLink}
            </Link>
          </li>
        </>
      )}
      {currentUrl === "/cart" && (
        <li>
          <Link className={`${styles.styleLinks} ${styles.currentLinks}`} to="#T">
            Корзина
          </Link>
        </li>
      )}
    </ul>
  );
}
