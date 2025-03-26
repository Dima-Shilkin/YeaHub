import { Button } from "@/shared/ui";
import styles from "./styles.module.css";

interface FilterSectionProps {
  children: React.ReactNode;
  showSeeAll?: boolean;
  title: string;
}

const FilterSection = ({
  children,
  showSeeAll = false,
  title,
}: FilterSectionProps) => {
  return (
    <div>
      <p className={styles.specialization}>{title}</p>
      <div className={styles.specializationFilter}>{children}</div>
      {showSeeAll && <Button text="Посмотреть все" className={styles.blaaa} />}
    </div>
  );
};

export default FilterSection;
