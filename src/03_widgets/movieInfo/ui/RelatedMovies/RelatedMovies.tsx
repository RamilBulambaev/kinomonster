import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel } from "swiper/modules";
import { useGetRelatedMoviesQuery } from "@/05_entities/Movie/api/movieApi";
import { Link, useParams } from "react-router-dom";
import styles from "./RelatedMovies.module.css";
import Image from "@/06_shared/ui/Image/Image";
import ErrorMessage from "@/06_shared/ErrorMessage/ErrorMessage";

function RelatedMovies() {
  const { id } = useParams();
  const { data, error } = useGetRelatedMoviesQuery(id || "");

  if (error) {
    return <ErrorMessage>Ошибка при отображании похожих фильмов</ErrorMessage>;
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
