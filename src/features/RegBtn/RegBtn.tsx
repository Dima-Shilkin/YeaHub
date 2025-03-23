import { Button } from "@/shared/ui";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const RegBtn = () => {
  return (
    <Link to={"/registration"}>
      <Button text="Регистрация" className={styles.regBtn} />
    </Link>
  );
};

export default RegBtn;

{
  /* Представим, что тут есть логика регистрации, поэтому засунул в фичу*/
}
