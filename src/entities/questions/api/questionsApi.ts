import baseApi from "@/shared/api/baseApi";
import { ParamsType, QuestionApiResponse } from "../model/types";
import { IQuestion } from "@/shared/interfaces";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionApiResponse, ParamsType>({
      query: (params) => {
        const { page, rate, skills, specialization, complexity, keywords } = params || {};
        return {
          url: 'questions/public-questions',
          params: { page, rate, skills, complexity, keywords, specialization },
        };
      },
    }),
    getQuestionById: builder.query<IQuestion, string>({
      query: (id) => ({
        url: `questions/public-questions/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionsApi;