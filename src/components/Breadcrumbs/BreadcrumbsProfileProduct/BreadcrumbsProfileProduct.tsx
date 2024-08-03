import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { categoriesSelector } from "../../../store/selectors";
import indexData from "../../ListProducts/indexData.json";
import styles from "../Breadcrumbs.module.scss";

export default function BreadcrumbsProfileProduct() {
  const categories = useAppSelector(categoriesSelector);
  const { id, itemId } = useParams();

  const filteredItem = indexData.items.find((item) => item.id === itemId);
  const nameLink = filteredItem ? filteredItem.title : null;

  return (
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
  );
}
