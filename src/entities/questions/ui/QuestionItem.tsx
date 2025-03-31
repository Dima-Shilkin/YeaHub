import { useState } from "react";
import styles from "./styles.module.css";
import QuestionHeader from "./QuestionHeader";
import QuestionContent from "./QuestionContent";
import { IQuestion } from "@/shared/interfaces";

interface QuestionItemProps {
  question: IQuestion;
}

const QuestionItem = ({ question }: QuestionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <QuestionHeader
        onClick={toggleContent}
        isOpen={isOpen}
        question={question}
      />
      <QuestionContent
        className={isOpen ? styles.openQuestion : ""}
        question={question}
      />
      <hr className={styles.border} />
    </div>
  );
};

export default QuestionItem;
