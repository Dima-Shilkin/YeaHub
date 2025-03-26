import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SpecializationsApiResponse } from '../model/types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const specializationsApi = createApi({
  reducerPath: "specializationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSpecializati: builder.query<SpecializationsApiResponse, void>({
      query: () => {
        return {
          url: "specializations",
        };
      },
    }),
  }),
});

export const { useGetSpecializatiQuery} = specializationsApi