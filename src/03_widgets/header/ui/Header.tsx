import Logo from "@/05_entities/logo/ui/Logo";
import SearchMovie from "@/04_features/SearchMovie/ui/SearchMovie";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <SearchMovie />
        <div>НАВИГАЦИЯ</div>
      </div>
    </div>
  );
}

export default Header;
