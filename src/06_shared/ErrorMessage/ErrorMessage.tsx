import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  children: string;
}

function ErrorMessage({ children }: ErrorMessageProps) {
  return <h2 className={styles.meesage}>{children}</h2>;
}

export default ErrorMessage;
