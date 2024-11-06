import { Link } from "react-router-dom";
import { ILinks } from "../../shared/types/interfaces";
import styles from "./Breadcrumbs.module.scss";

interface BreadcrumbsProps {
  links: ILinks[];
  activeTitle?: string;
}

export default function Breadcrumbs({ links, activeTitle }: BreadcrumbsProps) {
  return (
    <ul className={styles.links}>
      {links.map((link, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          <Link
            className={`${styles.styleLinks} ${link.title === activeTitle ? styles.currentLinks : styles.linksColor}`}
            to={link.href}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

Breadcrumbs.defaultProps = {
  activeTitle: undefined,
};
