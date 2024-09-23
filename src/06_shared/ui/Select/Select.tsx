import { ECollections } from "@/03_widgets/movies/model/types";
import styles from "./Select.module.css";
import Options from "../Options/Options";

interface SelectProps {
  optionsArray: string[];
  valueArray: ECollections[];
  name: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ optionsArray, name, id, onChange, valueArray }: SelectProps) {
  return (
    <select name={name} id={id} onChange={onChange} className={styles.select}>
      {optionsArray.map((item, index) => (
        <Options value={valueArray[index]}>{item}</Options>
      ))}
    </select>
  );
}

export default Select;
