import { MdEdit } from "react-icons/md";
import styles from "./skill.module.css";
import { useState } from "react";
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
      />
    </li>
  );
};

export default Skill;
