import Logo from "@/05_entities/logo/ui/Logo";
import styles from "./Header.module.css";
import Navigation from "./navigation/Navigation";
import { SearchMovie } from "@/04_features/SearchMovie";

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
