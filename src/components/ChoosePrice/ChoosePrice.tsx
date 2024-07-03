import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useObserver from "../../shared/hooks/useObserver";
import { addFilteredPrice } from "../../store/shopSlice";
import styles from "./ChoosePrice.module.scss";

const ChoosePrice = () => {
  const dispatch = useDispatch();
  const [showFilters, setShowFilters] = useState(false);
  const ref = useRef(null);
  const btnFilterName = useRef(null);
  const minRef = useRef(null);
  const maxRef = useRef(null);
  const { addListener, removeListener } = useObserver(ref, setShowFilters);

  useEffect(() => {
    if (showFilters) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, [showFilters]);

  const handleFilterClick = () => {
    const filterName = btnFilterName.current.innerText;
    const min = minRef.current.value;
    const max = maxRef.current.value;
    dispatch(addFilteredPrice({ filterName, min, max }));
  };

  return (
    <div ref={ref} className={styles.containerBtn}>
      <button
        ref={btnFilterName}
        className={`${styles.btnFilter}`}
        type="button"
        onClick={() => {
          setShowFilters(!showFilters);
        }}
        aria-label="select a category"
      >
        Цена
      </button>

      {showFilters && (
        <div className={styles.priceFiltering}>
          <div className={styles.priceFilteringContainer}>
            <div className={styles.labelContainer}>
              <label className={styles.label}>
                <span>От</span>
                <input ref={minRef} type="number" placeholder="130 руб." />
              </label>
              <label className={styles.label}>
                <span>До</span>
                <input ref={maxRef} type="number" placeholder="6 500 руб." />
              </label>
            </div>
            <button className={styles.filterBtn} type="button" onClick={handleFilterClick}>
              Готово
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ChoosePrice;
