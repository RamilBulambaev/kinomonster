import styles from "./IconLink.module.css";

interface IconLinkProps {
  url: string;
  logo: string;
  platform: string;
}

function IconLink({ url, logo, platform }: IconLinkProps) {
  return (
    <a
      className={styles.link}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={platform}
    >
      <img className={styles.img} src={logo} alt={platform} />
    </a>
  );
}

export default IconLink;
