import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import useObserver from "../hooks/useObserver";
import { useAppDispatch } from "../../store/hooks";
import { addFilter } from "../../store/shopSlice";
import styles from "./CustomSelect.module.scss";

interface CustomSelectProps {
  selectData: { name: string; option: string[]; value: string; withIcon?: boolean };
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

    setClassActive(newOption.some((item) => item.selected));
    setOption(newOption);

    dispatch(addFilter({ data: newOption, name: selectData.value }));
  };

  useEffect(() => {
    const filteredOptions = option.filter((item) => item.selected === true);
    const selectedItems = filteredOptions.map((item) => item.name);
    setSelected(selectedItems);
  }, [option]);

  const btnFilter = cx({
    innerBtnFilter: classActive,
    btnFilter: true,
    withIcon: selectData.withIcon,
  });

  return (
    <div ref={ref} className={styles.wrapper}>
      <button className={`${btnFilter}`} onClick={toggleFilter} type="button">
        <span>{selectData.name}</span>
        <span>{selected.map((item) => item)}</span>
      </button>
      {showFilters && (
        <ul className={styles.filterList}>
          {option.map((item, i) => (
            <li key={`${i + item.name}`} className={`${cx("listBtn", { backgroundBtnFilter: item.selected })}`}>
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
