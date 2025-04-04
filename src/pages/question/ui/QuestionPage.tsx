import { useGetQuestionByIdQuery } from "@/entities/questions/api/questionsApi";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { Container } from "@/shared/ui";
import ContentWrapper from "@/shared/ui/ContentWrapper/ContentWrapper";
import Card from "@/shared/ui/Card/Card";
import FilterSection from "@/shared/ui/FilterSection/FilterSection";
import ButtonFilters from "@/shared/ui/button/ButtonFilters/ButtonFilters";
import QuestionMeta from "@/shared/ui/QuestionMeta/QuestionMeta";
import FullQuestion from "@/widgets/FullQuestion/FullQuestion";
import ButtonBack from "@/shared/ui/button/ButtonBack/ButtonBack";
import QuestionSkeleton from "./QuestionSkeleton";

const QuestionPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetQuestionByIdQuery(id!);

  if (isLoading) {
    return <QuestionSkeleton />;
  }

  if (!data) {
    return <div>Ошибка загрузки данных.</div>;
  }

  return (
    <Container>
      <ButtonBack />
      <ContentWrapper>
        <div className={styles.questionContainer}>
          <FullQuestion data={data} />
        </div>
        <Card>
          <div className={styles.filterContainer}>
            {data && <QuestionMeta question={data} />}
            <FilterSection title="Навыки">
              {data?.questionSkills.map(({ id, title }) => (
                <ButtonFilters key={id} text={title} />
              ))}
            </FilterSection>
            <FilterSection title="Ключевые слова">
              {data?.keywords.map((el, i) => (
                <p key={i} className={styles.keywords}>
                  #{el}
                </p>
              ))}
            </FilterSection>
          </div>
        </Card>
      </ContentWrapper>
    </Container>
  );
};

export default QuestionPage;
