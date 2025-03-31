import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {  SkillApiResponse } from "../model/types";


const BASE_URL = import.meta.env.VITE_BASE_URL;

export const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSkills: builder.query<SkillApiResponse,void>({
      query: () => {
        return {
          url: "skills",
        };
      },
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi