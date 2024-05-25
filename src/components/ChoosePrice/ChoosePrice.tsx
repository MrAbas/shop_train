import { useEffect, useRef, useState } from "react";
import styles from "./ChoosePrice.module.scss";

const ChoosePrice = () => {
  const [filterList, setFilterList] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function observer(event: MouseEvent) {
      if (!ref.current.contains(event.target)) {
        setFilterList(false);
      }
    }
    if (filterList) {
      window.addEventListener("click", observer);
    }

    return () => {
      window.removeEventListener("click", observer);
    };
  }, [filterList]);

  return (
    <div ref={ref} className={styles.containerBtn}>
      <button
        className={`${styles.btnFilter}`}
        type="button"
        onClick={() => {
          setFilterList(!filterList);
        }}
        aria-label="select a category"
      >
        Цена
      </button>

      {filterList && (
        <div className={styles.priceFiltering}>
          <div className={styles.priceFilteringContainer}>
            <div className={styles.labelContainer}>
              <label className={styles.label}>
                <span>От</span>
                <input type="number" placeholder="130 руб." />
              </label>
              <label className={styles.label}>
                <span>До</span>
                <input type="number" placeholder="6 500 руб." />
              </label>
            </div>
            <button className={styles.filterBtn} type="button">
              Готово
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ChoosePrice;
