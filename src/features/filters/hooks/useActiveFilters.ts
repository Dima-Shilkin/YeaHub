import { useMemo } from "react";
import useQueryParams from "@/shared/hooks/useQueryParams";

export const useActiveFilters = () => {
  const { getQueryParamByKey } = useQueryParams();

  return useMemo(() => ({
    activeSkills: getQueryParamByKey("skills")?.split(",") || [],
    activeSpecializations: getQueryParamByKey("specialization")?.split(",") || [],
    activeComplexities: getQueryParamByKey("complexity")?.split(",") || [],
    activeRatings: getQueryParamByKey("rate")?.split(",") || [],
  }), [getQueryParamByKey]);
};