import { Container } from "@/shared/ui";
import Card from "@/shared/ui/Card/Card";
import ContentWrapper from "@/shared/ui/ContentWrapper/ContentWrapper";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import styles from "./styles.module.css";

const QuestionSkeleton = () => {
  return (
    <Container>
      <div className={styles.skeleton}>
        <ContentWrapper>
          <Card>
            <Skeleton width="756px" height="100px" />
            <Skeleton width="756px" height="300px" />
            <Skeleton width="756px" height="30px" />
          </Card>
          <Card>
            <Skeleton width="344px" height="223px" />
          </Card>
        </ContentWrapper>
      </div>
    </Container>
  );
};

export default QuestionSkeleton;
