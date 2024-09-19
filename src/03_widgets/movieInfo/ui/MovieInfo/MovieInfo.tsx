import { useAppSelector } from "@/01_app/appStore";
import styles from "./MovieInfo.module.css";
import Image from "@/06_shared/ui/Image/Image";
import MovieWatchButtons from "@/05_entities/Movie/ui/MovieWatchButtons/MovieWatchButtons";
import { AboutMovie } from "@/05_entities/Movie";
import { useEffect, useState } from "react";
import { FavoritesToggleButton } from "@/04_features/favoritesToggleButton";

function MovieInfo() {
  const movie = useAppSelector((state) => state.movie.movie);
  const favorite = useAppSelector((state) => state.favorites.favorites);
  const [isFav, setIsFav] = useState(
    favorite.some((item) => item.kinopoiskId === movie?.kinopoiskId)
  );

  useEffect(() => {
    setIsFav(favorite.some((item) => item.kinopoiskId === movie?.kinopoiskId));
  }, [favorite, movie]);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <>
      <div className={styles.left}>
        <Image url={movie.posterUrlPreview} alt={movie.nameRu} type="poster" />
        <div className={styles.wathsLink}>
          <h2>Смотреть на:</h2>
          <MovieWatchButtons />
        </div>
      </div>
      <div className={styles.main}>
        <h1>{movie.nameRu}</h1>
        <p>{movie.description}</p>
        <AboutMovie />
      </div>
      <div className={styles.right}>
        <FavoritesToggleButton isFav={isFav} movie={movie} />
        <div className={styles.rate}>
          <div className={styles["rate-item"]}>
            <span className={styles["rate-source"]}>Кинопоиск:</span>
            <span className={styles["rate-value"]}>
              {movie.ratingKinopoisk} / 10
            </span>
          </div>
          <div className={styles["rate-item"]}>
            <span className={styles["rate-source"]}>IMDb:</span>
            <span className={styles["rate-value"]}>
              {movie.ratingImdb} / 10
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
