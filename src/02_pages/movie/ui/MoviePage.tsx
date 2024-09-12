import { getMovie } from "@/06_shared/api/apiMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MoviePage.module.css";
import { IMovie } from "../model/type";

function MoviePage() {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) {
        setIsLoading(false);
        return;
      }
      try {
        const movie = await getMovie(id);
        setMovie(movie);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameRu}
          className={styles.img}
        />
        <a href={movie.webUrl} target="_blank">
          <button className={styles.button}>Смотреть</button>
        </a>
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
      
    </div>
  );
}

export default MoviePage;
