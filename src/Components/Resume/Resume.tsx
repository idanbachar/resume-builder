import Experience from "../Experience/Experience";
import Header from "../Headers/Header/Header";
import Title from "../Title/Title";
import demoResume from "../../Data/demoResume.json";
import Education from "../Education/Education";
import Skill from "../Skill/Skills";
import styles from "./resume.module.css";

const Resume: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header
        fullname={demoResume.header.fullname}
        role={demoResume.header.role}
        location={demoResume.header.location}
        phone={demoResume.header.location}
        aboutMe={demoResume.header.aboutMe}
      />
      <Title text="Experience" />
      {demoResume.experience.map((experience, index) => (
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
      {demoResume.education.map((education, index) => (
        <Education
          key={index}
          company={education.company}
          city={education.city}
          startDate={education.startDate}
          description={education.description}
        />
      ))}
      <Title text="Skills" />
      {demoResume.skills.map((skill, index) => (
        <Skill skill={skill} key={index} />
      ))}
    </div>
  );
};

export default Resume;
