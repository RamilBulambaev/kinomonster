import { DerectionType, SkeletonType } from "@/06_shared/interface/type";
import styles from "./Skeleton.module.css";

interface SkeletonProps {
  type?: SkeletonType;
  count?: number;
  direction?: DerectionType;
}

function Skeleton({
  count = 1,
  type = "banner",
  direction = "row",
}: SkeletonProps) {
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column" ? styles.colunmList : styles.rowList
          }
        >
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "banner" ? styles.banner : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === "banner" ? styles.banner : styles.item}></li>
      )}
    </>
  );
}

export default Skeleton;
