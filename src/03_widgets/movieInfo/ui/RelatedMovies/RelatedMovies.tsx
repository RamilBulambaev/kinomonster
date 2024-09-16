import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel } from "swiper/modules";
import { useGetRelatedMoviesQuery } from "@/05_entities/Movie/api/movieApi";
import { Link, useParams } from "react-router-dom";
import styles from "./RelatedMovies.module.css";
import Image from "@/06_shared/ui/Image/Image";

function RelatedMovies() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetRelatedMoviesQuery(id || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка при отображении информации о фильме</div>;
  }

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={1}
        slidesPerView={4}
        navigation
        scrollbar={{ draggable: true }}
        loop={true}
      >
        {data?.items.map((item) => (
          <SwiperSlide key={item.filmId}>
            <Link to={`/movie/${item.filmId}`}>
              <Image
                alt={item.nameRu}
                type="card"
                url={item.posterUrlPreview}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RelatedMovies;
