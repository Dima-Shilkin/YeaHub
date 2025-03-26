import FilterInput from "@/features/filters/ui/FilterInput/FilterInput";
import styles from "./styles.module.css";
import FilterSection from "@/shared/ui/FilterSection/FilterSection";
import ButtonFilters from "@/shared/ui/button/ButtonFilters/ButtonFilters";
import Card from "@/shared/ui/Card/Card";
import { useGetSkillsQuery } from "@/entities/skills/api/skillsApi";
import { useGetSpecializatiQuery } from "@/entities/specializations/api/specializations";
import { useAppDispatch } from "@/app/appStore";
import { complexityRanges, ratingRanges } from "./helpers";
import { useFilterActions } from "./bla";

const FilterList = () => {
  const { handleFilterChange } = useFilterActions();

  const { data, isLoading, isError } = useGetSkillsQuery({ page: 1 });
  const {
    data: spec,
    isLoading: isLoadingSpec,
    isError: isErrorSpec,
  } = useGetSpecializatiQuery();

  const skills =
    data?.data.map((el) => ({
      id: el.id,
      title: el.title,
    })) || [];

  const specializations =
    spec?.data.map((el) => ({
      id: el.id,
      title: el.title,
    })) || [];

  return (
    <Card>
      <div className={styles.filterContainer}>
        <FilterInput />
        <FilterSection showSeeAll={true} title="Специализация">
          {specializations.map((el, i) => (
            <ButtonFilters
              id={el.id}
              onClick={(id) => handleFilterChange("specialization", String(id))}
              key={i}
              text={el.title}
            />
          ))}
        </FilterSection>
        <FilterSection showSeeAll={true} title="Навыки">
          {skills.map((el, i) => (
            <ButtonFilters
              id={el.id}
              key={i}
              text={el.title}
              onClick={(id) => handleFilterChange("skills", String(id))}
            />
          ))}
        </FilterSection>
        <FilterSection title="Уровень сложности">
          {complexityRanges.map(({ label, values }) => (
            <ButtonFilters
              key={label}
              text={label}
              onClick={() => handleFilterChange("complexity", values.join(","))}
            />
          ))}
        </FilterSection>
        <FilterSection title="Рейтинг">
          {ratingRanges.map(({ label, values }) => (
            <ButtonFilters
              key={label}
              text={label}
              onClick={() => handleFilterChange("rating", values)}
            />
          ))}
        </FilterSection>
      </div>
    </Card>
  );
};

export default FilterList;
