import { IEducations } from "../../Interfaces/IEducation";
import Title from "../Title/Title";
import Education from "./Education";

const Educations: React.FC<IEducations> = (props) => {
  const { education } = props;
  return (
    <>
      <Title text="Education" />
      {education.map((education, index) => (
        <Education key={index} {...education} />
      ))}
    </>
  );
};

export default Educations;
