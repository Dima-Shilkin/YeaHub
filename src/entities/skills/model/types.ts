import { ISpecialization } from "@/shared/interfaces";

export interface ParamsType {
  page?: number;
  limit?: number;
  specializations?: number | string;
}

export interface ISkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedA: string;
  specializations: ISpecialization[]

}

export interface SkillApiResponse {
  data: ISkill[];
  total: number;
  page: number;
  limit: number;
}