import { useAppSelector } from "@/01_app/appStore";
import styles from "./FavoritesList.module.css";
import Image from "@/06_shared/ui/Image/Image";
import { GoMovieInfoButton } from "@/04_features/GoMovieInfoButton";
import { FavoritesToggleButton } from "@/04_features/FavoritesToggleButton";

function FavoritesList() {
  const data = useAppSelector((state) => state.favorites.favorites);

  if (data.length === 0) {
    return <h1>Здесь будет отображться списока понравевшихся вам фильмов</h1>;
  }

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div key={item.kinopoiskId} className={styles["card-container"]}>
          <Image alt={item.nameRu} url={item.posterUrl} type="card" />
          <div className={styles.navigation}>
            <GoMovieInfoButton id={item.kinopoiskId} />
            <FavoritesToggleButton isFav={true} movie={item} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;
