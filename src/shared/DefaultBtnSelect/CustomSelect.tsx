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
  const [options, setOptions] = useState([]);
  const [classActive, setClassActive] = useState(false);

  useEffect(() => {
    setOptions(data.option);
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
  };

  const btnFilter = cx({
    btnFilter: true,
    innerBtnFilter: classActive,
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
            return null;
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
