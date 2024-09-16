import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
