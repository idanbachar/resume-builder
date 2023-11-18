import { MdEdit } from "react-icons/md";
import { IExperience, IExperiences } from "../../Interfaces/IExperience";
import Title from "../Title/Title";
import Experience from "./Experience";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CreateNewExperience } from "../../Services/Helpers";
import styles from "./experience.module.css";

const Experiences: React.FC<IExperiences> = (props) => {
  const { experience } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [experiences, setExperiences] = useState<IExperience[]>([
    ...experience,
  ]);

  return (
    <>
      <div className={styles.titleContainer}>
        <Title text="Experience" isEdit={isEdit} />
        <MdEdit
          className={"edit"}
          onClick={() => setIsEdit(!isEdit)}
          color={isEdit ? "red" : "black"}
        />
      </div>
      {experiences.map((experience, index) => (
        <Experience key={index} {...experience} isEdit={isEdit} />
      ))}
      {isEdit && (
        <div className={styles.plusMinusButtons}>
          <FaPlus
            className={"plusMinusButton"}
            style={{ color: "green" }}
            onClick={() => {
              const newExperience = { ...CreateNewExperience() };
              setExperiences([...experiences, newExperience]);
            }}
          />
          {experiences.length > 0 && (
            <FaMinus
              className={"plusMinusButton"}
              style={{ color: "red" }}
              onClick={() => {
                const allExperiences = [...experiences];
                allExperiences.pop();
                setExperiences([...allExperiences]);
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Experiences;
