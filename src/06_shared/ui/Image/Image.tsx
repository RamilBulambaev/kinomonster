import styles from "./Image.module.css";

type ImageType = "banner" | "card" | "poster" | "movieImages";

interface ImageProps {
  url: string;
  type: ImageType;
  alt: string;
  onClick?: () => void;
}

function Image({ url, type, alt, onClick }: ImageProps) {
  return <img className={styles[type]} src={url} alt={alt} onClick={onClick} />;
}

export default Image;
