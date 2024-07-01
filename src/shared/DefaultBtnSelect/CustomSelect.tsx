import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import useObserver from "../hooks/useObserver";
import { useAppDispatch } from "../../store/hooks";
import { Options, toggleSelect } from "../../store/shopSlice";
import styles from "./CustomSelect.module.scss";

interface CustomSelectProps {
  data: { titleSelect: string; option: Options["option"]; value: string; withIcon?: boolean };
}

const cx = classNames.bind(styles);

const CustomSelect: React.FC<CustomSelectProps> = ({ data }) => {
  const [options, setoptions] = useState([]);
  const [classActive, setClassActive] = useState(false);

  const [disabledOptions, setDisabledOptions] = useState({}); // TODO сделал disable кнопок спросить !!!

  useEffect(() => {
    setoptions(data.option);
    setClassActive(data.option.some((item) => item.selected));
  }, [data]);

  const ref = useRef(null);
  const dispatch = useAppDispatch();
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

  const onOptionClick = (name: string) => {
    dispatch(toggleSelect({ name, filterName: data.titleSelect }));

    setDisabledOptions((prev) => {
      const isSelected = options.find((item) => item.name === name).selected;
      if (isSelected) {
        return {}; // Сброс состояния, если элемент уже выбран
      }
      switch (name) {
        case "Популярные":
          return { ...prev, Новинки: true };
        case "Новинки":
          return { ...prev, Популярные: true };
        case "Сначала дешевые":
          return { ...prev, "Сначала дорогие": true };
        case "Сначала дорогие":
          return { ...prev, "Сначала дешевые": true };
        default:
          return { ...prev };
      }
    });
  };

  const btnFilter = cx({
    innerBtnFilter: classActive,
    btnFilter: true,
    withIcon: data.withIcon,
  });

  return (
    <div ref={ref} className={styles.wrapper}>
      <button className={`${btnFilter}`} onClick={toggleFilter} type="button">
        <span>{data.titleSelect}</span>
        <span>
          {options.map((item) => {
            if (item.selected) {
              return item.name;
            }
            return "";
          })}
        </span>
      </button>
      {showFilters && (
        <ul className={styles.filterList}>
          {options.map((item, i) => (
            <li key={`${i + item.name}`} className={`${cx("listBtn", { backgroundBtnFilter: item.selected })}`}>
              <button
                className={`${styles.listBtnItem}`}
                onClick={() => {
                  onOptionClick(item.name);
                }}
                type="button"
                aria-label=""
                disabled={disabledOptions[item.name]}
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
