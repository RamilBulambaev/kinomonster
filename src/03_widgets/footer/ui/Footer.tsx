import { Navigation } from "@/04_features/navigation";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Navigation />
      </div>
    </div>
  );
}

export default Footer;
