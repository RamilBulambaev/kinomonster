import { useAppSelector } from "@/01_app/appStore";
import styles from "./MovieInfo.module.css";
import Image from "@/06_shared/ui/Image/Image";
import { AboutMovie, MovieRate, MovieWatchButtons } from "@/05_entities/Movie";
import { useEffect, useState } from "react";
import withSkeleton from "@/06_shared/hocs/withSkeleton";
import ErrorMessage from "@/06_shared/ErrorMessage/ErrorMessage";
import { FavoritesToggleButton } from "@/04_features/FavoritesToggleButton";

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
    return <ErrorMessage>Информация о фильме не найденна</ErrorMessage>;
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
        <MovieRate
          ratingKinopoisk={movie.ratingKinopoisk}
          ratingImdb={movie.ratingImdb}
        />
      </div>
    </>
  );
}

const MovieInfoWithSkeleton = withSkeleton(MovieInfo, 1, "banner", "column");

export default MovieInfoWithSkeleton;
