import Image from "@/06_shared/ui/Image/Image";
import styles from "./MoviesCard.module.css";

function MoviesCard({ coverUrl, year, nameRu, rate }) {
  return (
    <div className={styles.container}>
      <Image url={coverUrl} type="card" alt={nameRu}/>
      <h5 className={styles.name}>{nameRu}</h5>
      <div className={styles.info}>
        <p className={styles.year}>{year}</p>
        <p className={styles.rate}>{`${rate}/10`}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
