import { IQuestion } from "@/shared/interfaces";

export interface QuestionApiResponse {
  data: IQuestion[];
  total: number;
  page: number;
  limit: number;
}

export interface ParamsType {
  page?: number;
  keywords?: string[];
  specialization?: string;
  skills?: string[];
  complexity?: number[];
  rate?: number[];
}

export interface PaginationState {
  currentPage: number;
}