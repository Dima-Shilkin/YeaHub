import Card from "@/shared/ui/Card/Card";
import styles from "./styles.module.css";
import useQueryParams from "@/shared/hooks/useQueryParams";

const NotFound = () => {
  const { clearAllQueryParams } = useQueryParams();
  return (
    <div className={styles.notFoundWrapper}>
      <Card>
        <p>
          К сожалению повашему запросу ничего не найдено. Попробуйте изменить
          запрос или воспользоваться другими фильтрами
        </p>
        <button
          onClick={() => {
            clearAllQueryParams();
          }}
          className={styles.resetFilter}
        >
          Сбросить фильтр
        </button>
      </Card>
    </div>
  );
};

export default NotFound;
