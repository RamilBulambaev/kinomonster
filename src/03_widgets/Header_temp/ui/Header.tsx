import { Navigation } from "@/04_features/Navigation_temp";
import styles from "./Header.module.css";
import { SearchMovie } from "@/04_features/SearchMovie";
import { Logo } from "@/05_entities/Logo_temp";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <SearchMovie />
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
