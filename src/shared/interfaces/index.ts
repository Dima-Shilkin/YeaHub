export interface ISpecialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
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

export interface IQuestionSkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export interface IQuestion {
  imageSrc: string;
  id: number,
  title: string,
  content: string
  code: string,
  description: string,
  keywords: string[],
  longAnswer: string,
  shortAnswer: string,
  status: string,
  rate: number,
  complexity: string,
  createdAt: string,
  updatedAt: string,
  createdBy: string,
  updatedBy: string,
  specialization: string,
  questionSpecializations: ISpecialization[],
  questionSkills: IQuestionSkill[],
}

export interface IFilters {
  title: string;
  page: number;
  status: string;
  specialization: string;
  skillFilterMode: string;
  skills: string[];
  rate: string[];
  complexity: string[];
}
