import styles from "./MoviesList.module.css";
import { useGetMoviesQuery } from "@/05_entities/MovieList/api/moviesApi";
import { useAppDispatch, useAppSelector } from "@/01_app/appStore";
import { useEffect } from "react";
import { setMovies } from "@/05_entities/MovieList/model/moviesSlice";
import { MoviesCard } from "@/05_entities/MoviesCard";

function MoviesList() {
  const { data, error, isLoading } = useGetMoviesQuery();
  const dispath = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies);

  useEffect(() => {
    if (data?.items) {
      dispath(setMovies(data?.items));
    }
  }, [data, dispath]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movies</div>;
  }

  return (
    <section>
      <div className={styles["navigate-menu"]}>
        <nav className={styles.nav}>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-item"]}>Популярные фильмы</li>
            <li className={styles["nav-item"]}>Популярные сериалы</li>
            <li className={styles["nav-item"]}>Подборка фильмов</li>
          </ul>
        </nav>
        <a href="#">Смотреть все</a>
      </div>
      <div className={styles.list}>
        {movies &&
          movies.map((movie) => (
            <MoviesCard
              key={movie.kinopoiskId}
              coverUrl={movie.coverUrl}
              year={movie.year}
              nameRu={movie.nameRu}
              rate={movie.ratingKinopoisk}
              id={movie.kinopoiskId}
            />
          ))}
      </div>
    </section>
  );
}

export default MoviesList;
