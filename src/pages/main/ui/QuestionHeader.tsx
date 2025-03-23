import Accordeon from "@/shared/assets/icons/Accordeon/Accordeon";
import styles from "./styles.module.css";

interface QuestionHeaderProps {
  onClick: () => void;
  isOpen: boolean;
}

const QuestionHeader = ({ onClick, isOpen }: QuestionHeaderProps) => {
  return (
    <div className={styles.questionWrapper}>
      <button onClick={onClick} className={styles.questionToggle}>
        <p className={styles.question}>
          Что такое Virtual DOM, и как он работает?
        </p>
        <Accordeon isOpen={isOpen} />
      </button>
    </div>
  );
};

export default QuestionHeader;
