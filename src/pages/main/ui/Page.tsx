import { Container } from "@/shared/ui";
import styles from "./styles.module.css";
import { useGetQuestionsQuery } from "@/entities/questions/api/questionsApi";
import QuestionList from "@/widgets/QuestionList/QuestionList";
import Loader from "@/shared/ui/Loader/Loader";
import ReactPaginate from "react-paginate";
import ButtonPagination from "@/shared/ui/button/ButtonPagination/ButtonPagination";
import left from "@/shared/assets/icons/ArrowLeft.svg";
import right from "@/shared/assets/icons/ArrowRight.svg";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import Card from "@/shared/ui/Card/Card";
import ContentWrapper from "@/shared/ui/ContentWrapper/ContentWrapper";

import FilterList from "@/widgets/FilterList/FilterList";
import { setPage } from "@/entities/filters/slice/filtersSlice";

const Page = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.filters.page);

  const { data, isLoading } = useGetQuestionsQuery({ page: currentPage });

  const totalPage = Math.ceil((data?.total ?? 0) / 10);

  const handlePageChange = (selectedPage: { selected: number }) => {
    dispatch(setPage(selectedPage.selected + 1));
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
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
          />
        </Card>
        <FilterList />
      </ContentWrapper>
    </Container>
  );
};

export default Page;
