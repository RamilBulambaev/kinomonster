import styles from "./DropDownMovieCard.module.css";

interface DropDownMovieCard {
  url: string;
  name: string;
  id: number;
  rate: string;
  onClick: (id: number) => void;
}

function DropDownMovieCard({
  url,
  name,
  id,
  rate,
  onClick,
}: DropDownMovieCard) {
  return (
    <div className={styles.card} onClick={() => onClick(id)}>
      <div className={styles.right}>
        <img src={url} alt={name} className={styles.img} />
      </div>
      <div className={styles.left}>
        <p className={styles.title}>{name}</p>
        <p className={styles.rate}>{rate} / 10</p>
      </div>
    </div>
  );
}

export default DropDownMovieCard;
