import { Button } from "@/shared/ui";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const LoginBtn = () => {
  return (
    <Link to="/login">
      <Button text="Вход" className={styles.loginBtn} />
    </Link>
  );
};

export default LoginBtn;
{
  /* Представим, что тут есть логика входа, поэтому засунул в фичу*/
}
