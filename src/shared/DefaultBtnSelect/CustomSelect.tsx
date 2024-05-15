import { useState } from "react";
import styles from "./CustomSelect.module.scss";

interface CustomSelectProps {
  selectData: { name: string; option: string[] }[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ selectData }) => {
  const [showFilters, setShowFilters] = useState(Array(selectData.length).fill(false));

  const toggleFilter = (index: number) => {
    const newShowFilters = [...showFilters];
    newShowFilters[index] = !newShowFilters[index];
    setShowFilters(newShowFilters);
  };

  return (
    <>
      {selectData.map((item, index) => (
        <div className={styles.wrapperBtnFilter}>
          <button
            className={`${styles.btnFilter} ${styles.categoryIcon}`}
            onClick={() => {
              toggleFilter(index);
            }}
            type="button"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            {item.name}
          </button>

          {showFilters[index] && (
            <ul className={styles.filterList}>
              {item.option.map((option, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={i} className={styles.listBtn}>
                  <button className={styles.listBtnItem} type="button" aria-label="">
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default CustomSelect;
