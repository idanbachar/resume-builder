import { IExperience } from "../Interfaces/IExperience";

export const CreateNewExperience = (): IExperience => {
  return {
    company: "Company name",
    role: "Role",
    duties: ["duty1", "duty2"],
    startDate: "start date",
    endDate: "end date",
  };
};
