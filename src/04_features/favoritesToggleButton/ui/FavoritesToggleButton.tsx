import { useAppDispatch } from "@/01_app/appStore";
import {
  addFavorite,
  removeFavorite,
} from "@/05_entities/favorite/model/favoriteSlice";
import { IMovie } from "@/05_entities/Movie/model/type";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface FavoritesToggleButtonProps {
  isFav: boolean;
  movie: IMovie;
}

function FavoritesToggleButton({ isFav, movie }: FavoritesToggleButtonProps) {
  const dispatch = useAppDispatch();

  const handleAddFavorites = (movie: IMovie) => {
    dispatch(addFavorite(movie));
  };

  const handleRemoveFavorites = (id: number) => {
    dispatch(removeFavorite(id));
  };

  return (
    <>
      {!isFav && (
        <AiOutlineHeart
          onClick={() => handleAddFavorites(movie)}
          size={48} // Размер иконки
          color="gray" // Цвет иконки
          style={{
            cursor: "pointer",
            marginRight: "10px", // Дополнительный отступ
            transition: "transform 0.2s", // Анимация при наведении
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")} // Эффект при наведении
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      )}
      {isFav && (
        <AiFillHeart
          onClick={() => handleRemoveFavorites(movie.kinopoiskId)}
          size={36}
          color="red"
          style={{
            cursor: "pointer",
            marginRight: "10px",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      )}
    </>
  );
}

export default FavoritesToggleButton;
