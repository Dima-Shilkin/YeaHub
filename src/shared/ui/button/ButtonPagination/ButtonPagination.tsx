import styles from "./styles.module.css";

interface ButtonPaginationProps {
  img: string;
}

const ButtonPagination = ({ img }: ButtonPaginationProps) => {
  return (
    <button className={styles.arrow}>
      <img src={img} />
    </button>
  );
};

export default ButtonPagination;
