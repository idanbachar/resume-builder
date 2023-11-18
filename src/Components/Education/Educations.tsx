import { MdEdit } from "react-icons/md";
import { IEducation, IEducations } from "../../Interfaces/IEducation";
import Title from "../Title/Title";
import Education from "./Education";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CreateNewEducation } from "../../Services/Helpers";
import styles from "./education.module.css";

const Educations: React.FC<IEducations> = (props) => {
  const { education } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [educations, setEducations] = useState<IEducation[]>([...education]);

  return (
    <>
      <div className={styles.titleContainer}>
        <Title text="Education" isEdit={isEdit} />
        <MdEdit
          className={"edit"}
          onClick={() => setIsEdit(!isEdit)}
          color={isEdit ? "red" : "black"}
        />
      </div>
      <hr style={{ width: "100%" }} />
      {educations.map((education, index) => (
        <Education key={index} {...education} isEdit={isEdit} />
      ))}
      {isEdit && (
        <div className={styles.plusMinusButtons}>
          <FaPlus
            className={"plusMinusButton"}
            style={{ color: "green" }}
            onClick={() => {
              const newEducation = { ...CreateNewEducation() };
              setEducations([...educations, newEducation]);
            }}
          />
          {educations.length > 0 && (
            <FaMinus
              className={"plusMinusButton"}
              style={{ color: "red" }}
              onClick={() => {
                const allEducations = [...educations];
                allEducations.pop();
                setEducations([...allEducations]);
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Educations;
