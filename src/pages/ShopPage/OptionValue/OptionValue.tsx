import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { optionsSelector } from "../../../store/selectors";
import { optionDelete } from "../../../store/shopSlice";
import styles from "./OptionValue.module.scss";

export default function OptionValue() {
  const dispatch = useAppDispatch();
  const options = useAppSelector(optionsSelector);
  const [optionValue, setOptionValue] = useState([]);

  useEffect(() => {
    const newOption = [];
    options.map((item) => {
      item.option.forEach((el) => {
        if (el.selected === true) {
          newOption.push({ name: el.name, filterName: item.value });
        }
      });

      return item;
    });
    setOptionValue(newOption);
  }, [options]);

  return (
    <div>
      {/* TODO рендерится пустой див, нужно ли делать проверку ? */}
      {optionValue.length > 0 && (
        <ul className={styles.filtersList}>
          {optionValue.map((item, index) => {
            // TODO изменил момент с компонентом
            // if (item.name !== "min" && item.name !== "max") {
            const { filterName } = item;
            if (filterName !== "sort" && filterName !== "price" && filterName !== "cloth") {
              return (
                <li key={`${item.name + index}`} className={styles.filterListLstItem}>
                  <span style={{ marginRight: "10px" }}>
                    <span className={styles.itemText}>{item.name}</span>
                    <button
                      className={styles.itemClose}
                      type="button"
                      aria-label="close filter"
                      onClick={() => dispatch(optionDelete(item.name))}
                    />
                  </span>
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
    </div>
  );
}
