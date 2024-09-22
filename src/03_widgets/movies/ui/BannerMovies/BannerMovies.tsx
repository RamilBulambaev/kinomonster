import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./BannerMovies.module.css";
import { useGetPremierQuery } from "@/05_entities/MoviePremier/api/premierApi";
import { useAppDispatch, useAppSelector } from "@/01_app/appStore";
import { useEffect } from "react";
import { setPremier } from "@/05_entities/MoviePremier/model/premierSlice";
import { MoviePremier } from "@/05_entities/MoviePremier";

function BannerMovies() {
  const { data, error, isLoading } = useGetPremierQuery();
  const dispatch = useAppDispatch();
  const premier = useAppSelector((state) => state.premier.premier);

  useEffect(() => {
    if (data) {
      dispatch(setPremier(data.items));
    }
  }, [data, dispatch]);

  if (error) {
    return <div>Ошибка при отображении информации о фильме</div>;
  }

  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {premier?.map((item) => (
          <SwiperSlide key={item.kinopoiskId}>
            <MoviePremier
              isLoading={isLoading}
              id={`${item.kinopoiskId}`}
              url={item.posterUrl}
              title={item.nameRu}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerMovies;
