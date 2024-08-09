import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleSelectCategories } from "../../store/shopSlice";
import useObserver from "../../shared/hooks/useObserver";
import { categoriesSelector } from "../../store/selectors";
import styles from "./ChooseCategory.module.scss";

const cx = classNames.bind(styles);

const ChooseCategory = () => {
  const [options, setOptions] = useState([]);
  const [classActive, setClassActive] = useState(false);
  const categories = useAppSelector(categoriesSelector);
  const { id } = useParams();
  const { titleSelect } = categories;

  useEffect(() => {
    if (categories[id]?.option.length) {
      setOptions(categories[id].option);
    }

    setClassActive(categories[id]?.option.some((item) => item.selected));
  }, [categories]);

  const ref = useRef(null);
  const dispatch = useAppDispatch();
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = () => {
    setShowFilters(!showFilters);
  };
  const { addListener, removeListener } = useObserver(ref, setShowFilters, () => {}); // хук для открытия и закрытия filterList

  // открывает и закрывает filterList
  useEffect(() => {
    if (showFilters) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, [showFilters]);

  const onOptionClick = (filterName: string) => {
    dispatch(toggleSelectCategories({ name: id, filterName }));
  };

  const btnFilter = cx({
    btnFilter: true,
    innerBtnFilter: classActive,
  });

  return (
    <div ref={ref} className={styles.wrapper}>
      <button className={`${btnFilter}`} onClick={toggleFilter} type="button">
        <span>{titleSelect}</span>
        <span>
          {options.map((item) => {
            if (item.selected) {
              return item.name;
            }
            return null;
          })}
        </span>
      </button>
      {showFilters && (
        <ul className={styles.filterList}>
          {options.map((item, i) => (
            <li key={`${i + item.name}`} className={`${cx({ backgroundBtnFilter: item.selected })}`}>
              <button
                className={`${styles.listBtnItem}`}
                onClick={() => {
                  onOptionClick(item.name);
                }}
                type="button"
                aria-label=""
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChooseCategory;
