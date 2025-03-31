import styles from "./styles.module.css";
import arrowRight from "@/shared/assets/icons/ArrowRight.svg";
import { IQuestion } from "@/shared/interfaces";
import QuestionMeta from "@/shared/ui/QuestionMeta/QuestionMeta";
import { Link } from "react-router-dom";

interface QuestionContentProps {
  className: string;
  question: IQuestion;
}

const QuestionContent = ({ className, question }: QuestionContentProps) => {
  return (
    <div className={styles.fullQuestion + " " + className}>
      <QuestionMeta question={question} />
      {question.imageSrc && (
        <img
          className={styles.questionImg}
          src={question.imageSrc}
          alt="изменить тут"
        />
      )}

      <div
        className={styles.questionAnswer}
        dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
      />
      <Link to={`/question/${question.id}`}>
        <button className={styles.readMore}>
          Подробнее
          <img src={arrowRight} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default QuestionContent;
