import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import useObserver from "../../shared/hooks/useObserver";
import styles from "./ChooseCategoryLink.module.scss";

interface ChooseCategoryLinkProps {
  categoryNames: { option: string; value: string; selected?: boolean }[];
}

const cx = classNames.bind(styles);

const ChooseCategoryLink: React.FC<ChooseCategoryLinkProps> = ({ categoryNames }) => {
  const [showFilters, setShowFilters] = useState(false);
  const ref = useRef(null);
  const { addListener, removeListener } = useObserver(ref, setShowFilters, () => {});
  const [classActive, setClassActive] = useState(false);
  const [changeBtnTitle, setChangeBtnTitle] = useState(false);
  const [changeBtnInfo, setChangeBtnInfo] = useState(false);

  useEffect(() => {
    if (showFilters) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, [showFilters]);

  const btnFilter = cx({
    btnFilter: true,
    categoryIcon: true,
    innerBtnFilter: classActive,
  });

  return (
    <div ref={ref} className={styles.containerBtn}>
      <button
        className={`${btnFilter}`}
        type="button"
        onClick={() => {
          setShowFilters(!showFilters);
        }}
        aria-label="select a category"
      >
        <span className={cx({ changeBtnTitle })}>Категории</span>
        {categoryNames.map((item) => item.selected && <span className={cx({ changeBtnInfo })}>Все категории</span>)}
      </button>
      {/* TODO когда кликаю на "Все категории", перехожу на одежду и обратно, ломается */}
      <ul className={styles.filterList}>
        {showFilters &&
          categoryNames.map((item, index) => (
            <li key={`${index + item.option}`}>
              {/* TODO проблема с key(клик на "Все категории") */}
              <Link
                to={`${item.value}`}
                className={styles.listBtnItem}
                onClick={() => {
                  item.selected = !item.selected;
                  setClassActive(item?.selected);
                  setChangeBtnTitle(item?.selected);
                  setChangeBtnInfo(item?.selected);
                }}
              >
                {item.option}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default ChooseCategoryLink;
