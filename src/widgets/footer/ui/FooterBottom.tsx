import styles from "./styles.module.css";
import figma from "@/shared/assets/icons/Figma.svg";
import github from "@/shared/assets/icons/Github.svg";

const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
      <p className={styles.footerDescriptionSmall}>© 2024 YeaHub</p>
      <div className={styles.footerLinks}>
        <p className={styles.footerDescriptionSmall}>Документы</p>

        <img src={figma} alt="Logo Figma" />

        <img src={github} alt="Logo Github" />
      </div>
    </div>
  );
};

export default FooterBottom;
