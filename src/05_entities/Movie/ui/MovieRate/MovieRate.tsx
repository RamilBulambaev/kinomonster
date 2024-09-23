import styles from "./MovieRate.module.css";

interface MovieRateProps {
  ratingKinopoisk: number;
  ratingImdb: number;
}

function MovieRate({ ratingKinopoisk, ratingImdb }: MovieRateProps) {
  return (
    <div className={styles.rate}>
      <div className={styles["rate-item"]}>
        <span className={styles["rate-source"]}>Кинопоиск:</span>
        <span className={styles["rate-value"]}>{ratingKinopoisk} / 10</span>
      </div>
      <div className={styles["rate-item"]}>
        <span className={styles["rate-source"]}>IMDb:</span>
        <span className={styles["rate-value"]}>{ratingImdb} / 10</span>
      </div>
    </div>
  );
}

export default MovieRate;
