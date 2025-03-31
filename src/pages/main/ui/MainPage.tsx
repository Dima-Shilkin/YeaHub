import { Container } from "@/shared/ui";
import { useGetQuestionsQuery } from "@/entities/questions/api/questionsApi";
import Card from "@/shared/ui/Card/Card";
import ContentWrapper from "@/shared/ui/ContentWrapper/ContentWrapper";
import useQueryParams from "@/shared/hooks/useQueryParams";
import { FilterList } from "@/widgets/filterList";
import { NotFound, QuestionList } from "@/widgets/questionList";
import MainSkeleton from "./MainSkeleton";
import MainPagination from "./MainPagination";

const MainPage = () => {
  const { allQueryParams, setQueryParam } = useQueryParams();
  const currentPage = Number(allQueryParams.page);

  const { data, isLoading } = useGetQuestionsQuery(allQueryParams);

  if (data?.data.length === 0) {
    return <NotFound />;
  }

  const totalPage = Math.ceil((data?.total ?? 0) / 10);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setQueryParam("page", selectedPage.selected + 1);
  };

  if (isLoading) {
    return <MainSkeleton />;
  }

  return (
    <Container>
      <ContentWrapper>
        <Card>
          <QuestionList question={data?.data || []} />
          <MainPagination
            totalPage={totalPage}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </Card>
        <FilterList />
      </ContentWrapper>
    </Container>
  );
};

export default MainPage;
