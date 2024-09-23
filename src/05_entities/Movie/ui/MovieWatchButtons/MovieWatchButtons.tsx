import { useParams } from "react-router-dom";
import { useGetmovieExternalSourceQuery } from "../../api/movieApi";
import { useAppDispatch } from "@/01_app/appStore";
import { useEffect } from "react";
import { setExternalSource } from "../../model/movieSlice";
import IconLink from "@/06_shared/ui/IconLink/IconLink";
import styles from "./MovieWatchButtons.module.css";
import { v4 as uuidv4 } from "uuid";
import ErrorMessage from "@/06_shared/ErrorMessage/ErrorMessage";

function MovieWatchButtons() {
  const { id } = useParams();
  const { data, error } = useGetmovieExternalSourceQuery(id || "");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setExternalSource(data.items));
    }
  }, [data, dispatch]);

  if (error) {
    return <ErrorMessage>Ошибка</ErrorMessage>;
  }

  return (
    <div className={styles.container}>
      {data?.items.map((item) => (
        <IconLink
          key={uuidv4()}
          url={item.url}
          logo={item.logoUrl}
          platform={item.platform}
        />
      ))}
    </div>
  );
}

export default MovieWatchButtons;
