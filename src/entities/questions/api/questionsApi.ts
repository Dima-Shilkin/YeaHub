import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ParamsType, QuestionApiResponse } from '../model/types'
import { IQuestion } from '@/shared/interfaces'

const BASE_URL = import.meta.env.VITE_BASE_URL

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionApiResponse, ParamsType>({
      query: (params) => {
        const {
          page,
          rate,
          skills,
          specialization,
          complexity,
          keywords
        } = params || {}
        return {
          url: 'questions/public-questions',
          params: {page, rate, skills, complexity, keywords, specialization}
        }
      },
    }),
    getQuestionById: builder.query<IQuestion, number | string>({
      query: (id) => {
        return {
          url: `questions/public-questions/${id}`,
        }
      },
    }),
  }),
})

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionsApi