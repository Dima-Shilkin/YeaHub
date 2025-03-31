import {  SkillApiResponse } from "../model/types";
import baseApi from '@/shared/api/baseApi';

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillApiResponse, void>({
      query: () => 'skills',
    }),
  }),
  overrideExisting: false,
});

export const { useGetSkillsQuery } = skillsApi;