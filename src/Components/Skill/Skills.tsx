import { MdEdit } from "react-icons/md";
import { ISkills } from "../../Interfaces/ISkills";
import styles from "./skill.module.css";
import { useState } from "react";
import Skill from "./Skill";

const Skills: React.FC<ISkills> = (props) => {
  const { skills } = props;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div
      className={styles.mainContainer}
      style={{
        border: isEdit ? "2px dashed black" : "none",
      }}
    >
      <MdEdit
        className={"edit"}
        onClick={() => setIsEdit(!isEdit)}
        color={isEdit ? "red" : "black"}
      />
      <ol>
        {skills.map((skill, index) => (
          <Skill skill={skill} isEdit={isEdit} key={index} />
        ))}
      </ol>
    </div>
  );
};

export default Skills;
