export interface IResume {
  header: {
    fullname: {
      firstname: string;
      lastname: string;
    };
    role: string;
    location: string;
    phone: string;
    aboutMe: string;
  };
  experience: {
    company: string;
    role: string;
    duties: string[];
    startDate: string;
    endDate?: string;
  }[];
  education: {
    company: string;
    city: string;
    description: string;
    startDate: string;
    endDate?: string;
  }[];
  skills: string[];
}
