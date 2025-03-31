import styles from "./styles.module.css";

interface ButtonProps {
  id: number;
  text: string;
  img: string;
  onClick: (value: number) => void;
  className?: string;
}

const ButtonFilters = ({
  id,
  text,
  img,
  onClick,
  className,
  ...props
}: Partial<ButtonProps>) => {
  const handleClick = () => {
    if (onClick && id !== undefined) {
      onClick(id);
    }
  };

  return (
    <button
      className={`${className} ${styles.button} `}
      {...props}
      onClick={handleClick}
    >
      {img && <img className={styles.img} src={img} alt="" />}
      {text}
    </button>
  );
};

export default ButtonFilters;
