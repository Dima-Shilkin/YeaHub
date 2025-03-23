import styles from "./styles.module.css";

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
