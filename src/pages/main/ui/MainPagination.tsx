import ButtonPagination from "@/shared/ui/button/ButtonPagination/ButtonPagination";
import ReactPaginate from "react-paginate";
import left from "@/shared/assets/icons/ArrowLeft.svg";
import right from "@/shared/assets/icons/ArrowRight.svg";
import styles from "./styles.module.css";

interface MainPaginationProps {
  totalPage: number;
  handlePageChange: (selectedItem: { selected: number }) => void;
  currentPage: number;
}

const MainPagination = ({
  totalPage,
  handlePageChange,
  currentPage,
}: MainPaginationProps) => {
  return (
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
  );
};

export default MainPagination;
