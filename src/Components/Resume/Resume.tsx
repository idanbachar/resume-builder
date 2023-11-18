import Header from "../Headers/Header/Header";
import Skills from "../Skill/Skills";
import Experiences from "../Experience/Experiences";
import Educations from "../Education/Educations";
import { IResume } from "../../Interfaces/IResume";
import styles from "./resume.module.css";

const Resume: React.FC<IResume> = (props) => {
  const { header, experience, education, skills } = props;
  return (
    <div className={styles.container}>
      <Header {...header} />
      <Experiences experience={experience} />
      <Educations education={education} />
      <Skills skills={skills} />
    </div>
  );
};

export default Resume;
