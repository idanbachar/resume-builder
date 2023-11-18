import Experience from "../Experience/Experience";
import Header from "../Headers/Header/Header";
import Title from "../Title/Title";
import Education from "../Education/Education";
import Skill from "../Skill/Skill";
import styles from "./resume.module.css";
import { IResume } from "../../Interfaces/IResume";
import Skills from "../Skill/Skills";
import Experiences from "../Experience/Experiences";
import Educations from "../Education/Educations";

const Resume: React.FC<IResume> = (props) => {
  const { header, experience, education, skills } = props;
  return (
    <div className={styles.container}>
      <Header {...header} />
      <Title text="Experience" />
      <Experiences experience={experience} />
      <Title text="Education" />
      <Educations education={education} />
      <Title text="Skills" />
      <Skills skills={skills} />
    </div>
  );
};

export default Resume;
