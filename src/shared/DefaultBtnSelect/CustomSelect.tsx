import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import useObserver from "../hooks/useObserver";
import styles from "./CustomSelect.module.scss";

interface CustomSelectProps {
  selectData: { name: string; option: string[] };
}

const cx = classNames.bind(styles);

const CustomSelect: React.FC<CustomSelectProps> = ({ selectData }) => {
  const ref = useRef(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selected, setSelected] = useState([]);
  const toggleFilter = () => {
    setShowFilters(!showFilters);
  };

  useObserver(ref, showFilters, setShowFilters); // TODO кастомный хук

  const [option, setOption] = useState([]);
  useEffect(() => {
    const newOption = selectData.option.map((item) => ({
      name: item,
      selected: false,
    }));
    setOption(newOption);
  }, [selectData]);

  useEffect(() => {
    const selectedItems = option.map((item: { name: string; selected: boolean }) => {
      console.log(item.name);
      if (item.selected === true) {
        return item.name;
      }
    });

    setSelected(selectedItems);
  }, [option]);
  const className = cx({
    innerBtnFilter: showFilters,
  });
  console.log(showFilters);

  const onOptionClick = (name: string) => {
    const newOption = option.map((item) => {
      if (item.name === name) {
        return {
          name: item.name,
          selected: !item.selected,
        };
      }
      return item;
    });
    setOption(newOption);
  };
  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={className}>
        <button className={`${styles.btnFilter}`} onClick={toggleFilter} type="button">
          <div>
            <span>{selectData.name}</span>
            <span>{selected.map((item) => item)}</span>
          </div>
        </button>
      </div>
      {showFilters && (
        <ul className={styles.filterList}>
          {option.map((item, i) => (
            <li key={`${i + item.name}`} className={styles.listBtn}>
              <button
                onClick={() => {
                  onOptionClick(item.name);
                }}
                className={styles.listBtnItem}
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

export default CustomSelect;
