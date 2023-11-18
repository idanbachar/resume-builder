import { useState } from "react";
import { IExperience } from "../../Interfaces/IExperience";
import styles from "./experience.module.css";
import { MdEdit } from "react-icons/md";

const Experience: React.FC<IExperience & { isEdit: boolean }> = (props) => {
  const { company, role, duties, startDate, endDate, isEdit } = props;
  return (
    <div
      className={styles.mainContainer}
      style={{
        border: isEdit ? "2px dashed black" : "none",
      }}
    >
      <div className={styles.companyContainer}>
        <input
          type={"text"}
          className={`${styles.company} inputEditAvailable`}
          defaultValue={company}
          disabled={!isEdit}
        />
        <input
          type={"text"}
          className={`${styles.date} inputEditAvailable`}
          defaultValue={
            endDate ? `${startDate}-${endDate}` : `${startDate} - Present`
          }
          disabled={!isEdit}
        />
      </div>
      <input
        type={"text"}
        className={`${styles.role} inputEditAvailable`}
        defaultValue={role}
        disabled={!isEdit}
      />
      <div>
        <ul className={styles.dutiesContainer}>
          {duties.map((duty, index) => (
            <li key={index}>
              <input
                type={"text"}
                className={`${styles.duty} inputEditAvailable`}
                defaultValue={duty}
                disabled={!isEdit}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
