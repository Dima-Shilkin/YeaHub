import { Container } from "@/shared/ui";
import styles from "./styles.module.css";
import { useGetQuestionsQuery } from "@/entities/questions/api/questionsApi";
import ReactPaginate from "react-paginate";
import ButtonPagination from "@/shared/ui/button/ButtonPagination/ButtonPagination";
import left from "@/shared/assets/icons/ArrowLeft.svg";
import right from "@/shared/assets/icons/ArrowRight.svg";
import Card from "@/shared/ui/Card/Card";
import ContentWrapper from "@/shared/ui/ContentWrapper/ContentWrapper";
import useQueryParams from "@/shared/hooks/useQueryParams";
import { FilterList } from "@/widgets/filterList";
import { NotFound, QuestionList } from "@/widgets/questionList";
import MainSkeleton from "./MainSkeleton";

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
          <ReactPaginate
            pageCount={totalPage}
            pageRangeDisplayed={6}
            marginPagesDisplayed={1}
            previousLabel={<ButtonPagination img={left} />}
            nextLabel={<ButtonPagination img={right} />}
            breakLabel="..."
            activeClassName={styles.activePage}
            containerClassName={styles.pagination}
            disabledClassName={styles.disabled}
            onPageChange={handlePageChange}
            forcePage={currentPage > 0 ? currentPage - 1 : 0}
          />
        </Card>
        <FilterList />
      </ContentWrapper>
    </Container>
  );
};

export default MainPage;
