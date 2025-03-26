import FilterInput from "@/features/filters/ui/FilterInput/FilterInput";
import styles from "./styles.module.css";
import FilterSection from "@/shared/ui/FilterSection/FilterSection";
import ButtonFilters from "@/shared/ui/button/ButtonFilters/ButtonFilters";
import Card from "@/shared/ui/Card/Card";
import { useGetSkillsQuery } from "@/entities/skills/api/skillsApi";
import { useGetSpecializatiQuery } from "@/entities/specializations/api/specializations";
import {
  setSpecialization,
  setRating,
  setComplexity,
  setSkills,
} from "@/entities/filters/slice/filtersSlice";
import { useAppDispatch } from "@/app/appStore";
import { complexityRanges, ratingRanges } from "./helpers";
import { useFilterActions } from "./bla";

const FilterList = () => {
  const dispatch = useAppDispatch();

  const { handleFilterChangee } = useFilterActions();

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

  const handleFilterChange = (filterType: string, value: string) => {
    if (filterType === "specialization") {
      dispatch(setSpecialization(value));
    } else if (filterType === "skills") {
      dispatch(setSkills(value.split(",")));
    } else if (filterType === "complexity") {
      dispatch(setComplexity(value.split(",")));
    } else if (filterType === "rating") {
      dispatch(setRating(value.split(",")));
    }
  };

  return (
    <Card>
      <div className={styles.filterContainer}>
        <FilterInput />
        <FilterSection showSeeAll={true} title="Специализация">
          {specializations.map((el, i) => (
            <ButtonFilters
              id={el.id}
              onClick={(id) =>
                handleFilterChangee("specialization", String(id))
              }
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
              onClick={() => handleFilterChange("complexity", values)}
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
