import QuestionMeta from "./QuestionMeta";
import styles from "./styles.module.css";
import BLA from "@/shared/assets/icons/BLA.png";
import arrowRight from "@/shared/assets/icons/ArrowRight.svg";

interface QuestionContentProps {
  className: string;
}

const QuestionContent = ({ className }: QuestionContentProps) => {
  return (
    <div className={styles.fullQuestion + " " + className}>
      <QuestionMeta />
      <img className={styles.questionImg} src={BLA} alt="изменить тут" />
      <p className={styles.questionAnswer}>
        Virtual DOM (виртуальный DOM) — это программная концепция, используемая
        в разработке веб-приложений для повышения эффективности обновлений
        интерфейса. Это представление реального DOM (структуры документа,
        отображаемого в браузере) в памяти, которое позволяет оптимизировать
        изменения, минимизируя взаимодействие с реальным DOM, что ускоряет
        рендеринг и обновление страниц. При изменении данных приложения Virtual
        DOM сравнивает новое состояние с предыдущим и обновляет только те части
        реального DOM, которые изменились, вместо перерисовки всего документа.
      </p>
      <button className={styles.readMore}>
        Подробнее
        <img src={arrowRight} alt="" />
      </button>
    </div>
  );
};

export default QuestionContent;
