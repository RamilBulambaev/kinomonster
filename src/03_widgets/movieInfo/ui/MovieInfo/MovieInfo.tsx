import { useAppSelector } from "@/01_app/appStore";
import styles from "./MovieInfo.module.css";
import Image from "@/06_shared/ui/Image/Image";
import MovieWatchButtons from "@/05_entities/Movie/ui/MovieWatchButtons/MovieWatchButtons";
import { AboutMovie } from "@/05_entities/Movie";
import Button from "@/06_shared/ui/button/Button";

function MovieInfo() {
  const movie = useAppSelector((state) => state.movie.movie);

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
        <Button>В избранное </Button>
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
