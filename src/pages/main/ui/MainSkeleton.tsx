import Card from "@/shared/ui/Card/Card";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import ContentWrapper from "@/shared/ui/ContentWrapper/ContentWrapper";
import { Container } from "@/shared/ui";

const MainSkeleton = () => {
  return (
    <Container>
      <ContentWrapper>
        <Card>
          <Skeleton width="756px" height="40px" />
          <Skeleton width="100%" height="664px" />
          <Skeleton width="756px" height="40px" />
        </Card>

        <Card>
          <Skeleton width="344px" height="760px" />
        </Card>
      </ContentWrapper>
    </Container>
  );
};

export default MainSkeleton;
