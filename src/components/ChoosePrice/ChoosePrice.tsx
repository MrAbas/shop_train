import { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";
import useObserver from "../../shared/hooks/useObserver";
import styles from "./ChoosePrice.module.scss";

const ChoosePrice = () => {
  // const dispatch = useDispatch();
  const [showFilters, setShowFilters] = useState(false);
  const ref = useRef(null);
  const btnFilterName = useRef(null);
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
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
    const fromValue = fromInputRef.current.value;
    const toValue = toInputRef.current.value;
    const btnFilterInner = btnFilterName.current.innerText;
    // console.log(fromValue);
    // console.log(toValue);
    console.log(btnFilterInner);
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
                <input ref={fromInputRef} type="number" placeholder="130 руб." />
              </label>
              <label className={styles.label}>
                <span>До</span>
                <input ref={toInputRef} type="number" placeholder="6 500 руб." />
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
