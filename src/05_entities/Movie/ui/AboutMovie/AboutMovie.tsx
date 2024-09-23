import { useAppSelector } from "@/01_app/appStore";
import styles from "./AboutMovie.module.css";
import { useGetStaffMovieQuery } from "../../api/staffApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StaffInterface } from "../../model/type";
import { v4 as uuidv4 } from "uuid";
import { listSeparator } from "@/06_shared/helpers/listSeparator/listSeparator";
import ErrorMessage from "@/06_shared/ErrorMessage/ErrorMessage";

function AboutMovie() {
  const { id } = useParams();
  const { data, error } = useGetStaffMovieQuery(id || "");
  const [director, setDirector] = useState<StaffInterface[]>([]);
  const [actors, setActors] = useState<StaffInterface[]>([]);
  const [producers, setProducers] = useState<StaffInterface[]>([]);
  const movie = useAppSelector((state) => state.movie.movie);

  useEffect(() => {
    if (data) {
      setDirector(
        data.filter(
          (item) => item.professionKey === "DIRECTOR" && item.nameRu.length > 1
        )
      );
      setActors(
        data
          .filter(
            (item) => item.professionKey === "ACTOR" && item.nameRu.length > 1
          )
          .splice(0, 10)
      );
      setProducers(
        data
          .filter(
            (item) =>
              item.professionKey === "PRODUCER" && item.nameRu.length > 1
          )
          .splice(0, 10)
      );
    }
  }, [data]);

  if (error) {
    return (
      <ErrorMessage>Ошибка при отображении информации о фильме</ErrorMessage>
    );
  }

  if (!movie) {
    return null;
  }

  return (
    <div className={styles.detail}>
      <h3 className={styles.title}>О фильме:</h3>
      <div className={styles.detailsContainer}>
        <div className={styles.detailItem}>
          <span className={styles.label}>Год производства</span>
          <span className={styles.value}>{movie.year}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Страна</span>
          <div className={styles.value}>
            {movie.countries.map((country, index) =>
              listSeparator(
                index,
                movie.countries.length - 1,
                uuidv4(),
                country.country
              )
            )}
          </div>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Жанр</span>
          <div className={styles.value}>
            {movie.genres.map((genre, index) =>
              listSeparator(
                index,
                movie.genres.length - 1,
                uuidv4(),
                genre.genre
              )
            )}
          </div>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Слоган</span>
          <div className={styles.value}>{movie.slogan || "-"}</div>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Режисер</span>
          <div className={styles.value}>
            {director.map((item, index) =>
              listSeparator(index, director.length - 1, uuidv4(), item.nameRu)
            )}
          </div>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Продюссеры</span>
          <div className={styles.value}>
            {producers.map((item, index) =>
              listSeparator(index, producers.length - 1, uuidv4(), item.nameRu)
            )}
          </div>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Актеры</span>
          <div className={styles.value}>
            {actors.map((item, index) =>
              listSeparator(index, actors.length - 1, uuidv4(), item.nameRu)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMovie;
