import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import back from "@/shared/assets/icons/Back.svg";

const ButtonBack = () => {
  return (
    <Link to="/" className={styles.back}>
      <img src={back} alt="" />
      Назад
    </Link>
  );
};

export default ButtonBack;
