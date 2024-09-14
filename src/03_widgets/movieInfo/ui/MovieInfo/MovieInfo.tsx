import { useAppSelector } from "@/01_app/appStore";
import styles from "./MovieInfo.module.css";
import Image from "@/06_shared/ui/Image/Image";
import MovieWatchButtons from "@/05_entities/Movie/ui/MovieWatchButtons/MovieWatchButtons";

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
      <div className={styles.right}>
        <h1>{movie.nameRu}</h1>
        <p>{movie.description}</p>
        <div className={styles.detail}>
          <span className={styles.title}>О фильме:</span>
          <div className={styles.detailsContainer}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Год производства</span>
              <span className={styles.value}>{movie.year}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Страна</span>
              <span className={styles.value}>
                {movie.countries.map((country) => country.country).join(", ")}
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Жанр</span>
              <span className={styles.value}>
                {movie.genres.map((genre) => genre.genre).join(", ")}
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Слоган</span>
              <span className={styles.value}>{movie.slogan || "-"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Рейтинг Кинопоиск</span>
              <div>
                <span
                  className={styles.value}
                >{`${movie.ratingKinopoisk} / 10`}</span>
                <br />
                <span
                  className={styles.value}
                >{`${movie.ratingKinopoiskVoteCount} оценок`}</span>
              </div>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Рейтинг Imdb</span>
              <div>
                <span
                  className={styles.value}
                >{`${movie.ratingImdb} / 10`}</span>
                <br />
                <span
                  className={styles.value}
                >{`${movie.ratingImdbVoteCount} оценок`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
