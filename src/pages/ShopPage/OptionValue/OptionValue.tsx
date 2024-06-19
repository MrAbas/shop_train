import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { productSelector } from "../../../store/selectors";
import { addFilter } from "../../../store/shopSlice";
import styles from "./OptionValue.module.scss";

export default function OptionValue() {
  const product = useAppSelector(productSelector);
  const dispatch = useAppDispatch();

  const filterDelete = (name: string) => {
    const newOption = product.size.map((item) => {
      if (item.name === name) {
        // TODO вынести в редакс
        return {
          name: item.name,
          selected: !item.selected,
        };
      }

      return item;
    });

    dispatch(addFilter({ data: newOption, name: "size" }));
  };

  return (
    <div>
      {product.size.length > 0 && (
        <ul className={styles.filtersList}>
          <li className={styles.filterListLstItem}>
            {product.size.map((item) => (
              <span style={{ marginRight: "10px" }}>
                <span className={styles.itemText}>{item.name}</span>
                <button
                  className={styles.itemClose}
                  type="button"
                  aria-label="close filter"
                  onClick={() => filterDelete(item.name)}
                />
              </span>
            ))}
          </li>
        </ul>
      )}
    </div>
  );
}
