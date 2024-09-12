import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">KINOMONSTER</Link>
    </div>
  );
}

export default Logo;
