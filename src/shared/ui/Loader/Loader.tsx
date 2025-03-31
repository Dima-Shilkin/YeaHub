import styles from "./styles.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
      <p className={styles.loaderText}>Идет загрузка...</p>
    </div>
  );
};

export default Loader;
