import { IExperiences } from "../../Interfaces/IExperience";
import Experience from "./Experience";

const Experiences: React.FC<IExperiences> = (props) => {
  const { experience } = props;
  return (
    <>
      {experience.map((experience, index) => (
        <Experience key={index} {...experience} />
      ))}
    </>
  );
};

export default Experiences;
