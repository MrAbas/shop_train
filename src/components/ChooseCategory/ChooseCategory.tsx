import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import { useAppDispatch } from "../../store/hooks";
import { toggleSelectCategories } from "../../store/shopSlice";
import useObserver from "../../shared/hooks/useObserver";
import styles from "./ChooseCategory.module.scss";

/*  TODO сделал типизацию, при подключении выходят ошибки interface ChooseCategoryProps {
  data: {
    titleSelect: string;
    cloth: { option: Options["option"] };
    accessories: { option: Options["option"] };
    souvenirs: { option: Options["option"] };
    office: { option: Options["option"] };
  };
  id: string;
  titleSelect: string[];
}
: React.FC<ChooseCategoryProps>
*/

const cx = classNames.bind(styles);

const ChooseCategory = ({ data, id, titleSelect }) => {
  const [options, setOptions] = useState([]);
  const [classActive, setClassActive] = useState(false);

  useEffect(() => {
    if (data?.length) {
      data.forEach((item) => {
        setOptions(item[id].option);
      });
    }
    data.forEach((el) => {
      setClassActive(el[id].option.some((item) => item.selected));
    });
    // setClassActive(options.some((item) => item.selected));
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

  const onOptionClick = (filterName: string) => {
    // dispatch(toggleSelect({ name, filterName: id }));
    dispatch(toggleSelectCategories({ name: id, filterName }));
  };

  const btnFilter = cx({
    btnFilter: true,
    innerBtnFilter: classActive,
  });

  return (
    <div ref={ref} className={styles.wrapper}>
      <button className={`${btnFilter}`} onClick={toggleFilter} type="button">
        <span>{titleSelect}</span>
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

export default ChooseCategory;
