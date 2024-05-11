import { useState } from "react";
import BtnSelect from "./BtnSelect/BtnSelect";
import styles from "./CustomSelect.module.scss";

interface CustomSelectProps {
  btnNames: string[];
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
// TODO ошибки вызывал EsLint
const CustomSelect: React.FC<CustomSelectProps> = ({ btnNames }) => {€
  const [showFilterList, setShowFilterList] = useState(false);
  const handleBtnClick = () => {
    setShowFilterList(!showFilterList);
  };
  return (
    <>
      <div className={styles.directoryFiltering}>
        {btnNames.map((btnTitle, index) => (
          <BtnSelect
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            btnTitle={btnTitle}
            // eslint-disable-next-line no-nested-ternary
            className={`${styles.btnFilter} ${index === 0 ? styles.categoryIcon : index === 4 ? styles.sortIcon : ""}`}
            onClick={handleBtnClick}
          />
        ))}
      </div>
      {showFilterList && (
        <ul className={styles.filterList}>
          <li className={styles.listBtn}>
            <button className={styles.listBtnItem} type="button" aria-label="">
              Все категории
            </button>
          </li>
          <li className={styles.listBtn}>
            <button className={styles.listBtnItem} type="button" aria-label="">
              Одежда
            </button>
          </li>
          <li className={styles.listBtn}>
            <button className={styles.listBtnItem} type="button" aria-label="">
              Аксессуары
            </button>
          </li>
          <li className={styles.listBtn}>
            <button className={styles.listBtnItem} type="button" aria-label="">
              Сувениры
            </button>
          </li>
          <li className={styles.listBtn}>
            <button className={styles.listBtnItem} type="button" aria-label="">
              Канцелярия
            </button>
          </li>
        </ul>
      )}
    </>
  );
};
export default CustomSelect;
