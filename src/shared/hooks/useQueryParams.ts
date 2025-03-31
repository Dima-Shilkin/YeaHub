import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export default function useQueryParams() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [allQueryParams, setAllQueryParams] = useState(Object.fromEntries(searchParams));
  const setQueryParam = (key :string, value: string | number) => {
    const params = new URLSearchParams(location.search);
    params.set(key, value.toString());
    setSearchParams(params.toString());
  };

  useEffect(() => {
    setAllQueryParams(Object.fromEntries(searchParams));

    if (!searchParams.has('page')) {
      setSearchParams({ ...Object.fromEntries(searchParams), page: '1' });
    }
  }, [searchParams, setSearchParams]);

  const getQueryParamByKey = (key: string) => {
    const params = new URLSearchParams(location.search);
    return params.get(key) || "";
  };

 

  const removeQueryParamByKey = (key: string) => {
    const params = new URLSearchParams(location.search);
    params.delete(key);
    setSearchParams(params.toString());
  };

  const clearAllQueryParams = () => {
    setSearchParams("");
  };

  return {
    allQueryParams,
    getQueryParamByKey,
    setQueryParam,
    removeQueryParamByKey,
    clearAllQueryParams
  };
}