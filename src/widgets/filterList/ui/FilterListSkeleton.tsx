import { Container } from "@/shared/ui";
import Card from "@/shared/ui/Card/Card";
import ContentWrapper from "@/shared/ui/ContentWrapper/ContentWrapper";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";

const FilterListSkeleton = () => {
  return (
    <Container>
      <ContentWrapper>
        <Card>
          <Skeleton width="344px" height="760px" />
        </Card>
      </ContentWrapper>
    </Container>
  );
};

export default FilterListSkeleton;
