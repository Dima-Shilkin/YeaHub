import styles from "./styles.module.css";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, className, onClick, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={styles.button + " " + className}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
