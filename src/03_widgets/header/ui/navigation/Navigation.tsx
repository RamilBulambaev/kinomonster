import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import cn from "classnames";

function Navigation() {
  return (
    <ul className={styles.nav}>
      <li className={styles.item}>
        <NavLink
          className={({ isActive }) =>
            cn(styles["link"], {
              [styles["link-active"]]: isActive,
            })
          }
          to="/"
        >
          Главная
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={({ isActive }) =>
            cn(styles["link"], {
              [styles["link-active"]]: isActive,
            })
          }
          to="/favorite"
        >
          Избранное
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
