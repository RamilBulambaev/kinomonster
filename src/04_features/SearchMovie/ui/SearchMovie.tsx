import { useEffect, useState } from "react";
import styles from "./SearchMovie.module.css";
import { useDebounce } from "@/06_shared/hooks/useDebounce";
import { useGetSearchMovieQuery } from "@/05_entities/SearchMovie/api/searchMovieApi";
import { DropDownMovieCard } from "@/05_entities/SearchMovie";
import { useNavigate } from "react-router-dom";
import Input from "@/06_shared/ui/Input/Input";
import SearchIcon from "@/06_shared/ui/SearchIcon/SearchIcon";

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate(`/search/${search}`);
      setIsDropdown(false);
    }
  };

  const handleIconClick = () => {
    navigate(`/search/${search}`);
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
      <SearchIcon onClick={handleIconClick}/>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder="Поиск по названию"
        type="text"
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
