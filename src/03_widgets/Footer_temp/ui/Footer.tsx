import { Navigation } from "@/04_features/Navigation_temp";
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
