import { ECollections } from "@/03_widgets/movies/model/types";
import styles from "./AllCollections.module.css";
import { useState } from "react";
import CollectionsListWithPagination from "@/03_widgets/collectionsListWithPagination/ui/CollectionsListWithPagination";

function AllCollections() {
  const [collections, setCollections] = useState(ECollections.TOP_POPULAR_ALL);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCollections(event.target.value as ECollections);
  };

  return (
    <div className={styles.container}>
      <select
        name="collections"
        id="collections"
        onChange={handleChange}
        className={styles.select}
      >
        <option className={styles.option} value={ECollections.TOP_POPULAR_ALL}>
          Популярные новинки
        </option>
        <option
          className={styles.option}
          value={ECollections.TOP_POPULAR_MOVIES}
        >
          Популярные фильмы
        </option>
        <option className={styles.option} value={ECollections.TOP_250_TV_SHOWS}>
          Топ 250 сериалов
        </option>
        <option className={styles.option} value={ECollections.TOP_250_MOVIES}>
          Топ 250 фильмов
        </option>
        <option className={styles.option} value={ECollections.VAMPIRE_THEME}>
          Фильмы про вампиров
        </option>
        <option className={styles.option} value={ECollections.COMICS_THEME}>
          Фильмы по комиксам
        </option>
      </select>
      <CollectionsListWithPagination collections={collections} />
    </div>
  );
}

export default AllCollections;
