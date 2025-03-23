import { Container } from "@/shared/ui";
import styles from "./styles.module.css";
import SocialLinks from "./SocialLinks";
import FooterDescription from "./FooterDescription";
import FooterBottom from "./FooterBottom";
import logoDescriptWhite from "@/shared/assets/icons/logoDescriptWhite.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <img
          className={styles.footerLogo}
          src={logoDescriptWhite}
          alt="Logo YeaHub"
        />
        <p className={styles.footerText}>
          Выбери, каким будет IT завтра,
          <br /> вместе с нами
        </p>
        <SocialLinks />
        <FooterDescription />
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
