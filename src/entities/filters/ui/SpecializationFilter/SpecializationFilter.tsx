import ButtonFilters from "@/shared/ui/button/ButtonFilters/ButtonFilters";
import FilterSection from "@/shared/ui/FilterSection/FilterSection";
import styles from "./styles.module.css";

interface SpecializationFilterProps {
  specializations: { id: number; title: string }[];
  activeSpecializations: string[];
  handleClickSpecialization: (id: number) => void;
  onToggleLimit?: (newLimit: number) => void;
}

const SpecializationFilter = ({
  specializations,
  activeSpecializations,
  handleClickSpecialization,
  onToggleLimit,
}: SpecializationFilterProps) => {
  return (
    <FilterSection
      showSeeAll={true}
      title="Специализация"
      onToggleLimit={onToggleLimit}
    >
      {specializations.map((el) => {
        const isActive = activeSpecializations.includes(String(el.id));
        return (
          <ButtonFilters
            id={el.id}
            key={el.id}
            text={el.title}
            onClick={() => handleClickSpecialization(el.id)}
            className={isActive ? styles.active : ""}
          />
        );
      })}
    </FilterSection>
  );
};

export default SpecializationFilter;
