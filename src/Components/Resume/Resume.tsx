import Experience from "../Experience/Experience";
import Header from "../Headers/Header/Header";
import Title from "../Title/Title";
import styles from "./resume.module.css";
import resumeData from "../../Data/resume.json";

const Resume: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header
        fullname={resumeData.header.fullname}
        role={resumeData.header.role}
        location={resumeData.header.location}
        phone={resumeData.header.location}
        aboutMe={resumeData.header.aboutMe}
      />
      <Title text="Experience" />
      {resumeData.experience.map((experience) => (
        <Experience
          duties={experience.duties}
          company={experience.company}
          role={experience.role}
          startDate={experience.startDate}
        />
      ))}
    </div>
  );
};

export default Resume;
