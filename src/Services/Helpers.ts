import { IEducation } from "../Interfaces/IEducation";
import { IExperience } from "../Interfaces/IExperience";

export const CreateNewExperience = (): IExperience => {
  return {
    company: "Company name",
    role: "Role Name",
    duties: ["Duty1", "Duty2"],
    startDate: "Start date",
    endDate: "End date",
  };
};

export const CreateNewEducation = (): IEducation => {
  return {
    company: "Company name",
    city: "City name",
    startDate: "Start date",
    endDate: "End date",
    description: "Description",
  };
};

export const CreateNewSkill = (): string => {
  return "Skill";
};
