import Card from "@/shared/ui/Card/Card";
import styles from "./styles.module.css";
import { IQuestion } from "@/shared/interfaces";

interface IFullQuestion {
  data: IQuestion;
}

const FullQuestion = ({ data }: IFullQuestion) => {
  return (
    <>
      <Card>
        <div className={styles.questionWrapper}>
          {data?.imageSrc && (
            <img className={styles.questionImg} src={data?.imageSrc} alt="" />
          )}
          <div>
            <p className={styles.question}>{data?.title}</p>
            <div className={styles.questionDescription}>
              {data?.description}
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div>
          <p className={styles.questionAnswerTitle}>Краткий ответ</p>
          <div
            className={styles.questionAnswer}
            dangerouslySetInnerHTML={{ __html: data?.shortAnswer }}
          />
        </div>
      </Card>
      <Card>
        <div>
          <p className={styles.questionAnswerTitle}>Развернутый ответ</p>
          <div
            className={styles.questionAnswer}
            dangerouslySetInnerHTML={{ __html: data?.longAnswer }}
          />
        </div>
      </Card>
    </>
  );
};

export default FullQuestion;
