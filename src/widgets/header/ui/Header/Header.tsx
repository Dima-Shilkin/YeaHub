import { Container } from "@/shared/ui";
import styles from "./styles.module.css";
import LoginBtn from "@/features/LoginBtn/LoginBtn";
import RegBtn from "@/features/RegBtn/RegBtn";
import NavLinks from "./NavLinks";
import FullLogo from "./FullLogo";
const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <div className={styles.header__left}>
            <FullLogo />
            <NavLinks />
          </div>
          <div className={styles.header__right}>
            <LoginBtn />
            <RegBtn />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
