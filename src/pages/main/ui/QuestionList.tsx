import QuestionItem from "./QuestionItem";
import styles from "./styles.module.css";

const QuestionList = () => {
  return (
    <div className={styles.questionContainer}>
      <h2 className={styles.questionTitle}>Вопросы</h2>
      <hr className={styles.border} />
      {/* <Question /> */}
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
    </div>
  );
};

export default QuestionList;
