import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import { useGetMovieImagesQuery } from "@/05_entities/Movie/api/movieApi";
import Image from "@/06_shared/ui/Image/Image";
import styles from "./MovieImages.module.css";
import Modal from "@/06_shared/modal/Modal";

function MovieImages() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetMovieImagesQuery(id || "");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка при отображении информации о фильме</div>;
  }

  return (
    <>
      <h2 className={styles.title}>Кадры из фильма:</h2>

      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        spaceBetween={1}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
      >
        {data?.items.map((item, index) => (
          <SwiperSlide key={item.imageUrl + index}>
            <Image
              url={item.previewUrl}
              type="movieImages"
              alt="Изображение"
              onClick={() => openModal(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            initialSlide={currentImageIndex}
            navigation
            className={styles.modalSlider}
            loop={true}
          >
            {data?.items.map((item, index) => (
              <SwiperSlide key={item.imageUrl + index}>
                <img
                  src={item.imageUrl}
                  alt="Изображение"
                  className={styles.modalImage}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal>
      )}
    </>
  );
}

export default MovieImages;
