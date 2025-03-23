import styles from "./styles.module.css";

interface AccordeonProps {
  isOpen: boolean;
}

const Accordeon = ({ isOpen }: AccordeonProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.accordeon} ${isOpen ? styles.rotate : ""}`}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#6A0BFF"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Accordeon;
