import styles from "./Input.module.css";

interface InputProps {
  value: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Input({
  value,
  onChange,
  onBlur,
  onKeyDown,
  placeholder,
  type,
}: InputProps) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
