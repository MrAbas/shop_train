import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import useObserver from "../../shared/hooks/useObserver";
import { addFilteredPrice } from "../../store/shopSlice";
import { optionsSelector } from "../../store/selectors";
import styles from "./ChoosePrice.module.scss";

const cx = classNames.bind(styles);

const ChoosePrice = () => {
  const dispatch = useDispatch();
  const options = useAppSelector(optionsSelector);
  const [showFilters, setShowFilters] = useState(false);
  const ref = useRef(null);
  const btnFilterName = useRef(null);
  const minRef = useRef(null);
  const maxRef = useRef(null);
  const { addListener, removeListener } = useObserver(ref, setShowFilters);
  const [disableBtn, setDisableBtn] = useState(true);

  useEffect(() => {
    if (showFilters) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, [showFilters]);

  const handleFilterClick = () => {
    const filterName = "Цена";
    const min = minRef.current.value;
    const max = maxRef.current.value;
    dispatch(addFilteredPrice({ filterName, min, max }));
    setShowFilters(!showFilters);
  };

  const [classActive, setClassActive] = useState(false);
  useEffect(() => {
    options.forEach((item) => {
      if (item.titleSelect === "Цена") {
        const optionPrice = item.option;
        optionPrice.forEach((el) => {
          if ((el.name === "min" && el.price > 0) || (el.name === "max" && el.price > 0)) {
            setClassActive(true);
          }
        });
      }
    });
  }, [options]);

  const handleInputChange = () => {
    const min = minRef.current.value;
    const max = maxRef.current.value;

    if (min !== "" && min >= 0 && max > 0) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const btnFilter = cx({
    btnFilter: true,
    innerBtnFilter: classActive,
  });

  return (
    <div ref={ref} className={styles.containerBtn}>
      <button
        ref={btnFilterName}
        className={`${btnFilter}`}
        type="button"
        onClick={() => {
          setShowFilters(!showFilters);
        }}
        aria-label="select a category"
      >
        <span>Цена</span>
        <span>
          {options.map((item) => {
            if (item.titleSelect === "Цена") {
              return item.option.map((el) => {
                if (el.selected) {
                  if (el.name === "min") {
                    return `От ${el.price}₽ `;
                  }
                  if (el.name === "max") {
                    return `До ${el.price}₽`;
                  }
                }
                return null;
              });
            }
            return null;
          })}
        </span>
      </button>

      {showFilters && (
        <div className={styles.priceFiltering}>
          <div className={styles.priceFilteringContainer}>
            <div className={styles.labelContainer}>
              <label className={styles.label}>
                <span>От</span>
                <input ref={minRef} type="number" placeholder="130 руб." onChange={handleInputChange} />
              </label>
              <label className={styles.label}>
                <span>До</span>
                <input ref={maxRef} type="number" placeholder="6 500 руб." onChange={handleInputChange} />
              </label>
            </div>
            <button className={styles.filterBtn} type="button" onClick={handleFilterClick} disabled={disableBtn}>
              Готово
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ChoosePrice;
