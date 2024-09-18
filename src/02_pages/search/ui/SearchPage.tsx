import { SearchList } from "@/04_features/searchList";
import styles from "./SearchPage.module.css";

function SearchPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Результаты поиска</h1>
      </div>
      <SearchList />
    </div>
  );
}

export default SearchPage;
