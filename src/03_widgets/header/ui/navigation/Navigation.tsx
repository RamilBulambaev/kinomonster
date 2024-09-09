import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <ul className={styles.nav}>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/">
          Главная
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/about">
          О сайте
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/popular">
          Популярные фильмы
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
