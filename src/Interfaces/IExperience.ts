export interface IExperience {
  company: string;
  role: string;
  duties: string[];
  startDate: string;
  endDate?: string;
}

export interface IExperiences {
  experience: IExperience[];
}
