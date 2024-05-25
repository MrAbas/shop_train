import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ChooseCategory.module.scss";

interface ChooseCategoryProps {
  categoryNames: { option: string; value: string }[];
}

const ChooseCategory: React.FC<ChooseCategoryProps> = ({ categoryNames }) => {
  const [showCategoryList, setShowCategoryList] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function observer(event: MouseEvent) {
      if (!ref.current.contains(event.target)) {
        setShowCategoryList(!showCategoryList);
      }
    }
    if (showCategoryList) {
      window.addEventListener("click", observer);
    }
    return () => {
      window.removeEventListener("click", observer);
    };
  }, [showCategoryList]);

  return (
    <div ref={ref} className={styles.containerBtn}>
      <button
        className={`${styles.btnFilter} ${styles.categoryIcon}`}
        type="button"
        onClick={() => {
          setShowCategoryList(!showCategoryList);
        }}
        aria-label="select a category"
      >
        Категории
      </button>

      <ul className={styles.filterList}>
        {showCategoryList &&
          categoryNames.map((item, index) => (
            <li key={`${index + item.option}`} className={styles.listBtn}>
              <Link to={`${item.value}`} className={styles.listBtnItem}>
                {item.option}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default ChooseCategory;
