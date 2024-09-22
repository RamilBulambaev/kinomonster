import Logo from "@/05_entities/logo/ui/Logo";
import styles from "./Header.module.css";
import { SearchMovie } from "@/04_features/SearchMovie";
import { Navigation } from "@/04_features/navigation";

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
