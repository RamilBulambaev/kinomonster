import styles from "./MoviesList.module.css";
import { useGetMoviesQuery } from "@/05_entities/MovieList/api/moviesApi";
import { useAppDispatch, useAppSelector } from "@/01_app/appStore";
import { useEffect } from "react";
import {
  setMovies,
  setPartMovies,
} from "@/05_entities/MovieList/model/moviesSlice";
import { MoviesCard } from "@/05_entities/MoviesCard";
import { useParams } from "react-router-dom";
import { ECollections } from "../../model/types";

interface MovieListProps {
  collectionType?: ECollections;
}

function MoviesList({ collectionType }: MovieListProps) {
  const { type } = useParams();
  const { data, error, isLoading } = useGetMoviesQuery(
    type || collectionType || ""
  );
  const dispath = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.partMovies);

  useEffect(() => {
    if (data?.items) {
      dispath(setMovies(data?.items));
      dispath(setPartMovies(data?.items));
    }
  }, [data, dispath]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movies</div>;
  }

  return (
    <section className={styles.list}>
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
    </section>
  );
}

export default MoviesList;
