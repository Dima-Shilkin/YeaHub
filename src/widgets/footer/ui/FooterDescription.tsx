import styles from "./styles.module.css";

const FooterDescription = () => {
  return (
    <p className={`${styles.footeDescription} ${styles.footerText}`}>
      YeaHub — это полностью открытый проект, призванный объединить и улучшить
      IT-сферу. Наш исходный код доступен для просмотра на GitHub. Дизайн
      проекта также открыт для ознакомления в Figma.
    </p>
  );
};

export default FooterDescription;
