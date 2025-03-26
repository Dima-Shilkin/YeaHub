import Accordeon from "@/shared/assets/icons/Accordeon/Accordeon";
import styles from "./styles.module.css";
import { IQuestion } from "@/shared/interfaces";

interface QuestionHeaderProps {
  onClick: () => void;
  isOpen: boolean;
  question: IQuestion;
}

const QuestionHeader = ({ onClick, isOpen, question }: QuestionHeaderProps) => {
  if (!question) {
    return <div className={styles.error}>Ошибка: вопрос отсутствует</div>;
  }
  return (
    <div className={styles.questionWrapper}>
      <button onClick={onClick} className={styles.questionToggle}>
        <p className={styles.question}>{question.title}</p>
        <Accordeon isOpen={isOpen} />
      </button>
    </div>
  );
};

export default QuestionHeader;
