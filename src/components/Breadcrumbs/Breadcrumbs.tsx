import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { categoriesSelector } from "../../store/selectors";
import indexData from "../ListProducts/indexData.json";
import styles from "./Breadcrumbs.module.scss";

export default function Breadcrumbs() {
  const categories = useAppSelector(categoriesSelector);
  const { id, itemId } = useParams();

  const filteredItem = indexData.items.find((item) => item.id === itemId);
  const nameLink = filteredItem ? filteredItem.title : null;

  return (
    <ul className={styles.links}>
      <li>
        <Link className={styles.styleLinks} to="/">
          Главная
        </Link>
      </li>
      {!id && (
        <li>
          <Link className={`${styles.styleLinks} ${styles.currentLinks}`} to="#T">
            Каталог
          </Link>
        </li>
      )}
      {id && !itemId && (
        <>
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
        </>
      )}
      {itemId && (
        <>
          <li>
            <Link className={`${styles.styleLinks}`} to="/shop">
              Каталог
            </Link>
          </li>
          <li>
            <Link className={`${styles.styleLinks}`} to={`/shop/${id}`}>
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
    </ul>
  );
}
