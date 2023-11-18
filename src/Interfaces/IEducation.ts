export interface IEducation {
  company: string;
  city: string;
  startDate: string;
  description: string;
  endDate?: string;
}

export interface IEducations {
  education: IEducation[];
}
