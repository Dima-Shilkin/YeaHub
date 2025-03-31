import useQueryParams from "@/shared/hooks/useQueryParams";

export const useHendleClickFilters = () => {
  const { getQueryParamByKey, setQueryParam, removeQueryParamByKey } =
    useQueryParams();

  const handleClickSpecialization = <T extends string | number>(id: T) => {
    const currentSpecialization = getQueryParamByKey("specialization");

    if (currentSpecialization === String(id)) {
      removeQueryParamByKey("specialization");
    } else {
      setQueryParam("specialization", id);
    }
  };

  const handleClickSkill = (id: number) => {
    const currentSkills = getQueryParamByKey("skills");

    let newSkills = currentSkills ? currentSkills.split(",") : [];

    if (newSkills.includes(String(id))) {
      newSkills = newSkills.filter((skill) => skill !== String(id));
    } else {
      newSkills.push(String(id));
    }

    if (newSkills.length > 0) {
      setQueryParam("skills", newSkills.join(","));
    } else {
      removeQueryParamByKey("skills");
    }
  };

  const handleClickRate = (id: string) => {
    const currentRate = getQueryParamByKey("rate");

    let newRate = currentRate ? currentRate.split(",") : [];

    if (newRate.includes(String(id))) {
      newRate = newRate.filter((rate) => rate !== String(id));
    } else {
      newRate.push(String(id));
    }

    if (newRate.length > 0) {
      setQueryParam("rate", newRate.join(","));
    } else {
      removeQueryParamByKey("rate");
    }
  };

  const handleClickComplexity = (values: string) => {
    const currentComplexity = getQueryParamByKey("complexity");

    let newComplexity = currentComplexity ? currentComplexity.split(",") : [];

    values.split(",").forEach((id) => {
      if (newComplexity.includes(id)) {
        newComplexity = newComplexity.filter((complexity) => complexity !== id);
      } else {
        newComplexity.push(id);
      }
    });

    if (newComplexity.length > 0) {
      setQueryParam("complexity", newComplexity.join(","));
    } else {
      removeQueryParamByKey("complexity");
    }
  };

  return {
    handleClickSpecialization,
    handleClickSkill,
    handleClickRate,
    handleClickComplexity,
  };
};
