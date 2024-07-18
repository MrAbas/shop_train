import { Link } from "react-router-dom";
import styles from "./Product.module.scss";

export default function Product({ id, image, title, available, article, price }) {
  return (
    <li className={styles.productContainer} key={id}>
      <Link
        className={styles.productLinkImg}
        to={id}
        aria-label="product"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.productItem}>
        <h3 className={styles.productTitle}>{title}</h3>
        <div className={styles.productItemInner}>
          <span className={styles.productPresence}>{available}</span>
          <span className={styles.productArticle}>{`Арт.: ${article}`}</span>
        </div>
        <span className={styles.productPrice}>{`${price} ₽`}</span>
      </div>
    </li>
  );
}
