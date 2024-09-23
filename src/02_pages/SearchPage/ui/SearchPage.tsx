import styles from "./SearchPage.module.css";
import { useParams } from "react-router-dom";
import { useGetSearchMovieQuery } from "@/05_entities/SearchMovie/api/searchMovieApi";
import ErrorMessage from "@/06_shared/ErrorMessage/ErrorMessage";
import { SearchList } from "@/04_features/SearchList_temp";

function SearchPage() {
  const { keyword } = useParams();
  const { data, isLoading, error } = useGetSearchMovieQuery(keyword || "");

  if (error) {
    return <ErrorMessage>Ошибка при поиске фильмов</ErrorMessage>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Результаты поиска</h1>
      </div>
      <SearchList films={data?.films ?? []} isLoading={isLoading} />
    </div>
  );
}

export default SearchPage;
