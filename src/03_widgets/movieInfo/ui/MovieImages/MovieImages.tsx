import { useGetMovieImagesQuery } from "@/05_entities/Movie/api/movieApi";
import styles from "./MovieImages.module.css";
import { useParams } from "react-router-dom";
import Image from "@/06_shared/ui/Image/Image";

function MovieImages() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetMovieImagesQuery(id || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка при отображении информации о фильме</div>;
  }

  return (
    <div className={styles.container}>
      {data?.items.map((item, index) => (
        <Image
          key={item.imageUrl + index}
          url={item.imageUrl}
          type="movieImages"
          alt="Изображение"
        />
      ))}
    </div>
  );
}

export default MovieImages;
