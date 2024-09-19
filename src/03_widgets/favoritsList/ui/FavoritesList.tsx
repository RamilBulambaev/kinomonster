import { useAppSelector } from "@/01_app/appStore";
import styles from "./FavoritesList.module.css";
import { FavoritesToggleButton } from "@/04_features/favoritesToggleButton";
import Image from "@/06_shared/ui/Image/Image";
import Button from "@/06_shared/ui/button/Button";
import { useNavigate } from "react-router-dom";

function FavoritesList() {
  const data = useAppSelector((state) => state.favorites.favorites);
  const navigate = useNavigate();
  if (data.length === 0) {
    return <h1>Здесь будет отображться списока понравевшихся вам фильмов</h1>;
  }

  const handleShowMovieDetails = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div key={item.kinopoiskId} className={styles["card-container"]}>
          <Image alt={item.nameRu} url={item.posterUrl} type="card" />
          <div className={styles.navigation}>
            <Button onClick={() => handleShowMovieDetails(item.kinopoiskId)}>
              Подробнее
            </Button>
            <FavoritesToggleButton isFav={true} movie={item} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;
