import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "@/shared/assets/icons/logo.svg";
import logoDescriptBlack from "@/shared/assets/icons/logoDescriptBlack.svg";

const FullLogo = () => {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <img src={logo} alt="logo YeaHub" />
        <img src={logoDescriptBlack} alt="YeaHub" />
      </div>
    </Link>
  );
};

export default FullLogo;
