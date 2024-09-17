import Button from "@/06_shared/ui/button/Button";
import styles from "./MoviePremier.module.css";
import Image from "@/06_shared/ui/Image/Image";
import { useGetMovieQuery } from "@/05_entities/Movie/api/movieApi";

interface MoviePremierProps {
  id: string;
  title: string;
  url: string;
}

function MoviePremier({ id, title, url }: MoviePremierProps) {
  const { data } = useGetMovieQuery(id);
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.poster}>ПРЕМЬЕРЫ МЕСЯЦА</p>
        <div>
          <h2 className={styles.name}>{title}</h2>
          <p className={styles.description}>{data?.description}</p>
        </div>
        <Button>Смотреть</Button>
      </div>
      <div className={styles.right}>
        <Image url={url} type="banner" alt={title} />
      </div>
    </div>
  );
}

export default MoviePremier;
