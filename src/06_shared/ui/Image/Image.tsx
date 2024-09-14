import styles from "./Image.module.css";

type ImageType = "banner" | "card" | "poster";

interface ImageProps {
  url: string;
  type: ImageType;
  alt: string;
}

function Image({ url, type, alt }: ImageProps) {
  return <img className={styles[type]} src={url} alt={alt} />;
}

export default Image;
