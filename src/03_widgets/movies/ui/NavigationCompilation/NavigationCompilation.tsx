import { NavLink } from "react-router-dom";
import styles from "./NavigationCompilation.module.css";
import cn from "classnames";
import { ECollections } from "../../model/types";

function NavigationCompilation() {
  return (
    <div className={styles["navigate-menu"]}>
      <nav className={styles.nav}>
        <ul className={styles["nav-list"]}>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(styles["nav-item"], {
                  [styles["nav-item-active"]]: isActive,
                })
              }
              to={`/compilation/${ECollections.TOP_250_MOVIES}`}
            >
              Популярные фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(styles["nav-item"], {
                  [styles["nav-item-active"]]: isActive,
                })
              }
              to={`/compilation/${ECollections.TOP_250_TV_SHOWS}`}
            >
              Популярные сериалы
            </NavLink>
          </li>
        </ul>
      </nav>
      <a href="#">{"Смотреть все >"}</a>
    </div>
  );
}

export default NavigationCompilation;
