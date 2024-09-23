import styles from "./SearchList.module.css";
import { SearchMovieCard } from "@/05_entities/SearchMovie";
import { ISearchFilm } from "@/05_entities/SearchMovie/model/type";

interface SearchListProps {
  films: ISearchFilm[] | [];
  isLoading: boolean;
}

function SearchList({ films, isLoading }: SearchListProps) {
  return (
    <>
      {films.length === 0 && <h2>Список пуст</h2>}
      <ul className={styles.list}>
        {films.map((film) => (
          <li key={film.filmId}>
            <SearchMovieCard
              isLoading={isLoading}
              name={film.nameRu}
              url={film.posterUrl}
              description={film.description}
              id={film.filmId}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchList;
