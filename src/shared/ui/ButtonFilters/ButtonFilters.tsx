import styles from "./styles.module.css";

interface ButtonProps {
  text: string;
  img?: string;
}

const ButtonFilters = ({ text, img, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      <img src={img} alt="" />
      {text}
    </button>
  );
};

export default ButtonFilters;
