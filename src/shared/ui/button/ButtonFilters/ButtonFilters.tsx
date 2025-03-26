import styles from "./styles.module.css";

interface ButtonProps {
  id?: number;
  text?: string;
  img?: string;
  onClick: (value: number) => void;
}

const ButtonFilters = ({ id, text, img, onClick, ...props }: ButtonProps) => {
  const handleClick = () => {
    onClick(id!);
  };

  return (
    <button className={styles.button} {...props} onClick={handleClick}>
      {img && <img className={styles.img} src={img} alt="" />}
      {text}
    </button>
  );
};

export default ButtonFilters;
