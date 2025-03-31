import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import SearchIcon from "@/shared/assets/icons/SearchIcon/SearchIcon";
import useQueryParams from "@/shared/hooks/useQueryParams";
import useDebounce from "@/shared/hooks/useDebounce";

const FilterInput = () => {
  const [value, setValue] = useState("");
  const { setQueryParam, removeQueryParamByKey } = useQueryParams();
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue.trim() === "") {
      removeQueryParamByKey("keywords");
    } else {
      setQueryParam("keywords", debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className={styles.inputContainer}>
      <input
        value={value}
        onChange={handleChange}
        className={styles.input}
        type="text"
        placeholder="Введите запрос..."
      />
      <SearchIcon />
    </div>
  );
};

export default FilterInput;
