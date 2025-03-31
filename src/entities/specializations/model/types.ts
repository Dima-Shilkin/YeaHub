import {  ISpecialization } from "@/shared/interfaces";

export interface ParamsType {
  page?: number;
  limit?: number;
}

export interface SpecializationsApiResponse {
  data: ISpecialization[];
  total: number;
  page: number;
  limit: number;
}