import {  ISpecialization } from "@/shared/interfaces";

export interface ParamsType {
  page?: number;
  limit?: number;
  specializations?: number | string;
}

export interface SpecializationsApiResponse {
  data: ISpecialization[];
  total: number;
  page: number;
  limit: number;
}