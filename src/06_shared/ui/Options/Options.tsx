import { ECollections } from "@/03_widgets/movies/model/types";
import styles from './Options.module.css'

interface OptionsProps {
  value: ECollections;
  children: string;
}

function Options({ value, children }: OptionsProps) {
  return (
    <option className={styles.option} value={value}>
      {children}
    </option>
  );
}

export default Options;
