import Image from "@/06_shared/ui/Image/Image";
import styles from "./MoviesCard.module.css";
import { Link } from "react-router-dom";
import withSkeleton from "@/06_shared/hocs/withSkeleton";

interface MoviesCardProps {
  coverUrl: string;
  year: number;
  nameRu: string;
  rate: number;
  id: number;
}

function MoviesCard({ coverUrl, year, nameRu, rate, id }: MoviesCardProps) {
  return (
    <Link to={`/movie/${id}`} className={styles.link}>
      <div className={styles.container}>
        <Image url={coverUrl} type="card" alt={nameRu} />
        <h5 className={styles.name}>{nameRu}</h5>
        <div className={styles.info}>
          <p className={styles.year}>{year}</p>
          <p className={styles.rate}>{`${rate}/10`}</p>
        </div>
      </div>
    </Link>
  );
}

const MoviesCardWithSkeleton = withSkeleton(MoviesCard, 8, "item", "row");

export default MoviesCardWithSkeleton;
