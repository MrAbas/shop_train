import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { optionsSelector, productSelector } from "../../../store/selectors";
import styles from "./OptionValue.module.scss";

export default function OptionValue() {
  const product = useAppSelector(productSelector);
  const options = useAppSelector(optionsSelector);

  // const [optionValueShow, setOptionValueShow] = useState(false);
  const [optionValue, setOptionValue] = useState([]);

  useEffect(() => {
    // setOptionValue((prevOptionValue) => [...prevOptionValue, "s", "h", "l"]);
    // setOptionValue(["s", "h", "l"]);

    /* options.map((item) => {
      if (item.titleSelect === "Размер") {
        item.option.map((el) => {
          if (el.selected === true) {
            optionValue.push(el.name);
            return optionValue;
          }
        });
        // item.option.map((el) => el.selected);
      }
    }); */
    // console.log(setOptionValue([...optionValue, "s", "h", "l"]));

    options.map((item) => {
      if (item.titleSelect === "Размер") {
        item.option.forEach((el) => {
          if (el.selected === true) {
            // setOptionValue([...optionValue, el.name]);
            console.log(el.name);
          }
        });
      }
      return item;
    });
    console.log(optionValue);
  }, [options]);

  /* const filterDelete = (name: string) => {
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
    // dispatch(addFilter({ data: newOption, name: "size" }));
  }; */

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
                  // onClick={() => filterDelete(item.name)}
                />
              </span>
            ))}
          </li>
        </ul>
      )}
    </div>
  );
}
