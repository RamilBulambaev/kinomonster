import { useParams } from "react-router-dom";
import { useGetmovieExternalSourceQuery } from "../../api/movieApi";
import { useAppDispatch } from "@/01_app/appStore";
import { useEffect } from "react";
import { setExternalSource } from "../../model/movieSlice";
import IconLink from "@/06_shared/ui/IconLink/IconLink";
import styles from "./MovieWatchButtons.module.css";

function MovieWatchButtons() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetmovieExternalSourceQuery(id || "");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setExternalSource(data.items));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка</div>;
  }

  return (
    <div className={styles.container}>
      {data?.items.map((item, index) => (
        <IconLink
          key={index + item.author}
          url={item.url}
          logo={item.logoUrl}
          platform={item.platform}
        />
      ))}
    </div>
  );
}

export default MovieWatchButtons;
