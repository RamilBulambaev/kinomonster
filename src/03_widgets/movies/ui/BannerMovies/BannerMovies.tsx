import Image from "@/06_shared/ui/Image/Image";
import styles from "./BannerMovies.module.css";
import Button from "@/06_shared/ui/button/Button";

function BannerMovies() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.poster}>УЖЕ В КИНО</p>
        <div>
          <h2 className={styles.name}>Чужой: Ромул (2024)</h2>
          <p className={styles.description}>
            Исследуя заброшенную космическую станцию, группа колонизаторов
            сталкивается с самой ужасающей формой жизни во Вселенной.
          </p>
        </div>
        <Button>Смотреть</Button>
      </div>
      <div className={styles.right}>
        <Image
          url="https://gamemagic.ru/wp-content/uploads/2024/07/8e6868683d582772628b2d7ad76452b0-1.webp"
          type="banner"
          alt="Чужой: Ромул (2024)"
        />
      </div>
    </div>
  );
}

export default BannerMovies;
