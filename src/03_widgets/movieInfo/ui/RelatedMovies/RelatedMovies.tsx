import { useGetRelatedMoviesQuery } from "@/05_entities/Movie/api/movieApi";
import { useParams } from "react-router-dom";
import styles from "./RelatedMovies.module.css";
import { MoviesCard } from "@/05_entities/MoviesCard";

function RelatedMovies() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetRelatedMoviesQuery(id || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка при отображении информации о фильме</div>;
  }

  return (
    <div className={styles.container}>
      {data?.items.map((item, index) => (
        <MoviesCard
          key={item.nameRu + index}
          year={`${item.filmId}`}
          coverUrl={item.posterUrlPreview}
          id={item.filmId}
          nameRu={item.nameRu}
          rate={item.filmId}
        />
      ))}
    </div>
  );
}

export default RelatedMovies;
