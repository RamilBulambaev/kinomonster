import { SearchList } from "@/04_features/searchList";
import styles from "./SearchPage.module.css";
import { useParams } from "react-router-dom";
import { useGetSearchMovieQuery } from "@/05_entities/SearchMovie/api/searchMovieApi";

function SearchPage() {
  const { keyword } = useParams();
  const { data, isLoading, error } = useGetSearchMovieQuery(keyword || "");

  if (error) {
    return <div>Ошибка при отображении информации о фильме</div>;
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
