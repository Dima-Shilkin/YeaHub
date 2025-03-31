import { QuestionItem } from "@/entities/questions";
import styles from "./styles.module.css";
import { IQuestion } from "@/shared/interfaces";

interface QuestionListProps {
  question: IQuestion[];
}

const QuestionList = ({ question }: QuestionListProps) => {
  return (
    <>
      <h2 className={styles.questionTitle}>Вопросы</h2>
      <hr className={styles.border} />
      {question.map((q) => (
        <QuestionItem key={q.id} question={q} />
      ))}
    </>
  );
};

export default QuestionList;
