import FilterInput from "@/features/filters/ui/FilterInput/FilterInput";
import styles from "./styles.module.css";
import Card from "@/shared/ui/Card/Card";
import { useGetSkillsQuery } from "@/entities/skills/api/skillsApi";
import { complexityRanges, ratingRanges } from "../helpers/helpers";
import { useHendleClickFilters } from "@/features/filters/hooks/useHendleClickFilters";
import { useActiveFilters } from "@/features/filters/hooks/useActiveFilters";
import { useMemo, useState } from "react";
import {
  ComplexityFilter,
  RatingFilter,
  SkillsFilter,
  SpecializationFilter,
} from "@/entities/filters";
import FilterListSkeleton from "./FilterListSkeleton";
import { useGetSpecializationsQuery } from "@/entities/specializations/api/specializations";

const FilterList = () => {
  const [limit, setLimit] = useState(4);
  const { data, isLoading } = useGetSkillsQuery();
  const { data: spec, isLoading: isLoadingSpec } = useGetSpecializationsQuery({
    limit,
  });

  const {
    activeSkills,
    activeSpecializations,
    activeComplexities,
    activeRatings,
  } = useActiveFilters();

  const skills = useMemo(() => {
    return (
      data?.data.map((el) => ({
        id: el.id,
        title: el.title,
      })) || []
    );
  }, [data]);

  const specializations = useMemo(() => {
    return (
      spec?.data.map((el) => ({
        id: el.id,
        title: el.title,
      })) || []
    );
  }, [spec]);

  const handleToggleLimit = (newLimit: number) => {
    setLimit(newLimit);
  };

  const {
    handleClickSpecialization,
    handleClickSkill,
    handleClickRate,
    handleClickComplexity,
  } = useHendleClickFilters();

  if (isLoading || isLoadingSpec) return <FilterListSkeleton />;

  return (
    <Card>
      <div className={styles.filterContainer}>
        <FilterInput />
        <SpecializationFilter
          onToggleLimit={handleToggleLimit}
          specializations={specializations}
          activeSpecializations={activeSpecializations}
          handleClickSpecialization={handleClickSpecialization}
        />
        <SkillsFilter
          skills={skills}
          activeSkills={activeSkills}
          handleClickSkill={handleClickSkill}
        />
        <ComplexityFilter
          complexityRanges={complexityRanges}
          activeComplexities={activeComplexities}
          handleClickComplexity={handleClickComplexity}
        />
        <RatingFilter
          ratingRanges={ratingRanges}
          activeRatings={activeRatings}
          handleClickRate={handleClickRate}
        />
      </div>
    </Card>
  );
};

export default FilterList;
