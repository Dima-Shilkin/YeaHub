import styles from "./styles.module.css";

interface ContentWrapperProps {
  children: React.ReactNode;
}
const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <div className={styles.contentWrapper}>{children}</div>;
};

export default ContentWrapper;
