import { Footer } from "@/widgets/footer";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";
import { Header } from "@/widgets/header";

const BaseLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default BaseLayout;
