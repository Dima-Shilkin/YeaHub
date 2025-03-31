import baseApi from '@/shared/api/baseApi';
import { ParamsType, SpecializationsApiResponse } from '../model/types';

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<SpecializationsApiResponse, ParamsType>({
      query: (params) => {
        const { page, limit } = params;
        return {
          url: 'specializations',
          params: { page, limit },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpecializationsQuery } = specializationsApi;