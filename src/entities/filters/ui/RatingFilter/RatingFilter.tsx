import ButtonFilters from "@/shared/ui/button/ButtonFilters/ButtonFilters";
import FilterSection from "@/shared/ui/FilterSection/FilterSection";
import styles from "./styles.module.css";

interface RatingFilterProps {
  ratingRanges: { label: string; values: string }[];
  activeRatings: string[];
  handleClickRate: (id: string) => void;
}

const RatingFilter = ({
  ratingRanges,
  activeRatings,
  handleClickRate,
}: RatingFilterProps) => {
  return (
    <FilterSection title="Рейтинг">
      {ratingRanges.map(({ label, values }) => {
        const isActive = activeRatings.includes(values);
        return (
          <ButtonFilters
            key={label}
            text={label}
            onClick={() => handleClickRate(values)}
            className={isActive ? styles.active : ""}
          />
        );
      })}
    </FilterSection>
  );
};

export default RatingFilter;
