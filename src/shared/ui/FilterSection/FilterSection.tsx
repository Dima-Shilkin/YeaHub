import { Button } from "@/shared/ui";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

interface FilterSectionProps {
  children: React.ReactNode;
  showSeeAll?: boolean;
  title: string;
  onToggleLimit?: (newLimit: number) => void;
}

const FilterSection = ({
  children,
  showSeeAll = false,
  title,
  onToggleLimit,
}: FilterSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (onToggleLimit) {
      onToggleLimit(isVisible ? 10 : 4);
    }
  }, [isVisible, onToggleLimit]);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <p className={styles.title}>{title}</p>
      <div className={styles.filterCard}>{children}</div>
      {showSeeAll && (
        <Button
          text={isVisible ? "Скрыть" : "Посмотреть все"}
          className={styles.showAll}
          onClick={handleToggle}
        />
      )}
    </div>
  );
};

export default FilterSection;
