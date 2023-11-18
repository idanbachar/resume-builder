import { MdEdit } from "react-icons/md";
import { ISkills } from "../../Interfaces/ISkills";
import { useState } from "react";
import Skill from "./Skill";
import Title from "../Title/Title";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CreateNewSkill } from "../../Services/Helpers";
import styles from "./skill.module.css";

const Skills: React.FC<ISkills> = (props) => {
  const { skills: skillElements } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [skills, setSkills] = useState<string[]>([...skillElements]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <Title text="Skills" isEdit={isEdit} />
        <MdEdit
          className={"edit"}
          onClick={() => setIsEdit(!isEdit)}
          color={isEdit ? "red" : "black"}
        />
      </div>
      <hr style={{ width: "100%" }} />
      <ol
        style={{
          border: isEdit ? "2px dashed black" : "none",
        }}
      >
        {skills.map((skill, index) => (
          <Skill skill={skill} isEdit={isEdit} key={index} />
        ))}
      </ol>
      {isEdit && (
        <div className={styles.plusMinusButtons}>
          <FaPlus
            className={"plusMinusButton"}
            style={{ color: "green" }}
            onClick={() => {
              const newSkill = CreateNewSkill();
              setSkills([...skills, newSkill]);
            }}
          />
          {skills.length > 0 && (
            <FaMinus
              className={"plusMinusButton"}
              style={{ color: "red" }}
              onClick={() => {
                const allSkills = [...skills];
                allSkills.pop();
                setSkills([...allSkills]);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;
