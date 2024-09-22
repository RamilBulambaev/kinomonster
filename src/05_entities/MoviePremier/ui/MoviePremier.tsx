import Button from "@/06_shared/ui/button/Button";
import styles from "./MoviePremier.module.css";
import Image from "@/06_shared/ui/Image/Image";
import { useGetMovieQuery } from "@/05_entities/Movie/api/movieApi";
import { useNavigate } from "react-router-dom";
import withSkeleton from "@/06_shared/hocs/withSkeleton";

interface MoviePremierProps {
  id: string;
  title: string;
  url: string;
}

function MoviePremier({ id, title, url }: MoviePremierProps) {
  const { data } = useGetMovieQuery(id);
  const navigate = useNavigate();

  const handleShowMovieDetails = () => {
    navigate(`movie/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.poster}>ПРЕМЬЕРЫ МЕСЯЦА</p>
        <div>
          <h2 className={styles.name}>{title}</h2>
          <p className={styles.description}>{data?.description}</p>
        </div>
        <Button onClick={handleShowMovieDetails}>Смотреть</Button>
      </div>
      <div className={styles.right}>
        <Image url={url} type="banner" alt={title} />
      </div>
    </div>
  );
}

const MoviePremierWithSkeleton = withSkeleton(MoviePremier, 1, "banner");

export default MoviePremierWithSkeleton;
