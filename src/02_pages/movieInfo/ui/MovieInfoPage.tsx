import { useEffect } from "react";
import styles from "./MovieInfoPage.module.css";
import { useGetMovieQuery } from "@/05_entities/Movie/api/movieApi";
import { useAppDispatch } from "@/01_app/appStore";
import { setMovie } from "@/05_entities/Movie/model/movieSlice";
import { useParams } from "react-router-dom";
import { MovieImages, MovieInfo } from "@/03_widgets/movieInfo";
import RelatedMovies from "@/03_widgets/movieInfo/ui/RelatedMovies/RelatedMovies";

function MovieInfoPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetMovieQuery(id || "");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setMovie(data));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка при отображении информации о фильме</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <MovieInfo />
      </div>
      <MovieImages />
      <h1>Похожие фильмы</h1>
      <RelatedMovies />
    </div>
  );
}

export default MovieInfoPage;
