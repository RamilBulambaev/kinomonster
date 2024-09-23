import { IItem } from "@/03_widgets/movies/model/types";
import styles from "./CollectionsList.module.css";
import { SearchMovieCard } from "@/05_entities/SearchMovie";

interface CollectionsListProps {
  films: IItem[] | [];
  isLoading: boolean;
}

function CollectionsList({ films, isLoading }: CollectionsListProps) {
  return (
    <>
      {films.length === 0 && <h2>Список пуст</h2>}
      <ul className={styles.list}>
        {films.map((film) => (
          <li key={film.kinopoiskId}>
            <SearchMovieCard
              isLoading={isLoading}
              name={film.nameRu}
              url={film.posterUrl}
              description={film.description}
              id={film.kinopoiskId}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CollectionsList;
