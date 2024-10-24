import { Link, useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { categoriesSelector } from "../../store/selectors";
import { BreadcrumbsProfileProduct } from "./BreadcrumbsProfileProduct";
import styles from "./Breadcrumbs.module.scss";

export default function Breadcrumbs() {
  const categories = useAppSelector(categoriesSelector);
  const { id, itemId } = useParams();

  const location = useLocation();
  const currentUrl = location.pathname;

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
      {itemId && <BreadcrumbsProfileProduct />}
      {currentUrl === "/cart" && (
        <li>
          <Link className={`${styles.styleLinks} ${styles.currentLinks}`} to="#T">
            Корзина
          </Link>
        </li>
      )}

      {currentUrl === "/favorites" && (
        <li>
          <Link className={`${styles.styleLinks} ${styles.currentLinks}`} to="#T">
            Избранное
          </Link>
        </li>
      )}
    </ul>
  );
}
