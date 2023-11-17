import Experience from "../Experience/Experience";
import Header from "../Headers/Header/Header";
import Title from "../Title/Title";
import Education from "../Education/Education";
import Skill from "../Skill/Skills";
import styles from "./resume.module.css";
import { IResume } from "../../Interfaces/IResume";

const Resume: React.FC<IResume> = (props) => {
  const { header, experience, education, skills } = props;
  return (
    <div className={styles.container}>
      <Header
        fullname={header.fullname}
        role={header.role}
        location={header.location}
        phone={header.location}
        aboutMe={header.aboutMe}
      />
      <Title text="Experience" />
      {experience.map((experience, index) => (
        <Experience
          key={index}
          duties={experience.duties}
          company={experience.company}
          role={experience.role}
          startDate={experience.startDate}
          endDate={experience.endDate}
        />
      ))}
      <Title text="Education" />
      {education.map((education, index) => (
        <Education
          key={index}
          company={education.company}
          city={education.city}
          startDate={education.startDate}
          description={education.description}
        />
      ))}
      <Title text="Skills" />
      {skills.map((skill, index) => (
        <Skill skill={skill} key={index} />
      ))}
    </div>
  );
};

export default Resume;
