import { useAppDispatch } from "@/app/appStore";
import {
  setComplexity,
  setRating,
  setSkills,
  setSpecialization,
} from "@/entities/filters/slice/filtersSlice";
import useQueryParams from "@/features/filters/hooks/useQueryParams";

export function useFilterActions() {
  const dispatch = useAppDispatch();
  const { getQueryParamByKey, setQueryParam, removeQueryParamByKey } =
    useQueryParams();

  const handleFilterChange = (filterType: string, value: string) => {
    // Получаем текущие значения фильтров из URL
    const currentValue = getQueryParamByKey(filterType);
    const currentValuesArray = currentValue ? currentValue.split(",") : [];

    // Логика для обработки каждого типа фильтра
    const updateUrlAndStore = (updatedValues: string[], action: any) => {
      if (updatedValues.length === 0) {
        removeQueryParamByKey(filterType); // Удаляем параметр из URL, если нет значений
      } else {
        setQueryParam(filterType, updatedValues.join(",")); // Обновляем параметр в URL
      }

      // Обновляем Redux Store
      if (filterType === "specialization") {
        dispatch(setSpecialization(updatedValues.join(",")));
      } else if (filterType === "skills") {
        dispatch(setSkills(updatedValues));
      } else if (filterType === "complexity") {
        dispatch(setComplexity(updatedValues));
      } else if (filterType === "rating") {
        dispatch(setRating(updatedValues));
      }
    };

    if (filterType === "specialization") {
      // Специализация
      if (currentValue === value) {
        dispatch(setSpecialization("")); // Убираем из store
        removeQueryParamByKey("specialization"); // Убираем из URL
      } else {
        dispatch(setSpecialization(value)); // Добавляем в store
        setQueryParam("specialization", value); // Добавляем в URL
      }
    } else if (
      filterType === "skills" ||
      filterType === "complexity" ||
      filterType === "rating"
    ) {
      // Для skills, complexity, rating
      const updatedValues = currentValuesArray.includes(value)
        ? currentValuesArray.filter((item) => item !== value)
        : [...currentValuesArray, value];

      updateUrlAndStore(updatedValues, filterType);
    }
  };

  return { handleFilterChange };
}
