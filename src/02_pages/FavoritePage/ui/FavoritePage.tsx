import { FavoritesList } from "@/03_widgets/FavoritesList";
import styles from "./FavoritePage.module.css";

function FavoritePage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Избранное</h1>
      </div>
      <FavoritesList />
    </div>
  );
}

export default FavoritePage;
