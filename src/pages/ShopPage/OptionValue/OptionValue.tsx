import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { productSelector } from "../../../store/selectors";
import styles from "./OptionValue.module.scss";

export default function OptionValue() {
  const product = useAppSelector(productSelector);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const handleProduct = () => {
      if (product.size.length || product.color.length || product.sort.length > 0) {
        setFilter(true);
      } else {
        setFilter(false);
      }
    };
    handleProduct();
  }, [product]);

  const filterClose = () => {
    setFilter(false);
  };
  console.log(product);
  return (
    <div>
      <ul className={styles.filtersList}>
        {filter && (
          <li className={styles.filterListLstItem}>
            <span className={styles.itemText}>М</span>
            <button className={styles.itemClose} type="button" aria-label="close filter" onClick={filterClose} />
          </li>
        )}
      </ul>
    </div>
  );
}
