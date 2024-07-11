import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import useObserver from "../../shared/hooks/useObserver";
import { toggleSelect } from "../../store/shopSlice";
import { categoriesSelector } from "../../store/selectors";
import styles from "./ChooseCategoryLink.module.scss";

interface ChooseCategoryLinkProps {
  categoryNames: { option: string; value: string }[];
}

const ChooseCategoryLink: React.FC<ChooseCategoryLinkProps> = ({ categoryNames }) => {
  const [showFilters, setShowFilters] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const categories = useAppSelector(categoriesSelector);

  const { addListener, removeListener } = useObserver(ref, setShowFilters);

  useEffect(() => {
    if (showFilters) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, [showFilters]);

  const onOptionClick = (name) => {
    categories.forEach((item) => {
      dispatch(toggleSelect({ name, filterName: item.titleSelect }));
    });
  };

  return (
    <div ref={ref} className={styles.containerBtn}>
      <button
        className={`${styles.btnFilter} ${styles.categoryIcon}`}
        type="button"
        onClick={() => {
          setShowFilters(!showFilters);
        }}
        aria-label="select a category"
      >
        Категории
      </button>

      <ul className={styles.filterList}>
        {showFilters &&
          categoryNames.map((item, index) => (
            <li key={`${index + item.option}`} className={styles.listBtn}>
              <Link to={`${item.value}`} className={styles.listBtnItem} onClick={() => onOptionClick(item.option)}>
                {item.option}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default ChooseCategoryLink;
