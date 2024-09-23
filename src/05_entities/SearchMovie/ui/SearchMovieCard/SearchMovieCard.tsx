import Image from "@/06_shared/ui/Image/Image";
import styles from "./SearchMovieCard.module.css";
import { useNavigate } from "react-router-dom";
import withSkeleton from "@/06_shared/hocs/withSkeleton";
import Button from "@/06_shared/ui/Button/Button";

interface SearchMovieCardProps {
  id: number;
  name: string;
  url: string;
  description?: string;
}

function SearchMovieCard({ id, name, url, description }: SearchMovieCardProps) {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/movie/${id}`);
  };
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <Image alt={name} url={url} type="card" />
      </div>
      <div className={styles.right}>
        <h2>{name}</h2>
        <p>{description || "Описание отсутствует"}</p>
        <div className={styles.button}>
          <Button onClick={() => handleClick(id)}>Подробнее</Button>
        </div>
      </div>
    </div>
  );
}

const SearchMovieCardWithSkeleton = withSkeleton(
  SearchMovieCard,
  10,
  "item",
  "column"
);

export default SearchMovieCardWithSkeleton;
