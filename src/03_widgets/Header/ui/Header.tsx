import { Navigation } from "@/04_features/Navigation";
import styles from "./Header.module.css";
import { SearchMovie } from "@/04_features/SearchMovie";
import { Logo } from "@/05_entities/Logo";

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
