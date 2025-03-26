import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ParamsType, SkillApiResponse } from "../model/types";


const BASE_URL = import.meta.env.VITE_BASE_URL;

export const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSkills: builder.query<SkillApiResponse,ParamsType>({
      query: (params) => {
        const { page , limit, specializations } = params || {};
        return {
          url: "skills",
          params: { page, limit, specializations },
        };
      },
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi