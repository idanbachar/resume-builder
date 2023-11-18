import styles from "./skill.module.css";
import { ISkill } from "../../Interfaces/ISkills";

const Skill: React.FC<ISkill> = (props) => {
  const { skill, isEdit } = props;

  return (
    <li className={styles.mainContainer}>
      <input
        type={"text"}
        className={`${styles.skill} inputEditAvailable`}
        defaultValue={skill}
        disabled={!isEdit}
        maxLength={50}
      />
    </li>
  );
};

export default Skill;
