import { useState } from "react";
import QuestionContent from "./QuestionContent";
import QuestionHeader from "./QuestionHeader";
import styles from "./styles.module.css";

const QuestionItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <QuestionHeader onClick={toggleContent} isOpen={isOpen} />
      <QuestionContent className={isOpen ? styles.openQuestion : ""} />
      <hr className={styles.border} />
    </div>
  );
};

export default QuestionItem;
