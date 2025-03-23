import styles from "./styles.module.css";

interface ButtonProps {
  text: string;
  className?: string;
}

const Button = ({ text, className, ...props }: ButtonProps) => {
  return (
    <button className={styles.button + " " + className} {...props}>
      {text}
    </button>
  );
};

export default Button;
