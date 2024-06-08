import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import useObserver from "../hooks/useObserver";
import { useAppDispatch } from "../../store/hooks";
import { addFilter } from "../../store/shopSlice";
import styles from "./CustomSelect.module.scss";

interface CustomSelectProps {
  selectData: { name: string; option: string[]; test: string };
}

const cx = classNames.bind(styles);

const CustomSelect: React.FC<CustomSelectProps> = ({ selectData }) => {
  const ref = useRef(null);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilter = () => {
    setShowFilters(!showFilters);
  };
  const { addListener, removeListener } = useObserver(ref, setShowFilters); // хук открывает и закрывает filterList

  // открывает и закрывает filterList
  useEffect(() => {
    if (showFilters) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, [showFilters]);

  const [option, setOption] = useState([]);
  useEffect(() => {
    const newOption = selectData.option.map((item) => ({
      name: item,
      selected: false,
    }));
    setOption(newOption);
  }, [selectData]);

  const [classActive, setClassActive] = useState(false);
  // const [bgActive, setBgActive] = useState(false);

  const onOptionClick = (name: string) => {
    // TODO вызов redux функции с добавлением фильтра
    // {color:["розовый,красный"], size:["sm","l"]}

    const newOption = option.map((item) => {
      if (item.name === name) {
        // setBgActive(!bgActive);
        dispatch(addFilter(item.name));

        return {
          name: item.name,
          selected: !item.selected,
        };
      }

      return item;
    });

    setClassActive(newOption.some((item) => item.selected));
    setOption(newOption);
  };

  useEffect(() => {
    const filteredOptions = option.filter((item) => item.selected === true);
    const selectedItems = filteredOptions.map((item) => item.name);
    console.log(selectedItems);
    setSelected(selectedItems);
  }, [option]);

  const innerBtnFilter = cx({
    innerBtnFilter: classActive,
  });

  return (
    <div ref={ref} className={styles.wrapper}>
      <button className={`${innerBtnFilter} ${styles.btnFilter}`} onClick={toggleFilter} type="button">
        <span>{selectData.name}</span>
        <span>{selected.map((item) => item)}</span>
      </button>
      {showFilters && (
        <ul className={styles.filterList}>
          {option.map((item, i) => (
            <li
              key={`${i + item.name}`}
              className={`${styles.listBtn} ${item.selected ? styles.backgroundBtnFilter : ""}`}
            >
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

export default CustomSelect;
