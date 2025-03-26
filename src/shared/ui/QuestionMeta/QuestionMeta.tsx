import { IQuestion } from "@/shared/interfaces";
import styles from "./styles.module.css";

interface QuestionMetaProps {
  question: IQuestion;
}
const QuestionMeta = ({ question }: QuestionMetaProps) => {
  return (
    <div className={styles.questionMeta}>
      <div className={styles.metaItem}>
        <p className={styles.metaLabel}>Рейтинг:</p>
        <p className={styles.metaValue}>{question.rate}</p>
      </div>
      <div className={styles.metaItem}>
        <p className={styles.metaLabel}>Сложность:</p>
        <p className={styles.metaValue}>{question.complexity}</p>
      </div>
    </div>
  );
};

export default QuestionMeta;
