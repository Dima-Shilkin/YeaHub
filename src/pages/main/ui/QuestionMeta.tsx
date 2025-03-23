import styles from "./styles.module.css";

const QuestionMeta = () => {
  return (
    <div className={styles.questionMeta}>
      <div className={styles.metaItem}>
        <p className={styles.metaLabel}>Рейтинг:</p>
        <p className={styles.metaValue}>4</p>
      </div>
      <div className={styles.metaItem}>
        <p className={styles.metaLabel}>Сложность:</p>
        <p className={styles.metaValue}>2</p>
      </div>
    </div>
  );
};

export default QuestionMeta;
