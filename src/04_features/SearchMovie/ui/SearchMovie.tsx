import { useEffect, useState } from "react";
import styles from "./SearchMovie.module.css";
import cn from "classnames";
import { useDebounce } from "@/06_shared/hooks/useDebounce";
import { useGetSearchMovieQuery } from "@/05_entities/SearchMovie/api/searchMovieApi";
import { DropDownMovieCard } from "@/05_entities/SearchMovie";
import { useNavigate } from "react-router-dom";

function SearchMovie() {
  const [search, setSearch] = useState("");
  const [isDropdown, setIsDropdown] = useState(false);
  const debounced = useDebounce(search);
  const navigate = useNavigate();
  const { data, isLoading } = useGetSearchMovieQuery(debounced, {
    skip: debounced.length < 3,
  });

  useEffect(() => {
    setIsDropdown(debounced.length > 3 && !isLoading);
  }, [debounced, data, isLoading]);

  const handlerClick = (id: number) => {
    navigate(`/movie/${id}`);
    setIsDropdown(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsDropdown(false);
      setSearch("");
    }, 500);
  };

  return (
    <div className={styles.custom_input}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn(styles.svg_icon, styles["bi-search"])}
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
      </svg>
      <input
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onBlur={handleBlur}
        type="text"
        placeholder="Поиск по названию"
      />
      {isDropdown && (
        <ul className={styles.dropdown}>
          {isLoading && <p>Loading...</p>}
          {data?.films.map((film) => (
            <li key={film.filmId} className={styles.film}>
              <DropDownMovieCard
                name={film.nameRu}
                url={film.posterUrlPreview}
                id={film.filmId}
                rate={film.rating}
                onClick={handlerClick}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchMovie;
