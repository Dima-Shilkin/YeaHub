import styles from "./styles.module.css";
const NavLinks = () => {
  return (
    <nav>
      <ul className={styles.navLinks}>
        <li>База вопросов</li>
        <li>Тренажер</li>
      </ul>
    </nav>
  );
};

export default NavLinks;
