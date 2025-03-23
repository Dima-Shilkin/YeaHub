import styles from "./styles.module.css";

const FilterInput = () => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="Введите запрос..."
      />
      <svg
        className={styles.inputIcon}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.58464 2.29297C5.55756 2.29297 2.29297 5.55756 2.29297 9.58464C2.29297 13.6117 5.55756 16.8763 9.58464 16.8763C13.6117 16.8763 16.8763 13.6117 16.8763 9.58464C16.8763 5.55756 13.6117 2.29297 9.58464 2.29297ZM1.04297 9.58464C1.04297 4.8672 4.8672 1.04297 9.58464 1.04297C14.3021 1.04297 18.1263 4.8672 18.1263 9.58464C18.1263 11.7184 17.3439 13.6694 16.0504 15.1665L18.7766 17.8927C19.0207 18.1368 19.0207 18.5325 18.7766 18.7766C18.5325 19.0207 18.1368 19.0207 17.8927 18.7766L15.1665 16.0504C13.6694 17.3439 11.7184 18.1263 9.58464 18.1263C4.8672 18.1263 1.04297 14.3021 1.04297 9.58464Z"
          fill="#A3A3A3"
        />
      </svg>
    </div>
  );
};

export default FilterInput;
