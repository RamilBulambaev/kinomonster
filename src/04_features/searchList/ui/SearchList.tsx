import { useParams } from "react-router-dom";
import styles from "./SearchList.module.css";
import { useGetSearchMovieQuery } from "@/05_entities/SearchMovie/api/searchMovieApi";
import { SearchMovieCard } from "@/05_entities/SearchMovie";

function SearchList() {
  const { keyword } = useParams();
  const { data, isLoading, error } = useGetSearchMovieQuery(keyword || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка при отображении информации о фильме</div>;
  }

  return (
    <ul className={styles.list}>
      {data?.films.map((film) => (
        <li key={film.filmId}>
          <SearchMovieCard
            name={film.nameRu}
            url={film.posterUrl}
            description={film.description}
            id={film.filmId}
          />
        </li>
      ))}
    </ul>
  );
}

export default SearchList;
