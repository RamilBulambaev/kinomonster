import styles from "./Button.module.css";
import cn from "classnames";

type ButtonStylesType = "standart" | "revers";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonStylesType;
}

function Button({ children, onClick, type = "standart" }: ButtonProps) {
  return (
    <button className={cn(styles.button, styles[type])} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
