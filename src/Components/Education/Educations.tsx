import { IEducations } from "../../Interfaces/IEducation";
import Education from "./Education";

const Educations: React.FC<IEducations> = (props) => {
  const { education } = props;
  return (
    <>
      {education.map((education, index) => (
        <Education key={index} {...education} />
      ))}
    </>
  );
};

export default Educations;
