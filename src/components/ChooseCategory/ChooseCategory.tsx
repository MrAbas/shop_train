import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ChooseCategory.module.scss";

interface ChooseCategoryProps {
  categoryNames: { name: string; value: string }[];
}

const ChooseCategory: React.FC<ChooseCategoryProps> = ({ categoryNames }) => {
  const [showCategoryList, setShowCategoryList] = useState(false);

  return (
    <div className={styles.containerBtn}>
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
          categoryNames.map((option, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className={styles.listBtn}>
              <Link to={`${option.value}`} className={styles.listBtnItem} type="button">
                {/* добавить link в роутер на option.value  */}
                {option.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default ChooseCategory;
