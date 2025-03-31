import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ParamsType, SpecializationsApiResponse } from '../model/types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const specializationsApi = createApi({
  reducerPath: "specializationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSpecializati: builder.query<SpecializationsApiResponse, ParamsType>({
      query: (params) => {
        const {page, limit} = params 
        return {
          url: "specializations",
          params: {page, limit},
        };
      },
    }),
  }),
});

export const { useGetSpecializatiQuery} = specializationsApi