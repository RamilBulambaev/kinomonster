import MoviesCard from "@/05_entities/MoviesCard/ui/MoviesCard";
import { getMovies } from "@/06_shared/api/apiMovies";
import { useState, useEffect } from "react";
import styles from "./MoviesList.module.css";
import { Item } from "../../model/types";

function MoviesList() {
  const [movies, setMovies] = useState<Item[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        console.log(movies);
        setMovies(movies.items.slice(0, 8));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
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
            />
          ))}
      </div>
    </section>
  );
}

export default MoviesList;
