import { ISkill } from "../../Interfaces/ISkills";
import styles from "./skill.module.css";

const Skill: React.FC<ISkill> = (props) => {
  const { skill } = props;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.skill}>{skill}</div>
    </div>
  );
};

export default Skill;
