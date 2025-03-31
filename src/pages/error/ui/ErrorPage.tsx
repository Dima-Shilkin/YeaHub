import { Button, Container } from "@/shared/ui";
import styles from "./styles.module.css";
import error from "@/shared/assets/icons/Error.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container>
      <div className={styles.errorPage}>
        <div className={styles.errorContent}>
          <p className={styles.errorNumber}>4</p>
          <img className={styles.errorImage} src={error} alt="sagsa" />
          <p className={styles.errorNumber}>4</p>
        </div>
        <p className={styles.errorMessage}>Страница не найдена</p>
        <Link to={"/"}>
          <Button className={styles.backBtn} text="Вернуться назад" />
        </Link>
      </div>
    </Container>
  );
};

export default ErrorPage;
