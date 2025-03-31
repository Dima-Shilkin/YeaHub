import ButtonFilters from "@/shared/ui/button/ButtonFilters/ButtonFilters";
import FilterSection from "@/shared/ui/FilterSection/FilterSection";
import styles from "./styles.module.css";

interface ComplexityFilterProps {
  complexityRanges: { label: string; values: string }[];
  activeComplexities: string[];
  handleClickComplexity: (values: string) => void;
}

const ComplexityFilter = ({
  complexityRanges,
  activeComplexities,
  handleClickComplexity,
}: ComplexityFilterProps) => {
  return (
    <FilterSection title="Уровень сложности">
      {complexityRanges.map(({ label, values }) => {
        const valuesArray = values.split(",");
        const isActive = valuesArray.some((val) =>
          activeComplexities.includes(val)
        );
        return (
          <ButtonFilters
            key={label}
            text={label}
            onClick={() => handleClickComplexity(values)}
            className={isActive ? styles.active : ""}
          />
        );
      })}
    </FilterSection>
  );
};

export default ComplexityFilter;
